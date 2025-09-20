import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all the necessary components
import Header from '../components/Common/Header';
import Step1 from '../components/signup/Step1';
import Step2 from '../components/signup/Step2';
import Step3 from '../components/signup/Step3';

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    collegeEmail: '',
    password: '',
    confirmPassword: '',
    otp: '',
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  // Proceed to the next step
  const nextStep = () => setStep((prev) => prev + 1);

  // Go back to the previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle text field changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Handle OTP change specifically
  const handleOtpChange = (otpValue) => {
    setFormData({ ...formData, otp: otpValue });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            key="step1"
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 2:
        return (
          <Step2
            key="step2"
            nextStep={nextStep}
            prevStep={prevStep}
            handleOtpChange={handleOtpChange}
          />
        );
      case 3:
        return (
          <Step3
            key="step3"
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      default:
        return <div>Sign up complete!</div>;
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans">
      <Header />
      <main className="flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-700 tracking-wide">SIGN UP</h1>

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
        
      </main>
    </div>
  );
};

export default SignUpPage;