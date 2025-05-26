# @n0n3br/use-page-visibility

![npm version](https://img.shields.io/npm/v/@n0n3br/use-page-visibility.svg)

A React hook to detect if the browser tab is currently visible/active to the user.

## Installation

```bash
pnpm add @n0n3br/use-page-visibility
# or npm install @n0n3br/use-page-visibility
# or yarn add @n0n3br/use-page-visibility
```

## Usage

```typescript
import React from "react";
import { usePageVisibility } from "@n0n3br/use-page-visibility";

function MyComponent() {
  const isVisible = usePageVisibility();

  return (
    <div>
      <p>Page is currently: {isVisible ? "Visible" : "Hidden"}</p>
      {isVisible ? (
        <p>Content visible when page is active.</p>
      ) : (
        <p>Content hidden when page is inactive.</p>
      )}
    </div>
  );
}

export default MyComponent;
```

## API

### `usePageVisibility(): boolean`

Returns a boolean indicating whether the page is currently visible (`true`) or hidden (`false`).

## Live Example

[Link to live example app (Coming Soon!)](#)
