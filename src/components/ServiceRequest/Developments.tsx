import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { DEVELOPMENT } from "../../utils/contentArrays";
interface Item {
  title: string;
  src: string;
  exp: string;
  category: string;
  url: string;
}

const Development: React.FC = () => {
  const developments: Item[] = DEVELOPMENT;
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(developments.length).fill(false)
  );

  const [detailsVisibility, setDetailsVisibility] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDetails = (index: number) => {
    setDetailsVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCheckboxChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      const newCheckedStates = [...checkedStates];
      newCheckedStates[index] = event.target.checked;
      setCheckedStates(newCheckedStates);
    };

  return (
    <div className="w-5/6  w-5/6 mx-auto mt-8 ">
      <div className="text-xl font-bold mb-6 ml-3 pt-5 text-blue-600">
        DEVELOPMENT
      </div>
      <div className="p-4 bg-white rounded-lg py-10 w-full mx-auto">
        <ul className="space-y-4 h-auto pr-2">
          {developments.map((item, index) => {
            let classimage: string = `w-10 h-10 mr-2  bg-100% bg-center bg-no-repeat ${item.src} rounded-full`;
            return (
              <li key={index} className="mb-5">
                <div
                  onClick={() => toggleDetails(index)}
                  className="cursor-pointer flex w-full items-center border-b-1 bg-gray-100 rounded-lg  px-3"
                >
                  <div className={classimage}></div>
                  <h3 className="text-lg font-medium text-left flex-1">
                    {item.title}
                  </h3>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedStates[index]}
                        onChange={handleCheckboxChange(index)}
                        onClick={(e) => e.stopPropagation()}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
                      />
                    }
                    label=""
                    labelPlacement="start"
                    sx={{
                      fontSize: "1.6rem",
                      padding: "5px",
                      borderRadius: "12px",
                    }}
                  />

                  <svg
                    className={`w-4 h-4 fill-current ml-auto transform ${
                      detailsVisibility[index] ? "rotate-0" : "rotate-180"
                    } transition-transform duration-300`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 13.535l4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
                <AnimatePresence initial={false}>
                  {detailsVisibility[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mt-2 p-4 ">
                        <p className="text-left">{item.exp}</p>
                      </div>
                      { item.title === "Webhook"&&<form
                        // onSubmit={handleAddItem}
                        className="md:flex md:space-y-0 md:space-x-4 mx-5 w-5/6 mx-auto"
                      >
                        <div className="flex-1 mt-3">
                          <input
                            id="title"
                            placeholder="Title"
                            type="text"
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                            className="border p-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="flex-1 ">
                          <textarea
                            id="description"
                            placeholder="Description"
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                            className="border p-2 mt-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-16 h-16 mt-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 bg-cover bg-no-repeat bg-add-b"
                          ></button>
                        </div>
                      </form>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Development;
