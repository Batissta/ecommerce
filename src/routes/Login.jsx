import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [autorizado, setAutorizado] = React.useState(false);
  const [tentativas, setTentativas] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const getUsers = async () => {
    setLoading(true);
    setTentativas((n) => n + 1);

    // const response = await fetch("http://localhost:3003/sistema/clientes");
    // const data = await response.json();
    // const exists = data.some((e) => {
    //   return e.email === email.toLowerCase().trim() && e.senha === senha;
    // });
    const response = await fetch(
      'https://batissta.github.io/ecommerce-backend/usuarios.json',
    );
    const data = await response.json();
    const exists = data.some((e) => {
      return e.email === email.toLowerCase().trim() && e.password === senha;
    });
    if (exists) {
      setAutorizado(true);
      navigate('/');
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="login" className="container-box login">
        <form id="login-form" method="post">
          <h1>LOGIN</h1>
          {!loading && (
            <div className="inputs-box">
              <label htmlFor="username">Usuário:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu nome de usuário"
                onChange={(e) => {
                  setEmail(() => e.target.value);
                }}
              />
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                onChange={(e) => {
                  setSenha(() => e.target.value);
                }}
              />
            </div>
          )}

          {!loading && (
            <button className="button" onClick={getUsers}>
              Entrar
            </button>
          )}

          {!autorizado && tentativas > 0 && !loading && (
            <p style={{ color: 'red', paddingTop: '4px' }}>
              Endereço de email ou senha estão incorretos.
            </p>
          )}
          {!loading && (
            <div className="links-cad links-login">
              <Link className="link" to="/forgetPass">
                Esqueceu sua senha?
              </Link>
              <Link className="link" to="/cadastro">
                Criar conta
              </Link>
            </div>
          )}
        </form>
        {loading && <Loading />}
      </section>
    </>
  );
};

export default Login;
