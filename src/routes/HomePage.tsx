import { Label, TextInput, Button } from "flowbite-react";
import { FormEvent, useState } from "react";
import { AppLayout } from "../layout";
import imageTravel from "../assets/undraw_Traveling_yhxq.png";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [travelForm, setTravelForm] = useState<{
    current_address: string;
    address: string;
    travel_date: string;
    passengers: number;
  }>({ current_address: "", address: "", travel_date: "", passengers: 1 });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate(
      `/booking?${travelForm.current_address}&origin=${travelForm.address}&destination${travelForm.travel_date}&passengers${travelForm.passengers}`
    );
    // TODO save in local storage, if by exist the data, set by default value into de input, remember last search
    console.log(travelForm);
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
          <div className="flex-1">
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
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="passengers" value="Pasajeros" />
            </div>
            <TextInput
              value={travelForm.passengers}
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
            className="w-full"
          >
            Buscar viaje
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
