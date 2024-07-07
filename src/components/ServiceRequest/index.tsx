import React, { useState } from "react";
import Categories from "./Categories";
import Productivity from "./Productivity";
import Developments from "./Developments";
import Navigation from "../Navigation";
import Channels from "./Channels";
import GeneralContact from "./GeneralContact";
const Content = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div className="w-full mx-auto bg-gray-100 py-12">
      <Navigation />

      <GeneralContact />
      <div className="w-1/2 mx-auto bg-gray-100 py-12">
        <div className="mx-auto bg-white py-12 shadow-lg rounded-lg">
          <Productivity />
          <hr className="border-t-2 border-dashed border-gray-300 mb-5 mt-20" />
          <Developments />
          <hr className="border-t-2 border-dashed border-gray-300 mb-5 mt-20" />
          <Channels />
        </div>
        <hr className="border-t-2 border-dashed border-gray-300 mb-5 mt-20" />
        <form
          onSubmit={handleAddItem}
          className="md:flex md:space-y-0 md:space-x-4 mx-5 w-5/6 mx-auto"
        >
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
              className="w-16 h-16 mt-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 bg-cover bg-no-repeat bg-add-b"
            ></button>
          </div>
        </form>
        <div className="w-full ">
          <div className="bg-blue-500 w-1/4 mx-auto text-center text-white px-4 py-2 my-10 rounded">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
