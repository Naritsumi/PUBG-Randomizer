const pubgCdn = "https://wstatic-prod.pubg.com/web/live";
const mapImage = (file) => `${pubgCdn}/main_fa53437/img/${file}.webp`;
const weaponImage = (slug) => `${pubgCdn}/static/game-info/weapons/images/viewer/img-weapons-${slug}.webp`;

const maps = [
  { id: "erangel", name: "Erangel", size: "8x8 km", terrain: "Soviet Era", tag: "ALPHA", color: "#6a7a4a", image: mapImage("590dba7") },
  { id: "miramar", name: "Miramar", size: "8x8 km", terrain: "Desert", tag: "MAP 2", color: "#c4a26a", image: mapImage("24a088e") },
  { id: "sanhok", name: "Sanhok", size: "4x4 km", terrain: "Jungle", tag: "MAP 3", color: "#4a6a3a", image: mapImage("ad22769") },
  { id: "karakin", name: "Karakin", size: "2x2 km", terrain: "N. African", tag: "MAP 4", color: "#b8965a", image: mapImage("c79a707") },
  { id: "paramo", name: "Paramo", size: "3x3 km", terrain: "Volcanic", tag: "MAP 5", color: "#7a4a3a", image: mapImage("b18244b") },
  { id: "taego", name: "Taego", size: "8x8 km", terrain: "Korean", tag: "MAP 6", color: "#7a8855", image: mapImage("19581ee") },
  { id: "deston", name: "Deston", size: "8x8 km", terrain: "Urban / Flooded", tag: "MAP 7", color: "#5a7080", image: mapImage("e2bdf1e") },
  { id: "vikendi", name: "Vikendi", size: "8x8 km", terrain: "Snow / Arctic", tag: "MAP 8", color: "#a8b8c0", image: mapImage("d1080a6") },
  { id: "rondo", name: "Rondo", size: "8x8 km", terrain: "Dual biomes", tag: "MAP 9", color: "#7b8061", image: mapImage("8dad1dc") },
];

