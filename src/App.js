import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav />

      <main>
      <Intro />
      <About />
      </main>
      
    </div>
  );
}

export default App;
