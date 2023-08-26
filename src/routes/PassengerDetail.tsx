import "react-phone-number-input/style.css";
import "../PhoneInputs.css";
import { AppLayout } from "../layout";
import { PassengerForm } from "../components/PassengerForm";
import { Button } from "flowbite-react";

export default function PassengerDetail() {
  return (
    <AppLayout>
      <PassengerForm />
      <PassengerForm />

      <div className="px-5 mb-10">
        <Button
          theme={{
            color: {
              primary:
                "bg-primary text-white hover:bg-primary-strong focus:bg-primary-strong ring-primary w-full",
            },
          }}
          type="submit"
          color="primary"
          className="mt-2"
        >
          Agendar viaje
        </Button>
      </div>
    </AppLayout>
  );
}
