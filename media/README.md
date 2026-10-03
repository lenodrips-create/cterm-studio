# media

`larp`, typed at any prompt in the studio, plays the video published here.

| File | What it is |
| --- | --- |
| `larp.mp4` | What the studio plays. H.264 + AAC, 1180x642, 11.5s. |
| `larp-original.mov` | The recording as it was handed over, untouched: HEVC in a QuickTime container. |

The original is HEVC, which Safari plays and Chrome and Firefox do not, so
`larp.mp4` is a straight H.264 transcode of it for the browsers. Nothing was
cut or re-timed — same frames, same length.

To replace the video, drop in a new `larp.mp4` (or `larp.webm` / `larp.mov`).
The page lists all three as sources and the browser takes the first it can
decode. Keep any single file under 100 MB.
