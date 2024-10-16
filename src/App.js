import Featured from './components/Featured.jsx';
import Highlights from './components/Highlights.jsx';
import Landing from './components/Landing.jsx';
import Nav from './components/Nav.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
