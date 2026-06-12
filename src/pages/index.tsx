import Footer from "@/components/domain-components/Footer";
import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import PageContainer from "@/components/ui-components/PageContainer/index";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Layout from "./Layout/index";
import MenuItem from "@/components/ui-components/MenuItem";

const title = "@koukoukokoko";

export type MenuItemType = {
  color: string;
  iconName: React.ComponentProps<typeof IonIcon>["name"];
  label: string;
};

const menuItems: MenuItemType[] = [
  { color: "#FF5733", iconName: "home-outline", label: "Home" },
  { color: "#33FF57", iconName: "settings-outline", label: "About" },
  { color: "#3357FF", iconName: "mail-outline", label: "Services" },
  { color: "#FF33A1", iconName: "key-outline", label: "Portfolio" },
  { color: "#FFC300", iconName: "camera-outline", label: "Contact" },
  { color: "#DAF7A6", iconName: "game-controller-outline", label: "Blog" },
  { color: "#900C3F", iconName: "person-outline", label: "Careers" },
  { color: "#581845", iconName: "videocam-outline", label: "Support" },
];

export default function Home() {
  const [typeTitle, setTypeTitle] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypeTitle(title.slice(0, typeTitle.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [typeTitle]);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Footer />
      <Layout>
        <ul
          className={clsx(
            "relative",
            "w-[260px]",
            "h-[260px]",
            "flex",
            "items-center",
            "justify-center"
          )}
        >
          <div
            className={clsx(
              "absolute",
              "w-[60px]",
              "h-[60px]",
              "flex",
              "items-center",
              "justify-center",
              "z-[100]",
              "rounded-full",
              "cursor-pointer",
              "transition",
              "transition-[1.5s]"
            )}
            style={{
              transform: isClicked ? "rotate(315deg)" : "rotate(0deg)",
            }}
          >
            <IonIcon
              onClick={() => setIsClicked((prev) => !prev)}
              name="add-outline"
            />
          </div>

          {menuItems.map((item, index) => (
            <MenuItem
              isClicked={isClicked}
              key={index}
              index={index}
              color={item.color}
              label={item.label}
              iconName={item.iconName}
            />
          ))}
        </ul>
      </Layout>
    </div>
  );
}
