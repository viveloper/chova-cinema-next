import { ReactNode } from 'react';
import { Theme } from '../types';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
  theme?: Theme;
}

const Layout = ({ children, theme = 'light' }: Props) => {
  const logout = () => {};
  return (
    <>
      <Navbar theme={theme} isLogin={false} onLogout={logout} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
