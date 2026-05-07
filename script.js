const panels = {
  home: {
    kicker: "Tokyo Disneyland",
    title: "歡迎來到海底撈樂園",
    body: "把城堡、旋轉杯、甩麵秀和火鍋香氣放進同一天。城堡前的歡笑、鍋底光影與花車音樂，從入口開始一路展開。",
    meta: ["今日開園 09:00", "適合全家", "可購買一日票"],
    primary: "購買門票",
    secondary: "查看營運時間",
    primaryAction: "tickets",
    secondaryPanel: "hours"
  },
  attractions: {
    kicker: "Attractions",
    title: "遊樂設施",
    body: "從鍋底旋轉杯到兩座師父鬼屋，今天的主打設施都集中在城堡廣場周圍，適合先玩刺激、再看巡遊。",
    meta: ["3 項主打設施", "平均等候 20 分鐘", "身高限制依設施而定"],
    primary: "查看推薦路線",
    secondary: "加入今日行程"
  },
  entertainment: {
    kicker: "Entertainment",
    title: "娛樂表演",
    body: "甩麵師父會在主舞台定時開秀，夜間還有鍋氣燈光秀和角色見面會。",
    meta: ["甩麵秀 11:30", "角色見面 14:00", "夜間秀 19:40"],
    primary: "提醒我看表演",
    secondary: "加入今日行程"
  },
  dining: {
    kicker: "Dining",
    title: "餐飲",
    body: "園區餐飲以鍋底、點心和冰粉為主，支援線上候位與多人桌預約。",
    meta: ["線上候位", "素食選項", "兒童餐具"],
    primary: "預約用餐",
    secondary: "查看菜單"
  },
  shopping: {
    kicker: "Shopping",
    title: "商店",
    body: "可以帶走城堡造型湯勺、Hi 徽章、角色圍裙和限定鍋底禮盒。",
    meta: ["限定商品", "退稅櫃台", "宅配服務"],
    primary: "查看新品",
    secondary: "收藏商店"
  },
  tickets: {
    kicker: "Tickets",
    title: "票券資訊",
    body: "線上一日票可先選日期與人數，再把門票加入購物籃。",
    meta: ["成人 NT$3,000", "兒童 NT$1,200", "可改期一次"],
    primary: "線上購票",
    secondary: "票券說明",
    primaryAction: "tickets"
  },
  hours: {
    kicker: "Park Hours",
    title: "營運時間表",
    body: "今日營運時間為 09:00 至 21:00。花車遊行和夜間表演可能依天候調整。",
    meta: ["開園 09:00", "巡遊 16:30", "閉園 21:00"],
    primary: "同步到行事曆",
    secondary: "查看今日活動"
  },
  "rotating-cups": {
    kicker: "Hot Pot Rotating Cups",
    title: "旋轉鍋底",
    body: "坐進閃亮湯鍋造型旋轉杯，轉盤會隨著音樂加速，鍋底光影會在杯身裡流動。",
    meta: ["等候 15 分鐘", "每輪 3 分鐘", "親子友善"],
    primary: "加入排隊",
    secondary: "收藏設施"
  },
  "noodle-house": {
    kicker: "Noodle Master's Haunted House",
    title: "甩麵師父鬼屋",
    body: "穿過會飄出香氣的街巷，看師父用長麵條把淘氣幽靈甩回鍋邊。",
    meta: ["等候 25 分鐘", "輕微驚嚇", "室內設施"],
    primary: "預約入場",
    secondary: "查看故事"
  },
  "face-house": {
    kicker: "Face-Changing Master's Haunted House",
    title: "變臉師父鬼屋",
    body: "燈籠一亮，師父瞬間變臉。這座互動鬼屋會依隊伍掌聲改變演出節奏。",
    meta: ["等候 30 分鐘", "沉浸演出", "建議 7 歲以上"],
    primary: "預約入場",
    secondary: "查看故事"
  },
  parade: {
    kicker: "Haidilao Parade",
    title: "海底撈花車遊行",
    body: "熊貓廚師、鍋底花車和泡泡彩球會從城堡前廣場一路巡遊到主街。",
    meta: ["16:30 開始", "城堡前最佳視角", "約 18 分鐘"],
    primary: "設定提醒",
    secondary: "查看路線"
  },
  news: {
    kicker: "News",
    title: "最新消息",
    body: "本週限定開放鍋底巡遊拍照區，購票入園即可領取紀念貼紙。",
    meta: ["期間限定", "每日限量", "入口廣場領取"],
    primary: "查看活動",
    secondary: "分享消息"
  },
  services: {
    kicker: "Services",
    title: "服務設施",
    body: "園區提供置物櫃、親子休息室、失物招領、輪椅租借與餐飲候位協助。",
    meta: ["服務中心", "親子友善", "多語支援"],
    primary: "查看地圖",
    secondary: "聯絡服務台"
  },
  "premier-access": {
    kicker: "Disney Premier Access",
    title: "迪士尼尊享卡",
    body: "可為熱門設施與巡遊保留指定時段，讓今天的路線更順。",
    meta: ["指定時段", "熱門設施", "數量有限"],
    primary: "查看方案",
    secondary: "加入比較"
  }
};

