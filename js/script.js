const humbergerIcon = document.querySelector("#hamburger-icon");
const mobileNavbar = document.querySelector("#nav-bar");
const lines = document.querySelectorAll(".line");

if (humbergerIcon && mobileNavbar) {
    humbergerIcon.addEventListener("click", (event) => {
        if (mobileNavbar.classList.contains("show")) {
            event.target.style.color = "white";
            mobileNavbar.classList.remove("show");
            lines.forEach((line) => { line.classList.remove("show"); });
        } else {
            event.target.style.color = "rgb(57, 167, 211)";
            mobileNavbar.classList.add("show");
            lines.forEach((line) => { line.classList.add("show"); });
        }
    });
}

const skillCategories = document.querySelectorAll(".skill-category");
const projectTechStacks = document.querySelectorAll(".tech");
const skillIconMap = {
    "IP Addressing": "fa-solid fa-network-wired",
    "OSI Model": "fa-solid fa-layer-group",
    "TCP/IP": "fa-solid fa-diagram-project",
    "Subnetting": "fa-solid fa-sitemap",
    "Network Devices": "fa-solid fa-server",
    "Protocols & Ports": "fa-solid fa-plug",
    "Bash scripting": "fa-solid fa-terminal",
    "Python": "fa-brands fa-python",
    "Regex": "fa-solid fa-code",
    "HTML": "fa-brands fa-html5",
    "CSS": "fa-brands fa-css3-alt",
    "JavaScript": "fa-brands fa-js",
    "Express": "fa-solid fa-route",
    "PostgreSQL": "fa-solid fa-database",
    "HTTP/HTTPS": "fa-solid fa-globe",
    "SQLi Basics": "fa-solid fa-bug",
    "XSS Basics": "fa-solid fa-shield-halved",
    "BurpSuite": "fa-solid fa-user-secret",
    "Gobuster": "fa-solid fa-binoculars",
    "Nmap": "fa-solid fa-satellite-dish",
    "Wireshark": "fa-solid fa-wave-square",
    "Kali Linux": "fa-solid fa-terminal",
    "VSCode": "fa-solid fa-code",
    "Git": "fa-solid fa-code-branch",
    "GitHub": "fa-brands fa-github"
};
const skillColorMap = {
    "IP Addressing": ["rgba(47, 128, 237, 0.18)", "rgba(47, 128, 237, 0.28)", "#86c5ff"],
    "OSI Model": ["rgba(109, 93, 252, 0.18)", "rgba(109, 93, 252, 0.28)", "#c0b6ff"],
    "TCP/IP": ["rgba(39, 174, 216, 0.18)", "rgba(39, 174, 216, 0.28)", "#9be7ff"],
    "Subnetting": ["rgba(46, 134, 193, 0.18)", "rgba(46, 134, 193, 0.28)", "#9bd6ff"],
    "Network Devices": ["rgba(72, 201, 176, 0.16)", "rgba(72, 201, 176, 0.28)", "#aef3e2"],
    "Protocols & Ports": ["rgba(54, 215, 183, 0.16)", "rgba(54, 215, 183, 0.26)", "#9ff6ea"],
    "Bash scripting": ["rgba(46, 204, 113, 0.16)", "rgba(46, 204, 113, 0.26)", "#b5f5ce"],
    "Python": ["rgba(53, 111, 159, 0.22)", "rgba(255, 211, 67, 0.3)", "#ffd343"],
    "Regex": ["rgba(142, 68, 173, 0.18)", "rgba(142, 68, 173, 0.28)", "#ebc9ff"],
    "HTML": ["rgba(225, 76, 38, 0.2)", "rgba(225, 76, 38, 0.3)", "#ffb394"],
    "CSS": ["rgba(38, 77, 228, 0.2)", "rgba(38, 77, 228, 0.3)", "#9dc0ff"],
    "JavaScript": ["rgba(240, 219, 79, 0.22)", "rgba(240, 219, 79, 0.34)", "#fff3a6"],
    "Express": ["rgba(120, 120, 120, 0.16)", "rgba(160, 160, 160, 0.26)", "#dddddd"],
    "PostgreSQL": ["rgba(51, 103, 145, 0.2)", "rgba(51, 103, 145, 0.3)", "#a9d0f3"],
    "HTTP/HTTPS": ["rgba(0, 168, 232, 0.18)", "rgba(0, 168, 232, 0.28)", "#9de8ff"],
    "SQLi Basics": ["rgba(231, 76, 60, 0.18)", "rgba(231, 76, 60, 0.3)", "#ffb4aa"],
    "XSS Basics": ["rgba(243, 156, 18, 0.18)", "rgba(243, 156, 18, 0.28)", "#ffd79d"],
    "BurpSuite": ["rgba(230, 126, 34, 0.2)", "rgba(230, 126, 34, 0.3)", "#ffc48b"],
    "Gobuster": ["rgba(26, 188, 156, 0.18)", "rgba(26, 188, 156, 0.28)", "#a9f4e7"],
    "Nmap": ["rgba(52, 152, 219, 0.18)", "rgba(52, 152, 219, 0.3)", "#a8ddff"],
    "Wireshark": ["rgba(41, 128, 185, 0.2)", "rgba(41, 128, 185, 0.3)", "#9bcff5"],
    "Kali Linux": ["rgba(0, 153, 255, 0.18)", "rgba(0, 153, 255, 0.28)", "#a5dcff"],
    "VSCode": ["rgba(0, 122, 204, 0.2)", "rgba(0, 122, 204, 0.3)", "#9bd9ff"],
    "Git": ["rgba(240, 80, 51, 0.2)", "rgba(240, 80, 51, 0.3)", "#ffb5a5"],
    "GitHub": ["rgba(136, 136, 136, 0.16)", "rgba(136, 136, 136, 0.28)", "#f0f0f0"]
};
const techBadgeColorMap = {
    "Python": ["#356f9f", "#ffd343"],
    "Subnetting": ["#2b7fb0", "#89d2ef"],
    "TCP/IP": ["#1d7aa8", "#7dd3fc"],
    "Protocols": ["#195d80", "#7bc9f0"],
    "Ports": ["#195d80", "#7bc9f0"],
    "HTTP/HTTPS": ["#286f8d", "#8de2ff"],
    "Bash": ["#246b4c", "#99f6c3"],
    "Kali Linux": ["#1f5f83", "#95d9ff"],
    "Regex": ["#5f4a91", "#d8c7ff"],
    "Reconnaissance": ["#1c6e69", "#8ff2e9"],
    "OWASP Top 10": ["#7a2f45", "#ffb6c7"],
    "HTML": ["#d14f27", "#ffba8d"],
    "CSS": ["#2368c4", "#92c5ff"],
    "JavaScript": ["#9a8a1d", "#fff1a3"],
    "Express": ["#4b5563", "#d1d5db"],
    "PostgreSQL": ["#336791", "#9ac6ef"],
    "Teaching": ["#92551f", "#ffd29b"],
    "Presenting": ["#8c3a5e", "#ffc0d9"],
    "Content Creation": ["#7b4bc2", "#d8c3ff"]
};

