import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { name, price, img, ratings, seller } = props.product;
    // console.log(props);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'> {name}</p>
                <p className='price'>Price : $ {price}</p>
                <p><small>Manufacturer : {seller}</small>
                    <br />
                    <small>Rating :  {ratings} star</small>
                </p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => props.handleAddToCart(props.product)}>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;