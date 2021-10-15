import React from 'react';
import { sales } from '../data'
import '../Styles/Sales.css'

class Sales extends React.Component {
    render() {
        return(
            <div className="container">
                {sales.map((sneaker) =>
                    <section className="card">
                        <span className="porcentage">{ sneaker.porcentage }</span>
                        <img src={ sneaker.image } alt="" className="sneaker"/>
                        <span className="infos">
                            <h1 className="name">{ sneaker.name }</h1>
                            <p className="price">{ sneaker.price }</p>
                        </span>
                        <span>
                            <button id="addToCart" className="button">Add to cart</button>
                            <button id="buyNow" className="button">Buy now</button>
                        </span>
                    </section>
                )}
            </div>
        )
    }
}

export default Sales