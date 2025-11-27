'use strict';

/**
 * Tueri - Main JavaScript
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Element selectors
  const navToggleBtn = document.querySelector('[data-nav-toggler]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const overlay = document.querySelector('[data-overlay]');
  const header = document.querySelector('[data-header]');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');

  // Toggle mobile menu
  if (navToggleBtn && mobileNav && overlay) {
    navToggleBtn.addEventListener('click', function() {
      navToggleBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('nav-active');
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
      navToggleBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('nav-active');
    });
  }

  // Handle mobile submenu toggles
  submenuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.closest('.has-submenu');
      
      // Close other open submenus
      document.querySelectorAll('.has-submenu.active').forEach(function(item) {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current submenu
      parent.classList.toggle('active');
    });
  });

  // Header scroll effect
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for down arrow
  const downArrow = document.querySelector('.down-arrow');
  if (downArrow) {
    downArrow.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

});
