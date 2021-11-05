---
enableInlineShortcodes: true
bookToC: false
---
Voyager is an interactive GraphQL API explorer. It allows you to view all the data in our API. Click and drag to move around the explorer. Click on a field to view its properties. Scoll to adjust zoom.

{{< rawhtml >}}
    <div id="voyager">Loading...</div>

<script>

  // Render <Voyager />
    GraphQLVoyager.init(document.getElementById('voyager'), {
      hideDocs: false,
      hideSettings: false,
      displayOptions: {
        sortByAlphabet: true,
      },
      introspection: {
  "data": {
    "__schema": {
      "directives": [
        {
          "args": [
            {
              "defaultValue": null,
              "description": "Included when true.",
              "name": "if",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            }
          ],
          "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "name": "include"
        },
        {
          "args": [
            {
              "defaultValue": null,
              "description": "Skipped when true.",
              "name": "if",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            }
          ],
          "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "name": "skip"
        }
      ],
      "mutationType": {
        "name": "RootMutationType"
      },
      "queryType": {
        "name": "RootQueryType"
      },
      "subscriptionType": {
        "name": "RootSubscriptionType"
      },
      "types": [
        {
          "description": "Represents a directive",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "args",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "isRepeatable",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "locations",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "__DirectiveLocation",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": "Check `locations` field for enum value FIELD",
              "description": null,
              "isDeprecated": true,
              "name": "onField",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": "Check `locations` field for enum value FRAGMENT_SPREAD",
              "description": null,
              "isDeprecated": true,
              "name": "onFragment",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": "Check `locations` field for enum value OPERATION",
              "description": null,
              "isDeprecated": true,
              "name": "onOperation",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__Directive",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": [
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "ARGUMENT_DEFINITION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "ENUM"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "ENUM_VALUE"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "FIELD"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "FIELD_DEFINITION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "FRAGMENT_DEFINITION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "FRAGMENT_SPREAD"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INLINE_FRAGMENT"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INPUT_FIELD_DEFINITION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INPUT_OBJECT"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INTERFACE"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "MUTATION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "OBJECT"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "QUERY"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "SCALAR"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "SCHEMA"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "SUBSCRIPTION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "UNION"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "VARIABLE_DEFINITION"
            }
          ],
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "deprecationReason",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "isDeprecated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__EnumValue",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "args",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "deprecationReason",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "isDeprecated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__Field",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "defaultValue",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__InputValue",
          "possibleTypes": null
        },
        {
          "description": "Represents a schema",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "directives",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Directive",
                      "ofType": null
                    }
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "mutationType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "queryType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "subscriptionType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "types",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__Schema",
          "possibleTypes": null
        },
        {
          "description": "Represents scalars, interfaces, object types, unions, enums in the system",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": "false",
                  "description": null,
                  "name": "includeDeprecated",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "enumValues",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__EnumValue",
                    "ofType": null
                  }
                }
              }
            },
            {
              "args": [
                {
                  "defaultValue": "false",
                  "description": null,
                  "name": "includeDeprecated",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "fields",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Field",
                    "ofType": null
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "inputFields",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "interfaces",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "kind",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "ofType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "possibleTypes",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "__Type",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": [
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "ENUM"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INPUT_OBJECT"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "INTERFACE"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "LIST"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "NON_NULL"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "OBJECT"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "SCALAR"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "UNION"
            }
          ],
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "ENUM",
          "name": "__TypeKind",
          "possibleTypes": null
        },
        {
          "description": "The `Boolean` scalar type represents `true` or `false`.",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "Boolean",
          "possibleTypes": null
        },
        {
          "description": "Categories are the containers for live streaming content.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique category identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Category creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Name of the category",
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Slug of the category",
              "isDeprecated": false,
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Subcategories within the category",
              "isDeprecated": false,
              "name": "subcategories",
              "type": {
                "kind": "OBJECT",
                "name": "SubcategoryConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Tags associated with the category",
              "isDeprecated": false,
              "name": "tags",
              "type": {
                "kind": "OBJECT",
                "name": "TagConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Category updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Category",
          "possibleTypes": null
        },
        {
          "description": "A channel is a user's actual container for live streaming.",
          "enumValues": null,
          "fields": [
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List of bans in the channel",
              "isDeprecated": false,
              "name": "bans",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelBanConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Toggle for blocking anyone from posting links",
              "isDeprecated": false,
              "name": "blockLinks",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Category the current stream is in",
              "isDeprecated": false,
              "name": "category",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Background URL for the Chat Box",
              "isDeprecated": false,
              "name": "chatBgUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List of chat messages sent in the channel",
              "isDeprecated": false,
              "name": "chatMessages",
              "type": {
                "kind": "OBJECT",
                "name": "ChatMessageConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Chat rules in html",
              "isDeprecated": false,
              "name": "chatRulesHtml",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Chat rules in markdown",
              "isDeprecated": false,
              "name": "chatRulesMd",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Toggle for links automatically being clickable",
              "isDeprecated": false,
              "name": "disableHyperlinks",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Hash-based Message Authentication Code for the stream",
              "isDeprecated": false,
              "name": "hmacKey",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique channel identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Is the stream inaccessible?",
              "isDeprecated": false,
              "name": "inaccessible",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The language a user can expect in the stream",
              "isDeprecated": false,
              "name": "language",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "If the streamer has flagged this channel as only appropriate for Mature Audiences",
              "isDeprecated": false,
              "name": "matureContent",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Minimum account age length before chatting",
              "isDeprecated": false,
              "name": "minimumAccountAge",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List of moderation events in the channel",
              "isDeprecated": false,
              "name": "moderationLogs",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLogConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List of moderators in the channel",
              "isDeprecated": false,
              "name": "moderators",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModeratorConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel poster URL",
              "isDeprecated": false,
              "name": "posterUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Toggle for requiring confirmed email before chatting",
              "isDeprecated": false,
              "name": "requireConfirmedEmail",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Toggle for homepage visibility",
              "isDeprecated": false,
              "name": "showOnHomepage",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Only show recent chat messages?",
              "isDeprecated": false,
              "name": "showRecentChatMessagesOnly",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The current status of the channnel",
              "isDeprecated": false,
              "name": "status",
              "type": {
                "kind": "ENUM",
                "name": "ChannelStatus",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "If the channel is live, this will be the current Stream",
              "isDeprecated": false,
              "name": "stream",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Current streams unique stream key",
              "isDeprecated": false,
              "name": "streamKey",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "User associated with the channel",
              "isDeprecated": false,
              "name": "streamer",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "streams",
              "type": {
                "kind": "OBJECT",
                "name": "StreamConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory the current stream is in",
              "isDeprecated": false,
              "name": "subcategory",
              "type": {
                "kind": "OBJECT",
                "name": "Subcategory",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Tags associated with the current stream",
              "isDeprecated": false,
              "name": "tags",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Tag",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The title of the current stream, live or offline.",
              "isDeprecated": false,
              "name": "title",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Channel",
          "possibleTypes": null
        },
        {
          "description": "A channel timeout or ban",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel the ban affects",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Channel",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "When the ban expires",
              "isDeprecated": false,
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique channel ban identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel ban creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Reason for channel ban",
              "isDeprecated": false,
              "name": "reason",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel ban updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "User the ban affects",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelBan",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChannelBanEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelBanConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelBan",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelBanEdge",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChannelEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "Channel",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelEdge",
          "possibleTypes": null
        },
        {
          "description": "A moderation event that happened",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Action performed",
              "isDeprecated": false,
              "name": "action",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel the event occurred in",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Channel",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique moderation event identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Event creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Moderator that performed the event",
              "isDeprecated": false,
              "name": "moderator",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Event updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Receiving user of the event",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModerationLog",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChannelModerationLogEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModerationLogConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModerationLogEdge",
          "possibleTypes": null
        },
        {
          "description": "A channel moderator",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can ban a user",
              "isDeprecated": false,
              "name": "canBan",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can delete a message",
              "isDeprecated": false,
              "name": "canDelete",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can perform a long timeout action",
              "isDeprecated": false,
              "name": "canLongTimeout",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can perform a short timeout action",
              "isDeprecated": false,
              "name": "canShortTimeout",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can untimeout a user",
              "isDeprecated": false,
              "name": "canUnTimeout",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Can unban a user",
              "isDeprecated": false,
              "name": "canUnban",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel the moderator can moderate in",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Channel",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique channel moderator identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Moderator creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Moderator updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Moderating User",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModerator",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChannelModeratorEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModeratorConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerator",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChannelModeratorEdge",
          "possibleTypes": null
        },
        {
          "description": "Current channel status",
          "enumValues": [
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "LIVE"
            },
            {
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "OFFLINE"
            }
          ],
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "ENUM",
          "name": "ChannelStatus",
          "possibleTypes": null
        },
        {
          "description": "A chat message sent to a channel by a user.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel where the chat message occurs",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Channel",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique chat message identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Chat message creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": "We're going to replace this shortly after launch",
              "description": "Was this message generated by our system for a follow",
              "isDeprecated": true,
              "name": "isFollowedMessage",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": "We're going to replace this shortly after launch",
              "description": "Was this message generated by our system for a subscription",
              "isDeprecated": true,
              "name": "isSubscriptionMessage",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The chat message contents, be careful to sanitize because any user input is allowed",
              "isDeprecated": false,
              "name": "message",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "List of chat message tokens used",
              "isDeprecated": false,
              "name": "tokens",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "ChatMessageToken",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Chat message updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "User who sent the chat message",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChatMessage",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChatMessageEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChatMessageConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "ChatMessage",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "ChatMessageEdge",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": null,
          "inputFields": [
            {
              "defaultValue": null,
              "description": null,
              "name": "message",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "interfaces": null,
          "kind": "INPUT_OBJECT",
          "name": "ChatMessageInput",
          "possibleTypes": null
        },
        {
          "description": "Chat Message Token Interface",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token text",
              "isDeprecated": false,
              "name": "text",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token type",
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "INTERFACE",
          "name": "ChatMessageToken",
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "EmoteToken",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "TextToken",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UrlToken",
              "ofType": null
            }
          ]
        },
        {
          "description": "Chat Message Emote Token",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token src URL",
              "isDeprecated": false,
              "name": "src",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token text",
              "isDeprecated": false,
              "name": "text",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token type",
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "ChatMessageToken",
              "ofType": null
            }
          ],
          "kind": "OBJECT",
          "name": "EmoteToken",
          "possibleTypes": null
        },
        {
          "description": "A follower is a user who subscribes to notifications for a particular user's channel.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Does this follower have live notifications enabled?",
              "isDeprecated": false,
              "name": "hasLiveNotifications",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique follower identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Following creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The streamer the user is following",
              "isDeprecated": false,
              "name": "streamer",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Following updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The user that is following the streamer",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Follower",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "FollowerEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "FollowerConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "Follower",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "FollowerEdge",
          "possibleTypes": null
        },
        {
          "description": "The `ID` scalar type represents a unique identifier, often used to\nrefetch an object or as key for a cache. The ID type appears in a JSON\nresponse as a String; however, it is not intended to be human-readable.\nWhen expected as an input type, any string (such as `\"4\"`) or integer\n(such as `4`) input value will be accepted as an ID.",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "ID",
          "possibleTypes": null
        },
        {
          "description": "The `Int` scalar type represents non-fractional signed whole numeric values.\nInt can represent values between `-(2^53 - 1)` and `2^53 - 1` since it is\nrepresented in JSON as double-precision floating point numbers specified\nby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "Int",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "userId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Ban a user from a chat channel.",
              "isDeprecated": false,
              "name": "banUser",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "message",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ChatMessageInput",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Create a chat message",
              "isDeprecated": false,
              "name": "createChatMessage",
              "type": {
                "kind": "OBJECT",
                "name": "ChatMessage",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "messageId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Deletes a specific chat message from channel.",
              "isDeprecated": false,
              "name": "deleteChatMessage",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "End a stream",
              "isDeprecated": false,
              "name": "endStream",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "metadata",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "StreamMetadataInput",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Update a stream's metadata",
              "isDeprecated": false,
              "name": "logStreamMetadata",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "userId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Long timeout (15 minutes) a user from a chat channel.",
              "isDeprecated": false,
              "name": "longTimeoutUser",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "userId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Short timeout (5 minutes) a user from a chat channel.",
              "isDeprecated": false,
              "name": "shortTimeoutUser",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Start a stream",
              "isDeprecated": false,
              "name": "startStream",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "userId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Unban a user from a chat channel.",
              "isDeprecated": false,
              "name": "unbanUser",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelModerationLog",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamId",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "thumbnail",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Upload",
                      "ofType": null
                    }
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Update a stream's thumbnail",
              "isDeprecated": false,
              "name": "uploadStreamThumbnail",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "RootMutationType",
          "possibleTypes": null
        },
        {
          "description": "The `Naive DateTime` scalar type represents a naive date and time without\ntimezone. The DateTime appears in a JSON response as an ISO8601 formatted\nstring.",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "NaiveDateTime",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "When paginating forwards, the cursor to continue.",
              "isDeprecated": false,
              "name": "endCursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "When paginating forwards, are there more items?",
              "isDeprecated": false,
              "name": "hasNextPage",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "When paginating backwards, are there more items?",
              "isDeprecated": false,
              "name": "hasPreviousPage",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "When paginating backwards, the cursor to continue.",
              "isDeprecated": false,
              "name": "startCursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "PageInfo",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "List all categories",
              "isDeprecated": false,
              "name": "categories",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Category",
                  "ofType": null
                }
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "slug",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Query individual category",
              "isDeprecated": false,
              "name": "category",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "id",
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamerId",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamerUsername",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Query individual channel",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "OBJECT",
                "name": "Channel",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "categorySlug",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "status",
                  "type": {
                    "kind": "ENUM",
                    "name": "ChannelStatus",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List all channels",
              "isDeprecated": false,
              "name": "channels",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamerId",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "userId",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List all follows or followers",
              "isDeprecated": false,
              "name": "followers",
              "type": {
                "kind": "OBJECT",
                "name": "FollowerConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List the channels currently on the homepage",
              "isDeprecated": false,
              "name": "homepageChannels",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Get yourself",
              "isDeprecated": false,
              "name": "myself",
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "id",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "username",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Query individual user",
              "isDeprecated": false,
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "List all users",
              "isDeprecated": false,
              "name": "users",
              "type": {
                "kind": "OBJECT",
                "name": "UserConnection",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "RootQueryType",
          "possibleTypes": null
        },
        {
          "description": "A stream is a single live stream in, either current or historical.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "The category the current stream is in",
              "isDeprecated": false,
              "name": "category",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Category",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Channel running with the stream",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Channel",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Concurrent viewers during last snapshot",
              "isDeprecated": false,
              "name": "countViewers",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Datetime of when the stream was ended, or null if still going",
              "isDeprecated": false,
              "name": "endedAt",
              "type": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique stream identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream created date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Current stream metadata",
              "isDeprecated": false,
              "name": "metadata",
              "type": {
                "kind": "OBJECT",
                "name": "StreamMetadataConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Peak concurrent viewers",
              "isDeprecated": false,
              "name": "peakViewers",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Datetime of when the stream was started",
              "isDeprecated": false,
              "name": "startedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Thumbnail URL of the stream",
              "isDeprecated": false,
              "name": "thumbnailUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The title of the channel when the stream was started",
              "isDeprecated": false,
              "name": "title",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Stream",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StreamEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "StreamConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "Stream",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "StreamEdge",
          "possibleTypes": null
        },
        {
          "description": "A single instance of stream metadata.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream audio codec",
              "isDeprecated": false,
              "name": "audioCodec",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique stream metadata identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Ingest Server URL",
              "isDeprecated": false,
              "name": "ingestServer",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Viewers on the ingest",
              "isDeprecated": false,
              "name": "ingestViewers",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream metadata created date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Lost stream input data packets",
              "isDeprecated": false,
              "name": "lostPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Negative Acknowledged stream input data packets",
              "isDeprecated": false,
              "name": "nackPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Received stream input data packets",
              "isDeprecated": false,
              "name": "recvPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Bitrate at the source",
              "isDeprecated": false,
              "name": "sourceBitrate",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Ping to the source",
              "isDeprecated": false,
              "name": "sourcePing",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Current stream metadata references",
              "isDeprecated": false,
              "name": "stream",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Stream",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Current Stream time in seconds",
              "isDeprecated": false,
              "name": "streamTimeSeconds",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream metadata updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Client vendor name",
              "isDeprecated": false,
              "name": "vendorName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Client vendor version",
              "isDeprecated": false,
              "name": "vendorVersion",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream video codec",
              "isDeprecated": false,
              "name": "videoCodec",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream video height",
              "isDeprecated": false,
              "name": "videoHeight",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Stream video width",
              "isDeprecated": false,
              "name": "videoWidth",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "StreamMetadata",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StreamMetadataEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "StreamMetadataConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "StreamMetadata",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "StreamMetadataEdge",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": null,
          "inputFields": [
            {
              "defaultValue": null,
              "description": "Stream audio codec",
              "name": "audioCodec",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Ingest Server URL",
              "name": "ingestServer",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Viewers on the ingest",
              "name": "ingestViewers",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Lost stream input data packets",
              "name": "lostPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Negative Acknowledged stream input data packets",
              "name": "nackPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Received stream input data packets",
              "name": "recvPackets",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Bitrate at the source",
              "name": "sourceBitrate",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Ping to the source",
              "name": "sourcePing",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Current Stream time in seconds",
              "name": "streamTimeSeconds",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Client vendor name",
              "name": "vendorName",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Client vendor version",
              "name": "vendorVersion",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Stream video codec",
              "name": "videoCodec",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Stream video height",
              "name": "videoHeight",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "defaultValue": null,
              "description": "Stream video width",
              "name": "videoWidth",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          ],
          "interfaces": null,
          "kind": "INPUT_OBJECT",
          "name": "StreamMetadataInput",
          "possibleTypes": null
        },
        {
          "description": "The `String` scalar type represents textual data, represented as UTF-8\ncharacter sequences. The String type is most often used by GraphQL to\nrepresent free-form human-readable text.",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "String",
          "possibleTypes": null
        },
        {
          "description": "Subcategories are specific games, topics, or genre's that exist under a Category.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory background image URL",
              "isDeprecated": false,
              "name": "backgroundImageUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Parent category",
              "isDeprecated": false,
              "name": "category",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique subcategory identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Name of the subcategory",
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "URL friendly name of the subcategory",
              "isDeprecated": false,
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory source",
              "isDeprecated": false,
              "name": "source",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory source ID",
              "isDeprecated": false,
              "name": "sourceId",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Subcategory updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Was the subcategory created by a user?",
              "isDeprecated": false,
              "name": "userCreated",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Subcategory",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SubcategoryEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "SubcategoryConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "Subcategory",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "SubcategoryEdge",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "id",
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "OBJECT",
                "name": "Channel",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "channelId",
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "chatMessage",
              "type": {
                "kind": "OBJECT",
                "name": "ChatMessage",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "streamerId",
                  "type": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "followers",
              "type": {
                "kind": "OBJECT",
                "name": "Follower",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "RootSubscriptionType",
          "possibleTypes": null
        },
        {
          "description": "Tags are user created labels that are either global or category specific.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Parent category",
              "isDeprecated": false,
              "name": "category",
              "type": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The number of streams started with this tag",
              "isDeprecated": false,
              "name": "countUsage",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique tag identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Tag creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Name of the tag",
              "isDeprecated": false,
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "URL friendly name of the tag",
              "isDeprecated": false,
              "name": "slug",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Tag updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "Tag",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TagEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "TagConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "Tag",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "TagEdge",
          "possibleTypes": null
        },
        {
          "description": "Chat Message Text Token",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token text",
              "isDeprecated": false,
              "name": "text",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token type",
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "ChatMessageToken",
              "ofType": null
            }
          ],
          "kind": "OBJECT",
          "name": "TextToken",
          "possibleTypes": null
        },
        {
          "description": "Represents an uploaded file.",
          "enumValues": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "kind": "SCALAR",
          "name": "Upload",
          "possibleTypes": null
        },
        {
          "description": "Chat Message URL Token",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token text",
              "isDeprecated": false,
              "name": "text",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token type",
              "isDeprecated": false,
              "name": "type",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Token URL",
              "isDeprecated": false,
              "name": "url",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "ChatMessageToken",
              "ofType": null
            }
          ],
          "kind": "OBJECT",
          "name": "UrlToken",
          "possibleTypes": null
        },
        {
          "description": "A user of Glimesh, can be a streamer, a viewer or both!",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "allowGlimeshNewsletterEmails",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "allowLiveSubscriptionEmails",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "URL to the user's avatar",
              "isDeprecated": false,
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "A user's channel, if they have one",
              "isDeprecated": false,
              "name": "channel",
              "type": {
                "kind": "OBJECT",
                "name": "Channel",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Datetime the user confirmed their email address",
              "isDeprecated": false,
              "name": "confirmedAt",
              "type": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "countFollowers",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "countFollowing",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Exactly the same as the username, but with casing the user prefers",
              "isDeprecated": false,
              "name": "displayname",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Email for the user, hidden behind a scope",
              "isDeprecated": false,
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "followers",
              "type": {
                "kind": "OBJECT",
                "name": "FollowerConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "following",
              "type": {
                "kind": "OBJECT",
                "name": "FollowerConnection",
                "ofType": null
              }
            },
            {
              "args": [
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "after",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "before",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "first",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                },
                {
                  "defaultValue": null,
                  "description": null,
                  "name": "last",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              ],
              "deprecationReason": null,
              "description": "Shortcut to a user's followed channels",
              "isDeprecated": false,
              "name": "followingLiveChannels",
              "type": {
                "kind": "OBJECT",
                "name": "ChannelConnection",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique User identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Account creation date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "HTML version of the user's profile, should be safe for rendering directly",
              "isDeprecated": false,
              "name": "profileContentHtml",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Markdown version of the user's profile",
              "isDeprecated": false,
              "name": "profileContentMd",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Qualified URL for the user's Discord server",
              "isDeprecated": false,
              "name": "socialDiscord",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Qualified URL for the user's Guilded server",
              "isDeprecated": false,
              "name": "socialGuilded",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Qualified URL for the user's Instagram account",
              "isDeprecated": false,
              "name": "socialInstagram",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Qualified URL for the user's YouTube account",
              "isDeprecated": false,
              "name": "socialYoutube",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "A list of linked social accounts for the user",
              "isDeprecated": false,
              "name": "socials",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserSocial",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "The primary role the user performs on the Glimesh team",
              "isDeprecated": false,
              "name": "teamRole",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Account last updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Lowercase user identifier",
              "isDeprecated": false,
              "name": "username",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "YouTube Intro URL for the user's profile",
              "isDeprecated": false,
              "name": "youtubeIntroUrl",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "User",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "count",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "edges",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserEdge",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "pageInfo",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "UserConnection",
          "possibleTypes": null
        },
        {
          "description": null,
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "cursor",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": null,
              "isDeprecated": false,
              "name": "node",
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "UserEdge",
          "possibleTypes": null
        },
        {
          "description": "A linked social account for a Glimesh user.",
          "enumValues": null,
          "fields": [
            {
              "args": [],
              "deprecationReason": null,
              "description": "Unique social account identifier",
              "isDeprecated": false,
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Platform unique identifier, usually a ID, made into a string",
              "isDeprecated": false,
              "name": "identifier",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "User socials created date",
              "isDeprecated": false,
              "name": "insertedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Platform that is linked, eg: twitter",
              "isDeprecated": false,
              "name": "platform",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "User socials updated date",
              "isDeprecated": false,
              "name": "updatedAt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "NaiveDateTime",
                  "ofType": null
                }
              }
            },
            {
              "args": [],
              "deprecationReason": null,
              "description": "Username for the user on the linked platform",
              "isDeprecated": false,
              "name": "username",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "UserSocial",
          "possibleTypes": null
        }
      ]
    }
  }
}
    });

    // Sets the new margins and spacing for voyager
    document.getElementsByTagName("main")[0].style.margin = "initial";
    document.getElementsByTagName("main")[0].style.maxWidth = "95%";
    // Sets the settings to a dark color
    var menuThingy = document.getElementsByClassName("menu-content");
    menuThingy[0].style.backgroundColor = "#0e1726";
    // dark colors
   // var voyagerPanel = document.getElementsByClassName("doc-navigation");
    //voyagerPanel[0].style.background = "#0e1726"
   // var voyagerPanel = document.getElementsByClassName("scroll-area");
   // voyagerPanel[0].style.background = "#0e1726";
   // var voyagerPanel = document.getElementsByClassName("contents");
   // voyagerPanel[0].style.background = "#0e1726"
   // var voyagerPanel = document.getElementsByClassName("doc-panel");
   // voyagerPanel[0].style.position = "absolute"
    // Makes the panel draggable, hopefully users will move it to a better position.
   // dragElement(voyagerPanel[0]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  </script>
{{< /rawhtml >}}
