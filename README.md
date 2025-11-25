# GTA VI Landing Page

Una landing page moderna e interactiva para Grand Theft Auto VI, construida con React, GSAP y Tailwind CSS. Presenta animaciones fluidas, efectos de scroll cinematográficos y un diseño completamente responsivo.

![GTA VI](public/images/hero-bg.webp)

## Características

- **Animaciones Cinematográficas**: Efectos de scroll suaves usando GSAP ScrollTrigger
- **Diseño Responsivo**: Optimizado para móvil, tablet y escritorio
- **Modal de Video**: Reproductor de trailer integrado de YouTube
- **Secciones de Personajes**: Perfiles interactivos de Jason y Lucia
- **Optimización de Rendimiento**: Code splitting y lazy loading
- **SEO Optimizado**: Meta tags para redes sociales (Open Graph y Twitter Cards)

## Tecnologías

- **React 19.2** - Biblioteca de UI
- **Vite 7.2** - Build tool y dev server ultrarrápido
- **GSAP 3.13** - Animaciones y ScrollTrigger
- **Tailwind CSS 4.1** - Framework de estilos utility-first
- **React Responsive** - Manejo de media queries
- **ESLint** - Linting de código

## Estructura del Proyecto

```
gta_landing/
├── public/
│   ├── images/          # Imágenes optimizadas (.webp)
│   ├── videos/          # Videos optimizados (.mp4)
│   ├── fonts/           # Fuentes personalizadas
│   └── .nojekyll        # Configuración para GitHub Pages
├── src/
│   ├── sections/        # Componentes de secciones
│   │   ├── Hero.jsx     # Hero section con animaciones
│   │   ├── NavBar.jsx   # Barra de navegación
│   │   ├── FirstVideo.jsx
│   │   ├── Jason.jsx    # Perfil de Jason
│   │   ├── SecondVideo.jsx
│   │   ├── Lucia.jsx    # Perfil de Lucia
│   │   ├── PostCard.jsx
│   │   ├── Final.jsx
│   │   ├── Outro.jsx
│   │   └── ComingSoon.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales y tema
├── constants/
│   └── index.js         # Configuraciones responsivas
└── vite.config.js       # Configuración de Vite

```

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/[tu-usuario]/Grand-Theft-Auto-VI.git
cd Grand-Theft-Auto-VI
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para encontrar problemas en el código |
| `npm run deploy` | Despliega a GitHub Pages |

## Despliegue a GitHub Pages

1. Asegúrate de que el `base` en `vite.config.js` coincida con el nombre de tu repositorio:
```javascript
base: '/Grand-Theft-Auto-VI/'
```

2. Despliega con un solo comando:
```bash
npm run deploy
```

3. Configura GitHub Pages en tu repositorio:
   - Ve a **Settings > Pages**
   - Selecciona la rama **gh-pages**
   - Selecciona **/ (root)** como directorio
   - Tu sitio estará disponible en: `https://[tu-usuario].github.io/Grand-Theft-Auto-VI/`

## Características Técnicas

### Optimización de Build
- **Code Splitting**: Separación automática de vendor y GSAP chunks
- **Minificación**: Usando Terser para reducir el tamaño del bundle
- **Compresión**: Assets optimizados con gzip
- **Assets**: Imágenes en formato WebP para mejor rendimiento

### Animaciones GSAP
- ScrollTrigger para efectos de parallax y scroll
- Timeline secuencial para animaciones complejas
- Máscaras radiales para efectos de revelación
- Animaciones responsivas adaptadas por dispositivo

### Responsividad
- Breakpoints personalizados definidos en Tailwind
- Media queries manejadas con react-responsive
- Ajustes dinámicos de animaciones según el dispositivo
- Layout flexible con CSS Grid y Flexbox

## Fuentes Personalizadas

El proyecto utiliza tres fuentes personalizadas:
- **Long** - Para títulos principales
- **Round** - Para texto general
- **Round Bold** - Para énfasis

## Paleta de Colores

```css
Background Gradient:
- Dark Purple: #1c1829
- Midnight Blue: #1b1828
- Deep Navy: #191724

Accent Colors:
- Yellow: #fff9cb
- Pink: #ffb0c4
```

## Compatibilidad de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Navegadores móviles modernos

## Licencia

Este proyecto es un fan-made y no está afiliado oficialmente con Rockstar Games o Take-Two Interactive.

## Créditos

- Diseño y desarrollo: [Tu nombre]
- Imágenes y videos: Rockstar Games
- Inspiración: GTA VI Trailer oficial



Hecho con ❤️ para la comunidad de GTA
