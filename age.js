var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
//Getting the age
var floatAge = prompt("Enter your age");
floatAge = parseFloat(floatAge);
//Calculating Days,Months,Weeks,fornights
floatDays = floatAge * 365.25;
floatDays = parseFloat(floatDays).toFixed(2);
floatMonths = floatAge * 12;
floatMonths = parseFloat(floatMonths).toFixed(2);
intWeeks = floatDays / 7;
intWeeks = parseInt(intWeeks);
intFortnights = floatDays / 14;
intFortnights = parseInt(intFortnights);
//Alerting user of all of the numbers
alert("Age = " + floatAge + "\nDays = " + floatDays + "\nMonths = " + floatMonths + "\nWeeks = " + intWeeks + "\nFortnights = " + intFortnights);