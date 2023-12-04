/** @format */

export const Call = (mail) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`;
    window.location.href = gmailUrl;
  };
  