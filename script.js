const checkoutEl = document.getElementById("checkout-el")
const checkoutMenu = document.getElementById("checkout-menu")
const crossEl = document.getElementById("cross-el")

checkoutEl.addEventListener('click', () => {
    checkoutMenu.style.right = "0px"
})

crossEl.addEventListener('click', () => {
    checkoutMenu.style.right = "-270px"
})

//Hero Slider

//Navigating shoe buttons
const shoeBtn1 = document.getElementById("shoe-btn-1")
const shoeBtn2 = document.getElementById("shoe-btn-2")
const shoeBtn3 = document.getElementById("shoe-btn-3")
const shoeBtn4 = document.getElementById("shoe-btn-4")

//Navigating shoe images
const shoeEl1 = document.getElementById("shoe-el-1")
const shoeEl2 = document.getElementById("shoe-el-2")
const shoeEl3 = document.getElementById("shoe-el-3")
const shoeEl4 = document.getElementById("shoe-el-4")

//Navigating item cards
const itemCard1 = document.getElementById("item-detail-1")
const itemCard2 = document.getElementById("item-detail-2")
const itemCard3 = document.getElementById("item-detail-3")
const itemCard4 = document.getElementById("item-detail-4")

//Defining functions
shoeBtn1.addEventListener('click', () => {
    shoeEl1.style.display = "block"
    shoeEl2.style.display = "none"
    shoeEl3.style.display = "none"
    shoeEl4.style.display = "none"

    shoeBtn1.style.opacity = "50%"
    shoeBtn2.style.opacity = "100%"
    shoeBtn3.style.opacity = "100%"
    shoeBtn4.style.opacity = "100%"

    itemCard1.style.display = "block"
    itemCard2.style.display = "none"
    itemCard3.style.display = "none"
    itemCard4.style.display = "none"
})

shoeBtn2.addEventListener('click', () => {
    shoeEl2.style.display = "block"
    shoeEl1.style.display = "none"
    shoeEl3.style.display = "none"
    shoeEl4.style.display = "none"

    shoeBtn2.style.opacity = "50%"
    shoeBtn1.style.opacity = "100%"
    shoeBtn3.style.opacity = "100%"
    shoeBtn4.style.opacity = "100%"

    itemCard2.style.display = "block"
    itemCard1.style.display = "none"
    itemCard3.style.display = "none"
    itemCard4.style.display = "none"
})

shoeBtn3.addEventListener('click', () => {
    shoeEl3.style.display = "block"
    shoeEl1.style.display = "none"
    shoeEl2.style.display = "none"
    shoeEl4.style.display = "none"

    shoeBtn3.style.opacity = "50%"
    shoeBtn2.style.opacity = "100%"
    shoeBtn1.style.opacity = "100%"
    shoeBtn4.style.opacity = "100%"

    itemCard3.style.display = "block"
    itemCard1.style.display = "none"
    itemCard2.style.display = "none"
    itemCard4.style.display = "none"
})

shoeBtn4.addEventListener('click', () => {
    shoeEl4.style.display = "block"
    shoeEl1.style.display = "none"
    shoeEl2.style.display = "none"
    shoeEl3.style.display = "none"

    shoeBtn4.style.opacity = "50%"
    shoeBtn2.style.opacity = "100%"
    shoeBtn1.style.opacity = "100%"
    shoeBtn3.style.opacity = "100%"

    itemCard4.style.display = "block"
    itemCard1.style.display = "none"
    itemCard2.style.display = "none"
    itemCard3.style.display = "none"
})


// function toggle() {
//     //Hide all shoes
//     const shoes = document.querySelectorAll('.shoe-el');
//     shoes.style.display = 'none';

//     const buttons = document.querySelectorAll('.shoe-btn')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             button.setAttribute("id", "selected-item")
//             const selectedItem = getElementById("selected-item")

//             button.style.opacity = "50%"
//             console.log("hello")
//         })
//     })
// }






