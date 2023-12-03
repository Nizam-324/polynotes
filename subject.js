document.addEventListener("DOMContentLoaded", function() {
    const subjectList = document.getElementById("subjectList");

    // Get department and semester from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const dept = urlParams.get("dept");
    const semester = urlParams.get("semester");

    document.getElementById("pageTitle").textContent = `${dept} - ${semester}`;
    pageTitle.style.color = getDeptColor(dept); //Set text color based on the selected department

    // Hard-coded data for subjects
    const subjectsData = {
        "General": {
            "Semester_1": ["Mathematics_1", "Chemistry", "Physics_1"],
            "Semester_2": ["Environmental_science", "Mathematics_2", "Physics_2"],
        },
        "Automobile": {
            "Semester_3": ["Automobile_Electrical_and_Electronics_Systems", "Fundamentals_of_Fluid_Mechanics", "Internal_Combustion_Engines", "Manufacturing_Technology_for_Automobile_Components"],
            "Semester_4": ["Heat_Power_Engineering", "Material_Science_and_Strength_of_Materials"],
            "Semester_5": ["Design_of_Automotive_Components", "Industrial_Management_and_Safety", "Two_and_three_wheeler_(Elective)", "Vehicle_Diagnostics_and_Service"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
        "Civil": {
            "Semester_3": ["Advanced_Surveying", "Building_Construction_and_Construction_Materials", "Concrete_Technology", "Theory_of_Structures"],
            "Semester_4": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
            "Semester_5": ["Construction_Management_and_Safety_Engineering", "Design_of_Steel_and_RCC_Structures", "Habitat_technology_(Elective)", "Transportation_Engineering"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
        "Computer": {
            "Semester_2": ["Fundementals_of_Electrical_and_Elecronics_Engg", "Problem_Sovling_&_Programming"],
            "Semester_3": ["Computer_Organization", "DBMS", "DCF", "Programming_In_C", "WebTechnology"],
            "Semester_4": ["CCN", "Data_Structure", "OOP"],
            "Semester_5": ["ES_RTOS", "OS", "PMSE", "VTCC_(Elective)"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
        "Electrical_&_Electronics": {
            "Semester_3": ["Analog_digital_circuit", "DC_machines_traction_motors", "Electrical_and_electronics_measuring_instruments", "Fundamentals_of_Electric_circuit", "Mechanical_engineering"],
            "Semester_4": ["Electrical_installation_design_estimation", "Induction_machines", "Power_Electronics_devices_circuits"],
            "Semester_5": ["Electricity_Generation, Transmission_Distribution", "Industrial_Management_and Safety", "Switch_gear_protection_(Elective)", "Synchronous_Machines_FHP_Motors"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
        "Electronics": {
            "Semester_3": ["Digital_Electronics", "Electric_Circuits_Networks", "Electronic_Circuits", "Fundamentals_of_C_Programming", "Principles_of_Electronic_Communication"],
            "Semester_4": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
            "Semester_5": ["Digital_communication_(Elective)", "Embedded_Systems", "Industrial_Automation", "Industrial_Management_and_Safety"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
        "Mechanical": {
            "Semester_3": ["Fundamentals_of_Electrical_Engineering", "Machine_Tools", "Material_Science_and_Metrology", "Strength_of_Materials"],
            "Semester_4": ["Automobile_Engineering", "Fluid_Mechanics_and_Hydraulic_Machines", "Thermal_Engineering"],
            "Semester_5": ["Design_Of_Machine_Elements", "Industrial_Management_and_Safety", "Modern_production_process_(Elective)", "Power_Plant_Engineering", "Refrigeration_and_Air_conditioning"],
            "Semester_6": ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
        },
    };

    // Replace the following with your actual subject data
    const subjects = subjectsData[dept][semester];

    subjects.forEach(subject => {
        const subjectItem = document.createElement("li");
        
        // Replace underscores with spaces for display
        const subjectDisplayName = subject.replace(/_/g, ' ');
        subjectItem.textContent = subjectDisplayName;

        subjectItem.style.backgroundColor = getDeptColor(dept); // Set background color based on the selected department
        subjectItem.addEventListener("click", () => redirectToNotes(dept, semester, subject));
        subjectList.appendChild(subjectItem);
    });

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
            case "Electrical & Electronics":
                return "#007de4"; 
            case "Electronics":
                return "#3f51b5"; 
            case "Mechanical":
                return "#9c27b0";
            default:
                return "#fff"; // Default color
        }
    }

    // Function to redirect to notes page
    function redirectToNotes(dept, semester, subject) {
        // Modify this URL format based on your folder structure
        window.location.href = `Notes/${encodeURIComponent(dept)}/${encodeURIComponent(semester)}/${encodeURIComponent(subject)}`;
    }
});
