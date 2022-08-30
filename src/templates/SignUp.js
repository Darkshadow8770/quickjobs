import React from 'react';
import { Link } from 'react-router-dom';
import '../SignUp.css';

function SignUp() {
    return (
        <div className='SignUp'>
            <header class="header">
                <nav class="navbar navbar-expand-lg navbar-light py-3">
                    <div class="container">
                        <Link to="/" class="navbar-brand">
                            <h3>QuickJobs</h3>
                        </Link>
                    </div>
                </nav>
            </header>

            <div class="container">
                <div class="row py-5 mt-4 align-items-center">
                    
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block"/>
                        <h1>Créer un compte</h1>
                        <p class="font-italic text-muted mb-0">Créez votre compte pour pouvoir profiter de tous les avantages de notre plateforme</p>
                    </div>

                    <div class="col-md-7 col-lg-6 ml-auto">
                        <form action="/SignIn" method='post'>
                            <div class="row">

                                {/* <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-user text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md"/>
                                </div>

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-user text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md"/>
                                </div> */}

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-envelope text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"/>
                                </div>

                                {/* <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-phone-square text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3"/>
                                </div>. */}

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-black-tie text-muted"></i>
                                        </span>
                                    </div>
                                    <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                                        <option value="">Choisissez votre type de compte</option>
                                        <option value="">Employeur</option>
                                        <option value="">Candidat</option>
                                    </select>
                                </div>

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-lock text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md"/>
                                </div>

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-lock text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="passwordConfirmation" type="password" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                                </div>

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                    <Link to="/SignIn" class="btn btn-primary btn-block py-2">
                                        <span class="font-weight-bold">Créer votre compte</span>
                                    </Link>
                                </div>

                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Déjà enregistré? <Link to="/SignIn" class="text-primary ml-2">Se connecter</Link></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;