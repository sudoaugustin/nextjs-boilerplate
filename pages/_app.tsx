import AppRoot from 'layouts/app-root';
import PopupCenter from 'layouts/popup-center';
import type { AppProps } from 'next/app';
import { Azeret_Mono, Josefin_Slab, Manrope } from 'next/font/google';
import { Toaster } from 'sonner';
import { SWRConfig } from 'swr';
import 'tailwind.css';
import type { RespondError } from 'utils/request';

const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Azeret_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const serif = Josefin_Slab({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export default function App({ router, Component, pageProps }: AppProps) {
  const handleRequestError = ({ status }: RespondError) => {
    status === 401 && router.push('/login');
  };

  return (
    <SWRConfig value={{ onError: handleRequestError }}>
      <div className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans`}>
        <AppRoot>
          <Component {...pageProps} />
        </AppRoot>
        <PopupCenter />
        <Toaster visibleToasts={5} />
      </div>
    </SWRConfig>
  );
}
