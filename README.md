# vela

CTerm Studio — a code studio that runs entirely in the browser, plus the
Windows 11 desktop bundle it previews.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The landing page (built from `landing/`). **Enter** — the button or the key — opens the studio. |
| `studio.html` | The whole studio: editor, preview pane, file explorer and two shells, in one file. |
| `landing/` | Source for the landing page: React 19 + Vite + `motion`, plain CSS. Just the background video and an Enter button. |
| `landing-assets/` | The landing page's built JS and CSS. |
| `win11/` | The Windows 11 web desktop the studio boots in its preview pane. |

Open the site over HTTP (`python3 -m http.server`, then visit
`http://localhost:8000/`) — the landing page links to `studio.html`, and the preview pane loads `win11/` as a relative
path, so opening the file straight off disk won't boot the desktop.

## The landing page

```
cd landing
npm install
npm run dev     # local dev server
npm run build   # writes index.html + landing-assets/ to the repo root
```

Commit the rebuilt `index.html` and `landing-assets/` after changing anything
in `landing/src`.

## The studio

The editor, the preview renderers and both terminals call into a single C
core compiled to WebAssembly (`csh.c`, embedded in the page). The in-memory
file system, the shell, syntax highlighting, Markdown and CSV rendering all
live there.

The preview pane renders whatever the open file is: HTML, CSS and JavaScript
run in a sandboxed frame with a console attached; Markdown, Jupyter
notebooks, JSON, CSV and SVG each get their own view; anything else falls
back to highlighted source.

## The Windows layer

The desktop is reachable through a one-line language:

```
Lennon '<style>' {<command>} <scope>
```

`{windows-command}` boots the desktop. `<scope>` is `body` to run it or
`head` to parse it without running.

Three places understand the statement:

- **`project/terminal.term`** — a terminal pane in the preview. Open it from
  the explorer and type the statement at the prompt:

  ```
  Lennon 'torvalds' {windows-command} body
  ```

- **The csh panes** on the right, with the same statement.
- **Any open file** — drop the line into `index.html` and the preview boots
  the desktop instead of rendering the page.

`.win` files still preview as the desktop directly.

## Credits

The desktop bundle is [win11React](https://github.com/blueedgetechno/win11React),
an open-source React project under Creative Commons. Not affiliated with
Microsoft; Windows is their trademark.
