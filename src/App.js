import "./App.css";
import SampleFour from "./Components/Accordion/SampleFour";
import ImageSlider from "./Components/Image-slider/ImageSlider";
import Randocolor from "./Components/RandomColor/Randocolor";
import Router from "./Components/Router";
import StarOne from "./Components/Star-rating/StarOne";
import StarRating from "./Components/Star-rating/StarRating";
import TodoForm from "./Components/todo/TodoForm";
import TodoList from "./Components/todo/TodoList";

function App() {
  return (
    <div className="App">
    {/* <TodoForm />
    <TodoList /> */}
    <Router />
      {/* <SampleFour /> */}
      {/* <Randocolor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <StarOne noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
    </div>
  );
}

export default App;
