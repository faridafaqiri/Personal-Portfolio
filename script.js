document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});

const projects = [
  {
    name: 'Cash Register',
    shortDescription: 'The Cash Register project is a web application designed to simulate a simple cash register.',
    longDescription: 'The Cash Register project is a web application designed to simulate a simple cash register. It allows users to input items, prices, and quantities, and then calculates the total amount due. This project demonstrates basic arithmetic operations and user input handling in JavaScript.',
    image: './img.info/cash/Capture.JPG',
    technologies: 'HTML, CSS, JS',
    liveLink: 'https://faridafaqiri.github.io/cash-register/',
    sourceLink: 'https://github.com/faridafaqiri/cash-register'
  },
  {
    name: 'Palindrome Checker',
    shortDescription: 'The Palindrome Checker project is a web application that allows users to input text and check if it is a palindrome.',
    longDescription: 'The Palindrome Checker project is a web application that allows users to input text and check if it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.',
    image: './img.info/palindrom/Capture.jpeg',
    technologies: 'HTML, CSS, JS',
    liveLink: 'https://faridafaqiri.github.io/Palindrome-Checker/',
    sourceLink: 'https://github.com/faridafaqiri/Palindrome-Checker'
  },
  {
    name: 'Pokémon',
    shortDescription: 'The Pokémon Search App is a web application that allows users to search for Pokémon by name or ID.',
    longDescription: 'The Pokémon Search App is a web application that allows users to search for Pokémon by name or ID. Upon entering the Pokémon name or ID, the app displays detailed base stats including HP, Attack, Defense, Special Attack, Special Defense, and Speed, as well as proficiency in API integration to fetch and display dynamic data.',
    image: './img.info/pokemon/Capture.JPG',
    technologies: 'HTML, CSS, JS',
    liveLink: 'https://faridafaqiri.github.io/pokemon-search-app/',
    sourceLink: 'https://github.com/faridafaqiri/pokemon-search-app'
  },
  {
    name: 'Roman numeral checker',
    shortDescription: 'This project is a simple web-based application that converts numbers to Roman numerals.',
    longDescription: 'This project is a simple web-based application that converts numbers to Roman numerals. The application takes a number input from the user, validates the input, and displays the corresponding Roman numeral. The valid range for conversion is from 1 to 3999, as Roman numerals do not have a standard representation for numbers outside this range.',
    image: './img.info/roman/demo.jpeg',
    technologies: 'HTML, CSS, JS',
    liveLink: 'https://faridafaqiri.github.io/Roman-numeral-converter/',
    sourceLink: 'https://github.com/faridafaqiri/Roman-numeral-converter'
  },
  {
    name: 'Telephone Number Validator',
    shortDescription: 'The telephone number validator project is a specialized tool designed to validate and format US phone numbers.',
    longDescription: 'The telephone number validator project is a specialized tool designed to validate and format US phone numbers. By entering a phone number into the tool, users can verify if it meets the correct format and structure expected for US telephone numbers.',
    image: './img.info/telephone/Capture.JPG',
    technologies: 'HTML, CSS, JS',
    liveLink: 'https://faridafaqiri.github.io/telephone-number-validator/',
    sourceLink: 'https://github.com/faridafaqiri/telephone-number-validator'
  },
  {
    name: 'Product Landing Page',
    shortDescription: 'The Product Landing Page project is a promotional site for "Tolo Fast Food," featuring a clean and modern design.',
    longDescription: 'The Product Landing Page project is a promotional site for "Tolo Fast Food," featuring a clean and modern design. It includes sections for menu items, contact information, and a special offer for free home delivery. Users can browse through various food options like pizza, kabab, and burgers, and access contact details for placing orders. and responsive web design, emphasizing user-friendly navigation and a visually appealing layout.',
    image: './img.info/product/p2.JPG',
    technologies: 'HTML, CSS',
    liveLink: 'https://faridafaqiri.github.io/product-landing-page/',
    sourceLink: 'https://github.com/faridafaqiri/product-landing-page'
  }
];

// Function to render projects
function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.innerHTML = ''; // Clear previous content
  let carouselItem;

  const isMobile = window.innerWidth < 768;

  projects.forEach((project, index) => {
    // For desktop, create a new carousel item every 2 projects
    // For mobile, create a new carousel item for each project
    if (isMobile || index % 2 === 0) {
      carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (index === 0) carouselItem.classList.add('active');
      projectsContainer.appendChild(carouselItem);

      const rowDiv = document.createElement('div');
      rowDiv.className = 'row';
      carouselItem.appendChild(rowDiv);
    }

    const projectDiv = document.createElement('div');
    projectDiv.className = 'col-12 col-md-6 d-flex'; // Responsive class for mobile and desktop
    projectDiv.innerHTML = `
      <div class="card mb-4">
        <img src="${project.image}" class="card-img-top shared-img-style" alt="${project.name}">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.shortDescription}</p>
          <button class="details" onclick="showProjectDetails('${project.name}')">Details</button>
        </div>
      </div>
    `;
    carouselItem.querySelector('.row').appendChild(projectDiv);
  });
}

// Function to show project details in the modal
function showProjectDetails(projectName) {
  const project = projects.find((p) => p.name === projectName);
  document.getElementById('projectModalLabel').textContent = project.name;
  document.getElementById('project-image').src = project.image;
  document.getElementById('project-long-description').textContent = project.longDescription;
  document.getElementById('project-technologies').textContent = project.technologies;
  document.getElementById('project-live-link').href = project.liveLink;
  document.getElementById('project-source-link').href = project.sourceLink;

  // Show the modal using Bootstrap's modal methods
  const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
  projectModal.show();
}

// Initial render
renderProjects();

document.addEventListener('DOMContentLoaded', function() {
  const certificates = [
    {
      name: 'JavaScript Algorithms and Data Structure',
      image: './img.info/certific/Capture.JPG',
      link: 'https://www.freecodecamp.org/certification/fccdd7d8690-d023-4481-b4ed-badc665c7da7/javascript-algorithms-and-data-structures-v8'
    },
    {
      name: 'Responsive Web Design',
      image: './img.info/certific/responsive.JPG',
      link: 'https://www.freecodecamp.org/certification/fccdd7d8690-d023-4481-b4ed-badc665c7da7/responsive-web-design'
    },
  ];

  const certificatesContainer = document.getElementById('certificates-container');

  certificates.forEach((certificate) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6', 'mb-4');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cert-card', 'position-relative');

    const img = document.createElement('img');
    img.src = certificate.image;
    img.alt = `${certificate.name} Certification`;
    img.classList.add('cert-img-top', 'shared-img-style'); // Apply the shared class here

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('cert-name');
    nameDiv.textContent = certificate.name;

    const linkOverlay = document.createElement('a');
    linkOverlay.href = certificate.link;
    linkOverlay.target = '_blank';
    linkOverlay.classList.add('cert-link-overlay', 'btn', 'btn-cert');
    linkOverlay.textContent = 'View Certification';

    cardDiv.appendChild(img);
    cardDiv.appendChild(nameDiv);
    cardDiv.appendChild(linkOverlay);

    colDiv.appendChild(cardDiv);
    certificatesContainer.appendChild(colDiv);
  });
});

// Contact form validation and local storage
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
    // Save data to local storage
    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    // Reset form
    this.reset();
    alert('Form submitted successfully!');
  } else {
    alert('All fields are required.');
  }
});

// Load data from local storage
document.addEventListener('DOMContentLoaded', function () {
  const savedData = localStorage.getItem('contactFormData');
  if (savedData) {
    const { name, email, message } = JSON.parse(savedData);
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
  }
});
