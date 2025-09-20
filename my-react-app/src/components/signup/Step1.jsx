import React from "react";
import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Step1 = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    // You can add validation logic here
    // For example, check if passwords match
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    nextStep();
  };

  return (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, type: "tween" }}
      className="w-full max-w-2xl p-8 rounded-2xl bg-[#FFFFFF]"
    >
      <form onSubmit={continueStep} className="flex flex-col space-y-8">
        <div>
          <label className="block text-custom-dark-green-700 text-sm mb-2">
            College Email
          </label>
          <input
            type="email"
            value={values.collegeEmail}
            onChange={handleChange("collegeEmail")}
            required
            className="w-full bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-dark-green"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Create Password
          </label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            required
            minLength="6"
            className="w-full bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-dark-green"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            required
            className="w-full bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-dark-green"
          />
        </div>

        <div className="flex justify-between items-center pt-4">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline border-b border-dotted border-blue-600"
          >
            Are you a Trust/NGO?
          </a>
          <button
            type="submit"
            className="bg-[#3E7C00] text-white font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            Next
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Step1;
