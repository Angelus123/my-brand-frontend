import GeneralContact from "./GeneralContact";
import NaviBar from "../NavBar";
export default function index() {
  return (
    <div>
      <NaviBar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <GeneralContact />
      </div>
    </div>
  );
}
