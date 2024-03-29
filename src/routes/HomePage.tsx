import { Label, TextInput, Button } from "flowbite-react";
import { FormEvent, useState } from "react";
import { AppLayout } from "../layout";
import imageTravel from "../assets/traveling.svg";
import { useNavigate } from "react-router-dom";
import { useApp } from "../store/app";

export interface searchData {
  current_address: string;
  address: string;
  travel_date: string;
  passengers: number;
}

export default function App() {
  const navigate = useNavigate();
  const tomorrowDate = new Date().setDate(new Date().getDate() + 1);
  const tomorrow = new Date(tomorrowDate).toISOString().split("T")[0];
  const today = new Date().toISOString().split("T")[0];

  const [travelForm, setTravelForm] = useState<searchData>({
    current_address: "",
    address: "",
    travel_date: tomorrow,
    passengers: 1,
  });
  const { setSearchData } = useApp();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO save in local storage, if by exist the data, set by default value into de input, remember last search
    setSearchData(travelForm);
    if (travelForm.travel_date === today) {
      window.alert("No puedes reservar un viaje para hoy");

      return;
    }
    navigate(
      `/booking?current_address=${travelForm.current_address.toLocaleLowerCase()}&address=${travelForm.address.toLocaleLowerCase()}&travel_date=${
        travelForm.travel_date
      }&passengers=${travelForm.passengers}`
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTravelForm({ ...travelForm, [e.target.name]: e.target.value });
  };

  return (
    <AppLayout>
      <div className="w-[300px] m-auto">
        <div>
          <img src={imageTravel} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="px-5 mt-5 mx-auto">
        <h1 className="text-3xl text-primary font-bold text-center">
          ¡Viaja ahora!
        </h1>

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
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="date" value="Fecha de viaje" />
            </div>
            <TextInput
              name="travel_date"
              id="date"
              min="2023-08-26"
              required
              value={travelForm.travel_date}
              onChange={(e) => {
                handleInputChange(e);
              }}
              type="date"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="passengers" value="Pasajeros" />
            </div>
            <TextInput
              value={travelForm.passengers}
              name="passengers"
              id="passengers"
              placeholder="1"
              min={1}
              max={12}
              required
              onChange={(e) => {
                handleInputChange(e);
              }}
              type="number"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            theme={{
              color: {
                primary:
                  "bg-primary text-white hover:bg-primary-strong focus:bg-primary-strong ring-primary",
              },
            }}
            color="primary"
            className="w-full mb-5"
          >
            Buscar viaje
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
