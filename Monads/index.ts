interface Monad<A> {
  bind<B>(transform: (value: A) => Monad<B>): Monad<B>;
}
