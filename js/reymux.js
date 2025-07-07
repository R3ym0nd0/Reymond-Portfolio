const fileSystem = {    
    "r3ym0nd" : {
        "Home": {
            "whoami.txt"  : `Name: Reymond Joaquin
Description: I'm a BSIS student and an aspiring Web Penetration Tester with a passion for building my own pentesting tools and expanding my foundational skills in IT.`,
            "Contact.txt" : "LinkedIn: https://www.linkedin.com/in/reymond-joaquin-3b5954308/",
            "Resume.txt"  : "I'm not planning to make this sh#t for now, maybe soon"
        },

        "Journey": {
            "Curiosity_Starts.txt"  : `Date: Early 2023

    I learned Python, HTML, and CSS, then stopped after getting distracted by gaming.`,
            "The_Comeback.txt"      : `Date: Early 2024
            
    Relearned Python. Discovered Ethical Hacking and learned Linux, scripting, and networking.`,
            "Building_Projects.txt" : `Date: Mid 2024
        
    Created tools such as IPnetSolver, OpenPortHunter, WebDirsCovery, and AutoWebRecon. Also discovered GitHub.`,
            "Web_Dev.txt"           : `Date: 2025
    Learning frontend (HTML, CSS, and JS). Practicing recon skills on TryHackMe and HackTheBox.`,
            "Continous_Learning.txt"    : `Date: Now
            
    Building my portfolio as a project and sharpening my skills every day.`
        },

        "Skills": {
            "Networking_Fundamentals" : {
                "OSI_Model.txt"       : "It helps me understand how data flows theoretically.",
                "TCP_IP.txt"          : "It helps me understand and analyze packets in Wireshark.",
                "Subnetting.txt"      : "It helps me understand my target's network size and scan ranges.",
                "Topologies.txt"      : "It helps me understand the layout of networks.",
                "Network_Devices.txt" : "It helps me understand how network traffic flows behind the scenes.",
                "Protocols_Ports.txt" : "It helps me understand services on my target to find potential entry points."
            },

            "Scripting_Programming"   : {
                "Bash_Scripting.txt"  : "It helps me automate tasks or chain tools into a single script.",
                "Python.txt"          : "It helps me automate tasks and build my own tools."
            },

            "Pentesting_Tools"        : {
                "Nmap.txt"            : "It helps me discover open ports and gather information about my target.",
                "Wireshark.txt"       : "It helps me inspect and analyze network packets in real time.",
                "BurpSuite.txt"       : "It helps me inspect, modify, and analyze web requests and responses.",
                "Gobuster.txt"        : "It helps me brute-force web directories to find hidden or useful information.",
                "Wafw00f.txt"         : "It helps me quickly check if my target is using a WAF or not.",
                "cURL.txt"            : "It helps me modify requests, see the content of a file or page before downloading or clicking it.",
                "Netcat.txt"          : "It helps me listen on a port or connect to my target.",
                "Hydra.txt"           : "It helps me brute-force passwords efficiently on my target."
            },

            "OS_Tech_Tools"           : {
                "Kali_Linux.txt"      : "This is where I do all my pentesting since it has all the tools I need.",
                "Windows.txt"         : "This is where I do most of my coding because it runs fast and feels smooth.",
                "VSCode.txt"          : "My main editor for building, testing, and managing all my projects.",
                "Git_Github.txt"      : "This is where I manage versions and share all of my projects."
            }
        },

        "Projects": {
            "IPnetSolver.sh"      : "A tool written in Python for automating subnetting, including FLSM, VLSM, supernetting, and converting whole numbers/IP addresses to binary.",
            "OpenPortHunter.sh"   : "A tool written in Python that identifies open ports and provides WHOIS information for the target before scanning.",
            "WebDirsCovery.sh"    : "A tool written in Python that automates the process of finding hidden directories on websites.",
            "AutoWebRecon.sh"     : "A tool written in Bash script for automating website reconnaissance using built-in Kali tools.",
            "Personal_Website.sh" : "This website itself! I built from scratch to share my journey, skills, projects and writeups."
        }
    },
    
    "root" : {
        "flag.txt" : "323j2n321j3b1232knskd11msls (this is just a random letters and numbers lol)"
    }
};

let currentPath = [];

