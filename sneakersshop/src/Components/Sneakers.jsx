import React from 'react';
import '../Styles/Sneakers.css';
import sneakersData from '../data';
const voltar = "<";
const avancar = ">";

class Sneakers extends React.Component {
    constructor() {
        super()
            this.state = {
                controle: 0
            }
            this.addControle = this.addControle.bind(this)
            this.subControle = this.subControle.bind(this)
    }

    addControle = () => {
        if (this.state.controle < (sneakersData.length - 1)) {
            this.setState((controleAnterior, _props) => ({
                controle: controleAnterior.controle + 1
            }))
        } else {
            this.setState(() => ({
                controle: 0
            }))
        }
    }

    subControle = () => {
        if(this.state.controle !== 0) {
            this.setState((controleAnterior, _props) => ({
                controle: controleAnterior.controle - 1
            }))
        } else {
           this.setState(() => ({
                controle: sneakersData.length - 1
            })) 
        }
    }

    render() {
        return(
            <div className="container">
                <button className="antesDepois" onClick={ this.subControle }>{ voltar }</button>
                <section className="sneakerCard">
                    <img src={ sneakersData[this.state.controle].image } alt="" className="imageSneaker" />
                    <span className="sneakerInfos">
                    <h1>{ sneakersData[this.state.controle].name }</h1>
                    <h2>{ sneakersData[this.state.controle].price }</h2>
                    <span>
                        <button id="addToCart" className="button">Add to cart</button>
                        <button id="buyNow" className="button">Buy now</button>
                    </span>
                    </span>
                </section>
                <button className="antesDepois" onClick={ this.addControle }>{ avancar }</button>
            </div>
        )
    }
}

export default Sneakers