import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Books from './components/Books';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles['main-container']}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
