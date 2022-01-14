interface Props {
  searchText: string;
  setSearchText: (search: string) => void;
}

const Header = ({ searchText, setSearchText }: Props) => {
  return (
    <header className="header">
      <h1>Meetup</h1>
      <input
        type="text"
        placeholder="Search for meetup..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </header>
  );
};

export default Header;
