# @nath-green/ui

A library of a11y focused style-less UI components to be consumed inconjunction with `TailwindCSS`.

```js
yarn install @nath-green/ui
```

```js
import { Button } from @nath-green/ui
```

## Button

### Props

| Prop             | Type     | Description                                            |
| ---------------- | -------- | ------------------------------------------------------ |
| type             | String   | Default: `button`                                      |
| children         | String   | Contents of the button                                 |
| onClick          | Function | Function executed on click                             |
| className        | String   | List of classes passed to `<button>`                   |
| disabled         | Boolean  | `disabled` prop added to `<button>`                    |
| loading          | Boolean  | `disabled` prop added to `<button>` with loading state |
| ariaLabel        | String   | Aria label                                             |
| enableLoading    | Boolean  | Default: `true` - enables spinner ui when `loading`    |
| spinnerClassName | String   | List of classes passed to `<Spinner>`                  |
| loadingAriaLabel | String   | Default: 'Loading' - Aria label when in loading state  |
| loadingAlertText | String   | Default: 'Loading' - Text with role `alert`            |
