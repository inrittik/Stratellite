export default function buildCalender(value: any) {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  const day = startDay.clone();
  const calender = [];
  while (day.isBefore(endDay, "day")) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => {
          return day.add(1, "day").clone();
        })
    );
  }

  return calender;
}
