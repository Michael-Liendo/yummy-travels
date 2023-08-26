import { Button } from "flowbite-react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useApp } from "../store/app";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const { searchData } = useApp();

  return (
    <div className="bg-primary rounded">
      <div className="flex items-center  p-5 gap-5">
        <span className="cursor-pointer">
          <Button color="primary" onClick={() => navigate(-1)}>
            <AiOutlineLeft className="text-white" />
          </Button>
        </span>
        <div>
          <h2 className="text-white">{searchData.current_address}</h2>
          <p className="text-white text-xs">
            {searchData.address}, {searchData.passengers}{" "}
            {searchData.passengers > 1 ? "pasajeros" : "pasajero"}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
