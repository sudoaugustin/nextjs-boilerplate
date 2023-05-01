import { CSSProperties } from 'react';

export const cssvars = (vars: {}) => {
  return Object.entries(vars).reduce((vars, [name, value]) => {
    return value ? { ...vars, [`--${name}`]: value } : vars;
  }, {});
};

export const setStyle = (ele: HTMLElement | SVGElement | null | undefined, style: CSSProperties) => {
  ele && Object.entries(style).forEach(([name, value]) => ele.style.setProperty(name, value));
};

export const getAcronym = (str: string) => {
  const matches = str.match(/\b(\w)/g);
  return matches?.join('');
};

export const cookOptions = (options: Options) => {
  return options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option));
};
