import user from "../../assets/images/user.jpg";
import arrowDown from "../../assets/images/icons/arrow-down.png";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleImage = () => {
    logOutUser();
    navigate("./login");
  };

  return (
    <>
      <div
        className="bg-[#212121] w-3/4 mx-auto mt-8 flex rounded-lg "
        onClick={() => handleImage()}
      >
        <img className="w-10 h-10 rounded-full my-2 ml-3" src={user} alt="" />
        <div className="w-full flex justify-between mr-3">
          <p className="text-white my-auto ml-3">María Perez</p>
          <img
            className="w-3 h-2 flex justify-end my-auto"
            src={arrowDown}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default User;
