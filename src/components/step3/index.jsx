import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { toast } from "react-toastify";
import "./style.scss";

function Step3({
  setStep,
  step,
  restaurantSelected,
  dishesSelected,
  setDishesSelected,
  numberPeople,
}) {
  const [listDishes, setListDishes] = useState([]);

  useEffect(() => {
    const dataFilter = data.dishes.filter(
      (item) => item.restaurant === restaurantSelected
    );
    setListDishes(dataFilter);
  }, [restaurantSelected, setListDishes]);

  const handleChange = (e, i) => {
    const filterItem = dishesSelected.filter((item) => item?.name === e);
    const filterItemIndex = dishesSelected.findIndex(
      (item) => item?.name === e
    );

    if (filterItem.length < 1) {
      dishesSelected[i].name = e;
      if (e !== "") {
        dishesSelected[i].number = 1;
      } else {
        dishesSelected[i].number = 0;
      }
    } else if (filterItem.length > 0) {
      console.log(dishesSelected[filterItemIndex].number, "number");
      dishesSelected[filterItemIndex].number =
        dishesSelected[filterItemIndex].number + 1;
    }
    const newDish = [...dishesSelected];

    setDishesSelected(newDish);
  };
  const handleChangeNumber = (e, i) => {
    if (dishesSelected[i].name !== "") {
      dishesSelected[i].number = e;
      const newDish = [...dishesSelected];
      setDishesSelected(newDish);
    }
  };

  const handleCheckdishes = () => {
    let total = 0;
    dishesSelected.map((item) => {
      if (Number(item.number) > 0) {
        total = total + Number(item.number);
      }
    });
    return parseInt(total, 10);
  };

  console.log(dishesSelected);

  return (
    <div>
      <div className="d-flex ">
        <p className="fw-bold w-75">Name dishes</p>
        <p className="fw-bold w-25 text-center">Quantity</p>
      </div>
      <div className="list-dishes">
        {dishesSelected.map((item, index) => {
          return (
            <div className="d-flex gap-3">
              <select
                className="form-control mt-3"
                value={item.name}
                onChange={(e) => {
                  handleChange(e.target.value, index);
                }}
              >
                <option value="">--Please to choose a dishes--</option>
                {listDishes.map((item) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </select>

              <input
                className="form-control w-25 mt-3"
                type="number"
                min={0}
                value={item.number}
                onChange={(e) => {
                  handleChangeNumber(e.target.value, index);
                }}
              />
            </div>
          );
        })}
        <div
          className="btn btn-primary mt-4"
          onClick={() => {
            if (
              dishesSelected.length < listDishes.length &&
              dishesSelected.length <= 10
            ) {
              setDishesSelected([
                ...dishesSelected,
                { name: "", number: null },
              ]);
            }
          }}
        >
          +
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-between align-items-center">
        <button
          className="btn btn-secondary
          "
          onClick={() => {
            setStep(step - 1);
            setDishesSelected([{ name: "", number: null }]);
          }}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            const total = handleCheckdishes();
            if (total >= numberPeople) {
              setStep(step + 1);
            } else {
              toast.warning(
                "Please increase the dishes. It is not enought for people"
              );
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step3;
