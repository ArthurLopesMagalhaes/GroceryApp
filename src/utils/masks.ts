export const dateMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1-$2-$3");
  return value;
};

export const phoneMask = (value: string) => {
  //(31) 98492-2152
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
