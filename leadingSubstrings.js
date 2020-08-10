function leadingSubstrings(str) {
  return str.split('').map((number, idx) =>
    str.slice(0, idx + 1));
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
