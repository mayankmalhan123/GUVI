document.body.innerHTML = `
    <nav class="navbar navbar-primary bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="images/fox-icon.jpg"
            width="150"
            height="150"
            class="d-inline-block align-text-center"
          />
          <span>Fox Watch</span>
        </a>
      </div>
    </nav>

    <button type="button" id="fox_img" class="btn btn-outline-primary btn-lg">Generate Images</button>

    <div class="main-container">

    </div> 
`;

const imgBtn = document.getElementById("fox_img");

//randomfox API
const url = "https://randomfox.ca/floof/";

const fishData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    document.querySelector(".main-container").innerHTML = `
    <div class="card">
    <div class="card-body">
    <img src="${data.image}" alt="" width="300" height="300">
    </div>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
};

imgBtn.addEventListener("click", fishData);
