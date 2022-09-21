import './App.css';
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { increament, decreament, reset } from "./actions";
import Count from './count';
function App({ local_variable, increament, decreament, reset }) {
  // const dispatch = useDispatch();
  // const { count } = useSelector(state => state)
  // console.log(count)
  return (
    <div>
      <div className="App">
        <h1>With mapStateToProps</h1>
        <h1>count:{local_variable}</h1>
        {/* <h1>Increament</h1> */}
        <button onClick={increament} >INCREAMENT</button>
        <button onClick={decreament} >DECREAMENT</button>
        <button onClick={reset} >RESET</button>

      </div>
      <div>
        <Count />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  local_variable: state
})
export default connect(mapStateToProps, { increament, decreament, reset })(App);
