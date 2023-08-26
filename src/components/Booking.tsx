import { Tabs } from "flowbite-react";
import { AiFillCar } from "react-icons/ai";
import { BsAirplaneFill, BsBusFrontFill } from "react-icons/bs";
import TravelCard from "./TravelCard";

export default function TabsWithIcons() {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline" >
      <Tabs.Item active icon={BsBusFrontFill} title="Autobus" >
        <TravelCard />
      </Tabs.Item>
      <Tabs.Item icon={BsAirplaneFill} title="Avion">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item icon={AiFillCar} title="Carro por puesto">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
    </Tabs.Group>
  );
}
