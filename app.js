const records = {
  dhrupad: {
    title: "Dhrupad: the morning alap",
    category: "HINDUSTANI / VOICE",
    place: "DARBHANGA, BIHAR",
    tradition: "Hindustani classical",
    note: "Raga, breath and resonance",
    description: "Dhrupad is among the oldest forms of Hindustani classical vocal music. Its unhurried alap introduces a raga one note at a time, giving the listener room to hear its shape.",
    storyTeaser: "Hear the raga take shape before rhythm enters.",
    story: "A dhrupad alap begins without a fixed beat. The singer unfolds the raga phrase by phrase over the tanpura drone, letting breath, pitch and silence establish its character before the composition begins."
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
    description: "Baul musicians carry songs of spiritual seeking through Bengal. Their performances bring together voice, poetry and instruments such as the ektara, with knowledge passed through living practice.",
    storyTeaser: "A traveling repertoire joins poetry, voice and ektara.",
    story: "Baul songs are carried through oral teaching, performance and personal interpretation. Voice, verse and instruments such as the ektara meet in songs of spiritual seeking; each lineage and performer brings a different emphasis."
  },
  khayal: {
    title: "Khayal: a raga in motion",
    category: "HINDUSTANI / VOICE",
    place: "JAIPUR GHARANA, RAJASTHAN",
    tradition: "Hindustani classical",
    note: "Improvisation and gharana lineages",
    description: "Khayal performers shape a composition through improvisation, ornament and rhythmic play. Each gharana carries distinct approaches, taught through close listening and long apprenticeship.",
    storyTeaser: "A composed bandish becomes a conversation with the raga.",
    story: "Khayal returns to a composed bandish while the singer develops new phrases around it. Improvisation, ornament and rhythmic play keep each performance responsive to the raga, the accompanists and the moment."
  },
  lavani: {
    title: "Lavani: rhythm in movement",
    category: "FOLK / PERFORMANCE",
    place: "MAHARASHTRA",
    tradition: "Lavani",
    note: "Poetry, performance and dholki rhythm",
    description: "Lavani brings together expressive poetry, song and dance, often driven by the dholki. Its performance histories reflect changing communities, stages and social contexts.",
    storyTeaser: "Poetry and dholki rhythm meet in a dramatic dance form.",
    story: "Lavani places sung poetry in close conversation with the dholki. Performers shape its wit, energy and gesture for different settings, from tamasha stages to contemporary performances across Maharashtra."
  },
  nadaswaram: {
    title: "Nadaswaram: music for a threshold",
    category: "CARNATIC / INSTRUMENT",
    place: "TAMIL NADU",
    tradition: "Temple and ceremonial music",
    note: "Wind instrument craft and ritual life",
    description: "The nadaswaram is a double-reed wind instrument heard in ceremonial and temple settings across South India. Its powerful voice is shaped by the player's breath, technique and the making of the instrument."
  },
  "srikantan-photo": {
    title: "R. K. Srikantan in concert",
    category: "CARNATIC / ARCHIVAL PHOTO",
    place: "KARNATAKA",
    tradition: "Carnatic classical",
    note: "Vocal, violin, mridangam and ghatam",
    description: "A 2006 archival photograph of Dr. R. K. Srikantan performing with his son R. S. Ramakanth on vocal support, violinist S. Sheshagiri Rao, mridangam artist T. S. Chandrashekhar and ghatam artist S. Srishyla.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:R_k_srikantan_carnatic_concert.jpg"
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
  ghatam: {
    title: "Ghatam: clay in the rhythm",
    category: "CARNATIC / PERCUSSION",
    place: "VEMULAWADA, TELANGANA",
    tradition: "Carnatic percussion",
    note: "Earthenware pot / hand percussion",
    description: "The ghatam is a tuned earthenware pot played with the hands. This photo documents a ghatam performance during the Shivarathri festival at Raja Rajeswara Temple in Vemulawada.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Ghatam_Performance_in_Shivarathri_Festival_at_Raja_Rajeswara_Temple,_Vemulawada_(04.03.2019).jpg"
  },
  sarangi: {
    title: "Sarangi: a voice in bowed strings",
    category: "HINDUSTANI / BOWED STRINGS",
    place: "NORTH INDIA",
    tradition: "Hindustani classical",
    note: "Bowed strings / vocal expression",
    description: "The sarangi is a short-necked bowed string instrument used in Hindustani music. Its sliding notes and rich timbre are often compared to the human voice.",
    imageCredit: "https://commons.wikimedia.org/wiki/File:Dilli_Haat_Sarangi_Player.jpg"
  },
  bihu: {
    title: "Bihu: songs of the spring",
    category: "FOLK / SEASONAL SONG",
    place: "ASSAM",
    tradition: "Assamese Bihu folk music",
    note: "Dhol, pepa and seasonal song",
    description: "Bihu music accompanies seasonal celebrations in Assam. Its songs and dance bring together community, rhythm and instruments such as the dhol and pepa.",
    storyTeaser: "Dhol and pepa call a community into the spring celebration.",
    story: "Bihu songs accompany seasonal gatherings in Assam. Dhol, pepa, voice and dance help mark the celebration, while local song repertoires carry the words, humor and memories of each community."
  },
  pandavani: {
    title: "Pandavani: an epic carried in song",
    category: "FOLK / ORAL EPIC",
    place: "CHHATTISGARH",
    tradition: "Pandavani narrative singing",
    note: "Mahabharata stories and tambura",
    description: "Pandavani is a narrative singing tradition associated with Chhattisgarh. Performers recount episodes from the Mahabharata through expressive storytelling and song.",
    storyTeaser: "An epic unfolds through sung narration, gesture and tambura.",
    story: "Pandavani performers retell episodes from the Mahabharata through song and spoken narration. Gesture, rhythm and tambura support a story that can shift in detail and emphasis with each telling."
  },
  manganiyar: {
    title: "Manganiyar: songs of the desert",
    category: "FOLK / COMMUNITY REPERTOIRE",
    place: "WESTERN RAJASTHAN",
    tradition: "Rajasthani folk music",
    note: "Songs, memory and musician lineages",
    description: "Manganiyar musicians of western Rajasthan carry a rich repertoire of celebratory and devotional songs, passed through generations of performers.",
    storyTeaser: "Wedding and devotional repertoires preserve community memory.",
    story: "This archive includes Manganiyar performances in both community and festival settings. Listening with the setting in mind helps connect the songs to the musicians, hosts and occasions that give them meaning."
  },
  powada: {
    title: "Powada: ballads in a bold voice",
    category: "FOLK / NARRATIVE SONG",
    place: "MAHARASHTRA",
    tradition: "Marathi Powada",
    note: "Ballad singing by the shahir",
    description: "Powada is a Marathi narrative ballad tradition performed by a shahir. Its dramatic songs carry stories and memories through a distinctive vocal style.",
    storyTeaser: "A shahir turns Marathi history and memory into sung narrative.",
    story: "Powada is a Marathi ballad form built around narrative singing. The shahir's delivery gives the story its pace and force, linking performance with local history and shared memory."
  },
  rasiya: {
    title: "Rasiya: songs from Braj",
    category: "FOLK / SONG",
    place: "BRAJ REGION, UTTAR PRADESH",
    tradition: "Braj folk music",
    note: "Folk poetry and festive gatherings",
    description: "Rasiya songs are associated with Braj poetry and festive gatherings. Their melodies and lyrics carry local language, devotion and social memory.",
    storyTeaser: "Braj verse and melody pass between festive gatherings.",
    story: "Rasiya songs draw on Braj language and poetry, and are heard in festive and devotional settings. Familiar verses invite singers and listeners to share a repertoire across generations."
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
const favoriteStorageKey = "swarasetu-favorites";
let favorites = new Set();

try {
  const savedFavorites = JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
  if (Array.isArray(savedFavorites)) favorites = new Set(savedFavorites.filter((favoriteId) => typeof favoriteId === "string"));
} catch {
  favorites = new Set();
}

function updateFavoriteCount() {
  document.querySelector("#favorite-count").textContent = String(favorites.size);
}

for (const card of cards) {
  const title = card.querySelector("h3").textContent.trim();
  const recordId = card.querySelector("[data-record]")?.dataset.record;
  const record = records[recordId];
  const favoriteId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const favoriteButton = document.createElement("button");
  card.dataset.favoriteId = favoriteId;
  favoriteButton.className = "favorite-toggle";
  favoriteButton.type = "button";
  favoriteButton.title = `Save ${title} to favorites`;
  favoriteButton.setAttribute("aria-label", `Save ${title} to favorites`);

  function renderFavoriteButton() {
    const isFavorite = favorites.has(favoriteId);
    favoriteButton.textContent = isFavorite ? "★" : "☆";
    favoriteButton.title = `${isFavorite ? "Remove" : "Save"} ${title} ${isFavorite ? "from" : "to"} favorites`;
    favoriteButton.setAttribute("aria-label", favoriteButton.title);
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
  }

  favoriteButton.addEventListener("click", () => {
    if (favorites.has(favoriteId)) favorites.delete(favoriteId);
    else favorites.add(favoriteId);

    try {
      localStorage.setItem(favoriteStorageKey, JSON.stringify([...favorites]));
    } catch {
      // Favorites still work for this page session when browser storage is unavailable.
    }

    renderFavoriteButton();
    updateFavoriteCount();
    if (activeCollection === "favorites") filterRecords();
  });

  renderFavoriteButton();
  card.querySelector(".record-meta").append(favoriteButton);

  if (card.dataset.collection === "songs" && record?.storyTeaser) {
    card.classList.add("song-card");
    const storyTeaser = document.createElement("p");
    storyTeaser.className = "story-teaser";
    const storyLabel = document.createElement("span");
    storyLabel.className = "story-teaser-label";
    storyLabel.textContent = "STORY NOTE";
    storyTeaser.append(storyLabel, document.createTextNode(record.storyTeaser));
    const openButton = card.querySelector(".record-open");
    if (openButton) card.insertBefore(storyTeaser, openButton);
  }
}

updateFavoriteCount();

function filterRecords() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const matchesTradition = activeFilter === "all" || card.dataset.tradition === activeFilter;
    const matchesCollection = activeCollection === "all" || (activeCollection === "favorites"
      ? favorites.has(card.dataset.favoriteId)
      : card.dataset.collection === activeCollection);
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
    const storyPanel = document.querySelector("#dialog-story");
    storyPanel.hidden = !record.story;
    document.querySelector("#dialog-story-text").textContent = record.story || "";
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
const trackName = document.querySelector("#player-track-name");
const queueList = document.querySelector("#audio-queue");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration = document.querySelector("#player-duration");
const playerSeek = document.querySelector("#player-seek");
const playerVolume = document.querySelector("#player-volume");
const playerToggle = document.querySelector("#player-toggle");
const playerPrevious = document.querySelector("#player-previous");
const playerNext = document.querySelector("#player-next");
const audioTracks = [];
let currentTrackIndex = -1;

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function setPlayerButtonState(isPlaying) {
  playerToggle.textContent = isPlaying ? "Ⅱ" : "▶";
  playerToggle.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
  playerToggle.title = isPlaying ? "Pause" : "Play";
}

function renderAudioQueue() {
  queueList.replaceChildren();
  audioTracks.forEach((track, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-current", String(index === currentTrackIndex));
    button.setAttribute("aria-label", `Play ${track.file.name}`);
    button.append(document.createTextNode(track.file.name));
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    button.append(number);
    button.addEventListener("click", () => selectAudioTrack(index, true));
    item.append(button);
    queueList.append(item);
  });
}

function updateAudioProgress() {
  const duration = audioPreview.duration;
  const currentTime = audioPreview.currentTime || 0;
  playerCurrentTime.textContent = formatAudioTime(currentTime);
  playerDuration.textContent = formatAudioTime(duration);
  playerSeek.value = Number.isFinite(duration) && duration > 0
    ? String(Math.round((currentTime / duration) * 1000))
    : "0";
}

function selectAudioTrack(index, autoplay) {
  if (index < 0 || index >= audioTracks.length) return;
  currentTrackIndex = index;
  audioPreview.src = audioTracks[index].url;
  audioPreview.load();
  trackName.textContent = audioTracks[index].file.name;
  fileName.textContent = `${audioTracks.length} track${audioTracks.length === 1 ? "" : "s"} in queue`;
  playerToggle.disabled = false;
  playerPrevious.disabled = false;
  playerNext.disabled = false;
  playerSeek.disabled = false;
  setPlayerButtonState(false);
  renderAudioQueue();
  updateAudioProgress();
  if (autoplay) audioPreview.play().catch(() => {
    fileName.textContent = "Track ready. Press play when the browser is ready.";
  });
}

audioInput.addEventListener("change", () => {
  const selectedFiles = [...audioInput.files].filter((file) => file.type.startsWith("audio/"));
  for (const file of selectedFiles) {
    audioTracks.push({ file, url: URL.createObjectURL(file) });
  }
  if (selectedFiles.length === 0) return;
  if (currentTrackIndex === -1) selectAudioTrack(0, false);
  else {
    fileName.textContent = `${audioTracks.length} tracks in queue`;
    renderAudioQueue();
  }
  audioInput.value = "";
});

playerToggle.addEventListener("click", () => {
  if (currentTrackIndex < 0) return;
  if (audioPreview.paused) audioPreview.play().catch(() => {
    fileName.textContent = "This file could not be played by the browser.";
  });
  else audioPreview.pause();
});

playerPrevious.addEventListener("click", () => {
  if (currentTrackIndex < 0) return;
  if (audioPreview.currentTime > 3) audioPreview.currentTime = 0;
  else selectAudioTrack(Math.max(0, currentTrackIndex - 1), true);
});

playerNext.addEventListener("click", () => {
  if (currentTrackIndex < audioTracks.length - 1) selectAudioTrack(currentTrackIndex + 1, true);
});

playerSeek.addEventListener("input", () => {
  if (Number.isFinite(audioPreview.duration) && audioPreview.duration > 0) {
    audioPreview.currentTime = (Number(playerSeek.value) / 1000) * audioPreview.duration;
  }
});

playerVolume.addEventListener("input", () => {
  audioPreview.volume = Number(playerVolume.value);
});

audioPreview.volume = Number(playerVolume.value);
audioPreview.addEventListener("loadedmetadata", updateAudioProgress);
audioPreview.addEventListener("timeupdate", updateAudioProgress);
audioPreview.addEventListener("play", () => setPlayerButtonState(true));
audioPreview.addEventListener("pause", () => setPlayerButtonState(false));
audioPreview.addEventListener("ended", () => {
  if (currentTrackIndex < audioTracks.length - 1) selectAudioTrack(currentTrackIndex + 1, true);
  else setPlayerButtonState(false);
});

window.addEventListener("beforeunload", () => {
  audioTracks.forEach((track) => URL.revokeObjectURL(track.url));
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

const heritageReel = document.querySelector("#heritage-reel");
if (heritageReel) {
  const reelClips = [
    { title: "Manganiyar wedding", src: "https://archive.org/download/dni.ncaa.RS-056-VHS/RS-056-VHS.mp4" },
    { title: "Langa wedding songs", src: "https://archive.org/download/dni.ncaa.RS-655-MDV/RS-655-MDV.mp4" },
    { title: "Tilonia folk festival", src: "https://archive.org/download/dni.ncaa.RS-244-MDV/RS-244-MDV.mp4" }
  ];
  const reelStatus = document.querySelector("#reel-status");
  const reelProgress = document.querySelector("#reel-progress");
  let reelClipIndex = 0;
  let reelSwitching = false;
  let reelComplete = false;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  }

  function updateReelProgress() {
    const totalSeconds = Math.min(300, reelClipIndex * 100 + Math.min(100, heritageReel.currentTime || 0));
    reelProgress.value = totalSeconds;
    reelStatus.textContent = reelComplete
      ? "Reel complete · 5:00"
      : `Part ${reelClipIndex + 1} of 3 · ${reelClips[reelClipIndex].title} · ${formatTime(totalSeconds)} / 5:00`;
  }

  function loadReelClip(index, resumePlayback) {
    reelClipIndex = index;
    reelSwitching = true;
    reelStatus.textContent = `Loading part ${index + 1} of 3 · ${reelClips[index].title}`;
    heritageReel.addEventListener("loadedmetadata", () => {
      reelSwitching = false;
      updateReelProgress();
      if (resumePlayback) heritageReel.play().catch(() => {
        reelStatus.textContent = `Part ${index + 1} ready · press play to continue`;
      });
    }, { once: true });
    heritageReel.src = reelClips[index].src;
    heritageReel.load();
  }

  heritageReel.addEventListener("timeupdate", () => {
    if (reelSwitching || reelComplete) return;
    updateReelProgress();
    if (heritageReel.currentTime < 100) return;
    if (reelClipIndex === reelClips.length - 1) {
      reelComplete = true;
      heritageReel.pause();
      heritageReel.currentTime = 100;
      reelProgress.value = 300;
      updateReelProgress();
      return;
    }
    loadReelClip(reelClipIndex + 1, !heritageReel.paused);
  });

  document.querySelector("#reel-restart").addEventListener("click", () => {
    reelComplete = false;
    loadReelClip(0, true);
  });
  heritageReel.addEventListener("error", () => {
    reelSwitching = false;
    reelStatus.textContent = "A source video could not load. Use the source links below.";
  });
}