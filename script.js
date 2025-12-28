// Main Book JavaScript
class DigitalBook {
    constructor() {
        this.currentPage = 1;
        this.totalPages = pages.length;
        this.isAnimating = false;

        this.init();
    }

    init() {
        // Load saved settings
        this.loadSettings();
        
        // Add special CSS first
        this.addCoverStyles();

        // Render all pages
        this.renderPages();

        // Set up event listeners
        this.setupEventListeners();

        // Show current page
        this.goToPage(this.currentPage);

        // Initialize theme
        this.initTheme();
    }

    addCoverStyles() {
        // Check if styles are already added
        if (document.getElementById('cover-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'cover-styles';
        style.textContent = `
            /* COVER PAGE STYLES - ADDED VIA JS */
            .page.cover-page {
                text-align: center !important;
            }
            
            .page.cover-page .page-title {
                font-size: 2.5rem !important;
                text-align: center !important;
                margin-top: 80px !important;
                margin-bottom: 40px !important;
                border-bottom: none !important;
                color: #3498db !important;
                text-shadow: 3px 3px 6px rgba(0,0,0,0.3) !important;
                letter-spacing: 3px !important;
                position: relative !important;
                padding-bottom: 20px !important;
            }
            
            .page.cover-page .page-title::after {
                content: '' !important;
                position: absolute !important;
                bottom: 0 !important;
                left: 25% !important;
                right: 25% !important;
                height: 4px !important;
                background: linear-gradient(90deg, #3498db, #f1c40f, #3498db) !important;
                border-radius: 2px !important;
            }
            
            .theme-dark .page.cover-page .page-title {
                color: #FFD700 !important;
            }
            
            .page.cover-page .page-content {
                text-align: center !important;
                font-size: 1.4rem !important;
                line-height: 2 !important;
                margin-top: 40px !important;
                min-height: 450px !important;
                position: relative !important;
                padding: 60px 40px !important;
                font-family: 'Georgia', serif !important;
                white-space: pre-wrap !important;
            }
            
            /* OUTRO PAGE STYLES */
            .page.outro-page {
                text-align: center !important;
            }
            
            .page.outro-page .page-title {
                font-size: 2.8rem !important;
                text-align: center !important;
                margin-top: 100px !important;
                border-bottom: none !important;
                color: #2c3e50 !important;
                position: relative !important;
                margin-bottom: 50px !important;
            }
            
            .theme-dark .page.outro-page .page-title {
                color: #ecf0f1 !important;
            }
            
            .page.outro-page .page-content {
                text-align: center !important;
                font-size: 1.3rem !important;
                line-height: 2 !important;
                margin-top: 30px !important;
                min-height: 400px !important;
                padding: 50px !important;
                background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(241, 196, 15, 0.1) 100%) !important;
                border-radius: 20px !important;
                position: relative !important;
                overflow: hidden !important;
                white-space: pre-wrap !important;
                font-family: 'Georgia', serif !important;
                border: 2px solid rgba(52, 152, 219, 0.2) !important;
            }
            
            .page.outro-page .page-content::before {
                content: "✦ THANK YOU ✦" !important;
                position: absolute !important;
                top: 15px !important;
                left: 0 !important;
                right: 0 !important;
                font-size: 1.1rem !important;
                color: #3498db !important;
                opacity: 0.7 !important;
                font-weight: bold !important;
            }
            
            .theme-dark .page.outro-page .page-content::before {
                color: #FFD700 !important;
            }
            
            .page.outro-page .page-content::after {
                content: "" !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background: radial-gradient(circle at 30% 30%, rgba(52, 152, 219, 0.05) 0%, transparent 50%) !important;
                pointer-events: none !important;
            }
            
            /* DECORATIVE ELEMENTS */
            .page.cover-page::before {
                content: "" !important;
                position: absolute !important;
                top: 30px !important;
                left: 30px !important;
                right: 30px !important;
                bottom: 30px !important;
                border: 3px double rgba(52, 152, 219, 0.2) !important;
                border-radius: 15px !important;
                pointer-events: none !important;
                z-index: -1 !important;
            }
            
            .page.outro-page::after {
                content: "The End" !important;
                position: absolute !important;
                bottom: 30px !important;
                left: 0 !important;
                right: 0 !important;
                font-size: 1.2rem !important;
                color: rgba(52, 152, 219, 0.5) !important;
                font-style: italic !important;
                font-weight: bold !important;
            }
            
            /* SPECIAL FONT FOR ASCII ART */
            .page.cover-page .page-content,
            .page.outro-page .page-content {
                font-family: 'Courier New', monospace !important;
                letter-spacing: 0.5px !important;
            }
        `;
        document.head.appendChild(style);
    }

    renderPages() {
        const container = document.getElementById('pages-container');
        container.innerHTML = '';

        pages.forEach((page, index) => {
            const pageElement = document.createElement('div');
            pageElement.className = 'page';
            pageElement.id = `page-${index + 1}`;
            
            // Add special classes for cover and outro
            if (index === 0) {
                pageElement.classList.add('cover-page');
            } else if (index === pages.length - 1) {
                pageElement.classList.add('outro-page');
            }
            
            // Format content to preserve whitespace
            let formattedContent = page.content || '';
            
            if (formattedContent) {
                formattedContent = this.escapeHtml(formattedContent);
                formattedContent = formattedContent.replace(/  /g, ' &nbsp;');
                formattedContent = formattedContent.replace(/\n/g, '<br>');
                formattedContent = formattedContent.replace(/<br><br>/g, '<br><br>');
                formattedContent = formattedContent.replace(/\r\n/g, '<br>');
            }
            
            pageElement.innerHTML = `
                <h1 class="page-title">${page.title}</h1>
                <div class="page-content ${!page.content ? 'empty' : ''}">
                    ${formattedContent}
                </div>
                <div class="page-number">Page ${index + 1}</div>
            `;
            container.appendChild(pageElement);
        });

        // Update total pages display
        document.getElementById('totalPages').textContent = this.totalPages;

        // Update slider
        const slider = document.getElementById('pageSlider');
        slider.max = this.totalPages;
        slider.value = this.currentPage;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    setupEventListeners() {
        // Navigation buttons
        document.querySelector('.prev-btn').addEventListener('click', () => this.prevPage());
        document.querySelector('.next-btn').addEventListener('click', () => this.nextPage());

        // Quick controls
        document.getElementById('firstPage').addEventListener('click', () => this.goToPage(1));
        document.getElementById('lastPage').addEventListener('click', () => this.goToPage(this.totalPages));
        document.getElementById('prevPage').addEventListener('click', () => this.prevPage());
        document.getElementById('nextPage').addEventListener('click', () => this.nextPage());

        // Slider
        const slider = document.getElementById('pageSlider');
        slider.addEventListener('input', (e) => {
            document.getElementById('currentPage').textContent = e.target.value;
        });

        slider.addEventListener('change', (e) => {
            this.goToPage(parseInt(e.target.value));
        });

        document.getElementById('jumpBtn').addEventListener('click', () => {
            this.goToPage(parseInt(slider.value));
        });

        // Theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.target.closest('.theme-btn').dataset.theme;
                this.switchTheme(theme);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isAnimating) return;

            switch(e.key) {
                case 'ArrowLeft':
                case 'PageUp':
                    e.preventDefault();
                    this.prevPage();
                    break;
                case 'ArrowRight':
                case 'PageDown':
                case ' ':
                    e.preventDefault();
                    this.nextPage();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToPage(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToPage(this.totalPages);
                    break;
            }
        });

        // Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        if (this.isAnimating) return;

        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.prevPage();
            }
        }
    }

    prevPage() {
        if (this.currentPage > 1 && !this.isAnimating) {
            this.goToPage(this.currentPage - 1);
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages && !this.isAnimating) {
            this.goToPage(this.currentPage + 1);
        }
    }

    goToPage(pageNumber) {
        if (this.isAnimating || pageNumber < 1 || pageNumber > this.totalPages) {
            return;
        }

        this.isAnimating = true;

        const currentPageEl = document.getElementById(`page-${this.currentPage}`);
        if (currentPageEl) {
            currentPageEl.classList.remove('active');
            currentPageEl.style.animation = 'pageEnter 0.6s ease reverse forwards';

            setTimeout(() => {
                currentPageEl.style.animation = '';
            }, 600);
        }

        this.currentPage = pageNumber;

        setTimeout(() => {
            const newPageEl = document.getElementById(`page-${this.currentPage}`);
            if (newPageEl) {
                newPageEl.classList.add('active');
            }

            this.updateUI();
            this.saveSettings();
            this.isAnimating = false;
        }, 300);
    }

    updateUI() {
        document.getElementById('currentPage').textContent = this.currentPage;
        document.getElementById('pageSlider').value = this.currentPage;

        const prevBtns = document.querySelectorAll('.prev-btn, #prevPage, #firstPage');
        const nextBtns = document.querySelectorAll('.next-btn, #nextPage, #lastPage');

        prevBtns.forEach(btn => {
            btn.disabled = this.currentPage === 1;
        });

        nextBtns.forEach(btn => {
            btn.disabled = this.currentPage === this.totalPages;
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.querySelector('.book-container').style.transform = 'translateZ(10px)';
        setTimeout(() => {
            document.querySelector('.book-container').style.transform = 'translateZ(0)';
        }, 300);
    }

    initTheme() {
        const savedTheme = localStorage.getItem('bookTheme') || 'light';
        this.switchTheme(savedTheme);

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === savedTheme);
        });
    }

    switchTheme(theme) {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(`theme-${theme}`);

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });

        localStorage.setItem('bookTheme', theme);

        document.body.style.animation = 'fadeIn 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }

    saveSettings() {
        localStorage.setItem('bookCurrentPage', this.currentPage);
    }

    loadSettings() {
        const savedPage = localStorage.getItem('bookCurrentPage');
        if (savedPage) {
            const pageNum = parseInt(savedPage);
            if (pageNum >= 1 && pageNum <= this.totalPages) {
                this.currentPage = pageNum;
            }
        }
    }
}

// Initialize the book when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DigitalBook();

    // Add some interactive effects
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('mousedown', (e) => {
            e.target.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('mouseup', (e) => {
            e.target.style.transform = '';
        });

        btn.addEventListener('mouseleave', (e) => {
            e.target.style.transform = '';
        });
    });

    // Add bookmark click effect
    document.querySelector('.bookmark').addEventListener('click', function() {
        this.style.animation = 'bookmarkSpin 1s, bookmarkPulse 2s infinite';
        setTimeout(() => {
            this.style.animation = 'bookmarkPulse 2s infinite';
        }, 1000);
    });
});