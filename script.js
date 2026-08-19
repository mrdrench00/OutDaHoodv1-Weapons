// -------------------------------
// Tier Selection
// -------------------------------

let selectedWeaponTier = "T1";

document.querySelectorAll(".tier-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".tier-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedWeaponTier = card.dataset.tier;
  });
});

// -------------------------------
// Weapon Lists (Your Tiers)
// -------------------------------

const weapons = {
  "T1": [
    "G17",
    "G17 GEN3",
    "G19 GEN4",
    "PSA DAGGER",
    "G17 GEN3",
    "G17 GEN5",
    "GLOCK 21",
    "GLOCK 41",
    "FN Five-seveN",
    "TAN G19",
    "TAN 1911"
  ],

  "T1.5": [
    "ILLEGAL GLOCK 17",
    "TEC 9 W STRAP",
    "RUGER SR40",
    "MG GLOCK",
    "GLOCK BEAM SWITCH",
    "MIDAS GLOCK",
    "G19 FDE GEN4",
    "G19X CUSTOM",
    "G45 CUSTOM"
  ],

  "T2": [
    "LB TAN ARP",
    "BLACK ARP",
    "TAN ARP",
    "SEMI-3 INCH ARP CUSTOM TAN",
    "FN 509",
    "G17 SAI SWITCH",
    "G43X SWITCH",
    "G40 SWITCH CUSTOM",
    "G40 GEN4 INCOGNITO",
    "G40 CAMO SWITCH",
    "SEMI-4 INCH ARP BLUE",
    "G20 GEN5 SWITCH",
    "G23 GEN5 SWITCH",
    "G27 GEN5 SWITCH"
  ],

  "T3": [
    "RED DRAG ARP",
    "KRISS VECTOR",
    "SEMI-300 BLK CUSTOM",
    "SEMI-DRACO PISTOL",
    "G40 GEN4 INCOGNITO",
    "SEMI-MICRO DRACO",
    "AR15 CUSTOM",
    "BLUE GLOCK SWITCH"
  ],

  "T4": [
    "ILLEGAL MICRO DRACO",
    "4 INCH ARP FULL AUTOMATIC",
    "4 INCH ARP BINARY TRIGGER",
    "AR-15",
    "RED DRAG M4A1",
    "BLACK SCAR",
    "DESERET MK18",
    "H&K P30L"
  ]
};

// -------------------------------
// Helper: Format Weapon Filename
// -------------------------------

function formatWeaponFilename(name) {
  return name
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/-/g, "_")
    .replace(/\./g, "")
    + ".png";
}

// -------------------------------
// Spin Button → 4 Random Weapons
// -------------------------------

document.getElementById("spinWeapon").addEventListener("click", () => {
  const list = weapons[selectedWeaponTier];

  if (!list || list.length === 0) {
    alert("No weapons found for this tier.");
    return;
  }

  // Pick 4 random weapons
  const picks = [];
  for (let i = 0; i < 4; i++) {
    picks.push(list[Math.floor(Math.random() * list.length)]);
  }

  const resultsDiv = document.getElementById("weaponResults");
  resultsDiv.innerHTML = ""; // Clear old results

  picks.forEach(weapon => {
    const filename = formatWeaponFilename(weapon);

    const card = document.createElement("div");
    card.className = "weapon-card";

    card.innerHTML = `
      <img src="icons/weapons/${filename}" alt="${weapon}">
      <h3>${weapon}</h3>
    `;

    resultsDiv.appendChild(card);

    // Animation
    setTimeout(() => card.classList.add("show"), 50);
  });
});

