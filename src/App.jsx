
import { React } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import CategoryContainer from './components/CategoryContainer';
import Footer from "./components/Footer";
import Header from './components/Header';
import NewsListContainer from './components/NewsListContainer';
import NewsContextProvider from './context/NewsContext';
import './App.css';

function App() {

  return (
    <NewsContextProvider>
      <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/awesome-news/' element={<NewsListContainer/>} />
          <Route path='/new/:id' element={<Article/>}/>
          <Route path='/recent-news' element={<NewsListContainer/>}/>
          <Route path='/top-rated' element={<NewsListContainer/>}/>
          <Route path='/categories' element={<CategoryContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </NewsContextProvider>
  );
}

export default App;
