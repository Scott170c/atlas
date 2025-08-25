# Using Hack Club Design Tokens with Tailwind

## How it works

- The Hack Club CSS (`frontend/hackclub.css`) is imported globally in `globals.css`.
- Tailwind's theme is extended to map all Hack Club CSS variables as color tokens.

## Usage in JSX/Tailwind

You can now use Hack Club tokens in your Tailwind classes:

```jsx
<div className="bg-background text-text border border-border">
  <h1 className="text-primary">Welcome</h1>
  <p className="text-muted">This uses Hack Club tokens!</p>
  <button className="bg-red text-white hover:bg-orange">Action</button>
</div>
```

**Available tokens:**  
`bg-darker`, `bg-dark`, `bg-darkless`, `bg-black`, `bg-steel`, `bg-slate`, `bg-muted`, `bg-smoke`, `bg-snow`, `bg-white`, `bg-red`, `bg-orange`, `bg-yellow`, `bg-green`, `bg-cyan`, `bg-blue`, `bg-purple`, `bg-text`, `bg-background`, `bg-elevated`, `bg-sheet`, `bg-sunken`, `bg-border`, `bg-primary`, `bg-secondary`, `bg-accent`, `bg-twitter`, `bg-facebook`, `bg-instagram`  
(and the same for `text-`, `border-`, etc.)

## Notes

- These tokens resolve to CSS variables, so theme changes (e.g., dark mode) are supported.
- For custom properties (spacing, radii, etc.), use inline styles:  
  `<div style={{ borderRadius: "var(--radii-extra)" }} />`
- For shadows, use Tailwind's `shadow` utilities or add custom mappings if needed.

## Example

```jsx
<button className="bg-primary text-white rounded shadow-card hover:bg-red">
  Hack Club Button
</button>
