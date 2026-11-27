# Alertas y modelo de predicción

Actualización del 27 de noviembre de 2026, a partir de `bop_nov_georreferenciado.xlsx`.

- **Alertas**: conserva las 1.120 obras, los indicadores y las clasificaciones anteriores (115 con señal del modelo anterior, 360 reactivables, 5 de El Niño y 94 con mayor costo actualizado). El archivo `assets/obras-data.js` permanece intacto.
- **Modelo de predicción de paralización de obras**: 1.726 registros de `estado_actual = 0`, columna BT. El diccionario define ese valor como estado observado «No paralizado»; el resultado del modelo no equivale a una paralización verificada ni a una probabilidad calibrada para un plazo futuro. La probabilidad se conserva sin recalcular ni aplicar umbrales inventados.
- El archivo recibido contiene 1.121 registros con `estado_actual = 1`. El adicional es INFOBRAS 500663, excluido previamente por el usuario. No se reincorpora ni se reemplazan las 1.120 obras existentes.
- Los filtros, mapa, conteos, indicadores y gráfico se calculan por sección. No hay agregación entre universos. Limpiar filtros conserva la sección activa. El botón de El Niño abre Alertas y su grupo de cinco obras.
- Priorización, descargables e historial conservan los documentos y el padrón de setiembre. El ranking sigue usando exclusivamente la base anterior.
- Se redujeron espacios de filtros, tarjetas e indicadores y se amplió la altura del mapa en escritorio. Se conservan la navegación, el carrusel inicial y las fichas del diseño existente.

## Revisión de las nuevas obras

Se consultaron las 1.726 fichas de ejecución INFOBRAS y el historial público SSI/Formato 12B. La clasificación documental conserva fuente, período, evidencia y alcance en `assets/revision-causales-modelo-noviembre-2026.json`. No se deducen causas del nombre de la obra, del importe, del tiempo sin devengado ni de la predicción.

Se identificó evidencia para clasificar 1.061 registros: 271 con paralización reportada en el último período disponible de INFOBRAS, 308 con restricciones reportadas en SSI/Formato 12B y 482 con antecedentes históricos. «Último período disponible» no significa verificación de campo ni que el reporte siga vigente. Los 665 restantes se muestran como «Sin causal documentada». Las fichas permiten desplegar el sustento y distinguir antecedentes de restricciones. Las categorías asignadas por coincidencia textual son clasificación documental, no una determinación causal del algoritmo predictivo.

Las nuevas obras tienen 1.726 ubicaciones: 1.590 puntos dentro del distrito contrastado, 102 puntos con territorio corregido a partir de su fuente y 34 referencias oficiales de localidad. Se revisaron las geometrías GeoInvierte por CUI, puntos INFOBRAS y límites distritales/centros poblados INEI publicados por GeoInvierte. Se corrigió la inversión de ejes en las respuestas INFOBRAS cuando sus campos Latitud/Longitud contenían respectivamente longitud/latitud; se conserva esta operación en el registro.

Las referencias de localidad no son coordenadas exactas de obra. Se identifican como aproximadas; seis son referencias amplias de localidad, pendientes de precisar sector o frente. INFOBRAS 537124 es una excepción cartográfica explícita: el centro poblado INEI 2006010003 está adscrito a Sullana, mientras el polígono lo sitúa en Lancones. No se desplazó el punto para forzar una validación. La discrepancia queda pendiente. El registro completo es `assets/revision-geografica-modelo-noviembre-2026.json`.

Fuentes territoriales adicionales: [INIA: predio Los Pobres en Salas, Ica](https://www.gob.pe/institucion/inia/informes-publicaciones/7410016-aviso-de-saneamiento-fisico-legal), [INIA: EEA Chincha en Chincha Baja](https://www.inia.gob.pe/events/agricultura-ica-jul2019/).

Hay 193 nuevas obras sin costo actualizado ni saldo en la base. Se muestran como no disponibles, no como cero ni como obras de menor costo. No se sustituyen con el monto del expediente técnico. La base nueva no incluye población beneficiaria: se muestra N/D. Se conservan importes negativos recibidos sin corregirlos arbitrariamente.

## Validación

Comprobados: universos sin códigos compartidos, 1.120 registros originales sin cambios, exclusión 500663, grupos de seguimiento, 1.726 coordenadas finitas, filtros de causa/costo/ubicación, búsqueda y limpieza, indicadores separados, enlaces compartidos, botón El Niño, vista móvil y seguimiento satelital en pantalla completa. Los archivos históricos y el ranking anterior no se modifican.
