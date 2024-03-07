import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home({addToFavourites }) {

    const [dogs, setDogs] = useState([])
    const [search, setSearch] = useState(false)
    const [text, setText] = useState("")



    useEffect(() => {
        const fetchDogData = async () => {
            const breedsResponse = await fetch("https://api.thedogapi.com/v1/breeds")
            const dataBreeds = await breedsResponse.json()
            console.log(dataBreeds)

            setDogs(dataBreeds)
        }

        setSearch(false)
        fetchDogData()
    }, [])

    const dogSearch = async () => {
        const response = await fetch(
            `https://api.thedogapi.com/v1/breeds/search?q=${text}`
        )
        const data = await response.json()
        setDogs(data)
    }


    function handleSubmit(e) {
    e.preventDefault()

    dogSearch()
    setSearch(true)

}
    return (
        <>
            {!dogs ? (
                <h1>No doggies available</h1>
            ) : (
                <>
                    <section>
                        <header>
                            <nav>
                                <a href="">Login</a>
                                <a href="/favourites">Favourites</a>
                            </nav>
                            <h1 className='main-header'>Pawsome</h1>
                            <h3>The app for a man's best friend</h3>
                            <img className='paw-image' src="src/Images/1.png" alt="" />
                            </header>
                            <Link to="/favourites">View Favourites</Link>

                        
                            <div className='search-bar'>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="search" id="search" placeholder='Search for Dogs'
                                value={text}
                                onChange={(e) => setText(e.target.value)} />
                                <button>Search</button>
                            </form>
                                </div>
                        

                        <div className='main-dog-page-grid'>
                            {!search ? (
                                <>
                                        {dogs.map((dog) => (
                                            <div key={dog.id}>
                                                <Link to={`/${dog.name}`} key={dog.id}>
                                                <article className='main-dog-page'>
                                                <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Image of ${dog.name}`} />
                                                <section>
                                                <h3 className='dog-name'> {dog.name}</h3>
                                                </section>
                                         
                                            </article>
                                        </Link>
                                                <button className='favourite-btn' onClick={() => addToFavourites(dog)}>Add to Favorites</button>
                                            </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {dogs.map((dog) => (
                                        <div key={dog.id}>
                                            <Link to={`/${dog.name}`} key={dog.id}>
                                                <article className='main-dog-page'>
                                                    <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Image of ${dog.name}`} />
                                                    <section>
                                                        <h3 className='dog-name'> {dog.name}</h3>
                                                    </section>
                        
                                                </article>
                                            </Link>
                                            <button className='favourite-btn' onClick={() => addToFavourites(dog)}>Add to Favorites</button>
                                        </div>
                                        
                                    ))}
                                </>
                            )}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
