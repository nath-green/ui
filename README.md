# @nath-green/ui

A library of a11y focused (kinda) style-less React UI components to be consumed with `TailwindCSS`.

Components:

- [Button](#user-content-button)
- [Spinner](#user-content-spinner)

## Installation and prerequisites

1. Install `@nath-green/ui`

```js
yarn add @nath-green/ui
```

2. Update `tailwind.config.js` for purge `safelist`. Read [here](#user-content-tailwind-classes)

### Tailwind classes

Some of the components use Tailwind classes under the hood so these need to be added to your project so they are not purged in production mode.

In your `tailwind.config.js` file, set the `safelist` option for `purge`. Read more [here](https://tailwindcss.com/docs/optimizing-for-production#purge-css-options).

```js
  purge: {
    ...,
    options: {
      safelist: [/* list of classes here*/]
    }
  },
```

Depending on what component you are importing, the `safelist` will need populating with different classes. For example, if importing `Button` the safelist would be as follows:

```js
  purge: {
    ...,
    options: {
      safelist: ['sr-only']
    }
  },
```

## Button

### ⚠ `safelist` classes

- `sr-only`

### Props

| Prop               | Type     | Default     | Description                                                                                                               |
| ------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| type               | String   | `"button"`  | `<button>` `type`                                                                                                         |
| children           | String   |             | Contents of the button                                                                                                    |
| onClick            | Function |             | Function executed on click                                                                                                |
| className          | String   |             | List of classes passed to `<button>`                                                                                      |
| disabled           | Boolean  | `false`     | `disabled` prop added to `<button>`                                                                                       |
| loading            | Boolean  | `false`     | Replaces content with loading spinner if `enableLoading` is `true`. Alert for screen readers with `loadingAlertText` prop |
| ariaLabel          | String   |             | Aria label on `<button>`                                                                                                  |
| enableLoading      | Boolean  | `true`      | Enables spinner ui when `loading`                                                                                         |
| containerClassName | String   |             | List of classes passed to wrapping `<div>`                                                                                |
| spinnerClassName   | String   |             | List of classes passed to `<Spinner>`                                                                                     |
| loadingAriaLabel   | String   | `"Loading"` | Aria label when in loading state                                                                                          |
| loadingAlertText   | String   | `"Loading"` | Text with role `alert`                                                                                                    |

### Example

```jsx
import { Button } from "@nath-green/ui";

// standard button
<Button
  className="bg-blue-800 hover:bg-blue-500 text-white rounded px-4 h-12"
  onClick={() => console.log("Hello")}
>
  Log to console
</Button>

// with loading state
<Button
  className="bg-blue-800 hover:bg-blue-500 text-white rounded px-4 h-12"
  spinnerClassName="h-4 w-4 text-blue-300"
  onClick={() => login()}
  loading={loading}
  loadingAlertText="Logging in please wait"
>
  Login
</Button>
```

## Spinner

### ⚠ `safelist` classes

- `animate-spin`

### Props

| Prop      | Type   | Default | Description                       |
| --------- | ------ | ------- | --------------------------------- |
| className | String |         | List of classes passed to `<svg>` |

### Example

```jsx
import { Spinner } from "@nath-green/ui";

<Spinner className="text-blue-500" />;
```
