'use strict';

const headerContent = document.querySelector('.content-wrapper');

if (headerContent) {
    const toggleBtn = headerContent.querySelector('.sidebar-toggle');
    const sidebar = headerContent.querySelector('.sidebar');
    const closeBtn = headerContent.querySelector('.close-btn');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('show-sidebar');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('show-sidebar');
    });
}
