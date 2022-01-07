interface Props {
  searchText: string;
  //setFunctions in useState hook always returns void.
  setSearchText: (search: string) => void;
}

//receive searchString data from App component using props.
//Header impelements Props interface
const Header = ({ searchText, setSearchText }: Props) => {
  return (
    <header>
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
