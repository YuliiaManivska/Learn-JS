function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      // Remember the last arguments for calling after the delay
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    // Otherwise, enter the throttled state
    func.apply(this, arguments);

    isThrottled = true;

    // Set up resetting isThrottled after the delay
    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        // If there were calls, savedThis/savedArgs store the last one
        // Recursive call runs the function and sets the delay again
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
