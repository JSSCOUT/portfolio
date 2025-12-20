// ===== Scroll Animations =====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

sections.forEach(section => observer.observe(section));

// ===== Theme Toggle =====
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  if (!isDark) {
    document.body.classList.add('light');
    themeIcon.textContent = '☀️';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const isDark = !document.body.classList.contains('light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '🌙' : '☀️';
}

loadTheme();
themeToggle?.addEventListener('click', toggleTheme);

// ===== Mobile Navigation =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

function closeMenu() {
  navToggle?.classList.remove('active');
  navMenu?.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', () => {
  const isActive = navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isActive);
  document.body.style.overflow = isActive ? 'hidden' : '';
});

// Close menu on link click or outside click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (navMenu?.classList.contains('active') && 
      !navMenu.contains(e.target) && 
      !navToggle.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
    closeMenu();
    navToggle.focus();
  }
});

// ===== Active Nav Highlighting =====
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 200;
        if (scrollY >= top && scrollY < top + section.clientHeight) {
          current = section.id;
        }
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ===== Project Card Animations =====
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  projectObserver.observe(card);
});

// ===== Video Modal =====
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalClose = document.querySelector('.modal-close');
const demoBtns = document.querySelectorAll('.demo-btn');

demoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoSrc = btn.dataset.video;
    modalVideo.src = videoSrc;
    videoModal.classList.add('active');
    modalVideo.play();
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  videoModal.classList.remove('active');
  modalVideo.pause();
  modalVideo.src = '';
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);

videoModal?.addEventListener('click', (e) => {
  if (e.target === videoModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal?.classList.contains('active')) {
    closeModal();
  }
});
