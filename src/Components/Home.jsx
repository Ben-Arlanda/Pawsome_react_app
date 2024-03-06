import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const [dogs, setDogs] = useState([])


    useEffect(() => {
        const fetchDogData = async () => {
            const breedsResponse = await fetch("https://api.thedogapi.com/v1/breeds?limit=30");
            const dataBreeds = await breedsResponse.json()
            console.log(dataBreeds)

            setDogs(dataBreeds)
        };

        fetchDogData();
    }, []);

    return (
        <>
        <header>
            <h1>Pawsome</h1> <img src="" alt="" />
        </header>
        <form action="">
            <input type="text" name="search" id="search" placeholder='Search for Dogs...Woof Woof' />

        </form>
        <button>Search</button>
        
        <div className='main-dog-page'>
            {dogs.map((dog) => (
                <article key={dog.id}>
                    <Link>
                    <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} />
                    </Link>
                    <h3>{dog.name}</h3>
                    <p>{dog.bred_for}</p>
                </article>
            ))}
        </div>
        </>
    );
}
