import CustomCheckbox from "../ui/Checkbox";
import { CATEGORIES } from "../../utils/contentArrays";

interface Item {
  checked: boolean;
  title: string;
  checkCol: string;
}

export default function Categories() {
  const items: Item[] = [...CATEGORIES];

  return (
    <div className="w-5/6 bg-white shadow-lg mx-auto rounded-lg">
      <div className="">
        <div className="text-lg pt-5 font-bold text-blue-600">CATEGORIES</div>
        <div className="space-y-2 pr-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex m-3 items-center  bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                {index}
              </div>
              <div className="flex-1 text-left text-gray-800">
                <label className="text-lg   font-medium">{item.title}</label>
              </div>
              <CustomCheckbox />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
