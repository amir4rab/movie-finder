import { Link } from 'react-router-dom';

import classes from "./header.module.scss";
import SearchComponent from "../searchComponent/search.component";

const Header = props => {

    return (
        <nav className={ classes.header }>
            <ul className={ classes.ul }>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
            </ul>
            <div className={ classes.SearchComponent }>
                <SearchComponent  />
            </div>
        </nav>
    )
}

export default Header;