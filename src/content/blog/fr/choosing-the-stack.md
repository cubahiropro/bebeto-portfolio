---
title: Flutter, Astro ou Angular ? Comment je choisis ma pile technique
description: Une règle pratique tirée des projets que j’ai livrés, d’une application mobile à une plateforme avec comptes.
date: 2026-08-03
image: /images/projects/tutorpreuneur-burundi-learning-platform.webp
category: Ingénierie
tags: [Flutter, Astro, Angular, Django]
---

Je dessine moi-même chaque écran, je cherche donc des outils qui me permettent de construire exactement ce que j’ai dessiné. Au fil des projets de ce site, une règle simple s’est dégagée. Je pars de deux questions : quel appareil les gens vont-ils utiliser, et quelles données le produit doit-il conserver ?

## Flutter pour les applications qui vivent sur le téléphone

Viva et E-rent sont des applications mobiles, j’utilise donc Flutter. Une seule base de code couvre Android et iOS, et je garde un contrôle total sur chaque pixel de l’interface. Quand le produit est l’application elle-même, ce contrôle vaut plus que tout le reste.

## Astro pour les sites qui doivent charger vite

The Haven et Harvest sont des sites faits surtout de photos et de texte. Astro n’envoie presque aucun JavaScript par défaut : les pages restent légères sur un téléphone et avec des données mobiles. Je le choisis dès que la mission principale est de présenter quelque chose et de faciliter le contact.

## Angular, Django et PostgreSQL pour les plateformes avec comptes

Tutorpreneur Burundi met en relation des apprenants, des tuteurs et des entrepreneurs : il lui faut des comptes, des données et plusieurs écrans qui partagent un état. Angular, avec NgRx pour l’état et la gestion des traductions intégrée, s’y prête très bien. Django et PostgreSQL se placent derrière pour les données. C’est plus de mécanique qu’un site vitrine n’en demande, et exactement la bonne dose pour une plateforme.

## La règle

Partir de l’appareil de l’utilisateur et des données, puis choisir l’outil. Pas l’inverse. Une pile qui impressionne sur un CV mais ne convient ni à l’appareil ni aux données coûte aux personnes qui utilisent le produit, pas à celle qui l’a choisie.
