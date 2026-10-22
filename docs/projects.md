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

## Ajouter un projet

Ajouter un objet au tableau `projects`, avec un `id` unique, une `image`
(ou `null`), ses `technologies`, son `url` (ou `null`) et ses textes dans
`content.fr` et `content.en` : `title`, `category`, `description`, `detail`.

Le projet **Edu-Tech & Services** est déjà ajouté avec sa base technique
(Next.js, TypeScript, Prisma, REST API, Better Auth et SSO). Ses textes et son
image pourront être complétés au fil du développement. Le champ
optionnel `status` permet d’afficher un statut en français et en anglais.

Les cartes, les numéros et les fenêtres de détail sont générés automatiquement.
Un nouveau projet sans image reçoit un aperçu sobre portant son nom.
Le champ `preview` sert uniquement aux trois aperçus illustrés existants ;
il n’est pas nécessaire pour les nouveaux projets.

Les noms de technologies disponibles sont définis dans `lib/technologies.ts`.
