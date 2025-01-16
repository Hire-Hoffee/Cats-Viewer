import { api } from "./index";
import type { Cat } from "@/types/cats";

export const getAllCats = async (page?: number): Promise<{ data: Cat[] }> => {
  return await api.get("/v1/images/search", { params: { limit: 10, page: page ?? 1 } });
};