const weapons = [
  { id: "akm", name: "AKM", cat: "AR", ammo: "7.62mm", image: weaponImage("akm") },
  { id: "m416", name: "M416", cat: "AR", ammo: "5.56mm", image: weaponImage("m416") },
  { id: "scarl", name: "SCAR-L", cat: "AR", ammo: "5.56mm", image: weaponImage("scar-l") },
  { id: "m16a4", name: "M16A4", cat: "AR", ammo: "5.56mm", image: weaponImage("m16a4") },
  { id: "beryl", name: "Beryl M762", cat: "AR", ammo: "7.62mm", image: weaponImage("beryl_m762") },
  { id: "g36c", name: "G36C", cat: "AR", ammo: "5.56mm", mapExclusive: ["karakin"], image: weaponImage("g36c") },
  { id: "mk47", name: "Mk47 Mutant", cat: "AR", ammo: "7.62mm", image: weaponImage("mk47_mutant") },
  { id: "qbz", name: "QBZ", cat: "AR", ammo: "5.56mm", mapExclusive: ["sanhok"], image: weaponImage("qbz95") },
  { id: "k2", name: "K2", cat: "AR", ammo: "5.56mm", mapExclusive: ["taego"], image: weaponImage("k2") },
  { id: "ace32", name: "ACE32", cat: "AR", ammo: "7.62mm", image: weaponImage("ace32") },
  { id: "famas", name: "FAMAS", cat: "AR", ammo: "5.56mm", image: weaponImage("famas_g2") },
  { id: "groza", name: "Groza", cat: "AR", ammo: "7.62mm", crateOnly: true, image: weaponImage("groza") },
  { id: "aug", name: "AUG A3", cat: "AR", ammo: "5.56mm", crateOnly: true, image: weaponImage("aug_a3") },
  { id: "sks", name: "SKS", cat: "DMR", ammo: "7.62mm", image: weaponImage("sks") },
  { id: "mini14", name: "Mini 14", cat: "DMR", ammo: "5.56mm", image: weaponImage("mini14") },
  { id: "vss", name: "VSS", cat: "DMR", ammo: "9mm", image: weaponImage("vss") },
  { id: "slr", name: "SLR", cat: "DMR", ammo: "7.62mm", image: weaponImage("slr") },
  { id: "qbu", name: "QBU", cat: "DMR", ammo: "5.56mm", mapExclusive: ["sanhok"], image: weaponImage("qbu88") },
  { id: "mk12", name: "Mk12", cat: "DMR", ammo: "5.56mm", image: weaponImage("mk12") },
  { id: "mk14", name: "Mk14 EBR", cat: "DMR", ammo: "7.62mm", crateOnly: true, image: weaponImage("mk14") },
  { id: "dragunov", name: "Dragunov", cat: "DMR", ammo: "7.62mm", mapExclusive: ["taego"], image: weaponImage("dragunov") },
  { id: "kar98", name: "Kar98k", cat: "SR", ammo: "7.62mm", image: weaponImage("kar98k") },
  { id: "m24", name: "M24", cat: "SR", ammo: "7.62mm", image: weaponImage("m24") },
  { id: "awm", name: "AWM", cat: "SR", ammo: ".300", crateOnly: true, image: weaponImage("awm") },
  { id: "win94", name: "Win94", cat: "SR", ammo: ".45", mapExclusive: ["miramar"], image: weaponImage("win94") },
  { id: "mosin", name: "Mosin Nagant", cat: "SR", ammo: "7.62mm", mapExclusive: ["erangel", "vikendi"], image: weaponImage("mosin_nagant") },
  { id: "lynx", name: "Lynx AMR", cat: "SR", ammo: ".50", mapExclusive: ["taego"], image: weaponImage("lynx_amr") },
  { id: "ump45", name: "UMP45", cat: "SMG", ammo: ".45", image: weaponImage("ump45") },
  { id: "vector", name: "Vector", cat: "SMG", ammo: "9mm", image: weaponImage("vector") },
  { id: "tommy", name: "Tommy Gun", cat: "SMG", ammo: ".45", image: weaponImage("tommy_gun") },
  { id: "uzi", name: "Micro UZI", cat: "SMG", ammo: "9mm", image: weaponImage("micro_uzi") },
  { id: "bizon", name: "PP-19 Bizon", cat: "SMG", ammo: "9mm", image: weaponImage("pp19_bizon") },
  { id: "mp5k", name: "MP5K", cat: "SMG", ammo: "9mm", mapExclusive: ["vikendi"], image: weaponImage("mp5k") },
  { id: "js9", name: "JS9", cat: "SMG", ammo: "9mm", mapExclusive: ["rondo"], image: weaponImage("js9") },
  { id: "p90", name: "P90", cat: "SMG", ammo: "5.7mm", crateOnly: true, image: weaponImage("p90") },
  { id: "s686", name: "S686", cat: "SG", ammo: "12-gauge", image: weaponImage("s686") },
  { id: "s1897", name: "S1897", cat: "SG", ammo: "12-gauge", image: weaponImage("s1897") },
  { id: "s12k", name: "S12K", cat: "SG", ammo: "12-gauge", image: weaponImage("s12k") },
  { id: "dbs", name: "DBS", cat: "SG", ammo: "12-gauge", image: weaponImage("dbs") },
  { id: "o12", name: "O12", cat: "SG", ammo: "12-gauge", mapExclusive: ["deston"], image: weaponImage("o12") },
  { id: "dp28", name: "DP-28", cat: "LMG", ammo: "7.62mm", image: weaponImage("dp28") },
  { id: "m249", name: "M249", cat: "LMG", ammo: "5.56mm", crateOnly: true, image: weaponImage("m249") },
  { id: "mg3", name: "MG3", cat: "LMG", ammo: "7.62mm", crateOnly: true, image: weaponImage("mg3") },
];

