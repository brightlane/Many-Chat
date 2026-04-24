import fs from "fs";

// =========================
// 🔗 AFFILIATE LINKS
// =========================
const LINKS = {
  main: "https://manychat.partnerlinks.io/nwkkk7vkps17",
  ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
  free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
};

// =========================
// 🧠 TOPICS (SEO CLUSTER SYSTEM)
// =========================
const topics = [
  "instagram dm automation",
  "manychat funnel strategy",
  "chatbot marketing system",
  "instagram growth automation",
  "dm conversion psychology",
  "lead generation automation",
  "ecommerce chatbot system",
  "affiliate marketing automation",
  "ai marketing tools",
  "social media automation system"
];

// =========================
// 🧱 PILLAR PAGE (blog1.html)
// =========================
function buildPillar(pages) {

  const links = pages.map(p =>
    `<li><a href="./pages/${p}.html">${p.replace(/-/g, " ")}</a></li>`
  ).join("");

  return `
<!DOCTYPE html>
<html>

<head>
<title>SEO Empire System | ManyChat Automation Hub</title>
<meta name="description" content="Full SEO automation empire using ManyChat funnels and AI marketing systems.">
<meta name="robots" content="index, follow">
</head>

<body style="font-family:Arial;max-width:900px;margin:40px;line-height:1.7;">

<h1>SEO Traffic Empire System</h1>

<p>This is the central hub for a programmatic SEO + automation marketing system.</p>

<a href="${LINKS.ig}">👉 Start Automation System</a>

<hr>

<h2>SEO Topic Cluster</h2>
<ul>
${links}
</ul>

</body>
</html>
`;
}

// =========================
// 📄 SEO ARTICLE PAGE
// =========================
function buildPage(topic) {

  return `
<!DOCTYPE html>
<html>

<head>
<title>${topic} | SEO Empire</title>
<meta name="description" content="Learn ${topic} using automation systems.">
<meta name="robots" content="index, follow">
</head>

<body style="font-family:Arial;max-width:800px;margin:40px;line-height:1.7;">

<h1>${topic}</h1>

<p>
${topic} is part of modern AI-driven marketing automation systems.
</p>

<p>
ManyChat enables automated DM funnels that convert traffic into customers.
</p>

<a href="${LINKS.ig}">👉 Start Instagram Automation</a>

<hr>

<a href="../blog1.html">⬅ Back to Hub</a>

</body>
</html>
`;
}

// =========================
// 🌐 SITEMAP
// =========================
function buildSitemap(pages) {

  const urls = pages.map(p =>
    `
<url>
<loc>https://yourdomain.com/pages/${p}.html</loc>
<priority>0.8</priority>
</url>
`
  ).join("");

  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>https://yourdomain.com/blog1.html</loc>
<priority>1.0</priority>
</url>

${urls}

</urlset>
`;
}

// =========================
// 🤖 ROBOTS.TXT
// =========================
function buildRobots() {

  return `
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
`;
}

// =========================
// 🔥 SOCIAL POSTS
// =========================
function buildSocial() {

  const posts = topics.map(t => {
    return `
${t.toUpperCase()}

Most people are still doing manual marketing.

This system automates everything using AI + chat funnels.

👉 ${LINKS.ig}
`;
  });

  return posts;
}

// =========================
// ⚙️ ENGINE
// =========================
function run() {

  if (!fs.existsSync("pages")) fs.mkdirSync("pages");

  const slugs = topics.map(t => t.replace(/ /g, "-"));

  // 1. CREATE PAGES
  topics.forEach(t => {
    const file = t.replace(/ /g, "-") + ".html";
    fs.writeFileSync(`pages/${file}`, buildPage(t));
  });

  // 2. CREATE PILLAR PAGE
  fs.writeFileSync("blog1.html", buildPillar(slugs));

  // 3. CREATE SITEMAP
  fs.writeFileSync("sitemap.xml", buildSitemap(slugs));

  // 4. CREATE ROBOTS
  fs.writeFileSync("robots.txt", buildRobots());

  // 5. CREATE SOCIAL POSTS
  fs.writeFileSync("social-posts.json", JSON.stringify(buildSocial(), null, 2));

  console.log("🚀 FULL SEO EMPIRE GENERATED");
}

run();
