
import classes from "./header.module.scss";
import SearchComponent from "../searchComponent/search.component";
import icon from "../../assets/icon.svg";

const Header = props => {

    return (
        <nav className={ classes.header }>
            <img className={ classes.img } src={icon} alt=""/>
            <SearchComponent />
        </nav>
    )
}

export default Header;