import { allProperties } from "./allProperties.js";
const properties = document.getElementById("properties")
const overlay = document.getElementById("overlay")
const body = document.body;
const Popup = document.getElementById("personal-property")

export const viewProperty = () => {
    
    allProperties.forEach(element => {
        const div = document.createElement("div")
        div.setAttribute("class", "property-container") 
  
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
viewProperty()