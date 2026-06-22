#!/bin/bash
# Auto-deploy script for Avenida website
# Checks for new commits and deploys to Cloudflare Pages if changes detected

set -e
REPO_DIR="/root/avenida"
STATE_FILE="/root/.avenida_last_deploy"
TOKEN_FILE="/root/.cf_pages_token"

cd "$REPO_DIR"

# Fetch latest from GitHub
git fetch origin main 2>&1

# Get current remote HEAD
REMOTE_HASH=$(git rev-parse origin/main)
LOCAL_HASH=$(git rev-parse HEAD)
LAST_DEPLOYED=$(cat "$STATE_FILE" 2>/dev/null || echo "")

# If remote hasn't changed, skip
if [ "$REMOTE_HASH" = "$LAST_DEPLOYED" ]; then
    echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] No new commits. Skipping deploy."
    exit 0
fi

echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] New commit detected: $REMOTE_HASH"

# Pull latest
git pull origin main 2>&1

# Build
echo "Building..."
pnpm build 2>&1

# Deploy
echo "Deploying..."
export CLOUDFLARE_API_TOKEN=$(cat "$TOKEN_FILE")
npx wrangler pages deploy out/ --project-name=avenida --commit-dirty=true 2>&1

# Save state
echo "$REMOTE_HASH" > "$STATE_FILE"
echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy complete!"
