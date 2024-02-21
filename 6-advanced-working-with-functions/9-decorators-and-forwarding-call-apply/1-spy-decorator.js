function spy(func) {

  function wrapper(...args) {
    // using ...args instead of arguments to save actual array into wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
