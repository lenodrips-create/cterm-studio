# CTerm Studio

A web-based terminal environment built entirely in **C and WebAssembly**. Code, preview, and execute all in one VS Code-style interface with a shell, file system, and multi-language support.

## Features

- **Interactive Shell** — Full POSIX-style shell with 30+ commands (ls, cd, grep, find, tree, sort, etc.)
- **Code Editor** — Syntax-highlighted editor with tab support
- **Live Preview** — Renders HTML, CSS, JS, Markdown, Jupyter notebooks, CSV, JSON, SVG, SQL, and plain text
- **File System** — Virtual in-memory filesystem with bump allocator and compaction
- **Syntax Highlighting** — 9+ languages: HTML, CSS, JavaScript, Python, C, Markdown, SQL, Shell, Plain Text
- **Terminal Emulator** — ANSI color support, tab completion, command history
- **Split Panes** — Draggable VS Code-style dividers for editor, preview, and dual terminals
- **Dark Theme** — True black background with amber accents
- **Windows 11 Desktop** — Embedded React-based desktop emulation layer
- **Persistence** — localStorage-based state per viewer

## Quick Start

```bash
cd /home/claude/cterm
python3 serve.py
# Visit http://localhost:8777
```

The server runs on port **8777** and serves the complete application with embedded WebAssembly core.

## Architecture

### C Core (`csh.c` — 1800+ lines)
- Compiled to **wasm32** target with clang
- Virtual filesystem with in-memory storage
- Multi-language syntax highlighter
- Command interpreter with pipes (`|`) and redirects (`>`, `>>`)
- Tab completion and 100-entry command history
- Markdown and CSV renderers
- **Lennon Windows command layer** — DOS/Windows command emulation (dir, tree, copy, del, etc.)

### Frontend (`page.src.html` — 1094 lines)
- Pure HTML/CSS/JavaScript (no frameworks)
- WebAssembly bridge for C core communication
- VS Code-style workbench with draggable splitters
- Tab management and editor with line numbers
- Live preview renderer for 9+ file types
- Console capture for JS errors and logs
- Responsive design (stacks on mobile)

### Windows 11 Bundle
- 325 files (~14MB) — React-based desktop clone
- Runs in iframe within preview pane
- Dark theme preseed via localStorage

## Shell Commands

**File Operations:** `ls`, `cd`, `pwd`, `cat`, `head`, `tail`, `tree`, `find`, `touch`, `mkdir`, `rm`, `mv`, `cp`, `new`, `open`, `preview`

**Text Processing:** `grep`, `wc`, `sort`, `echo`

**System:** `clear`, `reset`, `history`, `help`, `whoami`

**Lennon:** `Lennon 'torvalds' {windows-command}` — Run DOS commands and preview files

## File Types Supported

| Format | Preview | Edit |
|--------|---------|------|
| HTML/CSS/JS | Live render | ✓ |
| Markdown | Rendered | ✓ |
| Jupyter Notebook | Cells + outputs | ✓ |
| Python, C, C++ | Syntax highlighted | ✓ |
| JSON | Expandable tree | ✓ |
| CSV | Formatted table | ✓ |
| SVG | Checkered stage | ✓ |
| SQL | Highlighted | ✓ |
| Windows (.win) | Desktop emulator | ✓ |
| Plain Text | Raw | ✓ |

## Compilation

Compile the C core from scratch:

```bash
clang --target=wasm32 -O2 -ffreestanding -nostdlib \
  -Wl,--no-entry -Wl,--allow-undefined \
  -o csh.wasm csh.c
```

Then inject the base64-encoded binary into `page.src.html` by replacing `__WASM_B64__`.

## Technical Highlights

- **No Dependencies** — Pure C, HTML/CSS/JS, standard WebAssembly
- **Bump Allocator** — Fast, low-fragmentation memory in wasm32 linear memory
- **Inline Compilation** — Syntax highlighter compiles to HTML class tokens
- **ANSI Parser** — Terminal output with 16-color support
- **localStorage Persistence** — Per-viewer state (files, editor tabs, splits, terminal history)
- **Responsive Layout** — Stacks panes on screens ≤880px wide

## Known Limitations

- **No networking** — Filesystem is local to the browser
- **512 KB file limit** — Maximum file size due to wasm32 linear memory
- **No process spawning** — Commands run sequentially in single wasm context
- **Windows bundle large** — 14MB React app runs in iframe (slow on first load)

## Use Cases

- Learn shell commands interactively
- Quick prototyping (HTML/CSS/JS)
- View Jupyter notebooks in-browser
- Embedded dev environment
- Educational terminal emulator

## License

Built by Lennon. Use freely.
