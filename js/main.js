const day = document.getElementById("day"),
  month = document.getElementById("month"),
  year = document.getElementById("year"),
  form = document.getElementById("inputs");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const dayValue = day.value.trim(),
    monthValue = month.value.trim(),
    yearValue = year.value.trim();

  checkDay(dayValue);
  checkMonth(monthValue);
  checkYear(yearValue);
  const inputDate = new Date(yearValue, monthValue, dayValue);
  const todayDate = new Date();
  if (inputDate >= todayDate) {
    setErrorFor(day, "Date cannot be in the future");
    setErrorFor(month, "Date cannot be in the future");
    setErrorFor(year, "Date cannot be in the future");
    return false;
  }

  if (checkDay(dayValue) && checkMonth(monthValue) && checkYear(yearValue)) {
    calculate(dayValue, monthValue, yearValue);
  }
}

function checkDay(dayValue) {
  if (dayValue === "") {
    setErrorFor(day, "Day cannot be blank");
    return false;
  } else {
    if (dayValue > 31 || dayValue < 1) {
      setErrorFor(day, "Day must be between 1 and 31");
      return false;
    } else {
      setSuccessFor(day);
      return true;
    }
  }
}

function checkMonth(monthValue) {
  if (monthValue === "") {
    setErrorFor(month, "Month cannot be blank");
    return false;
  } else {
    if (monthValue > 12 || monthValue < 1) {
      setErrorFor(month, "Month must be between 1 and 12");
      return false;
    } else {
      setSuccessFor(month);
      return true;
    }
  }
}
function checkYear(yearValue) {
  if (yearValue === "") {
    setErrorFor(year, "Year cannot be blank");
    return false;
  } else {
    if (yearValue > 2023 || yearValue < 1910) {
      setErrorFor(year, "Year must be between 1910 and 2023");
      return false;
    } else {
      setSuccessFor(year);
      return true;
    }
  }
}

function calculate(dayValue, monthValue, yearValue) {
  let currendDate = new Date(),
    resultYear = "",
    resultMonth = "",
    resultDay = "";
  const bornDate = new Date(yearValue, monthValue, dayValue);
  const yearDiff = currendDate.getFullYear() - bornDate.getFullYear();
  const monthDiff = currendDate.getMonth() - bornDate.getMonth();
  const dayDiff = currendDate.getDate() - bornDate.getDate();
  if (isValidDate(yearValue, monthValue, dayValue)) {
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      resultYear = yearDiff - 1;
    } else {
      resultYear = yearDiff;
    }
    if (monthDiff < 0) {
      resultMonth = 12 + monthDiff;
    } else {
      resultMonth = monthDiff;
    }
    if (dayDiff < 0) {
      resultDay = 31 + dayDiff;
    } else {
      resultDay = dayDiff;
    }

    setContaienerDate("result--year", resultYear);
    setContaienerDate("result--month", resultMonth);
    setContaienerDate("result--day", resultDay);
  } else {
    setErrorFor(day, "Invalid date");
    return false;
  }
}

function setContaienerDate(target, date) {
  const resultParent = document.getElementById(target);
  const result = resultParent.querySelector("span");
  result.innerText = date;
  result.classList.add("animate");
  if (date === "--") return;
  animateValue(result, 0, date, 1000);
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "box error";
  small.innerText = message;
  setContaienerDate("result--year", "--");
  setContaienerDate("result--month", "--");
  setContaienerDate("result--day", "--");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "box";
}

function isValidDate(year, month, day) {
  var d = new Date(year, month - 1, day);
  return month == d.getMonth() + 1;
}

const smalls = document.querySelectorAll("span");

smalls.forEach((small) => {
  small.addEventListener("animationend", () => {
    small.classList.remove("animate");
  });
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
