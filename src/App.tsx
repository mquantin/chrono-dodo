import './App.css';
import { Timer } from './ui';

function App() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold underline">Chrono Dodo</h1>
      <Timer/>
    </div>
  );
}

export default App;
