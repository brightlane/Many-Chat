// THE VULTURE REDIRECT HIJACK
document.addEventListener('DOMContentLoaded', () => {
    const GHL_URL = "https://www.gohighlevel.com/?fp_ref=your_id"; // YOUR GHL LINK
    
    // 1. EXIT INTENT HIJACK: Triggered when user moves mouse to close tab
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !sessionStorage.getItem('vulture_exit')) {
            sessionStorage.setItem('vulture_exit', 'true');
            // Show a "Wait!" modal or redirect directly
            alert("Wait! Before you automate DMs, you need a CRM to close the leads. Redirecting to our 2026 GHL Bonus...");
            window.location.href = GHL_URL;
        }
    });

    // 2. THE "TIME-ON-PAGE" SWAP: If they read for 60s, they are a 'High-Value Lead'
    setTimeout(() => {
        const allCTAs = document.querySelectorAll('.cta');
        allCTAs.forEach(cta => {
            if (cta.innerText.includes("Free Account")) {
                cta.href = GHL_URL;
                cta.innerText = "🚀 Upgrade to Full Agency Automation (ManyChat + GHL)";
                cta.style.background = "#0056b3"; // Change color to signal 'Premium'
            }
        });
    }, 60000); 
});
