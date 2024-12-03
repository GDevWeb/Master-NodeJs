let start = 0;
let end = 10;

const increment = () => {
  while (start < end) {
    console.log(start);
    start++;
  }
  console.log("Good bye");
  process.exit(0);
};

increment();
