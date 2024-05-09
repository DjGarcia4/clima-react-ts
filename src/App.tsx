import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWeather from "./hooks/useWeather";

function App() {
  const { fetchWeather } = useWeather();
  return (
    <>
      <h1 className="text-white text-center text-4xl font-bold my-16">
        Buscador de Clima
      </h1>
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 container mx-auto">
        <Form fetchWeather={fetchWeather} />
        <div>2</div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
