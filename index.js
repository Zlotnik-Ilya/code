const express = require("express");
const app = express();
const port = 3000;

const bodyParser = express.json();
app.use(bodyParser);

const db = [
  { id: "1", title: "JS" },
  { id: "2", title: "NodeJS" },
];

app.get("/books", (req, res) => {
  res.send(db);
});

app.post("/books", (req, res) => {
  db.push(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3,
  ),
);
