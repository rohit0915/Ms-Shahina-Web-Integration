/** @format */

export const Mail = () => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${response?.email}`;
  window.location.href = gmailUrl;
};
