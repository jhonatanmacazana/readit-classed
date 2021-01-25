const mapErrors = (errors: Object[]) => {
  const mappedErrors = errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
  return mappedErrors;
};

export default mapErrors;
