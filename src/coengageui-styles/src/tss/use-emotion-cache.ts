import createCache, { EmotionCache, Options } from '@emotion/cache';
import { useCoengageUIEmotionOptions } from '../theme/CoengageUIProvider';

const defaultCacheOptions: Options = {
  key: 'coengage',
  prepend: true,
};

export const { getCache } = (() => {
  let cache: EmotionCache;
  let _key = defaultCacheOptions.key;

  function _getCache(options?: Options) {
    if (cache === undefined || _key !== options?.key) {
      _key = options?.key || 'coengage';
      cache = createCache(options?.key ? options : defaultCacheOptions);
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const options = useCoengageUIEmotionOptions();
  return getCache(options);
}
