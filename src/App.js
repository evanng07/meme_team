import {Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path ='/home' element={<HomePage/>} />
        <Route path ='/new-recipe' element={<HomePage/>} />
        <Route path ='/search-recipe' element={<HomePage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
