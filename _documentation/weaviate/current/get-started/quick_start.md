---
layout: layout-documentation
bodyclass: ["page--guides", " "]
product: weaviate
sub-menu: Get started
product-order: 1
title: Quick start
description: Getting started with Weaviate
tags: ['introduction', 'Weaviate', 'Contextionary']
menu-order: 1
open-graph-type: article
og-img: documentation.jpg
---

# Quick start quide

{% include badges.html %}

Learn how to get started with Weaviate, using a simple Docker-compose setup. A complete Weaviate stack can be directly run with the Docker compose files available. This setup will also include the Weaviate Playground.

## Index

- [Preparation](#preparation)
- [Installation](#installation)
- [Validating if the Weaviate is online](#validating-if-the-weaviate-is-online)
- [Creating a schema](#creating-a-schema)
- [Adding entities](#adding-entities)
- [Querying with GraphQL](#querying-with-graphql)
- [FAQ](#frequently-asked-questions)

## Preparation

Check you have Docker and Docker-compose installed:

```bash
$ docker --version
$ docker-compose --version
```

If you do not have Docker installed, you can read
[here](https://docs.docker.com/install/) how to do this on a multitude of
operating systems.

You are now ready to get started! If you run into issues, please [let us know](#frequently-asked-questions).

#### Important information

1. The docker-compose setup contains the entire weaviate stack, including a
   Elasticsearch connector. To run this stack you should have
   at least **1 CPU and 3 GB of memory available**. If you are planning to import
   large amounts of data, a larger setup is recommended.
2. It takes some time to start up the whole infrastructure. During this time,
   the backing databases will produce plenty of log output. We recommend to not
   attach to the log-output of the entire setup, but only to those of weaviate.
   Weaviate will will wait up to 2 minutes for the backing databases to come
   up. This is indicated by logging `waiting to establish database connection,
   this can take some time`. You will know that the entire stack is ready when
   weaviate logs the bind address and port it is listenting on.
3. The configuration values used in the docker-compose setup reflect a "Try it
   out" or development setup. Production usage requires considerably more
   resources. Do not use the docker-compose setup below in production. For
   production setups, we recommend running the weaviate stack on Kubernetes.

## Installation

Want another language? Make sure to let us know [here](https://github.com/semi-technologies/weaviate/issues).

### Weaviate with an English contextionary

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/docker-compose.yml
# Run Docker compose
$ docker-compose up
```

### Weaviate with a Dutch contextionary

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/docker-compose.yml
# Run Docker compose
$ docker-compose up
```

Warning: The output is quite verbose, for an alternative see [attaching to only
the log output of weaviate](./install.html#attaching-to-the-log-output-of-only-weaviate).

## Validating if the Weaviate is online

Check if Weaviate is up and running by using the following curl command:

```bash
$ curl http://localhost:8080/v1/meta
```

The result should be an empty Weaviate:

```json
{
    "actionsSchema": {
        "classes": [],
        "type": "action"
    },
    "hostname": "http://[::]:8080",
    "thingsSchema": {
        "classes": [],
        "type": "thing"
    }
}
```

You are now ready to start using Weaviate!

## Creating a Schema

The schema describes how the knowledge graph is structured on which semantic elements it is based, you can read more in-depth what the Weaviate schema entails [here](../add-data/define_schema.html).

In this example, we are going to create a knowledge graph of a company. Although you can automate the import of a schema, we will do it manually now to get an understanding of how the schema is structured.

First, we will create the `Company` as a Weaviate-thing like this;

```bash
$ curl -X POST http://localhost:8080/v1/schema/things -H "Content-Type: application/json" -d '{
    "class": "Company",
    "keywords": [{
        "keyword": "business",
        "weight": 1.0
    }],
    "description": "Company in our Weaviate",
    "properties": [{
        "dataType": [
            "string"
        ],
        "cardinality": "atMostOne",
        "description": "Name of the Company",
        "name": "name",
        "keywords": [{
            "keyword": "identifier",
            "weight": 0.25
        }]
    }]
}'
```

Next, we want to create a `City` class to describe which city the company is in.

```bash
$ curl -X POST http://localhost:8080/v1/schema/things -H "Content-Type: application/json" -d '{
    "class": "City",
    "keywords": [{
        "keyword": "village",
        "weight": 0.01
    }],
    "description": "City",
    "properties": [{
        "dataType": [
            "string"
        ],
        "cardinality": "atMostOne",
        "description": "Name of the City",
        "name": "name",
        "keywords": [{
            "keyword": "identifier",
            "weight": 0.25
        }]
    }]
}'
```

Now we have two classes but we have not yet defined where the point to, this is because you can't create a cross-reference to a nonexisting class.

Let's update both classes to include cross-references.

First, we update the `Company` class:

```bash
$ curl -X POST http://localhost:8080/v1/schema/things/Zoo/properties -H "Content-Type: application/json" -d '{
  "dataType": [
    "City"
  ],
  "cardinality": "atMostOne",
  "description": "In which city this company is located",
  "name": "inCity",
  "keywords": []
}'
```

Secondly, we update the `City` class:

```bash
$ curl -X POST http://localhost:8080/v1/schema/things/City/properties -H "Content-Type: application/json" -d '{
  "dataType": [
    "Company"
  ],
  "cardinality": "atMostOne",
  "description": "Which companies are in this city?",
  "name": "hasCompany",
  "keywords": []
}'
```

#### Adding Special Types to the Schema

Besides cross-references, Weaviate has a variety of special data types like geocoding. Click [here](../add-data/define_schema.html#property-types) for an overview of available types.

Let's update the `City` class with a location.

```bash
$ curl -X POST http://localhost:8080/v1/schema/things/City/properties -H "Content-Type: application/json" -d '{
  "dataType": [
    "geoCoordinates"
  ],
  "cardinality": "atMostOne",
  "description": "Where is the city located on the earth?",
  "name": "location",
  "keywords": []
}'
```

## Adding entities

Now we have defined the schema, it is time to start adding data.

We are going to add two cities and two companies.

First the city of Amsterdam

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "City",
    "schema": {
        "name": "Amsterdam",
        "location": {
            "latitude": 52.22,
            "longitude": 4.54
        }
    }
}'
```

Results in:

```json
{
    "class": "City",
    "schema": {
        "location": {
            "latitude": 52.22,
            "longitude": 4.54
        },
        "name": "Amsterdam"
    },
    "creationTimeUnix": 1551613377976,
    "thingId": "6406759e-f6fb-47ba-a537-1a62728d2f55"
}
```

Next, the city of Cupertino

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "City",
    "schema": {
        "name": "Cupertino",
        "location": {
            "latitude": 37.323056, 
            "longitude": -122.031944
        }
    }
}'
```

which results in:

```json
{
    "class": "City",
    "schema": {
        "location": {
            "latitude": 37.323056, 
            "longitude": -122.031944
        },
        "name": "Cupertino"
    },
    "creationTimeUnix": 1551613417125,
    "thingId": "f15ba7e7-0635-4009-828b-7a631cd6840e"
}
```

Now, we are going to add the companies, note how we are defining the cross-reference:

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "Company",
    "schema": {
        "name": "SeMI Technologies",
        "inCity": {
            "beacon": "weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55"
        }
    }
}'
```

Which results in:

```json
{
    "class": "Company",
    "schema": {
        "inCity": {
            "beacon": "weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55"
        },
        "name": "SeMI Technologies"
    },
    "creationTimeUnix": 1551613482193,
    "thingId": "3c6ac167-d7e5-4479-a726-8341b9113e40"
}
```

Note how we are using the UUID of the city Amsterdam (which we created above) to point to the correct thing in the graph.

We will do the same for the Berlin zoo:

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "Company",
    "schema": {
        "name": "Apple",
        "inCity": {
            "beacon": "weaviate://localhost/things/f15ba7e7-0635-4009-828b-7a631cd6840e"
        }
    }
}'
```

Which results in:

```json
{
    "class": "Company",
    "schema": {
        "inCity": {
            "beacon": "weaviate://localhost/things/f15ba7e7-0635-4009-828b-7a631cd6840e"
        },
        "name": "Apple"
    },
    "creationTimeUnix": 1551613546490,
    "thingId": "5322d290-9682-4e7a-ae65-270cefeba8e5"
}
```

We now have created a mini-graph of 4 nodes. Let's explore the graph now!

## Querying with GraphQL

One of the features of Weaviate is the use of GraphQL to query the graph. The docker-compose setup comes with the Weaviate Playground which we will use to crawl the graph.

1. Open the Weaviate Playground by going to `http://playground.semi.technology`.
2. Fill in the URL of your Weaviate instance: `http://localhost:8080/v1/graphql`.
3. When the Weaviate Playground is loaded, click "GraphQL" in the right bottom of the screen.

You can learn more about all functionalities [here](../query-data/get).

Getting an overview of all Zoos would look like this:

```graphql
{
  Get{
    Things{
      Company{
        name
      }
    }
  }
}
```

We have added the company to a city, to get the name of the city, we have to use the `InCity{}` reference and define that we want to get the results based on a city. But before we can do this, we need to know what the available classes of `InCity{}` are. We can get these insights by clicking `InCity` and inspecting the type (`[CompanyInCityObj]`). Because there is only one possible type (`City`) we now know that `InCity{}` ingests the class: `City`.

```graphql
{
  Get {
    Things {
      Company {
        name
        InCity{
          ... on City{
            name
          }
        }
      }
    }
  }
}
```

Because we have set the `HasCompany` property, we can also reverse the query:

```graphql
{
  Get {
    Things {
      City {
        HasCompany {
          ... on Company {
            name
          }
        }
      }
    }
  }
}
```

### Explore

Exploring through the graph is possible using another function. If you use the `Explore` function, the `Contextionary` will be used to find objects you are looking for. For example, the following query will return objects with the class `City`. Although they are not named `place`, the objects are semantically close to cities, which is why cities will be returned. 

```graphql
{
  Explore (concepts: ["place"]) {
    className
    beacon
    certainty
  }
}
```


## Frequently Asked Questions

{% include support-links.html %}