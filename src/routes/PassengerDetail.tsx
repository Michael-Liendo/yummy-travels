import "react-phone-number-input/style.css";
import "../PhoneInputs.css";
import { AppLayout } from "../layout";
import { PassengerForm } from "../components/PassengerForm";
import { Button } from "flowbite-react";
import { HeaderComponent } from "../components";
import { useApp } from "../store/app";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function PassengerDetail() {
  const { searchData } = useApp();
  const navigate = useNavigate();

  function scheduleTrip(e: FormEvent) {
    e.preventDefault()
    navigate("/checkout")
  }

  return (
    <AppLayout>
      <HeaderComponent />

      <form className="px-5 mb-10" onSubmit={scheduleTrip}>
        {Array.from({ length: searchData.passengers }, (_, i) => i + 1).map((number) => (<PassengerForm passengerNumber={number} />))}


        <Button
          type="submit"
          theme={{
            color: {
              primary:
                "bg-primary text-white hover:bg-primary-strong focus:bg-primary-strong ring-primary w-full",
            },
          }}
          color="primary"
          className="mt-2"
        >
          Agendar viaje
        </Button>
      </form>
    </AppLayout>
  );
}
