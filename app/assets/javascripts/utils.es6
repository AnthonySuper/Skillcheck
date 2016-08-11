export function cloneRemovingKey(object, key) {
  let o = Object.assign({}, object);
  delete o[key];
  return o;
}

export function formToObject(form) {
  let array = $(form).serializeArray();
  let o = {};
  array.forEach((obj) => o[obj.name] = obj.value);
  return o;
}

export function apiResponseToObject(resp) {
  var data = resp.data;
  if(! Array.isArray(data)) {
    data = [data];
  }
  let o = {};
  data.forEach(d => o[d.id] = Object.assign({}, d.attributes, {id: d.id}));
  return o;
}

