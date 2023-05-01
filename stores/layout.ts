import { ButtonProps } from 'components/button';
import { atom } from 'nanostores';
import { ReactNode } from 'react';

type Popup = {
  open: boolean;
  title?: ReactNode;
  description?: ReactNode;
  action?: ButtonProps;
  cancel?: ButtonProps;
  children?: ReactNode;
  className?: string;
};

export const popup = atom<Popup>({ open: false });

export const hidePopup = () => popup.set({ open: false });

export const showPopup = (value: Omit<Popup, 'open'>) => popup.set({ open: true, ...value });
