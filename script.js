
    document.addEventListener("DOMContentLoaded", function () {
        const calculateButton = document.querySelector(".result button:nth-child(1)");
        const resetButton = document.querySelector(".result button:nth-child(2)");

        calculateButton.addEventListener("click", function () {
            const subjects = document.querySelectorAll(".sgpaform select");
            const creditsArray = [2,3,3,3,3,3,1.5,1.5,1.5,1.5,1,0.5];
            let totalCredits = 0;
            let totalGradePoints = 0;
            let hasError=false;

            subjects.forEach(function (subject, index) {
                const selectedGrade = parseFloat(subject.value);
                if(isNaN(selectedGrade) || selectedGrade < 0){
                    hasError=true;
                    const message = document.querySelector(".message p");
                    message.textContent="Error:Please enter valid sgpa for all subjects."
                    message.style.whiteSpace="pre-line"; 
                    return;
                }
                const credits = creditsArray[index];
                totalCredits += credits;
                totalGradePoints += selectedGrade * credits;
            });

            if(hasError){
                return;
            }
            const sgpa = totalGradePoints / totalCredits;
            const percentage=(sgpa-0.75)*10;
            const message = document.querySelector(".message p");
            message.textContent = `The sgpa you have obtained is: ${sgpa.toFixed(2)} \n\nThe equivalent percentage is:${percentage}%`;
            message.style.whiteSpace="pre-line";  
        });

        resetButton.addEventListener("click", function () {
            const subjects = document.querySelectorAll(".sgpaform select");
            subjects.forEach(function (subject) {
                subject.value = ""; // Reset all dropdowns to default value
            });

            const message = document.querySelector(".message p");
            message.textContent = "The SGPA you have obtained is :";
            message.textContent = "The percentage you have obtained is :";

        });
    });