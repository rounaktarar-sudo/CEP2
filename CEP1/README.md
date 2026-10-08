# Clean & Green Nandapuri

```
frontend/   index.html, style.css, app.js, ack.js, ack.css, config.js, assets/
backend/    server.js                                           (API + serves frontend)
data/       state.json (created automatically)
```

## Run locally
    node backend/server.js      # then open http://localhost:3000

API: GET/PUT /api/state, GET /api/health

## Go live (Render, free)
1. Push this folder to a GitHub repo.
2. render.com -> New -> Web Service -> pick the repo.
3. Runtime Node, Start command `node backend/server.js` (render.yaml does this). Deploy.
4. You get a public https://....onrender.com URL.

If you host `frontend/` separately (Netlify/Vercel), set `window.CGN_API` in frontend/config.js to the backend URL.
