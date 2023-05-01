import '@total-typescript/ts-reset';
import { SVGProps as $SVGProps } from 'react';

declare global {
  type SVGProps = $SVGProps<SVGSVGElement>;

  type Options = ({ label: string; value: string } | string)[];

  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': unknown;
    }
  }
}
