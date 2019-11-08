---
layout: layout-documentation
product: weaviate
sub-menu: Features
product-order: 1
title: Adding synonyms
description: How to add custom synonyms to the contextionary
tags: ['Contextionary', 'Synonyms']
menu-order: 2
open-graph-type: article
og-img: documentation.jpg
---

# Adding Synonyms Guide

{% include badges.html %}

## Index

- [Basics](#basics)
- [Introduction](#introduction)

## Basics
- Concepts in the Contextionary can be overwritten and new concepts can be added to the Contextionary.
- A `POST` request to the RESTful endpoint `/c11y/extensions` is for extending the contextionary with custom concepts.
- a `GET` request to the RESTful endpoint `/c11y/concepts/{}` returns if a concept is part of the Contextionary. 

## Introduction
Concepts in the Contextionary can be overwritten and new concepts can be added to the Contextionary. 
- A contextionary version `xxxxx-v0.4.0` or higher is required. 
- Contextionary version `xxxxx-v0.4.0` does not support a weight other than 1 in a custom extension yet. Future versions will allow any weight between 0 and 1.

## Usage
