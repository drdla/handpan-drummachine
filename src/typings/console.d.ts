// https://stackoverflow.com/a/56198253
declare module 'console' {
  export = typeof import('console');
}
