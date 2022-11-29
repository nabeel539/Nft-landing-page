import React from 'react';
import "./App.css";
import "./components/BrandIntegration";
import BrandIntegration from './components/BrandIntegration';
import "./components/Footer";
import Footer from './components/Footer';
import "./components/Header";
import Header from './components/Header';
import "./components/InfoSection";
import InfoSection from './components/InfoSection';
import "./components/TopFold";
import TopFold from './components/TopFold';
import "./components/TrendingNfts";
import TrendingNfts from './components/TrendingNfts';



const App = () => {
  return (
    <div className='max-width'>
    <Header/>
    <TopFold/>
    <BrandIntegration/>
    <TrendingNfts/>
    <InfoSection/>
    <Footer/>

    </div>
  );
}

export default App;