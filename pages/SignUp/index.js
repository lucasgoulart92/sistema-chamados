import { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('clicou')
    // preventDefault impede que o Submit atualize a página
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} />
        </div>

        <form onSubmit={handleSubmit} >
          <h1>Entrar</h1>
          <input type="text" placeholder='email@email.com' value={email} onChange={ (e) => setEmail(e.target.value) } />
          <input type="password" placeholder='Sua senha' value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <input type="password" placeholder='Repita a senha' value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <button type="submit">Acessar</button>
        </form>
        {/*
        value são as consts que definimos lá em cima na função
        onChange vai alterar os valores
        onSubmit vai enviar os novos valores
        */}
        

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignUp;