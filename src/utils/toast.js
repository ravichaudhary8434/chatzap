import { toast } from "react-toastify";

export const toastSuccess = (message) => {
  toast.success(message, {
    theme: "dark",
  });
};

export const toastError = (message) => {
  toast.error(message, {
    theme: "dark",
  });
};
