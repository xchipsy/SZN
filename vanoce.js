// --- Přidání kategorie Vánoce ---
if (!categories.includes("Vánoce")) {
  categories.push("Vánoce");
  createCategoryButtons();
}

// --- Definice Vánočních balíčků ---
const vanoceBalicky = [
  { id: "vanoce_pes1", name: "Vánoční balíček", type: "PES", image: "vanoce/stene.jpg", number: 1 },
  { id: "vanoce_pes2", name: "Vánoční balíček", type: "PES", image: "vanoce/pes03.jpg", number: 2 },
  { id: "vanoce_pes3", name: "Vánoční balíček", type: "PES", image: "vanoce/pes04.jpg", number: 3 },
  { id: "vanoce_pes4", name: "Vánoční balíček", type: "PES", image: "vanoce/pes02.jpg", number: 4 },
  { id: "vanoce_pes6", name: "Vánoční balíček", type: "PES", image: "vanoce/pes01.jpg", number: 5 },

  { id: "vanoce_kocka1", name: "Vánoční balíček", type: "KOČKA", image: "vanoce/kocka5.jpg", number: 1 },
  { id: "vanoce_kocka2", name: "Vánoční balíček", type: "KOČKA", image: "vanoce/kocka3.jpg", number: 2 },
  { id: "vanoce_kocka3", name: "Vánoční balíček", type: "KOČKA", image: "vanoce/kocka1.jpg", number: 3 },
  { id: "vanoce_kocka4", name: "Vánoční balíček", type: "KOČKA", image: "vanoce/kocka4.jpg", number: 4 },
  { id: "vanoce_kocka5", name: "Vánoční balíček", type: "KOČKA", image: "vanoce/kocka2.jpg", number: 5 },

  { id: "vanoce_hlodavec1", name: "Vánoční balíček", type: "HLODAVEC", image: "vanoce/krecek.jpg", number: 1 },
  { id: "vanoce_hlodavec2", name: "Vánoční balíček", type: "HLODAVEC", image: "vanoce/hlodavec.jpg", number: 2 },

  { id: "vanoce_ptak1", name: "Vánoční balíček", type: "PTÁK", image: "vanoce/ptaci.jpg", number: 1 },
  { id: "vanoce_ptak2", name: "Vánoční balíček", type: "PTÁK", image: "vanoce/ptaci2.jpg", number: 2 }
];

// --- Uložení / načtení ---
function loadBalicek(id) {
  const data = localStorage.getItem("balicek_" + id);
  return data ? JSON.parse(data) : { eans: [], instock: true };
}
function saveBalicek(id, eans, instock = true) {
  localStorage.setItem("balicek_" + id, JSON.stringify({ eans, instock }));
}

// --- Načtení dat z data.json ---
let dataJsonMap = {};
fetch("data.json")
  .then(resp => resp.json())
  .then(data => {
    data.forEach(item => {
      const id = item.kod?.trim();
      const ean = item.ean ? String(item.ean) : "";
      const name = item.popis || "";
      if (id) dataJsonMap[id] = { ean, name };
    });
  })
  .catch(err => console.error("Chyba při načítání data.json:", err));

// --- Modal QR kódů ---
function showQRModal(ulozenaData, b) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-content";

  const title = document.createElement("div");
  title.className = "modal-title";
  title.textContent = `${b.name} ${b.type} ${b.number}`;
  modalDiv.appendChild(title);

  const validEans = (ulozenaData || []).filter(item => item.ean && item.ean.trim() !== "");

  if (!validEans.length) {
    const p = document.createElement("p");
    p.textContent = "Žádná data";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    modalDiv.appendChild(p);
  } else {
    const qrContainer = document.createElement("div");
    qrContainer.className = "vanoce-qr-container";

    validEans.forEach(item => {
      const qrBox = document.createElement("div");
      qrBox.className = "vanoce-qr-box";
      new QRCode(qrBox, {
        text: item.ean,
        width: 100,
        height: 100,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
      });
      qrContainer.appendChild(qrBox);
    });
    modalDiv.appendChild(qrContainer);
  }

  overlay.appendChild(modalDiv);
  document.body.appendChild(overlay);

  overlay.addEventListener("click", () => overlay.remove());
  modalDiv.addEventListener("click", e => e.stopPropagation());
}

