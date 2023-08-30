import CursorChaser from "@/components/ui-components/CursorChaser";
import "@/styles/globals.css";
import { AppProps } from "../../node_modules/next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CursorChaser title="string" />
      <Component {...pageProps} />
    </>
  );
}
