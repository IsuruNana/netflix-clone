import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-md fixed-top dark">
                    <img src="http://i.dailymail.co.uk/i/pix/2016/06/21/07/3581904700000578-0-image-a-50_1466489056206.jpg" height="70px" href="#"/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-danger" href="#">Browse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">DVD</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;