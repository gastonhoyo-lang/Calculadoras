/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$RetiroFire = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora FIRE | Retiro Anticipado", "description": "Calcul\xE1 cu\xE1nto dinero necesit\xE1s ahorrar para jubilarte joven basado en la regla del 4%." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900">
Libertad <span class="text-emerald-600">Financiera</span> 🏖️
</h1> <p class="text-slate-500 font-medium">
Calculá tu número FIRE (Financial Independence, Retire Early).
</p> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-lg mx-auto space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Gasto Mensual Deseado ($)</label> <input type="number" id="gastoFire" placeholder="Ej: 2000" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold text-xl"> </div> <button id="btnFire" class="w-full bg-emerald-600 text-white p-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all">Calcular Mi Número</button> <div id="resFire" class="hidden p-8 bg-emerald-50 rounded-3xl text-center border-2 border-emerald-100"> <p class="text-emerald-600 text-xs font-bold uppercase mb-2">
Necesitás un patrimonio de:
</p> <div id="valFire" class="text-4xl font-black text-emerald-900"></div> <p class="text-[10px] mt-4 text-emerald-700 italic">
Esto te permite retirar el 4% anual de por vida ajustado a inflación.
</p> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro";
const $$url = "/finanzas/retiro-fire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RetiroFire,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
