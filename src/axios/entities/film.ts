import { api } from "../instance";

export interface Film {
  _id: string;
  id: string;
  primaryImage: PrimaryImage;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: OriginalTitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
}

export interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
}

export interface Caption {
  plainText: string;
  __typename: string;
}

export interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}

export interface DisplayableProperty {
  value: Value;
  __typename: string;
}

export interface Value {
  plainText: string;
  __typename: string;
}

export interface Category {
  value: string;
  __typename: string;
}

export interface TitleText {
  text: string;
  __typename: string;
}

export interface OriginalTitleText {
  text: string;
  __typename: string;
}

export interface ReleaseYear {
  year: number;
  endYear: number | null;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

class FilmService {
  private readonly URL: string =
    "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";

  async getFilmsInfo(requestConfig?: AxiosRequestConfig): Promise<Film[]> {
    return (await api.get(this.URL, requestConfig?.config)).data
      .results as Film[];
  }
}

export default new FilmService();
