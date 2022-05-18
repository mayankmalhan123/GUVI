document.body.innerHTML = `
    <nav class="navbar navbar-primary bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="images/dog-icon.jpg"
            width="100"
            height="100"
            class="d-inline-block align-text-center"
          />
          <span>Random Dog Facts</span>
        </a>
      </div>
    </nav>

    <button type="button" id="dog_img" class="btn btn-outline-primary btn-lg">Generate Images</button>

    <div class="main-container">
    </div> 
`;

const imgBtn = document.getElementById("dog_img");

const main = document.querySelector(".main-container");

//Dog Images URL
const url1 = "https://dog.ceo/api/breeds/image/random";

const getImage = async () => {
  try {
    const res1 = await fetch(url1);
    const imgdata = await res1.json();

    main.innerHTML = `
        <div class="card">
        <div class="card-body">
        <img src="${imgdata.message}" alt="dog-image" height="300" width="300">
        <strong class="fact-text"></strong>
        </div>
        </div>
        `;
  } catch (error) {
    console.log(error);
  }
};

imgBtn.addEventListener("click", getImage);