const catLabels = {
  AR: "ASSAULT RIFLE",
  DMR: "MARKSMAN",
  SR: "SNIPER",
  LMG: "LIGHT MG",
  SMG: "SMG",
  SG: "SHOTGUN",
};

const catColors = {
  AR: "#8a6a3a",
  DMR: "#6a5a3a",
  SR: "#5a5a5a",
  LMG: "#735a36",
  SMG: "#3f5e5c",
  SG: "#6e3d36",
};

const primaryCats = ["AR", "DMR", "SR", "LMG"];
const secondaryCats = ["SMG", "SG"];
const faceCount = 10;
const faceAngle = 360 / faceCount;
const caseItemWidth = 218;
const caseItemCount = 42;
const caseFinalIndex = 32;
const operatorProfiles = [
  {
    role: "Clutch ninja",
    note: "Silencioso, mira todo.",
    image: "assets/cats/cat-clutch-ninja.jpg",
  },
  {
    role: "IGL serio",
    note: "Callouts frios, mucho tilt.",
    image: "assets/cats/cat-igl-serio.jpg",
  },
  {
    role: "Relax",
    note: "Siempre detrás, siempre chill.",
    image: "assets/cats/cat-rush-relax.jpg",
  },
  {
    role: "Entry alerta",
    note: "Pánico, solo pánico.",
    image: "assets/cats/cat-entry-alerta.jpg",
  },
];

let selectedMapId = "erangel";
let selectedMode = "solo";
let currentSquadSize = 4;
let isSpinning = false;
let soloProfileIndex = 0;

const mapGrid = document.querySelector("#map-grid");
const selectedMapName = document.querySelector("#selected-map-name");
const squadMapNote = document.querySelector("#squad-map-note");
const mapSection = document.querySelector("#mapas");
const loadoutSection = document.querySelector("#loadouts");
const mapStepLink = document.querySelector("#map-step-link");
const loadoutStepLink = document.querySelector("#loadout-step-link");
const modeButtons = document.querySelector("#mode-buttons");
const squadSizeButtons = document.querySelector("#squad-size-buttons");
const squadSizeRow = document.querySelector("#squad-size-row");
const namePanel = document.querySelector("#name-panel");
const nameGrid = document.querySelector("#name-grid");
const poolSummary = document.querySelector("#pool-summary");
const results = document.querySelector("#results");
const randomizeButton = document.querySelector("#randomize-button");
const includeCrate = document.querySelector("#include-crate");

function getMap() {
  return maps.find((map) => map.id === selectedMapId) ?? maps[0];
}

function weaponPool(mapId, slot) {
  const cats = slot === "primary" ? primaryCats : secondaryCats;
  return weapons.filter((weapon) => {
    if (!cats.includes(weapon.cat)) return false;
    if (weapon.crateOnly && !includeCrate.checked) return false;
    if (weapon.mapExclusive && !weapon.mapExclusive.includes(mapId)) return false;
    return true;
  });
}

