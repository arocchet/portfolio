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
