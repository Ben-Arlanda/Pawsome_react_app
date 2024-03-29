import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './SingleDog.css'
import pawImage from '/images/1.png'

export default function SingleDog() {

    const [dog, setDog] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const singleDogData = async () => {
            const response = await fetch(
                `https://api.thedogapi.com/v1/breeds/search?q=${name}`
            )
            const data = await response.json()
            setDog(data)
            console.log(data)
        }
        singleDogData()
    }, [name])

    return (
        <>
            <header>
                <nav>
                    <Link to="/" className="nav-link-single">Home</Link>
                    <Link to="/favourites" className="nav-link-single">Favourites</Link>
                    <Link to="/login" className="nav-link-single">Login</Link>
                </nav>
                <h1 className='main-header-single'>Pawsome</h1>
                <img className='paw-image' src={pawImage} alt="" />
            </header>
            <section className="single-dog">
                {dog.map((elem) => (
                    <div key={elem.id}>

                        <article>
                            <img className="single-dog-img"
                                src={`https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`}
                                alt={elem.name} />
                        </article>
                        <article>
                            <h1>{elem.name}</h1>
                            {elem.description && (
                                <p>{elem.description}</p>
                            )}
                            <ul>
                                <li><span>Bred For:</span>{" "}{elem.bred_for}</li>
                                <li><span>Height:</span>{" "}{elem.height.metric} cm</li>
                                <li><span>Weight:</span>{" "}{elem.weight.metric}kgs</li>
                                <li><span>Breed Group:</span>{" "}{elem.breed_group}</li>
                                <li><span>Lifespan:</span>{" "}{elem.life_span}</li>
                                <li><span>Temperament:</span>{" "}{elem.temperament}</li>
                            </ul>
                        </article>
                    </div>
                ))}
            </section>
                <footer className='footer'>
                    <p>&copy; 2024 devben. All rights reserved.</p>
                </footer>
        </>
    )
}