function pick(pool, used = new Set()) {
  const available = pool.filter((weapon) => !used.has(weapon.id));
  const source = available.length ? available : pool;
  return source[Math.floor(Math.random() * source.length)];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMaps() {
  mapGrid.innerHTML = maps.map((map) => `
    <button class="map-card ${map.id === selectedMapId ? "is-active" : ""}" type="button" data-map-id="${map.id}" style="--map-color: ${map.color}">
      <div class="map-art">
        <img src="${map.image}" alt="Mapa de ${map.name}" loading="lazy">
        <span class="map-tag">${map.tag}</span>
        <span class="map-size">${map.size}</span>
      </div>
      <div class="map-body">
        <strong>${map.name}</strong>
        <span class="map-meta">${map.size} . ${map.terrain}</span>
      </div>
    </button>
  `).join("");
}

function updateMapState() {
  const map = getMap();
  const primary = weaponPool(map.id, "primary");
  const secondary = weaponPool(map.id, "secondary");
  selectedMapName.textContent = map.name;
  squadMapNote.textContent = selectedMode === "solo" ? "Solo . Loadout individual" : `Squad . ${currentSquadSize} operativos`;
  poolSummary.textContent = selectedMode === "solo"
    ? `${primary.length} primarias y ${secondary.length} secundarias disponibles en ${map.name}. Animacion tipo caja.`
    : `${primary.length} primarias y ${secondary.length} secundarias disponibles en ${map.name}. Squad de ${currentSquadSize}.`;
  if (!isSpinning) {
    randomizeButton.textContent = selectedMode === "solo" ? "Abrir cajas" : "Randomizar todos";
  }
  renderMaps();
}

function getSavedNames() {
  return Array.from(nameGrid.querySelectorAll("input")).map((input) => input.value.trim());
}

function renderNameInputs() {
  const saved = getSavedNames();
  const count = selectedMode === "solo" ? 1 : currentSquadSize;
  nameGrid.classList.toggle("is-solo", selectedMode === "solo");
  nameGrid.innerHTML = Array.from({ length: count }).map((_, index) => `
    <label class="name-field">
      <span class="field-label">${selectedMode === "solo" ? "Operativo solo" : `Operativo ${String(index + 1).padStart(2, "0")}`}</span>
      <input id="player-${index + 1}" type="text" value="${escapeHtml(saved[index] || `Jugador ${index + 1}`)}" autocomplete="off">
      <span class="operator-dossier name-avatar">
        <span class="operator-portrait large" aria-hidden="true">
          <img src="${operatorProfiles[selectedMode === "solo" ? soloProfileIndex : index % operatorProfiles.length].image}" alt="">
        </span>
        <span class="dossier-text">
          <span class="dossier-kicker">TACTICAL AVATAR</span>
          <strong>${operatorProfiles[selectedMode === "solo" ? soloProfileIndex : index % operatorProfiles.length].role}</strong>
          <span class="dossier-note">${operatorProfiles[selectedMode === "solo" ? soloProfileIndex : index % operatorProfiles.length].note}</span>
        </span>
      </span>
    </label>
  `).join("");
  namePanel.classList.toggle("is-solo", selectedMode === "solo");
}

function getPlayers() {
  const inputs = Array.from(nameGrid.querySelectorAll("input"));
  return inputs.map((input, index) => input.value.trim() || `Jugador ${index + 1}`);
}

function weaponMark(weapon) {
  return `
    <div class="weapon-mark" style="--weapon-color: ${catColors[weapon.cat] || "#555"}">
      <img src="${weapon.image}" alt="${weapon.name}" loading="lazy" decoding="async">
    </div>
  `;
}

function faceTemplate(weapon, faceIndex) {
  return `
    <div class="dial-face" style="--face: ${faceIndex}">
      ${weaponMark(weapon)}
      <div class="weapon-text">
        <div class="weapon-name">${weapon.name}</div>
        <div class="weapon-meta">${catLabels[weapon.cat]} . ${weapon.ammo}</div>
      </div>
    </div>
  `;
}

function reelTemplate(label, pool, slot) {
  const faces = Array.from({ length: faceCount }).map((_, index) => faceTemplate(pick(pool), index)).join("");
  return `
    <div class="dial-reel" data-slot="${slot}">
      <div class="reel-top">
        <span class="reel-label">${label}</span>
        <span class="reel-code">CYLINDER-${faceCount}</span>
      </div>
      <div class="dial-window">
        <div class="dial-cylinder" data-cylinder>${faces}</div>
      </div>
    </div>
  `;
}

function horizontalFaceTemplate(weapon, index) {
  return `
    <div class="case-item" style="--case-index: ${index}">
      ${weaponMark(weapon)}
      <strong>${weapon.name}</strong>
      <span>${catLabels[weapon.cat]} . ${weapon.ammo}</span>
    </div>
  `;
}

function horizontalReelTemplate(label, pool, slot) {
  const strip = Array.from({ length: caseItemCount }).map((_, index) => horizontalFaceTemplate(pick(pool), index)).join("");
  return `
    <div class="case-reel" data-slot="${slot}">
      <div class="reel-top">
        <span class="reel-label">${label}</span>
        <span class="reel-code">CASE-DROP</span>
      </div>
      <div class="case-window">
        <div class="case-pointer" aria-hidden="true"></div>
        <div class="case-strip" data-case-strip>${strip}</div>
      </div>
    </div>
  `;
}

function renderCards() {
  const players = getPlayers();
  const map = getMap();
  const primary = weaponPool(map.id, "primary");
  const secondary = weaponPool(map.id, "secondary");

  if (!players.length) {
    results.innerHTML = `<div class="empty-state">Configura la squad para preparar los reels.</div>`;
    return;
  }

  results.classList.toggle("is-solo", selectedMode === "solo");
  results.innerHTML = players.map((player, index) => `
    <article class="loadout-card ${selectedMode === "solo" ? "solo-card" : ""}" data-player-index="${index}" data-player="${escapeHtml(player)}" data-map="${map.name}" data-avatar-image="${operatorProfiles[selectedMode === "solo" ? soloProfileIndex : index % operatorProfiles.length].image}" data-avatar-role="${operatorProfiles[selectedMode === "solo" ? soloProfileIndex : index % operatorProfiles.length].role}">
      <header class="loadout-head">
        <div class="operator">
          <h3>${escapeHtml(player)}</h3>
        </div>
        <div class="hud-tools">
          <div class="hud-line">OP: P${index + 1} . MAP: ${map.tag} . STATUS: IDLE</div>
          <button class="share-loadout-button" type="button" data-share-loadout disabled>Compartir</button>
        </div>
      </header>
      <div class="shell-layer" aria-hidden="true"></div>
      <div class="${selectedMode === "solo" ? "case-pair" : "reel-pair"}">
        ${selectedMode === "solo"
          ? `${horizontalReelTemplate("PRIMARY / MAIN", primary, "primary")}${horizontalReelTemplate("SECONDARY / CQB", secondary, "secondary")}`
          : `${reelTemplate("PRIMARY", primary, "primary")}${reelTemplate("SECONDARY", secondary, "secondary")}`}
      </div>
      <div class="locked-line">Esperando orden de randomizar.</div>
    </article>
  `).join("");
}

function setStepActive(hash) {
  document.querySelectorAll(".step-link").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
}

function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
  setStepActive(id);
}

