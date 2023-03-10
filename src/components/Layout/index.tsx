import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { Theme } from '../types';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children?: ReactNode;
  theme?: Theme;
}

const Layout = ({ children, theme = 'light' }: Props) => {
  const { isLogin, logout } = useAuth();
  return (
    <>
      <Navbar theme={theme} isLogin={isLogin} onLogout={logout} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
