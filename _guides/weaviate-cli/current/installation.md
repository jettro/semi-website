---
layout: layout-guide
product: weaviate-cli
product-order: 3
title: Installation
description: At it's root, Weaviate 
tags: ['Business', 'Summary', 'Blog']
video-link:
video-caption:
menu-order: 2
open-graph-type: article
---

# Installation Guide

{% include badges.html %}

## Index

- [Basics](#basics)
- [Installation](#installation)

## Basics

The CLI tool is tested on Linux and macOS distributions.

## Installation

For installation, choose a directory where you want to install the CLI tool and make sure Git, Python 3 and PIP 3 are installed. And follow;

```bash
# clone the latest version from Github
$ git clone https://github.com/semi-technologies/weaviate-cli
# cd into the directory
$ cd weaviate-cli
# install the requirements
$ pip3 install -r requirements.txt
# make the command `weaviate-cli` globally available
$ sudo ln -s $(pwd)/bin/weaviate-cli /usr/local/bin/weaviate-cli
```

## Frequently Asked Questions

{% include support-links.html %}