// --- Karta balíčku ---
function vytvorKartu(b, target) {
  const ulozeny = loadBalicek(b.id);

  const itemDiv = document.createElement("div");
  itemDiv.className = "item balicek-item";
  itemDiv.dataset.stock = ulozeny.instock ? "instock" : "outstock";

  const card = document.createElement("div");
  card.className = "card";

  const front = document.createElement("div");
  front.className = "front";
  front.innerHTML = `
    <button class="toggle-stock ${ulozeny.instock ? "instock" : "outstock"}">
      ${ulozeny.instock ? "✓" : "✗"}
    </button>
    <div class="front-spacer"></div>
    <img src="${b.image}" alt="${b.name}" />
    <div class="item-name">
      <span>${b.name}</span>
      ${b.type ? `<span class="item-type">${b.type}</span>` : ""}
    </div>
    <div class="item-number">${b.number}</div>
    <button class="edit-btn">✎</button>
  `;
  card.appendChild(front);
  itemDiv.appendChild(card);
  target.appendChild(itemDiv);

  // --- Kliknutí na kartu otevře QR modal ---
  itemDiv.addEventListener("click", e => {
    if (!e.target.classList.contains("edit-btn") && !e.target.classList.contains("toggle-stock")) {
      showQRModal(ulozeny.eans, b);
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
    title.textContent = `${b.name} ${b.type} ${b.number}`;
    modalDiv.appendChild(title);

    const balicekForm = document.createElement("div");
    balicekForm.className = "balicek-form";

    const ulozenaData = ulozeny.eans || [];

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.className = "balicek-row";

      const inputId = document.createElement("input");
      inputId.type = "text";
      inputId.placeholder = "ID";
      inputId.className = "id";

      const inputEan = document.createElement("input");
      inputEan.type = "text";
      inputEan.placeholder = "EAN";
      inputEan.className = "ean";

      const inputName = document.createElement("input");
      inputName.type = "text";
      inputName.placeholder = "Název";
      inputName.readOnly = true;
      inputName.className = "name";

      // --- Naplnění hodnot
      if (ulozenaData[i]) {
        inputId.value = ulozenaData[i].id || "";
        inputEan.value = ulozenaData[i].ean || "";
        inputName.value = ulozenaData[i].name || "";
      }

      // --- Změna ID ---
      inputId.addEventListener("input", () => {
        const val = inputId.value.trim();

        if (!val) {
          inputEan.value = "";
          inputName.value = "";
          return;
        }

        if (dataJsonMap[val]) {
          inputEan.value = dataJsonMap[val].ean || "";
          inputName.value = dataJsonMap[val].name || "";
        } else {
          inputEan.value = "";
          inputName.value = "";
        }
      });

      row.appendChild(inputId);
      row.appendChild(inputEan);
      row.appendChild(inputName);
      balicekForm.appendChild(row);
    }

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾 Uložit";
    saveBtn.addEventListener("click", ev => {
      ev.stopPropagation();
      const eans = Array.from(balicekForm.querySelectorAll(".balicek-row")).map(row => {
        const id = row.querySelector("input.id").value.trim();
        const ean = row.querySelector("input.ean").value.trim();
        const name = row.querySelector("input.name").value.trim();
        return id || ean || name ? { id, ean, name } : null;
      }).filter(v => v !== null);

      ulozeny.eans = eans;
      saveBalicek(b.id, eans, ulozeny.instock);
      overlay.remove();
    });

    balicekForm.appendChild(saveBtn);
    modalDiv.appendChild(balicekForm);
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




