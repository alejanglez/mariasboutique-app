import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
  
    useEffect(() => {
        /*dispatch(listProducts({}));*/
        dispatch(listProducts());
    }, [dispatch]);
      
    
  return (
    <div>
    <Carousel showArrows autoPlay showThumbs={false}>
      <div>
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607368038/maria%27s%20boutique/www-hey-beauti-com-HjccMRFwqv0-unsplash_jtcoyv.jpg" alt="pic1"/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607368036/maria%27s%20boutique/freestocks-_3Q3tsJ01nc-unsplash_yda2bw.jpg" alt="pic2"/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607368034/maria%27s%20boutique/tamara-bellis-IwVRO3TLjLc-unsplash_fduqbq.jpg" alt="pic3"/>
      </div> 
    </Carousel>
    {loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    )}
    </div>
  );
}