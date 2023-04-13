import { notFound } from "next/navigation";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: ITodo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div>
      TodoPage:
      <p>{todoId}</p>
      <p>{todo.title}</p>
      <p>{todo.completed ? "yes" : "no"}</p>
    </div>
  );
};

export default TodoPage;
