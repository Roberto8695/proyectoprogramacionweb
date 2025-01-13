import React from 'react';
import { motion } from 'framer-motion';
import { FaShippingFast, FaLock, FaUndo, FaHeadset } from 'react-icons/fa';

const StoreBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaShippingFast className="w-12 h-12" />,
      title: "Envío Gratis",
      description: "En compras mayores a $50"
    },
    {
      id: 2,
      icon: <FaLock className="w-12 h-12" />,
      title: "Pago Seguro",
      description: "100% protección garantizada"
    },
    {
      id: 3,
      icon: <FaUndo className="w-12 h-12" />,
      title: "Devolución Fácil",
      description: "30 días para cambios"
    },
    {
      id: 4,
      icon: <FaHeadset className="w-12 h-12" />,
      title: "Soporte 24/7",
      description: "Atención personalizada"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoreBenefits;