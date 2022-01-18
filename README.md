### Install dependencies

```
yarn # for yarn
npm install # for npm
```

### Changing permission

Make files in .husky folder as executable for hooks to work properly.

```
chmod +x ./.husky/commit-msg ./.husky/pre-commit
```

### folder structure

```shell:Structure
root/
├─ components/
   ├─ screen/
│  ├─ shared/
├─ hooks/
├─ lib/
├─ context/
├─ styles/
├─ types/
├─ utils/
│  ├─ helpers/
│  ├─ scripts/
```

It makes your project structure easily scannable:

- `components` are self-explanatory with the exception that they include a `shared` folder for shared components and `screen` folder for screens and screen specific components which is pages in next js.
- `hooks` are where you keep reusable React hooks
- `lib` is where you store third party code (e.g., client API for a CMS, analytics)
- `context` is where you store context api code
- `styles` could hold anything related to styles even if you're using [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS).
- `types` is where you keep your reusable TypeScript types (if used in a single component, don't include it here) — if you're using a npm package without types, you can add `index.d.ts` and `declare module 'package-name'` so TypeScript doesn't complain
- `utils` is where you keep utilities and scripts
  - `helpers` are helpful functions such as currency conversion
  - `scripts` could be Bash or Node scripts you can run

If you have static assets such as images or fonts, they should be placed inside the `assets` or `static` folder.

### Note 📌

There is place holder file called `place.txt` in almost every folder remove that file before start working.
Or else you'll get build error
