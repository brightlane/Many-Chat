// THE VULTURE REDIRECT HIJACK
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !sessionStorage.getItem('vulture_exit')) {
        sessionStorage.setItem('vulture_exit', 'true');
        // Redirect to High-Ticket GHL Bridge
        window.location.href = "https://www.gohighlevel.com/?fp_ref=your_id";
    }
});

// Time-on-page upgrade: Swap links to GHL after 60 seconds
setTimeout(() => {
    document.querySelectorAll('.cta').forEach(link => {
        link.href = "https://www.gohighlevel.com/?fp_ref=your_id";
        link.innerText = "Upgrade to Full Agency Automation (ManyChat + GHL)";
    });
}, 60000);
