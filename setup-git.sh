#!/bin/bash
cd /Users/grokia/portfolio

# Initialize git
git init

# Configure user
git config user.name "Ketketm"
git config user.email "margaux.ketttner@gmail.com"

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio Arthur SOULEIL"

# Check status
echo "=== Git Status ==="
git status

echo ""
echo "✅ Git initialized and committed!"
echo ""
echo "Next step - Push to GitHub:"
echo "1. Create repo at https://github.com/new (name: arthur-portfolio)"
echo "2. Run: git remote add origin https://github.com/Ketketm/arthur-portfolio.git"
echo "3. Run: git push -u origin main"
