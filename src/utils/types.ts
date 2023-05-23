export type MaybePromise<T> = T | Promise<T>;

export type Fn<Result = unknown, Args extends unknown[] = [], This = void> = (this: This, ...args: Args) => Result;

export type MaybeAsyncFn<Result = unknown, Args extends unknown[] = [], This = void> = Fn< 
  MaybePromise<Result>, 
  Args, 
  This 
>;