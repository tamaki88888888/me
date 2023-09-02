import CursorChaser from "@/components/ui-components/CursorChaser";
import MouseStalker from "@/components/ui-components/CursorChaserReactSpring";
import "@/styles/globals.css";
import { AppProps } from "../../node_modules/next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MouseStalker />
      <Component {...pageProps} />
    </>
  );
}
