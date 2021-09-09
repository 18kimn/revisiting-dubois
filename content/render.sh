#!/bin/sh

pandoc.exe -f markdown \
  -o proposal.pdf \
  --pdf-engine=xelatex.exe \
  proposal.md

echo file render finished
