/**
 * Botón flotante «volver arriba».
 *
 * Basta con añadir una línea a cualquier página:
 *   <script src="scroll-top.js"></script>
 *
 * Se configura con atributos del propio <script>:
 *   <script src="scroll-top.js" data-umbral="600" data-etiqueta="Ir al inicio"></script>
 *   <script src="scroll-top.js" data-auto="false"></script>  <!-- solo define la función -->
 *
 * Y desde JS, si prefieres controlarlo tú:
 *   var boton = iniciarBotonArriba({ umbral: 400, etiqueta: "Volver arriba" });
 *   boton.mostrar(); boton.ocultar(); boton.destruir();
 *
 * Script clásico (no módulo ES) para que funcione también con file://.
 */
(function (global) {
  "use strict";

  var ID_ESTILOS = "estilos-boton-arriba";

  var CSS = [
    ".boton-arriba{",
    "  position:fixed;right:24px;bottom:24px;z-index:9999;",
    "  width:52px;height:52px;padding:0;display:grid;place-items:center;",
    "  border:1px solid #2b374f;border-radius:50%;",
    "  background:rgba(19,26,43,.92);color:#5ad9f5;",
    "  box-shadow:0 14px 30px -14px #000;cursor:pointer;",
    "  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);",
    "  opacity:0;visibility:hidden;transform:translateY(14px);",
    "  transition:opacity .2s ease,transform .2s ease,visibility .2s,",
    "             border-color .15s ease,background .15s ease;",
    "}",
    ".boton-arriba:hover{border-color:#1d6d84;background:rgba(24,36,54,.98);}",
    ".boton-arriba:focus-visible{outline:3px solid rgba(255,255,255,.5);outline-offset:3px;}",
    ".boton-arriba.visible{opacity:1;visibility:visible;transform:translateY(0);}",
    "@media (max-width:520px){.boton-arriba{right:16px;bottom:16px;width:46px;height:46px;}}",
    "@media (prefers-reduced-motion:reduce){.boton-arriba{transition:none;}}",
    "@media print{.boton-arriba{display:none !important;}}"
  ].join("\n");

  var FLECHA = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" ' +
    'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" ' +
    'stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';

  function inyectarEstilos() {
    if (document.getElementById(ID_ESTILOS)) return;
    var estilo = document.createElement("style");
    estilo.id = ID_ESTILOS;
    estilo.textContent = CSS;
    (document.head || document.documentElement).appendChild(estilo);
  }

  function iniciarBotonArriba(opciones) {
    opciones = opciones || {};

    if (global.__botonArribaActivo) return global.__botonArribaActivo;

    var umbral = Number(opciones.umbral);
    if (!isFinite(umbral) || umbral < 0) umbral = 400;

    var etiqueta = opciones.etiqueta || "Volver arriba";
    var destino = Number(opciones.destino);
    if (!isFinite(destino)) destino = 0;

    inyectarEstilos();

    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "boton-arriba";
    boton.setAttribute("aria-label", etiqueta);
    boton.title = etiqueta;
    boton.innerHTML = FLECHA;
    document.body.appendChild(boton);

    var pendiente = false;

    function pintar() {
      pendiente = false;
      var y = global.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop || 0;
      boton.classList.toggle("visible", y > umbral);
    }

    function alDesplazar() {
      if (pendiente) return;
      pendiente = true;
      if (global.requestAnimationFrame) {
        global.requestAnimationFrame(pintar);
      } else {
        setTimeout(pintar, 16);
      }
    }

    function subir() {
      var reducido = global.matchMedia &&
        global.matchMedia("(prefers-reduced-motion: reduce)").matches;

      try {
        global.scrollTo({ top: destino, behavior: reducido ? "auto" : "smooth" });
      } catch (e) {
        // navegadores sin opciones en scrollTo
        global.scrollTo(0, destino);
      }
    }

    // al volver a la pestaña el estado puede haberse quedado viejo
    function alVolver() {
      if (!document.hidden) pintar();
    }

    boton.addEventListener("click", subir);
    global.addEventListener("scroll", alDesplazar, { passive: true });
    global.addEventListener("resize", alDesplazar, { passive: true });
    document.addEventListener("visibilitychange", alVolver);

    var api = {
      elemento: boton,
      mostrar: function () { boton.classList.add("visible"); },
      ocultar: function () { boton.classList.remove("visible"); },
      destruir: function () {
        global.removeEventListener("scroll", alDesplazar);
        global.removeEventListener("resize", alDesplazar);
        document.removeEventListener("visibilitychange", alVolver);
        if (boton.parentNode) boton.parentNode.removeChild(boton);
        global.__botonArribaActivo = null;
      }
    };

    global.__botonArribaActivo = api;
    pintar();
    return api;
  }

  var scriptActual = document.currentScript;
  var datos = (scriptActual && scriptActual.dataset) ? scriptActual.dataset : {};

  global.iniciarBotonArriba = iniciarBotonArriba;
  if (typeof module === "object" && module.exports) {
    module.exports = iniciarBotonArriba;
  }

  if (datos.auto !== "false") {
    if (document.body) {
      iniciarBotonArriba({ umbral: datos.umbral, etiqueta: datos.etiqueta });
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        iniciarBotonArriba({ umbral: datos.umbral, etiqueta: datos.etiqueta });
      });
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
