import Message_2 from "./components/massage_2";
import Welcome from "./components/Welcome";
import Greet from "./components/Home/Hero";
import Counter from "./components/Counter";
import FunctionClick from "./components/Products/functionClik";
import ClassClick from "./components/Products/classClick";

function App() {
  return (
    <div className="App">
      
     <ClassClick />
     <FunctionClick/>
      <Counter/>
      <Greet name="Barcue"  heroName="People">
        <p>This is the greet childreen</p>
      </Greet>
      <Welcome name="kalam" heroName="Basketball">
        <p>this is welcome page</p>
      </Welcome>
      <Message_2></Message_2>
    </div>
  );
}

export default App;
