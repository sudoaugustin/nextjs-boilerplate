import Head from 'next/head';
import { HTMLAttributes } from 'react';

type Props = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  title: string;
  image?: string;
  description?: string;
};

export default function Page({ title, image, children, description, ...rest }: Props) {
  return (
    <main {...rest}>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta property='twitter:title' content={title} />

        {description && (
          <>
            <meta name='description' content={description} />
            <meta property='og:description' content={description} />
            <meta property='twitter:description' content={description} />
          </>
        )}

        {image && (
          <>
            <meta property='og:image' content={image} />
            <meta property='twitter:image' content={image} />
          </>
        )}
      </Head>
      {children}
    </main>
  );
}

export type { Props as PageProps };
