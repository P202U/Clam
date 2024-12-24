import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  incremented,
  decremented,
  addAmount,
  reset,
} from './features/counter/counterSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(state => state.counter.value);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-500 p-4 text-white">
      <h1 className="mb-4 text-4xl">Counter App</h1>
      <div className="mb-6 text-2xl">
        <p>Current Count: {value}</p>
      </div>
      <div className="flex space-x-4">
        <button
          className="rounded bg-green-500 px-4 py-2 hover:bg-green-600"
          onClick={() => dispatch(incremented())}
        >
          Increment
        </button>
        <button
          className="rounded bg-red-500 px-4 py-2 hover:bg-red-600"
          onClick={() => dispatch(decremented())}
        >
          Decrement
        </button>
        <button
          className="rounded bg-yellow-500 px-4 py-2 hover:bg-yellow-600"
          onClick={() => dispatch(addAmount(5))}
        >
          Add 5
        </button>
        <button
          className="rounded bg-gray-500 px-4 py-2 hover:bg-gray-600"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
