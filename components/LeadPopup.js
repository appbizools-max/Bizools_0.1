(function () {
    if (window.LeadPopupInitialized) return;
    window.LeadPopupInitialized = true;

    const getPrefix = () => {
        const p = window.location.pathname.toLowerCase();
        if (p.includes("/services/") || p.includes("/apps/") || p.includes("\\services\\") || p.includes("\\apps\\")) {
            return "../";
        }
        return "./";
    };
    const prefix = getPrefix();

    function createPopup() {
        const existing = document.getElementById('leadPopupOverlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'lead-popup-overlay';
        overlay.id = 'leadPopupOverlay';

        // Close on background click
        overlay.onclick = (e) => {
            if (e.target.id === 'leadPopupOverlay') {
                overlay.classList.remove('active');
            }
        };

        overlay.innerHTML = `
            <div class="lead-popup-content">
                <div class="popup-close" onclick="document.getElementById('leadPopupOverlay').classList.remove('active')">
                    <i class="bi bi-x-lg"></i>
                </div>
                <div class="text-center mb-3">
                    <img src="${prefix}Images/logo.png" style="height: 35px;" class="mb-3" alt="Bizools" />
                    <h2 class="fw-900 mb-1" style="letter-spacing: -1.5px; font-family: 'Outfit', sans-serif;">GET A <span style="color: var(--secondary-color);">QUOTE.</span></h2>
                    <p class="text-muted small fw-600 mb-2">Build your digital vision.</p>
                </div>
                <form class="lead-form" id="popupLeadForm">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="tel" name="phone" placeholder="Mobile / WhatsApp Number" required />
                    <select name="service" required>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Software Solutions">Software Solutions</option>
                        <option value="Branding & Identity">Branding & Identity</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                    </select>
                    <textarea name="message" placeholder="Tell us about your project goals..." rows="3"></textarea>
                    <button type="submit" class="btn-popup-submit">Submit</button>
                </form>
                <a href="tel:+91 9963698908" class="call-direct-link">
                    <div style="background: rgba(224, 90, 71, 0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="bi bi-telephone-fill" style="color: var(--secondary-color);"></i>
                    </div>
                    <span>DIRECT LINE: +91 9963698908</span>
                </a>
            </div>
        `;

        document.body.appendChild(overlay);

        const form = document.getElementById('popupLeadForm');
        form.onsubmit = async (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-popup-submit');

            if (window.BizoolsFormHandler) {
                await window.BizoolsFormHandler.submitForm(form, btn, () => {
                    overlay.classList.remove('active');
                });
            } else {
                // Fallback mockup logic if handler is missing
                btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>SUBMITTING...';
                btn.disabled = true;
                setTimeout(() => {
                    btn.innerHTML = '<i class="bi bi-check2-all me-2"></i>REQUEST RECEIVED!';
                    btn.style.background = '#059669';
                    setTimeout(() => overlay.classList.remove('active'), 2000);
                }, 1200);
            }
        };
    }

    window.showLeadPopup = () => {
        const overlay = document.getElementById('leadPopupOverlay');
        if (!overlay) {
            createPopup();
            setTimeout(() => {
                document.getElementById('leadPopupOverlay').classList.add('active');
            }, 50);
        } else {
            overlay.classList.add('active');
        }

        // Defensive Offcanvas Close
        const offcanvas = document.getElementById('offcanvasNav');
        if (offcanvas && offcanvas.classList.contains('show')) {
            if (typeof bootstrap !== 'undefined') {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
        }
    };

    const initPopup = () => {
        if (!document.getElementById('leadPopupOverlay')) {
            createPopup();
        }
        setTimeout(() => {
            const overlay = document.getElementById('leadPopupOverlay');
            if (overlay && !overlay.classList.contains('active')) {
                overlay.classList.add('active');
            }
        }, 6000); // 6 Seconds
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
    } else {
        initPopup();
    }
})();
