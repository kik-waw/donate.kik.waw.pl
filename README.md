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

Oparty o Node.js, Next.js, TypeScript i Tailwindcss.

Do odpalenia projektu u siebie:

Instalujemy zależności za pomocą Yarn:
```shell
yarn
```

Odpalamy sobie lokalny serwer pod `localhost:3000`:
```shell
yarn dev
```

### Praca z tłumaczeniami (i18n)

Tłumaczenia są ładowane z folderu `./content`, ładowane są przy generowaniu stron (`./pages/[locale].tsx`, [Next.js Dynamic Router](https://nextjs.org/docs/routing/dynamic-routes)).

Pliki w Markdown są renderowane przez `ReactMarkdown`.

Dodatkowo krótkie teksty z UI są z `./content/strings.[locale].json` dla każdej wersji językowej

Wersje językowe są zdefiniowane w `./config.ts`

#### Domyślny język

Domyślnym językiem i renderowanym dla ścieżki `/` jest `en` (zobacz `./pages/index.tsx`). Jednak mechanizm w JavaScript `./components/getNavigatorLanguage.ts` wykrywa język użytkownika i zwraca język w którym ma być renderowana strona przekierowując użytkownika za pomocą `next/router`, więc nawigując na stronę główną na początku "mignie" nam angielski a potem załaduje się odpowiedni język. To jest spodziewane zachowanie.

Potencjalnym usprawnieniem będzie przekierowanie po stronie serwera na podstawie `Accept-Language` headera. Co może jest do osiągnięcia w CloudFlare Pages ale jeszcze nie zostało sprawdzone.

#### Dodawanie nowej wersji językowej

- Dodaj odpowiednie pliki markdown i json w `./content`
- Dodaj język w formie ISO do tablicy w `./config.ts` -> `locales`
