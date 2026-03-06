// src/data/faqs.ts

export interface FAQItem {
  q: string;
  a: string;
}

export interface Relacionado {
  nombre: string;
  link: string;
}

// El objeto principal debe estar bien cerrado
export const dataFaqs: Record<string, { faqs: FAQItem[]; relacionados: Relacionado[] }> = {
  "asado": {
    faqs: [
      { 
        q: "¿Cuánta carne se calcula por persona en un asado?", 
        a: "La regla general es calcular 500 gramos de carne por adulto. Si hay muchos niños, podés calcular 250 gramos para ellos. Esto incluye cortes principales y achuras." 
      },
      { 
        q: "¿Cuánto carbón se necesita para un asado?", 
        a: "Se recomienda calcular 1kg de carbón por cada kilo de carne. Si el corte es grueso o hace mucho frío, sumá un poco más." 
      },
      { 
        q: "¿Qué cortes de carne son los mejores para la parrilla?", 
        a: "Los clásicos son el vacío, la tira de asado, el matambre y la entraña. Para algo económico, la falda es ideal." 
      },
      { 
        q: "¿Cómo calculo las achuras para una reunión?", 
        a: "Calculá 1 chorizo y media morcilla por persona como base estándar." 
      },
      { 
        q: "¿Cuál es el orden para poner la carne en la parrilla?", 
        a: "Primero los cortes con hueso a fuego lento, luego las achuras y al final los cortes finos a fuego fuerte." 
      }
    ],
    relacionados: [
      { nombre: "Gastos Compartidos", link: "/utiles/gastos-compartidos" },
      { nombre: "Calculadora de Bebidas", link: "/utiles/bebidas" },
      { nombre: "Calculadora de IVA", link: "/finanzas/porcentaje" }
    ]
  },
  "iva": {
    faqs: [
      { q: "¿Cómo calcular el IVA?", a: "Multiplicá el neto por 1.21 para sumarlo, o dividí el total por 1.21 para extraerlo." }
    ],
    relacionados: [
      { nombre: "Asado", link: "/utiles/asado" }
    ]
  }
};