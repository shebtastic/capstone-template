import SampleForm from "../components/SampleForm";

export default function Home({ storage, setStorage }) {
  function addEntry(data) {
    setStorage((oldStorage) => {
      return {
        ...oldStorage,
        entries: [
          ...(oldStorage.entries ?? []),
          data,
        ]
      }
    })
  }

  return (
    <>
      <h1>Hello Flamingos! 🦩</h1>
      <SampleForm onSubmit={addEntry} />
      <p>{JSON.stringify(storage)}</p>
    </>
  );
}
