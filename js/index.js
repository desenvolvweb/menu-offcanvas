const trigger   = document.querySelector( '.js-offcanvas-trigger' )
const offcanvas = document.querySelector( '.js-offcanvas-menu' )

trigger.addEventListener( 'click', toggleMobileMenu )

function toggleMobileMenu() {
  offcanvas.classList.toggle( 'is-active' )
}
