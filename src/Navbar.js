import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="#">Petrus Darius Page</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <a class="nav-link page-scroll" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link page-scroll" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link page-scroll" href="#about">Logo</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link page-scroll" href="#message">Message</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Navbar;