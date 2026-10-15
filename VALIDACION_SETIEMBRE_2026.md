# Corte de setiembre de 2026

La base conserva los 1.121 registros INFOBRAS y las 58 columnas originales de `bop_septiembre.xlsx`. El Excel contiene únicamente `BD_septiembre_2026` y `Diccionario`. Las causales se revisan a partir del seguimiento recibido. Las contradicciones de estado no eliminan obras.

## Indicadores

- **Inversión comprometida:** costo actualizado, contado una vez por CUI. Sin CUI se utiliza el código INFOBRAS. Si el mismo CUI presenta distintos costos, se toma el mayor costo reportado y el saldo de ese mismo registro. Es una regla de consolidación del corte, no una actualización del costo en el MEF. Los valores originales de las obras permanecen en el Excel y en el ranking.
- **Saldo por ejecutar:** suma de los saldos disponibles de esas inversiones únicas. Los faltantes se muestran como faltantes; no equivalen a cero. Los saldos de la fuente están truncados a cero cuando el devengado supera el costo actualizado. Estos casos se señalan en la ficha de la obra.
- **Población potencialmente afectada:** aproximación conservadora que toma el máximo de beneficiarios válidos por distrito, evitando sumar las poblaciones de proyectos que pueden atender a las mismas personas. Se contrasta cada valor con la población distrital INEI 2026. Se omiten valores superiores a ese límite y distritos sin coincidencia exacta. Cuando un CUI aparece en varios distritos, sus beneficiarios se dejan sin asignar, pues no existe un reparto distrital verificable. La aproximación no representa un padrón de personas únicas ni cobertura completa.
- Los indicadores se recalculan sobre el conjunto filtrado. El ranking muestra las 50 obras INFOBRAS con mayor costo del registro, independientemente de los filtros del dashboard.
- `modelo_predictivo` se conserva como indicador binario. **Alerta predictiva** distingue 116 obras con valor 1 y 1.005 con valor 0. No se interpreta el cero como ausencia de riesgo ni el uno como una probabilidad.

## Ubicaciones y fuentes

La revisión del 14 de octubre de 2026 prioriza las geometrías del CUI en GeoInvierte (puntos, líneas y polígonos), luego las fichas MEF e INFOBRAS. Se examinan todas las ubicaciones de la inversión y se contrastan con la capa distrital oficial publicada por el MEF. Un punto dentro del distrito no acredita el frente exacto ni constituye verificación de campo.

Se asignan **1.121 puntos**: **1.113** de inversión/obra dentro del distrito, **seis referencias aproximadas de localidad** dentro del distrito, **uno** a menos de 50 m del límite (INFOBRAS 106986; punto sin desplazar) y **uno** con concordancia de GeoInvierte, INFOBRAS y el centro poblado INEI Jorge Chávez (513690), cuya adscripción distrital entra en conflicto con el polígono de límites. Esta excepción se indica en la ficha, sin ocultarla como validación distrital estricta.

Las referencias de localidad se aplican a 509215 (San Ramón), 167367 (Chipillico), 88902 (Llaullinco), 505462 (Santo Domingo), 517312 (Tawantinsuyo) y 517693 (Huarasayco). Proceden de centros poblados INEI publicados en GeoInvierte; no son centroides calculados ni coordenadas exactas de la obra. Se adoptaron con autorización expresa del usuario y se identifican como aproximadas en la ficha y en el resumen del mapa. Todas pasaron el contraste con el distrito declarado. Las 1.121 obras siguen incluidas en filtros, indicadores, Excel y ranking.

Se corrigieron 58 adscripciones territoriales. Las tres columnas territoriales revisadas se reflejan también en el Excel, conservando sus 58 columnas y 1.121 registros. La población fue contrastada nuevamente con INEI tras estas correcciones: 635 obras con dato admisible y una aproximación agregada de 2.412.153 habitantes en 379 distritos. Los importes financieros permanecen sin cambios.

Los CUI recuperados por coincidencia de ficha o denominación se utilizan únicamente para buscar coordenadas; no reemplazan los CUI de la base ni alteran su consolidación financiera. Los registros geográficos y sus observaciones están en `assets/georreferenciacion-setiembre-2026.json`.

Fuentes de enriquecimiento:

- [GeoInvierte: geometrías de inversiones](https://ws.mineco.gob.pe/server/rest/services/cartografia_pip_georef_edicion_lectura/MapServer).
- [MEF: límites distritales y centros poblados INEI](https://ws.mineco.gob.pe/server/rest/services/cartografia_base_limites/MapServer).
- [INFOBRAS: ficha pública](https://infobras.contraloria.gob.pe/InfobrasWeb/Mapa/DatosGenerales).

- MEF, ficha de ejecución: `https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucion/{CUI}`.
- MEF, seguimiento SSI/F12B: `https://ofi5.mef.gob.pe/ssi/Ssi/Index?codigo={CUI}&tipo=2`.
- [INEI: población total proyectada por departamento, provincia y distrito, 2018–2026](https://www.gob.pe/institucion/inei/informes-publicaciones/6894980-peru-poblacion-total-proyectada-al-30-de-junio-de-cada-ano-segun-departamento-provincia-y-distrito-2018-2026). Se usa la columna 2026 del archivo oficial conservado durante el trabajo anterior.

Los datos complementarios de octubre no se presentan como una consulta histórica realizada el 30 de setiembre. El tiempo paralizado del dashboard se calcula al 30/09/2026. La hoja original y los archivos históricos de mayo y julio no se sobrescriben. El conjunto de datos del dashboard anterior se conserva en `assets/historial/obras-julio-2026.js`.
