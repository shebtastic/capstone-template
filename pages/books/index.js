function BookListPage({ books, setBooks }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    setBooks((oldBooks) => [
      ...oldBooks,
      {
        name: data["new-book"],
        isBookmarked: false,
      },
    ]);
  }

  return (
    <>
      {JSON.stringify(books)}
      <form onSubmit={handleSubmit}>
        <input name="new-book" type="text" />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default BookListPage;
