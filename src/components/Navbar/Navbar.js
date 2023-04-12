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
                <a className='creator' href="https://github.com/TotoUaz">By Toto</a>

                <div className="nav-links">
                    <a href="#" >Characters</a>
                    <a href="#" >Episodes</a>
                    <a href="#" >Locations</a>
                </div>
                <button className='burger-menu'>Press me</button>
            </div>
        </div>
    );
}

export default Navbar;