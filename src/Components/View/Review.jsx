import React from 'react';
import './Review.css';
import back1 from '../View/background.png';
import back2 from '../View/background.png';
import back3 from '../View/background.png';
import left from '../View/left.png';
import right from '../View/right.png';




function Review() {

    const review = [
        {
            image:back1,
            name:"Muhammed Ali",
            comment: "`` I got what exactly what i ordered for. i am glad i shop from Ashlyco``",
        },
        {
            image:back2,
            name:"Jane Dara",
            comment: "`` I got what exactly what i ordered for. i am glad i shop from Ashlyco``",
        },
        {
            image:back3,
            name:"John Smilga",
            comment: "`` I got what exactly what i ordered for. i am glad i shop from Ashlyco``",
        }
    ]
  return (
    <div className='review-sect'>
        <h1>Recent Reviews</h1>
        <div className='review-container'>
            <div className='arrow'>
                <img src={left} alt="" />
            </div>
            {review.map((rev)=>(
                <div className='review-border'>
                    <div className='review-image'>
                        <img src={rev.image} alt="" />
                    </div>
                    <h1>{rev.name}</h1>
                    <p>{rev.comment}</p>
                </div>

            ))}
            <div className='arrow'>
                <img src={right} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Review