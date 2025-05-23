enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
const isWeekend = (day: DayOfWeek): boolean => {
  return [DayOfWeek.Saturday, DayOfWeek.Sunday].includes(day);
};


console.log(isWeekend(DayOfWeek.Monday));    // false
console.log(isWeekend(DayOfWeek.Saturday));  // true