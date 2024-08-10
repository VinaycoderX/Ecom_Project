import React from 'react'
import "./Header.scss";
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';
import { TbSearch }from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";


const Header = () => {

    const [scrolled,setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200){
            setScrolled(true);
        }
        else
        setScrolled(false);
    }

    useEffect ( () => {
        window.addEventListener("scroll",handleScroll)
    },[]);

  return (
    <header className={`main-header ${scrolled ? "sticky-header" : ''}`}>
        <div className="header-content">
            <ul className='left'>
                <li> <a href="#">Home</a></li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Nimansu Productions</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                
                <span className="cart-icon">
                <FaCartArrowDown />
                <span>5</span>
                </span>
            </div>
        </div>
    </header>
  );
}

export default Header