/* ============================================================
   NAVIGATION — Keyboard & Button Navigation
   ============================================================ */

/**
 * Initialise keyboard navigation for slide pages.
 * Call this on slide.html once the page is loaded.
 */
function initSlideNavigation() {
    document.addEventListener('keydown', function (e) {
        // Don't intercept when typing in an input or textarea
        const tag = document.activeElement.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

        // Don't navigate when quiz video modal is open
        if (window._quizModalOpen) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeQuizVideoModal();
            }
            return;
        }
        const currentId = getCurrentSlideId();

        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                if (currentId < TOTAL_SLIDES) {
                    navigateToSlide(currentId + 1, 'forward');
                } else if (currentId === TOTAL_SLIDES) {
                    // On last slide, go to demo
                    window.location.href = 'demo.html';
                }
                break;

            case 'ArrowLeft':
                e.preventDefault();
                if (currentId > 1) {
                    navigateToSlide(currentId - 1, 'backward');
                }
                break;

            case 'Home':
                e.preventDefault();
                navigateToSlide(1, 'backward');
                break;

            case 'End':
                e.preventDefault();
                navigateToSlide(TOTAL_SLIDES, 'forward');
                break;

            case 'Escape':
                e.preventDefault();
                window.location.href = 'dashboard.html';
                break;
        }
    });
}

/**
 * Initialise keyboard navigation for the demo page.
 */
function initDemoNavigation() {
    document.addEventListener('keydown', function (e) {
        const tag = document.activeElement.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.location.href = 'slide.html?id=' + TOTAL_SLIDES;
        } else if (e.key === 'Escape') {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        }
    });
}

/**
 * Get the current slide ID from URL parameters.
 */
function getCurrentSlideId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return isNaN(id) ? 1 : Math.max(1, Math.min(id, TOTAL_SLIDES));
}

/**
 * Navigate to a specific slide with transition direction.
 */
function navigateToSlide(id, direction) {
    // Store direction for animation
    sessionStorage.setItem('slideDirection', direction || 'forward');
    window.location.href = 'slide.html?id=' + id;
}

/**
 * Render the slide content on the slide page.
 */
function renderSlide(slideId) {
    const slide = slidesData.find(s => s.number === slideId);
    if (!slide) {
        window.location.href = 'dashboard.html';
        return;
    }

    // Update top bar
    const slideInfo = document.getElementById('slide-info');
    if (slideInfo) {
        slideInfo.innerHTML = `<strong>${slide.title}</strong> &mdash; Slide ${slide.number} / ${TOTAL_SLIDES}`;
    }

    // Render content
    const contentEl = document.getElementById('slide-content');
    if (contentEl) {
        // Apply entry animation based on direction
        const direction = sessionStorage.getItem('slideDirection') || 'forward';
        contentEl.style.animation = 'none';
        contentEl.offsetHeight; // Force reflow
        contentEl.style.animation = direction === 'backward' ? 'slideEnterReverse 0.45s ease-out' : 'slideEnter 0.45s ease-out';
        contentEl.innerHTML = slide.renderContent();
    }

    // Update progress dots
    renderProgressDots(slideId);

    // Update nav buttons
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    if (prevBtn) {
        prevBtn.disabled = slideId <= 1;
        prevBtn.onclick = function () { navigateToSlide(slideId - 1, 'backward'); };
    }
    if (nextBtn) {
        nextBtn.textContent = slideId >= TOTAL_SLIDES ? 'Demo →' : 'Next →';
        nextBtn.onclick = function () {
            if (slideId >= TOTAL_SLIDES) {
                window.location.href = 'demo.html';
            } else {
                navigateToSlide(slideId + 1, 'forward');
            }
        };
    }

    // Initialize tooltips for slide 10
    initFlowTooltips();
}

/**
 * Render the progress dots at the bottom.
 */
function renderProgressDots(currentId) {
    const container = document.getElementById('progress-dots');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === currentId) dot.classList.add('active');
        else if (i < currentId) dot.classList.add('completed');
        dot.title = `Slide ${i}`;
        dot.setAttribute('role', 'button');
        dot.setAttribute('aria-label', `Go to slide ${i}`);
        dot.onclick = function () {
            navigateToSlide(i, i > currentId ? 'forward' : 'backward');
        };
        container.appendChild(dot);
    }
}

/**
 * Render the dashboard grid with slide cards.
 */
function renderDashboard() {
    const grid = document.getElementById('slides-grid');
    if (!grid) return;

    grid.innerHTML = '';
    slidesData.forEach(function (slide, index) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="slide-card card-3d" onclick="window.location.href='slide.html?id=${slide.number}'" role="button" tabindex="0" aria-label="Open Slide ${slide.number}: ${slide.title}">
                <div class="slide-card-inner glass card-3d-inner glass-shimmer" id="card-${slide.number}">
                    <div class="card-num">${String(slide.number).padStart(2, '0')}</div>
                    <div class="card-category">${slide.category}</div>
                    <div class="card-title">${slide.title}</div>
                    <div class="card-desc">${slide.description}</div>
                    <div class="card-footer">
                        <span class="presenter">👤 ${slide.presenter}</span>
                        <span class="open-btn">Open Slide →</span>
                    </div>
                </div>
            </div>`;
        grid.appendChild(col);

        // Stagger animation
        const card = col.querySelector('.slide-card-inner');
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.06}s backwards`;
    });

    // Init 3D card hover
    init3DCards();
}

/**
 * Initialise 3D card hover effect on dashboard.
 */
function init3DCards() {
    document.querySelectorAll('.card-3d').forEach(function (card) {
        const inner = card.querySelector('.card-3d-inner');
        if (!inner) return;

        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateY = ((x - centerX) / centerX) * 8;
            const rotateX = ((centerY - y) / centerY) * 6;

            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', function () {
            inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });

        // Keyboard enter
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') card.click();
        });
    });
}

/**
 * Initialise tooltips on flow nodes (slide 10).
 */
function initFlowTooltips() {
    document.querySelectorAll('.nifi-flow-tooltip').forEach(function (node) {
        const text = node.getAttribute('data-tooltip');
        if (!text) return;

        let tooltip = null;

        node.addEventListener('mouseenter', function (e) {
            tooltip = document.createElement('div');
            tooltip.className = 'nifi-tooltip';
            tooltip.textContent = text;
            document.body.appendChild(tooltip);

            const rect = node.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.scrollY + 'px';

            requestAnimationFrame(function () {
                tooltip.classList.add('show');
            });
        });

        node.addEventListener('mouseleave', function () {
            if (tooltip) {
                tooltip.classList.remove('show');
                setTimeout(function () {
                    if (tooltip && tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
                    tooltip = null;
                }, 250);
            }
        });

        node.style.cursor = 'help';
    });
}

/**
 * Check if user is logged in (simple session check).
 */
function checkAuth() {
    if (sessionStorage.getItem('nifi_authenticated') !== 'true') {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

/**
 * Scroll-aware navigation bar.
 */
function initScrollNav() {
    const nav = document.querySelector('.top-nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}
