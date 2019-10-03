![npm](https://img.shields.io/npm/v/@mezhevykh/localstorage-wrapper?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/mezhevykh223571/localStorage-wrapper?style=flat-square)](https://github.com/mezhevykh223571/localStorage-wrapper/blob/master/LICENSE)
[![](https://data.jsdelivr.com/v1/package/npm/@mezhevykh/localstorage-wrapper/badge)](https://www.jsdelivr.com/package/npm/@mezhevykh/localstorage-wrapper)

## Installation

**Download**

    $ npm i @mezhevykh/localstorage-wrapper

or use [unpkg](https://unpkg.com/@mezhevykh/localstorage-wrapper/build/index.js) CDN

[Click to download](https://github.com/mezhevykh223571/localStorage-wrapper/archive/archive/master.zip)

## Usage

```html
<script src="/path/to/@mezhevykh/localstorage-wrapper/build/index.js" type="text/javascript"></script>
```

## API

#### Set item:

```js
store.set('username', 'Test');
```

---

#### Get item:

```js
store.get('username');
```

---

#### Get all items:

```js
store.getAll();
```

---

#### Remove item:

```js
store.remove('username');
```

---

#### Remove all items:

```js
store.removeAll();
```

## License

MIT
