export const baseApiUrl = "https://cors.noroff.dev/cms-ca.charlottevalset.no/wp-json/wc/store";
export const endpointApiUrl = "/products";

export async function getData(url) {
  try {
    const response = await fetch(url);
    const json = response.json();

    if (json) {
      return json;
    }
  } catch (error) {
    console.log("An error occured", error);
    throw new Error(error);
  }
}
