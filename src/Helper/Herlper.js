/** @format */

export const View_description = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export const getCorrectTime = (time) => {
  const updateTime = new Date(time);
  const timezoneOffset = updateTime?.getTimezoneOffset();
  const adjustedTime = new Date(updateTime.getTime() + timezoneOffset * 60000);
  const format = adjustedTime?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return format;
};

export const getCorrectTime2 = (time) => {
  const updateTime = new Date(time);
  const timezoneOffset = updateTime?.getTimezoneOffset();
  const adjustedTime = new Date(updateTime.getTime() + timezoneOffset * 60000);
  return adjustedTime;
};


