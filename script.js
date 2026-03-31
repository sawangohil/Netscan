const PRESETS = {
  amazon: {
    name: "amazon.com",
    services: [
      {
        domain: "amazon-adsystem.com",
        category: "Advertising",
        size: 312,
        privacy: "high",
        security: "medium",
        type: "Ad tracker",
        description: "Tracks user behavior for targeted ads",
      },
      {
        domain: "doubleclick.net",
        category: "Advertising",
        size: 228,
        privacy: "high",
        security: "medium",
        type: "Ad network",
        description: "Google ad bidding & user profiling",
      },
      {
        domain: "google-analytics.com",
        category: "Analytics",
        size: 45,
        privacy: "high",
        security: "low",
        type: "Analytics",
        description: "Sends pageview & interaction data to Google",
      },
      {
        domain: "cloudfront.net",
        category: "CDN",
        size: 1840,
        privacy: "low",
        security: "low",
        type: "CDN",
        description: "Amazon CDN for static assets delivery",
      },
      {
        domain: "fastly.net",
        category: "CDN",
        size: 620,
        privacy: "low",
        security: "low",
        type: "CDN",
        description: "Edge CDN for images and scripts",
      },
      {
        domain: "images-amazon.com",
        category: "Media",
        size: 980,
        privacy: "low",
        security: "low",
        type: "Image host",
        description: "Product image delivery",
      },
      {
        domain: "facebook.net",
        category: "Social",
        size: 89,
        privacy: "critical",
        security: "medium",
        type: "Social tracker",
        description: "Facebook Pixel — tracks browsing history",
      },
      {
        domain: "scorecardresearch.com",
        category: "Analytics",
        size: 12,
        privacy: "high",
        security: "low",
        type: "Tracker",
        description: "Comscore audience measurement",
      },
    ],
  },
  news: {
    name: "news site",
    services: [
      {
        domain: "googletag.services.com",
        category: "Advertising",
        size: 180,
        privacy: "high",
        security: "medium",
        type: "Ad manager",
        description: "Google Publisher Tag for programmatic ads",
      },
      {
        domain: "doubleclick.net",
        category: "Advertising",
        size: 240,
        privacy: "high",
        security: "medium",
        type: "Ad network",
        description: "Real-time ad bidding and user profiling",
      },
      {
        domain: "taboola.com",
        category: "Advertising",
        size: 390,
        privacy: "high",
        security: "medium",
        type: "Content ads",
        description: "Recommended content ad network with tracking",
      },
      {
        domain: "outbrain.com",
        category: "Advertising",
        size: 210,
        privacy: "high",
        security: "low",
        type: "Content ads",
        description: "Sponsored content recommendation tracker",
      },
      {
        domain: "chartbeat.com",
        category: "Analytics",
        size: 28,
        privacy: "medium",
        security: "low",
        type: "Analytics",
        description: "Real-time editorial analytics tracker",
      },
      {
        domain: "parsely.com",
        category: "Analytics",
        size: 22,
        privacy: "medium",
        security: "low",
        type: "Analytics",
        description: "Audience measurement for publishers",
      },
      {
        domain: "quantserve.com",
        category: "Analytics",
        size: 15,
        privacy: "high",
        security: "low",
        type: "Tracker",
        description: "Audience segment data collection",
      },
      {
        domain: "disqus.com",
        category: "Social",
        size: 310,
        privacy: "medium",
        security: "medium",
        type: "Comments",
        description: "Third-party comment system with user tracking",
      },
      {
        domain: "twitter.com",
        category: "Social",
        size: 95,
        privacy: "medium",
        security: "low",
        type: "Social widget",
        description: "Embedded tweet widgets with session data",
      },
      {
        domain: "cdn.jsdelivr.net",
        category: "CDN",
        size: 540,
        privacy: "low",
        security: "low",
        type: "CDN",
        description: "Open source CDN for JS libraries",
      },
    ],
  },
  banking: {
    name: "banking site",
    services: [
      {
        domain: "akamaized.net",
        category: "CDN",
        size: 890,
        privacy: "low",
        security: "low",
        type: "CDN / Security",
        description: "Akamai CDN with DDoS protection",
      },
      {
        domain: "recaptcha.net",
        category: "Security",
        size: 65,
        privacy: "medium",
        security: "low",
        type: "Bot protection",
        description: "Google reCAPTCHA — shares behavior data with Google",
      },
      {
        domain: "pingdom.net",
        category: "Analytics",
        size: 18,
        privacy: "low",
        security: "low",
        type: "Monitoring",
        description: "Real user performance monitoring",
      },
      {
        domain: "adobe.com",
        category: "Analytics",
        size: 210,
        privacy: "medium",
        security: "medium",
        type: "Analytics",
        description: "Adobe Analytics — behavioral data tracking",
      },
      {
        domain: "tealiumiq.com",
        category: "Analytics",
        size: 145,
        privacy: "medium",
        security: "medium",
        type: "Tag manager",
        description: "Data layer management for multiple trackers",
      },
      {
        domain: "fonts.googleapis.com",
        category: "CDN",
        size: 48,
        privacy: "low",
        security: "low",
        type: "Fonts CDN",
        description: "Google Fonts — logs client IP and user-agent",
      },
      {
        domain: "verisign.com",
        category: "Security",
        size: 8,
        privacy: "low",
        security: "low",
        type: "Certificate check",
        description: "SSL certificate validation",
      },
    ],
  },
  social: {
    name: "social media",
    services: [
      {
        domain: "facebook.com",
        category: "Core",
        size: 2800,
        privacy: "critical",
        security: "medium",
        type: "Core platform",
        description: "Main app data — profile, feed, messages",
      },
      {
        domain: "cdninstagram.com",
        category: "Media",
        size: 4200,
        privacy: "high",
        security: "low",
        type: "Media CDN",
        description: "Photos and videos from Instagram CDN",
      },
      {
        domain: "fbsbx.com",
        category: "Security",
        size: 120,
        privacy: "high",
        security: "high",
        type: "Sandbox iframe",
        description: "Facebook content sandbox — risk of XSS",
      },
      {
        domain: "google-analytics.com",
        category: "Analytics",
        size: 45,
        privacy: "high",
        security: "low",
        type: "Analytics",
        description: "Sends session data to Google",
      },
      {
        domain: "atlassolutions.com",
        category: "Advertising",
        size: 78,
        privacy: "high",
        security: "medium",
        type: "Ad attribution",
        description: "Facebook ad conversion tracking",
      },
      {
        domain: "hotjar.com",
        category: "Analytics",
        size: 132,
        privacy: "high",
        security: "medium",
        type: "Session recorder",
        description: "Records mouse movements and clicks",
      },
      {
        domain: "giphy.com",
        category: "Media",
        size: 860,
        privacy: "medium",
        security: "low",
        type: "GIF CDN",
        description: "Animated GIF delivery — Meta-owned",
      },
    ],
  },
  ecommerce: {
    name: "e-commerce",
    services: [
      {
        domain: "stripe.com",
        category: "Payments",
        size: 480,
        privacy: "medium",
        security: "low",
        type: "Payment gateway",
        description: "Secure payment processing via Stripe.js",
      },
      {
        domain: "google-analytics.com",
        category: "Analytics",
        size: 45,
        privacy: "high",
        security: "low",
        type: "Analytics",
        description: "GA4 — purchase funnel tracking",
      },
      {
        domain: "shopify.com",
        category: "Platform",
        size: 1200,
        privacy: "medium",
        security: "low",
        type: "E-comm platform",
        description: "Core storefront and cart functionality",
      },
      {
        domain: "klaviyo.com",
        category: "Marketing",
        size: 95,
        privacy: "high",
        security: "medium",
        type: "Email tracker",
        description: "Email engagement and behavioral profiling",
      },
      {
        domain: "hotjar.com",
        category: "Analytics",
        size: 132,
        privacy: "high",
        security: "medium",
        type: "Session recorder",
        description: "Heatmaps and session recordings",
      },
      {
        domain: "facebook.net",
        category: "Advertising",
        size: 89,
        privacy: "critical",
        security: "medium",
        type: "Pixel tracker",
        description: "Facebook Pixel — conversion & retargeting",
      },
      {
        domain: "criteo.com",
        category: "Advertising",
        size: 165,
        privacy: "high",
        security: "medium",
        type: "Retargeting",
        description: "Cross-site retargeting ad network",
      },
      {
        domain: "cloudinary.com",
        category: "Media",
        size: 2100,
        privacy: "low",
        security: "low",
        type: "Image CDN",
        description: "Product image optimization and delivery",
      },
    ],
  },
};

