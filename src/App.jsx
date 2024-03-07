import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SingleDog from './Components/SingleDog';
import Login from './Components/Login';
import FavouritesPage from './Components/FavouritesPage';
import { useState } from "react";

function App() {

  const [favourites, setFavourites] = useState([])
  

  const addToFavourites = (dog) => {
    console.log('Updated favourites:', favourites)

    const isAlreadyInFavourites = favourites.filter((favourite) => favourite.id === dog.id).length > 0

    if (!isAlreadyInFavourites) {
      setFavourites((currentFavourites) => [...currentFavourites, dog])
      console.log('Dog added to favourites:', dog)
    } else {
      console.log('Dog is already in favourites:', dog)
    }
  }

  const removeFromFavourites = (dogToRemove) => {
    setFavourites((Favourites) =>
      Favourites.filter((dog) => dog.id !== dogToRemove.id)
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home favourites={favourites} addToFavourites={addToFavourites} />} />
          <Route path="/" element={<Login />} />
          <Route path="/:name" element={<SingleDog />} />
          <Route path="/favourites" element={<FavouritesPage favourites={favourites} removeFromFavourites={removeFromFavourites} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

