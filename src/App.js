import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ClassComp />
          <FunctionalComp/>

        </p>
      </header>
    </div>
  );
}

export default App;
