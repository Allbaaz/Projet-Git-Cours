# Site Web ESGI - Projet Git Cours

## Description

Ce projet consiste en la création d'un site web vitrine pour l'ESGI (École Supérieure de Génie Informatique), développé dans le cadre d'un cours sur Git. Le site présente l'établissement, ses formations et permet aux visiteurs de prendre contact avec l'école.

## But du projet

Créer un site web moderne et attractif pour présenter l'ESGI et ses formations en informatique tout en apprenant à utiliser Git en équipe. Le site doit être :
- **Responsive** : Accessible sur tous les appareils (desktop, tablette, mobile)
- **Informatif** : Présenter clairement l'école et ses formations informatiques
- **Accessible** : Faciliter la prise de contact avec l'établissement
- **Collaboratif** : Développé en équipe avec Git pour la gestion de versions

## Membres de l'équipe

- **Louis** : [Allbaaz](https://github.com/Allbaaz) - Chef de projet
- **Baptiste** : [LeLicorne](https://github.com/LeLicorne) - Développeur

## Fonctionnalités

Le site web comprend les pages suivantes :

### 🏠 Page d'accueil (index.html)
- Présentation de l'ESGI (École Supérieure de Génie Informatique)
- Logo et description de l'école
- Navigation claire vers toutes les sections
- Présentation du contexte du projet Git

### 🎓 Page des programmes (programmes.html)
- Formations en informatique proposées par l'ESGI
- Détails sur les cursus du Bachelor au Mastère
- Spécialisations : cybersécurité, développement, data science, systèmes et réseaux
- Interface utilisateur moderne avec design responsive

### 🏛️ Page de l'école (ecole.html)
- Présentation détaillée de l'ESGI
- Histoire et valeurs de l'établissement
- Infrastructure et environnement d'apprentissage
- Informations sur la pédagogie et l'approche professionnalisante

### 📞 Page de contact (contact.html)
- Formulaire de contact interactif
- Coordonnées de l'école
- Interface moderne et accessible
- JavaScript pour la validation des formulaires

## Technologies utilisées

- **HTML5** : Structure et contenu des pages
- **CSS3** : Mise en forme et design responsive
  - `css.css` : Styles principaux du site
  - `programmes.css` : Styles spécifiques pour la page des formations
- **JavaScript** : Interactivité et validation des formulaires
  - `contact.js` : Gestion du formulaire de contact
- **Google Fonts** : Police Inter pour une typographie moderne
- **Git** : Gestion de versions et collaboration en équipe

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation particulière requise

## Instructions d'exécution

1. **Cloner le repository** :
```bash
git clone https://github.com/Allbaaz/Projet-Git-Cours.git
```

2. **Se déplacer dans le dossier du projet** :
```bash
cd Projet-Git-Cours
```

3. **Ouvrir le site web** :
   - **Double-clic** sur le fichier `index.html`
   - **Clic droit** → "Ouvrir avec" → Navigateur de votre choix
   - **Glisser-déposer** le fichier `index.html` dans une fenêtre de navigateur
   - **Depuis VS Code** : Clic droit sur `index.html` → "Open with Live Server" (si l'extension Live Server est installée)

Le site s'ouvrira directement dans votre navigateur web. Aucune installation supplémentaire n'est nécessaire !

## Structure du projet

```
Projet-Git-Cours/
├── index.html              # Page d'accueil - Présentation ESGI
├── pages/
│   ├── programmes.html     # Page des formations informatiques
│   ├── ecole.html         # Présentation détaillée de l'ESGI
│   └── contact.html       # Page de contact avec formulaire
├── css/
│   ├── css.css            # Styles principaux du site
│   └── programmes.css     # Styles spécifiques aux formations
├── js/
│   └── contact.js         # Scripts pour le formulaire de contact
├── images/               # Ressources visuelles
│   ├── logo.webp         # Logo de l'ESGI
│   └── Lille-Vauban-ESGI-1.png  # Image du campus
└── README.md            # Documentation du projet
```


## Contact

Pour toute question concernant ce projet, n'hésitez pas à contacter l'équipe :
- **Louis (Chef de projet)** : [GitHub](https://github.com/Allbaaz)
- **Baptiste (Développeur)** : [GitHub](https://github.com/LeLicorne)

---

*Projet réalisé dans le cadre du cours Git - ESGI*