import "./style.scss";
function Step4({
  dishesSelected,
  restaurantSelected,
  numberPeople,
  mealSelected,
  step,
  setStep,
}) {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex gap-3  w-75 ">
        <div className="w-50">
          <div className="mt-4 fw-bold">Meal:</div>
          <div className="mt-4 fw-bold">No of People:</div>
          <div className="mt-4 fw-bold">Restaurant:</div>
          <div className="mt-4 fw-bold">Dishes:</div>
        </div>
        <div className="w-50">
          {" "}
          <div className="mt-4 fw-bold">{mealSelected}</div>
          <div className="mt-4 fw-bold">{numberPeople}</div>
          <div className="mt-4 fw-bold">{restaurantSelected}</div>
          <div className="mt-4 fw-bold scroll-dishes ">
            {dishesSelected.map((item) => (
              <div className="mt-3">
                {item.name} - {item.number}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-between align-items-center w-100">
        <button
          className="btn btn-secondary "
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </button>
        <button
          className="btn btn-primary "
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step4;
