# Modifier les projets du portfolio

Tout se configure dans `lib/projects.ts` : images, textes FR/EN, technologies,
statut et lien du site. L’ordre des objets correspond à l’ordre d’affichage.

## Rendu de l’interface Edu-togo

Edu-togo utilise un rendu React de son tableau de bord d’administration et de
sa sidebar. Les composants sont dans `components/portfolio/previews/edu-togo/`.
Les données fictives et les textes FR/EN sont centralisés dans `fixtures.ts`.
Ce rendu ne fait aucun appel aux API d’Edu-togo. Il s’adapte à la carte et
se retrouve en grand dans la fiche du projet.

## Utiliser une image à la place d’un rendu

1. Déposer la capture dans `public/projects/edu-togo.webp` (ou PNG/JPG).
2. Dans l’objet `id: "edu-togo"`, remplacer `image: null` par :

```ts
image: "/projects/edu-togo.webp",
imageAlt: {
  fr: "Tableau de bord d’Edu-togo V2",
  en: "Edu-togo V2 dashboard",
},
imageFit: "contain",
```

Le chemin commence par `/projects/`, sans `public/`. `contain` affiche toute
la capture ; `cover` remplit le cadre en recadrant l’image. `image: null`
conserve l’aperçu illustré existant.

## Galaxie Zone01

Zone01 utilise désormais un SVG React dans `previews/zone01-galaxy.tsx`, avec
la géométrie et les états de progression du SVG fourni. `zone01-preview.tsx`
charge les polices IBM Plex Sans / Mono via Next.js et fournit un libellé
accessible FR/EN. Les couleurs utilisent les variables du thème existant.
L’aperçu conserve tous les projets et retire seulement l’espace vide supérieur
du dessin ; il est également affiché en grand dans la fiche du projet.

Chaque instance possède ses propres identifiants pour les gradients et chemins
de texte : la carte et sa fenêtre peuvent coexister sans collisions. Les liens
vers l’intranet deviennent des groupes SVG non interactifs, pour éviter des
liens imbriqués dans le bouton de la carte. Aucune donnée n’est récupérée sur
la plateforme : la progression correspond à l’export fourni.

Le SVG d’origine ne contient pas les définitions de `popup-requirements`,
`popup-required`, `popup-reward` et `popup-pathnode`, ni les gestionnaires du
zoom, du déplacement ou des infobulles. Les quatre références sans définition
ont été retirées du rendu. Les interactions nécessiteraient le code de la
plateforme correspondant ; elles ne sont pas simulées dans cet aperçu.

## Ajouter un projet

Ajouter un objet au tableau `projects`, avec un `id` unique, une `image`
(ou `null`), ses `technologies`, son `url` (ou `null`) et ses textes dans
`content.fr` et `content.en` : `title`, `category`, `description`, `detail`.

Le projet **Edu-Tech & Services** est déjà ajouté avec sa base technique
(Next.js, TypeScript, Prisma, REST API, Better Auth et SSO). Ses textes et son
image pourront être complétés au fil du développement. Le champ
optionnel `status` permet d’afficher un statut en français et en anglais.

Les cartes, les numéros et les fenêtres de détail sont générés automatiquement.
Les aperçus remplissent leur cadre sans padding extérieur. La bordure en
`detailMinimal` et le découpage des coins arrondis sont portés par ce cadre.
Toutes les cartes partagent un ratio responsive de `1440 / 940`, défini par
`.project-visual` dans `app/globals.css` : leur hauteur suit leur largeur, sans
hauteur fixe par breakpoint. Les rendus DOM utilisent le même format et
remplissent le cadre proportionnellement. Le SVG Zone01 reste centré et réduit
pour être visible en entier. Les fenêtres de détail conservent un rendu agrandi.
Un nouveau projet sans image reçoit un aperçu sobre portant son nom.
Le champ `preview` sélectionne les aperçus React existants ;
il n’est pas nécessaire pour les nouveaux projets.

Les noms de technologies disponibles sont définis dans `lib/technologies.ts`.
