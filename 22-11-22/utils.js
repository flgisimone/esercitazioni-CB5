const cEl = (el) => document.createElement(el)
const qSel = (el) => document.querySelector(el)

const GET = async (my_url) => {
    const res = await fetch(my_url);
    return await res.json();
  };

export { GET, cEl, qSel }