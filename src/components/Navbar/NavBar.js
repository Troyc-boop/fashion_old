import React, {Component} from "react";

class NavBar extends Component{

    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button className="btn btn-outline-secondary m-2" type="button" disabled={!this.props.activeCategory && !this.props.favoriteDisplayed}
                            onClick={this.props.favoriteDisplayed ? this.props.onClickNew : this.props.onCreateNew}>+ New</button>
                    <button className="btn btn-outline-secondary m-2" type="button" disabled={!this.props.activeCategory} onClick={this.props.onClickSave}>Save</button>
                    <button className="btn btn-outline-secondary m-2" type="button" onClick={this.props.onClickFavorite}>Favorites</button>
                    <button className="btn btn-outline-secondary m-2" type="button">Add new item</button>
                </form>
            </nav>
        );
    }
}

export default NavBar;