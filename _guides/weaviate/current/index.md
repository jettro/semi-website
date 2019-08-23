---
layout: layout-guide
product: weaviate
product-order: 1
title: Introduction
description: Learn more about Weaviate
tags: ['introduction', 'Weaviate', 'Contextionary']
video-link:
video-caption:
menu-order: 1
---

# Introduction to Weaviate

Weaviate is an open-source, GraphQL and RESTful API-enabled, knowledge graph based on a word vector storage mechanism called the Contextionary. An overview of features can be found on the [product page](/products/weaviate.html).

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Why Weaviate?](#why-weaviate)
- [Basic Terminology](#basic-terminology)
- [About the Contextionary](#about-the-contextionary)
- [Miscelenious](#miscelenious)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why Weaviate?

In almost any situation where you work with data, you store information related to something in the real world. This can be data about transactions, cars, airplanes, products; you name it. The challenge with current databases is that it is difficult for the software to grasp the context of the entity you refer to in your datasets. Do the characters "Apple" refer to the company or the fruit?

![real world entities](/img/guides/entities.jpg "real world entities")

The Weaviate knowledge graph aims to solve this problem. Every time you store data to the knowledge graph, Weaviate indexes the data based on the linguistical context through a feature called The Contextionary. For example, when you store data about a _Company called Apple_, Weaviate automatically contextualizes the data related to an iPhone.

If you want to learn how the Contextionary does this, you can read more about our [Contextionary](#about-the-contextionary) here. We don't just want to store the data, but also the information and its context so that **knowledge** can be derived from it.

Because most data is related to something (e.g., Amsterdam _is the capital of_ The Netherlands) we store not only the concept itself but also the relation to other concepts (e.g., "the city Amsterdam" to "the country The Netherlands"). This means that the data you add to a Weaviate instance creates a network of knowledge, better known as a **graph**.

![why Weaviate is a knowledge graph](/img/guides/knowledge-graph.jpg "why Weaviate is a knowledge graph")

## Basic Terminology

| Term | Description |
| --- | --- |
| **Schema** | Where most knowledge graphs use an ontology, Weaviate uses a schema. The biggest difference sits in the fact that it doesn't matter for Weaviate _how_ you define what your data entails as long a semantic relation can be made (e.g., for Weaviate "A Company with the name Netflix" if similar to "A Business with the name Netflix Inc.") |
| **Semantic Kinds** | Because of Weaviates semantic nature, we make a distinction in _semantic kinds_. Weaviate distinct two different kinds: *Things* and *Actions*. When creating a Weaviate Schema, you need to explain what Semantic Kind a data object entails. |
| **Thing** | A thing is a **semantic kind**, referring to an object (e.g., car, rocketship, product). The easiest way to think about Things is in the form of nouns. |
| **Action** | An action is a **semantic kind**, referring to an action (e.g., walking, dancing, buying). The easiest way to think about Things is in the form of verbs. |
| **Class** | A class is an instance of a semantic kind which you are free to define. E.g., the Class Company or the Class Move. In Weaviate, classes can be recognized because they always have a capitalized first character. You can set as many classes with a naming you choose. |
| **Property** | All classes have properties. E.g., the class Company might have the property _name_. In Weaviate, properties can be recognized because they always have a lowercase first character. |
| **Entity** | An entity refers to something -often- in the world around us. E.g., _a Company with the name Apple_ refers to an entity with a relation to _a Product with the name iPhone_. Weaviate's Contextionary tries to find as many entities in your data as possible. |
| **Concept** | Concepts are related to entities. Often you will use concepts to search in your datasets. If your dataset has data about _An Actor with the name Arnold Schwarzenegger_ and _an Actor with the name Al Pacino_, the concepts _Movie_ and _Terminator_ will find a closer relation to the first actor rather than the latter. |
| **Fuzzy** | Opposed to most other data solutions, Weaviate uses [fuzzy logic](https://en.wikipedia.org/wiki/Fuzzy_logic) to interpret a query. The upside of this is that it might find answers to queries where a traditional data solution. Notably, this would mean |
| **C11y** | Abbreviation of Contextionary. |

## About the Contextionary

The Contextionary (derived from **dictionary**) gives context to the language used in your dataset. At the root, the Contextionary is based on the [*Global Vectors for Word Representation*](https://nlp.stanford.edu/projects/glove/) concept. When running a Weaviate instance, it comes with an out of the box Contextionary which is trained on Wikipedia and the Wiktionary.

The Contextionary doesn't use a traditional storage and indexing mechanism, but it uses vector positions to place data into a 600-dimensional space. When you run a Weaviate, it comes with a pre-trained Contextionary (you never have to do any training yourself) that contains the contextual representation that allows Weaviate to store data based on its contextual meaning.

An empty Weaviate could be envisioned like this:

![empty Weaviate](/img/guides/c11y-empty.jpg "empty Weaviate")

When using Weaviate's [RESTful API](./populate) to add data, the Contextionary calculates the position in the vector space that represents the real-world entity.

The process from a data object to vector reference is calculated based on the centroid of the words weighted by the occurrences of the individual words in the original training text-corpus (e.g., the word `the` is seen as less important than the word `apple`).

![how the Contextionary calculates a vector](/img/guides/object-to-vector.jpg "how the Contextionary calculates a vector")

When a new class object is created, it will be added to a Weaviate.

![Weaviate with data](/img/guides/c11y-with-data.jpg "Weaviate with data")

When using the [GraphQL interface](./query), you can target a thing or action directly, or by searching for a nearby concept. E.g., the `company Apple` from the previous illustration, can be found by searching for the concept iPhone.

## Miscelenious

- The Contextionary is limited to a single language per Weaviate instance (i.e., English Contextionary, Spanish Contextionary, etcetera).