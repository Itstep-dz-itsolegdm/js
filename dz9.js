function performTask(taskName, variable) {
    if (variable) {
        console.log(taskName);
    }
}

let func1 = Math.floor(Math.random() * 10);
let func2 = Math.floor(Math.random() * 10);
let func3 = Math.floor(Math.random() * 10);

// console.log("func1 = " + func1);
// console.log("func2 = " + func2);
// console.log("func3 = " + func3);

setTimeout(() => performTask("Встати з ліжка", func1), func1 * 100);
setTimeout(() => performTask("Зробити каву", func2), func2 * 100);
setTimeout(() => performTask("Вигуляти собаку", func3), func3 * 100);
