import React, {Component} from 'react';


class Body extends Component{
    render() {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 manBacground test">
                            <img className={`upperBody shirt ${this.props.activeCategory === "tShirt" ? "active" : ""}`} src={this.props.tShirt}></img>
                            <img className={`upperBody longShirt ${this.props.activeCategory === "longShirt" ? "active" : ""}`} src={this.props.longShirt}></img>
                            <img className={`upperBody jacket ${this.props.activeCategory === "jacket" ? "active" : ""}`} src={this.props.jacket}></img>
                            <img className={`belts ${this.props.activeCategory === "belts" ? "active" : ""}`} src={this.props.belts}></img>
                            <img className={`lowerBody pants ${this.props.activeCategory === "pants" ? "active" : ""}`} src={this.props.pants}></img>
                            <img className={`lowerBody pants ${this.props.activeCategory === "longPants" ? "active" : ""}`} src={this.props.longPants}></img>
                        </div>
                    </div>
                </div>
            );
    };
}
export default Body;