import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { BaseLayout } from './base.layout';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  layout?: typeof BaseLayout;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: unknown;
};

export * from './base.layout';
