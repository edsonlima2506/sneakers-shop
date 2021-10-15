import React from 'react';
import user from '../Images/user(1).png';
import cart from '../Images/shopping-cart.png';
import favorite from '../Images/heart.png';
import shoes from '../Images/shoes.png'
import '../Styles/Header.css'

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={ shoes } alt="" className="principalSneaker"/>
                <h1 className="adidas">Adidas.</h1>
                <section className="topMenu">
                    <span><h1 className="title">adidas.</h1></span>
                    <span className="listAndIcons">
                    <ul className="list">
                        <li>Sneakers</li>
                        <li>Sales</li>
                        <li>Buy</li>
                    </ul>
                    <ul className="icons">
                        <li><img src={user} alt="" className="icon"/></li>
                        <li><img src={favorite} alt="" className="icon"/></li>
                        <li><img src={cart} alt="" className="icon"/></li>
                    </ul>
                    </span>
                </section>
                <section className="headerButtons">
                    <button className="seeMore btn">See more</button>
                    <button className="buyNow btn">Buy now</button>
                </section>
            </header>
        )
    }
}

export default Header