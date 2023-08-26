import { Button, Card } from "flowbite-react";
import { AppLayout } from "../layout";
import { AiOutlineLeft, AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const TravelDetails = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="bg-primary h-[15vh] rounded">
        <div className="flex items-center  p-5 gap-5">
          <span className="cursor-pointer">
            <Button color="primary" onClick={() => navigate(-1)}>
              <AiOutlineLeft className="text-white" />
            </Button>
          </span>
          <div>
            <h2 className="text-white">Barcelona - Paris</h2>
            <p className="text-white text-xs">
              Sabado 26 de Agosto, 1 pasajero
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <section
        style={{
          marginTop: "-7vh",
        }}
        className="mw-[90%] mx-auto p-5"
      >
        <Card>
          <div className="flex items-center gap-5">
            <span>
              <AiFillCheckCircle className="text-primary " />
            </span>
            <h4 className="text-primary text-xs">SALIDA</h4>
          </div>
          <div>Sabado, 26 de Agosto 9:00 AM - 8:30 AM</div>
          <div>
            <p>
              Terminal las banderas caracas - Terminal big low center valencia
            </p>
          </div>
        </Card>

        <div className="mt-10">
          <Card>
            <h3 className="font-bold">Terminos de tarifa</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <div className="mt-10">
            <Card>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span>tickets</span> (1 pasajero)
                  </div>
                  <div>$131.58</div>
                </div>
                <div className="px-5">
                  <ul className="text-xs mt-2 list-disc">
                    <li>1 pasajero</li>
                  </ul>
                </div>
                <div className="mt-5 flex justify-between">
                  <div>
                    <span className="font-bold">Total</span>{" "}
                    <span className="text-xs">(Impuestos incluidos)</span>
                  </div>
                  <div className="font-bold">$131.58</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate("/passenger-detail")}
              type="button"
              className="text-white w-full bg-primary  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Ir al detalle del pasajero
            </button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
