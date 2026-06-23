export const successResponse = (
  res,
  statusCode,
  message,
  data = {},
  extra = {},
) => {
  const response = {
    success: true,
    statusCode,
    message,
    data,
    ...extra,
  };
  return res.status(statusCode).json(response);
};

export const errorResponse = (res, statusCode, message, errors = []) => {
  const response = {
    success: false,
    statusCode,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
};
