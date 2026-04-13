const images = Array.from(document.querySelectorAll('.project-images img'));
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function showNext(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => showNext(-1));
nextBtn.addEventListener('click', () => showNext(1));
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showNext(-1);
  if (e.key === 'ArrowRight') showNext(1);
});