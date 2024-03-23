import './App.css';
import ErrorBoundary from './ErrorBoundry';
// import ConnectDot from './ConnectDotGame/connectDot';
import InfiniteScrollApp from './InfiniteScroll';
// import CheckAndMove from './metaQues/CheckAndMove';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/Slices/Counter/index'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
  {/*<CheckAndMove/>*/}
      {/*<ConnectDot/>*/}
      <ErrorBoundary><InfiniteScrollApp/></ErrorBoundary>
      <h1>Count {count}</h1>
      <button type="button" onClick={()=>dispatch(increment())}>increment</button>
      <button type="button" onClick={()=> dispatch(decrement())}>Decrement</button>
      
    </div>
  );
}

export default App;
