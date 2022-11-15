import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [storage, setStorage] = useLocalStorage("flamingo-capstone", {})

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} storage={storage} setStorage={setStorage} />
    </>
  );
}

export default MyApp;
