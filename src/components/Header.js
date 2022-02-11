import React from "react";
import "../styles/Header.css"
import logo from "../assets/relevel.jpeg"

class Header extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                        <img src={logo} alt="Relevel Logo" className="logo"></img>
                      <div className="header-text">Relevel Trello</div>  
                </div>
            </div>
        )
    }
}

export default Header;