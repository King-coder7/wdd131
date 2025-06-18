// 1. Display steps as a list
const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// 2. Convert grades to GPA and display
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Display GPA in the paragraph element
document.querySelector("#gpaDisplay").textContent = `Your GPA is ${gpa.toFixed(2)}`;

// (Optional) Filter short words (just console output)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log("Short Words:", shortWords);

// (Optional) Find index of a lucky number (just console output)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky Number Index:", luckyIndex);
