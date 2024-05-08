document.getElementById("btn-checkout").addEventListener(
    "click", saveCustomer
)

function saveCustomer() {
    let requestBody = mapRequest()

    fetch("http://localhost:8080/customer", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers:{
            "Content-type":"application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })

    
}

function mapRequest() {
    let requestBody = {
        firstName: undefined,
        lastName: undefined,
        car: undefined,
        email: undefined,
        address: undefined,
        payment: undefined,
        creditCard: undefined
    }

    requestBody.firstName = document.getElementById("txt-firstName").value;
    requestBody.lastName = document.getElementById("txt-lastName").value;
    requestBody.car = document.getElementById("car").value;
    requestBody.email = document.getElementById("email").value;
    requestBody.address = document.getElementById("address").value;
    requestBody.payment = document.getElementById("payment-method").value;
    requestBody.creditCard = document.getElementById("cc-number").value;

    return requestBody;

}

function clear(){
    document.getElementById("txt-firstName").value = "";
   document.getElementById("txt-lastName").value= "";
   
    document.getElementById("car").value= "";
    document.getElementById("email").value= "";
    document.getElementById("address").value= "";
    document.getElementById("payment-method").value= "";
    document.getElementById("cc-number").value= "";
}