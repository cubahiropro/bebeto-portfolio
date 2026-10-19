---
title: An assistant that never leaves your phone
description: How Viva keeps its intelligence on the device, and why that one choice shaped the whole product.
date: 2026-10-12
image: /images/projects/viva-ai-friendly-robot-assistant.webp
category: AI & Mobile
tags: [Flutter, TensorFlow Lite, Privacy]
---

Most "smart" apps work the same way: your data travels to a server, a model runs there, and an answer comes back. For Viva, a personal life toolkit, I wanted the opposite.

## The idea

Viva keeps your tasks, expenses, mood, notes, health, goals and sleep in one app, and it works fully offline. If the app works without a connection, the intelligence behind it has to live on the phone too.

## The constraints I set myself

Viva AI is a small TensorFlow Lite model. I gave it two targets: under 5 MB in size, and under 100 ms of CPU time to produce an answer. These are not decoration. They decide whether the app feels instant on a modest Android phone, and whether someone with limited storage will keep it installed.

## Privacy by architecture

Because the model runs on the device, personal data never has to leave it. There is no cloud account to breach, and the privacy promise fits in one line: it stays on your phone. For the same reason I trained the model on synthetic data only. It never needed anyone's real finances, sleep or health records.

## What it is built with

Python, TensorFlow and Keras, NumPy and pandas, scikit-learn, and SHAP to understand why the model suggests what it suggests. The app itself is written in Flutter.

## The lesson

Decide where the data lives before you decide anything else. The model size, the screens and even the business model followed from that single choice. Viva's plans are sold in Burundian francs and unlocked with a code, so it does not need a payment server either.
