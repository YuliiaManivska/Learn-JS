function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2023, 0) ); // 31
alert( getLastDayOfMonth(2023, 1) ); // 28
alert( getLastDayOfMonth(2023, 11) ); // 31
alert( getLastDayOfMonth(2024, 1) ); // 29
