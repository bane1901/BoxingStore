
// ===================== AOS (ostaje tvoje) =====================
AOS.init({
  duration: 800,
  easing: 'slide'
});

(function($) {

  "use strict";

  var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
  };

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  var carousel = function() {
    $('.home-slider').owlCarousel({
      loop:true,
      autoplay: true,
      autoplayTimeout: 3000, // Brže skrolanje 
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:false,
      autoplayHoverPause: false,
      items: 1,
      navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{ 0:{items:1}, 600:{items:1}, 1000:{items:1} }
    });
  
    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items:1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive:{ 0:{items: 1}, 600:{items: 1}, 1000:{items: 1} }
    });
  };
  carousel();

  $('nav .dropdown').hover(function(){
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function(){
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });

  $('#dropdown04').on('show.bs.dropdown', function () { console.log('show'); });

  // scroll
  var scrollWindow = function() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.ftco_navbar'),
          sd = $('.js-scroll-wrap');

      if (st > 150) { if ( !navbar.hasClass('scrolled') ) { navbar.addClass('scrolled'); } } 
      if (st < 150) { if ( navbar.hasClass('scrolled') ) { navbar.removeClass('scrolled sleep'); } } 
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) { navbar.addClass('awake'); }
        if(sd.length > 0) { sd.addClass('sleep'); }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) { navbar.removeClass('awake'); navbar.addClass('sleep'); }
        if(sd.length > 0) { sd.removeClass('sleep'); }
      }
    });
  };
  scrollWindow();

  var counter = function() {
    $('#section-counter').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('.number').each(function(){
          var $this = $(this), num = $this.data('number');
          console.log(num);
          $this.animateNumber({ number: num, numberStep: comma_separator_number_step }, 7000);
        });
      }
    } , { offset: '95%' } );
  }
  counter();

  var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint( function( direction ) {
      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {        
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function(){
          $('body .ftco-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') el.addClass('fadeIn ftco-animated');
              else if ( effect === 'fadeInLeft') el.addClass('fadeInLeft ftco-animated');
              else if ( effect === 'fadeInRight') el.addClass('fadeInRight ftco-animated');
              else el.addClass('fadeInUp ftco-animated');
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });
        }, 100);
      }
    } , { offset: '95%' } );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function() {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash, navToggler = $('.navbar-toggler');
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 700, 'easeInOutExpo', function(){ window.location.hash = hash; });
      if ( navToggler.is(':visible') ) { navToggler.click(); }
    });
    $('body').on('activate.bs.scrollspy', function () { console.log('nice'); })
  };
  OnePageNav();

  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: { enabled: true, navigateByImgClick: true, preload: [0,1] },
    image: { verticalFit: true },
    zoom: { enabled: true, duration: 300 }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  var goHere = function() {
    $('.mouse-icon').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({ scrollTop: $('.goto-here').offset().top }, 500, 'easeInOutExpo');
      return false;
    });
  };
  goHere();

  function makeTimer() {
    var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");      
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date(); now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");    
  }
  setInterval(function() { makeTimer(); }, 1000);

})(jQuery);

// ===================== CART SISTEM (novi dio) =====================

// Ključ u localStorage
const CART_KEY = 'cart_items';

// Helpers: storage
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

// Helpers: cijene
// ————— PROMJENA: sve formatiramo u € —————
function money(n){
  // Jednostavno: € ispred, dvije decimale (npr. €12.00)
  return '€' + Number(n || 0).toFixed(2);
}
// robustno parsiranje: uklanja sve sem cifara, decimalnih znakova i minus; ignoriše $ i €
function parsePrice(val){
  if(typeof val==='number') return val;
  return Number(String(val).replace(/[^\d.,-]/g,'').replace(',','.')) || 0;
}

// Badge u navbaru
function updateCartBadge() {
  const items = getCart();
  const count = items.reduce((sum, it) => sum + (it.qty || 1), 0);
  const badgeLink = document.querySelector('.icon-shopping_cart')?.parentNode;
  if (badgeLink) badgeLink.innerHTML = `<span class="icon-shopping_cart"></span>[${count}]`;
}

