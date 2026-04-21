// ============================================================
//  CST310 — JavaScript Fundamentals
//  Week 1: Variables, Data Types & the Browser Environment
//  File: app.js
// ============================================================

// ── PART B: Declare one product using const and let ─────────
// 'const' is used for values that will NOT change after assignment.
// 'let'   is used for values that MAY change (e.g., stock status).
// 'var'   is the old-style declaration — it has function scope
//         instead of block scope and can lead to unpredictable bugs.
//         Modern JavaScript developers avoid var and prefer const/let.

const productName = "Air Classic Sneakers"; // const: the name won't change
const price       = 89.99;                  // const: the price is fixed for now
let   inStock     = true;                   // let:   stock status can change
const category    = "Footwear";             // const: category won't change

// ── Console Output ───────────────────────────────────────────
// Log each variable with a clear label so the output is readable.
console.log("Product Name:", productName);  // string
console.log("Price:       ", price);        // number
console.log("In Stock:    ", inStock);      // boolean
console.log("Category:    ", category);     // string

// ── Render console output into the page (visual demo) ────────
// This renders the same output you see in DevTools
// directly into the on-screen console box.
window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("console-output");
  if (!output) return;

  const lines = [
    { label: "Product Name:", value: `"${productName}"`, type: "str"  },
    { label: "Price:       ", value: price,               type: "num"  },
    { label: "In Stock:    ", value: inStock,              type: "bool" },
    { label: "Category:    ", value: `"${category}"`,     type: "str"  },
  ];

  lines.forEach(({ label, value, type }) => {
    const line = document.createElement("div");
    line.className = "console-line";
    line.innerHTML =
      `<span class="console-log-label">console.log</span>` +
      `(<span class="console-key">"${label}"</span>, ` +
      `<span class="console-${type}">${value}</span>)`;
    output.appendChild(line);
  });
});