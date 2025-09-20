import React from 'react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Step3 = ({ handleChange, values }) => {
  const submitForm = (e) => {
    e.preventDefault();
    // Here you would send the 'values' object to your backend API
    console.log("Form Submitted:", values);
    alert("Sign Up Successful! Check the browser console for the form data.");
  };

  return (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, type: 'tween' }}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-4xl"
    >
      <form onSubmit={submitForm}>
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-6">
          <InputField label="Full Name" name="fullName" value={values.fullName} onChange={handleChange} />
          <InputField label="Contact Number" name="contactNumber" type="tel" value={values.contactNumber} onChange={handleChange} />
          <InputField label="Email Address" name="emailAddress" type="email" value={values.emailAddress} onChange={handleChange} />
          <InputField label="Date of Birth" name="dob" type="date" value={values.dob} onChange={handleChange} />
          <SelectField label="Gender" name="gender" value={values.gender} onChange={handleChange} options={['Select', 'Male', 'Female', 'Other']} />
        </div>

        <div className="space-y-5 mb-6">
          <InputField label="Permanent Residential Address" name="address" value={values.address} onChange={handleChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            <InputField label="City" name="city" value={values.city} onChange={handleChange} />
            <InputField label="State" name="state" value={values.state} onChange={handleChange} />
            <InputField label="ZIP/Postal Code" name="zip" value={values.zip} onChange={handleChange} />
            <SelectField label="Country" name="country" value={values.country} onChange={handleChange} options={['Select', 'India', 'USA', 'Canada', 'UK']} />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">KYC</h2>
        <p className="text-sm text-gray-500 mb-6">KYC document upload section can be added here.</p>

        <div className="text-right mt-8">
          <button type="submit" className="bg-custom-dark-green text-white font-bold py-2 px-12 rounded-md hover:bg-opacity-90">
            SUBMIT
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// Helper components to keep the form clean
const InputField = ({ label, name, type = 'text', value, onChange }) => (
  <div>
    <label className="block text-gray-700 text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange(name)}
      required
      className="w-full bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-dark-green"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 text-sm mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange(name)}
      required
      className="w-full bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-dark-green appearance-none"
    >
      {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default Step3;