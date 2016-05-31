declare module 'chai-immutable' {
  import {Utils} from 'chai/lib/Utils';

  function initialize(chai: any,  utils: Utils) : void;
  namespace initialize {
  }
  
  export = initialize; 
}

declare module '~chai/lib/Assertion' {
  
  export interface Size extends LanguageChains, NumericComparison {
    (size: number, message?: string): Assertion;
  }

  export interface Assertion {
    size: Size;
    sizeOf: Size;
  }
}