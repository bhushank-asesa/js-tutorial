# JS engine

- Javascript Runtime Env.(JSRE) is container which contains
  - JS Engine(JSEg) - which is heart of JSRE, it is not hardware machine
  - API = may be different or same for browser, node js eg. browser has fetch api where water cooler has check water level
    - queue MTQ CBQ etc

## List of JSE

- **Carakan:** developed by Opera Software ASA
- **Chakra** (JScript9): A JScript engine used in Internet Explorer.
- **Chakra:** A JavaScript engine previously used in older versions of Microsoft Edge, before being replaced by V8.
- **SpiderMonkey:** Mozilla Gecko applications, including Firefox.
- **V8:** A JavaScript engine used in Google Chrome and other Chromium-based browsers,
- **Node.js, Deno, and V8.NET.**
- **First overall:** SpiderMonkey (1995) // Brendan Eich (JS creator)
- **First with modern features and performance:** `V8 (2008)`

## Interpreter and Compiler

- **Interpreters:** Line-by-line magic, slower but flexible. Think live coding and immediate feedback.
- **Compilers:** Pre-built speed demons, fast but locked in. Imagine lightning runs, but changes take time.
- Javascript is interpreter or compiler based depends upon which JSEg used
- Modern JSE use both compiler and interpreter

## How JSEngine Works

- **Code** -> normal JS code

### **Parsing**

- Consider var a = 8; converts it into token 4 tokens

### syntax parser

- converts it into Abstract Syntax tree ref. https://astexplorer.net

### Compilation

- Some engines, like V8, use Just-in-time (JIT) compilation to further optimize he code.
- This involves translating the internal representation into machine code specific to your computer's processor, making it run faster.

### Execution

- **Memory Heap** -> also contains garbage collector(Mark and sweep algorithm)
- **Call stack**
- compiler does code optimization inlining, copy elision, inline caching

### **The Mark and Sweep algorithm**

- is a garbage collection technique used in some programming languages to reclaim unused memory from the heap.
- It works in two phases:

1. Mark:
   - The engine starts by identifying all reachable objects.
   - These are objects that are still being used by the program, either directly referenced by variables or indirectly through other objects.
   - The engine sets a flag on these objects to mark them as "reachable."
   - Think of it like highlighting all the furniture you're using in your house.
2. Sweep:
   - The engine then sweeps through the heap and reclaims all memory not marked as reachable.
   - These objects are considered "garbage" and can be safely deleted, freeing up the memory for new allocations.
   - Imagine throwing away all the un-highlighted furniture in your house to clean up space.
   - **Benefits:**
     - **Automatic:** No manual intervention is needed to clear unused memory.
     - **Efficient:** Identifies and reclaims large chunks of memory at once.
     - **Reliable:** Handles complex object relationships effectively.
   - **Drawbacks:**
     - **Performance:** Can cause pauses in program execution during garbage collection cycles.
     - **Fragmentation:** May leave small unused memory fragments that cannot be reused effectively.

---

1. **Inlining:**
   - Imagine you have a small function called frequently within a larger program.
   - Instead of repeatedly calling it and incurring the overhead of function setup and teardown, the compiler can copy the function's body directly into the calling code.
   - This eliminates the function call altogether, making the code run faster.
   - **Benefits:**
     - Reduced function call overhead
     - Improved code locality (instructions are closer together)
     - Potentially faster execution
   - **Drawbacks:**
     - Increases code size
     - Can be less efficient for large or frequently modified functions
2. Copy Elision:

- Sometimes, the compiler encounters situations where variables are assigned the same value multiple times.
- Instead of creating and destroying unnecessary copies, the
  compiler can eliminate the redundant assignments and directly reuse the existing value. This reduces memory allocations and improves efficiency.
- **Benefits**:
  - Reduced memory allocations
  - Faster execution (less copying)
  - Improved memory footprint
  - **Drawbacks:** - May require careful analysis to avoid unintended side effects

3. **Inline Caching:**
   - This technique is particularly beneficial in dynamically typed languages like JavaScript.
   - It involves storing information about past function calls (e.g., the type of arguments used) and using it to optimize future calls.
   - If the same function is called with the same type of arguments again, the compiler can skip unnecessary checks and directly
     execute the optimized code for that specific case.
   - **Benefits:**
   - Reduced dynamic type checking overhead for frequently used calls
   - Improved performance for specific call patterns
   - More efficient use of cached information
