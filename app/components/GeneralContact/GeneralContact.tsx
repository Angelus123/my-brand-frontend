import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Alert } from "@mui/material";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors:any = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      console.log("mykey:-",formData)
      const response = await axios.post("YOUR_BACKEND_ENDPOINT", formData);
      console.log("Form submitted successfully", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="w-full mt-12 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-fit mx-auto shadow-lg rounded-lg p-6"
      >
        <div className="md:flex space-y-6 h-auto w-fit items-center justify-center md:space-y-0 md:space-x-6">
          {/* Company Info Section */}
          <div className="md:w-fit items-center justify-center h-auto p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-500">Contact Me</div>
            <div className="space-y-4">
              <TextField
                id="fullName"
                label="Full Name"
                variant="outlined"
                className="w-full"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                required
              />
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                className="w-full"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows={10}
                variant="outlined"
                className="w-full"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                required
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 h-auto p-6 rounded-lg shadow-sm flex items-center justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/01/20/12/girl-1561979_1280.jpg"
              alt="Company"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="w-1/4 mx-auto">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-blue-500 cursor-pointer mx-auto w-full text-center text-white px-4 py-2 my-10 rounded"
            disabled={
              !formData.fullName || !formData.email || !formData.message
            }
          >
            Submit
          </Button>
        </div>

        {submitted && (
          <Alert severity="success" className="w-fit mx-auto">
            Form submitted successfully!
          </Alert>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
