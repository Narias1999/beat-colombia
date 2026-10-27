/**
 * Backend en Google Apps Script para el formulario "¿Quieres más información?".
 *
 * PASOS
 *  1. Crea una hoja de cálculo. Primera fila (encabezados):
 *       Fecha | Nombre | Correo | Teléfono | Idioma | Página
 *  2. Copia el ID de la hoja desde su URL y pégalo abajo en SHEET_ID:
 *       https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
 *  3. Pega este archivo en el editor y guarda.
 *  4. Ejecuta la función `probar` una vez (menú Ejecutar) para autorizar
 *     los permisos y comprobar que escribe una fila.
 *  5. Implementar > Nueva implementación > Aplicación web
 *       Ejecutar como:        Yo
 *       Quién tiene acceso:   Cualquier usuario
 *  6. Copia la URL que termina en /exec -> NEXT_PUBLIC_LEADS_ENDPOINT
 *
 * Nota: cada vez que cambies el código debes crear una NUEVA versión de la
 * implementación, si no la URL seguirá sirviendo el código viejo.
 */

var SHEET_ID = 'PEGA_AQUI_EL_ID_DE_LA_HOJA';

function getSheet() {
  // Funciona con script independiente (openById) y con script dentro de la hoja.
  var ss = SHEET_ID.indexOf('PEGA_AQUI') === 0
    ? SpreadsheetApp.getActiveSpreadsheet()
    : SpreadsheetApp.openById(SHEET_ID);
  if (!ss) throw new Error('No encuentro la hoja: revisa SHEET_ID.');
  return ss.getSheets()[0];
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    getSheet().appendRow([
      new Date(),
      safe(d.name),
      safe(d.email),
      safe(d.phone),
      safe(d.locale),
      safe(d.page),
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Ejecuta esto una vez desde el editor para autorizar y verificar. */
function probar() {
  getSheet().appendRow([new Date(), safe('Prueba'), safe('prueba@correo.com'), safe('+57 300 000 0000'), safe('es'), safe('/es/join/')]);
}

/**
 * Sheets interpreta =, +, - y @ al inicio de una celda como fórmula, así que
 * "+57 300..." daba #ERROR!. El apóstrofo fuerza texto (no se muestra) y de
 * paso evita inyección de fórmulas desde el formulario.
 */
function safe(v) {
  var s = String(v == null ? '' : v).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
