import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import News from './pages/News';
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} exact />
        <Route path="news/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
