import Footer from "@/components/domain-components/Footer";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./Layout/index";
import MenuItem from "@/components/ui-components/MenuItem";
import { getAllNotes } from "@/lib/notes";
import { NoteMeta } from "@/types/note";

export type MenuItemType = {
  color: string;
  iconName: React.ComponentProps<typeof IonIcon>["name"];
  label: string;
  href?: string;
};

const menuItems: MenuItemType[] = [
  { color: "#FF5733", iconName: "home-outline", label: "Home" },
  { color: "#33FF57", iconName: "settings-outline", label: "About" },
  { color: "#3357FF", iconName: "mail-outline", label: "Services" },
  { color: "#FF33A1", iconName: "key-outline", label: "Portfolio" },
  { color: "#FFC300", iconName: "camera-outline", label: "Contact" },
  { color: "#DAF7A6", iconName: "newspaper-outline", label: "Blog" },
  { color: "#900C3F", iconName: "person-outline", label: "Careers" },
  { color: "#ffffff", iconName: "logo-github", label: "GitHub", href: "https://github.com/tamaki88888888" },
];

type Props = {
  notes: NoteMeta[];
};

export default function Home({ notes = [] }: Props) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [activePage, setActivePage] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  const handlePageSelect = (label: string) => {
    setActivePage(label);
    setTimeout(() => {
      setShowContent(true);
      if (label === "Blog") {
        window.history.pushState({}, "", "/notes");
      }
    }, 700);
  };

  const handleBackToMenu = () => {
    setShowContent(false);
    setIsReturning(true);
    window.history.pushState({}, "", "/");

    setTimeout(() => {
      setActivePage(null);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsReturning(false);
          setTimeout(() => setIsClicked(true), 50);
        });
      });
    }, 350);
  };

  const handleNoteClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setShowContent(false);
    setTimeout(() => {
      router.push(`/notes/${slug}`);
    }, 300);
  };

  return (
    <div>
      <Footer />
      <Layout>
        <div className="flex items-center justify-center w-screen h-screen">
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
            {!activePage && (
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
                  "transition-all",
                  "duration-500"
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
            )}

            {menuItems.map((item, index) => (
              <MenuItem
                isClicked={isClicked}
                key={index}
                index={index}
                color={item.color}
                label={item.label}
                iconName={item.iconName}
                href={item.href}
                activePage={activePage}
                isReturning={isReturning}
                onPageSelect={handlePageSelect}
                onBack={handleBackToMenu}
              />
            ))}
          </ul>

          {activePage === "Blog" && (
            <div
              className="fixed left-0 right-0 px-8 max-w-lg mx-auto transition-all duration-300"
              style={{
                top: "140px",
                bottom: "40px",
                overflowY: "auto",
              }}
            >
              <div
                className="flex flex-col gap-4 transition-all duration-300"
                style={{
                  opacity: showContent ? 1 : 0,
                  transform: showContent ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {notes.map((note) => (
                  <a
                    key={note.slug}
                    href={`/notes/${note.slug}`}
                    onClick={(e) => handleNoteClick(e, note.slug)}
                    className="flex justify-between items-center py-3 border-b border-white/20 text-white no-underline hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    <span className="text-sm">{note.title}</span>
                    <span className="text-xs text-white/50">{note.date}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const notes = getAllNotes();
  return { props: { notes } };
};
