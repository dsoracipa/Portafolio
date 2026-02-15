# 📘 Guía de Migración del Portafolio

## ✅ Cambios Completados

Se ha migrado exitosamente todo el portafolio de la plantilla original (Sergio) a tus datos personales (Daniel Felipe Soracipa). Los cambios incluyen:

### 1. **Estructura de Datos Centralizada** 
- ✅ Creado `src/data/portfolio.ts` con todas las interfaces y datos tipados
- ✅ Todos los componentes ahora leen desde este archivo central

### 2. **Componentes Actualizados**
- ✅ `HeroSection`: Nombre, títulos rotativos, descripción profesional
- ✅ `Experience`: 2 experiencias laborales (OGA + Teaching Assistant)
- ✅ `Projects`: 5 proyectos reales (RunPath, Project CRUD, AgroConecta, UN Chaza, Django-React)
- ✅ `Skills`: Tecnologías correctas según tu stack
- ✅ `AcademicInfoCard`: Universidad Nacional de Colombia
- ✅ `LanguagesSection`: Español e Inglés
- ✅ `Contact`: Email y ubicación actualizados
- ✅ `Footer`: Nombre y descripción personalizados
- ✅ `SocialIcons`: GitHub (Dansora375)
- ✅ `HeroButtons`: Referencia al nuevo CV

---

## ⚠️ TAREAS PENDIENTES - CRÍTICO

### 📋 TODO 1: Agregar tu CV en formato PDF
**Ubicación:** `public/cv.pdf`

**Acción:**
1. Coloca tu archivo CV en PDF en la carpeta `public/`
2. Renómbralo a `cv.pdf`
3. Si tienes otro nombre preferido, actualiza en `src/data/portfolio.ts`:
   ```typescript
   cvFile: '/tu-nombre-cv.pdf'
   ```

---

### 📋 TODO 2: Actualizar URL de LinkedIn
**Ubicación:** `src/data/portfolio.ts` línea ~120

**Acción:**
Reemplaza `'TBD'` con tu URL completa de LinkedIn:
```typescript
{
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/tu-perfil-linkedin',  // ← ACTUALIZAR AQUÍ
  icon: 'linkedin'
}
```

---

### 📋 TODO 3: Agregar Imágenes de Proyectos
**Ubicación:** `public/projects/`

**Acción:**
Crea la carpeta `public/projects/` y agrega las siguientes imágenes (SVG, PNG o JPG):

1. `runpath.svg` - RunPath (Cloud-native Microservices)
2. `project-crud.svg` - Project Management CRUD
3. `agroconecta.svg` - AgroConecta
4. `unchaza.svg` - UN Chaza
5. `django-react.svg` - Django-React CRUD

**Formato recomendado:** 1200x630px (16:9) para mejor visualización

Si no tienes imágenes, puedes usar placeholders temporales o capturas de pantalla.

---

### 📋 TODO 4: Agregar tu Foto de Perfil
**Ubicación:** `public/Profile.svg`

**Acción:**
Reemplaza el archivo `public/Profile.svg` con tu foto de perfil.
- Formato recomendado: SVG, PNG o JPG
- Dimensiones: 300x300px (cuadrado)
- Si usas otro formato/nombre, actualiza en `src/data/portfolio.ts`:
  ```typescript
  profileImage: '/tu-foto.png'
  ```

---

### 📋 TODO 5: Completar URLs de Repositorios y Demos
**Ubicación:** `src/data/portfolio.ts` líneas ~200-350

**Acción:**
En el array `projects`, reemplaza todos los `'TBD'` con URLs reales:

```typescript
{
  id: 1,
  title: 'RunPath - Cloud-native Microservices',
  // ...
  githubUrl: 'https://github.com/Dansora375/runpath',  // ← ACTUALIZAR
  liveUrl: 'https://tu-demo.com',  // ← ACTUALIZAR o dejar 'TBD' si no hay demo
}
```

Repite para cada proyecto.

---

### 📋 TODO 6: (Opcional) Agregar Certificaciones
**Ubicación:** `src/data/portfolio.ts` línea ~170

**Acción:**
Si tienes certificaciones, descomenta y completa:

```typescript
export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Nombre de la Certificación',
    issuer: 'Institución',
    date: 'Mes Año',
    description: 'Descripción del contenido...',
    link: 'https://certificado.com/verificar'
  }
];
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Instalación
```bash
cd "c:\Users\DANIEL\Documents\docus trabajo\portafolio\Portafolio-main\Portafolio"
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador.

