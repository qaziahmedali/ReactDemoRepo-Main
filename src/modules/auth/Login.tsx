import { useNavigate } from "react-router-dom";
import ROUTES from "../../common/routes";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../app/store";
import { storeName } from "../../reducers/storages/sessionStorage";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const yupValidation = Yup.object().shape({
    name: Yup.string().required("name is mendatory"),
  });
  const StoreName = (data: any) => {
    dispatch(storeName(data.name));
    navigate(ROUTES.BASE);
  };

  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="LgnForm max-w-lg w-1/2 mx-auto shadow-lg bg-white rounded-lg pt-6 pb-8 px-8 mt-8 bottom-3"
        onSubmit={handleSubmit(StoreName)}
      >
        <div className="text-center font-bold pb-3">Login Form</div>
        <div className="items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            {...register("name")}
          />
        </div>
        {errors.name ? <p className="text-red-400">name is mendatory</p> : ""}
        <div className="flex pt-4 justify-end">
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
