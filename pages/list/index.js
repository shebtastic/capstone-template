function EntryList({ storage }) {
  return (
    <ul>
      {storage?.entries?.map((entry) => (
        <li>{entry.name}</li>
      ))}
    </ul>
  );
}

export default EntryList;
