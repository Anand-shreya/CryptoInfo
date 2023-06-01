import { useEffect, useState } from "react";
import data from "../Data/symName.json";


//  15a5b3db898a20619ec3cd0b4b2c974a

function Specific() {

  const currentDate = "12-01-2023";
  const [CoinName, setCoinName] = useState("BTC");
  const [date, setdate] = useState(currentDate);
  const [sym, setSym] = useState("BTC");
  const [formatedDate, setFormatedDate] = useState("2023-01-12");
  const [ coinValue,setCoiValue] = useState(0.00);

  useEffect(()=>{
    const fetchApi=async()=>{
    const url = `http://api.coinlayer.com/${formatedDate}? access_key = 15a5b3db898a20619ec3cd0b4b2c974a&symbol=${sym}`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log("hello");
    setCoiValue(resJson.rate);
  }
  fetchApi();
  },[])

  return (
    <div>
      <select
        name="coinName"
        id="CoinName"
        onChange={(event) => {
          setCoinName(event.target.value);
        }}
      >
        {data.map((coin) => (
          <option value={coin.symbol}>{coin.name}</option>
        ))}
        {console.log(CoinName)}
      </select>
      <input
        type="date"
        className="date"
        onChange={(event) => {
          setdate(event.target.value);
        }}
      />
      {console.log(date)}
      <button
        type="submit"
        onClick={() => {
          setSym(CoinName);
          setFormatedDate(date);
        }}
      >
        Submit
      </button>

      <div>
        {sym}
        {coinValue}
      </div>
    </div>
  );
}
export default Specific;