function hideMapAndLoadoutStages() {
  mapSection.classList.add("is-hidden");
  loadoutSection.classList.add("is-hidden");
  mapStepLink.classList.add("is-hidden");
  loadoutStepLink.classList.add("is-hidden");
}

function hideLoadoutStage() {
  loadoutSection.classList.add("is-hidden");
  loadoutStepLink.classList.add("is-hidden");
}

function fillCylinder(cylinder, pool, finalWeapon = null) {
  const visibleFace = 0;
  cylinder.innerHTML = Array.from({ length: faceCount }).map((_, index) => {
    const weapon = finalWeapon && index === visibleFace ? finalWeapon : pick(pool);
    return faceTemplate(weapon, index);
  }).join("");
}

function renderShells(card) {
  const layer = card.querySelector(".shell-layer");
  if (!layer) return;
  layer.innerHTML = Array.from({ length: 18 }).map((_, index) => `
    <i style="--delay: ${index * 70}ms; --left: ${10 + Math.random() * 80}%; --drift: ${-30 + Math.random() * 60}px; --spin: ${360 + Math.random() * 900}deg;"></i>
  `).join("");
}

function fillCaseStrip(strip, pool, finalWeapon = null) {
  strip.innerHTML = Array.from({ length: caseItemCount }).map((_, index) => {
    const weapon = finalWeapon && index === caseFinalIndex ? finalWeapon : pick(pool);
    return horizontalFaceTemplate(weapon, index);
  }).join("");
}

