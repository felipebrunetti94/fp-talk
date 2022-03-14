interface Functor<A> {
  map<B>(transform: (value: A) => B): Functor<B>;
}

function map<A, B>(transform: (value: A) => B) {
  return function (functor: Functor<A>) {
    return functor.map(transform);
  };
}
