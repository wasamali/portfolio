/**
 * Wasam Ali — Swiss-Style Brand & Systems Designer Portfolio
 * Main Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initArchiveTable();
  initModalLightbox();
  initClipboardToast();
  initContactForm();
  initNavigation();
});

/**
 * 1. Project Catalogue / Archive Table with Swiss Filter Pills
 */
function initArchiveTable() {
  const tableBody = document.getElementById('archive-table-body');
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!tableBody || !window.portfolioData) return;

  const archiveData = window.portfolioData.archive;

  function renderRows(filteredItems) {
    tableBody.innerHTML = '';
    filteredItems.forEach((item) => {
      const tr = document.createElement('tr');
      tr.className = 'table-row-clickable';
      tr.setAttribute('data-index', item.index);
      tr.innerHTML = `
        <td class="table-index">${item.index}</td>
        <td>
          <div class="table-client">${item.client}</div>
          <div class="table-project">${item.project}</div>
        </td>
        <td><span class="table-category-tag">${item.category}</span></td>
        <td class="table-deliverables">${item.deliverables}</td>
        <td class="table-year">${item.year}</td>
        <td class="table-action"><span class="arrow-right">→</span></td>
      `;
      tr.addEventListener('click', () => {
        openModalWithArchiveItem(item);
      });
      tableBody.appendChild(tr);
    });
  }

  // Initial full render
  renderRows(archiveData);

  // Filter Pills logic
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterKey = pill.getAttribute('data-filter');
      if (filterKey === 'all') {
        renderRows(archiveData);
      } else {
        const filtered = archiveData.filter(item => item.categoryKey === filterKey);
        renderRows(filtered);
      }
    });
  });
}

/**
 * 2. Lightbox Modal for Design Inspection
 */
function initModalLightbox() {
  const modalOverlay = document.getElementById('lightbox-modal');
  const modalClose = document.getElementById('modal-close-btn');
  if (!modalOverlay) return;

  // Close handlers
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach click listener to all Swiss placeholder frames across the page
  document.querySelectorAll('.swiss-placeholder-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      const title = frame.getAttribute('data-title') || 'Design Artifact';
      const category = frame.getAttribute('data-category') || 'Visual Systems';
      const specs = frame.getAttribute('data-specs') || '1:1 Vector Architecture';
      const tag = frame.getAttribute('data-tag') || 'Spatial & Print';
      const aspect = frame.getAttribute('data-aspect') || 'aspect-16-9';
      const notes = frame.getAttribute('data-notes') || '';

      openModal({
        title,
        client: category,
        deliverables: specs,
        aspect,
        tag,
        notes
      });
    });
  });
}

function openModal(data) {
  const modalOverlay = document.getElementById('lightbox-modal');
  const modalContent = document.getElementById('modal-body');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #222222; padding-bottom: 1rem;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-accent); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem;">
        ${data.client || 'Portfolio Case Study'} / ${data.tag || 'Artifact'}
      </div>
      <h3 style="font-size: 1.85rem; font-weight: 800; letter-spacing: -0.03em; color: #ffffff; line-height: 1.15;">
        ${data.title}
      </h3>
    </div>

    <!-- Scaled Swiss Frame Viewer -->
    <div class="swiss-placeholder-frame ${data.aspect || 'aspect-16-9'}" style="margin-bottom: 1.5rem; background-color: #080808; border-color: #333333; cursor: default;">
      <div class="frame-center-grid"></div>
      <span class="frame-crosshair top-left">+</span>
      <span class="frame-crosshair top-right">+</span>
      <span class="frame-crosshair bottom-left">+</span>
      <span class="frame-crosshair bottom-right">+</span>
      <div class="frame-content-inner">
        <span class="frame-tag">${data.tag || 'Architectural System'}</span>
        <div class="frame-label" style="font-size: 1.2rem;">${data.title}</div>
        <div class="frame-specs" style="color: #888888; margin-top: 0.5rem;">${data.deliverables || 'Production-Grade Asset'}</div>
        <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.7rem; color: #555555;">
          ASSET READY FOR HIGH-RESOLUTION CLIENT DISPLAY
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; font-size: 0.9rem; color: #aaaaaa; border-top: 1px solid #222222; padding-top: 1.25rem;">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; color: #666666; margin-bottom: 0.25rem;">Deliverables & Format</div>
        <div style="color: #ffffff; font-weight: 600;">${data.deliverables || 'Complete Visual Identity System'}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; color: #666666; margin-bottom: 0.25rem;">Status / Access</div>
        <div style="color: #10b981; font-weight: 600;">● Production Verified (2020–2026)</div>
      </div>
    </div>

    ${data.notes ? `
      <div class="confidentiality-badge" style="margin-top: 1.25rem;">
        ${data.notes}
      </div>
    ` : ''}
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openModalWithArchiveItem(item) {
  openModal({
    title: item.project,
    client: item.client,
    deliverables: item.deliverables,
    aspect: item.aspectRatio === '1:1' ? 'aspect-1-1' : (item.aspectRatio === '4:3' ? 'aspect-4-3' : 'aspect-16-9'),
    tag: item.category,
    notes: `Selected from Wasam Ali's Comprehensive Project Archive (${item.year}). Architectural identity and deliverable production.`
  });
}

function closeModal() {
  const modalOverlay = document.getElementById('lightbox-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * 3. Copy Email to Clipboard Toast
 */
function initClipboardToast() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const emailToCopy = "wasamali775@gmail.com";

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast(`Copied: ${emailToCopy}`);
      }).catch(() => {
        // Fallback mailto
        window.location.href = `mailto:${emailToCopy}`;
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/**
 * 4. Inline Minimal Swiss Contact Form
 */
function initContactForm() {
  const contactForm = document.getElementById('swiss-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const org = document.getElementById('contact-org').value;
    const message = document.getElementById('contact-message').value;

    const subject = encodeURIComponent(`Executive Project Inquiry: ${name} (${org})`);
    const body = encodeURIComponent(`From: ${name}\nOrganization: ${org}\n\nProject Scope & Role Inquiry:\n${message}\n`);
    const mailtoUrl = `mailto:wasamali775@gmail.com?subject=${subject}&body=${body}`;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Transmitting...';

    setTimeout(() => {
      window.location.href = mailtoUrl;
      submitBtn.innerHTML = 'Transmitted via Email Client ✓';
      contactForm.reset();
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
      }, 3500);
    }, 600);
  });
}

/**
 * 5. Navigation & Mobile Drawer
 */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Active section tracking on scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-anchor');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}
