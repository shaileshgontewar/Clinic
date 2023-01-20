import "../styles/layout.css";
import "@/styles/globals.css";
import MainLayout from "@/src/components/layout/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <div className="main">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
