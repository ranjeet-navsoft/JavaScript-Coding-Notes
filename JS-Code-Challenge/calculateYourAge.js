//calculate age by giving DOB

function calculateFullAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust the month and year if the current month/day is less than the birth month/day
  if (days < 0) {
    months--;
    // Get the total days in the previous month to adjust the day count
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years, ${months} months, and ${days} days`;
}

// Example usage
const dateOfBirth = "1990-09-07"; // YYYY-MM-DD format
console.log("Age is: " + calculateFullAge(dateOfBirth));
