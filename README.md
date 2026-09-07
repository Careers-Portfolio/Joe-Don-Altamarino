# Joe Don Altamarino — Portfolio

GitHub/Netlify-ready static portfolio.

## Files
- `index.html` — main portfolio page
- `style.css` — portfolio styling
- `script.js` — mobile navigation and smooth scrolling
- `assets/` — portfolio image assets
- `Joe_Don_Altamarino_Updated_CV.pdf` — current resume
- `Sample Projects/` — sample project files
- `Sample SOPs/` — sample SOP files

## Start locally
Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub
1. Create a new GitHub repository.
2. Upload the contents of this folder.
3. Make sure `index.html` is in the repository root.
4. For GitHub Pages: Settings → Pages → Deploy from branch → select `main` and `/root`.
5. Save and open the generated Pages URL.

## Publish on Netlify
Drag this folder into Netlify Drop, or connect the GitHub repository to Netlify.

## Important
The portfolio uses `Sequoia` first with system fallbacks. If Sequoia is not installed on a visitor's device, the fallback font will be used.
