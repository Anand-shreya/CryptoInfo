import { useEffect,useState } from "react"
import symName from "../Data/symName.json"
// import fs from "FileSystem"

function FetchApi(){
    const [p,setp]= new useState("live");
    const [value,setValue] = new useState(symName);
    useEffect(()=>{
        const fetchApi=async()=>{
            const url = `http://api.coinlayer.com/${p}?access_key=15a5b3db898a20619ec3cd0b4b2c974a`;
            const Response = await fetch(url);
            const resJson = await Response.json();
            setValue(resJson.rates);
            console.log(value);
            // symName.map((data)=>(

            // ))
        }
        fetchApi();
    },[])

    return(
        <div>
            <button onClick={()=>setp("live")}>refresh</button>
        </div>
    )
}
export default FetchApi;