particlesJS(
    {
        "particles": {

          "number": {
            "value": 45,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ae0d24"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 2,
              "color": "#ae0d24"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "./assets/img/logo1.png",
              "width": 70,
              "height": 70
            }
          },
          "opacity": {
            "value": 0.1104824135672403,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.03196598818856736,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#146597",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 5.156640387635437,
            "direction": "random",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "bubble"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 250,
              "line_linked": {
                "opacity": 2
              }
            },
            "bubble": {
              "distance": 700,
              "size": 400,
              "duration": 3,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
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