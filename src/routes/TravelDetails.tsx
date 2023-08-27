import { Button, Card } from "flowbite-react";
import { AppLayout } from "../layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderComponent } from "../components";
import { searchData } from "./HomePage";

export const TravelDetails = () => {
  const navigate = useNavigate();
  const [trip, setTrip] = useState<Trip_Avaible | null>(null);

  const initialDate = new Date(`${trip?.date}T${trip?.time}:00.000Z`);
  const finalDate = new Date(
    `${trip?.arrivalDate}T${trip?.arrivalHour}:00.000Z`
  );

  useEffect(() => {
    setTrip({
      id: 1,
      type: "flight",
      price: 200,
      description: "Round-trip flight to Paris",
      city: "New York",
      destination: "Paris",
      date: "2022-05-01",
      time: "10:00",
      arrivalDate: "2022-05-01",
      arrivalHour: "16:00",
      availableSeats: 5,
    });
  }, []);

  return (
    <AppLayout>
      <HeaderComponent />

      {trip && (
        <section className="mw-[90%] mx-auto p-5">
          <Card>
            <main className="flex flex-row gap-5">
              <aside className="basis-1/2 text-balance">
                <div className="flex items-center gap-2 mb-2">
                  <AiFillCheckCircle className="text-primary text-sm font-medium" />
                  <h4 className="text-primary text-sm font-medium">Salida</h4>
                </div>

                <p className="text-sm">
                  {initialDate
                    .toLocaleDateString("es-ES", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })
                    .replace("a. m.", "AM")
                    .replace("p. m.", "PM")
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
                <p className="text-sm">{trip.city}</p>
              </aside>

              <div className="w-[2px] bg-primary max-h-full h-24"></div>

              <aside className="basis-1/2 text-balance">
                <div className="flex items-center gap-2 mb-2">
                  <AiFillCheckCircle className="text-primary text-sm font-medium" />
                  <h4 className="text-primary text-sm font-medium">Llegada</h4>
                </div>

                <p className="text-sm">
                  {finalDate
                    .toLocaleDateString("es-ES", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })
                    .replace("a. m.", "AM")
                    .replace("p. m.", "PM")
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
                <p className="text-sm">{trip.destination}</p>
              </aside>
            </main>
          </Card>

          <Card className="mt-4">
            <h3 className="font-bold">Terminos de tarifa</h3>
            <p className="text-sm">{trip.description}</p>
          </Card>

          <Card className="mt-4">
            <div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="text-sm">
                  Tickets{" "}
                  <span className="text-xs">
                    ({trip.availableSeats}{" "}
                    {trip.availableSeats > 1 ? "pasajeros" : "pasajero"})
                  </span>
                </div>
                <span>${trip.price}</span>
              </div>

              <div className="mt-5 flex justify-between">
                <div>
                  <span className="font-bold">Total</span>{" "}
                  <span className="text-xs">(Impuestos incluidos)</span>
                </div>
                <div className="font-bold">${trip.price}</div>
              </div>
            </div>
          </Card>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate(`/passenger/${trip._id}`)}
              type="button"
              className="text-white w-full bg-primary  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Ir al detalle del pasajero
            </button>
          </div>
        </section>
      )}
    </AppLayout>
  );
};
