// Unified Floating Action Buttons (WhatsApp, Call, Back to Top)
document.addEventListener('DOMContentLoaded', function () {

    function addFloatingActions() {
        if (document.querySelector('.unified-floating-container')) return;

        const container = document.createElement('div');
        container.className = 'unified-floating-container';
        container.innerHTML = `
            <a href="#" class="float-btn float-back-to-top" id="globalBackToTop" title="Back to Top" style="display: none;">
                <i class="bi bi-arrow-up"></i>
            </a>
            <a href="tel:+919963698908" class="float-btn float-call" title="Call Us">
                <i class="bi bi-telephone-fill"></i>
            </a>
            <a href="https://wa.me/919963698908" class="float-btn float-whatsapp" target="_blank" title="WhatsApp Us">
                <i class="bi bi-whatsapp"></i>
            </a>
        `;

        document.body.appendChild(container);

        // Styling
        if (!document.getElementById('floating-actions-style')) {
            const style = document.createElement('style');
            style.id = 'floating-actions-style';
            style.textContent = `
                .unified-floating-container {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                }
                
                .float-btn {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none !important;
                }
                
                .float-whatsapp { background-color: #25d366; }
                .float-call { background-color: #39457b; }
                .float-back-to-top { 
                    background-color: #f0f0f0; 
                    color: #333; 
                    width: 45px; 
                    height: 45px;
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                
                .float-btn:hover {
                    transform: translateY(-5px) scale(1.05);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
                }
                
                .float-back-to-top:hover { color: var(--primary-color, #39457b); }

                @media (max-width: 768px) {
                    .unified-floating-container {
                        bottom: 20px;
                        right: 20px;
                        gap: 10px;
                    }
                    .float-btn {
                        width: 50px;
                        height: 50px;
                        font-size: 22px;
                    }
                    .float-back-to-top {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Back to Top Logic
        const backToTop = document.getElementById('globalBackToTop');
        if (backToTop) {
            backToTop.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            window.addEventListener('scroll', function () {
                if (window.scrollY > 400) {
                    backToTop.style.display = 'flex';
                    setTimeout(() => backToTop.style.opacity = '1', 10);
                } else {
                    backToTop.style.display = 'none';
                }
            });
        }
    }

    addFloatingActions();
});
