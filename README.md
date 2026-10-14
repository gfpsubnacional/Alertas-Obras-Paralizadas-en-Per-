# Alertas de Obras Públicas Paralizadas

Versión canónica del dashboard de GFP Subnacional para identificar y monitorear obras públicas paralizadas en el Perú. La aplicación se publica directamente desde este repositorio mediante GitHub Pages.

## Contenido

- `index.html`: dashboard principal.
- `assets/`: datos del mapa, fechas declaradas, geometrías, logos y capturas históricas verificadas.
- `BD_OBRAS_PARALIZADAS_SEPTIEMBRE_2026.xlsx`: base vigente, 1.121 obras y 58 columnas; solo base mensual y Diccionario.
- `ALERTAS-OP-MAY26.xlsx` y `base_op_julio_final.xlsx`: bases históricas.
- `ranking_50_setiembre_2026.csv`: ranking de las 50 obras de mayor costo actualizado.
- `VALIDACION_SETIEMBRE_2026.md`: criterios de validación y fuentes de los indicadores.
- `metodologia_op.pdf`: metodologia de trabajo descargable.
- `wp_op_mayo.pdf`: documento de trabajo descargable.
- `Informe OP Mayo 2026.pdf`: reporte de alertas de mayo 2026.
- `Informe OP Julio 2026.pdf`: reporte de alertas de julio 2026.

## Funcionalidades

- Mapa interactivo y responsivo con obras distribuidas en los 25 departamentos.
- Filtros por palabra clave, departamento, nivel de gobierno, sector, causa, costo, tiempo paralizado y Alerta predictiva (campo `modelo_predictivo`).
- Indicadores clave que se actualizan según los filtros activos.
- Panel de obra con datos generales, ejecución física y financiera, enlaces a INFOBRAS, Invierte.pe y SSI, y opciones para compartir.
- Seguimiento satelital con Google, capturas históricas verificadas de Google Earth e imágenes históricas Esri cuando existen versiones diferenciables.
- Priorización de las 50 obras con mayor costo actualizado de inversión.
- Sección Descargables con documentos de referencia e historial mensual de bases y reportes.

## Uso

Abrir `index.html` en el navegador. La rama `main` contiene la única versión vigente para publicación.

## Corte vigente

Setiembre de 2026. Se conservan las 1.121 obras originales. El mapa muestra 893 ubicaciones referenciales verificables; las 228 sin coordenadas permanecen en los indicadores. Las cifras financieras se consolidan sin duplicar CUI. La población es una aproximación distrital con datos válidos para 629 obras, contrastada con INEI 2026. Los importes exactos están disponibles al pasar el puntero sobre cada indicador.
