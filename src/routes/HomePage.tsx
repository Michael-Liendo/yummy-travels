import { Label, TextInput, Button } from "flowbite-react";
import { FormEvent, useState } from "react";
import { AppLayout } from "../layout";

export default function App() {
  const [travelForm, setTravelForm] = useState<{
    current_address: string;
    address: string;
    travel_date: string;
    passengers: number;
  }>({ current_address: "", address: "", travel_date: "", passengers: 0 });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(travelForm);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTravelForm({ ...travelForm, [e.target.name]: e.target.value });
  };
  return (
    <AppLayout>
      <form onSubmit={handleSubmit} className="px-5 mt-5">
        <h1 className="text-2xl">¡Viaja ahora!</h1>

        <div className="my-5">
          <div className="mb-2 block">
            <Label htmlFor="current-address" value="Ubicación" />
          </div>
          <TextInput
            id="current-address"
            name="current_address"
            placeholder="Valencia, Carabobo"
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
          />
        </div>
        <div className="my-5">
          <div className="mb-2 block">
            <Label htmlFor="address" value="¿A donde quieres ir?" />
          </div>
          <TextInput
            name="address"
            id="address"
            placeholder="Caracas"
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
          />
        </div>
        <div className="flex justify-between space-x-4 my-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Fecha de viaje" />
            </div>
            <TextInput
              name="travel_date"
              id="date"
              placeholder="20/09/2023"
              required
              onChange={(e) => {
                handleInputChange(e);
              }}
              type="date"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="passengers" value="Pasajeros" />
            </div>
            <TextInput
              name="passengers"
              id="passengers"
              placeholder="1"
              required
              onChange={(e) => {
                handleInputChange(e);
              }}
              type="number"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
          >
            Buscar viaje
          </button>
        </div>
      </form>
    </AppLayout>
  );
}
