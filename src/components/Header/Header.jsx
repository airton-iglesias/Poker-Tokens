import "./Header.css";

function Navbar(){
    return(
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo-navbar">
                        <a href="#" >TEMPLATE</a>
                    </div>
                    <div className="list-navbar">
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Navbar;