# `react-use-page-visibility`

A React hook to detect if the browser tab is currently visible/active to the user.

## Installation

```bash
npm install @n0n3br/react-use-page-visibility
# or
yarn add @n0n3br/react-use-page-visibility
# or
pnpm add @n0n3br/react-use-page-visibility
```

## Usage

```typescript
import { usePageVisibility } from "@n0n3br/react-use-page-visibility";

function MyComponent() {
  const isVisible = usePageVisibility();

  return (
    <div>
      <p>Page is {isVisible ? "visible" : "hidden"}</p>
    </div>
  );
}
```

## API

### `usePageVisibility(): boolean`

Returns a boolean indicating whether the page is currently visible (`true`) or hidden (`false`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
