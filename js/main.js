// Selecting elements from the DOM
const day = document.getElementById("day"); // the input element for day
const month = document.getElementById("month"); // the input element for month
const year = document.getElementById("year"); // the input element for year
const form = document.getElementById("inputs"); // the form element
const smalls = document.querySelectorAll("span"); // a collection of all <span> elements in the document

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the input values and remove any leading/trailing white space
  const dayValue = day.value.trim(),
    monthValue = month.value.trim(),
    yearValue = year.value.trim();

  // Check if the input values are valid using separate functions for day, month, and year
  checkDay(dayValue);
  checkMonth(monthValue);
  checkYear(yearValue);

  // Create Date objects for input and current date to compare if input date is in the future
  const inputDate = new Date(yearValue, monthValue, dayValue);
  const todayDate = new Date();

  // If input date is in the future, set error messages for all input fields and return false
  if (inputDate >= todayDate) {
    setErrorFor(day, "Date cannot be in the future");
    setErrorFor(month, "Date cannot be in the future");
    setErrorFor(year, "Date cannot be in the future");
    return false;
  }

  // If all input values are valid, call the calculate function to calculate the age
  if (checkDay(dayValue) && checkMonth(monthValue) && checkYear(yearValue)) {
    calculate(dayValue, monthValue, yearValue);
  }
}

// This function checks if the day input is valid.
// It takes in the value of the day input as a parameter.
function checkDay(dayValue) {
  // If the day input is blank, set an error message and return false.
  if (dayValue === "") {
    setErrorFor(day, "Day cannot be blank");
    return false;

    // Otherwise, check if the day input is between 1 and 31 (inclusive).
  } else {
    if (dayValue > 31 || dayValue < 1) {
      // If the day input is not valid, set an error message and return false.
      setErrorFor(day, "Day must be between 1 and 31");
      return false;
    } else {
      // If the day input is valid, set a success message and return true.
      setSuccessFor(day);
      return true;
    }
  }
}

// This function checks the validity of the month input
function checkMonth(monthValue) {
  // Check if the input is blank
  if (monthValue === "") {
    setErrorFor(month, "Month cannot be blank");
    return false;
  } else {
    // Check if the input is within the range of 1-12
    if (monthValue > 12 || monthValue < 1) {
      setErrorFor(month, "Month must be between 1 and 12");
      return false;
    } else {
      // Set success style for the input if it is valid
      setSuccessFor(month);
      return true;
    }
  }
}
// This function checks the validity of the year input
function checkYear(yearValue) {
  // Check if year input is empty
  if (yearValue === "") {
    setErrorFor(year, "Year cannot be blank");
    return false;
  } else {
    // Check if year is within a valid range
    if (yearValue > 2023 || yearValue < 1910) {
      setErrorFor(year, "Year must be between 1910 and 2023");
      return false;
    } else {
      // Year input is valid
      setSuccessFor(year);
      return true;
    }
  }
}

//this function calculates the age
function calculate(dayValue, monthValue, yearValue) {
  // create a new date object for the current date
  let currendDate = new Date(),
    resultYear = "",
    resultMonth = "",
    resultDay = "";
  // create a new date object for the birthdate from the input values
  const bornDate = new Date(yearValue, monthValue, dayValue);
  // calculate the year difference between the current date and the birthdate
  const yearDiff = currendDate.getFullYear() - bornDate.getFullYear();
  // calculate the month difference between the current date and the birthdate
  const monthDiff = currendDate.getMonth() - bornDate.getMonth();
  // calculate the day difference between the current date and the birthdate
  const dayDiff = currendDate.getDate() - bornDate.getDate();
  // check if the birthdate is a valid date
  if (isValidDate(yearValue, monthValue, dayValue)) {
    // calculate the age year based on the month and day differences
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      resultYear = yearDiff - 1;
    } else {
      resultYear = yearDiff;
    }
    // calculate the age month based on the month difference
    if (monthDiff < 0) {
      resultMonth = 12 + monthDiff;
    } else {
      resultMonth = monthDiff;
    }
    // calculate the age day based on the day difference
    if (dayDiff < 0) {
      resultDay = 31 + dayDiff;
    } else {
      resultDay = dayDiff;
    }

    // set the container elements to display the age results
    setContaienerDate("result--year", resultYear);
    setContaienerDate("result--month", resultMonth);
    setContaienerDate("result--day", resultDay);
  } else {
    // if the birthdate is invalid, display an error message
    setErrorFor(day, "Invalid date");
    return false;
  }
}

function setContaienerDate(target, date) {
  // Get the parent element of the target container
  const resultParent = document.getElementById(target);
  // Get the span element within the target container
  const result = resultParent.querySelector("span");
  // Set the inner text of the span element to the given date value
  result.innerText = date;
  // Add the 'animate' class to the span element to trigger animation
  result.classList.add("animate");
  // If the date value is '--', return without further animation
  if (date === "--") return;
  // Animate the value change from 0 to the given date over 1000ms
  animateValue(result, 0, date, 1000);
}

// This function animates the value change from 0 to the given value
function setErrorFor(input, message) {
  // Get the parent element of the input field
  const formControl = input.parentElement;
  // Get the <small> element that will display the error message
  const small = formControl.querySelector("small");
  // Add the "error" class to the parent element to show the input field as invalid
  formControl.className = "box error";
  // Set the error message inside the <small> element
  small.innerText = message;
  // Clear the result container and show "--" as the result
  setContaienerDate("result--year", "--");
  setContaienerDate("result--month", "--");
  setContaienerDate("result--day", "--");
}

//adds success class
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "box";
}

//checks if the date is valid
function isValidDate(year, month, day) {
  var d = new Date(year, month - 1, day);
  return month == d.getMonth() + 1;
}

// Get all the small elements
smalls.forEach((small) => {
  // Add an event listener for when the animation ends
  small.addEventListener("animationend", () => {
    // Remove the "animate" class from the small element
    small.classList.remove("animate");
  });
});

// The function takes four arguments:
// obj: a DOM element that will display the animated value
// start: the starting value of the animation
// end: the ending value of the animation
// duration: the duration of the animation in milliseconds
function animateValue(obj, start, end, duration) {
  // startTimestamp is a variable that will be used to track the start time of the animation
  let startTimestamp = null;

  // step is a function that will be called on each frame of the animation
  const step = (timestamp) => {
    // If startTimestamp is null, set it to the current timestamp
    if (!startTimestamp) startTimestamp = timestamp;

    // Calculate the progress of the animation as a value between 0 and 1
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Calculate the current value of the animation based on the progress
    // and update the obj's innerHTML to display it
    obj.innerHTML = Math.floor(progress * (end - start) + start);

    // If the animation is not yet complete (progress < 1),
    // request another frame of the animation using window.requestAnimationFrame
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  // Start the animation by requesting the first frame
  window.requestAnimationFrame(step);
}
