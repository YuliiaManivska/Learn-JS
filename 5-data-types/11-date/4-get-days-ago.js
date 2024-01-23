function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2023, 11, 2);

alert( getDateAgo(date, 1) ); // 1
alert( getDateAgo(date, 2) ); // 30
alert( getDateAgo(date, 365) ); // 2
