# fbsdk-ts

_Strongly-typed promise-based client library for Facebook's Graph API using TypeScript._

# Where do I start?

-   For most use cases: [How to use](#how-to-use)
-   For more experienced developers: [How to extend / subclass](#how-to-extend--subclass)
-   For advanced developers and contributors: [How to add nodes / edges](#how-to-add-nodes--edges)
-   For those who want the node types: [How to access the node types](#how-to-access-the-node-types)

# How to use:

_TypeScript is recommended to get all the benefits of this package, but you can also use plain JavaScript._

## Step 0: Installing

To install this package in a Node.js project, run this command in the project root:

`npm install -S fbsdk-ts`

## Step 1: Importing

If you are using plain JavaScript, import the `FacebookApp` class like so:

```js
const { FacebookApp } = require('fbsdk-ts');
```

If you are using TypesScript, import the `FacebookApp` class like so:

```ts
import { FacebookApp } from 'fbsdk-ts';
```

## Step 2: Initialization

`FacebookApp` is a class can be initialized like so:

```ts
const app = new FacebookApp({
    appId: '{YOUR-APP-ID}',
    appSecret: '{YOUR-APP-SECRET}',
});
```

---

**\*NOTE:** Never use your app secret directly in your code, as this is a security risk! Environment variables are recommended for storing your app secret.\*

## Step 3: Reading Nodes and Edges

Once your app is initialized, you can read different nodes using the `Node` function:

```ts
// Get information about a page

app.Node('Page', '{SOME-PAGE-ID}')
    .read('{PAGE-ACCESS-TOKEN}')
    .then((pageInfo) => {
        // do stuff with page info
    });
```

A node may or may not also contain edges that can be accessed using the `Edge` function:

```ts
// Get conversations on page

app.Node('Page', '{SOME-PAGE-ID}')
    .Edge('Conversations').read('{PAGE-ACCESS-TOKEN}')
    .then((conversations) => {
        // do stuff with conversations
    });
```

---

**\*NOTE:** As with your app secret, never use your access tokens directly in your code. Environment variables are again recommended for storing your access tokens.\*

## Step 4: Selecting Fields

By default, not all fields on a node are returned when it is read (however, the `id` field is always included). To select the fields that should be returned (in addition to `id`), you can pass in an array of field keys as the second parameter of the `.read` method:

```ts
// Get the category and follower count of a page

app.Node('Page', '{SOME-PAGE-ID}')
    .read('{PAGE-ACCESS-TOKEN}', ['category', 'followers_count'])
    .then((pageInfo) => {
        // do stuff with page info
    });
```

## Step 5: Using Read Parameters

Sometimes, a node or edge may have parameters that can be used with a read operation. These may be passed in as the third parameter in the `.read` method (`undefined` may be used for the second parameter if you don't want to specify fields):

```ts
// Get a page's spam folder

app.Node('Page', '{SOME-PAGE-ID}')
    .Edge('Conversations').read('{PAGE-ACCESS-TOKEN}', undefined, {
        folder: 'spam',
    })
    .then((spamConversations) => {
        // do stuff with spam conversations
    });
```

---

# How to extend / subclass:

This package is made to be extensible. You can create your own custom class like `FacebookApp` with its own methods to suit your needs.

## Step 0: Installing

To install this package in a Node.js project, run this command in the project root:

`npm install -S fbsdk-ts`

## Step 1: Importing

If you are using plain JavaScript, import the `FacebookAppNoExposedNodes` class like so:

```js
const { FacebookAppNoExposedNodes } = require('fbsdk-ts');
```

If you are using TypesScript, import the `FacebookAppNoExposedNodes` class like so:

```ts
import { FacebookAppNoExposedNodes } from 'fbsdk-ts';
```

## Step 2: Sub-classing

`FacebookAppNoExposedNodes` is an abstract class, and the parent class of the `FacebookApp` class used in the previous examples. Both classes are virtually identical, except that `FacebookApp` exposes the nodes function on `.Node`, while `FacebookAppNoExposedNodes` keeps the nodes function on the protected member `_Node`. If you want to make a subclass that does not expose the nodes function, you can extend `FacebookAppNoExposedNodes`:

```js
// make a class that can only return page data

class FacebookPageGetter extends FacebookAppNoExposedNodes {
    public async getPageInfo(pageId, accessToken) {
        return await this._Node('Page', pageId).read(accessToken);
    }
}

```

---

***NOTE:** Don't return or expose single node objects as this will expose its edges object. Instead only return the data, and make any member node objects private.*

---

# How to add nodes / edges:


***NOTE:** TypeScript is required for these steps. The instructions assume you're familiar with TypeScript, specifically with interfaces, generic types, and union types.*


## Step 0: Installation

To install this package in a Node.js project, run this command in the project root:

`npm install -S fbsdk-ts`

## Step 0.5: Creating tsconfig.json

If you haven't already, create a `tsconfig.json` file in your project root. It does not have to contain anything, but you may fill it with your preferred configuration options.

## Step 1: Importing

Import the `FacebookAppBase` class like so:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
```

## Step 2: Making an APISpec definition

`FacebookAppBase` is an abstract generic class, and requires an `APISpec` type parameter. You can declare an interface that extends `APISpec` and start defining nodes and their edges:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
import { APISpec } from 'fbsdk-ts/dist/api-spec';

interface CustomAPISpec extends APISpec {
    SomeNodeName: {
        node: {
            read_return: SomeNode; // the type that defines the shape of the node
        };
        edges: {
            SomeEdge: {
                read_return: EdgeResult; // The type that defines the shape of the nodes returned by the edge
                edge: 'things'; // The API path for the edge
            };
        };
    };
}
```

These definitions can be further simplified by helper types:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
import { APISpec, NodeSpec, EdgeSpec } from 'fbsdk-ts/dist/api-spec';

interface CustomAPISpec extends APISpec {
    SomeNodeName: {
        node: NodeSpec<SomeNode>;
        edges: {
            SomeEdge: EdgeSpec<EdgeResult, 'things'>;
        };
    };
}
```

If a node doesn't have any edges, its definition can be further shortened with another helper type:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
import {
    APISpec,
    NodeSpec,
    EdgeSpec,
    EdgelessNodeSpec,
} from 'fbsdk-ts/dist/api-spec';

interface CustomAPISpec extends APISpec {
    SomeNodeName: {
        node: NodeSpec<SomeNode>;
        edges: {
            SomeEdge: EdgeSpec<EdgeResult, 'things'>;
        };
    };
    SomeEdgelessNodeName: EdgelessNodeSpec<SomeEdgelessNode>;
}
```

Nodes and edges can have read parameters defined like so:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
import {
    APISpec,
    NodeSpec,
    EdgeSpec,
    EdgelessNodeSpec,
} from 'fbsdk-ts/dist/api-spec';

interface CustomAPISpec extends APISpec {
    SomeNodeName: {
        node: NodeSpec<SomeNode> & {
            read_params: {
                additional_token: string;
            };
        };
        edges: {
            SomeEdge: EdgeSpec<EdgeResult, 'things'> & {
                read_params: {
                    include_specific_kind: boolean;
                };
            };
        };
    };
    SomeEdgelessNodeName: EdgelessNodeSpec<SomeEdgelessNode>;
}
```

For more specific code examples, see [the v9 APISpec definition](/src/api-spec/index.ts). If you want to contribute more nodes/edges to this project, please add onto the type definition in that file.

## Step 3: Implementing the definition

Your custom APISpec definition can now be implemented in a subclass of `FacebookAppBase`:

```ts
import { FacebookAppBase } from 'fbsdk-ts';
import {
    APISpec,
    NodeSpec,
    EdgeSpec,
    EdgelessNodeSpec,
    APISpecNodeCollection,
} from 'fbsdk-ts/dist/api-spec';

interface CustomAPISpec extends APISpec {
    SomeNodeName: {
        node: NodeSpec<SomeNode> & {
            read_params: {
                additional_token: string;
            };
        };
        edges: {
            SomeEdge: EdgeSpec<EdgeResult, 'things'> & {
                read_params: {
                    include_specific_kind: boolean;
                };
            };
        };
    };
    SomeEdgelessNodeName: EdgelessNodeSpec<SomeEdgelessNode>;
}

/*
 * The below member assignment sets up the base URL for Graph API queries
 */

class CustomFacebookApp extends FacebookAppBase<CustomAPISpec> {
    graphAPIAxiosInstance = axios.create({
        baseURL: `{CUSTOM-GRAPH-API-BASE-URL}`,
    });
}
```

If you want to expose the nodes function as a public member function (as the default `FacebookApp` does), you can simply add this inside your class:

```ts
...
public Node = this._Node;
...
```

This class can also be used as described in [how to extend / subclass](#how-to-extend--subclass).

---

# How to access the node types

The nodes can be imported from `fbsdk-ts/dist/graph-api/types` like so:

```ts
import { Page, User, Conversation } from 'fbsdk-ts/dist/graph-api/types';
```

Please check the [source file](/src/graph-api/types.ts) for the names of all the currently available types.
