# vela

CTerm Studio — a code studio that runs entirely in the browser, plus the
Windows 11 desktop bundle it previews.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The whole studio: editor, preview pane, file explorer and two shells, in one file. |
| `win11/` | The Windows 11 web desktop the studio boots in its preview pane. |

Open `index.html` over HTTP (`python3 -m http.server`, then visit
`http://localhost:8000/`) — the preview pane loads `win11/` as a relative
path, so opening the file straight off disk won't boot the desktop.

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
`head` to parse it without running. Both the shell and the preview pane
understand the statement, so typing it into any open file — `index.html`
included — boots the desktop in the preview:

```
Lennon 'torvalds' {windows-command} body
```

Previewing a `.win` file does the same thing; `project/windows11.win` holds
the bundle's settings.

## Credits

The desktop bundle is [win11React](https://github.com/blueedgetechno/win11React),
an open-source React project under Creative Commons. Not affiliated with
Microsoft; Windows is their trademark.
