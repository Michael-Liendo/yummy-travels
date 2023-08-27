import { Tabs } from "flowbite-react";
import { AiFillCar } from "react-icons/ai";
import { BsAirplaneFill, BsBusFrontFill } from "react-icons/bs";
import TravelCard from "../components/TravelCard";
import { AppLayout } from "../layout";
import { HeaderComponent } from "../components";
import { useSearchParams } from "react-router-dom";
import { searchData as searchDataType } from "./HomePage";
import { useEffect, useState } from "react";
import { useTrips } from "../hooks/useTrips";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { getAll, getBusesTrips, getCarsTrips, getairplanesTrips } = useTrips();

  const searchData: searchDataType = {
    current_address: searchParams.get("current_address") || "",
    address: searchParams.get("address") || "",
    passengers: Number(searchParams.get("passengers")) || 0,
    travel_date: searchParams.get("travel_date") || "",
  };

  console.log(searchData);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    getAll({
      availableSeats: searchData.passengers,
      city: searchData.current_address.trim(),
      destination: searchData.address.trim(),
      date: searchData.travel_date,
    }).then((data) => {
      console.log(data);
    });
  }, []);

  const skeletons = {
    bus: [10, 11, 12].map((i) => (
      <div
        key={i + 100}
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
    )),
    plane: [4, 5, 6].map((i) => (
      <div
        key={i + 200}
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
    )),
    car: [7, 8, 9].map((i) => (
      <div
        key={i + 300}
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
    )),
  };

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
            {loading
              ? skeletons.bus
              : getBusesTrips()?.map((trip) => (
                  <TravelCard key={trip._id} trip={trip} />
                ))}
          </section>
        </Tabs.Item>

        <Tabs.Item icon={BsAirplaneFill} title="Avion">
          <section className="flex flex-col gap-4">
            {loading
              ? skeletons.plane
              : getairplanesTrips()?.map((trip) => (
                  <TravelCard key={trip._id} trip={trip} />
                ))}
          </section>
        </Tabs.Item>

        <Tabs.Item icon={AiFillCar} title="Carro">
          <section className="flex flex-col gap-4">
            {loading
              ? skeletons.car
              : getCarsTrips()?.map((trip) => (
                  <TravelCard key={trip._id} trip={trip} />
                )) || <strong>No hay disponibilidad</strong>}
          </section>
        </Tabs.Item>
      </Tabs.Group>
    </AppLayout>
  );
}
