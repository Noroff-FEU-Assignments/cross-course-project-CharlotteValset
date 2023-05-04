export const baseApiUrl = "https://api.noroff.dev/api/v1";
export const endpointApiUrl = "/square-eyes";

export async function getData(url) {
  try {
    const response = await fetch(url);
    const json = response.json();

    if (json) {
      return json;
    }
  } catch (error) {
    console.log("An error occured", error);
  }
}
