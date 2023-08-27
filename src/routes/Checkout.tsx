import { Button, Label, Modal, Radio, TextInput } from "flowbite-react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineIdentification } from "react-icons/hi";
import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pago-movil' | 'zelle'>('card')
  const [openModal, setOpenModal] = useState<string | undefined>();


  const [total, setTotal] = useState(2.88)
  const props = { openModal, setOpenModal };

  function handleFieldSet(e: unknown) {
    setPaymentMethod(e?.target?.value)
  }

  return (
    <>
      <div className=" grid lg:grid-cols-2">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del viaje</p>

          <div className="mt-8 space-y-3 rounded-lg overflow-y-scroll max-h-96 border bg-white px-2 py-4 sm:px-6">
            <div>
              <h2>Boleto viaje - 2 personas - 22$</h2>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Detalles de pago</p>
          <p className="text-gray-400 mb-2">Complete su pedido facilitando sus datos de pago.</p>
          <div className="space-y-4">
            <div>
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
            <div>

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
            <div>

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

            <fieldset
              onClick={handleFieldSet}
              className="flex max-w-md flex-col gap-4"
              id="radio"
            >
              <legend className="my-4">
                Selecciona el método de pago
              </legend>
              <div className="flex items-center gap-2">
                <Radio
                  defaultChecked
                  id="card"
                  name="countries"
                  value="card"
                />
                <Label htmlFor="card">
                  Tarjeta</Label>
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

            {paymentMethod == 'card' &&
              <div>
                <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">
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
              </div>}


            {/* <!-- Total --> */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$0.00</p>
              </div>
              <div onClick={() => props.setOpenModal('dismissible')} className="flex justify-between items-center mt-2"><p className="text-sm text-purple-800 font-semibold">Aplicar codigo de promoción</p><AiOutlinePlusCircle className="text-purple-800" /></div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">${total.toFixed(2)}</p>
            </div>
          </div>
          <Button color="purple" size="xl" className="w-full my-10">
            Reservar viaje
          </Button>
        </div>
      </div>

      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Codigo de promoción</Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="cupon" value="Cupón" />
            </div>
            <TextInput id="cupon" placeholder="XXXXX" required />
          </div>
          <Button className="text-primary" onClick={() => { props.setOpenModal(undefined); setTotal(total * 0.90) }}>Añadir</Button>
        </Modal.Body>

      </Modal>

    </>
  )
}