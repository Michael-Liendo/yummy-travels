import { Tabs } from "flowbite-react";
import { AiFillCar } from "react-icons/ai";
import { BsAirplaneFill, BsBusFrontFill } from "react-icons/bs";
import TravelCard from "../components/TravelCard";
import { AppLayout } from "../layout";
import { HeaderComponent } from "../components";

export default function Booking() {
  const skeleton = new Array(10).fill(0).map((i) => (
    <div
      key={i}
      role="status"
      className="flex flex-col shadow-md bg-white rounded-lg 
          max-w-full p-5 animate-pulse"
    >
      <div className="w-full ">
        <div
          className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 
            max-w-[450px] mb-8"
        ></div>

        <main className="flex gap-2 mb-5">
          <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
          <div className="ml-auto h-2  w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
        </main>

        <footer className="mt-4 flex ">
          <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
          <div className="ml-auto h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50px]"></div>
        </footer>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  ));

  return (
    <AppLayout>
      <HeaderComponent />
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
        className="mt-2"
      >
        <Tabs.Item active icon={BsBusFrontFill} title="Autobus">
          <section className="flex flex-col gap-4">
            {skeleton}
            <TravelCard />
          </section>
        </Tabs.Item>

        <Tabs.Item icon={BsAirplaneFill} title="Avion">
          <section className="flex flex-col gap-4">
            {skeleton}
            <TravelCard />
          </section>
        </Tabs.Item>

        <Tabs.Item icon={AiFillCar} title="Carro">
          <section className="flex flex-col gap-4">
            {skeleton}
            <TravelCard />
          </section>
        </Tabs.Item>
      </Tabs.Group>
    </AppLayout>
  );
}