function spinCaseReel(card, slot, finalWeapon, duration, delay = 0) {
  return new Promise((resolve) => {
    const reel = card.querySelector(`[data-slot="${slot}"]`);
    const windowEl = reel.querySelector(".case-window");
    const strip = reel.querySelector("[data-case-strip]");
    const pool = weaponPool(selectedMapId, slot);

    setTimeout(() => {
      fillCaseStrip(strip, pool, finalWeapon);
      strip.style.transition = "none";
      strip.style.transform = "translateX(0)";
      strip.getBoundingClientRect();
      const centerOffset = (windowEl.clientWidth - caseItemWidth) / 2;
      const targetOffset = (caseFinalIndex * caseItemWidth) - centerOffset;
      strip.style.transition = `transform ${duration}ms cubic-bezier(.08,.72,.12,1)`;
      strip.style.transform = `translateX(${-targetOffset}px)`;
      setTimeout(resolve, duration + 40);
    }, delay);
  });
}

function spinReel(card, slot, finalWeapon, duration, delay = 0) {
  return new Promise((resolve) => {
    const reel = card.querySelector(`[data-slot="${slot}"]`);
    const cylinder = reel.querySelector("[data-cylinder]");
    const pool = weaponPool(selectedMapId, slot);
    let raf = 0;
    let lastShuffle = 0;

    setTimeout(() => {
      const start = performance.now();
      const startRot = Number(cylinder.dataset.rotation || 0);
      const target = startRot - (6 + Math.random() * 2) * 360;

      function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const rotation = startRot + (target - startRot) * eased;
        cylinder.style.setProperty("--rotation", `${rotation}deg`);
        cylinder.dataset.rotation = String(rotation);

        if (now - lastShuffle > 120 && progress < .92) {
          fillCylinder(cylinder, pool);
          lastShuffle = now;
        }

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(raf);
          cylinder.style.setProperty("--rotation", "0deg");
          cylinder.dataset.rotation = "0";
          fillCylinder(cylinder, pool, finalWeapon);
          resolve();
        }
      }

      raf = requestAnimationFrame(tick);
    }, delay);
  });
}

function fireButton(button) {
  button.classList.remove("is-firing");
  window.requestAnimationFrame(() => button.classList.add("is-firing"));
  setTimeout(() => button.classList.remove("is-firing"), 320);
}

function loadCanvasImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }

    const image = new Image();
    if (/^https?:\/\//i.test(src)) {
      image.crossOrigin = "anonymous";
    }
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawShareText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = test;
    }
  });

  if (line) ctx.fillText(line, x, currentY);
}

