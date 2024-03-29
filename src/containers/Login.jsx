import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push("/");
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button type="button">Iniciar sesión</button>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="Google Icon" />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt="Twitter Icon" />
              {' '}
              Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            {' '}
            <Link to="/login">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

export default Login;

// const mapDispatchToProps = {
//   loginRequest,
// };

// export default connect(null, mapDispatchToProps)(Login);
