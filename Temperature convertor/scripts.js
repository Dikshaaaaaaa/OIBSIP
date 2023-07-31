document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    celsiusInput.addEventListener("input", function() {
        if (celsiusInput.value === "") {
            fahrenheitInput.value = "";
        } else {
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        }
    });

    fahrenheitInput.addEventListener("input", function() {
        if (fahrenheitInput.value === "") {
            celsiusInput.value = "";
        } else {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = (fahrenheit - 32) * 5/9;
            celsiusInput.value = celsius.toFixed(2);
        }
    });
});