function getCurrentDir() {
    let dir = fileSystem;
    for (const folder of currentPath) {
        dir = dir[folder];
    }
    return dir;
};

function handleCD(command, responseLine) {
    let dir = getCurrentDir();

    // This will become like this: ["cd", "Projects"] 
    const folder = command.split(" ")[1];

    // For file that has .txt to grab only the name of the file
    const specificFile = folder.split(".")[1];

    // This will check if folder("Projects" for example) are in dir
    if (folder in dir) {
        if (specificFile === "txt") {
            responseLine.textContent = `cd: not a directory: ${folder}`;
        } else {
            // go inside folder("Projects")
            currentPath.push(folder); 
        }  
    } else if (folder === "..") {
        currentPath.pop();
    } else if (folder === "/") {
        // this will resets the path
        currentPath = []; 
    } else {
        // This will print if the folder is not existing
        responseLine.textContent = `No such directory: ${folder}`;
    }
};

function handlePWD(responseLine) {
    //               CONTDITION         |       TRUE                   FALSE
    const path = currentPath.length > 0 ? "/" + currentPath.join("/") : "/";
    responseLine.textContent = path;
};

function handleLS(responseLine) {
    const dir = getCurrentDir();
    const listDir = Object.keys(dir);
    responseLine.textContent = listDir.join("  ");
};

function handleHELP(responseLine) {
    responseLine.textContent = 
    `Available commands:

Navigation:
    - pwd            Show current path
    - ls             List directory content
    - cd [dir]       Change directory
    - cd ..          Go back one directory
    - cd /           Go back to root directory

File Handling:
    - cat [file]     Display file content

System:
    - whoami         Show current user  
    - clear          Clear the terminal
    - help           Show this help menu`;
};

function handleCLEAR(outputContainer) {
    // clears the output container or the terminal
    outputContainer.innerHTML = "";
};

function handleCAT (command, responseLine) {
    const dir = getCurrentDir();
    // Grabbing the directory
    const file = command.split(" ")[1];
    // Grabbing the "txt" word
    const specificFile = file.split(".")[1];
    // This will check if specific file is text file
    if (specificFile === "txt" || specificFile === "sh") {
        responseLine.textContent = dir[file];
    } else {
        responseLine.textContent = `cat: ${file}: Is a directory`;
    }
};

function handleWHOAMI(responseLine) {
    user = currentPath.length > 0 ? currentPath[0] : "/";
    responseLine.textContent = user;
};

function updatePrompt() {
    const promptSpan = document.getElementById("prompt");

    const user = currentPath.length > 0 ? currentPath[0] : "/";
    promptSpan.textContent = `${user}㉿reymux:~$`;
};

const terminalInput = document.getElementById("terminal-input");
const outputContainer = document.getElementById("output-container");

terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const command = terminalInput.value.trim();

        // Clear input
        terminalInput.value = ""; 
        
        // Create new output lines
        const childOutput =  document.createElement("div") // Parent of the commandLine and responseLine
        const commandLine = document.createElement("div"); // Create <div></div>
        commandLine.innerHTML = `<span>$</span> ${command}`; // <div>$</span></div>
        const responseLine = document.createElement("div"); // Create another <div></div> 
        responseLine.style.whiteSpace = "pre-wrap";

        // List of command functions
        const commands = {
            "ls"     : () => handleLS(responseLine),
            "help"   : () => handleHELP(responseLine),
            "pwd"    : () => handlePWD(responseLine),
            "clear"  : () => handleCLEAR(outputContainer),
            "whoami" : () => handleWHOAMI(responseLine),
        }; 

        if (command.startsWith("cd ")) {
            handleCD(command, responseLine);
        } else if (command.startsWith("cat ")) {
            handleCAT(command, responseLine);
        } else if (command in commands) {
            commands[command]();
            if (command === "clear") {
                return;
            }
        } else {        
            switch (command) {
                case "cd":
                    responseLine.textContent = `${command}: try cd [directory]`; 
                    break;
                case "cat":
                    responseLine.textContent = `${command}: try cat [file]`; 
                    break;
                default:
                    responseLine.textContent = `${command}: command not found`; 
            }
        }

        updatePrompt();

        // Append to output
        childOutput.appendChild(commandLine);
        childOutput.appendChild(responseLine);
        outputContainer.appendChild(childOutput);  
    }
});