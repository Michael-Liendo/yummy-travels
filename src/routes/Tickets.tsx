import { Link } from "react-router-dom";
import { Tabs, Card } from "flowbite-react";
import { MdCardTravel, MdArchive, MdAirplaneTicket } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { tickets } from "../data/tickets";
import { formatDate, icons } from "../utils";
import { AppLayout } from "../layout";
import electionImage from '../assets/election_day.svg'

const NoTickets = () => (
  <section>
    <div className="text-2xl">
      <MdAirplaneTicket />
    </div>
    <h2>No tienes viajes próximos</h2>
  </section>
);

const NoArchived = () => (
  <section className="flex flex-col items-center">
    <div className="text-5xl text-primary-strong">
      <MdAirplaneTicket />
    </div>
    <h2 className="text-2xl font-bold">No tienes viajes archivados</h2>
  </section>
);

const TicketsContent = () => (
  <section className="px-3 flex flex-col gap-4">
    {tickets.map((ticket) => (
      <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
        <Card className="flex flex-col">
          <div className="flex justify-between text-sm text-black/70">
            <span>{formatDate(ticket.date, { date: true })}</span>
            <span>{formatDate(ticket.date, { time: true })}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>{ticket.from}</span>
              <span className="flex items-center gap-2">
                <div className="text-primary-strong">
                  <FaArrowRight />
                </div>{" "}
                {ticket.destination}
              </span>
            </div>
            <div className="text-3xl self-end text-black/60">
              {icons[ticket.type]}
            </div>
          </div>
        </Card>
      </Link>
    ))}
  </section>
);

export default function Tickets() {
  return (
    <AppLayout>
      <div className="w-[300px] m-auto mb-8">
        <div>
          <img src={electionImage} />
        </div>
      </div>
      <Tabs.Group
        aria-label="Tabs with underline"
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
        <Tabs.Item active icon={MdCardTravel} title="Próximo">
          {tickets.length ? <TicketsContent /> : <NoTickets />}
        </Tabs.Item>
        <Tabs.Item icon={MdArchive} title="Archivados">
          <NoArchived />
        </Tabs.Item>
      </Tabs.Group>
    </AppLayout>
  );
}
