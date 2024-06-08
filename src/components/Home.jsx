import React from "react";
import '../components/Home.css'
import Welcomeimg from '../assets/img/hello.jpg'
import Picture1 from '../assets/img/picture1.jpg'
import Picture2 from '../assets/img/picture2.jpg'
import Picture3 from '../assets/img/picture3.jpg'
import Picture4 from '../assets/img/picture4.png'
import Picture5 from '../assets/img/picture5.jpg'
import Logo from '../assets/img/logo.png'
import Menu from '../assets/img/menuimg.webp'
import OpenMenu from '../assets/img/openmenu.jpg'



export default function Home(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="holder">

        <nav className='topnav'>
            <div className='brandNav'>
                <img src={Logo} alt='hello kitty logo'/>
                <p>My Website</p>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <img width="16px" height='16px' src={Menu} alt="menu close img"/> : 
                    <img width="16px" height='16px' src={OpenMenu} alt="menu open img"/>}
            </button>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
            </div>
        </nav>
        
        
        <div className="container">
        
        
        
        <div className="welcomeseccion">
        
        <div>
        <h1>Welcome to Responsive Web Design</h1>
        <p>Hello. Something about me. More talking that is really interesting. Hope you like the website. Really impress them. Blah blah blah. 
            Don’t forget a picture, even if its an avatar and not a real life photo. Short but with enough content to draw them in.</p>
        
        </div>
        
        
        <div className="welcomeimg" >
            <img src={Welcomeimg}  alt='hello kitty welcome' />
            
        </div>
        
        
        </div>
        
        <div>
            <div className="textseccion">
                <h2>My current projects</h2>
            </div>
        
            <div className="pictureseccion">
        
            <img src={Picture1}  alt='hello kitty welcome' />
            <img src={Picture2}  alt='hello kitty welcome' />
            <img src={Picture3}  alt='hello kitty welcome' />
            <img src={Picture4}  alt='hello kitty welcome' />
            <img src={Picture5}  alt='hello kitty welcome' />
            </div>
        
        
        </div>
        
        
        </div>
        
        </div>
    );
}