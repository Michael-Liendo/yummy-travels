import { Button } from "flowbite-react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { searchData } from "../routes/HomePage";

export const HeaderComponent = ({ travelData: { address = "", current_address = '', passengers = 0, travel_date = "00-00-00" } }: { travelData: searchData }) => {
  const navigate = useNavigate();


  return (
    <div className="bg-primary rounded">
      <div className="flex items-center  p-5 gap-5">
        <span className="cursor-pointer">
          <Button color="primary" onClick={() => navigate(-1)}>
            <AiOutlineLeft className="text-white" />
          </Button>
        </span>
        <div>
          <h2 className="text-white">{current_address}</h2>
          <p className="text-white text-xs">
            {address}, {passengers}{" "}
            {passengers > 1 ? "pasajeros" : "pasajero"}
          </p>
          <time className="text-white">{new Date(travel_date).toLocaleString('es', { month: 'long', year: "2-digit", 'day': "2-digit" })}</time>
        </div>
        <div></div>
      </div>
    </div>
  );
};
