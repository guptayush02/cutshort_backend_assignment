interface responseData {
  status: any;
  send: any
}

const success = (res:responseData, option: Object) => {
  return res.status(200).send(option);
}

const error = (res:responseData, option: Object) => {
  return res.status(404).send(option);
}

export { success, error };
