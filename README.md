# Quarter-Old Coffee

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![entry](https://img.shields.io/badge/entry-valid%20106%20chars-brightgreen)](https://make.fun)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Entry for **make.fun #171 — The Funniest Office Joke, Judged Head to Head**.

One short line about office life is the whole entry:

> The office coffee tastes like it was brewed during the previous quarter and is still waiting for approval.

## How it works

`main.ts` writes that single line, byte for byte, to `entry.txt` in the
output directory the harness provides (`MAKEFUN_OUTPUT_DIR`). It is
deterministic — no clock, no randomness, no network — and writes nothing
inside this repository.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/path/to/out node --experimental-strip-types main.ts
```

## Links

- Competition: https://make.fun
- Homepage: https://make.fun

Referral: https://make.fun/r/nmy46sr8
