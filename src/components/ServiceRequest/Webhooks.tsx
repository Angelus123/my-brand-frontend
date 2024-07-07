import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTIVITY } from '../../utils/contentArrays';
interface Item {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      title: "Click this item to see more details about item 1.",
      description: "Details about item 1. Nullam ut augue auctor, tristique neque quis, euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Click this item to see more details about item 2. ",
      description: "Details about item 2. Nullam ut augue auctor, tristique neque quis, euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [detailsVisibility, setDetailsVisibility] = useState<{
    [key: number]: boolean;
  }>({});

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: Item = { title, description };
    setItems([...items, newItem]);
    setTitle("");
    setDescription("");
  };

  const toggleDetails = (index: number) => {
    setDetailsVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 p-5">
      <div className="w-5/6 bg-white shadow-lg rounded-lg p-6">
        <div className="text-2xl font-bold mb-6 text-blue-600">Webhooks</div>
        <div className="p-4 w-full mx-auto">
          <ul className="space-y-4 h-auto pr-2">
            {items.map((item, index) => (
              <li key={index} className="mb-5">
                <div
                  onClick={() => toggleDetails(index)}
                  className="cursor-pointer flex w-full items-center border-b-1 bg-gray-100 rounded-lg pb-2"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-medium text-left flex-1">
                    {item.title}
                  </h3>
                  <svg
                                className={`w-4 h-4 fill-current ml-auto transform ${
                                    detailsVisibility[index] ? 'rotate-0' : 'rotate-180'
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
                        <p className="text-left">{item.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          <hr className="border-t-2 border-dashed border-gray-300 mb-5 mt-20" />
          <form onSubmit={handleAddItem} className="flex  md:space-y-0 md:space-x-4">
            <div className="flex-1 mt-3">
              <input
                id="title"
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1 ">
              <textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 mt-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 mt-8 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
