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
  isReturning: boolean;
  onPageSelect: (label: string) => void;
  onBack?: () => void;
};

const MenuItem: React.FC<Props> = ({
  iconName,
  index,
  color,
  isClicked,
  href = "#",
  label,
  activePage,
  isReturning,
  onPageSelect,
  onBack,
}) => {
  const rotation = (360 / 8) * index;
  const isActive = activePage === label;
  const otherActive = activePage !== null && !isActive;

  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
      onBack?.();
      return;
    }
    if (label === "Blog") {
      e.preventDefault();
      onPageSelect(label);
      return;
    }
  };

  const getStyle = (): React.CSSProperties => {
    const base = { top: "50%", left: "50%", marginLeft: "-30px", marginTop: "-30px" };

    // 戻りアニメーション中: アクティブアイコンをその場でフェードアウト
    if (isActive && isReturning) {
      return { ...base, transform: "translateY(calc(-50vh + 80px))", opacity: 0, zIndex: 200, transitionDuration: "300ms", transitionDelay: "0ms" };
    }
    // 戻りアニメーション中: 他のアイコンは即座に closed 位置に (invisible)
    if (!isActive && isReturning) {
      return { ...base, transform: "rotate(0deg) translateX(100px)", opacity: 0, transitionDuration: "0ms", transitionDelay: "0ms" };
    }
    // アクティブ状態: 上部中央へ
    if (isActive) {
      return { ...base, transform: "translateY(calc(-50vh + 80px))", opacity: 1, zIndex: 200, transitionDuration: "500ms", transitionDelay: "0ms" };
    }
    // 他がアクティブ: フェードアウト
    if (otherActive) {
      return { ...base, transform: `rotate(${rotation}deg) translateX(100px)`, opacity: 0, transitionDuration: "500ms", transitionDelay: "0ms" };
    }
    // 通常状態
    return { ...base, transform: isClicked ? `rotate(${rotation}deg) translateX(100px)` : "rotate(0deg) translateX(100px)", opacity: isClicked ? 1 : 0, transitionDuration: "500ms", transitionDelay: `${index * 100}ms` };
  };

  return (
    <li className={clsx("absolute", "list-none", "transition-all")} style={getStyle()}>
      <a
        href={href}
        target={label !== "Blog" ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={handleClick}
        className={clsx(
          "flex", "items-center", "justify-center",
          "w-[60px]", "h-[60px]",
          "no-underline", "text-[22px]", "rounded-full", "cursor-pointer", "text-[white]"
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
