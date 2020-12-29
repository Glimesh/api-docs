---
bookHidden: true
---
 Remove any comments before sending to Glimesh.

### Category List

Returns a list of all the categories.
{{< tabs "categories" >}}
 {{< tab "Query" >}}
```GraphQL
 query {
  categories {
    id, # ID of the category
    name, # Name of the category
    slug, # Slug of the category (lowercase name)
    tagName, # The parent and current category: Art > Digital
    parent { # The parent category. Null if no parent exists.
      name # all of the above fields are available
    }
  }
}
```
 {{< /tab >}}
  {{< tab "Response" >}} 
This shows two of the categories returned.
```JSON
 {
  "data": {
    "categories": [
      {
        "id": "1",
        "name": "Gaming",
        "parent": null,
        "slug": "gaming",
        "tagName": "Gaming"
      },
      {
        "id": "13",
        "name": "Digital",
        "parent": {
          "name": "Art"
        },
        "slug": "digital",
        "tagName": "Art > Digital"
      },
    ]
  }
 }
```
  {{< /tab >}}
{{< /tabs >}}
