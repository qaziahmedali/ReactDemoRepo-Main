import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { RootState, useAppDispatch } from "../../app/store";
import { GET_ALL_TODOLISTS } from "../../reducers/todoList/todoSlice";
import ExpandComponent from "./expandComponent";
import { useSelector } from "react-redux";
import Loader from "../../common/loader";
import { TodoLists } from "../../types/types";
function TodoList() {
  const dispatch = useAppDispatch();

  const { todoLists, loading } = useSelector(
    (state: RootState) => state.todoLists
  );

  const [rowId, setRowId] = useState(0);
  useEffect(() => {
    dispatch(GET_ALL_TODOLISTS());
  }, []);

  const columns = [
    {
      name: <b>Sr No</b>,
      selector: (row: TodoLists) => row.id,
      sortable: true,
      reorder: true,
      width: "150px",
    },
    {
      name: <b>UserId</b>,
      selector: (row: TodoLists) => row.userId,
      sortable: true,
      reorder: true,
      width: "150px",
    },
    {
      name: <b>Completed</b>,
      selector: (row: TodoLists) => (row.completed ? "completed" : "pending"),
      sortable: true,
      reorder: true,
      width: "250px",
    },
    {
      name: <b>Name</b>,
      selector: (row: TodoLists) => row.title,
      sortable: true,
      reorder: true,
    },
  ];
  const viewManageData = (row: TodoLists) => {
    setRowId(row.id);
  };

  return (
    <div>
      {!loading ? (
        <DataTable
          title={<h3>TodoList</h3>}
          columns={columns}
          data={todoLists}
          defaultSortFieldId={1}
          pagination
          highlightOnHover
          expandableRows
          onRowExpandToggled={(bol: boolean, row: TodoLists) => {
            viewManageData(row);
          }}
          expandableRowExpanded={(row: TodoLists) => row.id == rowId}
          expandableRowsComponent={ExpandComponent}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default TodoList;
