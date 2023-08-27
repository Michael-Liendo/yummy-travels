import React from "react";
import PhoneInput from "react-phone-number-input";
import { Button, Label, TextInput, Select } from "flowbite-react";

export const PassengerForm = () => {
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
    e.preventDefault();
  }
  return (
    <form
      className="bg-white p-5 rounded-lg flex flex-col 
    gap-4 w-full max-w-4xl"
      onSubmit={handleSubmit}
    >
      <fieldset id="email">
        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          placeholder="john@doe.com"
          required
          type="email"
          theme={formTheme}
        />
      </fieldset>

      <div className="flex gap-2 mb-2">
        <fieldset id="firstName" className="flex-1">
          <Label htmlFor="firstName" value="Nombre" />
          <TextInput
            id="firstName"
            placeholder="John"
            required
            type="text"
            theme={formTheme}
          />
        </fieldset>

        <fieldset id="lastName" className="flex-1">
          <Label htmlFor="lastName" value="Apellido" />
          <TextInput
            id="lastName"
            placeholder="Doe"
            required
            type="text"
            theme={formTheme}
          />
        </fieldset>
      </div>

      <PhoneInput
        placeholder="412-209874"
        className="rounded-lg p-4 border-2  outline-none h-12 placeholder:text-sm bg-[#f9fafb]"
        value={formValues.phone}
        defaultCountry="VE"
        onChange={(phone) =>
          setFormValues({ ...formValues, phone: phone ?? "" })
        }
      />

      <fieldset id="countries">
        <Label htmlFor="countries" value="Pais" />
        <Select id="countries" placeholder="Selecciona el pais" required>
          <option>Venezuela</option>
        </Select>
      </fieldset>

      <fieldset id="DoB">
        <Label htmlFor="DoB" value="Fecha de nacimiento" />
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
      <div>
        <Button
          theme={{
            color: {
              primary:
                "border border-secondary text-secondary bg-secondary/10 hover:bg-primary-strong focus:bg-primary-strong ring-primary",
            },
          }}
          type="submit"
          color="primary"
          className="mt-2"
        >
          Registrar pasajero
        </Button>
      </div>
    </form>
  );
};
