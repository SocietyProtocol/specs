#!/usr/bin/env python3
"""Check the mirrored handbook that Railway nginx will serve."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"


def main() -> int:
    index = (PUBLIC / "index.html").read_text(encoding="utf-8")
    if "<title>Society Protocol Handbook</title>" not in index:
        raise SystemExit("public/index.html is missing the handbook title")
    template = (ROOT / "nginx.conf.template").read_text(encoding="utf-8")
    if "LISTEN_PORT" not in template:
        raise SystemExit("nginx template does not bind PORT")
    if "location = /healthz" not in template:
        raise SystemExit("nginx template is missing /healthz")
    print("ok")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
