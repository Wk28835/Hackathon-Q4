---
id: 1
title: user-greeting
stage: general
date_iso: 2025-12-04
surface: agent
model: claude-opus-4-5-20251101
feature: none
branch: main
user:
command: hi
labels: ["greeting"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - history/prompts/general/1-user-greeting.general.prompt.md
tests_yaml: |
  - none
prompt_text: |
  hi
response_text: |
  Hello! How can I help you today?
outcome: User greeted.
evaluation: PHR created successfully.
---
Hello! How can I help you today?