//get character details
const getCharacters = async () => {
  let loading = false;
  loading = true;
  const base = "https://swapi.dev/api/people/";
  response = await fetch(base);
  data = await response.json();
  // console.log(data);
  loading = false;
  showNameList(data);

  let loader = document.querySelector(".loader");
  if (loading) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};

window.addEventListener("load", getCharacters);