### Build para Producción
```bash
npm run build
```

---

## 📁 Estructura de Archivos Modificados

```
src/
├── data/
│   └── portfolio.ts              ← NUEVO: Todos los datos centralizados
├── components/
│   ├── organisms/
│   │   ├── HeroSection.tsx       ← Modificado
│   │   ├── SkillsGrid.tsx        ← Modificado
│   │   └── LanguagesSection.tsx  ← Modificado
│   ├── molecules/
│   │   ├── AcademicInfoCard.tsx  ← Modificado
│   │   ├── SocialIcons.tsx       ← Modificado
│   │   ├── HeroButtons.tsx       ← Modificado
│   │   ├── ContactInfoList.tsx   ← Modificado
│   │   ├── WhyWorkWithMe.tsx     ← Modificado
│   │   └── ContactSocialLinks.tsx← Modificado
│   └── template/
│       ├── Experience.tsx        ← Modificado
│       ├── Projects.tsx          ← Modificado
│       ├── Skills.tsx            ← Modificado
│       └── Footer.tsx            ← Modificado
```

---

## 🔧 Cómo Agregar/Modificar Datos

### Agregar un Nuevo Proyecto
Edita `src/data/portfolio.ts` y agrega al array `projects`:

```typescript
{
  id: 6,
  title: 'Nombre del Proyecto',
  description: 'Descripción corta',
  image: '/projects/nuevo-proyecto.svg',
  technologies: ['React', 'Node.js'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://demo.com',
  fullDescription: 'Descripción completa...',
  features: [
    'Feature 1',
    'Feature 2'
  ],
  isDeployed: true,
  dateRange: 'Mes Año – Mes Año'
}
```

### Agregar una Nueva Experiencia
Edita `src/data/portfolio.ts` y agrega al array `experiences`:

```typescript
{
  id: 3,
  title: 'Nuevo Cargo',
  company: 'Empresa',
  location: 'Ciudad, País',
  startDate: 'Mes Año',
  endDate: 'Mes Año',
  isCurrent: false,
  achievements: [
    'Logro 1',
    'Logro 2'
  ]
}
```

### Agregar una Nueva Skill
Edita `src/data/portfolio.ts` y agrega a `skillCategories`:

```typescript
{
  name: 'Nueva Categoría',
  skills: [
    { name: 'Skill 1', iconComponent: 'FaPython' },
    { name: 'Skill 2', icon: '🔧' }
  ]
}
```

---

## ✨ Características Mantenidas

- ✅ Tema claro/oscuro
- ✅ Diseño responsive (móvil/tablet/desktop)
- ✅ Animaciones y transiciones suaves
- ✅ Gradientes indigo/purple/blue
- ✅ Fondo de estrellas en Projects y Contact
- ✅ Rutas con React Router (/, /projects, /skills, /contact)
- ✅ Modal de proyectos
- ✅ Efecto de escritura en títulos (Hero)
- ✅ Arquitectura Atomic Design

---

## 🎨 Personalización Adicional (Opcional)

### Cambiar Colores del Tema
Edita `tailwind.config.js` o los archivos de componentes directamente.

### Modificar Títulos Rotativos
Edita `src/data/portfolio.ts`:
```typescript
titlesRotating: [
  'Tu Título 1',
  'Tu Título 2',
  'Tu Título 3',
  'Tu Título 4'
]
```

---

## 📝 Notas Importantes

1. **No se inventaron datos**: Todos los datos provienen de tu CV y descripción.
2. **Placeholders TBD**: Búscalos en `portfolio.ts` y reemplázalos con datos reales.
3. **Imágenes faltantes**: El sitio funcionará sin ellas, pero mostrará rutas rotas.
4. **LinkedIn TBD**: Actualiza la URL cuando la tengas disponible.

---

## 🐛 Solución de Problemas

### Error: "Cannot find module './data/portfolio'"
**Solución:** Asegúrate de que el archivo `src/data/portfolio.ts` existe.

### Error de TypeScript en iconComponent
**Solución:** Los iconos están correctamente mapeados en `SkillsGrid.tsx`.

### Las imágenes no se muestran
**Solución:** Verifica que las imágenes estén en `public/` y que las rutas en `portfolio.ts` coincidan.

---

## 📧 Contacto

Si tienes dudas o necesitas ajustes adicionales, revisa los comentarios `// TODO:` en el código.

---

**¡Éxito con tu nuevo portafolio! 🚀**
