export function formDataToObject(formData) {
  const obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
}
