# Corte de setiembre de 2026

La base conserva los 1.121 registros INFOBRAS y las 58 columnas originales de `bop_septiembre.xlsx`. El Excel contiene únicamente `BD_septiembre_2026` y `Diccionario`. Las causales se revisan a partir del seguimiento recibido. Las contradicciones de estado no eliminan obras.

## Indicadores

- **Inversión comprometida:** costo actualizado, contado una vez por CUI. Sin CUI se utiliza el código INFOBRAS. Si el mismo CUI presenta distintos costos, se toma el mayor costo reportado y el saldo de ese mismo registro. Es una regla de consolidación del corte, no una actualización del costo en el MEF. Los valores originales de las obras permanecen en el Excel y en el ranking.
- **Saldo por ejecutar:** suma de los saldos disponibles de esas inversiones únicas. Los faltantes se muestran como faltantes; no equivalen a cero. Los saldos de la fuente están truncados a cero cuando el devengado supera el costo actualizado. Estos casos se señalan en la ficha de la obra.
- **Población potencialmente afectada:** aproximación conservadora que toma el máximo de beneficiarios válidos por distrito, evitando sumar las poblaciones de proyectos que pueden atender a las mismas personas. Se contrasta cada valor con la población distrital INEI 2026. Se omiten valores superiores a ese límite y distritos sin coincidencia exacta. Cuando un CUI aparece en varios distritos, sus beneficiarios se dejan sin asignar, pues no existe un reparto distrital verificable. La aproximación no representa un padrón de personas únicas ni cobertura completa.
- Los indicadores se recalculan sobre el conjunto filtrado. El ranking muestra las 50 obras INFOBRAS con mayor costo del registro, independientemente de los filtros del dashboard.
- `modelo_predictivo` se conserva como indicador binario. **Alerta predictiva** distingue 116 obras con valor 1 y 1.005 con valor 0. No se interpreta el cero como ausencia de riesgo ni el uno como una probabilidad.

## Ubicaciones y fuentes

Las coordenadas se recuperan de la base de mayo solo con coincidencia de código INFOBRAS, CUI y territorio declarado, y validación dentro del departamento. Se completan con las fichas MEF consultadas el **9 de octubre de 2026**, cuando coinciden departamento, provincia y distrito. La coordenada de inversión MEF es referencial y puede no localizar el frente exacto de cada obra. No se utilizan centroides para suplir ubicaciones faltantes.

Las obras sin coordenadas verificables siguen incluidas en filtros, indicadores, Excel y ranking. Se informa su cantidad junto al mapa. No se ubican en el punto cero ni se habilita seguimiento satelital sin coordenadas.

Fuentes de enriquecimiento:

- MEF, ficha de ejecución: `https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucion/{CUI}`.
- MEF, seguimiento SSI/F12B: `https://ofi5.mef.gob.pe/ssi/Ssi/Index?codigo={CUI}&tipo=2`.
- [INEI: población total proyectada por departamento, provincia y distrito, 2018–2026](https://www.gob.pe/institucion/inei/informes-publicaciones/6894980-peru-poblacion-total-proyectada-al-30-de-junio-de-cada-ano-segun-departamento-provincia-y-distrito-2018-2026). Se usa la columna 2026 del archivo oficial conservado durante el trabajo anterior.

Los datos complementarios de octubre no se presentan como una consulta histórica realizada el 30 de setiembre. El tiempo paralizado del dashboard se calcula al 30/09/2026. La hoja original y los archivos históricos de mayo y julio no se sobrescriben. El conjunto de datos del dashboard anterior se conserva en `assets/historial/obras-julio-2026.js`.
