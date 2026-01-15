/**
 * TOC Sidebar - 右侧目录交互
 * 功能：滚动高亮、平滑滚动、移动端抽屉
 */

(// Highlight Active TOC Item on Scroll
    const tocLinks = document.querySelectorAll('.toc-sidebar a');
    const headings = document.querySelectorAll('.content h2, .content h3');

    function updateActiveToc() {
      let currentSection = '';
      
      headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = heading.id;
        }
      });

      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveToc);
    updateActiveToc();

    // Smooth scroll for TOC links
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
)();
