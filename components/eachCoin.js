import symName from "../Data/symName.json";
import symValue from "../Data/symValue.json";


const EachCoin=()=>{
    
    return(
        <div>
            {
                symName.map((user)=>(
                    <div>{user.name} {user.symbol}</div>
                ))
            }
            {/* {
                symValue.map((data)=>(
                    <div>{data.value}</div>
                ))
            } */}
            
        </div>
    );
}
export default EachCoin;