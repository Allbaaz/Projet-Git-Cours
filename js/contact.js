// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi par défaut du formulaire
            
            // Récupération des champs
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Validation des champs
            let isValid = true;
            let errorMessages = [];
            
            // Validation du nom
            if (!name.value.trim()) {
                errorMessages.push('Le nom est requis');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                errorMessages.push('Le nom doit contenir au moins 2 caractères');
                isValid = false;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                errorMessages.push('L\'email est requis');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                errorMessages.push('Format d\'email invalide');
                isValid = false;
            }
            
            // Validation du téléphone (optionnel mais format si renseigné)
            if (phone.value.trim()) {
                const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
                if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
                    errorMessages.push('Format de téléphone invalide (format français attendu)');
                    isValid = false;
                }
            }
            
            // Validation du sujet
            if (!subject.value) {
                errorMessages.push('Veuillez sélectionner un sujet');
                isValid = false;
            }
            
            // Validation du message
            if (!message.value.trim()) {
                errorMessages.push('Le message est requis');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                errorMessages.push('Le message doit contenir au moins 10 caractères');
                isValid = false;
            }
            
            // Affichage des résultats
            if (!isValid) {
                // Alerte avec les erreurs
                alert('❌ Erreurs de validation :\n\n' + errorMessages.join('\n'));
            } else {
                // Alerte de succès avec récapitulatif
                const summary = `✅ Formulaire validé avec succès !\n\n` +
                    `📋 Récapitulatif :\n` +
                    `• Nom : ${name.value}\n` +
                    `• Email : ${email.value}\n` +
                    `• Téléphone : ${phone.value || 'Non renseigné'}\n` +
                    `• Sujet : ${subject.options[subject.selectedIndex].text}\n` +
                    `• Message : ${message.value.substring(0, 50)}${message.value.length > 50 ? '...' : ''}\n\n` +
                    `📧 Votre message a été envoyé !`;
                
                alert(summary);
                
                // Optionnel : réinitialiser le formulaire après succès
                contactForm.reset();
            }
        });
        
        // Validation en temps réel des champs
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

// Fonction de validation individuelle des champs
function validateField(field) {
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let message = '';
    
    switch(fieldName) {
        case 'name':
            if (!field.value.trim()) {
                message = 'Le nom est requis';
                isValid = false;
            } else if (field.value.trim().length < 2) {
                message = 'Le nom doit contenir au moins 2 caractères';
                isValid = false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!field.value.trim()) {
                message = 'L\'email est requis';
                isValid = false;
            } else if (!emailRegex.test(field.value)) {
                message = 'Format d\'email invalide';
                isValid = false;
            }
            break;
            
        case 'phone':
            if (field.value.trim()) {
                const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
                if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
                    message = 'Format de téléphone invalide';
                    isValid = false;
                }
            }
            break;
            
        case 'subject':
            if (!field.value) {
                message = 'Veuillez sélectionner un sujet';
                isValid = false;
            }
            break;
            
        case 'message':
            if (!field.value.trim()) {
                message = 'Le message est requis';
                isValid = false;
            } else if (field.value.trim().length < 10) {
                message = 'Le message doit contenir au moins 10 caractères';
                isValid = false;
            }
            break;
    }
    
    // Styling visuel des champs (optionnel)
    if (isValid) {
        field.style.borderColor = '#28a745';
        removeErrorMessage(field);
    } else {
        field.style.borderColor = '#dc3545';
        showErrorMessage(field, message);
    }
    
    return isValid;
}

// Fonctions utilitaires pour l'affichage des erreurs
function showErrorMessage(field, message) {
    removeErrorMessage(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function removeErrorMessage(field) {
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}