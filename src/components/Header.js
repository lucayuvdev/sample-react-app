import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/list">
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <h2>Header</h2>
        </>
    )
}

export default Header;