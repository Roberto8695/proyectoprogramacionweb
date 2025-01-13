import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Zapatillas Deportivas",
      price: 89.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      color: "Negro",
      size: "42"
    }
  ]);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de Productos */}
          <div className="lg:w-2/3">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    className="flex items-center gap-4 p-4 border-b last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">
                        Color: {item.color}, Talla: {item.size}
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center border rounded-lg">
                          <button
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <AiOutlineDelete className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.price} c/u
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <AiOutlineShoppingCart className="w-16 h-16 mx-auto text-gray-400" />
                <h2 className="mt-4 text-xl font-semibold">Tu carrito está vacío</h2>
                <p className="mt-2 text-gray-600">¡Agrega algunos productos!</p>
                <Link
                  to="/catalogo"
                  className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  <BsArrowLeft className="mr-2" /> Continuar comprando
                </Link>
              </div>
            )}
          </div>

          {/* Resumen de Compra */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Resumen de Compra</h2>
              
              {/* Cupón de descuento */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Código de descuento"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Detalles del costo */}
              <div className="space-y-3 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="mt-6 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
                >
                  Proceder al pago
                </motion.button>
                <Link
                  to="/catalogo"
                  className="block text-center py-3 text-purple-600 hover:text-purple-700"
                >
                  Continuar comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;