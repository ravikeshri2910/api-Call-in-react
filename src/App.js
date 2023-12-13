import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Model from './Model/Model';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  // function dataFatchHandle() {
  //   console.log('here')
  //   fetch(`https://swapi.dev/api/films/`)
  //     .then((respoen) => {
  //       return respoen.json()
  //     }).then((data) => {

  //       const transformedData = data.results.map((newData) => {
  //         return {
  //           id: newData.episode_id,
  //           title: newData.title,
  //           openingText: newData.opening_crawl,
  //           releaseDate: newData.release_date
  //         }
  //       })

  //       setMovies(transformedData)
  //     })
  // }


  const dataFatchHandle = async () => {
    try {
      console.log('here')
      setIsLoading(true)
      const response = await fetch(`https://swapi.dev/api/films/`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
  
      const transformedData = data.results.map((newData) => {
        return {
          id: newData.episode_id,
          title: newData.title,
          openingText: newData.opening_crawl,
          releaseDate: newData.release_date
        };
      });
      setIsLoading(false)
      setMovies(transformedData);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    dataFatchHandle()
  },[])
  

  return (


    <React.Fragment>

      {isLoading && <Model/>}
      <section>
        <button onClick={dataFatchHandle}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
