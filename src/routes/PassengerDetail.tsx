import React from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import "react-phone-number-input/style.css";
import "../PhoneInputs.css";
import PhoneInput from "react-phone-number-input";

export default function PassengerDetail() {
  const [formValues, setFormValues] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    dob: "",
  });

  const [dob, setDob] = React.useState({
    day: "",
    month: "",
    year: "",
  });

  const formTheme = {
    field: {
      input: {
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary",
        },
      },
    },
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

  }

  return (
    <div className="p-5 bg-gray-300/50 h-screen">
      <form
        className="bg-white p-5 rounded-lg flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <fieldset id="email">
          <Label htmlFor="email" value="Passenger email" />
          <TextInput
            id="email"
            placeholder="Please, write your email"
            required
            type="email"
            theme={formTheme}
          />
        </fieldset>

        <fieldset id="firstName">
          <Label htmlFor="firstName" value="Passenger first name" />
          <TextInput
            id="firstName"
            placeholder="Please, write your first name"
            required
            type="text"
            theme={formTheme}
          />
        </fieldset>

        <fieldset id="lastName">
          <Label htmlFor="lastName" value="Passenger last name" />
          <TextInput
            id="lastName"
            placeholder="Please, write your last name"
            required
            type="text"
            theme={formTheme}
          />
        </fieldset>

        <PhoneInput
          placeholder="Enter phone number"
          className="rounded-lg p-4 border-2  outline-none h-12"
          value={formValues.phone}
          onChange={(phone) =>
            setFormValues({ ...formValues, phone: phone ?? "" })
          }
        />

        <fieldset id="countries">
          <Label htmlFor="countries" value="Countries" />
          <Select id="countries" placeholder="Select a country" required>
            <option>Venezuela</option>
          </Select>
        </fieldset>

        <fieldset id="DoB">
          <Label htmlFor="DoB" value="Date of birth" />
          <section className="flex gap-2 items-center w-full">
            <TextInput
              type="number"
              placeholder="DD"
              className="basis-1/4"
              value={dob.day}
              onChange={(e) => setDob({ ...dob, day: e.target.value })}
              max={31}
              min={1}
            />
            /
            <TextInput
              type="number"
              placeholder="MM"
              className="basis-1/4"
              value={dob.month}
              onChange={(e) => setDob({ ...dob, month: e.target.value })}
              max={12}
              min={1}
            />
            /
            <TextInput
              type="number"
              placeholder="YYYY"
              className="basis-1/2"
              value={dob.year}
              onChange={(e) => setDob({ ...dob, year: e.target.value })}
              min={1900}
            />
          </section>
        </fieldset>

        <Button
          theme={{
            color: {
              primary:
                "bg-primary text-white hover:bg-primary-strong focus:bg-primary-strong ring-primary",
            },
          }}
          type="submit"
          color="primary"
          className="mt-2"
        >
          Agendar viaje
        </Button>
      </form>
    </div>
  );
}
