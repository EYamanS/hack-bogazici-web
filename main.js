/* window.addEventListener('load', function() {
  // Animation START
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // geting canvas by id c
  var header = document.getElementById('animation').getBoundingClientRect();
  var c = document.getElementById('c');
  var ctx = c.getContext('2d');

  c.height = window.innerHeight;
  c.width = header.width;

  //chinese characters - taken from the unicode charset
  //var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
  var matrix = '01';
  //converting the string into an array of single characters
  matrix = matrix.split('');

  var font_size = 12;
  var columns = c.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  //drawing the characters
  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = 'rgb(18, 41, 93)';  // background color
    
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = '#ffffff'; // color of those which is dropping


    ctx.font = font_size + 'px arial';
    //looping over drops
    for(var i = 0; i < drops.length; i++) {
      //a random chinese character to print
      var text = matrix[Math.floor(Math.random()*matrix.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }


  // setInterval(draw, 10);  // speed of particles
 Animation of 0 1 */


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

window.addEventListener('load', function() {
  // Menu START
  (function() {
    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),

      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };

 
  // Animation END
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  }());
  // Menu END

  // SmoothScroll START
  var scroll = new SmoothScroll('[data-scroll]', {
    offset: 80
  });
  // SmoothScroll END

  // Facebook-SDK START
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/tr_TR/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Facebook-SDK END

  // Google Analytics START
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-128963962-1');
  // Google Analytics END

  // Google Maps START
  function initMap() {
    // The location of Uluru
    var bm = {lat: 41.086065, lng: 29.043930};
    var nh = {lat: 41.086613, lng: 29.045489};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: bm});
    // The marker, positioned at Uluru
    var bm_marker = new google.maps.Marker({position: bm, map: map, label: 'BM', title: 'BM Buillding B (-2th) floor (for workshops)'});
    var nh_marker = new google.maps.Marker({position: nh, map: map, label: 'NH', title: 'New Hall 105'});
  }
  // Google Maps END
});

const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('[data-type="navItem"]');
let isNavOpen = false;

function toggleNav() {
  if (isNavOpen) {
    navItems.forEach(a => a.classList.replace('fadeIn', 'fadeOut'));
    nav.classList.remove('sidenav-open');
    isNavOpen = false;
  } else {
    nav.classList.add('sidenav-open');
    navItems.forEach(a => a.classList.replace('fadeOut', 'fadeIn'));
    isNavOpen = true;
  }
}

window.addEventListener('click', (e) => {
  if (isNavOpen && e.target !== nav && e.target.id !== 'navToggle') {
    toggleNav();
    e.stopPropagation();
  }
});
