# Vercel Deployment Guide

## ✅ Build verified locally
The build completes successfully with all assets in place.

## Vercel Dashboard Settings

### 1. **Root Directory**
Set to: `ese`

If deploying from the `ese-faps` repository, Vercel needs to know the app is in the `ese/` subdirectory.

### 2. **Framework Preset**
Select: `Vite` (or leave as detected)

### 3. **Build Command**
```
npm run build
```

### 4. **Output Directory**
```
dist
```

### 5. **Install Command**
```
npm install
```

---

## Files configured for deployment

- ✅ `vercel.json` - SPA routing configuration
- ✅ `vite.config.js` - Build settings with explicit base path
- ✅ `index.html` - Corrected asset paths
- ✅ All assets copied to `dist/` after build

---

## Common 404 Causes & Solutions

### If homepage shows 404:
- **Check Root Directory** in Vercel → should be `ese` (not blank)
- Redeploy after changing settings

### If subroutes show 404:
- Ensure `vercel.json` exists in `ese/` directory
- Check that rewrites configuration is applied (redeploy)

### If assets (images/CSS/JS) show 404:
- Verify build completed successfully in deployment logs
- Check that `dist/` folder contains `assets/`, `images/`, `files/` folders

---

## Quick Deploy Checklist

1. ✅ Commit and push latest changes
2. ✅ In Vercel Dashboard → Settings → General:
   - Root Directory: `ese`
   - Framework: Vite
3. ✅ Redeploy
4. ✅ Check deployment logs for build errors

---

## Test Local Preview

Before deploying, test locally:
```bash
cd ese
npm run build
npm run preview
```

Open http://localhost:4173 to verify the production build works.
