import type { AxiosError } from "axios";

export type ApiErrorPayload = {
  message?: string;
  code?: string;
  errors?: Record<string, string[]>;
};

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly payload?: ApiErrorPayload;

  constructor(
    message: string,
    status: number,
    options?: { code?: string; payload?: ApiErrorPayload; cause?: unknown }
  ) {
    super(message, { cause: options?.cause });
    this.name = "ApiError";
    this.status = status;
    this.code = options?.code;
    this.payload = options?.payload;
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function toApiError(error: unknown): ApiError {
  if (isApiError(error)) {
    return error;
  }

  if (isAxiosError(error)) {
    const status = error.response?.status ?? 500;
    const payload = error.response?.data as ApiErrorPayload | undefined;
    const message =
      payload?.message ??
      error.message ??
      "An unexpected error occurred. Please try again.";

    return new ApiError(message, status, {
      code: payload?.code,
      payload,
      cause: error,
    });
  }

  if (error instanceof Error) {
    return new ApiError(error.message, 500, { cause: error });
  }

  return new ApiError("An unexpected error occurred.", 500, { cause: error });
}

function isAxiosError(error: unknown): error is AxiosError<ApiErrorPayload> {
  return (
    typeof error === "object" &&
    error !== null &&
    "isAxiosError" in error &&
    (error as AxiosError).isAxiosError === true
  );
}
