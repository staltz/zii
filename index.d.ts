declare global {
  interface Object {
    z<X, Y>(f: (x: X) => Y): ReturnType<typeof f>;
  }
}
