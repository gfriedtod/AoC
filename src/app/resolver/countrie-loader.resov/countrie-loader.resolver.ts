import { ResolveFn } from '@angular/router';

export const countrieLoaderResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
