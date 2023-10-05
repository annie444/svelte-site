// @ts-nocheck
import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from "./$types";

export const load = () => {
  return {
    analyticsId: env.VERCEL_ANALYTICS_ID
  };
}
;null as any as LayoutServerLoad;
