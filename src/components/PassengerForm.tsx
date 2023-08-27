import { Label, TextInput } from "flowbite-react";

export const PassengerForm = ({ passengerNumber }: { passengerNumber: number }) => {
  // const [formValues, setFormValues] = React.useState({
  //   name: "",
  //   id: ""
  // });


  const formTheme = {
    field: {
      input: {
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary",
        },
      },
    },
  };


  return (
    <div
      className="bg-white p-5 rounded-lg flex flex-col 
    gap-4 w-full max-w-4xl border-b-2 border-b-slate-400 border-opacity-20"

    >

      <h2>Pasajero {passengerNumber}</h2>
      <div className="flex gap-2 mb-2">
        <Label htmlFor="name" value="Nombre" />
        <TextInput
          id="name"
          placeholder="Joe Doe"
          required
          type="text"
          theme={formTheme}
        />



        <Label htmlFor="id" value="Identificación" />
        <TextInput
          id="id"
          placeholder="v00.000.000"
          required
          type="text"
          theme={formTheme}
        />

      </div>

    </div>
  );
};
