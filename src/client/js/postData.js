/**
 * It will send data using post method
 * @param {string} url api endpoint
 * @param {object} data the data that will be sent to the API endpoint
 * @param {object} data.url the website to be analysed
 * @returns Promise<any>
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
    const response = result.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}
