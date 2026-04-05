# TP React — JSX, Composition & Tests

> Travail Pratique · React · JSX · HOC · Render Props · Jest · Testing Library

---

## Objectif pédagogique

Ce TP couvre trois axes fondamentaux du développement React :

1. **JSX** — comprendre la syntaxe et sa transformation par Babel en `React.createElement()`
2. **Patterns de composition** — créer des composants réutilisables avec les Higher-Order Components (HOC) et les Render Props
3. **Tests automatisés** — écrire des tests unitaires et d'intégration avec Jest et React Testing Library

<img width="1403" height="885" alt="image" src="https://github.com/user-attachments/assets/b54ef03a-d57f-4e54-a051-7541fab61113" />

---

## Structure du projet

```
tp-jsx-composition/
└── src/
    ├── App.js                      ← Point d'entrée principal (design moderne)
    │
    ├── ExplorationJSX.js           ── Étape 2 & 4 : JSX vs React.createElement
    │
    ├── avecTrace.js                ── Étape 5 : HOC – log des props en console
    ├── BoutonAction.js             ── Étape 5 : composant bouton simple
    ├── BoutonTrace.js              ── Étape 5 : bouton enrichi via HOC
    │
    ├── ChargeurDonnees.js          ── Étape 6 : Render Props avec filtre (Ex. B)
    │
    ├── Salutation.js               ── Étape 8 : composant pour test unitaire
    ├── Salutation.test.js          ── Étape 8 : tests unitaires (2 cas)
    │
    ├── Compteur.js                 ── Étape 9 : compteur avec useState
    ├── Compteur.test.js            ── Étape 9 : tests d'intégration (3 cas)
    │
    ├── avecHorodatage.js           ── Exercice A : HOC – heure du dernier rendu
    │
    └── FormulaireContact.js        ── Exercice C : formulaire avec validation
    └── FormulaireContact.test.js   ── Exercice C : tests de validation (2 cas)
```

---

## Installation & démarrage

### Prérequis

- Node.js ≥ 16
- npm ≥ 8

### Étapes

```bash
# 1. Créer le projet
npx create-react-app tp-jsx-composition

# 2. Se placer dans le dossier
cd tp-jsx-composition

# 3. Installer les dépendances de test
npm install --save-dev @testing-library/react @testing-library/jest-dom

# 4. Copier tous les fichiers src/ dans le dossier src/ du projet

# 5. Lancer l'application
npm start
```

L'application est disponible sur **http://localhost:3000**

---

## Lancer les tests

```bash
npm test
```

### Résultats attendus

```
PASS  src/Salutation.test.js
  ✓ affiche le prénom passé en prop (32 ms)
  ✓ affiche un autre prénom correctement (4 ms)

PASS  src/Compteur.test.js
  ✓ la valeur initiale est 0 (18 ms)
  ✓ la valeur augmente après un clic (6 ms)
  ✓ la valeur augmente correctement après plusieurs clics (4 ms)

PASS  src/FormulaireContact.test.js
  ✓ affiche une erreur si le champ nom est vide à la soumission (21 ms)
  ✓ n'affiche pas d'erreur si le nom est rempli (5 ms)

Test Suites:  3 passed, 3 total
Tests:        7 passed, 7 total
Snapshots:    0 total
Time:         2.841 s
```

---

## Contenu du TP

### Partie 1 — JSX

| Étape | Fichier | Contenu |
|-------|---------|---------|
| 2 | `ExplorationJSX.js` | Comparaison JSX / `React.createElement()` |
| 3 | `App.js` | Intégration du composant dans l'application |
| 4 | `ExplorationJSX.js` | Bonnes pratiques : `className`, `htmlFor` |

### Partie 2 — Composition

| Étape | Fichier(s) | Contenu |
|-------|-----------|---------|
| 5 | `avecTrace.js`, `BoutonAction.js`, `BoutonTrace.js` | Higher-Order Component avec log console |
| 6 | `ChargeurDonnees.js` | Render Props — délégation de l'affichage |

### Partie 3 — Tests

| Étape | Fichier(s) | Contenu |
|-------|-----------|---------|
| 7 | — | Installation de Jest et Testing Library |
| 8 | `Salutation.js` + `Salutation.test.js` | Test unitaire sur affichage d'une prop |
| 9 | `Compteur.js` + `Compteur.test.js` | Test d'intégration avec `fireEvent` |

### Exercices avancés

| Exercice | Fichier(s) | Contenu |
|----------|-----------|---------|
| A | `avecHorodatage.js` | HOC qui affiche l'heure du dernier rendu |
| B | `ChargeurDonnees.js` | Render Props avec prop `filtre` |
| C | `FormulaireContact.js` + `.test.js` | Validation de formulaire + tests |

---

## Concepts clés

### JSX
JSX est du sucre syntaxique transformé par Babel. `<h2>Bonjour</h2>` devient `React.createElement('h2', null, 'Bonjour')`. Les attributs différent du HTML : `class` → `className`, `for` → `htmlFor`.

### Higher-Order Component (HOC)
Un HOC est une **fonction** qui prend un composant en entrée et retourne un nouveau composant enrichi de comportement supplémentaire, sans modifier le composant d'origine.

```
avecTrace(BoutonAction)  →  BoutonTrace
```

### Render Props
Le pattern Render Props consiste à passer une **fonction comme prop**. Le composant fournit les données, le parent décide de la mise en forme — ce qui rend le composant entièrement flexible.

### Testing Library
- `render()` — monte le composant dans un DOM virtuel
- `screen.getByText()` — recherche un élément par son contenu textuel
- `fireEvent.click()` — simule une interaction utilisateur
- `expect(...).toBeInTheDocument()` — assertion de présence dans le DOM

---

## Technologies utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | ^18 | Framework UI |
| Create React App | ^5 | Scaffolding |
| Jest | intégré CRA | Exécution des tests |
| @testing-library/react | ^14 | Utilitaires de rendu et de requête |
| @testing-library/jest-dom | ^6 | Matchers personnalisés (`toBeInTheDocument`) |
| Outfit (Google Fonts) | — | Typographie de l'interface |
| Fira Code (Google Fonts) | — | Blocs de code |

---

## Auteur

Travail réalisé dans le cadre du cours **Développement Web Avancé — React**.
