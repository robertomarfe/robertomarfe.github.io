document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.paper-card').forEach((paper, index) => {
    const abstract = Array.from(paper.querySelectorAll('p')).find((p) => /^\s*Abstract\s*:/i.test(p.textContent));
    if (!abstract) return;

    const id = `abstract-${index + 1}`;
    const text = abstract.innerHTML.replace(/^\s*<strong>Abstract:\s*<\/strong>\s*/i, '').replace(/^\s*Abstract:\s*/i, '');
    abstract.innerHTML = text;
    abstract.id = id;
    abstract.classList.add('abstract-text');
    abstract.hidden = true;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'abstract-toggle';
    toggle.setAttribute('aria-controls', id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Abstract';
    toggle.addEventListener('click', () => {
      const opening = abstract.hidden;
      abstract.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.textContent = opening ? 'Hide Abstract' : 'Abstract';
    });
    abstract.before(toggle);
  });
});
