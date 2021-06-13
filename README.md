# うまい棒の商品情報取得API

うまい棒の商品情報を取得するためのGraphQL APIです。  
各種フィールドは以下のGraphiQLから参照してください。

https://umaibou-api.herokuapp.com/graphql/

## 使い方

```js
const query = {
    query: `{
        list {
            name
            catchCopy
            detail
            releaseDate
            img
            premium
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