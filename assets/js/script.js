
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length > 1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block:'start' });
      }
    });
  });

  // lightbox for gallery images
  document.querySelectorAll('.gallery img, .gallery-item img').forEach(function(img){
    img.addEventListener('click', function(){
      var src = this.getAttribute('src');
      var overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer;backdrop-filter:blur(5px)';
      
      var im = document.createElement('img');
      im.src = src;
      im.style.cssText = 'max-width:90%;max-height:90%;border-radius:12px;box-shadow:0 20px 60px rgba(255,195,0,0.3);border:2px solid rgba(255,195,0,0.3)';
      
      overlay.appendChild(im);
      overlay.addEventListener('click', function(){ 
        document.body.removeChild(overlay); 
      });
      document.body.appendChild(overlay);
    });
  });

  // Add glow effect on hover for interactive elements
  var interactiveElements = document.querySelectorAll('a, button, .product-card, .brand-link, .wa-btn');
  interactiveElements.forEach(function(el){
    el.addEventListener('mouseenter', function(){
      this.style.transition = 'all 0.3s ease';
    });
  });
});
