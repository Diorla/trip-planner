import Toastify from "toastify-js";

/**
 * It's just a wrapper for `toastify-js`
 * @param {string} text the message
 * @param {boolean} success use to distinct between error or success feedback
 * @returns Toastify
 */
export default function toast(text, success) {
  return Toastify({
    text,
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: success ? "green" : "red",
    },
  }).showToast();
}
