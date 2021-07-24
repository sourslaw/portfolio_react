import { Link } from 'react-router-dom'; // does a bunch of cool linking shit . . .

import React from "react";

function Navbar() {
  return (
    <header>
      <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>about</Link>
          </li>
          <li>
            <Link to='/resume'>resume</Link>
          </li>
          <li>
            <Link to='/portfolio'>portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Navbar;