import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <CalculateScore Name={'Alice'}
    School={'Global School'}
    total={472}
    goal={5}></CalculateScore>
  );
}

export default App;
