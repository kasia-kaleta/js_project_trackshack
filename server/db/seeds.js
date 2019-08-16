use trackshack;
db.dropDatabase();

db.tracking.insertMany([
  {
    food_name: "falafel",
    calories: "54.87",
    fat: "3.03",
    protein: "2.26",
    carbs: "5.41"
  },
  {
    food_name: "Pizza",
    calories: "333.87",
    fat: "44.03",
    protein: "29.26",
    carbs: "66.41"
  },
  {
    food_name: "Eggs and bacon",
    calories: "150.87",
    fat: "20.03",
    protein: "40.26",
    carbs: "80.41"
  }
]);
