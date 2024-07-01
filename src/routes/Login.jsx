import React from 'react';
import { GlobalContext } from '../GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [tentativas, setTentativas] = React.useState(0);
  const [usuarios, setUsuarios] = React.useState([]); // talvez jogar isso para o GlobalContext e utilizar um useMemo

  const global = React.useContext(GlobalContext);

  const getUsers = () => {
    setLoading(true);
    setTentativas((n) => n + 1);
    const user = usuarios.find((e) => {
      return e.email === email.toLowerCase().trim() && e.password === senha;
    });
    if (user) {
      global.logIn(user);
    } else {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (global.usuario) {
      navigate('/');
    }
  }, [global.usuario]);
  React.useEffect(() => {
    fetch('https://batissta.github.io/ecommerce-backend/usuarios.json')
      .then((res) => res.json())
      .then((json) => setUsuarios(json));
  }, []);
  return (
    <>
      <section id="login" className="container-box login">
        <form id="login-form" onSubmit={(e) => e.preventDefault()}>
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
            <button type="submit" className="button" onClick={getUsers}>
              Entrar
            </button>
          )}

          {!global.logado && tentativas > 0 && !loading && (
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
