interface Object {
  z<X, Y>(f: (x: X) => Y): ReturnType<typeof f>;
}
interface Array<T> {
  z<Y>(f: (x: this) => Y): ReturnType<typeof f>;
}
