import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import News from './pages/News';
import Header from './components/Header';
import { NewsProvider } from './components/NewsProvider';
import { Preloader } from './components/Preloader';

const App = () => {
  return (
    <NewsProvider>
      <BrowserRouter>
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="news/" element={<News />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
};

export default App;
