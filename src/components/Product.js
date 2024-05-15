import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Cart/cartSlice';
import Spinner from './Spinner';

export default function Product() {
    const [products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const mode = useSelector((state) => state.darkMode)

    const dispatch =  useDispatch();

    const addCart= (product)=>{
        dispatch(addToCart(product))
    } 

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                setProducts(result);
                setLoading(false);
            } catch (error) {
                console.log('Error:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        
            {loading? <Spinner/>:(products.map((product, key) => (
                <div className="col-md-3">
                    <div  key={product.id} className={`card m-3 text-center bg-${mode}`} >
                       <div className='text-center'>
                       <img src={product.image} className="card-img-top" alt={product.title}  />
                       </div>
                        <div className="card-body">
                            <h5 className={`card-title text-${mode==='light'?'dark':'light'}`}>{product.title.slice(0,10)}</h5>
                            <p className={`card-text text-${mode==='light'?'dark':'light'}`}>{product.description.slice(0,50)}...</p>
                            <p className={`card-text text-${mode==='light'?'dark':'light'}`}>$ {product.price}</p>
                            <button onClick={()=>addCart(product)} className={`btn btn-sm btn-${mode==='light'?'dark':'light'}`}>Add to Cart</button>
                        </div>
                    </div>
                </div>)
            ))}
        </>
    );
}

