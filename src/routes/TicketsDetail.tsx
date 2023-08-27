import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Accordion } from "flowbite-react";
import { tickets } from "../data/tickets";
import { FaArrowRight, FaClock, FaChevronLeft } from "react-icons/fa";
import { formatDate, icons } from "../utils";

export default function Tickets() {
  const params = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<(typeof tickets)[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      if (!tickets.length) {
        window.location.reload();
        return;
      }

      const result = tickets.find(
        (t) => t.id === params.id
      ) as (typeof tickets)[0];

      if (!result) {
        setError("No tickets found");
        return;
      }

      setTicket(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  if (!params?.id) {
    navigate(-1);
    return;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error cargando los tickets</span>;
  }

  return (
    <section className="bg-gray-200 min-h-screen">
      <header className="mb-2 pb-8 px-4 py-3 bg-primary text-white/90">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-3xl mb-2">{ticket?.from}</span>
            <span className="text-lg flex items-center gap-2">
              <FaArrowRight /> {ticket?.destination}
            </span>
          </div>
          <div className="text-3xl self-end">{icons[ticket?.type]}</div>
        </div>
      </header>

      <div className="bg-white px-4 py-6 mb-0.4 flex items-center gap-2 text-black/70">
        <div>
          <FaClock />
        </div>
        <div>{ticket?.date && formatDate(ticket?.date)}</div>
      </div>
      <Accordion className="w-full bg-white rounded-none py-0 mb-2" collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Pasajeros</Accordion.Title>
          <Accordion.Content>
            <ul className="flex flex-col gap-4">
              <li className="">Ricardo</li>
              <li className="">Evan You</li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <div className="bg-white py-4">
        <div className="bg-white py-4 px-4 border-b">
          <h5 className=" text-xl font-bold border-gray-200">Tu viaje</h5>
        </div>
        <div className="bg-white px-4 py-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 border-2 rounded-full border-black block"></span>
              <h5>Caracas, La Bandera</h5>
            </div>
            <div className="text-sm text-black/70">08:45</div>
          </div>
          <div className="text-sm flex gap-2 ml-5 mt-2 items-center justify-between mb-4 text-black/50">
            <div className="flex items-center gap-2">
              <div className="">{icons[ticket?.type]}</div>
              <div>Flota Express</div>
            </div>
            <div className="text-sm text-black/50">02:00</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 border-2 rounded-full border-black block"></span>
              <h5>Valencia</h5>
            </div>
            <div className="text-sm text-black/90">12:45</div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4 mt-8">
        <button className="flex items-center gap-2" onClick={() => navigate(-1)}>
          <div><FaChevronLeft /></div> regresar
        </button>
      </div>
    </section>
  );
}
