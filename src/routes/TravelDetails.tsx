import { Card } from "flowbite-react";
import { AppLayout } from "../layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderComponent } from "../components";
import { apiFetch } from "../api/config";
import { useApp } from "../store/app";

export const TravelDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip_Avaible | null>(null);

  const { searchData } = useApp();

  useEffect(() => {
    apiFetch.get(`${"/trips"}/${id}`).then((response) => {
      setTrip(response.data);
    });
  }, []);

  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

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
                  {formatDate(trip?.date)} a las {trip.arrivalHour}hrs
                </p>
                <p className="text-sm capitalize">{trip.city}</p>
              </aside>

              <div className="w-[2px] bg-primary max-h-full h-24"></div>

              <aside className="basis-1/2 text-balance">
                <div className="flex items-center gap-2 mb-2">
                  <AiFillCheckCircle className="text-primary text-sm font-medium" />
                  <h4 className="text-primary text-sm font-medium">Llegada</h4>
                </div>

                <p className="text-sm">
                  {formatDate(trip?.arrivalDate)} a las {trip.arrivalHour}hrs
                </p>
                <p className="text-sm capitalize">{trip.destination}</p>
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
                    ({searchData.passengers}{" "}
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
                <div className="font-bold">
                  ${trip.price * searchData.passengers}
                </div>
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
