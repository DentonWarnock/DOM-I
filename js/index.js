const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav items
let nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

// new nav item 1 
let newNav1 = document.createElement('a');
newNav1.textContent = "Hi!";
newNav1.style.margin = '40px 15px 0 0';
newNav1.style.fontSize = '20px';
newNav1.style.textDecoration = 'none';
newNav1.style.whiteSpace = 'nowrap';
newNav1.style.color = 'red';
newNav1.href = '#';

// new nav item 2
let newNav2 = document.createElement('a');
newNav2.textContent = "Bye!";
newNav2.style.margin = '40px 0 0 15px';
newNav2.style.fontSize = '20px';
newNav2.style.textDecoration = 'none';
newNav2.style.whiteSpace = 'nowrap';
newNav2.style.color = 'red';
newNav2.href = '#';

// adding new nav items (to header)
const header = document.querySelector('header');
header.prepend(newNav1);
header.append(newNav2);

// nav styling
nav.forEach((element) => {element.style.color = 'green'});
nav.forEach((element) => {element.style.fontWeight = 'bold'});
nav.forEach((element) => {element.style.fontSize = '24px'});

// cta
let ctaTitle = document.querySelector('h1');
ctaTitle.textContent = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];


let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// h4's - main
let h4Tag = document.querySelectorAll('h4');
h4Tag[0].textContent = siteContent['main-content']['features-h4'];
h4Tag[1].textContent = siteContent['main-content']['about-h4'];
h4Tag[2].textContent = siteContent['main-content']['services-h4'];
h4Tag[3].textContent = siteContent['main-content']['product-h4'];
h4Tag[4].textContent = siteContent['main-content']['vision-h4'];

// p tags - main
let pTag = document.querySelectorAll('p');
pTag[0].textContent = siteContent['main-content']['features-content'];
pTag[1].textContent = siteContent['main-content']['about-content'];
pTag[2].textContent = siteContent['main-content']['services-content'];
pTag[3].textContent = siteContent['main-content']['product-content'];
pTag[4].textContent = siteContent['main-content']['vision-content'];

// mid img
let codeImg = document.getElementById('middle-img');
codeImg.src = 'img/mid-page-accent.jpg';

// contact
h4Tag[5].textContent = siteContent['contact']['contact-h4'];
pTag[5].textContent = siteContent['contact']['address'];
pTag[6].textContent = siteContent['contact']['phone'];
pTag[7].textContent = siteContent['contact']['email'];

// footer
pTag[8].textContent = siteContent['footer']['copyright'];












