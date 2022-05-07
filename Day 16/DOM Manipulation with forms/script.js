let container = document.createElement("div");
container.className = "container";

let div1 = document.createElement("div");
let h1 = createtag("h1", "title", "Form");
let p = createtag("p", "description", "Form Description");

let row = document.createElement("div");
row.className = "row";
row.className = "d-flex justify-content-center";
let row1 = document.createElement("div");
row1.className = "row table";

let form = document.createElement("form");
form.setAttribute("id", "form");

let formdiv1 = createformdiv("form-group");
let formdiv2 = createformdiv("form-group");
let formdiv3 = createformdiv("form-group");
let formdiv4 = createformdiv("form-group");
let formdiv5 = createformdiv("form-check form-check-inline");
let formdiv6 = createformdiv("form-check form-check-inline");
let formdiv7 = createformdiv("form-check form-check-inline");
let formdiv8 = createformdiv("form-check");
let formdiv9 = createformdiv("form-check form-check-inline");
let formdiv10 = createformdiv("form-check form-check-inline");
let formdiv11 = createformdiv("form-check form-check-inline");
let formdiv12 = createformdiv("form-check form-check-inline");
let formdiv13 = createformdiv("form-check form-check-inline");
let formdiv14 = createformdiv("form-group");
let formdiv15 = createformdiv("form-group");
let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "submit");
button.className = "btn btn-primary";
button.innerHTML = "Submit";
button.addEventListener("click", submit);

let firstLabel = label("first-name", "First Name :");
let lastLabel = label("last-name", "Last Name :");
let addressLabel = label("address", "Address :");
let pincodeLabel = label("pincode", "Pincode :");
let genderLabel = label("gender", "Gender :");
let maleLabel = label("maleid", "Male");
maleLabel.className = "form-check-label";
let femaleLabel = label("femaleid", "Female");
femaleLabel.className = "form-check-label";
let foodlistLabel = label("foodlist", "Choose The Food :");
let food1label = label("food1", "Noodles");
let food2label = label("food2", "Chicken");
let food3label = label("food3", "Briyani");
let food4label = label("food4", "Chapathi");
let food5label = label("food5", "icecream");
let stateLabel = label("state-name", "State :");
let countryLabel = label("country-name", "Country :");

let firstname = input("input", "text", "first-name", "Enter the First name");
let lastname = input("input", "text", "last-name", "Enter the Last name");
let addressname = input("textarea", "textarea", "address", "Enter the Address");
let pincodename = input("input", "text", "pincode", "Enter the Pincode");
let malename = radio(
  "input",
  "radio",
  "gender",
  "maleid",
  "male",
  "form-check-input"
);
let femalename = radio(
  "input",
  "radio",
  "gender",
  "femaleid",
  "female",
  "form-check-input"
);
let food1name = food(
  "input",
  "checkbox",
  "food",
  "food1",
  "Noodles",
  "form-check-input"
);
let food2name = food(
  "input",
  "checkbox",
  "food",
  "food2",
  "Chicken",
  "form-check-input"
);
let food3name = food(
  "input",
  "checkbox",
  "food",
  "food3",
  "Briyani",
  "form-check-input"
);
let food4name = food(
  "input",
  "checkbox",
  "food",
  "food4",
  "Chapathi",
  "form-check-input"
);
let food5name = food(
  "input",
  "checkbox",
  "food",
  "food5",
  "Ice ccream",
  "form-check-input"
);
let statename = input("input", "text", "state-name", "Enter the State");
let countryname = input("input", "text", "country-name", "Enter the Country");
function createformdiv(classname) {
  let div = document.createElement("div");
  div.className = classname;
  return div;
}

function label(forname, innerHTMLname) {
  let label = document.createElement("label");
  label.setAttribute("for", forname);
  label.innerHTML = innerHTMLname;
  return label;
}

function input(inputtag, typename, idname, placeholdername) {
  let name = document.createElement(inputtag);
  name.setAttribute("type", typename);
  name.setAttribute("id", idname);
  name.setAttribute("placeholder", placeholdername);
  name.setAttribute("required", "");
  name.required = true;
  name.className = "form-control";
  return name;
}

function radio(
  radiotag,
  radiotype,
  radioname,
  radioid,
  radiovalue,
  rodioclassname
) {
  let radio = document.createElement(radiotag);
  radio.setAttribute("type", radiotype);
  radio.setAttribute("name", radioname);
  radio.setAttribute("id", radioid);
  radio.setAttribute("value", radiovalue);
  radio.className = rodioclassname;
  return radio;
}
function food(foodtag, foodtype, foodname, foodid, foodvalue, foodclassname) {
  let food = document.createElement(foodtag);
  food.setAttribute("type", foodtype);
  food.setAttribute("name", foodname);
  food.setAttribute("id", foodid);
  food.setAttribute("value", foodvalue);
  food.className = foodclassname;
  return food;
}

