import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                        Rick And Morty
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="//github.io/jo_geek" target="#">By Toto</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;