import { Button } from "flowbite-react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useApp } from "../store/app";
import { MdOutlineDateRange } from "react-icons/md";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const { searchData } = useApp();
  console.log(searchData.travel_date);

  const formatDate = () => {
    const [year, month, day] = searchData.travel_date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-primary rounded-t-3xl">
      <div className="flex items-center  p-5 gap-5">
        <span className="cursor-pointer">
          <Button color="primary" onClick={() => navigate(-1)}>
            <AiOutlineLeft className="text-white text-xl" />
          </Button>
        </span>
        <div>
          <div className="flex items-center space-x-0.5">
            <FaLocationArrow color="white" className="mr-2" />
            <h1 className="text-white text-lg capitalize">
              {searchData.address}, {searchData.passengers}{" "}
              {searchData.passengers > 1 ? "pasajeros" : "pasajero"}
            </h1>
          </div>
          <div className="flex items-center space-x-0.5">
            <BiCurrentLocation color="white" className="mr-2" />
            <h2 className="text-white capitalize">
              {searchData.current_address}
            </h2>
          </div>
          <div className="flex items-center space-x-0.5">
            <MdOutlineDateRange className="text-white mr-2" />
            <div className="text-white">{formatDate()}</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
