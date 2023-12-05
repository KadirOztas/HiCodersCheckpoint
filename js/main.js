import { addModal, promptWithModal } from "./modal.js";

const nameSurnameRegex = /^[A-Za-z\s]+$/;

function validateAndFormatNameSurname(name, surname) {
  const formatName = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  if (
    !nameSurnameRegex.test(name) ||
    (surname && !nameSurnameRegex.test(surname))
  ) {
    addModal(
      "Invalid Input",
      "Name and Surname must be in 'John Doe' format and cannot contain numbers.",
      () => {}
    );
    return null;
  } else {
    return { name: formatName(name), surname: formatName(surname) };
  }
}

function openModalWithValidation(
  title,
  fields,
  submitCallback,
  validationRules
) {
  promptWithModal(title, fields, (...inputs) => {
    const isValid = validationRules.every((rule, index) =>
      rule.regex.test(inputs[index])
    );
    if (isValid) {
      submitCallback(...inputs);
    } else {
      addModal(
        "Invalid Input",
        validationRules[
          inputs.findIndex(
            (input, index) => !validationRules[index].regex.test(input)
          )
        ].errorMessage,
        () =>
          openModalWithValidation(
            title,
            fields,
            submitCallback,
            validationRules
          )
      );
    }
  });
}
export {
  validateAndFormatNameSurname,
  nameSurnameRegex,
  openModalWithValidation,
};

