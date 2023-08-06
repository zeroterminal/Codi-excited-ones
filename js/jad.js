// PAGES
const home             = document.getElementById("home");
const about            = document.getElementById("about");
const gallery          = document.getElementById("gallery");
const services         = document.getElementById("services");
const contact          = document.getElementById("contact");
// BUTTONS
const home_button      = document.getElementById("home_button");
const about_button     = document.getElementById("about_button");
const gallery_button   = document.getElementById("gallery_button");
const services_button  = document.getElementById("services_button");
const contact_button   = document.getElementById("contact_button");

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
