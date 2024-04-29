import { useQuery } from "@tanstack/react-query";
import filmService, { Film } from "../axios/entities/film";

export const useFilms = () => {
  return useQuery({
    queryKey: ["films"],
    queryFn: async (): Promise<Film[]> => {
      const requestConfig: AxiosRequestConfig<null> = {
        params: null,
        config: {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
          },
        },
      };

      const filmsInfo = await filmService.getFilmsInfo(requestConfig);
      console.log(filmsInfo);
      return filmsInfo;
    },
  });
};
