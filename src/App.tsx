import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/meetupGrid/Grid';

function App() {
  const [searchString, setSearchString] = useState<string>('');
  return (
    <div className="component">
      <Header searchText={searchString} setSearchText={setSearchString} />
      <Grid />
    </div>
  );
}

export default App;
