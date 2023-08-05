// PAGES
let home             = document.getElementById("home");
let about            = document.getElementById("about");
let gallery          = document.getElementById("gallery");
let services         = document.getElementById("services");
let contact          = document.getElementById("contact");
// BUTTONS
let home_button      = document.getElementById("home_button");
let about_button     = document.getElementById("about_button");
let gallery_button   = document.getElementById("gallery_button");
let services_button  = document.getElementById("services_button");
let contact_button   = document.getElementById("contact_button");

// functions
home_button.onclick = function() {
    document.getElementById("home").scrollIntoView();
}

about_button.onclick = function() {
    document.getElementById("about").scrollIntoView();
}

gallery_button.onclick = function() {
    document.getElementById("gallery").scrollIntoView();
}

services_button.onclick = function() {
    document.getElementById("services").scrollIntoView();
}

contact_button.onclick = function() {
    document.getElementById("contact").scrollIntoView();
}
