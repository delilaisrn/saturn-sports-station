function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toastComponent) return;

    // Reset style
    toastComponent.classList.remove(
        'bg-gradient-to-r', 'from-purple-800', 'via-indigo-800', 'to-blue-800',
        'border-purple-500/40', 'border-red-500/40', 'border-green-500/40',
        'text-white', 'text-red-200', 'text-green-200'
    );

    let iconHTML = '';
    let gradientClass = '';
    let borderClass = '';
    let textClass = '';

    // Style per type
    switch (type) {
        case 'success':
            iconHTML = '✅';
            gradientClass = 'from-green-600 via-emerald-700 to-green-800';
            borderClass = 'border-green-400/50';
            textClass = 'text-green-100';
            break;
        case 'error':
            iconHTML = '⚠️';
            gradientClass = 'from-red-700 via-pink-700 to-purple-800';
            borderClass = 'border-red-400/50';
            textClass = 'text-red-100';
            break;
        default:
            iconHTML = '🌌';
            gradientClass = 'from-purple-800 via-indigo-800 to-blue-800';
            borderClass = 'border-purple-400/40';
            textClass = 'text-white';
            break;
    }

    // Apply classes
    toastComponent.classList.add(
        'bg-gradient-to-r', gradientClass, borderClass, textClass,
        'border', 'shadow-2xl', 'backdrop-blur-md'
    );

    // Apply content
    toastIcon.innerHTML = iconHTML;
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Show animation
    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    // Hide after duration
    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
    }, duration);
}
