import React, { useState, useEffect } from "react";
import "./App.css";
import reactDom from "react-dom";
import Game from "./Game";
import game from "./Game";

let cors_api_url = "https://afternoon-ridge-35420.herokuapp.com/";
//let api = "https://cors-demo.glitch.me/";
const FEATURED_API = "https://bit.ly/TeaserTask";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  //const [searchCol, setSearchCol] = useState(["Academic"]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setisLoading(true);
    const fetchGames = async () => {
      const res = await fetch(cors_api_url + FEATURED_API);
      const result = await res.json();
      console.log(result);

      setGames(result);
    };

    fetchGames();
    setisLoading(false);
  }, []);

  if (isLoading === true) {
    return <p>Loading</p>;
  }

  /*function search(rows) {
    return rows.filter((row) =>
      searchCol.some(
        (aca) =>
          row[aca].toString().toLowerCase().indexOf(searchValue.toLowerCase()) >
          -1
      )
    );
  }*/

  /*useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  <button
            onClick={() => {
              filter;
            }}
          >
            Filter by groups and level
          </button>

          const filter = games.filter((gamee) => {
    return gamee.Group.toLowerCase();
  });


  <input
            type="button"
            value="filter"
            placeholder="Filter by groups and level"
            className="search"
            onClick={(e) => setSearchTerm(e.target.value)}
          />

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.results);
      });
  };
  onClick={(e) => {
              games.filter((gamer) => {
                if (gamer.Group.toLowerCase().includes("academic")) {
                  return gamer;
                }
              });
            }}
  */

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (search) {
      games.filter((gamee) => {
        return gamee.Topic.toLowerCase().includes(search.toLowerCase());
      });

      setSearch("");
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const filterGames = games.filter((gamee) => {
    return (
      (gamee.Group.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gamee.Level.toLowerCase().includes(searchTerm.toLowerCase())) &&
      gamee.Topic.toLowerCase().includes(search.toLowerCase())
    );
  });

  /*const filterGames = games.filter((gamee) => {
    gamee.Group.toLowerCase();
    gamee.Topic.toLowerCase().includes(search.toLowerCase());
  });*/

  return (
    <main>
      <div className="App">
        <h1>9ijakids Game List</h1>
        <header>
          <input
            type="search"
            placeholder="Filter by groups and level"
            className="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <form onSubmit={handleOnSubmit}>
            <input
              type="search"
              placeholder="Search by topic"
              className="search"
              value={search}
              onChange={handleOnChange}
            />
          </form>
        </header>

        <div className="App app-con">
          {filterGames.map((game) => (
            <Game key={game.id} {...game} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
