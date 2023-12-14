import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import Err from './components/Err';
import './App.css';
import Model from './Model/Model';
import Form from './components/Form'

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [iserr, setIserr] = useState(null)

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
      setIserr(null)
      setIsLoading(true)
      // const response = await fetch(`https://swapi.dev/api/films/`);
      const response = await fetch(`https://react-http-8fcff-default-rtdb.firebaseio.com/movies.json`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();

      const loadedData = []

      for(const key in data){
        loadedData.push({
          id:key,
          title: data[key].title,
          openingText : data[key].description,
          releaseDate : data[key].releaseDate
        })
      }
      console.log('data'+ JSON.stringify(data))
  
      // const transformedData = data.results.map((newData) => {
      //   return {
      //     id: newData.episode_id,
      //     title: newData.title,
      //     openingText: newData.opening_crawl,
      //     releaseDate: newData.release_date
      //   };
      // });
      setIsLoading(false)
      setMovies(loadedData);
    } catch (error) {
      // Handle errors here
      setIserr(true)
      console.error('Error fetching data:', error);
    }
    setIsLoading(false)
  };

  useEffect(()=>{
    dataFatchHandle()
  },[])

  const handleFormSUbmit = async (obj)=>{

    const res = await fetch(`https://react-http-8fcff-default-rtdb.firebaseio.com/movies.json`,{
      method:'POST',
      body: JSON.stringify(obj),
      headers:{
        'content-type' : 'application/json'
      }
    })

    const data = res.json();
    console.log('handleFormSUbmit' + data)
  }

  
  

  return (


    <React.Fragment>

      {isLoading && <Model/>}
      <section>
        <Form onFormSubmit = {handleFormSUbmit} />
      </section>
      <section>
        <button onClick={dataFatchHandle}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && iserr && <Err/>} 
       {!isLoading && !iserr && <MoviesList movies={movies} />} 
        {/* <MoviesList movies={movies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;
