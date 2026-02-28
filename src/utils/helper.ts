import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { UseFormSetError, Path, FieldValues } from "react-hook-form";

export function handleValidationError<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>
) {
  if (
    typeof error !== "object" ||
    error === null ||
    !("status" in error)
  ) {
    return;
  }

  const fetchError = error as FetchBaseQueryError;

  if (fetchError.status !== 422 || !fetchError.data) return;

  const response = fetchError.data as ApiResponse;

  response.errors?.forEach((err) => {
    setError(err.field as Path<T>, {
      type: "server",
      message: err.message,
    });
  });
}