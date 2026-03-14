document.getElementById('save-contact').addEventListener('click', () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Balvant T. Ahir
ORG:Advocate
TEL;TYPE=CELL:+917202970950
EMAIL:ahirbalvant1008@gmail.com
ADR;TYPE=WORK:;;City Civil & Sessions Court, Mirzapur, Metropolitan Magistrate Court;Ahmedabad;Gujarat;;India
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const newLink = document.createElement('a');
    newLink.download = 'Balvant_T_Ahir.vcf';
    newLink.href = url;
    newLink.click();
    URL.revokeObjectURL(url);
});

document.getElementById('share-card').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Balvant T. Ahir | Advocate',
                text: 'Digital Visiting Card of Balvant T. Ahir, Advocate',
                url: window.location.href
            });
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Card link copied to clipboard!');
    }
});

// Dynamic Entrance Animations
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.detail-item, .action-btn');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        item.style.transitionDelay = `${index * 0.1 + 0.5}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});
