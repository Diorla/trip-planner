import toast from "./toast";

/**
 * It will send data using post method
 * @param {string} url api endpoint
 * @param {object} data the data that will be sent to the API endpoint
 * @returns Promise<any>
 * @example postData("/update", {
    name: "Katherine Janeway",
    rank: "Captain",
    station: "USS Voyager",
  });
 */
export default async function postData(url = "", data = {}) {
  try {
    const result = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = result.text();
    return response;
  } catch (err) {
    toast(err.message);
    return null;
  }
}
