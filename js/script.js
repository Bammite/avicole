document.addEventListener('DOMContentLoaded', function() {

    // Menu mobile (Hamburger)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Changer l'icône du hamburger en croix et vice-versa
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fermer le menu en cliquant sur un lien (pour mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Défilement fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ajustement pour la hauteur du header fixe
                const headerOffset = document.getElementById('header') ? document.getElementById('header').offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Validation du formulaire de contact (basique)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi réel du formulaire

            // Validation simple (vérifier que les champs requis ne sont pas vides)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                formMessage.textContent = 'Veuillez remplir tous les champs obligatoires.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Ici, vous ajouteriez la logique d'envoi du formulaire (par ex. via AJAX)
            // Pour cette démo, on affiche un message de succès
            formMessage.textContent = 'Merci ! Votre message a été envoyé (simulation).';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            contactForm.reset(); // Réinitialiser le formulaire
        });
    }

    // Mettre à jour l'année dans le footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Dupliquer les slides pour créer un défilement infini
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = sliderTrack.innerHTML;
        sliderTrack.innerHTML = slides + slides;
    }

});