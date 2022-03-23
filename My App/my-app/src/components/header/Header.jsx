
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-innerDiv">
                    <a href=""><h3>About Us</h3> </a>
                    <a href=""><h3>For You</h3> </a>
                    <a href=""><h3>Services</h3> </a>
                    <a href=""><h3>Blog</h3> </a>
                    <a href=""><h3>Vlog</h3> </a>
                    <a href=""><h3>Contact</h3> </a>
                </div>
            </nav>
        </div>
    )
};

export default Header;