// ===== Canonical navigation (single source of truth for all pages) =====
const NAV_SECTIONS = [
    { title: 'Section 1 - Foundations', items: [
        ['sections/1-foundations/1.1-java-deep-dive.html', '1.1 Java Deep Dive'],
        ['sections/1-foundations/1.2-spring-boot.html', '1.2 Spring Boot & Reactive'],
    ]},
    { title: 'Section 2 - DSA & Algorithms', items: [
        ['sections/2-dsa/2.1-arrays-strings.html', '2.1 Arrays & Strings'],
        ['sections/2-dsa/2.2-hashing.html', '2.2 Hashing & HashMaps'],
        ['sections/2-dsa/2.3-trees-graphs.html', '2.3 Trees & Graphs'],
        ['sections/2-dsa/2.4-heaps-tries.html', '2.4 Heaps & Tries'],
        ['sections/2-dsa/2.5-dp-greedy.html', '2.5 DP & Greedy'],
        ['sections/2-dsa/2.6-concurrency-ds.html', '2.6 Concurrency Structures'],
    ]},
    { title: 'Section 3 - Low-Level Design', items: [
        ['sections/3-lld/3.1-solid.html', '3.1 SOLID Principles'],
        ['sections/3-lld/3.2-creational.html', '3.2 Creational Patterns'],
        ['sections/3-lld/3.3-structural.html', '3.3 Structural Patterns'],
        ['sections/3-lld/3.4-behavioral-patterns.html', '3.4 Behavioral Patterns'],
        ['sections/3-lld/3.5-lld-problems.html', '3.5 LLD Problems'],
        ['sections/3-lld/3.6-testing.html', '3.6 Testing Strategies'],
    ]},
    { title: 'Section 4 - System Design (HLD)', items: [
        ['sections/4-hld/4.0-overview.html', '4.0 Overview & Topic Index'],
        ['sections/4-hld/4.1-core-fundamentals.html', '4.1 Core Fundamentals'],
        ['sections/4-hld/4.2-architecture-patterns.html', '4.2 Architecture Patterns'],
        ['sections/4-hld/4.3-networking.html', '4.3 Networking & Communication'],
        ['sections/4-hld/4.4-load-balancing.html', '4.4 Load Balancing & Traffic'],
        ['sections/4-hld/4.5-databases.html', '4.5 Database Design'],
        ['sections/4-hld/4.6-caching.html', '4.6 Caching'],
        ['sections/4-hld/4.7-data-processing.html', '4.7 Data Processing'],
        ['sections/4-hld/4.8-messaging.html', '4.8 Messaging & Async'],
        ['sections/4-hld/4.9-distributed-systems.html', '4.9 Distributed Systems'],
        ['sections/4-hld/4.10-scalability.html', '4.10 Scalability Techniques'],
        ['sections/4-hld/4.11-resilience.html', '4.11 Reliability & Resilience'],
        ['sections/4-hld/4.12-security.html', '4.12 Security'],
        ['sections/4-hld/4.13-observability.html', '4.13 Observability & Monitoring'],
        ['sections/4-hld/4.14-cloud.html', '4.14 Cloud & Infrastructure'],
        ['sections/4-hld/4.15-storage.html', '4.15 Storage Systems'],
        ['sections/4-hld/4.16-performance.html', '4.16 Performance Optimization'],
        ['sections/4-hld/4.17-tradeoffs.html', '4.17 Design Trade-offs'],
        ['sections/4-hld/4.18-system-design-problems.html', '4.18 Common SD Problems'],
        ['sections/4-hld/4.19-consistency.html', '4.19 Consistency Patterns'],
        ['sections/4-hld/4.20-microservices.html', '4.20 Microservices Patterns'],
        ['sections/4-hld/4.21-data-structures.html', '4.21 SD Data Structures'],
        ['sections/4-hld/4.22-concurrency.html', '4.22 Concurrency & Locking'],
        ['sections/4-hld/4.23-devops.html', '4.23 DevOps & Deployment'],
    ]},
    { title: 'Section 5 - Behavioral', items: [
        ['sections/5-behavioral/5.1-star-method.html', '5.1 STAR Method'],
        ['sections/5-behavioral/5.2-technical-decisions.html', '5.2 Technical Decisions'],
        ['sections/5-behavioral/5.3-conflict-mentoring.html', '5.3 Conflict & Mentoring'],
        ['sections/5-behavioral/5.4-operational-excellence.html', '5.4 Operational Excellence'],
        ['sections/5-behavioral/5.5-technical-writing.html', '5.5 Technical Writing'],
        ['sections/5-behavioral/5.6-senior-engineer-expectations.html', '5.6 Senior Engineer Expectations'],
    ]},
    { title: 'Reference', items: [
        ['sections/reference/quick-reference.html', 'Quick Reference'],
        ['sections/reference/pattern-flashcards.html', 'Pattern Flashcards'],
    ]},
];

// Flat ordered list of every content page, used for prev/next page navigation.
const NAV_FLAT = NAV_SECTIONS.flatMap(s => s.items);
const TOTAL_PAGES = NAV_FLAT.length;

