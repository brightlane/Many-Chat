import fs from "fs";

// =========================
// 🔗 AFFILIATE LINK
// =========================
const LINK = "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo";

// =========================
// 🧠 CONTENT CORE
// =========================
const topics = [
  "Instagram DM Automation",
  "ManyChat Funnel System",
  "AI Marketing Automation",
  "Lead Generation System",
  "Chatbot Conversion Strategy"
];

// =========================
// 🔥 VIRAL HOOKS
// =========================
const hooks = [
  "Most people are doing this WRONG on Instagram…",
  "This is why your DMs are not converting…",
  "Nobody talks about this automation strategy…",
  "You’re losing leads every single day…",
  "This system replaces manual marketing completely…"
];

// =========================
// ✍️ POST GENERATOR
// =========================
function generatePosts() {

  const posts = [];

  topics.forEach((topic, i) => {

    const hook = hooks[i % hooks.length];

    // X (Twitter)
    posts.push({
      platform: "X",
      text: `
${hook}

${topic}

Manual marketing is outdated.

Automate your entire funnel with AI chat systems.

👉 ${LINK}

#marketing #automation #ai
`
    });

    // Instagram
    posts.push({
      platform: "Instagram",
      text: `
🔥 ${hook}

${topic}

Creators are switching to automation systems that handle DMs, leads, and sales automatically.

👉 ${LINK}
`
    });

    // Facebook
    posts.push({
      platform: "Facebook",
      text: `
${topic}

Businesses are replacing manual outreach with AI automation systems.

They now convert leads automatically using chat funnels.

👉 ${LINK}
`
    });

    // LinkedIn
    posts.push({
      platform: "LinkedIn",
      text: `
${topic}

Automation is reshaping digital marketing.

Instead of manual messaging, businesses now use AI-driven conversational funnels.

👉 ${LINK}
`
    });
  });

  return posts;
}

// =========================
// 💾 SAVE QUEUE
// =========================
function save(posts) {

  if (!fs.existsSync("social")) {
    fs.mkdirSync("social");
  }

  fs.writeFileSync(
    "social/post-queue.json",
    JSON.stringify(posts, null, 2)
  );

  console.log("✅ Social post queue created:", posts.length);
}

// =========================
// ⚙️ RUN
// =========================
function run() {

  const posts = generatePosts();

  save(posts);

  console.log("🔥 READY TO POST TO SOCIAL MEDIA");
}

run();
