window.addEventListener('load', function() {
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
