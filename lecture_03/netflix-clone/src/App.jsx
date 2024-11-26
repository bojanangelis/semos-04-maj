import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CardSlider from './components/CardSlider'

export const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function App() {
  const [data, setData] = useState([]) // ova ke go ucime ponataka

  useEffect(() => {
    fetch('/movies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch movies')
        }
        return res.json()
      })
      .then((res) => setData(res))
      .catch((err) => console.error(err))
  }, [])
  console.log(data)
  const i = Math.floor(Math.random() * 20) // give me random number
  return (
    <div>
      <Header />
      <Banner
        img={data?.results?.[i]?.poster_path}
        title={data?.results?.[i]?.title}
        description={data?.results?.[i]?.overview}
      />
      <CardSlider data={data?.results} title={'TV Action & Adventure'} />
      <CardSlider data={data?.results} title={'Today Top Picks for you'} />
      <CardSlider data={data?.results} title={'TV Comedies'} />
      <CardSlider data={data?.results} title={'Your Netflix Watch'} />
    </div>
  )
}

export default App
