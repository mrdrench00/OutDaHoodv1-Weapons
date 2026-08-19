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
    "TAN 1911",
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
    "G45 CUSTOM",
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
    "G27 GEN5 SWITCH",
  ],
  "T3": [
    "RED DRAG ARP",
    "KRISS VECTOR",
    "SEMI-300 BLK CUSTOM",
    "SEMI-DRACO PISTOL",
    "G40 GEN4 INCOGNITO",
    "SEMI-MICRO DRACO",
    "AR15 CUSTOM",
    "BLUE GLOCK SWITCH",
  ],
  "T4": [
    "ILLEGAL MICRO DRACO",
    "4 INCH ARP FULL AUTOMATIC",
    "4 INCH ARP BINARY TRIGGER",
    "AR-15",
    "RED DRAG M4A1",
    "BLACK SCAR",
    "DESERET MK18",
    "H&K P30L",
  ],
};

let selectedWeaponTier = "T1";
let selectedDrugTier = "T1";

const weaponResult = document.getElementById("weaponResult");
const drugResult = document.getElementById("drugResult");
const factionResult = document.getElementById("factionResult");

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showResult(el, text) {
  el.textContent = text;
  el.classList.add("show");
}

document.querySelectorAll(".tier-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tier-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedWeaponTier = btn.dataset.tier;
  });
});

document.querySelectorAll(".drug-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".drug-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDrugTier = btn.dataset.tier;
  });
});

document.getElementById("spinWeapon").addEventListener("click", () => {
  const list = weapons[selectedWeaponTier];
  if (!list || list.length === 0) {
    showResult(weaponResult, "No weapons found for this tier.");
    return;
  }
  const w = pickRandom(list);
  showResult(weaponResult, `Tier ${selectedWeaponTier} → ${w}`);
});

document.getElementById("spinDrugs").addEventListener("click", () => {
  let min, max;
  switch (selectedDrugTier) {
    case "T1":
      min = 50; max = 100;
      break;
    case "T1.5":
      min = 75; max = 130;
      break;
    case "T2":
      min = 100; max = 180;
      break;
    case "T3":
      min = 150; max = 220;
      break;
    case "T4":
      min = 200; max = 300;
      break;
    default:
      min = 50; max = 100;
  }
  const amount = Math.floor(Math.random() * (max - min + 1)) + min;
  showResult(drugResult, `Tier ${selectedDrugTier} → ${amount} drugs`);
});

document.getElementById("spinFaction").addEventListener("click", () => {
  const faction = document.getElementById("faction").value;
  const tierKeys = Object.keys(weapons);
  const randomTier = pickRandom(tierKeys);
  const w = pickRandom(weapons[randomTier]);

  let label;
  switch (faction) {
    case "hood": label = "Hood Gang"; break;
    case "cartel": label = "Cartel"; break;
    case "police": label = "Police"; break;
    default: label = "Custom Faction"; break;
  }

  showResult(
    factionResult,
    `${label} drop → Tier ${randomTier} | ${w}`
  );
});

// set defaults active
document.querySelector('.tier-btn[data-tier="T1"]').classList.add("active");
document.querySelector('.drug-btn[data-tier="T1"]').classList.add("active");

