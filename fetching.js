export const getCurrensy = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return {
      base_code: data["base_code"],
      conversion_rates: data["conversion_rates"],
    };
  } catch (error) {
    console.error(error);
  }
};
