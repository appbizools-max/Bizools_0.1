// Universal Mobile Optimization for All Pages
document.addEventListener('DOMContentLoaded', function () {

    // 3. Add Mobile CSS Optimizations
    function addMobileCSS() {
        // Check if mobile styles already exist
        if (document.querySelector('#mobile-optimization-styles')) return;

        const mobileStyles = document.createElement('style');
        mobileStyles.id = 'mobile-optimization-styles';
        mobileStyles.textContent = `
            /* Universal Mobile Optimizations */
            @media (max-width: 767px) {
                /* Prevent horizontal scroll globally */
                html, body {
                    overflow-x: hidden !important;
                    max-width: 100vw !important;
                    width: 100% !important;
                }
                
                /* Container fixes */
                .container, .container-fluid {
                    max-width: 100% !important;
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    overflow-x: hidden !important;
                }
                
                /* Row fixes */
                .row {
                    margin-left: -15px !important;
                    margin-right: -15px !important;
                    flex-wrap: wrap !important;
                }
                
                .row > * {
                    padding-left: 15px !important;
                    padding-right: 15px !important;
                    max-width: 100% !important;
                    flex-shrink: 1 !important;
                }
                
                /* Hide desktop arrow-to-top on mobile */
                .arrow-back-to {
                    display: none !important;
                }
                
                /* Bento Grid Mobile Optimization */
                .bento-grid {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 15px !important;
                    padding: 0 10px !important;
                    width: 100% !important;
                    overflow-x: hidden !important;
                }
                
                .bento-item {
                    width: 100% !important;
                    min-height: auto !important;
                    padding: 20px !important;
                    border-radius: 15px !important;
                    margin-bottom: 0 !important;
                    max-width: 100% !important;
                    overflow-x: hidden !important;
                    word-wrap: break-word !important;
                }
                
                .bento-item.wide,
                .bento-item.large,
                .bento-item.tall {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 100% !important;
                }
                
                .bento-item.wide.large {
                    order: -1 !important;
                }
                
                .bento-item h2 {
                    font-size: 24px !important;
                    line-height: 1.2 !important;
                    margin-bottom: 15px !important;
                    word-wrap: break-word !important;
                }
                
                .bento-item h5 {
                    font-size: 18px !important;
                    margin-bottom: 10px !important;
                    word-wrap: break-word !important;
                }
                
                .bento-item p {
                    font-size: 14px !important;
                    line-height: 1.5 !important;
                    word-wrap: break-word !important;
                }
                
                .bento-item p.lead {
                    font-size: 16px !important;
                }
                
                .bento-item img {
                    margin-top: 20px !important;
                    border-radius: 10px !important;
                    max-width: 100% !important;
                    height: auto !important;
                }
                
                .bento-item .p-3 {
                    padding: 12px !important;
                    margin-bottom: 8px !important;
                    font-size: 13px !important;
                    word-wrap: break-word !important;
                    overflow-wrap: break-word !important;
                }
                
                /* Section mobile adjustments */
                .py-5 {
                    padding-top: 40px !important;
                    padding-bottom: 40px !important;
                }
                
                /* Text overflow fixes */
                h1, h2, h3, h4, h5, h6 {
                    word-wrap: break-word !important;
                    overflow-wrap: break-word !important;
                    hyphens: auto !important;
                    max-width: 100% !important;
                }
                
                p, span, div {
                    word-wrap: break-word !important;
                    overflow-wrap: break-word !important;
                    max-width: 100% !important;
                }
                
                /* Image fixes */
                img {
                    max-width: 100% !important;
                    height: auto !important;
                }
                
                /* Button fixes */
                .btn, button {
                    white-space: normal !important;
                    word-wrap: break-word !important;
                    max-width: 100% !important;
                }
                
                /* General Mobile Optimizations */
                body {
                    font-size: 14px !important;
                    line-height: 1.6 !important;
                }
                
                h1 {
                    font-size: 28px !important;
                    line-height: 1.3 !important;
                }
                
                h2 {
                    font-size: 24px !important;
                    line-height: 1.3 !important;
                }
                
                h3 {
                    font-size: 20px !important;
                    line-height: 1.3 !important;
                }
                
                /* Touch Optimizations */
                button, .btn, a {
                    min-height: 44px;
                    min-width: 44px;
                }
            }
        `;

        document.head.appendChild(mobileStyles);
    }

    // 4. Add Bootstrap Icons if not present
    function addBootstrapIcons() {
        if (!document.querySelector('link[href*="bootstrap-icons"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css';
            document.head.appendChild(link);
        }
    }

    // Initialize all optimizations
    addBootstrapIcons();
    addMobileCSS();

    console.log('Mobile optimization applied to page');
});
