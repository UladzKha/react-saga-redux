import React from 'react';
import Search from './containers/Search'
import Video from './containers/Video'
import Loading from './containers/Loading'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Video />
      <Search />
    </>
  );
}

export default App;
