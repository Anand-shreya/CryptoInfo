import ListAll from "./components/listAll";
import Specific from "./components/specific";
function App() {
  return (
    <div>
        <div>
            <ListAll/>
        </div>
        <div className="specific">
          {/* <Specific/> */}
        </div>
    </div>
  );
}

export default App;
