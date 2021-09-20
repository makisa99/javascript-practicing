let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const stabBtn = document.getElementById("stab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const myLeadsFromLS = JSON.parse(localStorage.getItem("myLeads"));
if (myLeadsFromLS) {
  myLeads = myLeadsFromLS;
  render(myLeads);
}

function render(lds) {
  var listItems = "";
  for (let i = 0; i < lds.length; i++) {
    // listItems += "<li><a target = '_blank' href = '" +myLeads[i] +"'>" +myLeads[i] +"</a></li>";
    listItems += `
        <li>
            <a target = '_blank' href = '${lds[i]}'>
                ${lds[i]}
            </a>
        </li>
    `;
    //   const li = document.createElement("li");
    //   li.textContent = myLeads[i];
    //   ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

stabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
