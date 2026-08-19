let selectedTier = "T1";

document.querySelectorAll(".tier-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tier-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTier = btn.dataset.tier;
  });
});

// MATCHED TO YOUR CURRENT RENAMED FILES
const weapons = {
  "T1": [
    "g17.png",
    "g17_gen3.png",
    "g19_fde_gen4.png",
    "fn509.png",
    "fn_five_seven.png",
    "glock_41.png",
    "lb_tan_arp.png",
    "t1911.png"
  ],

  "T1.5": [
    "illegal_glock_17.png",
    "tec9s.png",
    "sr40.png",
    "mg_glock.png",
    "glock_beam_switch.png",
    "midas_glock.png",
    "g19x_custom.png",
    "g45_custom.png"
  ],

  "T2": [
    "black_arp.png",
    "tan_arp.png",
    "g17_custom.png",
    "g43x_switch.png",
    "g40_switch_custom.png",
    "g40_gen4_incognito.png",
    "g40_camo_switch.png",
    "g20_gen5_switch.png",
    "g22_gen5_switch.png",
    "g23_gen5_switch.png",
    "g27_gen5_switch.png",
    "rm3_inch_custom.png",
    "rm4_inch_arp.png",
    "rm4_inch_full_auto.png"
  ],

  "T3": [
    "red_arp.png",
    "kriss_vector.png",
    "dm_k18.png",
    "micro_draco.png",
    "ar15_custom.png",
    "blue_glock_switch.png"
  ],

  "T4": [
    "illegal_micro_draco.png",
    "ar15.png",
    "red_m4a1.png",
    "black_scar.png",
    "dmk18.png",
    "p30l.png"
  ]
};

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
      <h3>${file.replace(".png", "").replace(/_/g, " ").toUpperCase()}</h3>
    `;
    resultsDiv.appendChild(card);
    setTimeout(() => card.classList.add("show"), 50);
  });
});

