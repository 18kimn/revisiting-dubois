#!/bin/sh
BASENAME="${1%.*}"

pandoc -V geometry:margin=1in \
  --standalone \
  -f markdown \
  --citeproc \
  -o "$BASENAME.pdf" \
  --bibliography=references/references.bib \
  --csl=references/chicago-note-bibliography-with-ibid.csl \
  --pdf-engine=xelatex \
  $1

echo "file render for $1 finished"


