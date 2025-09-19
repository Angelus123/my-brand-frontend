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
      <div className="w-5/6 mx-auto shadow-lg rounded-lg p-6">
        <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
          {/* Company Info Section */}
          <div className="md:w-1/3 h-auto p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-500 mb-6">
              Company Info
            </div>
            <div className="space-y-4">
              <TextField
                id="company-name"
                label="Company Name"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rows={10}
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-gray-100 md:w-1/3 h-auto p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-500 mb-6">
              Contact Info
            </div>
            <div className="space-y-4">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="phone"
                label="Phone"
                type="tel"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="website"
                label="Website URL"
                type="url"
                variant="outlined"
                className="w-full"
              />
              <div className="flex text left ">
                {/* <FormGroup>
                <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                      />
                    }
                    label="Option 1 - Lorem ipsum dolo"
                    labelPlacement="start"
                    sx={{
                      fontSize: "1.6rem",
                      padding: "12px",
                      borderRadius: "12px",
                    }}
                  />
                 <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                      />
                    }
                    label="Option 2 - Lorem ipsum dolo"
                    labelPlacement="start"
                    sx={{
                      fontSize: "1.6rem",
                      padding: "12px",
                      borderRadius: "12px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                      />
                    }
                    label="Option 3 - Lorem ipsum dolo"
                    labelPlacement="start"
                    sx={{
                      fontSize: "1.6rem",
                      padding: "12px",
                      borderRadius: "12px",
                    }}
                  />
                </FormGroup> */}
              </div>
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
      </div>
      <div className="w-full mx-auto">
      </div>
    </div>
  );
};

export default RegisterForm;
