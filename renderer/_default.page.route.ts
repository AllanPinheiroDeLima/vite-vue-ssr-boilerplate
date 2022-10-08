import {PageContext} from "./types";

// Should you need to load locales on the fly and
// cache them, you should do it here
function onBeforeRoute(pageContext: PageContext) {
  const {
    locale,
    urlWithoutLocale
  } = extractLocale(pageContext.urlOriginal);

  return {
    pageContext: {
      locale,
      urlOriginal: urlWithoutLocale
    }
  }
}

function extractLocale(url?: string) {

  // We determine the locale, for example:
  //  extractLocale('/en-US/film/42').locale === 'en-US'
  //  extractLocale('/de-DE/film/42').locale === 'de-DE'
  const locale = ""

  // We remove the locale, for example:
  //  extractLocale('/en-US/film/42').urlWithoutLocale === '/film/42'
  //  extractLocale('/de-DE/film/42').urlWithoutLocale === '/film/42'
  //  ...
  const urlWithoutLocale = ""

  return { locale, urlWithoutLocale }
}
