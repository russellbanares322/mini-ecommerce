export const truncateString = (text) => {
  const slicedText = text.slice(0, 60);

  return `${slicedText}...`;
};
