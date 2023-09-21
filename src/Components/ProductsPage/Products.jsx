import React from 'react'
import './Product.css'
import Navbar from '../View/Navbar';
import Footer from '../LandingPage/Footer';

function Products() {
  return (
    <div className='product'>
      <Navbar/>
          <div className='product-purchase-message'>
              <p>You are about to purchase from Ashlyco Fashion Company</p>
          </div>     
          <div className='product-image'>
            <img src="" alt="" />
          </div>   
          <div className='product-more'>
            <p>More Pictures of this product</p>
          </div>
          <div className='product-more-pics'>
              <div className='other-pics1'>
                <img src="" alt="" />
              </div>
              <div className='other-pics2'>
                <img src="" alt="" />
              </div>
              <div className='other-pics3'>
                <img src="" alt="" />
              </div>
          </div>
          <div className='Product-description'>
            <p>Agbada Wears With Cap</p>
          </div>
          <div className='full-decription'>
                <p>
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry's 
                standard dummy text ever since the 
                1500s, when an unknown printer took 
                a galley of type and scrambled it 
                to make a type specimen book.
                </p>
                <p>
                It has survived not only five 
                centuries, but also the leap 
                into electronic typesetting, 
                remaining essentially unchanged. 
                It was popularised in the 1960s 
                with the release of Letraset sheets
                containing Lorem Ipsum passages, 
                and more recently with desktop 
                publishing software like Aldus 
                PageMaker including versions of 
                Lorem Ipsum.
                </p>
                <p>
                  
                Lorem Ipsum is simply dummy 
                text of the printing and
                typesetting industry. 
                Lorem Ipsum has been the 
                industry's standard dummy 
                text ever since the 1500s, 
                when an unknown printer took a 
                galley of type and scrambled it
                  to make a type specimen book.
                </p>

                <p>
                It has survived not only five 
                centuries, but also the leap into 
                electronic typesetting, remaining 
                essentially unchanged. It was 
                popularised in the 1960s with 
                the release of Letraset sheets 
                containing Lorem Ipsum passages, 
                and more recently with desktop 
                publishing software like Aldus 
                PageMaker including versions of 
                Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry's 
                standard dummy text ever since the 
                1500s, when an unknown printer took 
                a galley of type and scrambled it 
                to make a type specimen book.
                </p>
                <p>
                It has survived not only five 
                centuries, but also the leap 
                into electronic typesetting, 
                remaining essentially unchanged. 
                It was popularised in the 1960s 
                with the release of Letraset sheets
                containing Lorem Ipsum passages, 
                and more recently with desktop 
                publishing software like Aldus 
                PageMaker including versions of 
                Lorem Ipsum.
                </p>
                <p>
                  
                Lorem Ipsum is simply dummy 
                text of the printing and
                typesetting industry. 
                Lorem Ipsum has been the 
                industry's standard dummy 
                text ever since the 1500s, 
                when an unknown printer took a 
                galley of type and scrambled it
                  to make a type specimen book.
                </p>

                <p>
                It has survived not only five 
                centuries, but also the leap into 
                electronic typesetting, remaining 
                essentially unchanged. It was 
                popularised in the 1960s with 
                the release of Letraset sheets 
                containing Lorem Ipsum passages, 
                and more recently with desktop 
                publishing software like Aldus 
                PageMaker including versions of 
                Lorem Ipsum.
                </p>
          </div>
          <div className='Buy-Product'>
            <button className='Buynowbtn'>Buy Now</button>
            <button className='Negotiatebtn'>Negotiate</button>

          </div>
          <div className='Product-review-section'>
            <div className='product-review-opinion'>
              <p>Review This Product</p>
              <input type="text" placeholder='Your Name'/>
              <textarea name="" id="" cols="50" rows="10" placeholder='Your Review'></textarea>
              <button>Review Now</button>
            </div>
          </div>
          <Footer/>
          

    </div>
  )
}

export default Products