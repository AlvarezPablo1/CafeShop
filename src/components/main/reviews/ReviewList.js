import { useEffect, useState } from 'react';
import Review from './Review'
import { reviewList } from '../../../data/ArrayReviews'

const ReviewList = () => {

  const [Reviews, setReviews] = useState([]);
  
  const getReviews = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(reviewList);
    }, 2000);
  });

  const getReviewsFromDB = async () => {
    try{
      const result = await getReviews;
      setReviews(result);
    }catch(error){
      console.log(error);
      alert('no se pueden mostrar las Reviews. Mil disculpas')
    }
  };

  useEffect(() => {
    getReviewsFromDB();
  }, []);
  
  return (
    <div className='ReviewList-Container'>
      {
        Reviews.length ? (
          <>
          {
            Reviews.map((reseña) =>{
              return(
                <div key={reseña.id}>
                  <Review
                  image={reseña.image}
                  name={reseña.name}
                  description={reseña.description}
                  />
                </div>
              );
            })
          }
          </>
        ) : (
          <p>Cargando Reviews</p>
        )
      }
    </div>
  )
}
export default ReviewList