import { toast } from "react-toastify";

function Step1({
  mealSelected,
  setMealSelected,
  setStep,
  step,
  setNumberPeople,
  numberPeople,
}) {
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center "
      style={{ height: "50vh" }}
    >
      <div className="w-100">
        {" "}
        <p className="mt-3 fw-bold">Choose a meal</p>
        <select
          className="form-control"
          value={mealSelected}
          onChange={(e) => {
            setMealSelected(e.target.value);
          }}
        >
          <option value="">--Please to choose a meal--</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <div>
          <p className="mt-3 fw-bold">Please Enter Number of people</p>
          <input
            className="form-control"
            type="number"
            value={numberPeople}
            min={1}
            onChange={(e) => {
              setNumberPeople(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end align-items-center w-100 ">
        <button
          className="btn btn-primary mt-3"
          onClick={() => {
            if (mealSelected !== "") {
              setStep(step + 1);
            } else {
              toast.warning("Please to choose a meal", {
                toastId: "customId",
              });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1;
