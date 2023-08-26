import { Button } from "flowbite-react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
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
          <h2 className="text-white">Barcelona - Paris</h2>
          <p className="text-white text-xs">Sabado 26 de Agosto, 1 pasajero</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
