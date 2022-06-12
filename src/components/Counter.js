import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const resetCountHandler = () => {
    dispatch({type: 'reset'})
  }
  const toggleCountHandler = () => {
    dispatch({type: 'toggle'})
  }
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  };
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  };
  const incrementBy5 = () => {
    dispatch({type: 'incrementBy5', amount: 5})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementBy5}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetCountHandler}>Reset Counter</button>
      <button onClick={toggleCountHandler}>Togle Counter</button>
    </main>
  );
};

export default Counter;
