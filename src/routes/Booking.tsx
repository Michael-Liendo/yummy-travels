import { Button, Tabs } from "flowbite-react";
import { AiFillCar, AiOutlineLeft } from "react-icons/ai";
import { BsAirplaneFill, BsBusFrontFill } from "react-icons/bs";
import TravelCard from "../components/TravelCard";
import { AppLayout } from "../layout";
import { useBooking } from "../hooks";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const booking = useBooking();
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="bg-primary rounded">
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
      <Tabs.Group
        aria-label="Travel modes"
        style="underline"
        theme={{
          tablist: {
            tabitem: {
              base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-[3px] focus:ring-primary focus:outline-none",
              styles: {
                underline: {
                  active: {
                    on: "text-primary dark:text-primary border-b-2 border-primary dark:border-primary",
                    off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                  },
                },
              },
            },
          },
        }}
      >
        <Tabs.Item active icon={BsBusFrontFill} title="Autobus">
          <TravelCard />
        </Tabs.Item>
        <Tabs.Item icon={BsAirplaneFill} title="Avion">
          <p>
            This is
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Tabs.Item>
        <Tabs.Item icon={AiFillCar} title="Carro">
          <p>
            This is
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Tabs.Item>
      </Tabs.Group>
    </AppLayout>
  );
}
