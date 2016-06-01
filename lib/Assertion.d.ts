import {Length} from '~chai/lib/Assertion';

declare module '~chai/lib/Assertion' {
  
/* 
  TODO: We can't do that until the next version of TypeScript (adding new types): 
        https://github.com/Microsoft/TypeScript/issues/4166
        error TS2665: Module augmentation cannot introduce new names in the top level scope.
  
  export interface Size extends LanguageChains, NumericComparison {
    (size: number, message?: string): Assertion;
  }

  export interface Assertion {
    size: Size;
    sizeOf: Size;
  }
*/
  
  // Extend chai's asserts with the extra ones added by chai-immutable
  export interface Assertion {
    size: Length;
    sizeOf: Length;
  }
}
