---
title: Flutter, Astro or Angular? How I choose the stack
description: A practical rule of thumb from the projects I have shipped, from a mobile app to a platform with accounts.
date: 2026-08-03
image: /images/projects/tutorpreuneur-burundi-learning-platform.webp
category: Engineering
tags: [Flutter, Astro, Angular, Django]
---

I design every screen myself, so I look for tools that let me build exactly what I drew. Over the projects on this site, a simple rule has emerged. I start from two questions: what device will people use, and what data does the product have to keep?

## Flutter for apps that live on the phone

Viva and E-rent are mobile apps, so I use Flutter. One codebase covers Android and iOS, and I keep full control of every pixel of the interface. When the product is the app itself, that control is worth more than anything else.

## Astro for websites that must load fast

The Haven and Harvest are websites made mostly of photos and text. Astro sends almost no JavaScript by default, so the pages stay light on a phone and on mobile data. I choose it whenever the main job is to present something and make it easy to contact someone.

## Angular, Django and PostgreSQL for platforms with accounts

Tutorpreneur Burundi connects learners, tutors and entrepreneurs, so it needs accounts, data and several screens that share state. Angular, with NgRx for state and translation support built in, fits that well. Django and PostgreSQL sit behind it for the data. It is more machinery than a brochure site needs, and exactly the right amount for a platform.

## The rule

Start from the user's device and from the data, then pick the tool. Not the other way round. A stack that looks impressive on a CV but does not fit the device or the data costs the people using the product, not the person who chose it.
