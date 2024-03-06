import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const [dogs, setDogs] = useState([])
    const [search, setSearch] = useState(false)


    useEffect(() => {
        const fetchDogData = async () => {
            const breedsResponse = await fetch("https://api.thedogapi.com/v1/breeds?limit=100");
            const dataBreeds = await breedsResponse.json()
            console.log(dataBreeds)

            setDogs(dataBreeds)
        };

        fetchDogData();
    }, []);

    return (
        <>
        <header>
            <h1 className='main-header'>Pawsome</h1> <img src="" alt="" />
        </header>
        <form action="">
            <input type="text" name="search" id="search" placeholder='Search for Dogs...Woof Woof' />

        </form>
        <button>Search</button>
        
        <div className='main-dog-page'>
            {dogs.map((dog) => (
                <Link
                to={`/${dog.name}`}
                key={dog.id}
                > 
                <article> 
                    <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} />
                    <h3>{dog.name}</h3>
                    <p>Bred for: {dog.bred_for}</p>
                </article>
                    </Link>
            ))}
        </div>
        </>
    );
}
