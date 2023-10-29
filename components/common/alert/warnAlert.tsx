import { toast } from "react-toastify";

export const WarnAlert = (data: string) => {
    const warnAlert = toast.warn(data, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return { warnAlert }
}
export const ErrorAlert = (data: string) => {
    const errorAlert = toast.error(data, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return errorAlert
}
export const SuccessAlert = (data: string) => {
    const succAlert = toast.success(data, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return succAlert
}