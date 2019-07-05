// Global symbols
// As we’ve seen, usually all symbols are different, even if they have the same names.
// But sometimes we want same-named symbols to be same entities.
//
//   For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
//   To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it
//   guarantees that repeated accesses by the same name return exactly the same symbol.
//   In order to create or read a symbol in the registry, use Symbol.for(key).
//   That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates
//   a new symbol Symbol(key) and stores it in the registry by the given key.
//
//   For instance:
//
//   // read from the global registry
//   let id = Symbol.for("id"); // if the symbol did not exist, it is created
//
// // read it again
// let idAgain = Symbol.for("id");
//
// // the same symbol
// console.log( id === idAgain ); // true
// Symbols inside the registry are called global symbols. If we want an application-wide symbol,
// accessible everywhere in the code – that’s what they are for.
//
// That sounds like Ruby
// In some programming languages, like Ruby, there’s a single symbol per name.
//
//   In JavaScript, as we can see, that’s right for global symbols.
//
//   Symbol.keyFor
// For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call:
// Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol.
//
//   For instance:
//
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
//
// // get name from symbol
// console.log( Symbol.keyFor(sym) ); // name
// console.log( Symbol.keyFor(sym2) ); // id
// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol.
// So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and return undefined.
//
//   console.log( Symbol.keyFor(Symbol.for("name")) ); // name, global symbol
//
// console.log( Symbol.keyFor(Symbol("name2")) ); // undefined, the argument isn't a global symbol
// System symbols
// There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
//
//   They are listed in the specification in the Well-known symbols table:
//
//   Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// …and so on.
//   For instance, Symbol.toPrimitive allows us to describe object to primitive conversion. We’ll see its use very soon.
//
//   Other symbols will also become familiar when we study the corresponding language features.
//
//   Summary
//   Symbol is a primitive type for unique identifiers.
//   Symbols are created with Symbol() call with an optional description.
//   Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal,
//   then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name.
//   Multiple calls of Symbol.for return exactly the same symbol.

//   Symbols have two main use cases:
//   “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library,
//   we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be occasionally listed.
//   Also it won’t be accessed directly, because another script does not have our symbol, so it will not occasionally intervene into its actions.
//   So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.
//   There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors.
//   For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
//
//   Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols.
//   Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones.
//   So they are not really hidden. But most libraries, built-in methods and syntax constructs adhere to a common agreement that they are.
//   And the one who explicitly calls the aforementioned methods probably understands well what he’s doing.
