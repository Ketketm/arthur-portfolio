#!/bin/bash
set -e

cd /Users/grokia/portfolio

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    echo "✓ Git initialized"
fi

# Configure user
git config user.name "Ketketm"
git config user.email "margaux.ketttner@gmail.com"
echo "✓ Git config set"

# Add all files
git add .
echo "✓ Files staged"

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit"
else
    # Commit
    git commit -m "Initial commit - Portfolio Arthur SOULEIL"
    echo "✓ Committed"
fi

# Show status
echo ""
echo "=== Git Status ==="
git status
echo ""
echo "=== Ready to push ==="
echo "Next steps:"
echo "1. Create repo at https://github.com/new (name: arthur-portfolio)"
echo "2. git remote add origin https://github.com/Ketketm/arthur-portfolio.git"
echo "3. git push -u origin main"
