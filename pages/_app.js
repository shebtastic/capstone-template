import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import initialState from "../db.json";

function MyApp({ Component, pageProps }) {
  const [storage, setStorage] = useLocalStorage("flamingo-capstone", {});
  const [books, setBooks] = useLocalStorage("flamingo-books", initialState);

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        storage={storage}
        setStorage={setStorage}
        books={books}
        setBooks={setBooks}
      />
    </>
  );
}

export default MyApp;
