import { NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  function getNavClass(navLinkProps) {
    let navClass = 'app-header-item';
    if (navLinkProps.isActive) navClass += ' app-header-item-active';
    return navClass;
  }

  return (
    <header className="app-header">
      <NavLink className={getNavClass} to="/" end>Homepage</NavLink>
      <NavLink className={getNavClass} to="about">About</NavLink>
    </header>
  );
}

export default AppHeader;
