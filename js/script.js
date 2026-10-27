/* ==========================================================================
   NXR_Flayer Site Interactions
   - Mobile navigation toggle
   - Accessible keyboard controls
   - Dynamic match record search/filter
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });

    // Close when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // Record Filter (Achievements / Matches Page)
  const searchInput = document.getElementById('matchSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('.esports-table tbody tr');

      rows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }
});