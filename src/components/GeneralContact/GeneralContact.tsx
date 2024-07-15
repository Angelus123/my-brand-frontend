import React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="w-fit mx-auto shadow-lg rounded-lg p-6">
        <div className="md:flex space-y-6 w-fit items-center justify-center md:space-y-0 md:space-x-6">
          {/* Company Info Section */}
          <div className="md:w-fit items-center justify-center h-auto p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-500 mb-6">
              Contact Me
            </div>
            <div className="space-y-4">
              <TextField
                id="company-name"
                label="Phone Number"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows={10}
                variant="outlined"
                className="w-full"
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

        <div className="w-full ">
        <div
          className="bg-blue-500 w-1/4 mx-auto text-center text-white px-4 py-2 my-10 rounded"
        >
          Submit
        </div>
      </div>
      </div>

      <div className="w-full mx-auto">
      </div>
    </div>
  );
};

export default RegisterForm;
