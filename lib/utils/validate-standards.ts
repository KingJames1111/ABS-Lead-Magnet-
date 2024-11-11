import { PERFORMANCE_STANDARDS } from '../core';

export function validatePerformanceMetrics(metrics: {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}) {
  const results = {
    fcp: validateMetric(metrics.fcp, PERFORMANCE_STANDARDS.metrics.fcp),
    lcp: validateMetric(metrics.lcp, PERFORMANCE_STANDARDS.metrics.lcp),
    fid: validateMetric(metrics.fid, PERFORMANCE_STANDARDS.metrics.fid),
    cls: validateMetric(metrics.cls, PERFORMANCE_STANDARDS.metrics.cls),
    ttfb: validateMetric(metrics.ttfb, PERFORMANCE_STANDARDS.metrics.ttfb),
  };

  return {
    results,
    isValid: Object.values(results).every(result => result === 'good'),
  };
}

function validateMetric(
  value: number | undefined,
  thresholds: { good: number; needsImprovement: number; poor: number }
): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
  if (value === undefined) return 'unknown';
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}