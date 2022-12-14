import {Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import NewRecipe from './pages/NewRecipe';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path ='/home' element={<HomePage/>} />
        <Route path ='/new-recipe' element={<HomePage/>} />
        <Route path ='/search-recipe' element={<HomePage/>} />
        <Route path ='/profile-page' element ={<ProfilePage/>} />
        <Route path ='/search-page' element ={<SearchPage/>} />
        <Route path ='/newRecipe' element ={<NewRecipe/>} />
      </Routes>
    </Layout>
  );
}

export default App;
