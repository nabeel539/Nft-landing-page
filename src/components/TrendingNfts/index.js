import React from 'react';
import "./trendingNfts.css";
import Slider from "react-slick/lib/slider";
import { TRENDING_NFTS } from '../../data/tendingNfts';
import TrendingCard from './TrendingCard';
import Button from "../../common/Button";

const settings={
   slidesToShow: 3,
   slidesToScroll: 1,
   autoPlay: true,
   speed: 500,
   arrows: false,
};

const TrendingNfts = () => {
  return (
    <div className='trending-nfts'>
     <div className='tn-title absolute-center'>
        <span className='heading-gradient'>TRENDING NFTs</span>
     </div>
     <div className='tn-bg-blob'></div>

     <Slider {...settings}>
        {TRENDING_NFTS.map((_nft)=> (
          <TrendingCard nft={_nft}/>
          ))}
     </Slider>
          <div className='tn-btn absolute-center '>
          <Button btnText="SEE MORE" type="Secondary" customClass="seemore-btn"></Button>
          </div>
      
    </div>
  )
}

export default TrendingNfts;