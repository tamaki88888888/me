import React from "react";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";

type Props = {
  index: number;
  color: string;
  label: string;
  href?: string;
  iconName: React.ComponentProps<typeof IonIcon>["name"];
  isClicked: boolean;
  activePage: string | null;
  onPageSelect: (label: string) => void;
};

const MenuItem: React.FC<Props> = ({
  iconName,
  index,
  color,
  isClicked,
  href = "#",
  label,
  activePage,
  onPageSelect,
}) => {
  const rotation = (360 / 8) * index;
  const isActive = activePage === label;
  const otherActive = activePage !== null && !isActive;

  const handleClick = (e: React.MouseEvent) => {
    if (label === "Blog") {
      e.preventDefault();
      onPageSelect(label);
      return;
    }
  };

  return (
    <li
      className={clsx("absolute", "list-none", "transition-all")}
      style={{
        top: "50%",
        left: "50%",
        marginLeft: "-30px",
        marginTop: "-30px",
        transform: isActive
          ? "translateY(calc(-50vh + 80px))"
          : isClicked
          ? `rotate(${rotation}deg) translateX(100px)`
          : "rotate(0deg) translateX(100px)",
        opacity: isActive ? 1 : otherActive ? 0 : isClicked ? 1 : 0,
        zIndex: isActive ? 200 : undefined,
        transitionDuration: isActive || otherActive ? "500ms" : "500ms",
        transitionDelay:
          isActive || otherActive ? "0ms" : `${index * 100}ms`,
      }}
    >
      <a
        href={href}
        target={label !== "Blog" ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={handleClick}
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "w-[60px]",
          "h-[60px]",
          "no-underline",
          "text-[22px]",
          "rounded-full",
          "cursor-pointer",
          "text-[white]"
        )}
        style={{
          transform: isActive ? "none" : `rotate(${rotation * -1}deg)`,
          filter: `drop-shadow(0 0 5px ${color})`,
        }}
      >
        <IonIcon name={iconName} />
      </a>
    </li>
  );
};

export default MenuItem;
