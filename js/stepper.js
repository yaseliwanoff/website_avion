const stepperEl = document.querySelector(".stepper");

if (stepperEl) {
    const stepperBtnMinusEl = document.querySelector(".stepper__btn--minus");
    const stepperBtnPlusEl = document.querySelector(".stepper__btn--plus");
    const stepperInputEl = document.querySelector(".stepper__input");

    const stepperMinValue = Number(stepperInputEl.getAttribute("min"));
    const stepperMaxValue = Number(stepperInputEl.getAttribute("max"));

    // Reset input value
    stepperInputEl.addEventListener("change", () => {
        stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
        stepperBtnPlusEl.classList.remove("stepper__btn--disabled");

        if (Number(stepperInputEl.value) < stepperMinValue) {
            stepperInputEl.value = stepperMinValue;
            stepperBtnMinusEl.classList.add("stepper__btn--disabled");
        }

        if (Number(stepperInputEl.value) > stepperMaxValue) {
            stepperInputEl.value = stepperMaxValue;
            stepperBtnMinusEl.classList.add("stepper__btn--disabled");
        }
    })

    // Update input buttons
    function updateButtons(count) {
        if (count <= stepperMinValue) {
            stepperBtnMinusEl.classList.add("stepper__btn--disabled");
        } else {
            stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
        }

        if (count >= stepperMaxValue) {
            stepperBtnPlusEl.classList.add("stepper__btn--disabled");
        } else {
            stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
        }
    }

    updateButtons(Number(stepperInputEl.value));

    // Click plus button
    stepperBtnPlusEl.addEventListener("click", () => {
        let count = Number(stepperInputEl.value);

        if (count < stepperMaxValue) {
            count++;
            stepperInputEl.value = count;
            updateButtons(count);
        }
    });

    // Click minus button
    stepperBtnMinusEl.addEventListener("click", () => {
        let count = Number(stepperInputEl.value);

        if (count > stepperMinValue) {
            count--;
            stepperInputEl.value = count;
            updateButtons(count);
        }
    });
}
