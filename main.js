document.addEventListener("DOMContentLoaded", function() {
    const semesterList = document.getElementById("semesterList");
    const semesterModal = document.getElementById("semesterModal");

    // Hard-coded data for semesters
    const semestersData = {
        "General": ["Semester_1", "Semester_2"],
        "Automobile": ["Semester_3", "Semester_4", "Semester_5", "Semester_6"],
        "Civil": ["Semester_3", "Semester_4", "Semester_5", "Semester_6"],
        "Computer": ["Semester_2", "Semester_3", "Semester_4", "Semester_5", "Semester_6"],
        "Electrical_&_Electronics": ["Semester_3", "Semester_4", "Semester_5", "Semester_6"],
        "Electronics": ["Semester_3", "Semester_4", "Semester_5", "Semester_6"],
        "Mechanical": ["Semester_3", "Semester_4", "Semester_5", "Semester_6"],
    };

    // Function to show semesters
    window.showSemesters = function(dept) {
        const semesters = semestersData[dept];

        // // Set background color based on the selected department
        // document.body.style.backgroundColor = getDeptColor(dept);
        
        // Set background color of the semester modal based on the selected department
        semesterModal.style.backgroundColor = getDeptColor(dept);
        semesterModal.style.color = getDeptColor(dept);

        // Populate semester list
        semesterList.innerHTML = ""; // Clear previous content
        semesters.forEach(semester => {
            const semesterItem = document.createElement("li");

            // Replace underscores with spaces for display
            const semesterDisplayName = semester.replace(/_/g, ' ');
            semesterItem.textContent = semesterDisplayName;
            
            semesterItem.addEventListener("click", () => redirectToSubjects(dept, semester));
            semesterList.appendChild(semesterItem);
        });

        // document.getElementById("deptList").style.display = "none";
        semesterModal.style.display = "block";
    };
    // Function to close the semester modal
    window.closeSemesterModal = function() {
        semesterModal.style.display = "none";
    }

    // Function to get department color as background color of semester list
    function getDeptColor(dept) {
        switch (dept) {
            case "General":
                return "#f21400"; 
            case "Automobile":
                return "#ffa600"; 
            case "Civil":
                return "#e5ce00"; 
            case "Computer":
                return "#3e9941"; 
            case "Electrical_&_Electronics":
                return "#007de4"; 
            case "Electronics":
                return "#3f51b5"; 
            case "Mechanical":
                return "#9c27b0";
            default:
                return "#fff"; // Default color
        }
    }

    // Function to redirect to subjects page
    function redirectToSubjects(dept, semester) {
        window.location.href = `subject.html?dept=${encodeURIComponent(dept)}&semester=${encodeURIComponent(semester)}`;
    }
});
