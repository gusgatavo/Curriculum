// ¡¡AVISO!! NO UTILIZAR NINGUNA DE ESTE JAVASCRIPT
// ES SÓLO PARA BASURA nuestros documentos!
// ++++++++++++++++++++++++++++++++++++++++++
/ *!
 * Derechos de Autor 2014-2015 Twitter, Inc.
 *
 * Con licencia bajo la Licencia Creative Commons Atribución 3.0. por
 * Más detalles, consulte https://creativecommons.org/licenses/by/3.0/.
 * /
// La intención de evitar que los informes de error de falsos positivos con respecto a Bootstrap no funciona correctamente en las versiones antiguas de IE debido a la gente de prueba usando los modos de emulación poco fiables de IE.
(Function () {
  "Use strict ';

  emulatedIEMajorVersion función () {
    grupos var = / MSIE ([0-9]. +) /. exec (window.navigator.userAgent)
    if (grupos === null) {
      return null
    }
    var = parseInt ieVersionNum (grupos [1], 10)
    var = ieMajorVersion Math.floor (ieVersionNum)
    volver ieMajorVersion
  }

  actualNonEmulatedIEMajorVersion función () {
    // Detecta la versión actual de Internet Explorer en uso, incluso si está en un modo de emulación mayores-IE.
    // IE JavaScript documentos de compilación condicional: https://msdn.microsoft.com/library/121hztk3%28v=vs.94%29.aspx
    // @cc_on Docs: https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx
    var jscriptVersion = new Function ( '/ * @ cc_on retorno @_jscript_version; @ * /') () // jshint ignorar: Línea
    si (jscriptVersion === indefinido) {
      11 // volver EI11 No + en modo de emulación
    }
    si (jscriptVersion <9) {
      8 // volver IE8 (o inferior; no han probado en IE <8)
    }
    volver jscriptVersion // IE9 o IE10 en cualquier modo, o IE11 en modo no EI11
  }

  var = ua window.navigator.userAgent
  si (ua.indexOf ( 'Opera')> -1 || ua.indexOf ( 'Presto')> -1) {
    volver // Opera, lo que podría hacerse pasar por IE
  }
  var = emulado emulatedIEMajorVersion ()
  Si (null === emulado) {
    No volver // IE
  }
  var = nonEmulated actualNonEmulatedIEMajorVersion ()

  si (emulado! == nonEmulated) {
    window.alert ( 'ADVERTENCIA: Parece que está usando IE + nonEmulated +' en IE '+ + emulado "modo de emulación \ modos de emulación Nie pueden comportarse de manera significativa diferente a las versiones anteriores de IE REALES \ n Por favor DON \..' T ARCHIVO FALLOS BOOTSTRAP basa en pruebas realizadas modos de emulación IE! ')
  }
}) ();