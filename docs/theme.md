# Couleurs et niveaux de fond

La palette fournie est regroupée dans `app/theme.css`. Elle contient les
couleurs brutes, les variantes clair/sombre et leur exposition dans Tailwind.
Les choix d’accent du portfolio sont dans `app/theme-accents.css`.

| Usage                | Variable CSS      | Classe Tailwind        |
| -------------------- | ----------------- | ---------------------- |
| Fond de page         | `--bgLevel1`      | `bg-bgLevel1`          |
| Surfaces secondaires | `--bgLevel2`      | `bg-bgLevel2`          |
| Surfaces au-dessus   | `--bgLevel3`      | `bg-bgLevel3`          |
| Niveau supérieur     | `--bgLevel4`      | `bg-bgLevel4`          |
| Cinquième niveau     | `--bgLevel5`      | `bg-bgLevel5`          |
| Texte principal      | `--textNeutral`   | `text-textNeutral`     |
| Texte secondaire     | `--textMinimal`   | `text-textMinimal`     |
| Bordures discrètes   | `--detailMinimal` | `border-detailMinimal` |
| Détails contrastés   | `--detailNeutral` | `border-detailNeutral` |

Les fonds acceptent aussi la notation `bg-bg-level-1` jusqu’à `bg-bg-level-5`.
Les couleurs sémantiques (`bg-blue`, `text-purple`, `bg-teal`, etc.) suivent le
thème. Les composants shadcn disposent des mêmes correspondances pour
`background`, `card`, `popover`, `muted`, `secondary`, les graphiques et la sidebar.

`--muted` désigne un fond ; le texte secondaire utilise `--textMinimal` ou
`--muted-foreground`. Le mode sombre remplace les valeurs automatiquement,
sans changer les noms des classes.

## Fond de profondeur

`components/portfolio/scroll-depth-background.tsx` dessine les particules dans un
canvas fixe, placé en dehors du contenu transformé par ScrollSmoother. Un
ScrollTrigger suit toute la page et transmet une progression de 0 à 1 à
`--depth-progress`. L’assombrissement est actuellement désactivé : sa règle
`opacity: var(--depth-progress)` reste en commentaire dans le CSS. Le
déplacement des particules dépend aussi du scroll, avec des vitesses différentes
selon leur profondeur. À l’arrêt, elles flottent légèrement autour de leur
position avec des amplitudes, phases et vitesses aléatoires ; elles ne montent
pas automatiquement. Le déplacement vertical à travers l’écran est entraîné
par le scroll et s’inverse lorsqu’on remonte la page.

Les couleurs sont définies dans
`components/portfolio/scroll-depth-background.css`, uniquement avec les tokens
`bgLevel` : d’un mélange de `bgLevel1` (65 %) et `bgLevel2` à `bgLevel1` en mode
sombre, de `bgLevel1` à `bgLevel3` en mode clair. Le fond reste décoratif et laisse
passer les interactions.

Le nombre de particules suit la surface de l’écran, avec un plafond de 140, et
la résolution du canvas est limitée à un ratio de 2. Le mode animations réduites
du portfolio désactive la boucle d’animation et la parallaxe ; seul le fond
évolue avec la position de lecture. Le fournisseur de préférences de mouvement
suit `prefers-reduced-motion` par défaut ; un choix explicite via le bouton du
portfolio prend ensuite la priorité sur la préférence système.

Les boutons utilisent un rayon de `0.6 × --radius`, les cartes et les fenêtres
de projet `--radius`, et les badges `0.4 × --radius` pour garder des arrondis
discrets avec une échelle commune.
