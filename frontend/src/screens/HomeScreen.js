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
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607512582/maria%27s%20boutique/freestocks-_3Q3tsJ01nc-unsplash_af7ti5.jpg" alt="pic1"/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607513469/maria%27s%20boutique/tamara-bellis-IwVRO3TLjLc-unsplash_hcelpz.jpg" alt="pic2"/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607513466/maria%27s%20boutique/www-hey-beauti-com-HjccMRFwqv0-unsplash_mxhubi.jpg" alt="pic3"/>
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