
document.addEventListener("DOMContentLoaded", () => {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const form = document.getElementById("appointmentForm");

    let currentWeekOffset = 0;

    // Generate time slots dynamically
    const generateTimeSlots = () => ["9:00 AM", "10:00 AM", "11:00 PM", "1:00 PM", "2:00 PM"];

    // Generate week days based on offset
    function generateWeek(offset = 0) {
        const days = [];
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + offset * 7); // Adjust week by offset
        const startOfWeek = currentDate.getDate() - currentDate.getDay() + 1; // Monday
        const weekStart = new Date(currentDate.setDate(startOfWeek));

        for (let i = 0; i < 7; i++) {
            const day = new Date(weekStart);
            day.setDate(weekStart.getDate() + i);
            days.push(day);
        }
        return days;
    }

    // Render schedule table
    function renderScheduleTable(week) {
        const tableBody = document.querySelector(".table-body");
        tableBody.innerHTML = ""; // Clear previous content
        week.forEach((day) => {
            const dayColumn = document.createElement("div");
            dayColumn.classList.add("day-column");

            const dayName = document.createElement("h3");
            dayName.textContent = day.toLocaleDateString("en-US", { weekday: "long" });

            const dayDate = document.createElement("p");
            dayDate.textContent = day.toLocaleDateString("en-US", { month: "short", day: "numeric" });

            dayColumn.appendChild(dayName);
            dayColumn.appendChild(dayDate);

            // Exclude weekends (Saturday and Sunday)
            if (day.getDay() !== 0 && day.getDay() !== 6) {
                generateTimeSlots().forEach((time) => {
                    const timeSlot = document.createElement("button");
                    timeSlot.classList.add("time-slot");
                    timeSlot.textContent = time;
                    timeSlot.addEventListener("click", () => handleTimeSlotSelection(day, time));
                    dayColumn.appendChild(timeSlot);
                });
            } else {
                const noSlotsMessage = document.createElement("p");
                noSlotsMessage.textContent = "No available slots";
                noSlotsMessage.style.color = "#888";
                noSlotsMessage.style.fontStyle = "italic";
                dayColumn.appendChild(noSlotsMessage);
            }

            tableBody.appendChild(dayColumn);
        });

        // Update week label
        const weekLabel = document.querySelector(".week-label");
        const firstDay = week[0].toLocaleDateString("en-US", { month: "short", day: "numeric" });
        const lastDay = week[6].toLocaleDateString("en-US", { month: "short", day: "numeric" });
        weekLabel.textContent = `${firstDay} - ${lastDay}`;
    }

    // Handle time slot selection
    function handleTimeSlotSelection(date, time) {
        step2.classList.remove("active");
        step3.classList.add("active");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            confirmationMessage.textContent = `Thank you, ${name}! Your appointment is confirmed for ${date.toDateString()} at ${time}. A confirmation email will be sent to ${email}.`;

            step3.classList.remove("active");
            step4.classList.add("active");
        });
    }

    // Initialize calendar
    function initializeCalendar() {
        renderScheduleTable(generateWeek(currentWeekOffset));

        // Add event listeners for navigation buttons
        document.querySelector(".prev-week").addEventListener("click", () => {
            currentWeekOffset--;
            renderScheduleTable(generateWeek(currentWeekOffset));
        });

        document.querySelector(".next-week").addEventListener("click", () => {
            currentWeekOffset++;
            renderScheduleTable(generateWeek(currentWeekOffset));
        });
    }

    // Handle service selection (Step 1)
    document.querySelectorAll(".appointmentOption").forEach(option => {
        option.addEventListener("click", () => {
            step1.classList.remove("active");
            step2.classList.add("active");
            initializeCalendar();
        });
    });
});