// ===== Study progress (persisted in localStorage) =====
const PROGRESS_KEY = 'studyProgress';
function getProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
    catch (e) { return {}; }
}
function setPageDone(file, done) {
    const p = getProgress();
    if (done) p[file] = true; else delete p[file];
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function completedCount() {
    const p = getProgress();
    return NAV_FLAT.filter(([href]) => p[href.split('/').pop()]).length;
}

// Add a small "copy" button to every code block.
function addCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.textContent = 'Copy';
        btn.addEventListener('click', async () => {
            const code = pre.querySelector('code') || pre;
            try {
                await navigator.clipboard.writeText(code.innerText);
                btn.textContent = 'Copied!';
            } catch (e) {
                // Fallback for file:// where the async clipboard API may be blocked.
                const r = document.createRange(); r.selectNode(code);
                const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
                try { document.execCommand('copy'); btn.textContent = 'Copied!'; }
                catch (_) { btn.textContent = 'Press Ctrl+C'; }
                sel.removeAllRanges();
            }
            setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
        });
        pre.appendChild(btn);
    });
}

// On a content page, add a "Mark complete" toggle to the top bar.
function addCompletionToggle() {
    const inSections = /\/sections\//.test(location.pathname);
    if (!inSections) return;
    const topBar = document.querySelector('.top-bar');
    if (!topBar || topBar.querySelector('#completeToggle')) return;
    const file = decodeURIComponent(location.pathname.split('/').pop());
    const btn = document.createElement('button');
    btn.id = 'completeToggle';
    btn.className = 'collapse-btn complete-btn';
    const sync = () => {
        const done = !!getProgress()[file];
        btn.classList.toggle('is-done', done);
        btn.textContent = done ? '✓ Completed' : 'Mark complete';
    };
    btn.addEventListener('click', () => {
        const done = !getProgress()[file];
        setPageDone(file, done);
        sync();
    });
    sync();
    topBar.appendChild(btn);
}

// On the home dashboard, show an overall progress bar.
function renderDashboardProgress() {
    const inSections = /\/sections\//.test(location.pathname);
    if (inSections) return;
    const anchor = document.querySelector('.section-block');
    if (!anchor || document.getElementById('progressSummary')) return;
    const done = completedCount();
    const pct = Math.round((done / TOTAL_PAGES) * 100);
    const wrap = document.createElement('div');
    wrap.id = 'progressSummary';
    wrap.className = 'card progress-summary';
    wrap.innerHTML =
        '<div class="card-body">' +
        '<div class="progress-summary-head"><strong>Your progress</strong>' +
        '<span>' + done + ' / ' + TOTAL_PAGES + ' topics (' + pct + '%)</span></div>' +
        '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
        (done ? '<button class="collapse-btn reset-progress" type="button">Reset progress</button>' : '') +
        '</div>';
    anchor.insertBefore(wrap, anchor.firstChild.nextSibling);
    const reset = wrap.querySelector('.reset-progress');
    if (reset) reset.addEventListener('click', () => {
        if (confirm('Clear all completion marks?')) {
            localStorage.removeItem(PROGRESS_KEY);
            location.reload();
        }
    });
}

// Load highlight.js from CDN for syntax highlighting; degrades silently offline.
function loadSyntaxHighlighting() {
    if (window.hljs || document.getElementById('hljs-css')) return;
    const link = document.createElement('link');
    link.id = 'hljs-css';
    link.rel = 'stylesheet';
    const dark = document.documentElement.dataset.theme === 'dark';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/' +
        (dark ? 'github-dark.min.css' : 'github.min.css');
    document.head.appendChild(link);
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    s.onload = () => {
        document.querySelectorAll('pre code').forEach(el => { try { window.hljs.highlightElement(el); } catch (e) {} });
    };
    s.onerror = () => link.remove(); // offline: keep plain, themed code blocks
    document.head.appendChild(s);
}

