import { Button, Label, Modal, Radio, TextInput } from "flowbite-react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineIdentification } from "react-icons/hi";
import { useState } from "react";
import { AppLayout } from "../layout";
import resumeSvg from "../assets/resume.svg";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "pago-movil" | "zelle"
  >("card");
  const [openModal, setOpenModal] = useState<string | undefined>();

  const [total, setTotal] = useState(2.88);
  const props = { openModal, setOpenModal };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFieldSet(e: any) {
    setPaymentMethod(e?.target?.value);
  }

  // TODO!:

  return (
    <AppLayout>
      <div className=" grid lg:grid-cols-2">
        <div className="px-4 pt-8">
          <img className="w-[300px] m-auto" src={resumeSvg} />
          <p className="text-2xl font-bold text-primary text-center mt-10">
            Resumen del viaje
          </p>

          <div className="mt-8 space-y-3 rounded-lg  max-h-96 border bg-white px-2 py-4 sm:px-6">
            <h2>Boleto viaje - 2 personas - 22$</h2>
          </div>
        </div>

        <div className="mt-5 pt-8 lg:mt-0">
          <div className="bg-white px-4 py-8 mb-6">
            <p className="text-lg font-bold mb-2">Detalles de pago</p>
            <p className="text-gray-400 text-sm mb-6">
              Complete su pedido facilitando sus datos de pago.
            </p>
            <div className="bg-white">
              <div className="mb-4">
                <Label htmlFor="email" className="mt-4 mb-2">
                  Email
                </Label>
                <TextInput
                  icon={MdOutlineEmail}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.email@gmail.com"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="card-holder" className="mt-4 mb-2">
                  Nombre de propietario
                </Label>
                <TextInput
                  icon={CgProfile}
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  placeholder="Joe Doe"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="card-holder" className="mt-4 mb-2">
                  Identificación
                </Label>
                <TextInput
                  icon={HiOutlineIdentification}
                  type="text"
                  id="card-id"
                  name="card-id"
                  placeholder="00.000.000"
                />
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-8">
            <div className="space-y-4">
              <div>
                <fieldset
                  onClick={handleFieldSet}
                  className="flex max-w-md flex-col gap-4"
                  id="radio"
                >
                  <legend className="my-4 text-lg font-bold">
                    Selecciona el método de pago
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      defaultChecked
                      id="card"
                      name="countries"
                      value="card"
                    />
                    <Label htmlFor="card">Tarjeta</Label>
                  </div>
                  {/* <div className="flex items-center gap-2">
              <Radio
                id="pago-movil"
                name="countries"
                value="pago-movil"
              />
              <Label htmlFor="pago-movil">
                Pago Móvil
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="zelle"
                name="countries"
                value="zelle"
              />
              <Label htmlFor="zelle">
                Zelle
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="binance-pay"
                name="countries"
                value="binance-pay"
              />
              <Label htmlFor="binance-pay">
                Binance Pay
              </Label>
            </div> */}
                </fieldset>

                {paymentMethod == "card" && (
                  <div>
                    <label
                      htmlFor="card-no"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      Detalles de la tarjeta
                    </label>
                    <div className="flex space-x-1 text-primary">
                      <TextInput
                        icon={AiOutlineCreditCard}
                        type="text"
                        id="card-no"
                        name="card-no"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                      />

                      <TextInput
                        type="text"
                        name="credit-expiry"
                        className="w-20"
                        placeholder="MM/YY"
                      />
                      <TextInput
                        type="text"
                        className="w-20"
                        name="credit-cvc"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* <!-- Total --> */}
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between py-4">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$0.00</p>
                </div>
                <div
                  onClick={() => props.setOpenModal("dismissible")}
                  className="flex justify-between items-center mt-4 mb-3"
                >
                  <p className="text-sm text-purple-800 font-semibold">
                    Aplicar codigo de promoción
                  </p>
                  <AiOutlinePlusCircle className="text-purple-800" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className=" font-bold text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-8">
            <Button color="purple" size="xl" className="w-full my-10">
              Reservar viaje
            </Button>
          </div>
        </div>
      </div>

      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Codigo de promoción</Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="cupon" value="Cupón" />
            </div>
            <TextInput id="cupon" placeholder="XXXXX" required />
          </div>
          <Button
            className="text-primary"
            onClick={() => {
              props.setOpenModal(undefined);
              setTotal(total * 0.9);
            }}
          >
            Añadir
          </Button>
        </Modal.Body>
      </Modal>
    </AppLayout>
  );
}
