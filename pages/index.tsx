import Button from 'components/button';
import Motion from 'components/motion';
import { useFetch, useMutate } from 'hooks/request';
import request from 'utils/request';
import * as Yup from 'yup';

type Todo = { userId: number; id: number; title: string; completed: string };

const schema = Yup.object({
  title: Yup.string().required('Title is required'),
  completed: Yup.boolean().default(false),
});

export default function Home() {
  const { mutate, isMutating } = useMutate<Todo>('todos');
  const { data: todos, error, mutate: setTodos, isLoading } = useFetch<Todo[]>('todos');

  const handleAdd = () => {
    mutate({});
  };

  const handleComplete = (todo: Todo) => {
    mutate({ url: `todos/${todo.id}`, method: 'PATCH', payload: { completed: !todo.completed } });
  };

  // return (
  //   <div className='w-screen h-full flex flex-col max-w-sm mx-auto py-6'>
  //     <Button text='Add Todo' inline state={isMutating ? 'loading' : null} onClick={handleAdd} />
  //     <div className='py-6'>
  //       {isLoading ? (
  //         <ProgressBar size='lg' className='mx-auto my-5' />
  //       ) : (
  //         <ul>
  //           {todos?.map(({ id, title, completed, userId }) => (
  //             <li key={id} className='flex items-center gap-x-2 p-2 my-4 bg-brand-50 text-brand-600 rounded-md'>
  //               <i
  //                 className={checkBoxClass({ state: completed ? 'checked' : null })}
  //                 onClick={() => handleComplete({ id, title, completed, userId })}
  //               />
  //               <span>{title}</span>
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   </div>
  // );
}
