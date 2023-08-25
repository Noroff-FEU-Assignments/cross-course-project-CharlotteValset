export const baseApiUrl = "https://cors.noroff.dev/cms-ca.charlottevalset.no/wp-json/wc/store";
export const endpointApiUrl = "/products";
export const featuredProductEndpoint =
  "https://cms-ca.charlottevalset.no/wp-json/wc/v3/products?featured=true&consumer_key=ck_06a07cba217df9d85f383985aadd6e9d04a7c9f2&consumer_secret=cs_08b46fe3523fb2a2710c93031e636eceed3c88d7";

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
