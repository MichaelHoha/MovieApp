import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllMovies(props) {

    // hooks that keeps all the movies data
    const [allMovies, setAll] = useState([
        { name: 'JOKER', rate: [1,2,3,4,5], poster: 'https://www.roshpinacine.com/wp-content/uploads/2019/11/joker.jpg' , info: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'  }
        , { name: '1917', rate: [1,2,3,4,5], poster: 'https://www.seret.co.il/images/movies/1917/19171.jpg' , info: 'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.' }
        , { name: 'Avengers', rate: [1,2,3,4,5], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/9/9b/Avengers_Endgame.jpg/330px-Avengers_Endgame.jpg' , info: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.' }
        , { name: 'Parasite', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png' , info: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.' }
        , { name: 'Invisble Man', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/6/60/TheInvisbleMan1.jpg' , info: 'When Cecilias abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.' }
        , { name: 'Toy Story', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/c/ca/Toy_Story_4_Official_Heb_Poster.jpg/330px-Toy_Story_4_Official_Heb_Poster.jpg' , info: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boys room.' }
        , { name: 'Sonic', rate: [1], poster: 'https://moridimtv.com/images/movies/GdZtVKwMet4x.webp' , info: 'After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.' }
        , { name: 'Venom', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/6/67/Venom_Poster.jpg/378px-Venom_Poster.jpg' , info: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.' }
        , { name: 'Fast & Furious', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/The_Fate_of_The_Furious_Theatrical_Poster_HE.jpg/375px-The_Fate_of_The_Furious_Theatrical_Poster_HE.jpg' , info:  'Lawman Luke Hobbs (Dwayne "The Rock" Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.'}
        , { name: 'The Irish', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/8/80/The_Irishman_poster.jpg/330px-The_Irishman_poster.jpg' , info: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.' }
        , { name: 'Bad Boys', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/thumb/3/31/Bad_Boys_for_Life_-_teaser_poster.jpg/220px-Bad_Boys_for_Life_-_teaser_poster.jpg' , info: 'Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct.' }
        , { name: 'Tenet', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/he/1/14/Tenet_movie_poster.jpg' , info: 'Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.' }
        , { name: 'Saw', rate: [1], poster: 'https://upload.wikimedia.org/wikipedia/en/9/92/Spiral_%282020%29_poster.jpeg' , info: 'A sadistic mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.' }

    ])

    return (
        <div className='all-movies'>

            {/* the list of all the movies on the right side */}
            {allMovies.map((element, index) => {
                return (
                    <Link to={`/movie${element.name}`}>
                        <div className='side-bar'>
                            <button key={index} className='all-movies-button'
                                style={{ backgroundImage: `url(${element.poster})` }}></button>
                        </div>
                    </Link>
                )
            })}

            {props.sendMovies(allMovies)}

        </div>
    )
}
