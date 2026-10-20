# Fiches Claires

Application pédagogique indépendante de Thêta V2, basée sur les quatre fichiers transmis.

## Publier sur GitHub Pages
1. Créer un **nouveau dépôt** `Fiches-Claires` (public pour utiliser GitHub Pages selon l’offre disponible).
2. Importer **le contenu** de ce dossier à la racine du dépôt en préservant `ocr/` et `icons/`.
3. Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
4. Ouvrir l’URL fournie par GitHub Pages, puis Chrome/Edge → Installer l’application.

## Tester localement
Dans ce dossier : `py -m http.server 8000` puis ouvrir http://localhost:8000 .

## Hors ligne — limitation actuelle
Le shell de l’application et les ressources OCR fournies sont en cache local. Plusieurs bibliothèques (PDF, OCR Tesseract principal, polices) sont toujours demandées aux CDN externes : elles peuvent être mises en cache lors du premier chargement, **mais le hors-ligne complet n’est pas encore garanti**. Une version intégralement autonome nécessitera d’intégrer ces fichiers externes au dépôt et de tester l’OCR et l’export PDF sans réseau.

## Données
Les documents et fiches ne sont **pas automatiquement synchronisés** entre les postes. Utiliser Enregistrer/Ouvrir pour transférer les fiches. N’importez pas de données d’élèves ou documents confidentiels dans un dépôt GitHub public.

## Particularités
Ne pas modifier le dépôt Theta-v2 : il s’agit d’une application distincte.
