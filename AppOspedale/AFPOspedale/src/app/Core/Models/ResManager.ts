export interface HttpRes{
  body: unknown,
  state: string | null,
  error:  HttpError | null
};

export interface HttpError{
  statusCode: number,
  message: string,
  stackTrace: unknown
};
