import { NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  return (
    <header className="app-header">
      <NavLink className="app-header-item" to="/" exact>Homepage</NavLink>
      <NavLink className="app-header-item" to="/about">About</NavLink>
    </header>
  );
}

export default AppHeader;
