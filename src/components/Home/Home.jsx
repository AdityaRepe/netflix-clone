import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Home.scss';

const apiKey = "8d80c3fadfb8fbd65edcc06a1ccc6058";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({img}) => (
  <img className='card' src={img} alt="cover" />
)


const Row = ({title,arr=[{ img : "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"}]}) =>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
    {
      arr.map((item,index)=>(
        <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
      ))
    } 
    </div>
  </div>
)

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(()=>{

    const fetchUpcoming = async()=>{
      const {data : {results} } = await axios.get(`${url}/movie/${upcoming}/?api_key=${apiKey}`)
      setUpcomingMovies(results);
    };

    const fetchnowPlaying = async()=>{
      const {data : {results} } = await axios.get(`${url}/movie/${nowPlaying}/?api_key=${apiKey}`)
      setNowPlayingMovies(results);
    };

    const fetchPopular = async()=>{
      const {data : {results} } = await axios.get(`${url}/movie/${popular}/?api_key=${apiKey}`)
      setPopularMovies(results);
    };

    const fetchtoprated = async()=>{
      const {data : {results} } = await axios.get(`${url}/movie/${topRated}/?api_key=${apiKey}`)
      setTopRatedMovies(results);
    };

    const getAllGenre = async () => {
      const {
          data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);
    };

    fetchUpcoming();
    fetchnowPlaying();
    fetchPopular();
    fetchtoprated();
    getAllGenre();
  }, [])

  return (
    <>
      <section className="home">
        <div className="banner" style={{
          backgroundImage: upcomingMovies[5]
          ? `url(${`${imgUrl}/${upcomingMovies[5].poster_path}`})`
          : "rgb(16, 16, 16)",
        }}>
           {upcomingMovies[5] && <h1>{upcomingMovies[5].original_title}</h1>}
           {upcomingMovies[5] && <p>{upcomingMovies[5].overview}</p>}

           <div>
             <button><BiPlay /> Play  </button>
             <button>My List <AiOutlinePlus /> </button>
           </div>
        </div>
        <Row title={"Upcoming "} arr={upcomingMovies}/>
        <Row title={"Now Playing "} arr={nowPlayingMovies}/>
        <Row title={"Popular"} arr={popularMovies}/>
        <Row title={"Top Rated"} arr={topratedMovies}/>
        <div className="genre">
          {genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
