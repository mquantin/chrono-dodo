export const getExpiryDuration = (expiryDuration: number) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + expiryDuration);
  return time;
};
