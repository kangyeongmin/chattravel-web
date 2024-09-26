export interface TourApiResponse<T> {
  response: {
    body: T;
  };
}

export interface ApiRequestBody<T> {
  body: T;
}

export interface ApiRequestParams<T> {
  params: T;
}

export type ApiStatusCode = "CHAT201_1";

export interface TravelInfoBody {
  region: {
    SIDO: string;
    SI: string[];
  };
  days: number;
  styleList: number[];
}

export interface UserMessageBody {
  userMessage: string;
}

export interface UserMessageParams {
  chatId: number;
}

export interface SaveTravelBody {
  request: "Y";
}

export interface SaveTravelParams {
  chatId: number;
}

export interface TotalMessagesParams {
  chatId: number;
}

export interface TravelCourseParams {
  travelId: number;
}