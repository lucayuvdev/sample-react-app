import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="http://google.com/" 
                            target="_blank"
                            rel="noopener noreferrer" 
                        >
                            Google
                        </a>
                    </li>
                </ul>
            </nav>
            <p>
                Copyleft test
            </p>
        </footer>
    )
}

export default Footer;