// Build the sidebar from NAV_SECTIONS so every page shares one identical nav.
// The hardcoded <nav> in each HTML file remains as a no-JS fallback.
function renderSidebar(sidebar) {
    const inSections = /\/sections\//.test(location.pathname);
    const base = inSections ? '../../' : '';
    const current = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');

    const frag = document.createDocumentFragment();

    const header = document.createElement('div');
    header.className = 'sidebar-header';
    header.innerHTML = '<h2><a href="' + base + 'index.html" class="home-link">Study Guide</a></h2>' +
        '<button class="theme-btn" id="themeToggle" title="Toggle Theme">◑</button>';
    frag.appendChild(header);

    const progress = getProgress();
    let activeSectionEl = null;
    NAV_SECTIONS.forEach(section => {
        const secEl = document.createElement('div');
        secEl.className = 'nav-section';

        const titleEl = document.createElement('div');
        titleEl.className = 'nav-section-title';
        titleEl.textContent = section.title;
        secEl.appendChild(titleEl);

        const ul = document.createElement('ul');
        ul.className = 'nav-list';
        let sectionHasActive = false;

        section.items.forEach(([href, label]) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const file = href.split('/').pop();
            a.href = base + href;
            a.textContent = label;
            if (progress[file]) a.classList.add('done');
            if (file === current) {
                a.classList.add('active');
                sectionHasActive = true;
            }
            li.appendChild(a);
            ul.appendChild(li);
        });

        secEl.appendChild(ul);
        if (sectionHasActive) activeSectionEl = secEl;
        // Collapse/expand a section by clicking its title.
        titleEl.addEventListener('click', () => ul.classList.toggle('collapsed'));
        frag.appendChild(secEl);
    });

    sidebar.innerHTML = '';
    sidebar.appendChild(frag);

    // On a content page, collapse the sections that don't hold the current page
    // so the long HLD list doesn't bury everything. On the home page, show all.
    if (activeSectionEl) {
        sidebar.querySelectorAll('.nav-section').forEach(sec => {
            if (sec !== activeSectionEl) sec.querySelector('.nav-list').classList.add('collapsed');
        });
        const activeLink = activeSectionEl.querySelector('a.active');
        if (activeLink) activeLink.scrollIntoView({ block: 'center' });
    }
}

// Inject a Prev / Next footer based on NAV_FLAT order (skips the home page).
function renderPageNav(mainContent) {
    const inSections = /\/sections\//.test(location.pathname);
    if (!inSections) return;
    const base = '../../';
    const current = decodeURIComponent(location.pathname.split('/').pop() || '');
    const idx = NAV_FLAT.findIndex(([href]) => href.split('/').pop() === current);
    if (idx === -1) return;
    if (mainContent.querySelector('.page-nav')) return; // page already ships its own

    const prev = NAV_FLAT[idx - 1];
    const next = NAV_FLAT[idx + 1];
    const nav = document.createElement('div');
    nav.className = 'page-nav auto';
    const left = prev
        ? '<a href="' + base + prev[0] + '">← ' + prev[1] + '</a>'
        : '<span></span>';
    const right = next
        ? '<a href="' + base + next[0] + '">' + next[1] + ' →</a>'
        : '<span></span>';
    nav.innerHTML = left + right;

    const container = mainContent.querySelector('main') || mainContent;
    container.appendChild(nav);
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) renderSidebar(sidebar);

    const mainContent = document.getElementById('mainContent');
    if (mainContent) renderPageNav(mainContent);

    addCopyButtons();
    addCompletionToggle();
    renderDashboardProgress();
    loadSyntaxHighlighting();

    const sidebarToggle = document.getElementById('sidebarToggle');
    const themeToggle = document.getElementById('themeToggle'); // created by renderSidebar
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const collapseAll = document.getElementById('collapseAll');
    const backToTop = document.getElementById('backToTop');
    const progressBar = document.getElementById('progressBar');

    let allCollapsed = false;

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebar.classList.toggle('collapsed');
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', html.dataset.theme);
        });
    }
    // Apply saved theme regardless of whether the toggle rendered.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.documentElement.dataset.theme = savedTheme;

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }
        if (e.key === 'Escape' && searchResults) {
            searchResults.classList.remove('visible');
            if (searchInput) searchInput.blur();
        }
    });

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const q = this.value.toLowerCase().trim();
            if (q.length < 2) { searchResults.classList.remove('visible'); return; }
            const cards = document.querySelectorAll('.card');
            const results = [];
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(q)) {
                    const h3 = card.querySelector('h3');
                    if (h3) results.push({ title: h3.textContent, el: card });
                }
            });
            searchResults.innerHTML = '';
            if (results.length) {
                results.slice(0, 10).forEach(r => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.textContent = r.title;
                    div.addEventListener('click', () => {
                        r.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        searchResults.classList.remove('visible');
                        searchInput.value = '';
                    });
                    searchResults.appendChild(div);
                });
                searchResults.classList.add('visible');
            } else {
                searchResults.classList.remove('visible');
            }
        });
    }

    if (collapseAll) {
        collapseAll.addEventListener('click', () => {
            const bodies = document.querySelectorAll('.card-body');
            allCollapsed = !allCollapsed;
            bodies.forEach(b => {
                if (allCollapsed) b.classList.add('collapsed');
                else b.classList.remove('collapsed');
            });
            collapseAll.textContent = allCollapsed ? 'Expand All' : 'Collapse All';
        });
    }

    document.addEventListener('click', e => {
        if (e.target.closest('.card-header')) {
            const body = e.target.closest('.card').querySelector('.card-body');
            if (body) body.classList.toggle('collapsed');
        }
        if (e.target.classList.contains('card-tab')) {
            const tabs = e.target.parentElement.querySelectorAll('.card-tab');
            const contents = e.target.closest('.card-body').querySelectorAll('.card-tab-content');
            const idx = [...tabs].indexOf(e.target);
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            if (contents[idx]) contents[idx].classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar) progressBar.style.width = (scrolled / height * 100) + '%';
        if (backToTop) {
            if (scrolled > 500) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
