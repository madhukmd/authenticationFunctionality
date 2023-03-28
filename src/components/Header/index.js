import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="links-container">
    <ul className="links">
      <li className="link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="link-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)
export default Header
