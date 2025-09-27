// --- Přidání kategorie Vánoce ---
if (!categories.includes("Vánoce")) {
  categories.push("Vánoce");
  createCategoryButtons();
}

// --- Definice Vánočních balíčků ---
const vanoceBalicky = [
  { id: "vanoce_pes1", name: "Vánoční balíček<span> PES</span>", image: "vanoce/stene.jpg", number: 1 },
  { id: "vanoce_pes2", name: "Vánoční balíček PES", image: "vanoce/pes03.jpg", number: 2 },
  { id: "vanoce_pes3", name: "Vánoční balíček PES", image: "vanoce/pes04.jpg", number: 3 },
  { id: "vanoce_pes4", name: "Vánoční balíček PES", image: "vanoce/pes02.jpg", number: 4 },
  { id: "vanoce_pes5", name: "Vánoční balíček PES", image: "vanoce/pes01.jpg", number: 5 },

  { id: "vanoce_kocka1", name: "Vánoční balíček KOČKA", image: "vanoce/kocka5.jpg", number: 1 },
  { id: "vanoce_kocka2", name: "Vánoční balíček KOČKA", image: "vanoce/kocka3.jpg", number: 2 },
  { id: "vanoce_kocka3", name: "Vánoční balíček KOČKA", image: "vanoce/kocka1.jpg", number: 3 },
  { id: "vanoce_kocka4", name: "Vánoční balíček KOČKA", image: "vanoce/kocka4.jpg", number: 4 },
  { id: "vanoce_kocka5", name: "Vánoční balíček KOČKA", image: "vanoce/kocka2.jpg", number: 5 },

  { id: "vanoce_hlodavec1", name: "Vánoční balíček HLODAVEC", image: "vanoce/krecek.jpg", number: 1 },
  { id: "vanoce_hlodavec2", name: "Vánoční balíček HLODAVEC", image: "vanoce/hlodavec.jpg", number: 2 },
  { id: "vanoce_ptak1", name: "Vánoční balíček PTÁK", image: "vanoce/ptaci.jpg", number: 1 },
  { id: "vanoce_ptak2", name: "Vánoční balíček PTÁK", image: "vanoce/ptaci2.jpg", number: 2 }
];

// --- Uložení / načtení ---
function loadBalicek(id) {
  const data = localStorage.getItem("balicek_" + id);
  return data ? JSON.parse(data) : { eans: [], instock: true };
}
function saveBalicek(id, eans, instock = true) {
  localStorage.setItem("balicek_" + id, JSON.stringify({ eans, instock }));
}

// --- Karta balíčku ---
function vytvorKartu(b, target) {
  const ulozeny = loadBalicek(b.id);

  const itemDiv = document.createElement("div");
  itemDiv.className = "item balicek-item";
  itemDiv.dataset.stock = ulozeny.instock ? "instock" : "outstock";

  const card = document.createElement("div");
  card.className = "card";

// --- Přední strana ---
const front = document.createElement("div");
front.className = "front";
front.innerHTML = `
  <button class="toggle-stock ${ulozeny.instock ? "instock" : "outstock"}">${ulozeny.instock ? "✓" : "✗"}</button>
  <div class="front-spacer"></div>
  <img src="${b.image}" alt="${b.name}" />
  <div class="item-name">${b.name}</div>
  <div class="item-number">${b.number}</div>
  <button class="edit-btn">✎</button>
`;

  card.appendChild(front);
  itemDiv.appendChild(card);
  target.appendChild(itemDiv);

  // --- Funkce pro modal s QR kódy ---
  function showQRModal(eans) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modalDiv = document.createElement("div");
    modalDiv.className = "modal-content";

    const title = document.createElement("div");
    title.className = "modal-title";
    title.textContent = `${b.name} ${b.number}`;
    modalDiv.appendChild(title);

    if (!eans.length) {
      const p = document.createElement("p");
      p.textContent = "Žádné EANy";
      modalDiv.appendChild(p);
    } else {
      const qrContainer = document.createElement("div");
      qrContainer.className = "vanoce-qr-container";
      eans.forEach(ean => {
        const qrBox = document.createElement("div");
        qrBox.className = "vanoce-qr-box";
        new QRCode(qrBox, {
          text: ean,
          width: 100,
          height: 100,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        qrContainer.appendChild(qrBox);
      });
      modalDiv.appendChild(qrContainer);
    }

    overlay.appendChild(modalDiv);
    document.body.appendChild(overlay);

    // Kliknutí mimo modal zavře overlay
    overlay.addEventListener("click", () => overlay.remove());
    modalDiv.addEventListener("click", e => e.stopPropagation());
  }

  // --- Kliknutí na kartu otevře QR modal ---
  itemDiv.addEventListener("click", e => {
    if (!e.target.classList.contains("edit-btn") && !e.target.classList.contains("toggle-stock")) {
      showQRModal(ulozeny.eans);
    }
  });

  // --- Toggle skladem/neskladem ---
  const toggleBtn = front.querySelector(".toggle-stock");
  toggleBtn.addEventListener("click", e => {
    e.stopPropagation();
    ulozeny.instock = !ulozeny.instock;
    toggleBtn.textContent = ulozeny.instock ? "✓" : "✗";
    toggleBtn.classList.toggle("instock", ulozeny.instock);
    toggleBtn.classList.toggle("outstock", !ulozeny.instock);
    itemDiv.dataset.stock = ulozeny.instock ? "instock" : "outstock";
    saveBalicek(b.id, ulozeny.eans, ulozeny.instock);

    if (document.getElementById("filter-instock").checked) {
      itemDiv.style.display = ulozeny.instock ? "" : "none";
    }
  });

  // --- Editace ---
  front.querySelector(".edit-btn").addEventListener("click", e => {
    e.stopPropagation();
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modalDiv = document.createElement("div");
    modalDiv.className = "modal-content";

    const title = document.createElement("div");
    title.className = "modal-title";
    title.textContent = `${b.name} ${b.number}`;
    modalDiv.appendChild(title);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const inputs = [];
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "EAN";
      input.value = ulozeny.eans[i] || "";
      td.appendChild(input);
      tr.appendChild(td);
      tbody.appendChild(tr);
      inputs.push(input);
    }
    table.appendChild(tbody);
    modalDiv.appendChild(table);

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾 Uložit";
    saveBtn.addEventListener("click", ev => {
      ev.stopPropagation();
      const eans = inputs.map(inp => inp.value.trim()).filter(v => v);
      ulozeny.eans = eans;
      saveBalicek(b.id, eans, ulozeny.instock);
      overlay.remove();
    });
    modalDiv.appendChild(saveBtn);

    overlay.appendChild(modalDiv);
    document.body.appendChild(overlay);
  });
}

// --- Render Vánoce ---
function renderVanoce() {
  if (activeCategory !== "Vánoce") return;
  container.innerHTML = "";
  const onlyInStock = document.getElementById("filter-instock").checked;
  vanoceBalicky.forEach(b => {
    const ulozeny = loadBalicek(b.id);
    if (onlyInStock && !ulozeny.instock) return;
    vytvorKartu(b, container);
  });
}

// --- Přepíšeme render ---
const originalRender = render;
render = function() {
  originalRender();
  renderVanoce();
};

// --- Pokud je Vánoce aktivní při načtení ---
if (activeCategory === "Vánoce") {
  renderVanoce();
}

// --- Checkbox Pouze skladem reaguje okamžitě ---
document.getElementById("filter-instock").addEventListener("change", renderVanoce);