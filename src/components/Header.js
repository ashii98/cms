import React from 'react';
import { Link }  from 'react-router-dom';
import MaterialIcon from 'material-icons-react';


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <Link to="/" className="navbar-brand">Test App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MaterialIcon size={20} icon="menu" color='#fff' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/users/'>Users</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/create/'>Create</Link>
                            </li>
                            {/* <li className="nav-item search">
                                <input className="form-control" placeholder="Search Here..." />
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header