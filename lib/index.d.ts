declare module 'chai-immutable' {
  import {Utils} from 'chai/lib/Utils';

  // chai-immutable exports a single function (is a callable? module).
  //
  // The namespace+function combo enable the use of "import * as X from chai-immutable" and "use(X)" in chai.
  function initialize(chai: any,  utils: Utils) : void;
  namespace initialize {
  }
  
  export = initialize; 
}

declare module '~chai/lib/Assertion' {
  
  export interface Size extends LanguageChains, NumericComparison {
    (size: number, message?: string): Assertion;
  }

  // Extend chai's asserts with the extra ones added by chai-immutable
  export interface Assertion {
    size: Size;
    sizeOf: Size;
  }
}