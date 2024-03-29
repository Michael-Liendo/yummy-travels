import { useState } from "react";
import { apiFetch } from "../api/config";

// Generated by https://quicktype.io

export interface Trip {
  _id: string;
  type: string;
  price: number;
  description: string;
  city: string;
  destination: string;
  date: string;
  time: string;
  arrivalDate: string;
  startHour: string;
  arrivalHour: string;
  seats: number;
  availableSeats: number;
}

type TripQuery = {
  availableSeats: number;
  city: string;
  destination: string;
  date: string;
};
const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const getAll = async ({ availableSeats, city, destination, date }: TripQuery) => {
    const response = await apiFetch("/trips", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        availableSeats,
        city,
        destination,
        date
      },
    });    
    setTrips(response.data.results);
    return response.data.results
  };

  const getBusesTrips = () => {
    return  trips.length > 0 ? trips.filter((trip: Trip) => trip.type === "bus") : undefined;
  };

  const getairplanesTrips = () => {
    return  trips.length > 0 ?  trips.filter((trip: Trip) => trip.type === "flight") : undefined
  };

  const getCarsTrips = () => {
    return trips.length > 0 ? trips.filter((trip: Trip) => trip.type === "ship") : undefined;
  };

  const calculeMinorPrice = (items: Trip[]) => {
    return items.reduce((acc: Trip, curr: Trip) => {
      return curr.price < acc.price ? curr : acc;
    });
  };

  return {
    data: trips,
    getAll,
    getBusesTrips,
    getairplanesTrips,
    getCarsTrips,
    calculeMinorPrice,
  };
};

export { useTrips };
