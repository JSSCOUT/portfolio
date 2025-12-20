# Portfolio - Hannah Jade Corpuz

A modern, responsive portfolio website showcasing projects and skills.

## Git Setup Commands

### First Time Setup (Configure Git)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initialize Repository
```bash
git init
```

### Add Files and Commit
```bash
git add .
git commit -m "Your commit message"
```

### Connect to Remote Repository
```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
```

### Push to Remote
```bash
# First push (sets upstream)
git push -u origin main

# Subsequent pushes
git push
```

### If Remote Has Existing Commits
```bash
# Option 1: Pull and rebase first
git pull origin main --rebase
git push -u origin main

# Option 2: Force push (overwrites remote)
git push -u origin main --force
```

### Other Useful Commands
```bash
# Check status
git status

# View remotes
git remote -v

# Remove remote
git remote remove origin

# Change remote URL
git remote set-url origin https://github.com/USERNAME/NEW-REPO.git
```

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (Intersection Observer, LocalStorage)
