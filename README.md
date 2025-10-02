# Oishi963.github.io
my resume
 cat > README.md << 'EOF'
# Oishi - Portfolio Website

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── main.css       # All styles
├── js/
│   └── script.js      # Terminal & interactions
├── assets/
│   └── images/        # Your images
└── README.md
```

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Or use Live Server in VS Code

## ✏️ Customization

### Update Your Information

**Skills (index.html)**
- Edit the skill cards in the `#skills` section
- Add your technologies under each category

**Projects (index.html)**
- Replace project images in `assets/images/`
- Update project titles and descriptions
- Add technology tags

**Experience (index.html)**
- Fill in job titles, companies, and dates
- List your responsibilities

**Contact (index.html)**
- Update email, LinkedIn, GitHub links
- Change location

### Terminal Commands

Edit `js/script.js` to customize:
- Initial typing animation (`initialCommands` array)
- Command responses (`responses` object)
- Add new commands

## 🎨 Styling

All styles are in `css/main.css`:
- Colors: Search for `#00d9ff` (cyan) to change theme
- Fonts: Change in `:root` or body selector
- Layout: Modify grid templates

## 📝 To-Do

- [ ] Add your skills to each category
- [ ] Upload project images
- [ ] Fill work experience
- [ ] Update contact information
- [ ] Customize terminal responses
- [ ] Add more projects

## 🌐 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```
Then enable GitHub Pages in repository settings.

### Netlify
Drag and drop the `portfolio` folder to Netlify.

## 📄 License

Free to use and modify for your portfolio!
EOF
