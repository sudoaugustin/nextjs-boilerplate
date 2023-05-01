import Button, { ButtonProps } from 'components/button';
import { useFormState } from 'react-hook-form';

type Props = Pick<ButtonProps, 'label' | 'icon'>;

export default function Submit(props: Props) {
  const { isValid, isSubmitting } = useFormState();
  return <Button {...props} type="submit" state={isValid ? 'disable' : isSubmitting ? 'loading' : null} />;
}
