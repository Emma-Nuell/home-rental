import { allProperties } from "./allProperties.js"
import { viewProperty } from "./viewProperty.js"
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
const properties = document.getElementById("properties")
const propertyContainer = document.querySelectorAll(".property-container")
const closeProperty = document.getElementById("closeProperty")
const filename = document.getElementById("filename")
const paginationNav = document.querySelector(".pagination");
const buttons = paginationNav.querySelectorAll("button");
const propertyList = document.querySelector(".property-list")
const overlay = document.getElementById("overlay")
const body = document.body;
const Popup = document.getElementById("personal-property")
const viewPropertyButton = document.getElementById("viewProperty")
let id = 7;
const rowsPerPage = 6;
let currentPage = 1;
 

// const allProperties = [
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null, 
//         imagesource: "./images/img-1.png",
//         id: "property-1"
//     },
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null,
//         imagesource: "./images/img2.png",
//         id: "property-2"
//     },
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null,
//         imagesource: "./images/img3.png",
//         id: "property-3"
//     },
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null, 
//         imagesource: "./images/img4.png",
//         id: "property-4"
//     },
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null,
//         imagesource: "./images/img5.png",
//         id: "property-5"
//     },
//     {
//         address: "2578 Folsom street, san francisco, CA, 94110",
//         roomType: "Private Room",
//         price: 1200,
//         image: null, 
//         imagesource: "./images/img6.png",
//         id: "property-6"
//     }
// ];




const pagination = () => {

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
  
  const elementsForPage = allProperties.slice(startIndex, endIndex);
    properties.innerHTML = ""
    

    elementsForPage.forEach(element => {
        const div = document.createElement("div")
        div.setAttribute("class", "property-container")
        div.setAttribute("id", element.id)
  
        if (element.image) {
            const img = document.createElement("img");
            div.appendChild(img)

            const reader = new FileReader()
            reader.onload = function (e) {
                img.src = e.target.result; 
            };

            reader.readAsDataURL(element.image);
        } else if (element.imagesource) {
            const img = document.createElement("img");
            img.src = element.imagesource;
            div.appendChild(img)
        }

        const article = document.createElement("article");
        article.setAttribute("class", "property-content")

        const h4 = document.createElement("h4");
        h4.innerText = element.address;

        const p = document.createElement("p");
        p.innerText = element.roomType;

        const span = document.createElement("span");
        span.innerText = `$${element.price}/month`;

        const table = document.createElement("table");
        table.innerHTML =
         `<tr>
        <td><i class='bx bxs-bed'></i>4</td>
        <td><i class="fa-solid fa-bath fa-flip-horizontal"></i>2</td>
        <td><i class="ri-artboard-2-line"></i>2</td>
    </tr>`
        
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(span);
        div.appendChild(article);
        div.appendChild(table);

        properties.appendChild(div)

        div.addEventListener("click", () => {
            console.log("hello")

            const popup = document.createElement("div");
            popup.classList.add('personal-property');
            popup.setAttribute("id", "personal-property")

            if (element.image) {
                const img = document.createElement("img");
                popup.appendChild(img)
    
                const reader = new FileReader()
                reader.onload = function (e) {
                    img.src = e.target.result; 
                };
    
                reader.readAsDataURL(element.image);
            } else if (element.imagesource) {
                const img = document.createElement("img");
                img.src = element.imagesource;
                popup.appendChild(img)
            }

            const popuparticle = document.createElement("article");
             
            const seller = document.createElement("h2");
            if (element.name) {
                seller.innerHTML= `<span>Name of Seller:</span> ${element.name}`
            } else {
                seller.innerHTML = `<span>Name of Seller:</span> Lorem, ipsum dolor`
            }

            const address = document.createElement("h3");
            if (element.address) {
                address.innerHTML = `<span>Address of property:</span> ${element.address}`
            } else {
                address.innerHTML = `<span>Address of property:</span> 2578 Folsom street, san francisco, CA, 94110`
            }

            const unit = document.createElement("h4");
            if (element.unitNumber) {
                unit.innerHTML = `<span>Unit Number:</span> ${element.unitNumber}`
            } else {
                unit.innerHTML = `<span>Unit Number:</span> 2578 `
            }

            const cityState = document.createElement("h4");
            if (element.city && element.state) {
                cityState.innerHTML = `<span>City/State:</span> ${element.city}/${element.state}`
            } else {
                cityState.innerHTML = `<span>City/State:</span> california/San Francisco`
            }
            const roomType = document.createElement("h4");
            if (element.roomType) {
                roomType.innerHTML = `<span>Room Type:</span> ${element.roomType}`
            } else {
                roomType.innerHTML = `<span>Room Type:</span> Private Room`
            }
            const price = document.createElement("h4");
            if (element.price) {
                price.innerHTML = `<span>Price:</span> $${element.price}/Month`
            } else {
                price.innerHTML = `<span>Price:</span> $1200/Month`
            }
            const propertyDetails = document.createElement("h3");
            propertyDetails.textContent = "Property Details"

            const description = document.createElement("p");
            if (element.description) {
                description.innerHTML = `<span>Description:</span> ${element.description}`
            } else {
                description.innerHTML = `<span>Description:</span> Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                 Ad asperiores molestias modi cupiditate sed non,
                  ab delectus sunt quisquam in at quae, quis enim.
                   Pariatur rem ipsam placeat aut iure sunt obcaecati,
                    tempore aspernatur nulla odio provident.
                     Eveniet consectetur totam provident soluta deserunt sit,
                      quaerat hic necessitatibus at iure possimus sed assumenda
                       exercitationem ullam modi impedit repellat voluptate.
                        Eveniet saepe id harum. At iste blanditiis recusandae culpa
                         deserunt inventore dolores commodi officia sapiente quisquam
                          in nemo accusantium incidunt, iure eligendi repudiandae obcaecati natus?
                           Quibusdam repellat enim molestiae deserunt,
                            earum eveniet quis harum iusto optio quasi ipsum quia illo
                             tenetur qui.`
            }
            const room = document.createElement("p");
            room.innerHTML = `<span>Number of Rooms<i class='bx bxs-bed'></i>:</span> Four(4)`

            const bath = document.createElement("p");
            bath.innerHTML = `<span>Number of Bathrooms<i class="fa-solid fa-bath fa-flip-horizontal"></i>:</span> Two(2)`

            const size = document.createElement("p");
            size.innerHTML = `<span>Size(Occupants Per Room)<i class="ri-artboard-2-line"></i>:</span> Two(2)`

            const button = document.createElement("button");
            button.setAttribute("id", "closeProperty")
            button.innerText = "Close Property"           

            
            popuparticle.appendChild(seller)
            popuparticle.appendChild(address)
            popuparticle.appendChild(unit)
            popuparticle.appendChild(cityState)
            popuparticle.appendChild(roomType)
            popuparticle.appendChild(price)
            popuparticle.appendChild(propertyDetails)
            popuparticle.appendChild(description)
            popuparticle.appendChild(room)
            popuparticle.appendChild(bath)
            popuparticle.appendChild(size)
            popup.appendChild(popuparticle)
            popup.appendChild(button)
            properties.appendChild(popup)
 
            overlay.style.display = "block"
            body.classList.add("popup-active")


            const closePopUp = () => {
                popup.style.display = "none"
                overlay.style.display = "none"
                body.classList.remove("popup-active")
            }

            button.addEventListener("click", closePopUp)
           overlay.addEventListener("click", closePopUp)
           
        })
    });

}





