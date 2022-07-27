import {Link, useLocation} from "react-router-dom";

export default function Header() {
    const pathName = useLocation().pathname;

    return (
        <div className="header">
            <div className="container">
                <Link className="logo" to="/">React Movies</Link>

                <div className="header-right">
                    <Link className={`${pathName === '/movies' ? 'active' : ''}`} to="/movies">Popular</Link>
                    <Link className={`${pathName === '/favorites' ? 'active' : ''}`} to="/favorites">Favorites</Link>
                </div>
            </div>
        </div>
    )
}
