const body = document.querySelector('body');
const navigation = document.querySelector('.icons');
const menuService = document.querySelector('.menu-services');

// --------------------MOBILE-MENU--------------------------

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.ul-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

// --------------------------  MENU SECTION -----------------------

const capstone = [
  {
    id: 1,
    image: '/graphics/user-1.jpg',
    name: 'Salt Bae',
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
    name: 'Salt Bae',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 4,
    image: '/graphics/user-2.jpg',
    name: 'Salt Bae',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 5,
    image: '/graphics/user-1.jpg',
    name: 'Salt Bae',
    role: 'A smart assistant to make driving more safe.',
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking.',
  },
  {
    id: 6,
    image: '/graphics/user-3.jpg',
    name: 'Salt Bae',
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

/* const button = document.querySelector('.show-more');
const menu = document.querySelectorAll('.user-card');
let state = true;

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    menu.forEach((team) => {
      team.classList.add('show-more');
      button.innerHTML = 'See less';
    });
    state = false;
  } else {
    state = false;
    menu.forEach((team) => {
      team.classList.remove('show-more');
      button.innerHTML = 'Show more';
    });
    state = true;
  }
}); */
