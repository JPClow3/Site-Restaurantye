/* jshint esversion: 6 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Modal do Cardápio
  const cardapioLink = document.getElementById('cardapioLink');
  const modal = document.getElementById('cardapioModal');
  const closeButton = document.querySelector('.close-button');

  cardapioLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Flipbook - navegação entre páginas
  const pages = document.querySelectorAll('#flipbook .page');
  let currentPage = 0;
  const totalPages = pages.length;
  const pageNumberDisplay = document.createElement('p');
  pageNumberDisplay.classList.add('page-number-display');
  const controlsDiv = document.querySelector('.controls');

  if (controlsDiv) {
    controlsDiv.appendChild(pageNumberDisplay);
  }

  const showPage = (index) => {
    pages.forEach((page, i) => {
      page.classList.toggle('active', i === index);
    });
    updatePageNumberDisplay(index + 1, totalPages);
  };

  const updatePageNumberDisplay = (currentPageNumber, totalPagesNumber) => {
    pageNumberDisplay.textContent = `Página ${currentPageNumber} de ${totalPagesNumber}`;
  };

  showPage(currentPage);

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  const categoryButtons = document.querySelectorAll('#page1 .option');
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetPage = button.getAttribute('data-page');
      const targetIndex = Array.from(pages).findIndex(
        (p) => p.id === targetPage,
      );
      if (targetIndex !== -1) {
        currentPage = targetIndex;
        showPage(currentPage);
      }
    });
  });

  const callToActionButton = document.querySelector('.call-to-action button');
  callToActionButton.addEventListener('click', () => {
    const cardapioLink = document.getElementById('cardapioLink');
    cardapioLink.scrollIntoView({ behavior: 'smooth' });
  });

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});
