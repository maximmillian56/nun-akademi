document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle (Clear Icon & Auto-Close)
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      if (menuIcon) {
        menuIcon.textContent = isOpen ? '✕' : '☰';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (menuIcon) menuIcon.textContent = '☰';
      });
    });
  }

  // 3. Interactive Elifba Letter Explorer (Smooth Scroll to Spotlight on Mobile)
  const letterTiles = document.querySelectorAll('.letter-tile');
  const spotArabic = document.getElementById('spotArabic');
  const spotTitle = document.getElementById('spotTitle');
  const spotDesc = document.getElementById('spotDesc');
  const spotTip = document.getElementById('spotTip');
  const letterSpotlight = document.getElementById('letterSpotlight');

  letterTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      letterTiles.forEach(t => t.classList.remove('active'));
      tile.classList.add('active');

      if (spotArabic) spotArabic.textContent = tile.getAttribute('data-arabic');
      if (spotTitle) spotTitle.textContent = tile.getAttribute('data-title');
      if (spotDesc) spotDesc.textContent = tile.getAttribute('data-desc');
      if (spotTip) spotTip.textContent = tile.getAttribute('data-tip');

      // On mobile screens, gently scroll the spotlight card into view so the user immediately sees the change
      if (window.innerWidth <= 768 && letterSpotlight) {
        letterSpotlight.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 4. Interactive Logo Meaning Cards
  const meaningItems = document.querySelectorAll('.logo-story-card .meaning-item');
  meaningItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      meaningItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
    item.addEventListener('click', () => {
      meaningItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 5. Interactive Playground Tabs (Elifba / Sünnet / Siyer)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 6. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
});
