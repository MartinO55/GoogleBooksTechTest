import { useState } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import FontWrapper from "./containers/FontWrapper";
import CardHolder from "./components/CardHolder/CardHolder.jsx";

function App() {
  const [searchBooks, setSearchBooks] = useState("");

  const handleBookSearchChanges = (query) => {
    setSearchBooks(query);
  };

  return (
    <>
      <FontWrapper>
        <Header />
        <SearchBar value={searchBooks} onSubmit={handleBookSearchChanges} />

        <CardHolder query={searchBooks} />
      </FontWrapper>
    </>
  );
}

export default App;
