# 🤖 Infografía: El Impacto de la IA en la Automatización de Tareas

Una infografía interactiva que visualiza datos sobre cómo la Inteligencia Artificial está transformando el panorama laboral empresarial.

## 🌐 Demo en Vivo

**Ver proyecto desplegado**: [https://iaencifras.vercel.app/](https://iaencifras.vercel.app/)

## 🏗️ Arquitectura Modular

Este proyecto utiliza una **arquitectura modular sencilla** que separa responsabilidades y mejora la mantenibilidad:

```
📁 Estructura del Proyecto
├── index.html              # 🎯 Punto de entrada principal (modular)
├── infografía.html         # 📦 Versión original (backup)
├── assets/
│   ├── css/
│   │   └── main.css        # 🎨 Estilos organizados por secciones
│   ├── js/
│   │   ├── config.js       # ⚙️ Configuración y constantes
│   │   ├── utils.js        # 🔧 Funciones utilitarias
│   │   ├── charts.js       # 📊 Lógica de gráficos Chart.js
│   │   └── main.js         # 🚀 Aplicación principal
│   └── images/             # 🖼️ Assets de imágenes
├── config/
│   └── site.json          # 📋 Configuración del sitio y SEO
├── scripts/
│   └── validate-modules.js # ✅ Validación de arquitectura
└── docs/
    ├── ARCHITECTURE.md     # 📖 Documentación de arquitectura
    └── MIGRATION.md        # 🔄 Guía de migración
```

## 🚀 Características

- **Responsive Design**: Optimizada para dispositivos móviles, tablets y desktop
- **Gráficos Interactivos**: Visualizaciones dinámicas con Chart.js
- **Accesibilidad**: Cumple con estándares WCAG 2.1
- **Optimizada para SEO**: Meta tags, Open Graph y datos estructurados
- **Performance**: Carga rápida y optimizada para producción

## 📈 Datos Incluidos

- Estadísticas de McKinsey, Goldman Sachs, OpenAI, WEF, PwC
- Potencial de automatización por roles laborales
- Proyecciones temporales 2023-2045
- Sectores más impactados por la IA
- Estrategias de adaptación empresarial

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de utilidades CSS
- **Chart.js**: Librería de gráficos interactivos
- **Inter Font**: Tipografía moderna y legible

## 🚀 Instalación y Uso

### Desarrollo Local

1. Clona o descarga los archivos
2. Instala las dependencias de desarrollo (opcional):
   ```bash
   npm install
   ```
3. Inicia el servidor local:
   ```bash
   # Usando Python (recomendado)
   npm run start
   # o directamente
   python -m http.server 8080
   ```
4. Abre http://localhost:8080/index.html en tu navegador

### Construcción para Producción

```bash
# Minificar HTML y optimizar recursos
npm run build
```

## 📞 Soporte

Para dudas o mejoras, consulta la documentación de las librerías utilizadas:
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Chart.js](https://www.chartjs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles.

### ¿Qué significa la Licencia MIT?

La Licencia MIT es una licencia de software libre y de código abierto que permite:

✅ **Uso comercial**: Puedes usar este código en proyectos comerciales  
✅ **Modificación**: Puedes modificar el código según tus necesidades  
✅ **Distribución**: Puedes distribuir el código original o modificado  
✅ **Uso privado**: Puedes usar el código en proyectos privados  

**Únicos requisitos**:
- Incluir el aviso de copyright y la licencia en todas las copias
- No hay garantía - el software se proporciona "tal como está"

---

**Versión**: 1.0.0  
**Última actualización**: Junio 2025
