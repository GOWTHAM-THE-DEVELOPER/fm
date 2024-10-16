# FleetManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


"Goal Component":
"Payload" :
        {
  "name": "string",        // Required, the name of the goal
  "description": "string", // Required, a brief description of the goal
  "priority": "string",    // Required, priority level: "Low", "Medium", "High"
  "startDate": "ISO date", // Required, the start date of the goal in ISO format
  "endDate": "ISO date",   // Required, the end date of the goal in ISO format
  "progress": number,      // Optional, percentage progress of the goal (0-100)
  "id": "string"           // Optional, unique identifier for the goal
}
"Example response":
        {
  "Goals": [
    {
      "name": "qweeweret",
      "description": "ewrerrrefrrerrer",
      "priority": "Medium",
      "startDate": "2024-08-19T18:30:00.000Z",
      "endDate": "2024-08-28T18:30:00.000Z",
      "progress": 23,
      "id": "1"
    }
  ]
}
"Request/Response Flow":
        POST /goals: Payload to create a new goal.
        GET /goals: Retrieve a list of goals.
        PUT /goals/{id}: Update an existing goal.
        DELETE /goals/{id}: Delete a goal.

-----------------------------------------------------------------------------------------

 "leaveComponent":
 "Payload" :{
  "leaveType": "string",         // Required, e.g., "Earned Leave", "Casual Leave"
  "startDate": "ISO date",       // Required, the start date of the leave in ISO format
  "endDate": "ISO date",         // Required, the end date of the leave in ISO format
  "totalDays": number,           // Required, total number of leave days
  "reasonforLeave": "string",    // Optional, reason for requesting the leave
  "status": "string",            // Required, status of the leave, e.g., "Pending", "Approved"
  "dateOfRequest": "ISO date",   // Required, date when the leave was requested in ISO format
  "booked": number,              // Optional, number of days booked
  "comment": "string",           // Optional, additional comments
  "reasonforRejected": "string", // Optional, reason for rejection (if applicable)
  "color": "string"              // Optional, color to represent leave type
}

"Example Response":
{
  "Leave": [
    {
      "id": "eec2",
      "leaveType": "Earned Leave",
      "startDate": "2024-08-14",
      "endDate": "2024-08-23",
      "totalDays": 10,
      "reasonforLeave": "dvbjdvbsd",
      "status": "Pending",
      "dateOfRequest": "2024-08-12",
      "booked": 10,
      "comment": "",
      "reasonforRejected": "",
      "color": ""
    },
    ...
  ]
}

"Request/Response Flow":
         GET /Leave: Retrieve all leave requests.
         POST /Leave: Add a new leave request.
         PUT /Leave/{id}: Update a leave request by its ID.
         DELETE /Leave/{id}: Delete a leave request by its ID.

----------------------------------------------------------------------------------

"LeaveReportees Component":
    "Payload" :{
  "employeeId": "string",         // Required, unique employee ID
  "employeeName": "string",       // Required, name of the employee
  "profilePicture": "string",     // Optional, path to the employee's profile picture
  "leaveBooked": number,          // Optional, number of leave days booked
  "generalTimining": "string",    // Optional, general working hours of the employee
  "status": "string",             // Required, e.g., "active", "on leave"
  "id": "string"                  // Optional, unique ID for the reportee entry
}

"Example Response"
  {
  "LeaveReportees": [
    {
      "employeeId": "E001",
      "employeeName": "John Doe",
      "profilePicture": "assets/images/john_doe.jpg",
      "leaveBooked": 10,
      "generalTimining": "9 AM - 6 PM",
      "status": "active",
      "id": "af4c"
    },
  ]
}

"Request/Response Flow":
     GET /LeaveReportees?managerId={managerId}: Retrieve reportees under a specific manager.

----------------------------------------------------------------------------------------------------------

"Teams Component":

    "Payload Example":{
  "teamId": "string",             // Required, unique team ID
  "teamName": "string",           // Required, name of the team
  "employees": [                  // Optional, list of employees in the team
    {
      "employeeId": "string",     // Required, unique employee ID
      "employeeName": "string",   // Required, name of the employee
      "role": "string",           // Optional, role of the employee in the team
      "status": "string"          // Optional, status of the employee
    }
  ],
  "goals": [                      // Optional, list of team goals
    {
      "goalId": "string",         // Required, unique goal ID
      "goalName": "string",       // Required, name of the goal
      "progress": number          // Optional, progress percentage of the goal
    }
  ]
}


"Example Response":{
  "Teams": [
    {
      "teamId": "T001",
      "teamName": "Development Team",
      "employees": [
        {
          "employeeId": "E001",
          "employeeName": "John Doe",
          "role": "Developer",
          "status": "active"
        }
      ],
      "goals": [
        {
          "goalId": "G001",
          "goalName": "Complete Module X",
          "progress": 75
        }
      ]
    },
    ...
  ]
}


"Request/Response Flow":
    GET /Teams: Retrieve all teams.
    POST /Teams/Employee: Add a new employee to the team.
    POST /Teams/Goals: Add a new goal for the team.

    ---------------------------------------------------------------------------------

"NewHires Component":

"Payload Example":{
  "employeeId": "string",         // Required, unique employee ID
  "employeeName": "string",       // Required, name of the new hire
  "profilePicture": "string",     // Optional, path to the profile picture of the new hire
  "joiningDate": "ISO date",      // Required, date of joining in ISO format
  "department": "string",         // Optional, department of the employee
  "status": "string"              // Required, current status, e.g., "active", "probation"
}

"Example Response":{
  "NewHires": [
    {
      "employeeId": "E001",
      "employeeName": "John Doe",
      "profilePicture": "assets/images/john_doe.jpg",
      "joiningDate": "2024-09-01",
      "department": "Development",
      "status": "active"
    },
    ...
  ]
}

"Request/Response Flow":
    GET /NewHires: Retrieve a list of recent hires.
    POST /NewHires: Add a new hire.
    PUT /NewHires/{id}: Update information for a specific new hire.
    DELETE /NewHires/{id}: Delete a new hire entry.

---------------------------------------------------------------------------------------




