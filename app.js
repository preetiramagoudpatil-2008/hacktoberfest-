const records = {
  dhrupad: {
    title: "Dhrupad: the morning alap",
    category: "HINDUSTANI / VOICE",
    place: "DARBHANGA, BIHAR",
    tradition: "Hindustani classical",
    note: "Raga, breath and resonance",
    description: "Dhrupad is among the oldest forms of Hindustani classical vocal music. Its unhurried alap introduces a raga one note at a time, giving the listener room to hear its shape."
  },
  veena: {
    title: "Veena: strings of Thanjavur",
    category: "CARNATIC / INSTRUMENT",
    place: "THANJAVUR, TAMIL NADU",
    tradition: "Carnatic classical",
    note: "Instrument making and transmission",
    description: "The Saraswati veena is closely associated with Carnatic music. Its sound carries the touch, tuning and interpretation developed across generations of musicians and instrument makers."
  },
  baul: {
    title: "Baul songs: a road without walls",
    category: "FOLK / VOICE",
    place: "BENGAL",
    tradition: "Baul music",
    note: "Song, philosophy and wandering traditions",
    description: "Baul musicians carry songs of spiritual seeking through Bengal. Their performances bring together voice, poetry and instruments such as the ektara, with knowledge passed through living practice."
  },
  khayal: {
    title: "Khayal: a raga in motion",
    category: "HINDUSTANI / VOICE",
    place: "JAIPUR GHARANA, RAJASTHAN",
    tradition: "Hindustani classical",
    note: "Improvisation and gharana lineages",
    description: "Khayal performers shape a composition through improvisation, ornament and rhythmic play. Each gharana carries distinct approaches, taught through close listening and long apprenticeship."
  },
  lavani: {
    title: "Lavani: rhythm in movement",
    category: "FOLK / PERFORMANCE",
    place: "MAHARASHTRA",
    tradition: "Lavani",
    note: "Poetry, performance and dholki rhythm",
    description: "Lavani brings together expressive poetry, song and dance, often driven by the dholki. Its performance histories reflect changing communities, stages and social contexts."
  },
  nadaswaram: {
    title: "Nadaswaram: music for a threshold",
    category: "CARNATIC / INSTRUMENT",
    place: "TAMIL NADU",
    tradition: "Temple and ceremonial music",
    note: "Wind instrument craft and ritual life",
    description: "The nadaswaram is a double-reed wind instrument heard in ceremonial and temple settings across South India. Its powerful voice is shaped by the player's breath, technique and the making of the instrument."
  },
  sitar: {
    title: "Sitar: strings of North India",
    category: "HINDUSTANI / STRINGS",
    place: "INDIA / 18TH-CENTURY OBJECT",
    tradition: "Hindustani classical",
    note: "Metropolitan Museum of Art, object 1994.63",
    description: "This 18th-century sitar from the Metropolitan Museum of Art collection offers a tangible entry point into the instrument's craft and history.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Sitar_MET_259651.jpg"
  },
  tabla: {
    title: "Tabla: a language of rhythm",
    category: "HINDUSTANI / PERCUSSION",
    place: "INDIA",
    tradition: "Hindustani percussion",
    note: "Dayan and bayan / hand percussion",
    description: "The tabla is a pair of hand drums: the smaller dayan and the larger bayan. Different strokes produce distinct tones, forming a rhythmic vocabulary heard across many musical settings.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Tabla,_musical_instrument..JPG"
  },
  bansuri: {
    title: "Bansuri: breath through bamboo",
    category: "HINDUSTANI / WIND",
    place: "INDIA",
    tradition: "Hindustani classical",
    note: "Bamboo flute / breath and phrasing",
    description: "The bansuri is a bamboo transverse flute used in Indian music. The player shapes its sound through breath, fingering and subtle changes in pitch.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Bansuri_bamboo_flute_23inch.jpg"
  },
  mridangam: {
    title: "Mridangam: the pulse of a performance",
    category: "CARNATIC / PERCUSSION",
    place: "KARNATAKA",
    tradition: "Carnatic percussion",
    note: "Rhythm, performance and instrument craft",
    description: "The mridangam is a double-headed barrel drum central to Carnatic music. This image documents a performance at Bhoganandeeshwara Temple in Karnataka.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Man_playing_Mridangam_in_Bhoganandeeshwara_Temple.jpg"
  },
  bihu: {
    title: "Bihu: songs of the spring",
    category: "FOLK / SEASONAL SONG",
    place: "ASSAM",
    tradition: "Assamese Bihu folk music",
    note: "Dhol, pepa and seasonal song",
    description: "Bihu music accompanies seasonal celebrations in Assam. Its songs and dance bring together community, rhythm and instruments such as the dhol and pepa."
  },
  pandavani: {
    title: "Pandavani: an epic carried in song",
    category: "FOLK / ORAL EPIC",
    place: "CHHATTISGARH",
    tradition: "Pandavani narrative singing",
    note: "Mahabharata stories and tambura",
    description: "Pandavani is a narrative singing tradition associated with Chhattisgarh. Performers recount episodes from the Mahabharata through expressive storytelling and song."
  },
  manganiyar: {
    title: "Manganiyar: songs of the desert",
    category: "FOLK / COMMUNITY REPERTOIRE",
    place: "WESTERN RAJASTHAN",
    tradition: "Rajasthani folk music",
    note: "Songs, memory and musician lineages",
    description: "Manganiyar musicians of western Rajasthan carry a rich repertoire of celebratory and devotional songs, passed through generations of performers."
  },
  powada: {
    title: "Powada: ballads in a bold voice",
    category: "FOLK / NARRATIVE SONG",
    place: "MAHARASHTRA",
    tradition: "Marathi Powada",
    note: "Ballad singing by the shahir",
    description: "Powada is a Marathi narrative ballad tradition performed by a shahir. Its dramatic songs carry stories and memories through a distinctive vocal style."
  },
  rasiya: {
    title: "Rasiya: songs from Braj",
    category: "FOLK / SONG",
    place: "BRAJ REGION, UTTAR PRADESH",
    tradition: "Braj folk music",
    note: "Folk poetry and festive gatherings",
    description: "Rasiya songs are associated with Braj poetry and festive gatherings. Their melodies and lyrics carry local language, devotion and social memory."
  }
};

