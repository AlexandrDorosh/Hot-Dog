import React from "react"
import { Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <hr />
                <div className="header_flex">
                <Link style={{textDecoration: 'none'}} to="/">
                <img className="header_logo" src="https://us.123rf.com/450wm/venski/venski1802/venski180200001/96204698-classic-hot-dog-with-ketchup-and-mustard-isolated-vector-illustration-.jpg?ver=6" alt="img_header" />
                <span><strong>CRUD</strong></span>
                </Link>
                <Link style={{textDecoration: 'none'}} className="header-link" to="/add">
                Add hot-dog
                </Link>
                </div>
                <hr className="header_hr" />
            </div>
        )
    }
}

export default Header;