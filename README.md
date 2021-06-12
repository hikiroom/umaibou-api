# うまい棒商品情報API

## Usage

```js
const query = {
    query: `{
        list {
            name
            catchCopy
            detail
            releaseDate
            img
        }
    }`
};

fetch('https://umaibou-api.herokuapp.com/graphql/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
}).then((res) => res.json()).then((res) => console.log(res));
```