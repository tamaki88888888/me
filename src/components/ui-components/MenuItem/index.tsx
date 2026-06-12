import React from "react";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";

type Props = {
  index: number;
  color: string;
  label: string;
  iconName: React.ComponentProps<typeof IonIcon>["name"];
  isClicked: boolean;
};

const MenuItem: React.FC<Props> = ({ iconName, index, color, isClicked }) => {
  const rotation = (360 / 8) * index;
  return (
    <li
      className={clsx(
        "absolute",
        "left-0",
        "list-none",
        "transition",
        "translate-x-[100px]",
        "duration-500",
        `delay-${index * 100}`
      )}
      style={{
        transform: isClicked
          ? `rotate(${rotation}deg) translateX(100px)`
          : "rotate(0deg) translateX(100px)", // tailwindのrotateが正しく解釈されないのはどうして？
      }}
    >
      <a
        href="#"
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "w-[60px]",
          "h-[60px]",
          "no-underline",
          "text-[22px]",
          "border-[50%]",
          "transition",
          "transition-[1s]",
          !isClicked ? "color-[transparent]" : `color-[${color}]`,
          "transition-delay-[0.5s]",
          "text-[white]"
        )}
        style={{
          transform: `rotate(${rotation * -1}deg)`,
          filter: `drop-shadow(0 0 5px ${color})`,
        }}
      >
        <IonIcon name={iconName} />
      </a>
    </li>
  );
};

export default MenuItem;

// filter: drop-shadow(0 0 2px var(--clr));
