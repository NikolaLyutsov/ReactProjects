import React from 'react';
import Link from '../Link/Link';
import './Footer.css';

function Footer() {
    return(
        <nav className="Footer">
            <ul>
                <Link url='#'>Going to 1</Link>
                <Link url='#'>Going to 2</Link>
                <Link url='#'>Going to 3</Link>
                <Link url='#'>Going to 4</Link>
                <Link url='#'>Going to 5</Link>
                <Link url='#'>Going to 6</Link>
                <Link url='#'>Going to 7</Link>
                <Link url='#'>Going to 8</Link>
                <Link url='#'>Going to 9</Link>
                <Link url='#'>Going to 10</Link>
                <Link url='#'>Going to 11</Link>
                <Link url='#'>
                    <img id='logo192' src='logo192.png' alt='my-app-logo'/>
                </Link>
            </ul>
        </nav>
    );
};

export default Footer;
