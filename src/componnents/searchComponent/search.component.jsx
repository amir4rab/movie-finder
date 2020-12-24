import classes from './search.style.module.scss';

const SearchComponent = props => {
    return (
        <div className={ classes.search }>
            <input type="text"/>
            <p>&#128270;</p>
        </div>
    );
};

export default SearchComponent;