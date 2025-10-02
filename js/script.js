
// Main JavaScript for Oishi Portfolio

document.addEventListener('DOMContentLoaded', function () {
	// Terminal animation and command logic can be moved here if needed
});
const terminal = document.getElementById('terminal');
let isTyping = false;

// Initial commands to execute on page load
const initialCommands = [
	{ type: 'command', text: 'whoami', delay: 500 },
	{ type: 'output', text: "Hi, I'm Oishi, an IT Network & Systems Engineer with 8+ years of experience.", delay: 100 },
	{ type: 'command', text: 'show specialist', delay: 1500 },
	{ type: 'output', text: 'Specialized in designing, monitoring, and automating complex network infrastructures—including all aspects of data center operations.', delay: 100 },
	{ type: 'command', text: 'show love', delay: 1500 },
	{ type: 'output', text: 'Love troubleshooting and exploring any tech-related topics - AI, open-sources, self-hosting, automations.', delay: 100 },
	{ type: 'command', text: 'show hobbies', delay: 1500 },
	{ type: 'output', text: 'Gaming, football, Pentesting, Cybersecurity and tinkering with Hardware or Home Labs.', delay: 100 },
	{ type: 'command', text: 'help', delay: 2000 },
	{ type: 'help', delay: 100 },
	{ type: 'input', delay: 1000 }
];

// Create terminal line element
function createLine(type, text = '') {
	const line = document.createElement('div');
	line.className = 'terminal-line';
    
	if (type === 'command') {
		line.innerHTML = `<span class="prompt">user@you:~$</span> <span class="command">${text}</span>`;
	} else if (type === 'output') {
		line.innerHTML = `<span class="output">${text}</span>`;
	} else if (type === 'input') {
		line.className = 'input-line';
		line.innerHTML = `<span class="prompt">user@you:~$</span> <input type="text" class="terminal-input" id="userInput" placeholder="Type 'help' for commands">`;
	} else if (type === 'help') {
		line.innerHTML = `<span class="help-menu">Available commands:
  <span class="info">about</span>      - Learn more about me
  <span class="info">skills</span>     - View technical skills
  <span class="info">experience</span> - Work experience
  <span class="info">projects</span>   - Featured projects
  <span class="info">contact</span>    - Contact information
  <span class="info">clear</span>      - Clear terminal
  <span class="info">help</span>       - Show this menu</span>`;
	}
    
	terminal.appendChild(line);
	terminal.scrollTop = terminal.scrollHeight;
	return line;
}

// Type text with animation
function typeText(element, text, speed = 50) {
	return new Promise(resolve => {
		let i = 0;
		const span = element.querySelector('.command') || element.querySelector('.output');
		if (!span) {
			resolve();
			return;
		}
        
		span.textContent = '';
		span.classList.add('typing');
        
		const interval = setInterval(() => {
			if (i < text.length) {
				span.textContent += text.charAt(i);
				i++;
				terminal.scrollTop = terminal.scrollHeight;
			} else {
				clearInterval(interval);
				span.classList.remove('typing');
				resolve();
			}
		}, speed);
	});
}

// Execute command queue
async function executeCommandQueue() {
	if (isTyping) return;
	isTyping = true;

	for (const cmd of initialCommands) {
		await new Promise(resolve => setTimeout(resolve, cmd.delay));
        
		if (cmd.type === 'command') {
			const line = createLine('command', '');
			await typeText(line, cmd.text, 30);
		} else if (cmd.type === 'output') {
			const line = createLine('output', '');
			await typeText(line, cmd.text, 15);
		} else if (cmd.type === 'help') {
			createLine('help');
		} else if (cmd.type === 'input') {
			createLine('input');
			document.getElementById('userInput')?.focus();
		}
	}

	isTyping = false;
}

// Command responses
const responses = {
	about: `I'm a passionate Network Engineer specializing in enterprise infrastructure design and automation. 
With over 8 years of experience, I've worked on large-scale data center operations, 
network monitoring systems, and infrastructure automation projects.`,
    
	skills: `Technical Skills:
• Network: Cisco, Juniper, Fortinet, pfSense
• Automation: Python, Ansible, Terraform
• Monitoring: Nagios, Zabbix, Prometheus, Grafana
• Virtualization: VMware, Proxmox, KVM
• Cloud: AWS, Azure, GCP`,

	experience: `Work Experience:
→ Senior Network Engineer | Tech Corp (2020 - Present)
  - Designed enterprise network infrastructure
  - Automated deployment processes
  
→ Network Administrator | DataCenter Solutions (2017 - 2020)
  - Managed 500+ network devices
  - Implemented monitoring solutions`,

	projects: `Featured Projects:
1. Network Automation Framework
   - Automated 200+ devices configuration
   - Tech: Python, Ansible, GitLab CI/CD
   
2. HomeLab Infrastructure
   - 12-node Proxmox cluster with 50+ VMs
   
3. Penetration Testing Lab
   - Custom vulnerable VMs for training`,

	contact: `Contact Information:
📧 Email: alvanadittya18@gmail.com
📱 Location: Jayapura, abepura, Indonesia
🔗 GitHub: github.com/Oishi963
💼 LinkedIn: linkedin.com/in/oishi`,

	clear: 'CLEAR_TERMINAL',
    
	help: `Available commands:
  about      - Learn more about me
  skills     - View technical skills
  experience - Work experience
  projects   - Featured projects
  contact    - Contact information
  clear      - Clear terminal
  help       - Show this menu`
};

// Handle user commands
function handleCommand(cmd) {
	const command = cmd.toLowerCase().trim();
    
	if (command === '') return;

	createLine('command', cmd);

	if (command === 'clear') {
		setTimeout(() => {
			terminal.innerHTML = '';
			createLine('input');
			document.getElementById('userInput')?.focus();
		}, 100);
		return;
	}

	if (responses[command]) {
		setTimeout(() => {
			createLine('output', responses[command]);
			createLine('input');
			document.getElementById('userInput')?.focus();
		}, 300);
	} else {
		setTimeout(() => {
			createLine('output', `<span class="error">Command not found: ${cmd}</span>\nType 'help' for available commands.`);
			createLine('input');
			document.getElementById('userInput')?.focus();
		}, 300);
	}
}

// Event listeners
document.addEventListener('keydown', (e) => {
	const input = document.getElementById('userInput');
	if (input && e.key === 'Enter') {
		const cmd = input.value;
		input.remove();
		handleCommand(cmd);
	}
});

window.addEventListener('load', () => {
	executeCommandQueue();
});

document.addEventListener('click', () => {
	const input = document.getElementById('userInput');
	if (input) input.focus();
});

document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});
