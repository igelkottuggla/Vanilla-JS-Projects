const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw new Error(
      `There is no such element ${selection}. Please, check one more tiem`
    );
  }
};

export default getElement;
