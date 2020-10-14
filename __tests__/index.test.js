test("hello world", () => {
  function BadCode() {
    throw new Error("noo");
  }

  function run(fn) {
    fn();
  }

  run(BadCode);
});
