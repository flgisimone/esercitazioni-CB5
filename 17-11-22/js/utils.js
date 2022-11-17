export const qs = (type) => document.querySelector(type);

export const ce = (type) => document.createElement(type);

export const GET = async (BASE_URL) =>
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);