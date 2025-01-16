import { api } from "./index";
import type { Cat } from "@/types/cats";

export const getAllCats = async (): Promise<{ data: Cat[] }> => {
  return await api.get("/v1/images/search", { params: { limit: 14 } });
};
