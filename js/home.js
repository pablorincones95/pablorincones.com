particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);

// /** Mostrar proyectos */
// function projectTemplate(key, { uid, name, img, description, technology, url }) {
//   return `
//     <div class="card">
//       <div class="card__image-container">
//         <img class="card__image" src="${img}" alt="${name}">
//       </div>

//       <svg class="card__svg" viewBox="0 0 800 500">
//         <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#1D2540"/>
//         <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
//       </svg>

//       <div class="card__content">
//         <h1 class="card__title">${name}</h1>
//         <p>
//           ${description}
//         </p>
//         <p class="technology">
//           tecnología: <span>${technology}</span>
//         </p>
//         <a href="${url}" target="_blank" rel="nofollow noopener" class="btn">
//           <span>Ver mas</span>
//           <svg width="13px" height="10px" viewBox="0 0 13 10">
//           <path d="M1,5 L11,5"></path>
//           <polyline points="8 1 12 5 8 9"></polyline>
//         </svg>
//         </a>
//       </div>

//     </div>
//   `
// }

// function getProjects() {
//   const projects = d.getElementById('projects');
//   db.collection('proyects').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let card = d.createElement('div');
//       card.id = doc.id;
//       card.classList.add('col-12', 'col-md-6', 'col-lg-4');
//       card.innerHTML = projectTemplate(doc.id, doc.data());
//       projects.insertAdjacentElement('afterbegin', card);
//     });
//   });
// }

// getProjects();
