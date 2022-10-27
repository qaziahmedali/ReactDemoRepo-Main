export type TodoLists = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type InitialState = {
  isAuth: boolean;
  name: string;
};

export type TodoInitialState = {
  loading: boolean;
  subLoading: boolean;
  todoLists: TodoLists[];
  singleTodoList: TodoLists | null;
};
