import { Link } from "react-router-dom";
import { Tabs, Card } from "flowbite-react";
import { MdCardTravel, MdArchive, MdAirplaneTicket } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
// import { tickets } from "../data/tickets";
import { formatDate, icons } from "../utils";
import { AppLayout } from "../layout";
import electionImage from "../assets/election_day.svg";
import { useTickets } from "../hooks/useTickets";
import { useEffect, useState } from "react";

const NoTickets = () => (
  <section>
    <div className="text-2xl">
      <MdAirplaneTicket />
    </div>
    <h2>No tienes viajes próximos</h2>
  </section>
);

const SkeletorLoading = () => (
  <div className="animate-pulse bg-white mx-4 rounded-md shadow-md mb-4">
    <div className="w-full h-32 p-5 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="w-28 bg-gray-200 h-3 rounded-md"></div>
        <div className="w-16 bg-gray-200 h-3 rounded-md"></div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="w-40 bg-gray-200 h-3 rounded-md"></div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="w-10 bg-gray-200 h-3 rounded-md"></div>
              <div className="w-20 bg-gray-200 h-3 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  </div>
);

const NoArchived = () => (
  <section className="flex flex-col items-center mt-20">
    <div className="text-5xl text-primary">
      <MdAirplaneTicket />
    </div>
    <h2 className="text-2xl font-bold">No tienes viajes archivados</h2>
  </section>
);

const TicketsContent = (tickets) => (
  <section className="px-3 flex flex-col gap-4">
    {tickets.data.map((ticket) => (
      <Link to={`/tickets/${ticket?.trip?._id}`} key={ticket.id}>
        <Card className="flex flex-col">
          <div className="flex justify-between text-sm text-black/70">
            <span>{formatDate(ticket?.trip.date, { date: true })}</span>
            <span>{formatDate(ticket?.trip.date, { time: true })}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="first-letter:uppercase">
                {ticket?.trip?.city}
              </span>
              <span className="flex items-center gap-2">
                <div className="text-primary-strong">
                  <FaArrowRight />
                </div>{" "}
                {ticket?.trip?.destination}
              </span>
            </div>
            <div className="text-3xl self-end text-black/60">
              {icons[ticket?.trip.type]}
            </div>
          </div>
        </Card>
      </Link>
    ))}
  </section>
);

export default function Tickets() {
  const { data, getAll } = useTickets();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getAll();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AppLayout>
      <div className="w-[300px] m-auto mb-8">
        <div>
          <img src={electionImage} />
        </div>
      </div>

      <h4 className="text-2xl text-center font-bold text-primary mb-10">
        Tus boletos
      </h4>
      <Tabs.Group
        aria-label="Tabs with underline"
        style="underline"
        theme={{
          tablist: {
            tabitem: {
              base: "flex items-center justify-center flex-1 p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
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
        <Tabs.Item active icon={MdCardTravel} title="Próximo">
          {loading && !data.length ? (
            <SkeletorLoading />
          ) : !loading && data.length ? (
            <TicketsContent data={data} />
          ) : (
            <NoTickets />
          )}
        </Tabs.Item>
        <Tabs.Item icon={MdArchive} title="Archivados">
          <NoArchived />
        </Tabs.Item>
      </Tabs.Group>
    </AppLayout>
  );
}
