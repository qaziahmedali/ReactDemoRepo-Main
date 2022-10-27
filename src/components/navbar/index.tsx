import { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../common/routes";
import menu from "../../assets/menu.svg";
import cross from "../../assets/cross.svg";
import { RootState, useAppDispatch } from "../../app/store";
import { logout } from "../../reducers/storages/sessionStorage";
import { useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { name } = useSelector((state: RootState) => state.storage);

  const [navbar, setNavbar] = useState(false);
  const Logout = () => {
    dispatch(logout());
  };

  return (
    <nav className="w-full bg-gray-800">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="text-white">Hi {name}</div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src={cross} alt="menu" width="15px" />
                ) : (
                  <img src={menu} alt="menu" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-blue-600 cursor-pointer">
                <Link to={ROUTES.BASE}>TodoList</Link>
              </li>
              <li className="text-white hover:text-blue-600 cursor-pointer">
                <div onClick={Logout}>Logout</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
