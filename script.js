let selectedTier = "T1";

// Tier selection
document.querySelectorAll(".tier-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tier-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTier = btn.dataset.tier;
  });
});

// YOUR REAL FILENAMES — EXACTLY AS THEY ARE IN YOUR REPO
const weapons = {
  "T1": [
    "WEAPON_RMG17GEN3.png",
    "WEAPON_RMG17.png",
    "WEAPON_RMG19FDEG.png",
    "WEAPON_RMPSADAG.png",
    "WEAPON_GLOCK21.png",
    "WEAPON_FN57.png",
    "WEAPON_TGLOCK19.png",
    "WEAPON_T1911.png"
  ],

  "T1.5": [
    "WEAPON_ILLGLOCK17.png",
    "WEAPON_TEC9S.png",
    "WEAPON_SR40.png",
    "WEAPON_MGGLOCK.png",
    "WEAPON_GLOCKBEAM.png",
    "WEAPON_MIDASGLOCK.png",
    "WEAPON_RMG19FDEG.png",
    "WEAPON_RMG19XCUS.png",
    "WEAPON_RMG45CUST.png"
  ],

  "T2": [
    "WEAPON_LBTARP.png",
    "WEAPON_BLACKARP.png",
    "WEAPON_TARP.png",
    "WEAPON_RM3INCHCU.png",
    "WEAPON_RMFN509.png",
    "WEAPON_RMG17CSTM.png",
    "WEAPON_RMG43XSWI.png",
    "WEAPON_RMG40CSTM.png",
    "WEAPON_RMG40INCO.png",
    "WEAPON_RMG40CAM.png",
    "WEAPON_RM4INCHAR.png",
    "WEAPON_RMG20GEN5.png",
    "WEAPON_RMG23GEN5.png",
    "WEAPON_RMG27GEN5.png"
  ],

  "T3": [
    "WEAPON_REDARP.png",
    "WEAPON_KRISSVECTOR.png",
    "WEAPON_RM300BLKC.png",
    "WEAPON_RMDRACOPI.png",
    "WEAPON_RMMICROD.png",
    "WEAPON_RMAR15CUST.png",
    "WEAPON_BLUEGLOCKS.png"
  ],

  "T4": [
    "WEAPON_RMILLEGALD.png",
    "WEAPON_RM4INCHFU.png",
    "WEAPON_RM4INCHAR.png",
    "WEAPON_RMAR15.png",
    "WEAPON_REDM4A1.png",
    "WEAPON_BLACKSCAR.png",
    "WEAPON_DMK18.png",
    "WEAPON_P30L.png"
  ]
};

// Spin button
document.getElementById("spinWeapon").addEventListener("click", () => {
  const list = weapons[selectedTier];
  const resultsDiv = document.getElementById("weaponResults");
  resultsDiv.innerHTML = "";

  const picks = [];
  for (let i = 0; i < 4; i++) {
    picks.push(list[Math.floor(Math.random() * list.length)]);
  }

  picks.forEach(file => {
    const card = document.createElement("div");
    card.className = "weapon-card";

    card.innerHTML = `
      <img src="icons/weapons/${file}" alt="${file}">
      <h3>${file.replace("WEAPON_", "").replace(".png", "")}</h3>
    `;

    resultsDiv.appendChild(card);
    setTimeout(() => card.classList.add("show"), 50);
  });
});

