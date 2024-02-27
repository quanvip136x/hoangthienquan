import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { toast } from "react-toastify";
function Step2({
  mealSelected,
  setStep,
  step,
  restaurantSelected,
  setRestaurantSelected,
}) {
  const [listRestaurant, setListRestaurant] = useState([]);
  useEffect(() => {
    const dataFilter = data.dishes.filter((item) =>
      item.availableMeals.includes(mealSelected)
    );
    let newListName = [];
    dataFilter.map((item) => {
      if (!newListName.includes(item.restaurant)) {
        newListName.push(item.restaurant);
      }
    });

    setListRestaurant(newListName);
  }, [mealSelected, setListRestaurant]);

  return (
    <div>
      <div style={{ height: "268px" }}>
        <p className="fw-bold">Choose a restaurant-</p>
        <select
          className="form-control"
          value={restaurantSelected}
          onChange={(e) => {
            setRestaurantSelected(e.target.value);
          }}
        >
          <option value="">--Please to choose a restaurant--</option>
          {listRestaurant.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setStep(step - 1);
            setRestaurantSelected("");
          }}
        >
          back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (restaurantSelected !== "") {
              setStep(step + 1);
            } else {
              toast.warning("Please to choose a restaurant", {
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

export default Step2;
