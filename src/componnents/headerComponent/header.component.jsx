
import classes from "./header.module.scss";

const Header = props => {
    return (
        <nav className={classes.header}>
            <div>
                home
            </div>
            <div>
                search
            </div>
        </nav>
    )
}

export default Header;