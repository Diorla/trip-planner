/**
 * Used to fetch data
 * @param {string} url the API endpoint
 * @returns Promise<any>
 * @example fetchData("/data")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
 */
export default async function fetchData(url = "") {
  try {
    const result = await fetch(url);
    const response = result.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}
