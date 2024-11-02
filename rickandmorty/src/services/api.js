import apiRickAndMorty from "../config/axiosinstance";

export const fetchCharacters = async () => {
  const response = await apiRickAndMorty.get(`character`);
  return response.data.results;
};

export const fetchEpisodes = async () => {
  const response = await apiRickAndMorty.get(`episode`);
  return response.data.results;
};

export const fetchLocations = async () => {
  const response = await apiRickAndMorty.get(`location`);
  return response.data.results;
};

export const fetchSingleCharacter = async (id) => {
  const response = await apiRickAndMorty.get(`character/${id}`);
  return response.data;
};
