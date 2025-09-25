// --- Přidání kategorie Vánoce ---
if (!categories.includes("Vánoce")) {
  categories.push("Vánoce");
  createCategoryButtons();
}

// --- Vykreslení Vánoční tabulky ---
function renderVanoce() {
  if (activeCategory !== "Vánoce") return;
  container.innerHTML = "";

  const formDiv = document.createElement("div");
  formDiv.className = "vanoce-form";

  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.innerHTML = `
    <thead>
      <tr>
        <th style="border:1px solid #ccc;padding:6px;">EAN</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  // 7 řádků
  const inputs = [];
  for (let i = 0; i < 7; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.style.border = "1px solid #ccc";
    td.style.padding = "4px";
    const inp = document.createElement("input");
    inp.type = "text";
    inp.style.width = "100%";
    inp.style.fontSize = "16px";
    td.appendChild(inp);
    tr.appendChild(td);
    tbody.appendChild(tr);
    inputs.push(inp);
  }

  formDiv.appendChild(table);

  // --- Volba oddělovače ---
  const separatorDiv = document.createElement("div");
  separatorDiv.style.marginTop = "10px";
  separatorDiv.style.display = "flex";
  separatorDiv.style.gap = "10px";
  separatorDiv.style.alignItems = "center";
  separatorDiv.innerHTML = `
    <span>Oddělovač EANů:</span>
    <label><input type="radio" name="ean-separator" value="," checked> Čárka</label>
    <label><input type="radio" name="ean-separator" value=";"> Středník</label>
    <label><input type="radio" name="ean-separator" value="\\n"> Nový řádek</label>
  `;
  formDiv.appendChild(separatorDiv);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 Uložit a vygenerovat QR";
  saveBtn.style.marginTop = "12px";
  formDiv.appendChild(saveBtn);

  const qrDiv = document.createElement("div");
  qrDiv.style.marginTop = "15px";
  formDiv.appendChild(qrDiv);

  saveBtn.addEventListener("click", () => {
    const eans = inputs.map(i => i.value.trim()).filter(v => v);
    if (!eans.length) {
      alert("Zadej aspoň jeden EAN.");
      return;
    }

    // zjistíme zvolený oddělovač
    const sep = document.querySelector('input[name="ean-separator"]:checked').value;
    let text = sep === "\\n" ? eans.join("\n") : eans.join(sep);

    qrDiv.innerHTML = "";
    new QRCode(qrDiv, {
      text: text,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });

  container.appendChild(formDiv);
}

// --- Přepíšeme render ---
const originalRender = render;
render = function () {
  originalRender();
  renderVanoce();
};

// --- Pokud je Vánoce aktivní při načtení ---
if (activeCategory === "Vánoce") {
  renderVanoce();
}