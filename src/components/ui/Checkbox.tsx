import React from 'react';
import {
    FormControlLabel,
    Checkbox,
  } from "@mui/material";
const CustomCheckbox: React.FC = () => {
    return (
        <div className="flex items-center">
            <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                      />
                    }
                    label=""
                    labelPlacement="start"
                    sx={{
                      fontSize: "18"
                    }}
                  />
        </div>
    );
};

export default CustomCheckbox;

