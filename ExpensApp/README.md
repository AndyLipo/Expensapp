# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

CONFIGURACION INICIAL

- Eliminar archivos package.json y package-lock.jason a nivel de primer carpeta Expesapp
- Eliminar archivo package-lock.json dentro de carpeta node_modules
- En terminal ejecutar rm -rf node_modules ( si es terminal powershell usar Remove-Item -Recurse -Force .\node_modules )
- En terminal ejecutar npm install
- Ejecutar npm run dev
- Si en terminal observa error "Las siguientes dependencias están importadas pero no pudieron ser instaladas" ejecutar npm install react-loading-skeleton
