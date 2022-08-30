import React from 'react';
import { Link } from 'react-router-dom';

const Erreur = () => {
    return (
        <div className='Erreur'>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 class="display-1 fw-bold code">404</h1>
                    <p class="fs-3"> <span class="text-danger">Oups!</span> La page est introuvable..</p>
                    <p class="lead">
                    La page que vous recherchez n'existe pas..
                    </p>
                    <Link to="/" class="btn btn-primary">Revenir à l'accueil</Link>
                </div>
            </div>
        </div>
    );
};

export default Erreur;