export const showAlert = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  const alert = document.querySelector(".alert") as HTMLDivElement;
  alert.classList.add("z-10");
  alert.classList.remove("hidden");
  alert.querySelector("strong")!.textContent = title;
  alert.querySelector("p")!.textContent = message;
  setTimeout(() => {
    alert.classList.add("hidden");
  }, 3000);
};

export const showErrorFields = (fieldErrors: { [k: string]: string[] }, form: (HTMLFormElement | Document) = document) => {
  const fields = form.querySelectorAll(
    "input, textarea, select"
  ) as NodeListOf<HTMLInputElement | HTMLSelectElement>;
  fields.forEach((field) => {
    try {
      const fieldGroup = field.closest(".field-group") as HTMLDivElement;
      const messageElement = fieldGroup.querySelector(
        ".message"
      ) as HTMLDivElement;
      if (fieldErrors[field.name]) {
        field.classList.add("border-darkred");
        messageElement.classList.add("text-darkred");
        messageElement.classList.remove("hidden");
        messageElement.innerText = fieldErrors[field.name].join(", ");
      } else {
        field.classList.remove("border-darkred");
        messageElement.classList.remove("text-darkred");
        messageElement.classList.add("hidden");
        messageElement.innerText = "";
      }
    } catch (error) {
      console.log(error, field);
    }
  });
};