const cards = [...document.querySelectorAll(".record-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const collectionButtons = [...document.querySelectorAll(".collection-tab")];
const searchInput = document.querySelector("#record-search");
const emptyState = document.querySelector("#empty-state");
const recordDialog = document.querySelector("#record-dialog");
let activeFilter = "all";
let activeCollection = "all";

function filterRecords() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const matchesTradition = activeFilter === "all" || card.dataset.tradition === activeFilter;
    const matchesCollection = activeCollection === "all" || card.dataset.collection === activeCollection;
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLowerCase();
    const matchesQuery = searchableText.includes(query);
    const isVisible = matchesTradition && matchesCollection && matchesQuery;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    filterRecords();
  });
});

searchInput.addEventListener("input", filterRecords);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !recordDialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelectorAll("[data-record]").forEach((button) => {
  button.addEventListener("click", () => {
    const record = records[button.dataset.record];
    if (!record) return;
    document.querySelector("#dialog-category").textContent = record.category;
    document.querySelector("#dialog-title").textContent = record.title;
    document.querySelector("#dialog-place").textContent = record.place;
    document.querySelector("#dialog-description").textContent = record.description;
    document.querySelector("#dialog-tradition").textContent = record.tradition;
    document.querySelector("#dialog-note").textContent = record.note;
    const imageCredit = document.querySelector("#dialog-image-credit");
    imageCredit.hidden = !record.imageCredit;
    if (record.imageCredit) imageCredit.href = record.imageCredit;
    recordDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => recordDialog.close());
document.querySelector("#dialog-listen").addEventListener("click", () => recordDialog.close());
recordDialog.addEventListener("click", (event) => {
  if (event.target === recordDialog) recordDialog.close();
});

const audioInput = document.querySelector("#audio-file");
const audioPreview = document.querySelector("#audio-preview");
const fileName = document.querySelector("#file-name");
let audioObjectUrl;

audioInput.addEventListener("change", () => {
  const [file] = audioInput.files;
  if (!file) return;
  if (audioObjectUrl) URL.revokeObjectURL(audioObjectUrl);
  audioObjectUrl = URL.createObjectURL(file);
  audioPreview.src = audioObjectUrl;
  audioPreview.hidden = false;
  fileName.textContent = file.name;
});

window.addEventListener("beforeunload", () => {
  if (audioObjectUrl) URL.revokeObjectURL(audioObjectUrl);
});

collectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCollection = button.dataset.collection;
    collectionButtons.forEach((collectionButton) => {
      const isActive = collectionButton === button;
      collectionButton.classList.toggle("is-active", isActive);
      collectionButton.setAttribute("aria-pressed", String(isActive));
    });
    filterRecords();
  });
});