(function () {
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
  var h = React.createElement;

  var WA_DISPLAY = "0312 9331734", WA_LINK = "https://wa.me/923129331734";
  var PHONE = "0331 5459913", EMAIL = "harishabib521@gmail.com";
  var GITHUB = "https://github.com/HARRISAFRIDI/ScanWise-AI";
  var ROLES = ["AI Engineer", "Machine Learning", "Computer Vision", "LLM & RAG Apps"];
  var TOOLS = ["Python", "C++", "JavaScript", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "ONNX", "OpenVINO", "TensorRT", "LangChain", "LangGraph", "n8n", "RAG", "FAISS", "Pinecone", "SQL", "Pandas", "NumPy", "React", "Node.js", "MongoDB"];

  var NAV = [["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"], ["contact", "Hire me"]];

  var SKILLS = [
    ["AI / ML", ["scikit-learn", "TensorFlow", "PyTorch", "Deep learning", "OpenAI", "LLM APIs", "RAG", "LangChain", "LangGraph", "n8n", "AI automation", "Embeddings", "Prompt engineering", "Conversational AI"]],
    ["Languages", ["Python", "C++", "JavaScript", "HTML", "SQL"]],
    ["Data analysis", ["Pandas", "NumPy", "Data cleaning", "SQL querying", "Excel", "Power BI", "Tableau"]],
    ["Computer vision", ["OpenCV", "Image processing", "Medical image analysis"]],
    ["Inference", ["ONNX", "OpenVINO", "TensorRT", "Model conversion", "Quantization"]],
    ["Web", ["React.js", "Next.js", "Node.js", "Express"]],
    ["Data stores", ["SQL", "FAISS", "Pinecone", "MongoDB"]],
    ["Tools", ["Postman", "Swagger", "Git", "GitHub", "Excel"]]
  ];

  var ICONS = {
    "AI / ML": ["M9 9h6v6H9z", "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"],
    "Languages": ["M8 7l-5 5 5 5", "M16 7l5 5-5 5", "M14 4l-4 16"],
    "Data analysis": ["M5 20V11", "M12 20V4", "M19 20v-6"],
    "Computer vision": ["M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z", "M12 9a3 3 0 100 6 3 3 0 000-6z"],
    "Inference": ["M13 2L4 14h7l-1 8 9-12h-7z"],
    "Web": ["M12 3a9 9 0 100 18 9 9 0 000-18z", "M3 12h18", "M12 3c3 3 3 15 0 18", "M12 3c-3 3-3 15 0 18"],
    "Data stores": ["M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z", "M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6", "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"],
    "Tools": ["M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"]
  };

  var JOBS = [
    { org: "Meditez Foundation", role: "AI Engineer", date: "Aug 2026 – Present", now: true, pts: [
      "Build AI automation apps and workflows with n8n, LangChain, LangGraph and Python, connecting LLMs to business tools and data sources.",
      "Design multi-step, agent-style flows in LangGraph with prompts, tool calls and retrieval so automations complete tasks end to end.",
      "Integrate APIs and webhooks, test each workflow and validate its outputs, then document and refine flows with the team."] },
    { org: "AI SkillsHub", role: "Data Analyst", date: "Jan 2026 – Aug 2026", pts: [
      "Wrote SQL queries to retrieve, filter and cross-check data, confirming accuracy and completeness before reporting.",
      "Validated structured API response data with Swagger and Postman for accuracy, completeness and consistency.",
      "Organized data review cycles with SDLC and STLC-aligned planning, tracking data quality issues across releases.",
      "Logged discrepancies and worked with developers to verify fixes for reliable reporting and analytics."] },
    { org: "AIIT Solutions", role: "Data Analyst", date: "May 2025 – Dec 2025", pts: [
      "Cleaned and preprocessed data in Python and Pandas: missing values, duplicates and formatting inconsistencies.",
      "Built Excel summaries and reports tracking key metrics and trends for the product and analytics teams.",
      "Worked with developers in an Agile workflow to structure and analyze application and usage data for feature decisions.",
      "Supported data collection and reporting for business dashboards."] },
    { org: "Nano Cyber", role: "AI Engineer", date: "Aug 2024 – Apr 2025", pts: [
      "Developed and tested Python AI/ML features with preprocessing and validation pipelines, integrated into existing application code.",
      "Trained, evaluated and refined predictive models with scikit-learn, Pandas and NumPy, tracking metrics to compare performance.",
      "Designed prompts and integrated LLM APIs and conversational AI frameworks into internal tools, improving contextual responses and workflow automation.",
      "Documented experiments and tracked model performance in an Agile team."] }
  ];

  var PROJECTS = [
    { big: true, kind: "Computer vision · Medical imaging", name: "ScanWise-AI", link: GITHUB,
      pts: ["An AI-powered CT scan analysis system that identifies whether a scan is of the kidney or lung, then uses deep learning models to predict relevant conditions.",
        "OpenCV preprocessing for CT images: resizing, normalization and contrast enhancement. Models trained and evaluated with standard classification metrics.",
        "Inference optimized by exporting trained models to ONNX and deploying with OpenVINO and TensorRT to cut latency and raise throughput.",
        "Generates patient-friendly, knowledge-grounded explanations of results."],
      stack: ["Python", "Deep Learning", "OpenCV", "ONNX", "OpenVINO", "TensorRT"] },
    { kind: "RAG · LLM", name: "AI Tutor", link: "https://github.com/HARRISAFRIDI/AI-Tutor-Chatbot",
      pts: ["Document ingestion pipeline with chunking, embeddings and vector storage, so the LLM retrieves relevant context before it answers.",
        "LLM connected through an API to the retrieval layer with LangChain, giving context-aware explanations and fewer hallucinations."],
      stack: ["Python", "LLMs", "RAG", "Vector DB", "LangChain"] },
    { kind: "ML · IoT", name: "AI-Powered Home Automation",
      pts: ["Data pipeline that collects, cleans and transforms sensor and device usage data; ML models predict user preferences and trigger actions.",
        "A feedback loop adapts automation rules as usage data builds up, reducing manual configuration."],
      stack: ["Python", "Machine Learning", "Sensor data", "Reinforcement Learning"] }
  ];

  var CERTS = [["Deep Learning", "Coursera"], ["Pandas", "IBM"], ["Machine Learning", "freeCodeCamp"], ["Practical Python for AI Coding", "KAIST · Coursera"]];

  /* ---------- helpers ---------- */
  function fallbackCopy(t, done) {
    var ta = document.createElement("textarea");
    ta.value = t; ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
    document.body.appendChild(ta); ta.select();
    try { if (document.execCommand("copy")) done(); } catch (e) {}
    ta.remove();
  }
  function copyText(t, done) {
    try { navigator.clipboard.writeText(t).then(done, function () { fallbackCopy(t, done); }); }
    catch (e) { fallbackCopy(t, done); }
  }

  function Reveal(p) {
    var ref = useRef(null);
    useEffect(function () {
      var el = ref.current; if (!el) return;
      if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } });
      }, { threshold: 0.1 });
      io.observe(el);
      return function () { io.disconnect(); };
    }, []);
    return h(p.as || "div", { ref: ref, className: "rv " + (p.className || ""), style: { transitionDelay: (p.delay || 0) + "ms" }, id: p.id }, p.children);
  }

  function Count(p) {
    var st = useState(p.to), n = st[0], setN = st[1];
    var ref = useRef(null);
    useEffect(function () {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      var el = ref.current, raf, io;
      setN(0);
      io = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return;
        io.disconnect();
        var t0 = performance.now();
        var step = function (t) {
          var k = Math.min(1, (t - t0) / 1100);
          setN(Math.round(p.to * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      });
      io.observe(el);
      return function () { io.disconnect(); cancelAnimationFrame(raf); };
    }, [p.to]);
    return h("span", { ref: ref }, n);
  }

  /* ---------- sections ---------- */
  function Nav() {
    return h("header", { className: "nav" }, h("div", { className: "nav-in" },
      h("a", { className: "brand", href: "#top" }, h("i"), "Haris Habib"),
      h("nav", { className: "links", "aria-label": "Sections" },
        NAV.map(function (n) { return h("a", { key: n[0], href: "#" + n[0], className: n[0] === "contact" ? "keep" : "" }, n[1]); }))));
  }

  function Hero() {
    var st = useState(0), idx = st[0], setIdx = st[1];
    useEffect(function () {
      var id = setInterval(function () { setIdx(function (i) { return (i + 1) % ROLES.length; }); }, 2600);
      return function () { clearInterval(id); };
    }, []);
    var letters = function (word, start, grad) {
      return h("span", { className: "ln " + (grad ? "acc" : "") }, word.split("").map(function (ch, i) {
        var style = { animationDelay: (start + i * 60) + "ms" };
        if (grad) style.color = "color-mix(in srgb, var(--accent) " + (100 - i * 24) + "%, var(--accent2))";
        return h("span", { key: i, className: "ch", "aria-hidden": "true", style: style }, ch);
      }));
    };
    return h("section", { className: "hero", id: "top" },
      h("div", null,
        h("div", { className: "tag" }, h("span", null, "Islamabad, Pakistan"), h("span", null, h("b", null, "●"), " Open to work")),
        h("h1", { "aria-label": "Haris Habib" }, letters("Haris", 100, false), letters("Habib", 420, true)),
        h("p", { className: "role", "aria-live": "polite" }, h("span", { className: "dot" }), h("em", { key: idx }, ROLES[idx])),
        h("p", { className: "lede" }, "I train and tune models, and ship computer vision and LLM features. My CT scan classifier runs on ONNX, OpenVINO and TensorRT, and my RAG tutor retrieves context before it answers."),
        h("div", { className: "cta" },
          h("a", { className: "btn pri", href: "#projects" }, "View projects"),
          h("a", { className: "btn", href: WA_LINK, target: "_blank", rel: "noopener" }, "Chat on WhatsApp"))),
      h("div", { className: "nowcard" },
        h("p", { className: "nc-label" }, h("i"), "Now"),
        h("h3", null, "AI Engineer"),
        h("p", { className: "nc-org" }, "Meditez Foundation · Aug 2026 – Present"),
        h("p", { className: "nc-text" }, "Building AI automation apps and agent-style workflows that connect LLMs to business tools and data."),
        h("div", { className: "nc-chips" }, ["n8n", "LangChain", "LangGraph", "Python"].map(function (t) { return h("span", { key: t }, t); })),
        h("div", { className: "nc-foot" }, h("span", null, "Based in"), h("b", null, "Islamabad, Pakistan"))));
  }

  function Marquee() {
    var row = TOOLS.map(function (t, i) { return h("span", { key: i }, t); });
    var row2 = TOOLS.map(function (t, i) { return h("span", { key: "b" + i, "aria-hidden": "true" }, t); });
    return h("div", { className: "marq", "aria-label": "Tools I use" }, h("div", { className: "marq-track" }, row, row2));
  }

  function Stats() {
    var items = [[4, "Professional roles"], [3, "Projects built"], [3, "Inference runtimes"], [4, "Certifications"]];
    return h("div", { className: "stats" }, items.map(function (s, i) {
      return h(Reveal, { key: i, className: "stat", delay: i * 90 }, h("strong", null, h(Count, { to: s[0] })), h("span", null, s[1]));
    }));
  }

  function About() {
    return h("section", { className: "sec", id: "about" },
      h(Reveal, null, h("p", { className: "eyebrow" }, "About"), h("h2", null, "Data first, then the model.")),
      h("div", { className: "about" },
        h(Reveal, null,
          h("p", null, "I'm a Computer Software Engineering graduate working across AI engineering, computer vision and LLM applications."),
          h("p", null, "In Python I handle preprocessing, querying and reporting with Pandas, NumPy, SQL and Excel. I train and evaluate models with scikit-learn, TensorFlow and PyTorch, and I build computer vision solutions with OpenCV."),
          h("p", null, "I've integrated LLM APIs into applications and built retrieval-augmented generation flows with LangChain and vector stores. I work in Agile teams, document experiments and track model performance.")),
        h(Reveal, { delay: 120 }, h("dl", { className: "facts" },
          [["Focus", "AI / ML engineering, computer vision, LLM apps"], ["Degree", "BS Computer Software Engineering, UET Mardan"], ["Based in", "H8, Islamabad"], ["Working style", "Agile, documented experiments, tracked metrics"]].map(function (f) {
            return h("div", { className: "fact", key: f[0] }, h("dt", null, f[0]), h("dd", null, f[1]));
          })))));
  }

  function Skills() {
    return h("section", { className: "sec", id: "skills" },
      h(Reveal, null, h("p", { className: "eyebrow" }, "Toolkit"), h("h2", null, "What I work with every day.")),
      h("div", { className: "skills" }, SKILLS.map(function (g, i) {
        var icon = h("span", { className: "skicon", "aria-hidden": "true" },
          h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
            (ICONS[g[0]] || []).map(function (d, k) { return h("path", { key: k, d: d }); })));
        return h(Reveal, { key: g[0], className: "skgroup" + (i === 0 ? " wide" : ""), delay: (i % 3) * 100 },
          h("div", { className: "skhead" }, icon, h("span", { className: "skcount" }, g[1].length + (g[1].length === 1 ? " skill" : " skills"))),
          h("h3", null, g[0]),
          h("div", { className: "chips" }, g[1].map(function (t) { return h("span", { className: "chip", key: t }, t); })));
      })));
  }

  function Experience() {
    return h("section", { className: "sec", id: "experience" },
      h(Reveal, null, h("p", { className: "eyebrow" }, "Experience · Aug 2024 → now"), h("h2", null, "Four roles, one thread: reliable data.")),
      h("div", { className: "tl" }, JOBS.map(function (j) {
        return h(Reveal, { key: j.org, className: "job" },
          h("div", { className: "when" }, j.date, j.now ? h("div", { className: "now" }, "Current") : null),
          h("div", { className: "jobbody" },
            h("h3", null, j.role, " ", h("span", null, "· " + j.org)),
            h("ul", null, j.pts.map(function (t, i) { return h("li", { key: i }, t); }))));
      })));
  }

  function Projects() {
    return h("section", { className: "sec", id: "projects" },
      h(Reveal, null, h("p", { className: "eyebrow" }, "Selected work"), h("h2", null, "Projects that run end to end.")),
      h("div", { className: "projects" }, PROJECTS.map(function (p, i) {
        var body = h("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          h("p", { className: "pk", style: { margin: 0 } }, p.kind),
          h("h3", null, p.name),
          p.link ? h("a", { className: "plink", href: p.link, target: "_blank", rel: "noopener" }, "View on GitHub ↗") : null);
        var list = h("ul", null, p.pts.map(function (t, k) { return h("li", { key: k }, t); }));
        var stack = h("div", { className: "stack" }, p.stack.map(function (s) { return h("span", { key: s }, s); }));
        var inner = p.big
          ? h("div", { className: "pcard big" },
              h("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, body,
                h("div", { className: "pipe" }, h("span", null, "CT scan"), h("i", null, "→"), h("span", null, "OpenCV"), h("i", null, "→"), h("span", { className: "hi" }, "Kidney / Lung"), h("i", null, "→"), h("span", null, "Condition")),
                stack),
              list)
          : h("div", { className: "pcard" }, body, list, stack);
        return h(Reveal, { key: p.name, className: "pcol" + (p.big ? " big" : ""), delay: i * 100 }, inner);
      })));
  }

  function Education() {
    return h("section", { className: "sec", id: "education" },
      h(Reveal, null, h("p", { className: "eyebrow" }, "Education & certifications"), h("h2", null, "Learning, formally and by building.")),
      h("div", { className: "edu" },
        h(Reveal, null, h("div", null, h("h3", null, "Degree"), h("p", null, "BS, Computer Software Engineering", h("small", null, "University of Engineering and Technology, Mardan")))),
        h(Reveal, { delay: 100 }, h("div", null, h("h3", null, "Certifications"),
          h("ul", null, CERTS.map(function (c) { return h("li", { key: c[0] }, c[0], h("span", null, c[1])); }))))));
  }

  function Contact() {
    var st = useState(""), done = st[0], setDone = st[1];
    var copy = function (key, val) { copyText(val, function () { setDone(key); setTimeout(function () { setDone(""); }, 1600); }); };
    var rows = [["whatsapp", "WhatsApp", WA_DISPLAY, "03129331734"], ["phone", "Phone", PHONE, "03315459913"], ["email", "Email", EMAIL, EMAIL]];
    return h("section", { className: "sec", id: "contact" },
      h(Reveal, { className: "contact" },
        h("div", null,
          h("p", { className: "eyebrow" }, "Contact"),
          h("h2", null, "Have a model that needs building?"),
          h("p", null, "Message me on WhatsApp or call. I'm in Islamabad and open to AI engineering roles."),
          h("a", { className: "btn pri", href: WA_LINK, target: "_blank", rel: "noopener" }, "Open WhatsApp")),
        h("div", { className: "rows" }, rows.map(function (r) {
          return h("div", { className: "crow", key: r[0] },
            h("div", null, h("small", null, r[1]), h("span", null, r[2])),
            h("button", { type: "button", className: "copy" + (done === r[0] ? " ok" : ""), onClick: function () { copy(r[0], r[3]); }, "aria-label": "Copy " + r[1] }, done === r[0] ? "Copied" : "Copy"));
        }))));
  }

  function App() {
    useEffect(function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var root = document.documentElement, bar = document.getElementById("progress");
      var onScroll = function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
      };
      var onMove = function (e) { root.style.setProperty("--cx", e.clientX + "px"); root.style.setProperty("--cy", e.clientY + "px"); };
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
      if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });
      var hs = [];
      document.querySelectorAll(".pcard").forEach(function (c) {
        var mv = function (e) {
          var r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
          c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px");
          if (!reduce) { c.style.setProperty("--ry", (px * 5) + "deg"); c.style.setProperty("--rx", (-py * 5) + "deg"); }
        };
        var lv = function () { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); };
        c.addEventListener("mousemove", mv); c.addEventListener("mouseleave", lv); hs.push([c, mv, lv]);
      });
      return function () {
        window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onMove);
        hs.forEach(function (p) { p[0].removeEventListener("mousemove", p[1]); p[0].removeEventListener("mouseleave", p[2]); });
      };
    }, []);
    return h(React.Fragment, null,
      h(Nav),
      h("main", { className: "wrap" },
        h(Hero), h(Marquee), h(Stats), h(About), h(Skills), h(Experience), h(Projects), h(Education), h(Contact),
        h("footer", null, h("span", null, "© 2026 Haris Habib"), h("span", null, "Built with React"))));
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
