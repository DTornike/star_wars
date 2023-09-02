import axios, { AxiosInstance } from "axios";

const { VITE_API_URL } = import.meta.env || "ENV_NOT_CONFIGURED";

const axiosClient: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

enum ButtonTypes {
  primary = "primary",
  transparent = "transparent",
  actions = "actionsActive",
  actionsInactive = "actionsInactive",
  dotted = "dotted",
}

enum RouteNames {
  Home = "home",
  People = "people",
}

enum SWAPIModels {
  People = "people",
  Planets = "planets",
  Films = "films",
  Species = "species",
  Vehicles = "vehicles",
  Starships = "starships",
}

export { axiosClient, ButtonTypes, RouteNames, SWAPIModels };
