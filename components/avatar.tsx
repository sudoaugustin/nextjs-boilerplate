import Image from 'components/image';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { getAcronym } from 'utils';

type Props = HTMLAttributes<HTMLSpanElement> & { src: string; name?: string; fallback?: ReactNode };

export default function Avatar({ src, name = '', fallback, className, ...rest }: Props) {
  const [error, setError] = useState(false);
  return (
    <span
      {...rest}
      className={`flex flex-center font-bold text-brand-600 tracking-wider bg-gray-50 border border-gray-100 relative rounded-full overflow-hidden ${className}`}
    >
      {error ? (
        fallback || getAcronym(name)
      ) : (
        <Image src={src} alt={name} fill className="w-full h-full object-cover" onError={() => setError(true)} />
      )}
    </span>
  );
}

export type { Props as AvatarProps };
