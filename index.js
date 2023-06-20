// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat() {
    appendCat = [...cats, "Broom"]
    return appendCat;
}

function prependCat() {
    prependCat = ["Arnold", ...cats];
    return prependCat;
}

// function removeFirstCat(cats, indexToRemove)

function removeFirstCat() {
removeFirstCat = cats.slice(1);
return removeFirstCat;
}

function removeLastCat() {
removeLastCat =  cats.slice(0, 2);
return removeLastCat
}
