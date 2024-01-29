import React from 'react'

const DateFormatter = () => {
    const timezoneOffset = new Date().getTimezoneOffset();
  const adjustedHours = toDate.getHours() + Math.floor(timezoneOffset / 60);
  const adjustedMinutes = toDate.getMinutes() + (timezoneOffset % 60);
  const toTime = new Date(
    0,
    0,
    0,
    adjustedHours,
    adjustedMinutes
  ).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default DateFormatter