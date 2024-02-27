import { useState } from "react";
import "./App.scss";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step4 from "./components/step4";
import SucessImg from "../src/img/dat-hang-thanh-cong.jpg";
import FistImg from "../src/img/pexels-pixabay-262978.jpg";

function App() {
  const [mealSelected, setMealSelected] = useState("");
  const [restaurantSelected, setRestaurantSelected] = useState("");
  const [dishSelect, setDishSelect] = useState([{ name: "", number: null }]);
  const [step, setStep] = useState(0);
  const [numberPeople, setNumberPeople] = useState(1);

  return (
    <div className="App d-flex justify-content-center align-items-center h-100vh">
      <ToastContainer />
      {step === 0 && (
        <div className="first-come">
          <img src={FistImg} className="fist-img" alt="img" />
          <button
            className="btn btn-primary button-come"
            onClick={() => {
              setStep(1);
            }}
          >
            Continute
          </button>
        </div>
      )}
      {step > 0 && (
        <div className="w-50  h-75">
          <h2 className="text-center">Order Now</h2>
          <div className="stepper-wrapper mt-4">
            <div
              className={`stepper-item ${
                step > 1 ? "completed" : step === 1 ? "active" : ""
              }`}
            >
              <div className="step-counter">1</div>
              <div className="step-name">Choose Meal</div>
            </div>
            <div
              className={`stepper-item ${
                step > 2 ? "completed" : step === 2 ? "active" : ""
              }`}
            >
              <div className="step-counter">2</div>
              <div className="step-name">Choose Restaurant</div>
            </div>
            <div
              className={`stepper-item ${
                step > 3 ? "completed" : step === 3 ? "active" : ""
              }`}
            >
              <div className="step-counter">3</div>
              <div claclassNamess="step-name">Choose Dishes</div>
            </div>
            <div
              className={`stepper-item ${
                step > 4 ? "completed" : step === 4 ? "active" : ""
              }`}
            >
              <div className="step-counter">4</div>
              <div className="step-name">Preview Deal</div>
            </div>
          </div>
          <div className="mt-5">
            {step === 1 && (
              <Step1
                mealSelected={mealSelected}
                setMealSelected={setMealSelected}
                setStep={setStep}
                step={step}
                setNumberPeople={setNumberPeople}
                numberPeople={numberPeople}
              />
            )}
            {step === 2 && (
              <Step2
                mealSelected={mealSelected}
                setRestaurantSelected={setRestaurantSelected}
                restaurantSelected={restaurantSelected}
                setStep={setStep}
                step={step}
              />
            )}
            {step === 3 && (
              <Step3
                setDishesSelected={setDishSelect}
                dishesSelected={dishSelect}
                restaurantSelected={restaurantSelected}
                setStep={setStep}
                step={step}
                numberPeople={numberPeople}
              />
            )}
            {step === 4 && (
              <Step4
                dishesSelected={dishSelect}
                restaurantSelected={restaurantSelected}
                numberPeople={numberPeople}
                mealSelected={mealSelected}
                step={step}
                setStep={setStep}
              />
            )}
            {step === 5 && (
              <div>
                <img src={SucessImg} alt="img" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
