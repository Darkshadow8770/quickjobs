import React from 'react';
import {NavLink} from 'react-router-dom';


function Menu() {
    return (
        <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div class="container liens">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                <NavLink to='/Jobs'>
                    <li class="nav-item dropdown">Jobs</li>
                </NavLink>
                <NavLink>
                    <li class="nav-item dropdown">Espace employeur</li>
                </NavLink>
                <NavLink>
                    <li class="nav-item dropdown">Espace candidat</li>
                </NavLink>
                <NavLink>
                    <li class="nav-item dropdown">A propos de nous</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Menu;