# Landing na wpłaty darowizn

Projekt to prosty Landing page na wpłaty darowizn w paru językach. Projekt jest w Next.js z zamiarem publikowania statycznego HTML na jakimś serwerze "edgeowym".

## Publikacja

Strona publikowana jest za pomocą CloudFlare Pages, w ramach konta KIK w CloudFlare, aktualna wersja dostępna pod https://donate-kik-waw-pl.pages.dev/.

Docelowo będzie pod donate.kik.waw.pl

CloudFlare buduje naszą stronę u siebie i potem publikuje HTML pod adresem, nie ma póki co żadnych części dynamicznych.

CloudFlare domyślnie buduje strony na Node w wersji 12.18.0, my nadpisujemy tę wersję za pomocą `.nvm` aby mieć zgodność z najnowszym Next.js.

Komenda odpalana na CloudFlare w ramach publikacji strony to:
```sh
next build && next export
```

I serwowany jest folder `./out`, to pozwoli w prosty sposób się ew. przenieść gdziekolwiek indziej.

## Development

Oparty o Node.js, Next.js, TypeScript i Tailwindcss, oraz tłumaczenia ogarnięte przez `next-export-i18n`.

Do odpalenia projektu u siebie:

Instalujemy zależności za pomocą Yarn:
```shell
yarn
```

Odpalamy sobie lokalny serwer pod `localhost:3000`:
```shell
yarn dev
```
