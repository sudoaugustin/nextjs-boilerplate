import { XMarkIcon } from '@heroicons/react/20/solid';
import { useStore } from '@nanostores/react';
import { Action, Cancel, Content, Description, Overlay, Root, Title } from '@radix-ui/react-alert-dialog';
import Button from 'components/button';
import { hidePopup, popup } from 'stores/layout';

export default function PopupCenter() {
  const { open, title, action, children, description, cancel, className } = useStore(popup);

  return (
    <Root open={open} onOpenChange={(open) => !open && hidePopup()}>
      <Overlay className="fixed inset-0 z-40 bg-black/20 animate-in fade-in-0" />
      <Content className="fixed z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className={`w-full max-w-lg p-5 bg-white rounded-lg shadow-xl animate-in fade-in-0 zoom-in-75 ${className}`}>
          <Cancel className='absolute top-2 right-2 rounded-full p-1 text-gray-600 focus:ring-2 hover:text-gray-800 hover:bg-slate-100 duration-150'>
            <XMarkIcon className='w-4' />
          </Cancel>
          {title && <Title className='text-lg font-semibold text-gray-800'>{title}</Title>}
          {description && <Description className='text-sm mt-2.5 text-gray-600'>{description}</Description>}
          {children}
          {(action || cancel) && (
            <div className='mt-5 space-x-4 flex'>
              {cancel && (
                <Cancel asChild>
                  <Button intent="outline" {...cancel} />
                </Cancel>
              )}
              {action && (
                <Action asChild>
                  <Button {...action} />
                </Action>
              )}
            </div>
          )}
        </div>
      </Content>
    </Root>
  );
}
