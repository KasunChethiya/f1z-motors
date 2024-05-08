let body = `
<thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Car</th>
            <th>Email</th>
            <th>Address</th>
            <th>Payment</th>
            <th>Credit Card</th>
          </tr>
        </thead>`;


let tblStudentRecords = document.getElementById("tbl");

function getCustomerRecord() {
  fetch("http://localhost:8080/customer")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        body += `<tr>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.car}</td>
                <td>${element.email}</td>
                <td>${element.address}</td>
                <td>${element.payment}</td>
                <td>${element.creditCard}</td>
              </tr>`;
      });
      tbl.innerHTML=body;
    });
}

//document.addEventListener("DOMContentLoaded",customer);