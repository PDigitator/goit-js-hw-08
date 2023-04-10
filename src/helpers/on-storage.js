const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const load = key =>
  (storageValue = JSON.parse(localStorage.getItem(key)) ?? {});

const remove = key => localStorage.removeItem(key);

export { save, load, remove };