const CAT_COLORS = {
  Advertising: "#ef4444",
  Analytics: "#f59e0b",
  CDN: "#22c55e",
  Social: "#4f9eff",
  Security: "#a78bfa",
  Media: "#06b6d4",
  Payments: "#10b981",
  Marketing: "#f97316",
  Platform: "#8b5cf6",
  Core: "#ec4899",
};

let currentData = null;
let filterMode = "all";

function loadPreset(key) {
  document.getElementById("urlInput").value = "https://" + PRESETS[key].name;
  runScan(key);
}

function runScan(presetKey) {
  const url = document.getElementById("urlInput").value;
  // Figure out which preset to use from URL or key
  let key = presetKey;
  if (!key) {
    if (url.includes("amazon")) key = "amazon";
    else if (
      url.includes("bank") ||
      url.includes("finance") ||
      url.includes("hsbc") ||
      url.includes("chase")
    )
      key = "banking";
    else if (
      url.includes("facebook") ||
      url.includes("instagram") ||
      url.includes("twitter") ||
      url.includes("social")
    )
      key = "social";
    else if (
      url.includes("shop") ||
      url.includes("store") ||
      url.includes("buy")
    )
      key = "ecommerce";
    else if (
      url.includes("news") ||
      url.includes("bbc") ||
      url.includes("cnn") ||
      url.includes("times")
    )
      key = "news";
    else
      key =
        Object.keys(PRESETS)[
          Math.floor(Math.random() * Object.keys(PRESETS).length)
        ];
  }
  currentData = PRESETS[key].services;

  document.getElementById("emptyState").style.display = "none";
  document.getElementById("statsGrid").style.display = "grid";
  document.getElementById("mainGrid").style.display = "grid";
  document.getElementById("tableContainer").innerHTML =
    '<div class="scanning"><div class="spin"></div>Analyzing network requests...</div>';

  setTimeout(() => renderResults(currentData), 900);
}

