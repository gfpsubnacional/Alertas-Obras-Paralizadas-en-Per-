# Alertas y modelo de predicción

Actualización del 27 de noviembre de 2026, a partir de `bop_nov_georreferenciado.xlsx`.

- **Alertas**: conserva las 1.120 obras, los indicadores y las clasificaciones anteriores (115 con señal del modelo anterior, 360 reactivables, 5 de El Niño y 94 con mayor costo actualizado). El archivo `assets/obras-data.js` permanece intacto.
- **Modelo de predicción de paralización de obras**: 1.726 registros de `estado_actual = 0`, columna BT. El diccionario define ese valor como estado observado «No paralizado»; el resultado del modelo no equivale a una paralización verificada ni a una probabilidad calibrada para un plazo futuro. La probabilidad se conserva sin recalcular ni aplicar umbrales inventados.
- El archivo recibido contiene 1.121 registros con `estado_actual = 1`. El adicional es INFOBRAS 500663, excluido previamente por el usuario. No se reincorpora ni se reemplazan las 1.120 obras existentes.
- Los filtros, mapa, conteos e indicadores se calculan por sección. No hay agregación entre universos. Limpiar filtros conserva la sección activa. El botón de El Niño abre Alertas y su grupo de cinco obras. Las causales (filtro, gráfico y ficha) se muestran exclusivamente en Alertas; se retiraron del modelo predictivo por indicación del usuario.
- Priorización, descargables e historial conservan los documentos y el padrón de setiembre. El ranking sigue usando exclusivamente la base anterior.
- Se redujeron espacios de filtros, tarjetas e indicadores y se amplió la altura del mapa en escritorio. Se conservan la navegación, el carrusel inicial y las fichas del diseño existente.

## Revisión de las nuevas obras

Como revisión previa se consultaron las 1.726 fichas de ejecución INFOBRAS y el historial público SSI/Formato 12B. El archivo `assets/revision-causales-modelo-noviembre-2026.json` se conserva como antecedente de consulta. Sus causales no forman parte de los datos activos, filtros, gráfico ni fichas del modelo predictivo.

En aquel análisis documental se clasificaron 1.061 registros y quedaron 665 sin evidencia suficiente. Esa revisión histórica no es una determinación causal del algoritmo predictivo ni se muestra en la sección del modelo.

Las nuevas obras tienen 1.726 ubicaciones: 1.590 puntos dentro del distrito contrastado, 102 puntos con territorio corregido a partir de su fuente y 34 referencias oficiales de localidad. Se revisaron las geometrías GeoInvierte por CUI, puntos INFOBRAS y límites distritales/centros poblados INEI publicados por GeoInvierte. Se corrigió la inversión de ejes en las respuestas INFOBRAS cuando sus campos Latitud/Longitud contenían respectivamente longitud/latitud; se conserva esta operación en el registro.

Las referencias de localidad no son coordenadas exactas de obra. Se identifican como aproximadas; seis son referencias amplias de localidad, pendientes de precisar sector o frente. INFOBRAS 537124 es una excepción cartográfica explícita: el centro poblado INEI 2006010003 está adscrito a Sullana, mientras el polígono lo sitúa en Lancones. No se desplazó el punto para forzar una validación. La discrepancia queda pendiente. El registro completo es `assets/revision-geografica-modelo-noviembre-2026.json`.

Fuentes territoriales adicionales: [INIA: predio Los Pobres en Salas, Ica](https://www.gob.pe/institucion/inia/informes-publicaciones/7410016-aviso-de-saneamiento-fisico-legal), [INIA: EEA Chincha en Chincha Baja](https://www.inia.gob.pe/events/agricultura-ica-jul2019/).

Hay 193 nuevas obras sin costo actualizado ni saldo en la base. Se muestran como no disponibles, no como cero ni como obras de menor costo. No se sustituyen con el monto del expediente técnico. Se conservan importes negativos recibidos sin corregirlos arbitrariamente.

La población se consultó para los 1.726 CUI en SSI/Formato 12B. Se usa la misma prioridad y regla de admisibilidad que en Alertas: primer valor positivo de BENEFICIARIO, VAL_BENEFICIARIO_TOTAL o VAL_BENEFICIARIO_ULTIMO, primero F12B y después SSI; se admite únicamente si no supera la población distrital INEI 2026. El agregado suma el máximo por distrito entre las obras filtradas, como aproximación para reducir duplicidades, no como conteo verificado de personas únicas. Hay 1.154 obras con población admisible, 357 sin beneficiarios disponibles y 215 cuyo dato supera el total distrital. El indicador sin filtros es 5.541.880 personas en 665 distritos. La ficha de cada obra muestra el valor admisible o «No disponible», y el indicador conserva la nota «Fuente: SSI». El registro de consulta y validación está en `assets/poblacion-modelo-noviembre-2026.json`.

Metodología descarga `metodologia_modelo_prediccion_20261127.pdf`, copia exacta de `documento_EP (1).pdf`, documento de trabajo de 60 páginas recibido del usuario. El PDF anterior permanece archivado en el repositorio.

## Validación

Comprobados: universos sin códigos compartidos, 1.120 registros originales sin cambios, exclusión 500663, grupos de seguimiento, 1.726 coordenadas finitas, filtros de causa/costo/ubicación, búsqueda y limpieza, indicadores separados, enlaces compartidos, botón El Niño, vista móvil y seguimiento satelital en pantalla completa. Los archivos históricos y el ranking anterior no se modifican.
