# @nath-green/ui

A library of accessibility focused unopinionated React UI components to be consumed with [Tailwind](https://tailwindcss.com/docs).

Components:

- [Button](#user-content-button)
- [Spinner](#user-content-spinner)

## Installation and prerequisites

1. Install `@nath-green/ui`

```js
yarn add @nath-green/ui
```

2. Ensure `Tailwind` is installed in your project. See [installation notes](https://tailwindcss.com/docs).

## Components

### Button

#### Props

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

#### Example

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

### Spinner

#### Props

| Prop      | Type   | Default | Description                       |
| --------- | ------ | ------- | --------------------------------- |
| className | String |         | List of classes passed to `<svg>` |

#### Example

```jsx
import { Spinner } from "@nath-green/ui";

<Spinner className="text-blue-500" />;
```
