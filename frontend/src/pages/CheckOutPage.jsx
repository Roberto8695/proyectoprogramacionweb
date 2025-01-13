import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const steps = [
    { number: 1, title: 'Información de Envío' },
    { number: 2, title: 'Pago con PayPal' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const initialOptions = {
    "client-id": "AXI8NX0gFWC_C2Aqsgmf0Psuh4-x5jZPS-uYVuoqjOQLZ1QGFyzlwMG5K75fyrUcqxRCsHALLX9eRU35",
    currency: "USD",
    intent: "capture",
    components: "buttons",
    "disable-funding": "credit,card",
    "enable-funding": "paypal"
  };

  const createOrder = (data, actions) => {
    try {
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: "USD",
            value: "99.99"
          }
        }]
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      console.log("Pago exitoso:", details);
      alert("Pago completado con éxito!");
    } catch (error) {
      console.error("Error capturing order:", error);
    }
  };

  const onError = (err) => {
    console.error("Error PayPal:", err);
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Pasos */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((s) => (
                <div key={s.number} className="flex-1">
                  <div className="flex items-center">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center
                      ${step >= s.number ? 'bg-purple-600 text-white' : 'bg-gray-200'}
                    `}>
                      {s.number}
                    </div>
                    <div className={`
                      flex-1 h-1 mx-2
                      ${step > s.number ? 'bg-purple-600' : 'bg-gray-200'}
                    `} />
                    <span className="text-sm hidden sm:block">{s.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold">Información de Envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Apellidos</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Código Postal</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold">Pagar con PayPal</h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Al hacer clic en el botón de PayPal, podrás completar tu compra de forma segura.
                  </p>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    style={{
                      layout: "vertical",
                      shape: "rect",
                      label: "paypal"
                    }}
                  />
                </div>
              </motion.div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Anterior
                </button>
              )}
              {step === 1 && (
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 ml-auto"
                >
                  Continuar al Pago
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;