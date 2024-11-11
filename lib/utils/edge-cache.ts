import { TECHNICAL_STANDARDS } from '../core/technical-standards';

export function getCacheHeaders(type: keyof typeof TECHNICAL_STANDARDS.caching.edge) {
  const { policy } = TECHNICAL_STANDARDS.caching.edge[type];
  return {
    'Cache-Control': policy
  };
}

export function setupEdgeCaching(res: Response, type: keyof typeof TECHNICAL_STANDARDS.caching.edge) {
  const headers = getCacheHeaders(type);
  Object.entries(headers).forEach(([key, value]) => {
    res.headers.set(key, value);
  });
  return res;
}