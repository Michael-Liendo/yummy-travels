import { Link } from "react-router-dom";

interface Props {
  trip: Trip_Avaible;
}

export default function TravelCard({ trip }: Props) {
  const initialDate = new Date(`${trip.date}T${trip.time}:00.000Z`);
  const finalDate = new Date(`${trip.arrivalDate}T${trip.arrivalHour}:00.000Z`);

  const diff = finalDate.getTime() - initialDate.getTime();
  const difference = {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  };

  const avalabilityClass =
    trip.availableSeats > 4
      ? trip.availableSeats > 8
        ? "bg-green-500"
        : "bg-yellow-400"
      : "bg-red-500";

  return (
    <Link to={`/booking/details/${trip.id}`}>
      <article
        className="flex flex-col shadow-md bg-white rounded-lg 
        max-w-full p-5 transition duration-300 ease-in-out
        hover:shadow-lg hover:bg-gray-100
        active:scale-95 group"
      >
        <main className="flex flex-row gap-2 text-primary">
          <p className="font-bold">
            Salida:{" "}
            {initialDate.toLocaleString("en-US", {
              hour12: true,
              hour: "numeric",
            })}
          </p>

          <div
            style={{
              margin: "10px 0 20px",
              lineHeight: "0.3em",
            }}
            className="w-[25%] border-b-[0.1em] border-primary text-center"
          >
            <span
              className="bg-white px-1 group-hover:bg-gray-100 
              transition duration-300 ease-in-out"
            >
              {`${difference.hours}h ${difference.minutes}m`}
            </span>
          </div>

          <p className="font-bold">
            Llegada:{" "}
            {finalDate.toLocaleString("en-US", {
              hour12: true,
              hour: "numeric",
            })}
          </p>
        </main>

        <section className="flex flex-row gap-4 mt-2">
          <p className="basis-1/2 text-left overflow-hidden text-ellipsis">
            {trip.city}
          </p>

          <p className="basis-1/2 text-left overflow-hidden text-ellipsis">
            {trip.description}
            </p>
        </section>

        <footer className="mt-4 flex ">
          <div className="flex gap-1 items-center">
            <div className={`${avalabilityClass} w-2 h-2 rounded-full`}></div>
            <p>
              <span className="font-bold text-primary">
                Puestos disponibles:{" "}
              </span>
              {trip.availableSeats}
            </p>
          </div>

          <span className="ml-auto text-primary">$ {trip.price}</span>
        </footer>
      </article>
    </Link>
  );
}