// 1) AUTO-generiši jedinstveni data-id za svaku .product karticu
function ensureProductIds() {
  document.querySelectorAll('.product').forEach((el, idx) => {
    if (!el.dataset.id) {
      const title = (el.querySelector('h3 a')?.innerText || '').trim();
      // slika iz <img>, ako nema – iz background-image
      let img = '';
      const imgTag = el.querySelector('.img-prod img');
      if (imgTag) {
        img = imgTag.src;
      } else {
        const bg = el.querySelector('.img-prod');
        if (bg) {
          const s = bg.getAttribute('style') || '';
          const m = s.match(/url\(['"]?(.+?)['"]?\)/);
          if (m) img = m[1];
        }
      }
      const imgName = img ? img.split('/').pop().split('?')[0] : 'noimg';
      el.dataset.id = (title + '-' + imgName + '-' + idx)
        .toLowerCase()
        .replace(/[^a-z0-9-_]+/g, '-');
    }
  });
}

// 2) Dodavanje itema u korpu (koristi data-id)
function addItem(productEl) {
  const title = productEl.querySelector('h3 a').innerText.trim();
  const priceText = productEl.querySelector('.price span').innerText.trim();
  const price = parsePrice(priceText);

  // slika (img ili background)
  let img = '';
  const imgTag = productEl.querySelector('.img-prod img');
  if (imgTag) img = imgTag.src;
  else {
    const bg = productEl.querySelector('.img-prod');
    if (bg) {
      const s = bg.getAttribute('style')||'';
      const m = s.match(/url\(['"]?(.+?)['"]?\)/);
      if (m) img = m[1];
    }
  }

  const id = productEl.dataset.id; // jedinstveni ID sa kartice

  let cart = getCart();
  const ex = cart.find(it => it.id === id);
  if (ex) ex.qty += 1;
  else cart.push({ id, title, price, img, qty: 1 });

  saveCart(cart);
  updateCartBadge();
}

// 3) Render tabele na CART stranici
function updateTotals(){
  const cart = getCart();
  const subtotal = cart.reduce((s,it)=> s + parsePrice(it.price)*(it.qty||1), 0);
  const delivery = 0;
  const discount = 0;
  const grand = subtotal + delivery - discount;

  const box = document.querySelector('.cart-total');
  if(!box) return;
  const lines = box.querySelectorAll('p.d-flex'); // Subtotal, Delivery, Discount
  if(lines[0]) lines[0].querySelector('span:last-child').textContent = money(subtotal);
  if(lines[1]) lines[1].querySelector('span:last-child').textContent = money(delivery);
  if(lines[2]) lines[2].querySelector('span:last-child').textContent = money(discount);
  const totalEl = box.querySelector('p.total-price span:last-child');
  if(totalEl) totalEl.textContent = money(grand);
}

function renderCart(){
  const tbody = document.getElementById('cart-body');
  if(!tbody) return; // nije na cart.html

  const cart = getCart();
  if(!cart.length){
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-5">Korpa je prazna.</td></tr>`;
    updateTotals(); updateCartBadge(); return;
  }

  tbody.innerHTML = cart.map(it=>{
    const price = parsePrice(it.price);
    const qty = it.qty || 1;
    const total = price*qty;
    const imgUrl = it.img || 'images/placeholder.png';
    return `
      <tr class="text-center" data-id="${it.id}">
        <td class="product-remove"><a href="#" class="remove-item"><span class="ion-ios-close"></span></a></td>
        <td class="image-prod"><div class="img" style="background-image:url(${imgUrl});"></div></td>
        <td class="product-name"><h3>${it.title||'Product'}</h3></td>
        <td class="price">${money(price)}</td>
        <td class="quantity">
          <div class="input-group mb-3">
            <input type="number" class="quantity form-control input-number qty-input" value="${qty}" min="1" max="100">
          </div>
        </td>
        <td class="total">${money(total)}</td>
      </tr>
    `;
  }).join('');

  // brisanje
  tbody.querySelectorAll('.remove-item').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = e.currentTarget.closest('tr').dataset.id;
      const cart = getCart().filter(x=>x.id!==id);
      saveCart(cart);
      renderCart();
    });
  });

  // promjena količine
  tbody.querySelectorAll('.qty-input').forEach(input=>{
    input.addEventListener('change', e=>{
      let qty = parseInt(e.currentTarget.value||'1',10); 
      qty = Math.max(1, Math.min(100, qty));
      e.currentTarget.value = qty;

      const id = e.currentTarget.closest('tr').dataset.id;
      const cart = getCart();
      const i = cart.findIndex(x=>x.id===id);
      if(i>-1){
        cart[i].qty = qty;
        saveCart(cart);
        const price = parsePrice(cart[i].price);
        e.currentTarget.closest('tr').querySelector('.total').textContent = money(price*qty);
        updateTotals(); updateCartBadge();
      }
    });
  });

  updateTotals(); updateCartBadge();
}

// 4) Inicijalizacija: ID-ovi, badge, click handleri, render
document.addEventListener('DOMContentLoaded', function() {
  // dodaj jedinstvene ID-jeve karticama na svim stranicama gdje postoje proizvodi
  ensureProductIds();

  // osvježi badge pri učitavanju stranice
  updateCartBadge();

  // ADD TO CART
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const product = this.closest('.product');
      if (!product) return;
      addItem(product);
      alert('Dodato u korpu!');
    });
  });

  // BUY NOW
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const product = this.closest('.product');
      if (!product) return;
      addItem(product);
      window.location.href = 'checkout.html';
    });
  });

  // Render CART ako smo na cart.html
  renderCart();
});

