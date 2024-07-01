import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [usuario, setUsuario] = React.useState(null);
  const [logado, setLogado] = React.useState(false);
  const logIn = (usuario) => {
    setUsuario(usuario);
    setLogado(true);
  };
  const logOut = () => {
    setLogado(false);
    setUsuario(null);
  };
  return (
    <GlobalContext.Provider
      value={{ usuario, setUsuario, logado, setLogado, logIn, logOut }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
