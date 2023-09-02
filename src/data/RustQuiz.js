export const RustQuizdata = {data : [
  {
    "_id": "64ef7ff7ad79e12abc6dabd5",
    "Question": "What is Rust primarily designed for?",
    "Options": {
      "a": "Web development",
      "b": "Data analysis",
      "c": "Systems programming",
      "d": "Mobile app development"
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabd6",
    "Question": "Which of the following best describes the ownership system in Rust?",
    "Options": {
      "a": "There is no ownership system in Rust.",
      "b": "Ownership is based on reference counting.",
      "c": "Ownership ensures memory safety and prevents data races.",
      "d": "Ownership allows unlimited mutable borrowing."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabd7",
    "Question": 'In Rust, what is the purpose of the "borrowing" concept?',
    "Options": {
      "a": "To allow multiple threads to access data simultaneously.",
      "b": "To share ownership of a value between multiple variables.",
      "c": "To transfer ownership of a value from one variable to another.",
      "d": "To prevent modification of data while allowing access."
    },
    "Answer": "d"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabd8",
    "Question": "Which of these statements about lifetimes in Rust is true?",
    "Options": {
      "a": "Lifetimes are optional in Rust; you don't need to worry about them.",
      "b": "Rust's lifetime system helps prevent dangling pointers and data races.",
      "c": "Lifetimes are only relevant when dealing with strings and text.",
      "d": "Lifetimes are used for dynamic memory allocation in Rust."
    },
    "Answer": "b"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabd9",
    "Question": 'What does the "mut" keyword signify in Rust?',
    "Options": {
      "a": 'It stands for "mutable," indicating that a variable\'s value can be changed.',
      "b": 'It stands for "immutable," indicating that a variable\'s value cannot be changed.',
      "c": 'It stands for "mutex," indicating a synchronization primitive for threading.',
      "d": 'It stands for "mutation," indicating that a variable is being used in a loop.'
    },
    "Answer": "a"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabda",
    "Question": "Which of the following is NOT a valid Rust variable binding?",
    "Options": {
      "a": "let x = 5;",
      "b": 'let mut y = "hello";',
      "c": "const Z = 3.14;",
      "d": "let 123abc = true;"
    },
    "Answer": "d"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabdb",
    "Question": 'What is the purpose of the "match" expression in Rust?',
    "Options": {
      "a": "To define new data types.",
      "b": "To create macros.",
      "c": "To handle control flow based on pattern matching.",
      "d": "To perform mathematical calculations."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabdc",
    "Question": 'In Rust, what is a "trait"?',
    "Options": {
      "a": "A trait is a Rust-specific data structure for storing large amounts of data.",
      "b": "A trait is a mechanism for implementing inheritance between classes.",
      "c": "A trait defines a set of methods that a type must implement, enabling polymorphism.",
      "d": "A trait is a type of loop used for iterating over collections."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabdd",
    "Question": 'What is the purpose of the "Option" enum in Rust?',
    "Options": {
      "a": "It is used for defining custom data types.",
      "b": "It is a container for values that may or may not be present.",
      "c": "It is a keyword used to declare variables.",
      "d": "It is a construct for defining conditional statements."
    },
    "Answer": "b"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabde",
    "Question": "How does Rust achieve memory safety and data race prevention?",
    "Options": {
      "a": "By allowing unrestricted mutable access to data.",
      "b": "By using a garbage collector to manage memory.",
      "c": "By enforcing strict compile-time checks and ownership rules.",
      "d": "By relying on runtime checks for null and undefined behavior."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabdf",
    "Question":
      'Which statement best describes "cargo" in the context of Rust?',
    "Options": {
      "a": "Cargo is a tool for downloading and installing system libraries.",
      "b": "Cargo is a version control system specifically designed for Rust projects.",
      "c": "Cargo is Rust's package manager and build tool.",
      "d": "Cargo is a graphical user interface for writing Rust code."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe0",
    "Question":
      'What is the primary benefit of Rust\'s "Fearless Concurrency" slogan?',
    "Options": {
      "a": "It guarantees that no bugs related to concurrency will ever occur.",
      "b": "It promotes the use of global locks for thread safety.",
      "c": "It encourages developers to avoid writing concurrent code.",
      "d": "It means developers can write concurrent code without memory safety issues."
    },
    "Answer": "d"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe1",
    "Question": 'What is the purpose of the "drop" function in Rust?',
    "Options": {
      "a": "To forcefully deallocate memory.",
      "b": "To release ownership of a value.",
      "c": "To clean up resources when a value goes out of scope.",
      "d": "To trigger the compiler's garbage collector."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe2",
    "Question":
      'What is the purpose of the "async" and "await" keywords in Rust?',
    "Options": {
      "a": "They are used to define recursive functions.",
      "b": "They are used to define closures.",
      "c": "They are used to write concurrent code using asynchronous programming.",
      "d": "They are used to define compile-time constants."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe3",
    "Question": 'In Rust, what is a "slice"?',
    "Options": {
      "a": "A type of loop used for iterating over collections.",
      "b": "A keyword used for defining custom data structures.",
      "c": "A reference to a contiguous sequence of elements in a collection.",
      "d": "A synchronization primitive for multithreading."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe4",
    "Question": "What is Rust\'s 'Cargo.toml'?",
    "Options": {
      "a": "A configuration file for specifying project metadata and dependencies.",
      "b": "A file that contains the main source code of a Rust program.",
      "c": "A file used for defining custom macros and attributes.",
      "d": "A tool for managing network communication in Rust programs."
    },
    "Answer": "a"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe5",
    "Question":
      "Which of the following is true about the concept of 'Rust lifetimes'?",
    "Options": {
      "a": "Lifetimes specify how long a Rust program will run.",
      "b": "Lifetimes are only relevant when dealing with I/O operations.",
      "c": "Lifetimes are annotations that describe the scope during which references are valid.",
      "d": "Lifetimes are a way to define the execution order of functions in Rust."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe6",
    "Question": "Which of the following best describes Rust's approach to metaprogramming?",
    "Options": {
      "a": "Rust doesn't support metaprogramming.",
      "b": "Rust allows direct manipulation of binary executable files.",
      "c": "Rust supports compile-time code generation through macros.",
      "d": "Rust relies on runtime reflection for metaprogramming tasks."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe7",
    "Question":
      "What is the purpose of the 'async' and 'await' keywords in Rust?",
    "Options": {
      "a": "They are used to define recursive functions.",
      "b": "They are used to define closures.",
      "c": "They are used to write concurrent code using asynchronous programming.",
      "d": "They are used to define compile-time constants."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe8",
    "Question": 'In Rust, what is a "slice"?',
    "Options": {
      "a": "A type of loop used for iterating over collections.",
      "b": "A keyword used for defining custom data structures.",
      "c": "A reference to a contiguous sequence of elements in a collection.",
      "d": "A synchronization primitive for multithreading."
    },
    "Answer": "c"
  },
  {
    "_id": "64ef7ff7ad79e12abc6dabe8",
    "Question": 'In Rust, what is a "slice"?',
    "Options": {
      "a": "A type of loop used for iterating over collections.",
      "b": "A keyword used for defining custom data structures.",
      "c": "A reference to a contiguous sequence of elements in a collection.",
      "d": "A synchronization primitive for multithreading."
    },
    "Answer": "c"
  }
]}