function getSkillName(skillItem) {
    const textNode = Array.from(skillItem.childNodes).find((node) => {
        return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
    });

    return textNode ? textNode.textContent.trim() : "Skill";
}

skillCategories.forEach((category) => {
    const list = category.querySelector("ul");

    if (!list) {
        return;
    }

    const skillItems = Array.from(list.querySelectorAll("li"));
    skillItems.forEach((skillItem) => {
        const skillName = getSkillName(skillItem);
        const [softAccent, strongAccent, iconColor] = skillColorMap[skillName] || ["rgba(57, 167, 211, 0.14)", "rgba(57, 167, 211, 0.22)", "#7ad7f9"];
        skillItem.textContent = "";
        skillItem.classList.add("skill-chip-item");

        const icon = document.createElement("i");
        icon.className = skillIconMap[skillName] || "fa-solid fa-circle-nodes";
        icon.setAttribute("aria-hidden", "true");

        const pill = document.createElement("span");
        pill.className = "skill-pill";
        pill.style.setProperty("--skill-accent-soft", softAccent);
        pill.style.setProperty("--skill-accent-strong", strongAccent);
        pill.style.setProperty("--skill-border", strongAccent);
        pill.style.setProperty("--skill-hover-border", iconColor);
        pill.style.setProperty("--skill-icon", iconColor);
        pill.style.setProperty("--skill-icon-bg", softAccent);
        pill.style.setProperty("--skill-icon-border", strongAccent);
        pill.appendChild(icon);
        pill.append(` ${skillName}`);
        skillItem.appendChild(pill);
    });
});

projectTechStacks.forEach((techStack) => {
    function updateTechAlignment() {
        const isScrollable = techStack.scrollWidth > techStack.clientWidth + 2;
        techStack.classList.toggle("is-scrollable", isScrollable);
    }

    const technologies = techStack.textContent
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);

    techStack.textContent = "";

    technologies.forEach((technology) => {
        const badge = document.createElement("span");
        const [bgColor, textColor] = techBadgeColorMap[technology] || ["#245a72", "#d8f5ff"];

        badge.className = "tech-badge";
        badge.textContent = technology;
        badge.style.background = `linear-gradient(180deg, ${bgColor}33, rgba(18, 22, 28, 0.92))`;
        badge.style.borderColor = `${bgColor}66`;
        badge.style.color = textColor;

        techStack.appendChild(badge);
    });

    techStack.addEventListener("wheel", (event) => {
        if (techStack.scrollWidth <= techStack.clientWidth) {
            return;
        }

        event.preventDefault();
        techStack.scrollLeft += event.deltaY;
    }, { passive: false });

    updateTechAlignment();
    window.addEventListener("resize", updateTechAlignment);
});
