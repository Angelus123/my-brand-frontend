import React, { useState } from "react";
import { PRODUCTIVITY } from "../../utils/contentArrays";
import { FormControlLabel, Checkbox } from "@mui/material";

interface Item {
  title: string;
  src: string;
  exp: string;
  category: string;
  url: string;
}

const Productivity: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const productivity: Item[] = [...PRODUCTIVITY];
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(productivity.length).fill(false)
  );

  const toggleAccordion = (index: number) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const handleCheckboxChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      const newCheckedStates = [...checkedStates];
      newCheckedStates[index] = event.target.checked;
      setCheckedStates(newCheckedStates);
    };

  return (
    <div className="w-5/6 mx-auto">
      <div className="text-lg pt-5 font-bold mb-4 text-blue-600 ml-3">
        PRODUCTIVITY
      </div>
      <ul className="border border-gray-400 rounded-md divide-y divide-gray-400">
        {productivity.map((item, index) => {
          let classimage: string = `w-10 h-10 mr-2 bg-100% bg-center bg-no-repeat ${item.src} rounded-full`;
          return (
            <li key={index}>
              <div
                className="flex items-center cursor-pointer w-full p-2 focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndices.includes(index)}
                aria-controls={`accordion-content-${index}`}
              >
                <div className={classimage}></div>
                <span className="text-lg font-bold">{item.title}</span>
                <div className="fill-current flex ml-auto">
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
                    className={`w-4 mt-6 h-4 fill-current transform ${
                      expandedIndices.includes(index) ? "rotate-0" : "rotate-180"
                    } transition-transform duration-300`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 13.535l4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </div>
              <div
                id={`accordion-content-${index}`}
                className={`accordion-content p-4 text-left ml-3 ${
                  expandedIndices.includes(index) ? "block" : "hidden"
                }`}
              >
                <p>{item.exp}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Productivity;
