const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error('No element is selected');
};

export default getElement;
