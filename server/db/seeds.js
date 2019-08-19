use trackshack;
db.dropDatabase();

db.foods.insertMany([
  {
    name: "Falafel",
    servingSize: "1",
    calories: "54.87",
    fat: "3.03",
    protein: "2.26",
    carbs: "5.41"
  },
  {
    name: "Pizza",
    servingSize: "1",
    calories: "333.87",
    fat: "44.03",
    protein: "29.26",
    carbs: "66.41"
  },
  {
    name: "Eggs and bacon",
    servingSize: "1",
    calories: "150.87",
    fat: "20.03",
    protein: "40.26",
    carbs: "80.41"
  }
]);
