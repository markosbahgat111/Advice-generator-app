import React, {useState,  useEffect} from 'react';
import './App.scss';
import Quote from "./quote";

export interface FetchQuotes {
    text: string,
    author:string,
}
function App() {
    const [data, setData] = useState<FetchQuotes | null>(null);
    const [randomNum, setRandomNum] = useState<number>(0)
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                setRandomNum(Math.floor(Math.random()*data.length));
                setData(data[Math.floor(Math.random()*data.length)]);
            });
    }, []);

    console.log(data);
    return (
    <div className="App">
        <Quote  quote={data} adviceNum={randomNum}/>
    </div>
  );
}

export default App;
