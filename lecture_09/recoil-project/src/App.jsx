import "./App.css";
import { useRecoilState } from "recoil";
import { textState } from "./atoms/TextAtom";

function App() {
  const [data, setData] = useRecoilState(textState);
  return (
    <>
      <button onClick={() => setData(data + 1)}>{data}</button>
    </>
  );
}

export default App;
