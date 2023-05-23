import { MaybePromise } from "../types";

type AsyncCallback<T> = (value: T, index?: number, array?: readonly T[]) => MaybePromise<unknown>; 
type Settings = { 
  /** 
   * If true, the callback will be called synchronously. calls array element in order 
   * 
   * @type {boolean} 
   * @default false 
   */ 
  serial?: boolean; 
}; 
 
/** 
 * foreach for async array function 
 * 
 * **Note:** if you want to use `serial` option, you should use `serial` setting instead. 
 * 
 * @template T type of element 
 * @param {Array<T>} array array or promise array, like `Promise.resolve([1,2,3,4,5])` 
 * @param {AsyncCallback<T>} callback - async callback function 
 * @param {Settings} settings - subset of settings, like `serial` 
 * @see {@link Settings} 
 */ 
export default async function forEach<T>( 
  array: MaybePromise<readonly T[]>, 
  callback: AsyncCallback<T>, 
  settings?: Settings 
): Promise<void> { 
  const awaited: readonly T[] = await array; 
  if (settings?.serial) { 
    for (let i = 0; i < awaited.length; i++) { 
      await callback(awaited[i], i, awaited); 
    } 
  } else { 
    await Promise.all(awaited.map(callback)); 
  } 
}