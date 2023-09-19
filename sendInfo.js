const address = document.getElementById("address")
const roomType = document.getElementById("room-type")
const price = document.getElementById("price")
const image = document.getElementById("image")
const unitNumber = document.getElementById("unit")
const sellerName = document.getElementById("name")
const city = document.getElementById("city")
const state = document.getElementById("state")
const description = document.getElementById("description")
const addProperty = document.getElementById("add-property")
const form = document.getElementById("form")

console.log(form)

let url = ""

const sendProperty = async (data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data)
    })

      if(response.ok) {
        alert("Property Uploaded Successfully")
    }else {
        alert("Property Upload Failed")
    }
}

addProperty.addEventListener("click", (e) => {
    e.preventDefault()
//     if (address.value || roomType.value || price.value  == "") {
//         alert("Please fill in the required details");
//     } else {

// }
 const property = {
    name: sellerName.value,
    address: address.value,
    unitNumber: parseInt(unitNumber.value), 
    city: city.value,
    state: state.value ,
    roomType: roomType.value,
    price: parseInt(price.value),
    description: description.value,
    image: image.files[0]
}    

    form.reset();
    filename.textContent = ""

    // allProperties.push(property);
    // pagination();

    sendProperty(property)
})