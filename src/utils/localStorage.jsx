const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstName": "Aarav",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Report",
                "taskDescription": "Create a detailed quarterly report for the sales team.",
                "taskDate": "2024-12-10",
                "category": "Reports"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2024-12-07",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Bug",
                "taskDescription": "Resolve the high-priority issue in the login module.",
                "taskDate": "2024-12-06",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstName": "Ishaan",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Mockups",
                "taskDescription": "Create UI mockups for the new mobile application.",
                "taskDate": "2024-12-12",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Data Analysis",
                "taskDescription": "Analyze data from the last marketing campaign.",
                "taskDate": "2024-12-08",
                "category": "Analysis"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Presentation",
                "taskDescription": "Deliver a presentation on the new product roadmap.",
                "taskDate": "2024-12-06",
                "category": "Presentations"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstName": "Vihaan",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Customer Feedback",
                "taskDescription": "Compile feedback from recent customer surveys.",
                "taskDate": "2024-12-04",
                "category": "Feedback"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop Feature",
                "taskDescription": "Implement the search functionality in the web app.",
                "taskDate": "2024-12-14",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Write Documentation",
                "taskDescription": "Document the API endpoints for the new service.",
                "taskDate": "2024-12-06",
                "category": "Documentation"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstName": "Aditya",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Schedule Interviews",
                "taskDescription": "Coordinate interview schedules for the hiring process.",
                "taskDate": "2024-12-11",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review code submissions from the development team.",
                "taskDate": "2024-12-06",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Conduct an inventory audit for the equipment.",
                "taskDate": "2024-12-09",
                "category": "Audit"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstName": "Ayaan",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Research competitors' strategies in the industry.",
                "taskDate": "2024-12-13",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Organize Event",
                "taskDescription": "Plan the details for the annual company event.",
                "taskDate": "2024-12-05",
                "category": "Events"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Test Features",
                "taskDescription": "Test the new features in the QA environment.",
                "taskDate": "2024-12-07",
                "category": "Testing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
}