async function renderLoadoutImage(card) {
  const width = 1080;
  const height = 620;
  const canvas = document.createElement("canvas");
  canvas.width = width * 2;
  canvas.height = height * 2;
  const ctx = canvas.getContext("2d");
  ctx.scale(2, 2);

  const player = card.dataset.player || "Jugador";
  const map = card.dataset.map || getMap().name;
  const primary = card.dataset.primaryName || "Sin primaria";
  const secondary = card.dataset.secondaryName || "Sin secundaria";
  const primaryAmmo = card.dataset.primaryAmmo || "";
  const secondaryAmmo = card.dataset.secondaryAmmo || "";
  const avatar = await loadCanvasImage(card.dataset.avatarImage);
  const primaryImage = await loadCanvasImage(card.dataset.primaryImage);
  const secondaryImage = await loadCanvasImage(card.dataset.secondaryImage);

  ctx.fillStyle = "#120c06";
  ctx.fillRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "rgba(255,136,0,.24)");
  gradient.addColorStop(.42, "rgba(255,136,0,.05)");
  gradient.addColorStop(1, "rgba(0,0,0,.15)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#ff8800";
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, width - 48, height - 48);
  ctx.strokeStyle = "rgba(255,136,0,.35)";
  ctx.lineWidth = 1;
  ctx.strokeRect(42, 42, width - 84, height - 84);

  ctx.fillStyle = "#ff8800";
  ctx.font = "700 20px Consolas, monospace";
  ctx.fillText("MI EXCEL . LOADOUT RANDOMIZER", 62, 82);
  ctx.fillStyle = "#e8e2cf";
  ctx.font = "900 56px Arial, sans-serif";
  drawShareText(ctx, player.toUpperCase(), 62, 142, 620, 58);
  ctx.fillStyle = "#a87d55";
  ctx.font = "700 18px Consolas, monospace";
  ctx.fillText(`MAPA . ${map.toUpperCase()}`, 62, 184);
  ctx.fillText(`OPERATIVO . ${card.dataset.avatarRole || "TACTICAL AVATAR"}`, 62, 214);

  ctx.save();
  ctx.beginPath();
  ctx.rect(740, 62, 260, 260);
  ctx.clip();
  if (avatar) {
    ctx.drawImage(avatar, 740, 62, 260, 260);
  } else {
    ctx.fillStyle = "#1c1610";
    ctx.fillRect(740, 62, 260, 260);
  }
  ctx.restore();
  ctx.strokeStyle = "rgba(255,136,0,.65)";
  ctx.lineWidth = 3;
  ctx.strokeRect(740, 62, 260, 260);

  const drawWeaponPanel = (label, name, ammo, image, y) => {
    ctx.fillStyle = "rgba(8, 6, 4, .74)";
    ctx.fillRect(62, y, 956, 138);
    ctx.strokeStyle = "rgba(255,136,0,.38)";
    ctx.lineWidth = 2;
    ctx.strokeRect(62, y, 956, 138);

    if (image) ctx.drawImage(image, 82, y + 16, 260, 106);
    ctx.fillStyle = "#ff8800";
    ctx.font = "700 18px Consolas, monospace";
    ctx.fillText(label, 378, y + 42);
    ctx.fillStyle = "#e8e2cf";
    ctx.font = "900 42px Arial, sans-serif";
    ctx.fillText(name, 378, y + 88);
    ctx.fillStyle = "#a87d55";
    ctx.font = "700 17px Consolas, monospace";
    ctx.fillText(ammo, 378, y + 116);
  };

  drawWeaponPanel("PRIMARY", primary, primaryAmmo, primaryImage, 346);
  drawWeaponPanel("SECONDARY", secondary, secondaryAmmo, secondaryImage, 496);

  return canvas;
}

