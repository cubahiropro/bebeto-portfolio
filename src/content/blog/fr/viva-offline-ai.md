---
title: Un assistant qui ne quitte jamais votre téléphone
description: Comment Viva garde son intelligence sur l’appareil, et pourquoi ce seul choix a façonné tout le produit.
date: 2026-10-12
image: /images/projects/viva-ai-friendly-robot-assistant.webp
category: IA & Mobile
tags: [Flutter, TensorFlow Lite, Confidentialité]
---

La plupart des applications « intelligentes » fonctionnent de la même façon : vos données partent vers un serveur, un modèle y tourne, et une réponse revient. Pour Viva, une boîte à outils de vie personnelle, je voulais l’inverse.

## L’idée

Viva réunit vos tâches, dépenses, humeur, notes, santé, objectifs et sommeil dans une seule application, et elle fonctionne entièrement hors ligne. Si l’application marche sans connexion, l’intelligence qui la nourrit doit elle aussi vivre sur le téléphone.

## Les contraintes que je me suis fixées

Viva AI est un petit modèle TensorFlow Lite. Je lui ai donné deux objectifs : moins de 5 Mo, et moins de 100 ms de temps processeur pour produire une réponse. Ce ne sont pas des détails. Ils décident si l’application paraît instantanée sur un téléphone Android modeste, et si quelqu’un dont le stockage est limité la gardera installée.

## La confidentialité par l’architecture

Comme le modèle tourne sur l’appareil, les données personnelles n’ont jamais besoin de le quitter. Il n’y a pas de compte cloud à pirater, et la promesse de confidentialité tient en une ligne : tout reste sur votre téléphone. Pour la même raison, j’ai entraîné le modèle uniquement sur des données synthétiques. Il n’a jamais eu besoin des vraies finances, du vrai sommeil ou des vrais dossiers de santé de qui que ce soit.

## Avec quoi il est construit

Python, TensorFlow et Keras, NumPy et pandas, scikit-learn, et SHAP pour comprendre pourquoi le modèle suggère ce qu’il suggère. L’application elle-même est écrite avec Flutter.

## La leçon

Décidez où vivent les données avant de décider quoi que ce soit d’autre. La taille du modèle, les écrans et même le modèle économique découlent de ce seul choix. Les formules de Viva se vendent en francs burundais et se débloquent avec un code : il n’y a donc pas non plus de serveur de paiement à maintenir.
