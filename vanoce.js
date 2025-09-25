// --- Přidání kategorie Vánoce ---
if (!categories.includes("Vánoce")) {
  categories.push("Vánoce");
  createCategoryButtons();
}

// --- Definice Vánočních balíčků ---
const vanoceBalicky = [
  { id: "vanoce_pes1", name: "Vánoční balíček<br> PES", image: "vanoce/stene.jpg", number: 1 },
  { id: "vanoce_pes2", name: "Vánoční balíček<br> PES", image: "vanoce/pes1.jpg", number: 2 },
  { id: "vanoce_pes3", name: "Vánoční balíček<br> PES", image: "vanoce/pes2.jpg", number: 3 },
  { id: "vanoce_pes4", name: "Vánoční balíček<br> PES", image: "vanoce/pes3.jpg", number: 4 },
  { id: "vanoce_kocka1", name: "Vánoční balíček<br> KOČKA", image: "vanoce/kocka1.jpg", number: 1 },
  { id: "vanoce_kocka2", name: "Vánoční balíček<br> KOČKA", image: "vanoce/kocka2.jpg", number: 2 },
  { id: "vanoce_hlodavec1", name: "Vánoční balíček<br> HLODAVEC", image: "vanoce/krecek.jpg", number: 1 },
  { id: "vanoce_ptak1", name: "Vánoční balíček<br> PTÁK", image: "vanoce/ptaci.jpg", number: 1 }
];

// --- Uložení / načtení ---
function loadBalicek(id) {
  const data = localStorage.getItem("balicek_" + id);
  return data ? JSON.parse(data) : { eans: [] };
}
function saveBalicek(id, eans) {
  localStorage.setItem("balicek_" + id, JSON.stringify({ eans }));
}

// --- Karta balíčku ---
function vytvorKartu(b, target) {
  const ulozeny = loadBalicek(b.id);

  const itemDiv = document.createElement("div");
  itemDiv.className = "item";

  const card = document.createElement("div");
  card.className = "card";

  // --- Přední strana ---
  const front = document.createElement("div");
  front.className = "front";
  front.innerHTML = `
    <button class="edit-btn">✎</button>
    <div class="front-spacer"></div>
    <img src="${b.image}" alt="${b.name}" />
    <div class="item-name">${b.name.replace(/<br>/g,'<br>')}</div>
    <div class="item-number">${b.number}</div>
  `;

  // --- Zadní strana ---
  const back = document.createElement("div");
  back.className = "back";
  const qrDiv = document.createElement("div");
  qrDiv.className = "qrcode";
  back.appendChild(qrDiv);

  function renderQR() {
    qrDiv.innerHTML = "";
    if (ulozeny.eans.length) {
      new QRCode(qrDiv, {
        text: ulozeny.eans.join(","),
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      qrDiv.innerHTML = "<p>Žádné EANy</p>";
    }
  }
  renderQR();

  card.appendChild(front);
  card.appendChild(back);
  itemDiv.appendChild(card);
  target.appendChild(itemDiv);

  // --- Otočení ---
  let flipped = false;
  itemDiv.addEventListener("click", e => {
    if (!e.target.classList.contains("edit-btn") && e.target.tagName.toLowerCase() !== "input") {
      flipped = !flipped;
      itemDiv.classList.toggle("flipped", flipped);
    }
  });

  // --- Editace ---
  front.querySelector(".edit-btn").addEventListener("click", e => {
    e.stopPropagation();
    const existForm = front.querySelector(".balicek-form");
    if (existForm) existForm.remove();

    const formDiv = document.createElement("div");
    formDiv.className = "balicek-form";

    const table = document.createElement("table");
    table.innerHTML = `<thead><tr><th>EAN</th></tr></thead>`;
    const tbody = document.createElement("tbody");

    const inputs = [];
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement("tr");

      const tdEAN = document.createElement("td");
      const inputEAN = document.createElement("input");
      inputEAN.type = "text";
      inputEAN.value = ulozeny.eans[i] || "";
      tdEAN.appendChild(inputEAN);
      tr.appendChild(tdEAN);

      inputs.push(inputEAN);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    formDiv.appendChild(table);

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾 Uložit";
    saveBtn.style.marginTop = "10px";
    formDiv.appendChild(saveBtn);

    front.appendChild(formDiv);

    saveBtn.addEventListener("click", ev => {
      ev.stopPropagation();
      const eans = inputs.map(inp => inp.value.trim()).filter(v => v);
      saveBalicek(b.id, eans);
      ulozeny.eans = eans;
      renderQR();
      formDiv.remove();
    });
  });
}

// --- Render Vánoce ---
function renderVanoce() {
  if (activeCategory !== "Vánoce") return;
  container.innerHTML = "";
  vanoceBalicky.forEach(b => vytvorKartu(b, container));
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