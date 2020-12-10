import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { FacebookButton }  from "react-social";
import { IconContext } from "react-icons";
import {RiFacebookBoxFill} from "react-icons/ri";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
      <div>
        <Link to="/">Ir para resultados</Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <li>Preço : {product.price}€</li>
              <li>
                Descrição:
                <p>{product.description}</p>
              </li>
              <li>
                <IconContext.Provider value={{color: "white", size: "2em"}}>
                <FacebookButton url={`https://mariasboutique-app.herokuapp.com/product/${productId}`} appId={813845855828242} className="faceButton">
                  <RiFacebookBoxFill/>
                </FacebookButton>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Preço</div>
                    <div className="price">{product.price}€</div>
                  </div>
                </li>
                {product.countInStock > 0 && (
                <>
                <li>
                        <div className="row">
                          <div>Qtd</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Adicionar à Lista
                        </button>
                      </li>
                    </>
                  )}
              </ul>
            </div>
          </div>
        </div>
        </div>
      )}
      </div>
  )
}