image.addEventListener("change", () => {
    if (image.files.length > 0) {
        filename.textContent = image.files[0].name;
    } else {
        filename.textContent = "No file selected";
    }
})

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
    id++;

    allProperties.push(property);
    pagination();
})



function updateActiveButton() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  const activeButton = paginationNav.querySelector(`button:nth-child(${currentPage + 1})`);
  if (activeButton) {
    activeButton.classList.add("active");
    }
    
    // const newButton = () => {
    //     paginationNav.innerHTML = 
    //     `
    //     <button>First</button>
    //     <button>3</button>
    //     <button>${currentPage + 1}</button>
    //     <button>${currentPage + 2}</button>
    //     <button>Next</button>
    //     `
    //     propertyList.appendChild(paginationNav)
    // }

    buttons.forEach((button, index) => {
        if (currentPage === 1) {
            if (index === 0) {
                button.setAttribute("class", "first")
            } else {
                button.style.display = "block";
            }
        } else if (currentPage >= Math.ceil(allProperties.length / rowsPerPage)) {
            if (index === 0) {
                button.removeAttribute("class", "first")
            }
             else if (index > currentPage) {
                button.setAttribute("class", "first")
                button.disabled = true
            } 
            else {
                button.style.display = "block";
                // button.classList.remove("first")
            }
        } 
        else {
            button.style.display = "block";
        }
  });
}

paginationNav.addEventListener("click", (event) => {
  const clickedButton = event.target;
  
  if (clickedButton.textContent === "Next") {
    if (currentPage < Math.ceil(allProperties.length/ rowsPerPage)) {
      currentPage++;
    }
  } else if (clickedButton.textContent === "First") {
    if (currentPage > 1) {
      currentPage = 1;
    }
  } else {
    currentPage = parseInt(clickedButton.textContent);
  }

  pagination()
  updateActiveButton();
});

pagination()
updateActiveButton();

viewPropertyButton.addEventListener("click", viewProperty)

document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    console.log("douio")
    
      var linkHref = this.getAttribute("href");

      window.location.href = linkHref;
});

const navToggle = document.getElementById("menu");
const navDropdown = document.getElementById("nav-dropdown")
const times = document.getElementById("times")

// const navItems = document.querySelectorAll(".nav-dropdown li")
navToggle.addEventListener("click", () => {
navDropdown.style.display = "block"
times.style.display = "block"
navToggle.style.display = "none"
})
times.addEventListener("click", () => {
    times.style.display = "none"
    navToggle.style.display = "block"
    navDropdown.style.display = "none"
})



// module.exports = { allProperties }
// export {allProperties}
