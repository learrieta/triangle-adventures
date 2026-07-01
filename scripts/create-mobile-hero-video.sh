#!/usr/bin/env bash
set -euo pipefail

INPUT="src/assets/Home/tal.mp4"
OUTPUT="public/videos/tal-mobile.mp4"
POSTER="public/images/hero-mobile-poster.jpg"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required. Install it first, then run this script again."
  exit 1
fi

if [ ! -f "$INPUT" ]; then
  echo "Could not find $INPUT. Make sure Git LFS files are pulled with: git lfs pull"
  exit 1
fi

mkdir -p public/videos public/images

# Mobile hero video target:
# - 720px wide
# - no audio
# - faststart for quicker playback startup
# - short 12 second loop-friendly clip
# - moderate compression for mobile page speed
ffmpeg -y \
  -i "$INPUT" \
  -t 12 \
  -vf "scale=720:-2,fps=24" \
  -an \
  -c:v libx264 \
  -preset veryslow \
  -crf 30 \
  -movflags +faststart \
  "$OUTPUT"

# Poster image for instant visual paint while the video loads.
ffmpeg -y \
  -ss 00:00:01 \
  -i "$INPUT" \
  -frames:v 1 \
  -vf "scale=720:-2" \
  -q:v 4 \
  "$POSTER"

echo "Created $OUTPUT and $POSTER"
