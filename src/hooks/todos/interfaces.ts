export interface ITodo {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface ITodoContext {
  todos: ITodo[];
  getTodosFromDB: () => void;
  createTodo: (seletectedTodo: ITodo) => void;
  updateTodo: (seletectedTodo: ITodo) => void;
  deleteTodo: (seletectedTodo: ITodo) => void;
  getSearchedWord: (word: string) => void;
  filteredTodos: ITodo[];
}

export interface ITodoProvider {
  children: React.ReactNode;
}