function createtag(tagname, idname, data) {
  let tag = document.createElement(tagname);
  tag.setAttribute("id", idname);
  tag.innerHTML = data;
  return tag;
}

let table = document.createElement("table");
table.className = "table";
table.setAttribute("id", "myTable");
let thead = document.createElement("thead");
thead.className = "thead-dark";
let tr = document.createElement("tr");

let th1 = creater("th", "Firstname");
let th2 = creater("th", "Lastname");
let th3 = creater("th", "Address");
let th4 = creater("th", "Pincode");
let th5 = creater("th", "Gender");
let th6 = creater("th", "Food List");
let th7 = creater("th", "State");
let th8 = creater("th", "Country");
tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);

let tbody = document.createElement("tbody");

function creater(tag, data) {
  let ele = document.createElement(tag);
  ele.innerHTML = data;
  return ele;
}

function submit() {
  let firstnamedata = document.getElementById("first-name").value;
  let lastnamedata = document.getElementById("last-name").value;
  let addressdata = document.getElementById("address").value;
  let pincodedata = document.getElementById("pincode").value;
  let genderdata = document.getElementsByName("gender");
  let foodlistdata = document.getElementsByName("food");
  let statedata = document.getElementById("state-name").value;
  let countrydata = document.getElementById("country-name").value;
  for (i = 0; i < genderdata.length; i++) {
    if (genderdata[i].checked) genderdata = genderdata[i].value;
  }
  let listoffood = [];
  for (let checkbox of foodlistdata) {
    if (checkbox.checked) listoffood.push(checkbox.value);
  }

  if (
    listoffood.length === 0 ||
    (document.getElementById("maleid").checked == false &&
      document.getElementById("femaleid").checked == false) ||
    firstnamedata == "" ||
    firstnamedata == null ||
    lastnamedata == "" ||
    lastnamedata == null ||
    addressdata == "" ||
    addressdata == null ||
    pincodedata == "" ||
    pincodedata == null ||
    statedata == "" ||
    statedata == null ||
    countrydata == "" ||
    countrydata == null
  ) {
    alert(" Fill the field");
  } else {
    let table = document.getElementById("myTable");

    let row = table.insertRow(-1);
    let firstname = row.insertCell(0);
    let lastname = row.insertCell(1);
    let address = row.insertCell(2);
    let pincode = row.insertCell(3);
    let gender = row.insertCell(4);
    let foodlist = row.insertCell(5);
    let state = row.insertCell(6);
    let country = row.insertCell(7);

    firstname.innerHTML = firstnamedata;
    lastname.innerHTML = lastnamedata;
    address.innerHTML = addressdata;
    pincode.innerHTML = pincodedata;
    gender.innerHTML = genderdata;
    let sum = "";
    for (i = 0; i < listoffood.length; i++) {
      sum = `${sum}  ${listoffood[i]}`;
      foodlist.innerHTML = sum;
    }

    state.innerHTML = statedata;
    country.innerHTML = countrydata;
    document.getElementById("myTable").style.visibility = "visible";

    document.getElementById("form").reset();
  }
}

div1.append(h1, p);
formdiv1.append(firstLabel, firstname);
formdiv2.append(lastLabel, lastname);
formdiv3.append(addressLabel, addressname);
formdiv4.append(pincodeLabel, pincodename);
formdiv5.append(genderLabel);
formdiv6.append(malename, maleLabel);
formdiv7.append(femalename, femaleLabel);
formdiv8.append(foodlistLabel);
formdiv9.append(food1name, food1label);
formdiv10.append(food2name, food2label);
formdiv11.append(food3name, food3label);
formdiv12.append(food4name, food4label);
formdiv13.append(food5name, food5label);
formdiv14.append(stateLabel, statename);
formdiv15.append(countryLabel, countryname);
form.append(
  formdiv1,
  formdiv2,
  formdiv3,
  formdiv4,
  formdiv5,
  formdiv6,
  formdiv7,
  formdiv8,
  formdiv9,
  formdiv10,
  formdiv11,
  formdiv12,
  formdiv13,
  formdiv14,
  formdiv15,
  button
);
row.append(form);

table.append(thead, tbody);
row1.append(table);
container.append(div1, row, row1);
document.body.append(container);
