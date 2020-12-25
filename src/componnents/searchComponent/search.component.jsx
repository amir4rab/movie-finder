import classes from './search.style.module.scss';
import icon from "../../assets/magnifier-icon.svg";

const SearchComponent = props => {
    return (
        <div className={ classes.search }>
            <input type="text"/>
            <p><img src={icon} alt=""/></p>
        </div>
    );
};

export default SearchComponent;