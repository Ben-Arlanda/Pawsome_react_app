import React from "react";
import './FavouritesPage.css'


function FavouritesPage({ favourites, removeFromFavourites }) {
  return (
    <div className="main-dog-page-grid">
      <h2 className="favourite-header">Your Favourites Dog Breeds</h2>
      {favourites && favourites.length > 0 ? (
        favourites.map((dog) => (
          <div key={dog.id}>
            <article className="main-dog-page">
            <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Image of ${dog.name}`} />
            <h3 className="dog-name">{dog.name}</h3>
            </article>
            <button className="favourite-btn" onClick={() => removeFromFavourites(dog)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favourites yet.</p>
      )}
    </div>
  );
}

export default FavouritesPage;