async function shareLoadout(card, button) {
  if (!card || card.dataset.ready !== "true") return;

  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Generando...";

  try {
    const canvas = await renderLoadoutImage(card);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const fileName = `loadout-${(card.dataset.player || "jugador").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1200);
    button.textContent = "PNG guardado";
  } catch (error) {
    button.textContent = "Error";
  }

  setTimeout(() => {
    button.textContent = original;
    button.disabled = card.dataset.ready !== "true";
  }, 1600);
}

async function randomizeAll() {
  if (isSpinning) return;
  const cards = Array.from(results.querySelectorAll(".loadout-card"));
  if (!cards.length) {
    renderCards();
    return;
  }

  isSpinning = true;
  randomizeButton.disabled = true;
  randomizeButton.textContent = "Randomizando...";
  fireButton(randomizeButton);

  const primaryPool = weaponPool(selectedMapId, "primary");
  const secondaryPool = weaponPool(selectedMapId, "secondary");
  const used = new Set();

  const jobs = cards.map((card, index) => {
    const primary = pick(primaryPool, used);
    used.add(primary.id);
    const secondary = pick(secondaryPool, used);
    used.add(secondary.id);
    card.classList.add("is-shaking");
    card.classList.add("is-spinning");
    renderShells(card);
    card.querySelector(".hud-line").textContent = `OP: P${index + 1} . MAP: ${getMap().tag} . STATUS: ROLLING`;
    card.querySelector(".locked-line").innerHTML = `<strong>ROLLING</strong> . Esperando cierre de cilindros.`;

    setTimeout(() => card.classList.remove("is-shaking"), 420);

    const spinJobs = selectedMode === "solo"
      ? [
          spinCaseReel(card, "primary", primary, 3100, index * 120),
          spinCaseReel(card, "secondary", secondary, 2800, 650 + index * 120),
        ]
      : [
          spinReel(card, "primary", primary, 2800, index * 120),
          spinReel(card, "secondary", secondary, 2400, 600 + index * 120),
        ];

    return Promise.all(spinJobs).then(() => {
      card.querySelector(".hud-line").textContent = `OP: P${index + 1} . MAP: ${getMap().tag} . STATUS: READY`;
      card.querySelector(".locked-line").innerHTML = `<strong>LOCKED</strong> . ${primary.name} (${primary.ammo}) . ${secondary.name} (${secondary.ammo})`;
      card.dataset.loadout = `${card.querySelector(".operator h3").textContent}: ${primary.name} + ${secondary.name} (${getMap().name})`;
      card.dataset.primaryName = primary.name;
      card.dataset.primaryAmmo = primary.ammo;
      card.dataset.primaryImage = primary.image;
      card.dataset.secondaryName = secondary.name;
      card.dataset.secondaryAmmo = secondary.ammo;
      card.dataset.secondaryImage = secondary.image;
      card.dataset.ready = "true";
      card.querySelector("[data-share-loadout]").disabled = false;
      card.classList.remove("is-spinning");
    });
  });

  await Promise.all(jobs);
  isSpinning = false;
  randomizeButton.disabled = false;
  randomizeButton.textContent = selectedMode === "solo" ? "Abrir cajas" : "Randomizar todos";
}

mapGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-id]");
  if (!button) return;
  selectedMapId = button.dataset.mapId;
  updateMapState();
  hideLoadoutStage();
});

modeButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  selectedMode = button.dataset.mode;
  modeButtons.querySelectorAll("button").forEach((option) => {
    option.classList.toggle("is-active", option === button);
  });
  const isSquad = selectedMode === "squad";
  squadSizeRow.classList.toggle("is-hidden", !isSquad);
  namePanel.classList.add("is-hidden");
  hideMapAndLoadoutStages();
  renderNameInputs();
  updateMapState();
});

document.querySelector("#deploy-button").addEventListener("click", (event) => {
  fireButton(event.currentTarget);
  if (selectedMode === "solo") {
    soloProfileIndex = Math.floor(Math.random() * operatorProfiles.length);
  }
  renderNameInputs();
  namePanel.classList.remove("is-hidden");
  hideMapAndLoadoutStages();
  namePanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#to-maps-button").addEventListener("click", (event) => {
  fireButton(event.currentTarget);
  renderCards();
  mapSection.classList.remove("is-hidden");
  mapStepLink.classList.remove("is-hidden");
  hideLoadoutStage();
  scrollToSection("#mapas");
});

document.querySelector("#to-loadouts-button").addEventListener("click", (event) => {
  fireButton(event.currentTarget);
  renderCards();
  loadoutSection.classList.remove("is-hidden");
  loadoutStepLink.classList.remove("is-hidden");
  scrollToSection("#loadouts");
});

squadSizeButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-squad-size]");
  if (!button) return;
  const next = Number(button.dataset.squadSize);
  currentSquadSize = next;
  squadSizeButtons.querySelectorAll("button").forEach((option) => {
    option.classList.toggle("is-active", option === button);
  });
  hideMapAndLoadoutStages();
  renderNameInputs();
  updateMapState();
});

nameGrid.addEventListener("input", () => {
  hideMapAndLoadoutStages();
});

includeCrate.addEventListener("change", () => {
  updateMapState();
  if (!loadoutSection.classList.contains("is-hidden")) {
    renderCards();
  }
});

results.addEventListener("click", (event) => {
  const button = event.target.closest("[data-share-loadout]");
  if (!button) return;
  const card = button.closest(".loadout-card");
  shareLoadout(card, button);
});

randomizeButton.addEventListener("click", randomizeAll);

document.querySelectorAll(".step-link").forEach((link) => {
  link.addEventListener("click", () => setStepActive(link.getAttribute("href")));
});

renderMaps();
renderNameInputs();
updateMapState();
