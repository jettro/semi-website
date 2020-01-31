---
layout: layout-documentation
product: weaviate
sub-menu: Client libs
product-order: 1
title: Python
description: Weaviate Python client library.
tags: ['Python', 'Library', 'authentication']
menu-order: 1
open-graph-type: article
og-img: documentation.jpg
---

# Python Client Library Guide

{% include badges.html %}

## Index

- [Query](#Query)
- [More resources](#more-resources)


## Query
The client allows to send simple GraphQL queries in the for of strings. Lets create a simple class `Person` and some add some people.
```python
import weaviate

w = weaviate.Client("http://localhost:8080")

schema = {
    "actions": {"classes": [],"type": "action"},
    "things": {"classes": [{
        "class": "Person",
        "description": "A person such as humans or personality known through culture",
        "properties": [
            {
                "cardinality": "atMostOne",
                "dataType": ["text"],
                "description": "The name of this person",
                "name": "name"
            }
        ]}],
        "type": "thing"
    }
}
w.create_schema(schema)

w.create_thing({"name": "Andrew S. Tanenbaum"}, "Person")
w.create_thing({"name": "Alan Turing"}, "Person")
w.create_thing({"name": "John von Neumann"}, "Person")
w.create_thing({"name": "Tim Berners-Lee"}, "Person")
```

Now we define a query for all `Person` objects.
```python
query = """
{
  Get {
    Things {
      Person {
        name
      }
    }
  }
}
"""
```

Finally we can run the query unsing the clients query function.
```python
import json

query_result = w.query(query)
# Pretty print the result of the query
print(json.dumps(query_result, indent=4, sort_keys=True))
```

When creating new things it can take up to 2 seconds until weaviate has indexed the newley added data. Therefore the query might not return all the previously added things during that time frame. 

To create complex GraphQL query please consider a GraphQL python client. 
Be cautios of query injections when generating string based queries.



## More Resources

{% include support-links.html %}