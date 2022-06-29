const body = document.querySelector('body');
const navMenu = document.querySelector('.toggle');
const menuService = document.querySelector('.menu-services');

// --------------------MOBILE-MENU--------------------------

navMenu.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

// --------------------------  MENU SECTION -----------------------

const capstone = [
  {
    id: 1,
    image: '/graphics/user-1.jpg',
    name: 'Carrie Brewer',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 2,
    image: '/graphics/user-2.jpg',
    name: 'Salt Bae',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 3,
    image: '/graphics/user-3.jpg',
    name: 'Jane Kempczinski',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 4,
    image: '/graphics/user-2.jpg',
    name: 'Sabir Sami',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 5,
    image: '/graphics/user-1.jpg',
    name: 'Indra Nooyi',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 6,
    image: '/graphics/user-3.jpg',
    name: 'Max Keith',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
];

for (let i = 0; i < capstone.length; i += 1) {
  const taste = capstone[i];

  menuService.innerHTML += `
  <div class="user-card" id="user-${taste.id}">
   <div class="user">
     <img src="${taste.image}" alt="" class="user-img" width="55%">
   </div> 
     <div class="user-info">
        <h4>${taste.name}</h4>
        <h5>${taste.role}</h5>
        <p>${taste.descript}</p>
     </div>
  </div>  
    
    `;
}
