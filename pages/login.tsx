import { Form, Input, Password, Submit } from 'components/form';
import Page from 'components/page';
import schemas from 'utils/schemas';

const schema = schemas.object({
  email: schemas.email,
  password: schemas.password,
});

export default function Login() {
  return (
    <Page title='Login'>
      <div className="min-h-screen p-10 space-y-8 flex flex-col flex-center w-screen h-screen">
        <h1 className="text-lg text-center font-bold uppercase">Login</h1>
        <Form schema={schema} className='space-y-10 w-full max-w-sm' onSubmit={() => {}}>
          <Input name='email' label='Email' />
          <Password name='password' label='Password' />
          <Submit label='Login' />
        </Form>
      </div>
    </Page>
  );
}
