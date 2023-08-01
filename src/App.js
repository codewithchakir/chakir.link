import fig from './Image16.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fig} className="personal-fig" alt="fig" />
        <p>
          Hi, I'm chakir<br/> and I'm curently building my portfolio
        </p>
        <a
          className="App-link"
          href="https://m.instagram.com/codewithchakir"
          target="_blank"
        >
          Go back to instagram
        </a>
      </header>
    </div>
  );
}

export default App;
