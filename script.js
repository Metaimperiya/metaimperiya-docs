// ================================================================
// ДОКУМЕНТАЦИЯ — ОБЩАЯ ЛОГИКА
// ================================================================

// ===== КОПИРОВАНИЕ КОДА =====
function copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre');
    const code = pre ? pre.textContent : '';
    
    navigator.clipboard?.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✅ Скопировано!';
        setTimeout(() => { btn.textContent = originalText; }, 2000);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const originalText = btn.textContent;
        btn.textContent = '✅ Скопировано!';
        setTimeout(() => { btn.textContent = originalText; }, 2000);
    });
}

// ===== ПЛАВНАЯ ПРОКРУТКА =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('📚 Документация METAIMPERIYA загружена!');
