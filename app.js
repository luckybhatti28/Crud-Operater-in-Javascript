var SelectedRow = null;

// Show Alert
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Field
function ClearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#LastName").value = "";
  document.querySelector("#RollNo").value = "";
}

// Add Data

document.querySelector("#student-foam").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get foam values
  const FirstName = document.querySelector("#FirstName").value;
  const LastName = document.querySelector("#LastName").value;
  const RollNo = document.querySelector("#RollNo").value;

  // validate
  if(FirstName == "" || LastName == "" || RollNo == ""){
     showAlert("Please fill in all fields","danger");
     console.log("hello world");
  }else{
    if(SelectedRow == null){
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${FirstName}</td>
      <td>${LastName}</td>
      <td>${RollNo}</td>
      <td>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      </td>
      `;
      list.appendChild(row);
      SelectedRow = null;
      showAlert("Student Added", "success");
    }
    else{
      SelectedRow.children[0].textContent = FirstName;
      SelectedRow.children[1].textContent = LastName;
      SelectedRow.children[2].textContent = RollNo;
      SelectedRow = null;
      showAlert("Student Info Edited", "info");
    }

    ClearFields();
  }
  
});

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
    if (target.classList.contains("edit")) {
      SelectedRow = target.parentElement.parentElement;
      document.querySelector("#FirstName").value = SelectedRow.children[0].textContent;
      document.querySelector("#LastName").value = SelectedRow.children[1].textContent;
      document.querySelector("#RollNo").value = SelectedRow.children[2].textContent;
  }

});

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
});
