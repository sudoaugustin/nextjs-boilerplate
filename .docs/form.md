## [Form](../components/form/form.tsx) - `form`

   ```tsx
   import { Form } from 'components/form'
   import schemas from 'utils/schemas'
   
   const schema = scheams.object({});

   <Form schema={schema} onSubmit={() => {}}>

   <Form url = "/login" schema={schema} onError={() => {}} onSuccess={() => {}}>
   ```
   
   ### Props
   - `url?: string` - The url to submit form data.
   - `schema: object` - Yup schema object for validation.
   - `initial?: object` - The initial values for form fields.
   - `children: ReactNode or (args: UseFormReturn)=>ReactNode`
   - `reshape?: (values)=>unknown` - A function to reshape values before sending to the API.
   - `onSubmit?: SubmitHandler` - Custom form submit handler. When used u need to handle the API call yourself.
   - `onError?: ({ status, values, message, setValue, setError }) => void` - A error handler to called when the api call failed.
   - `onSuccess?: ({ data, values }) => void` - A function to call when api call success.
   
   ### Note
   - Either pass `url` or `onSubmit`. If `onSubmit` doesn't exist, a default api call submit handler will be called to `url`.
   - When `onSubmit` exist, `reshape`, `onError` and `onSuccess` have no effect.
<br/>