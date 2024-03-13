import React from "react";
import './FavouritesPage.css'
import { Link } from 'react-router-dom';
import bannerImage from '/images/front-view-beautiful-dog-with-copy-space_23-2148786562.png'
import pawImage from '/images/2.png'


function FavouritesPage({ favourites, removeFromFavourites }) {
  return (
    <><div className='content-container'>

      <div className='header-container'>
        <h1 className='main-header'>Pawsome</h1>
        <img className='paw-image' src={pawImage} alt="" />
      </div>

      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favourites" className="nav-link">Favourites</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>

      <img className='main-banner' src={bannerImage} alt="" />

        <h2 className="favourite-header">Your Favourite Dog Breeds</h2>
    </div>
    <div className="main-dog-page-grid">

        {favourites && favourites.length > 0 ? (
          favourites.map((dog) => (
            <div key={dog.id}>
              <Link to={`/${dog.name}`} key={dog.id}>
                <article className="main-dog-page">
                  <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Image of ${dog.name}`} />
                  <h3 className="dog-name">{dog.name}</h3>
                </article>
              </Link>
              <button className="favourite-btn" onClick={() => removeFromFavourites(dog)}>Remove from Favourites</button>
            </div>
          ))
        ) : (
          <p className="no-favourites">No favourites yet.</p>
        )}
      </div>
      <footer className='footer'>
        <p>&copy; 2024 devben. All rights reserved.</p>
      </footer>
      </>
      
  );
}

export default FavouritesPage;

