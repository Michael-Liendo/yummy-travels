import { Link, useNavigate } from "react-router-dom";

export default function TravelCard() {
  const navigate = useNavigate();
  const data = {
    initialHour: new Date(),
    finalHour: new Date(),
    availableSeats: 10,
  };
  data.initialHour.setHours(8);
  data.initialHour.setMinutes(0);
  data.finalHour.setHours(12);
  data.finalHour.setMinutes(30);

  const diff = data.finalHour.getTime() - data.initialHour.getTime();
  const difference = {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  };

  const avalabilityClass =
    data.availableSeats > 5
      ? data.availableSeats > 8
        ? "bg-green-500"
        : "bg-yellow-400"
      : "bg-red-500";

  return (
    <Link to={"/booking/details"}>
      <article
        className="flex flex-col shadow-md bg-white rounded-lg 
        max-w-full p-5  transition duration-300 ease-in-out
        hover:shadow-lg  hover:bg-gray-100
        active:scale-95  cursor-pointer
        "
      >
        <main className="flex flex-row gap-2 text-primary">
          <p className="font-bold">
            Salida:{" "}
            {data.initialHour.toLocaleString("en-US", {
              hour12: true,
              hour: "numeric",
            })}
          </p>

          <div
            style={{
              margin: "10px 0 10px",
              lineHeight: "0.3em",
            }}
            className="w-[25%] border-b-[0.1em] border-primary text-center"
          >
            <span className="bg-white px-1 ">
              {`${difference.hours}h ${difference.minutes}m`}
            </span>
          </div>

          <p className="font-bold">
            Llegada:{" "}
            {data.finalHour.toLocaleString("en-US", {
              hour12: true,
              hour: "numeric",
            })}
          </p>
        </main>

        <section className="flex flex-row gap-4 mt-2">
          <p className="basis-1/2 text-left">Paris supeeeeeeeeeeer largo</p>

          <p className="basis-1/2 text-left">Madrid supeeeeeeeeeeer largo</p>
        </section>

        <footer className="mt-4 flex ">
          <div className="flex gap-1 items-center">
            <div className={`${avalabilityClass} w-2 h-2 rounded-full`}></div>
            <p>
              <span className="font-bold text-primary">
                Puestos disponibles:{" "}
              </span>
              {data.availableSeats}
            </p>
          </div>

          <span className="ml-auto text-primary">
            $ {data.availableSeats * 100}
          </span>
        </footer>
      </article>
    </Link>
  );
}
