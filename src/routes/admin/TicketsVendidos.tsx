import { AppLayout } from "../../layout";

export const TicketsVendidos = () => {
  return (
    <div>
      <AppLayout>
        <h2 className="text-2xl font-bold mb-5">Tickets Vendidos</h2>

        <section>
          <div>Total de tickets vendidos: 0</div>
        </section>
      </AppLayout>
    </div>
  );
};
