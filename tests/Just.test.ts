import * as test from 'tape';
import { just, isJust } from './../src/index';

test('Just.getOrElse', t => {
  const result = just('foo');
  t.equal('foo', result.getOrElse(() => 'bar'), 'Returns the Just value');
  t.end();
});

test('Just.map', t => {
  just('foo').map(s => t.equals('foo', s, 'map fn gets value'));
  t.end();
});

test('Just.andThen', t => {
  just('foo').andThen(v => just(t.pass('andThen runs')));
  t.end();
});

test('Just.cata', t => {
  just('foo').cata({
    Just: v => t.pass('Just matcher ran as expected.'),
    Nothing: () => t.fail('Nothing matcher should not run'),
  });
  t.end();
});

test('isJust', t => {
  t.assert(isJust(just('foo')), 'Expect isJust to be true');
  t.end();
});
