---
layout: layout-guide
product: weaviate
product-order: 1
title: Introduction
description: Learn more about Weaviate
tags: ['Installation', 'Schema']
video-link:
video-caption:
menu-order: 1
open-graph-type: article
---

# Introduction to Weaviate

Weaviate is an open source, GraphQL and RESTful API-enabled, knowledge graph based on a word vector storage mechanism called the Contextionary.

{% include badges.html %}

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why Weaviate

In almost any situation where you work with data, you store information related to something in the real world. This can be data about transactions, cars, airplanes, products, you name it. The problem with current databases is that it is difficult for the machine to grasp the context of the entity you reffer to in your datasets. Weaviate helps you to store vast amounts of data in a contextual way, thanks to our Contextionary, context is added to you data automatically. This means that when you store data about a _Company called Apple_, Weaviate automatically gets that this is related to an iPhone. If you want to learn how we do this, you can read more about our [Contextionary](#about-the-contextionary) here. We don't just want to store the data, but also the information and it context so that **knowledge** can be derived from it.

Because most data is related to something (e.g., Amsterdam _is the capital of_ The Netherlands) we not only store the concept itself, but also the relatation to other concepts (e.g., "the city Amsterdam" to "the country The Netherlands"). This means that the data you add to a Weaviate instance creates a network of knowledge, better known as a **graph**.

## Basic Terminology

When using Weaviate, there are a few concepts to be aware of.

| Term | Description |
| --- | --- |
| **Schema** | Where most knowledge graphs use an ontology, Weaviate uses a schema. The biggest difference sits in the fact that it doesn't matter for Weaviate _how_ you define what your data entails as long a a semantic relation can be made (e.g., for Weaviate "A Company with the name Netflix" if similar to "A Business with the name Netflix Inc.") |
| **Semantic Kinds** | Because of Weaviates semantic nature, we make a destinction in _semantic kinds_. Weaviate distincs two different kinds: *Things* and *Actions*. When creating a Weaviate Schema, you need to explain what Semantic Kind a data object entails. |
| **Thing** | A thing is a **semantic kind**, referring to an object (e.g., car, rocketship, product). The easiest way to think about Things are in the form of nouns. |
| **Action** | An action is a **semantic kind**, referring to an action (e.g., walking, dancing, buying). The easiest way to think about Things are in the form of verbs. |
| **Class** | A class is an instance of a semantic kind which you are free to define. E.g., the Class Company or the Class Move. In Weaviate, classes can be recognized because they always have a capitilized first character. You can set as many classes with a naming you choose. |
| **Property** | All classes have properties. E.g., the class Company might have the property _name_. In Weaviate, properties can be recognized because they always have a lowercase first character. |
| **Entity** | An entity reffers to something -often- in the world around us. E.g., _a Company with the name Apple_ reffers to an entity with a relation to _a Product with the name iPhone_. Weaviate's Contextionary tries to find as much entities in you data as possible. |
| **Concept** | Concepts are related to entities. Often you will use concepts to search in your datasets. If you dataset has data about _An Actor with the name Arnold Schwarzenegger_ and _an Actor with the name Al Pacino_, the concepts _Movie_ and _Terminator_ will find a closer relation to the first actor rather than the latter. |
| **Fuzzy** | Oppossed to most other data solutions, Weaviate uses [fuzzy logics](https://en.wikipedia.org/wiki/Fuzzy_logic) to interpret a query. The upside of this is that it might find answers to queries where a traditional data solution. Notably this would mean  |

## About the Contextionary

The Contextionary (derived from from **dictionary**) gives context to the language used in your dataset. At the root, Weaviate is based on the [*Global Vectors for Word Representation*](https://nlp.stanford.edu/projects/glove/) concept. When running a Weaviate instance, it comes 