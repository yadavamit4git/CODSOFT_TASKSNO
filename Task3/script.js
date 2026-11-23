
let display = document.getElementById("display");

// Display par value add karna
function appendValue(value) {
    display.value += value;
}

// Display clear karna
function clearDisplay() {
    display.value = "";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculation karna
function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        let result = eval(display.value);

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}
