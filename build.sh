#!/usr/bin/env bash

# Download stork binary
curl -L https://files.stork-search.net/releases/latest/stork-ubuntu-latest -o stork
# make it excutable
chmod +x stork

# Run eleventy build command
npm run build

# Build stork index
./stork --build dist/stork-config.toml
