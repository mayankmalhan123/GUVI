const btn = document.getElementById("brewery_btn");
const listEle = document.querySelector(".breweries");
const url = "https://api.openbrewerydb.org/breweries";

btn.addEventListener("click", async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    data.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
});

const displayData = (obj) => {
  listEle.innerHTML += `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    State: ${obj.state} || City: ${obj.city} || Phone: ${obj.phone}
  </div>
  </div>
  `;
};
// id name email address.city phone
