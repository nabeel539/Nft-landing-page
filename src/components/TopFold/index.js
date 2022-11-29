import React from 'react';
import Button from '../../common/Button';
import "./topFold.css";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
    <div className='tf-left'>
      <div className='tf-heading'>Discover collect, & sell <span className='heading-gradient'>Extraordinary</span> NFTs</div>
      <div className='tf-description'>the leading NFT Marketplace on EthereumHome to the next generation of digital creators. Discover the best NFT collections.
      </div>
      <div className='tf-left-btns'>
        <Button btnType="PRIMARY" btnText="Explore"/>
        <Button btnType="SECONDARY" btnText="Create" customClass='tf-left-sencondary-btn'/>
      </div>
      <div className='tf-left-infoStats'>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>200k+</div>
          <div className='tf-infoItem-label'>Collections</div>
        </div>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>10k+</div>
          <div className='tf-infoItem-label'>Artists</div>
        </div>
        <div className='tf-is-infoItem absolute-center'>
          <div className='tf-infoItem-count'>478k+</div>
          <div className='tf-infoItem-label'>Community</div>
        </div>
      </div>
    </div>
    <div className='tf-right'>
     <div className='tf-r-bg-blob'></div>
      <div className='tf-right-diamond'>
        <div className='tf-r-diamond-item absolute-center'>
          <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'/>
        </div>
        <div className='tf-r-diamond-item absolute-center'>
          <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif'/>
        </div>
        <div className='tf-r-diamond-item absolute-center'>
          <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif'/>
        </div>
        <div className='tf-r-diamond-item absolute-center'>
          <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopFold;