import Footer from './footer';
import Header from './header';
import { useRouter } from 'next/router';
import { Fragment, ReactNode } from 'react';

const bareRoutes = ['/login', '/register'];

export default function AppRoot({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isBareRoute = bareRoutes.find((route) => router.pathname.includes(route));

  return (
    <Fragment>
      {!isBareRoute && <Header />}
      {children}
      {!isBareRoute && <Footer />}
    </Fragment>
  );
}