const panel = document.querySelector("#infoPanel");
const panelTitle = document.querySelector("#panelTitle");
const panelKicker = document.querySelector("#panelKicker");
const panelBody = document.querySelector("#panelBody");
const panelMeta = document.querySelector("#panelMeta");
const panelPrimary = document.querySelector("#panelPrimary");
const panelSecondary = document.querySelector("#panelSecondary");
const panelStatus = document.querySelector("#panelStatus");
const ticketModal = document.querySelector("#ticketModal");
const visitDate = document.querySelector("#visitDate");
const adultCount = document.querySelector("#adultCount");
const childCount = document.querySelector("#childCount");
const ticketTotal = document.querySelector("#ticketTotal");
const ticketStatus = document.querySelector("#ticketStatus");

let activePanel = "home";
let adultTickets = 2;
let childTickets = 1;

function openPanel(key, updateHash = true) {
  const data = panels[key] || panels.home;
  activePanel = panels[key] ? key : "home";

  panelKicker.textContent = data.kicker;
  panelTitle.textContent = data.title;
  panelBody.textContent = data.body;
  panelMeta.innerHTML = data.meta
    .map((item) => `<span class="meta-chip">${item}</span>`)
    .join("");
  panelPrimary.textContent = data.primary;
  panelSecondary.textContent = data.secondary;
  panelStatus.textContent = "";
  panel.dataset.primaryAction = data.primaryAction || "";
  panel.dataset.secondaryPanel = data.secondaryPanel || "";
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");

  if (updateHash) {
    history.pushState({ panel: activePanel }, "", `#${activePanel}`);
  }
}

function closePanel() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
}

function openTickets() {
  closePanel();
  ticketStatus.textContent = "";
  ticketModal.classList.add("is-open");
  ticketModal.setAttribute("aria-hidden", "false");
  updateTicketTotal();
  window.setTimeout(() => visitDate.focus(), 40);
}

function closeTickets() {
  ticketModal.classList.remove("is-open");
  ticketModal.setAttribute("aria-hidden", "true");
}

function updateTicketTotal() {
  adultCount.textContent = adultTickets;
  childCount.textContent = childTickets;
  const total = adultTickets * 3000 + childTickets * 1200;
  ticketTotal.textContent = new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(total);
}

function setDefaultVisitDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const value = tomorrow.toISOString().slice(0, 10);
  visitDate.min = today.toISOString().slice(0, 10);
  visitDate.value = value;
}

document.querySelectorAll("[data-panel]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openPanel(link.dataset.panel);
  });
});

document.querySelectorAll("[data-ticket]").forEach((button) => {
  button.addEventListener("click", openTickets);
});

document.querySelector(".panel-close").addEventListener("click", closePanel);
document.querySelector(".ticket-close").addEventListener("click", closeTickets);

panelPrimary.addEventListener("click", () => {
  if (panel.dataset.primaryAction === "tickets") {
    openTickets();
    return;
  }

  panelStatus.textContent = `${panels[activePanel].title}已加入今日行程。`;
});

panelSecondary.addEventListener("click", () => {
  if (panel.dataset.secondaryPanel) {
    openPanel(panel.dataset.secondaryPanel);
    return;
  }

  panelStatus.textContent = `已收藏「${panels[activePanel].title}」。`;
});

document.querySelectorAll(".stepper").forEach((stepper) => {
  stepper.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const change = Number(button.dataset.change);
    if (stepper.dataset.stepper === "adult") {
      adultTickets = Math.max(0, Math.min(9, adultTickets + change));
    } else {
      childTickets = Math.max(0, Math.min(9, childTickets + change));
    }

    updateTicketTotal();
  });
});

document.querySelector(".ticket-card").addEventListener("submit", (event) => {
  event.preventDefault();
  ticketStatus.textContent = `已選好 ${adultTickets + childTickets} 張票，日期 ${visitDate.value}。`;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePanel();
    closeTickets();
  }
});

ticketModal.addEventListener("click", (event) => {
  if (event.target === ticketModal) {
    closeTickets();
  }
});

window.addEventListener("popstate", () => {
  const key = location.hash.replace("#", "");
  if (key && panels[key]) {
    openPanel(key, false);
  } else {
    closePanel();
  }
});

setDefaultVisitDate();

const initialPanel = location.hash.replace("#", "");
if (initialPanel && panels[initialPanel]) {
  openPanel(initialPanel, false);
}
