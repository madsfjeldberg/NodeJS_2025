// task create a function called getRandomInt that has params
// task min and max and an empty body for now

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) - min)
}

console.log(getRandomInt(0, 10))

function genericPerformer(name, action) {
  return action(name)
}

const codingAction = name => `${name} likes coding`

// assignment: using the generic performer, i would like 

console.log(genericPerformer("Lasse", codingAction))

// en callback function er en funktion der bliver brugt som en parameter i en anden funktion

function sleepingAction(name) {
  return `${name} loves sleeping.`
}

console.log(genericPerformer("Andreas", sleepingAction))

// tara boxing
// desired result: tara owns at boxing
console.log(genericPerformer("Tara", name => `${name} owns at boxing.`))