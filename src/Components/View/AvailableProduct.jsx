import React from 'react';
import './AvailableProduct.css';
import back from '../View/background.png';
import back2 from '../View/background.png';
import back3 from '../View/background.png';





function AvailableProduct() {
    const product=[
        {
            image: back,
            ProductName :"Buba dress for ladies",
            price: "NGN 30, 000",
            buyBtn: "Buy Now",
            NegotiateBtn:"Negotiate",
        },
        {
            image: back3,
            ProductName :"Agbada wears with cap",
            price: "NGN 45, 000",
            buyBtn:"Buy Now",
            NegotiateBtn:"Negotiate",
        },
        {
            image: back2,
            ProductName:"Jean & Trousers",
            price: "NGN 15, 000",
            buyBtn:"Buy Now",
            NegotiateBtn:"Negotiate",
        }
    ]
  return (
    <div className='AvailableProduct'>
        <h1>Available Products</h1>
            <div className='product-container'>
                {product.map((pro)=>(
                <div className='productBorder'>
                    <div className='productImg'>
                        <img src={pro.image} alt="" />
                    </div>
                    <h1>{pro.ProductName}</h1>
                    <p>{pro.price}</p>
                    <div className='productBtn'>
                        <button className='buy'>{pro.buyBtn}</button>
                        <button className='navigate'>{pro.NegotiateBtn}</button>
                    </div>
                </div>
                
                ))}
            </div>
    </div>
  )
}

export default AvailableProduct