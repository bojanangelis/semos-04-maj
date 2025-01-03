import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import useDDV from "./hooks/useDDV"
import useDeviceDetect from "./hooks/useDeviceDetect"
import useFetch from "./hooks/useFetch"
import useWindowSize from "./hooks/useWindowSize"
import useScrollToTop from "./hooks/useScrollToTop"

function App() {
  const [count, setCount] = useState(0)
  const [shouldScroll, setShouldScroll] = useState(0)

  useScrollToTop(shouldScroll)

  const { isMobile } = useDeviceDetect()
  const { windowSize } = useWindowSize()
  // const [dataF1, setDataf1] = useState(null)
  // const [dataF1Loading, setDataf1Loading] = useState(null)
  // const [dataF122, setDataf122] = useState(null)
  // const [dataF122Loading, setDataf122Loading] = useState(null)

  // useEffect(() => {
  //   setDataf122Loading(true)
  //   fetch("https://api.openf1.org/v1/drivers")
  //     .then((res) => res.json())
  //     .then((data) => setDataf122Loading(false), setDataf1(data))

  //   fetch("https://api.openf1.org/v1/drivers")
  //     .then((res) => res.json())
  //     .then((data) => setDataf1(data))
  // }, [])

  const {
    data: f1DriversData,
    isLoading: f1DriversIsLoading,
    isFetched: f1DriversIsFetched,
  } = useFetch("https://api.openf1.org/v1/drivers")

  const {
    data: driver1Data,
    isLoading: driver1IsLoading,
    isFetched: driver1IsFetched,
  } = useFetch(
    "https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158"
  )

  console.log("isLoading-->", f1DriversData)
  console.log(f1DriversIsLoading)
  console.log("data", f1DriversIsFetched)

  console.log("isMobile", isMobile)

  if (f1DriversIsLoading || driver1IsLoading) return <h3>Loading . . . </h3>
  return (
    <>
      <h5>{windowSize.width}</h5>
      <h5>{windowSize.height}</h5>

      <div style={{ backgroundColor: `#${f1DriversData?.[0]?.team_colour}` }}>
        <img
          width={windowSize.width * 0.2}
          height={windowSize.height * 0.2}
          src={f1DriversData?.[0]?.headshot_url}
          alt={f1DriversData?.[0]?.team_name}
        />
        <h4>
          {f1DriversData?.[0]?.driver_number} {f1DriversData?.[0]?.full_name}
        </h4>
        <h4>{f1DriversData?.[0]?.team_name}</h4>
      </div>

      <div className={`${isMobile ? "mobile" : "desktop"}`}>
        <h2>{isMobile ? "this is mobile" : "desktop"}</h2>
        <p>Mleko</p>
        <button onClick={() => setCount(count + 50)}>Add To cart: 50den</button>
        <p>Leb</p>
        <button onClick={() => setCount(count + 20)}>Add To cart: 20den</button>
        <p>Jajca</p>
        <button onClick={() => setCount(count + 80)}>Add To cart: 80den</button>

        <h4>TOTAL {useDDV(count)}</h4>
      </div>

      <button onClick={() => setShouldScroll((e) => e + 1)}>ScrollToTop</button>
    </>
  )
}

export default App
