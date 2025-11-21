#!/bin/bash

# This script detects which microservices have been modified
# It compares the PR branch against the base branch

BASE_BRANCH=${1:-"main"}
CHANGED_SERVICES=""

# Get list of changed files
CHANGED_FILES=$(git diff --name-only origin/$BASE_BRANCH...HEAD)

echo "Changed files:"
echo "$CHANGED_FILES"
echo "---"

# Check each service directory
# Modify these paths according to your actual project structure

# Check API service
if echo "$CHANGED_FILES" | grep -q "^apps/ezystudio-api/"; then
    CHANGED_SERVICES="$CHANGED_SERVICES api"
    echo "✓ API service has changes"
fi

# Check Web service
if echo "$CHANGED_FILES" | grep -q "^apps/ezystudio-web/"; then
    CHANGED_SERVICES="$CHANGED_SERVICES web"
    echo "✓ Web service has changes"
fi

# Check Admin service
if echo "$CHANGED_FILES" | grep -q "^apps/ezystudio-admin/"; then
    CHANGED_SERVICES="$CHANGED_SERVICES admin"
    echo "✓ Admin service has changes"
fi

# Check Worker service
if echo "$CHANGED_FILES" | grep -q "^apps/ezystudio-worker/"; then
    CHANGED_SERVICES="$CHANGED_SERVICES worker"
    echo "✓ Worker service has changes"
fi

# Check shared libraries (might affect all services)
if echo "$CHANGED_FILES" | grep -q "^packages/shared/\|^libs/"; then
    CHANGED_SERVICES="api web admin worker"
    echo "✓ Shared libraries changed - all services affected"
fi

# Trim whitespace and output
CHANGED_SERVICES=$(echo "$CHANGED_SERVICES" | xargs)

if [ -z "$CHANGED_SERVICES" ]; then
    echo "No service changes detected"
    echo "changed_services=" >> $GITHUB_OUTPUT
else
    echo "Services with changes: $CHANGED_SERVICES"
    echo "changed_services=$CHANGED_SERVICES" >> $GITHUB_OUTPUT
fi