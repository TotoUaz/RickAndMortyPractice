import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div class="nav">
                <div class="nav-header">
                    <div class="nav-title">
                        Rick And Morty
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <a href="//github.io/jo_geek" target="_blank">By Toto</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;