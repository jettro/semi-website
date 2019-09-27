---
layout: layout-guide
bodyclass: ["page--guides", " "]
product: weaviate
product-order: 1
title: Getting Started
description: Getting started with Weaviate
tags: ['introduction', 'Weaviate', 'Contextionary']
menu-order: 2
---

# Getting started

{% include badges.html %}

Learn how to get started with Weaviate, using a simple Docker-compose setup. A complete Weaviate stack can be directly run with the Docker compose files available. This setup will also include the Weaviate Playground.

## Index

- [Preparation](#preparation)
- [Installation](#installation)
- [Starting Weaviate](#starting-weaviate)
- [Creating a schema](#creating-a-schema)
- [Adding Nodes](#adding-nodes)
- [Querying with GraphQL](#querying-with-graphql)
- [Querying with RESTful API](#querying-with-restful-api)
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

You are now ready to get started! If you run into issues, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate). Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).

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

Warning: The output is quite verbose, for an alternative see [attaching to only
the log output of weaviate](installation#attaching-to-the-log-output-of-only-weaviate).

```bash
# Download the runtime files (depends on jq and basename)
$ curl -s https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/tools/download-docker-compose-deps.sh "{{ site.weaviate_version }}" | bash
# Run Docker compose
$ docker-compose up
```

## Starting Weaviate

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

The schema describes how the knowledge graph is structured on which semantic elements it is based, you can read more in-depth what the Weaviate schema entails [here](schema).

In this example, we are going to create a knowledge graph of a zoo. Although you can automate the import of a schema, we will do it manually now to get an understanding of how the schema is structured.

First, we will create the `Zoo` as a Weaviate-thing like this;

```bash
$ curl -X POST http://localhost:8080/v1/schema/things -H "Content-Type: application/json" -d '{
    "class": "Zoo",
    "keywords": [{
        "keyword": "park",
        "weight": 0.01
    }, {
        "keyword": "animals",
        "weight": 0.01
    }],
    "description": "Animal park",
    "properties": [{
        "dataType": [
            "string"
        ],
        "cardinality": "atMostOne",
        "description": "Name of the Zoo",
        "name": "name",
        "keywords": [{
            "keyword": "identifier",
            "weight": 0.01
        }]
    }]
}'
```

Next, we want to create a `City` class to describe which city a zoo is in.

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
            "weight": 0.01
        }]
    }]
}'
```

Now we have two classes but we have not yet defined where the point to, this is because you can't create a cross-reference to a nonexisting class.

Let's update both classes to include cross-references.

First, we update the `Zoo` class:

```bash
$ curl -X POST http://localhost:8080/v1/schema/things/Zoo/properties -H "Content-Type: application/json" -d '{
  "dataType": [
    "City"
  ],
  "cardinality": "atMostOne",
  "description": "In which city this zoo is located",
  "name": "inCity",
  "keywords": []
}'
```

Secondly, we update the `City` class:

```bash
$ curl -X POST http://localhost:8080/v1/schema/things/City/properties -H "Content-Type: application/json" -d '{
  "dataType": [
    "Zoo"
  ],
  "cardinality": "atMostOne",
  "description": "Which zoos are in this city?",
  "name": "hasZoo",
  "keywords": []
}'
```

#### Adding Special Types to the Schema

Besides cross-references, Weaviate has a variety of special data types like geocoding. Click [here](schema.html#property-types) for an overview of available types.

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

## Adding Nodes

Now we have defined the schema, it is time to start adding data.

We are going to add two cities and two zoos.

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

Next, the city of Berlin

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "City",
    "schema": {
        "name": "Berlin",
        "location": {
            "latitude": 52.31,
            "longitude": 13.23
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
            "latitude": 52.31,
            "longitude": 13.23
        },
        "name": "Berlin"
    },
    "creationTimeUnix": 1551613417125,
    "thingId": "f15ba7e7-0635-4009-828b-7a631cd6840e"
}
```

Now, we are going to add the Zoos, note how we are defining the cross-reference:

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "Zoo",
    "schema": {
        "name": "Artis",
        "inCity": {
            "beacon": "weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55"
        }
    }
}'
```

Which results in:

```json
{
    "class": "Zoo",
    "schema": {
        "inCity": {
            "beacon": "weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55"
        },
        "name": "Artis"
    },
    "creationTimeUnix": 1551613482193,
    "thingId": "3c6ac167-d7e5-4479-a726-8341b9113e40"
}
```

Note how we are using the UUID of the city Amsterdam (which we created above) to point to the correct thing in the graph.

We will do the same for the Berlin zoo:

```bash
$ curl -X POST http://localhost:8080/v1/things -H "Content-Type: application/json" -d '{
    "class": "Zoo",
    "schema": {
        "name": "The Berlin Zoological Garden",
        "inCity": {
            "beacon": "weaviate://localhost/things/f15ba7e7-0635-4009-828b-7a631cd6840e"
        }
    }
}'
```

Which results in:

```json
{
    "class": "Zoo",
    "schema": {
        "inCity": {
            "beacon": "weaviate://localhost/things/f15ba7e7-0635-4009-828b-7a631cd6840e"
        },
        "name": "The Berlin Zoological Garden"
    },
    "creationTimeUnix": 1551613546490,
    "thingId": "5322d290-9682-4e7a-ae65-270cefeba8e5"
}
```

We now have created a mini-graph of 4 nodes. Let's explore the graph now!

## Querying with GraphQL

One of the features of Weaviate is the use of GraphQL to query the graph. The docker-compose setup comes with the Weaviate Playground which we will use to crawl the graph.

1. Open the Weaviate Playground by going to `http://localhost:80`.
2. Fill in the URL of your Weaviate instance: `http://localhost:8080/v1/graphql`.
3. When the Weaviate Playground is loaded, click "GraphQL" in the right bottom of the screen.

You can learn more about all functionalities [here](query).

Getting an overview of all Zoos would look like this:

```graphql
{
  Get{
    Things{
      Zoo{
        name
      }
    }
  }
}
```

We have added the Zoo to a city, to get the name of the City, we have to use the `InCity{}` reference and define that we want to get the results based on a city. But before we can do this, we need to know what the available classes of `InCity{}` are. We can get these insights by clicking `InCity` and inspecting the type (`[ZooInCityObj]`). Because there is only one possible type (`City`) we now know that `InCity{}` ingests the class: `City`.

```graphql
{
  Get {
    Things {
      Zoo {
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

Because we have set the `HasZoo` property, we can also reverse the query:

```graphql
{
  Get {
    Things {
      City {
        HasZoo {
          ... on Zoo {
            name
          }
        }
      }
    }
  }
}
```

# Querying with RESTful API

You can also query individual nodes through the RESTful API.

The following example results in all Things that are added to Weaviate;

```bash
$ curl http://localhost:8080/v1/things
```

[Click here](query) for a complete overview of RESTful API endpoint.

## Frequently Asked Questions

...

If you can't find the answer to your question here, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate). Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).