function clearResults() {
  currentData = null;
  document.getElementById("emptyState").style.display = "block";
  document.getElementById("statsGrid").style.display = "none";
  document.getElementById("mainGrid").style.display = "none";
}

function filterTable(mode, el) {
  document
    .querySelectorAll(".ftab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  filterMode = mode;
  if (currentData) renderResults(currentData, false);
}

function renderResults(data, animate = true) {
  // Filter
  let filtered = data;
  if (filterMode === "high")
    filtered = data.filter(
      (d) => d.privacy === "high" || d.privacy === "critical",
    );
  if (filterMode === "tracker")
    filtered = data.filter(
      (d) =>
        d.type.toLowerCase().includes("track") ||
        d.type.toLowerCase().includes("analytics") ||
        d.type.toLowerCase().includes("pixel") ||
        d.type.toLowerCase().includes("ad"),
    );

  const totalKB = data.reduce((s, d) => s + d.size, 0);
  const maxSize = Math.max(...data.map((d) => d.size));
  const highRisk = data.filter(
    (d) => d.privacy === "high" || d.privacy === "critical",
  ).length;

  // Privacy score (0-100, higher = worse)
  const privScore = Math.round(
    data.reduce(
      (s, d) =>
        s + ({ low: 5, medium: 35, high: 70, critical: 100 }[d.privacy] || 0),
      0,
    ) / data.length,
  );
  const scoreColor =
    privScore > 65 ? "#ef4444" : privScore > 35 ? "#f59e0b" : "#22c55e";
  const scoreLabel =
    privScore > 65 ? "HIGH RISK" : privScore > 35 ? "MODERATE" : "LOW RISK";

  // Update stats
  document.getElementById("statRequests").textContent = data.length;
  document.getElementById("statSub1").textContent = `detected on page`;
  document.getElementById("statData").textContent =
    totalKB / 1024 > 1 ? (totalKB / 1024).toFixed(1) + " MB" : totalKB + " KB";
  document.getElementById("statSub2").textContent = "transferred";
  document.getElementById("statPrivacy").textContent = scoreLabel;
  document.getElementById("statPrivacy").style.color = scoreColor;
  document.getElementById("statPrivacy").style.fontSize = "18px";
  document.getElementById("statHighRisk").textContent = highRisk;

  document.getElementById("tableSubtitle").textContent =
    `${filtered.length} services found • ${(totalKB / 1024).toFixed(1)} MB transferred`;

  // Table
  let html = `<table>
    <thead><tr>
      <th>Domain</th><th>Category</th><th>Data Size</th><th>Privacy</th><th>Security</th>
    </tr></thead><tbody>`;
  filtered.forEach((s) => {
    const barWidth = Math.max(4, Math.round((s.size / maxSize) * 80));
    const privClass =
      s.privacy === "critical"
        ? "critical"
        : s.privacy === "high"
          ? "high"
          : s.privacy === "medium"
            ? "medium"
            : "low";
    const privLabel = s.privacy.toUpperCase();
    const secClass =
      s.security === "high"
        ? "high"
        : s.security === "medium"
          ? "medium"
          : "low";
    const catColor = CAT_COLORS[s.category] || "#888";
    const sizeStr =
      s.size >= 1000 ? (s.size / 1024).toFixed(1) + " MB" : s.size + " KB";
    html += `<tr title="${s.description}">
      <td>
        <div class="domain-cell">
          <div class="favicon" style="background:${catColor}22;color:${catColor}">
            ${s.domain[0].toUpperCase()}
          </div>
          <div>
            <div class="domain-name">${s.domain}</div>
            <div class="domain-type">${s.type}</div>
          </div>
        </div>
      </td>
      <td><span style="color:${catColor};font-size:12px;font-family:var(--mono)">${s.category}</span></td>
      <td>
        <div class="size-bar-wrap">
          <div class="size-bar" style="width:${barWidth}px;background:${catColor}"></div>
          <span class="size-val">${sizeStr}</span>
        </div>
      </td>
      <td><span class="badge ${privClass}">${privLabel}</span></td>
      <td><span class="badge ${secClass}">${s.security.toUpperCase()}</span></td>
    </tr>`;
  });
  html += "</tbody></table>";
  document.getElementById("tableContainer").innerHTML = html;

  // Donut chart
  const catTotals = {};
  data.forEach((s) => {
    catTotals[s.category] = (catTotals[s.category] || 0) + s.size;
  });
  const cats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
  const cx = 80,
    cy = 80,
    r = 62,
    thick = 18;
  let svgPaths = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="${thick}"/>`;
  let offset = 0;
  const circum = 2 * Math.PI * r;
  cats.forEach(([cat, size]) => {
    const frac = size / totalKB;
    const dash = frac * circum - 2;
    const color = CAT_COLORS[cat] || "#888";
    svgPaths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${thick}"
      stroke-dasharray="${dash} ${circum}" stroke-dashoffset="${((-offset * circum) / (2 * Math.PI * r)) * circum}"
      transform="rotate(${-90 + offset * 360}deg)" 
      style="transform-origin:${cx}px ${cy}px;transform:rotate(${-90 + offset * 360}deg);transition:stroke-dashoffset 1s ease"/>`;
    offset += frac;
  });
  document.getElementById("donutSvg").innerHTML = svgPaths;
  document.getElementById("donutTotal").textContent =
    totalKB >= 1024 ? (totalKB / 1024).toFixed(1) + "MB" : totalKB + "KB";

  // Legend
  let legHtml = "";
  cats.slice(0, 5).forEach(([cat, size]) => {
    const color = CAT_COLORS[cat] || "#888";
    const pct = Math.round((size / totalKB) * 100);
    const sizeStr =
      size >= 1000 ? (size / 1024).toFixed(1) + " MB" : size + " KB";
    legHtml += `<div class="legend-item">
      <div class="legend-label"><div class="legend-dot" style="background:${color}"></div>${cat}</div>
      <div class="legend-val">${sizeStr} <span style="color:var(--muted)">(${pct}%)</span></div>
    </div>`;
  });
  document.getElementById("donutLegend").innerHTML = legHtml;

  // Score
  const arc = document.getElementById("scoreArc");
  const circumArc = 264;
  const scoreOffset = circumArc - (privScore / 100) * circumArc;
  arc.style.strokeDashoffset = scoreOffset;
  arc.style.stroke = scoreColor;
  const scoreEl = document.getElementById("scoreVal");
  scoreEl.textContent = privScore + "/100";
  scoreEl.style.color = scoreColor;
  document.getElementById("scoreDesc").textContent =
    scoreLabel +
    " — " +
    (privScore > 65
      ? "Multiple high-risk trackers found"
      : privScore > 35
        ? "Some privacy concerns detected"
        : "Relatively safe third-party usage");

  // Risks
  const risks = [];
  const hasTrackers = data.some(
    (d) => d.privacy === "high" || d.privacy === "critical",
  );
  const hasCritical = data.some((d) => d.privacy === "critical");
  const hasSessionRecorder = data.some(
    (d) =>
      d.type.toLowerCase().includes("record") ||
      d.type.toLowerCase().includes("hotjar"),
  );
  const hasPayments = data.some((d) => d.category === "Payments");
  const hasAdNet = data.filter((d) => d.category === "Advertising").length;

  if (hasCritical)
    risks.push({
      icon: "🚨",
      cls: "red",
      title: "Critical tracker detected",
      desc: "One or more services with critical privacy risk (e.g. Facebook Pixel) are sending behavioral data off-site.",
    });
  if (hasTrackers)
    risks.push({
      icon: "👁️",
      cls: "red",
      title: "Cross-site tracking active",
      desc: `${highRisk} services collect user behavior data that may be shared with ad networks or data brokers.`,
    });
  if (hasSessionRecorder)
    risks.push({
      icon: "🎥",
      cls: "yellow",
      title: "Session recording in use",
      desc: "Hotjar or similar tool is recording mouse movements, clicks, and keystrokes for UX analysis.",
    });
  if (hasAdNet > 1)
    risks.push({
      icon: "📡",
      cls: "yellow",
      title: "Multiple ad networks",
      desc: `${hasAdNet} ad networks means data about your visit is shared with multiple third parties for retargeting.`,
    });
  if (hasPayments)
    risks.push({
      icon: "✅",
      cls: "green",
      title: "Payment handled securely",
      desc: "Payments route through a dedicated gateway (Stripe/PayPal) — card data doesn't touch the main server.",
    });
  risks.push({
    icon: "🔒",
    cls: "green",
    title: "All requests over HTTPS",
    desc: "All detected third-party requests use TLS encryption in transit.",
  });

  document.getElementById("riskList").innerHTML = risks
    .map(
      (r) => `
    <div class="risk-item">
      <div class="risk-icon ${r.cls}">${r.icon}</div>
      <div><div class="risk-title">${r.title}</div><div class="risk-desc">${r.desc}</div></div>
    </div>`,
    )
    .join("");

  // Categories breakdown
  let catHtml = "";
  cats.forEach(([cat, size]) => {
    const color = CAT_COLORS[cat] || "#888";
    const sizeStr =
      size >= 1000 ? (size / 1024).toFixed(1) + " MB" : size + " KB";
    catHtml += `<div class="category-item">
      <div class="category-name"><div class="cat-dot" style="background:${color}"></div>${cat}</div>
      <div class="category-bytes">${sizeStr}</div>
    </div>`;
  });
  document.getElementById("catList").innerHTML = catHtml;

  // Preventive measures
  document.getElementById("preventList").innerHTML = `
    <div style="margin-bottom:8px">🛡️ <strong style="color:var(--text)">Use uBlock Origin</strong> — blocks ad trackers and analytics beacons</div>
    <div style="margin-bottom:8px">🌐 <strong style="color:var(--text)">Enable DNS-over-HTTPS</strong> — encrypts DNS queries to prevent snooping</div>
    <div style="margin-bottom:8px">🍪 <strong style="color:var(--text)">Reject non-essential cookies</strong> — limits cross-site session tracking</div>
    <div style="margin-bottom:8px">🔐 <strong style="color:var(--text)">Use a VPN</strong> — masks your IP from third-party services</div>
    <div>📵 <strong style="color:var(--text)">Browser isolation</strong> — use containers or separate profiles per site</div>
  `;
}

// Auto-load amazon on start
setTimeout(() => loadPreset("amazon"), 300);
