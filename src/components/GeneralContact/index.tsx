import GeneralContact from "./GeneralContact";
import Navigation from "../Navigation";
export default function index() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <GeneralContact />
      </div>
    </div>
  );
}
