const CAREER_START = Date.UTC(2017, 6, 1);

export const YEARS = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000));

/** Used when the live GitHub stats are unavailable. */
export const FALLBACK_STATS = [{ value: '12+', label: 'Projects shipped' }];
