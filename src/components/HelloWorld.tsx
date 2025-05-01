
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HelloWorld = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center p-8"
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
        <span className="text-blue-600">Hello</span>{" "}
        <span className="text-purple-600">World</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto">
        Welcome to my simple yet beautiful single page application.
      </p>
    </motion.div>
  );
};

export default HelloWorld;
