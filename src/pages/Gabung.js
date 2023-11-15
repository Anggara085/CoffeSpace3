import React, { Fragment } from 'react'
import Menu from './Menu'

function Gabung() {
  return (
    <Fragment>
       <main className="login-body" data-vide-bg="assets/img/BackgroundLogin.jpg">
  {/* Login Admin */}
  <form className="form-default" action="BackgroundLogin.jpg" method="POST">
    <div className="login-form">
      {/* logo-login */}
      <div className="logo-login">
        <a href="index.html">
          <img src="assets/img/logo/loder.png" alt="" />
        </a>
      </div>
      <h2>Registration Here</h2>
      <div className="form-input">
        <label htmlFor="name">Full name</label>
        <input type="text" name="name" placeholder="Full name" />
      </div>
      <div className="form-input">
        <label htmlFor="name">Email Address</label>
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div className="form-input">
        <label htmlFor="name">Password</label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div className="form-input">
        <label htmlFor="name">Confirm Password</label>
        <input type="password" name="password" placeholder="Confirm Password" />
      </div>
      <div className="col-2 mx-auto back pt-30">
      <a href="/Login" className="btn btn3">
          Gabung
        </a>
      </div>
      {/* Forget Password */}
      <a href="/Login" className="registration">
        Masuk
      </a>
    </div>
  </form>
  {/* /end login form */}
</main>


    </Fragment>
  )
}

export default Gabung;