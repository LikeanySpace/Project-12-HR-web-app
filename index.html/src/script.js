import { connectIntegration, fetchRemoteEmployees } from './src/api.js';

// App State
let employees = [];
let attendanceDays = 0;
let baseSalary = 15000;

// Navigation
document.querySelectorAll(".sidebar li").forEach(item => {
  item.addEventListener("click", () => {
    showSection(item.dataset.section);
  });
});

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// HR SYSTEM
document.getElementById("addEmployeeBtn").addEventListener("click", () => {
  const name = document.getElementById("empName").value.trim();
  if (!name) return;

  employees.push({ name });
  renderEmployees();
  document.getElementById("empName").value = "";
});

function renderEmployees() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  employees.forEach(emp => {
    const li = document.createElement("li");
    li.textContent = emp.name;
    list.appendChild(li);
  });
}

// PAYROLL SYSTEM (Integrated with Attendance)
document.getElementById("payrollBtn").addEventListener("click", () => {
  const salary = baseSalary + attendanceDays * 500;
  document.getElementById("salary").textContent = salary;
});

// ATTENDANCE SYSTEM
document.getElementById("attendanceBtn").addEventListener("click", () => {
  attendanceDays++;
  document.getElementById("daysPresent").textContent = attendanceDays;
});

// PERFORMANCE SYSTEM
document.getElementById("performanceBtn").addEventListener("click", () => {
  const rating = document.getElementById("rating").value;

  const text =
    rating === "1"
      ? "Needs Improvement"
      : rating === "2"
      ? "Satisfactory"
      : "Excellent";

  document.getElementById("performanceResult").textContent = text;
});
