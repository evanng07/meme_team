import {Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <Layout>
      <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path ='/home' element={<HomePage/>} />
        <Route path ='/new-recipe' element={<HomePage/>} />
        <Route path ='/search-recipe' element={<HomePage/>} />
      </Routes>
    </Layout>
>>>>>>> cb903817134799ef1fcdf1692993354d4f31b703
  );
}

export default App;
