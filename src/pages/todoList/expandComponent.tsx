import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import Loader from "../../common/loader";
import { GET_SINGLE_TODOLIST } from "../../reducers/todoList/todoSlice";
import { TodoLists } from "../../types/types";

const ExpandComponent: React.FC<{ data: TodoLists }> = (props) => {
  const { subLoading } = useSelector((state: RootState) => state.todoLists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_SINGLE_TODOLIST(props.data.id));
  }, []);
  const { singleTodoList } = useSelector((state: RootState) => state.todoLists);
  return (
    <pre>
      {!subLoading ? JSON.stringify(singleTodoList, null, 2) : <Loader />}
    </pre>
  );
};
export default ExpandComponent;
