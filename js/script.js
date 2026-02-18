import { connectIntegration, fetchRemoteEmployees } from './api.js';

// App State
let employees = [];
let attendanceDays = 0;
const baseSalary = 15000;

// --- Navigation ---
const sidebarItems = document.querySelectorAll(".sidebar li");
const sections = document.querySelectorAll(".section");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => showSection(item.dataset.section));
});

function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Sidebar highlight
  sidebarItems.forEach(li => {
    li.classList.toggle("active", li.dataset.section === id);
  });
}

// --- HR SYSTEM ---
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const empNameInput = document.getElementById("empName");
const employeeList = document.getElementById("employeeList");

addEmployeeBtn.addEventListener("click", () => {
  const name = empNameInput.value.trim();
  if (!name) return alert("Please enter an employee name.");

  if (employees.some(emp => emp.name.toLowerCase() === name.toLowerCase())) {
    return alert("Employee already exists!");
  }

  employees.push({ name });
  renderEmployees();
  empNameInput.value = "";
});

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach(emp => {
    const li = document.createElement("li");
    li.textContent = emp.name;
    employeeList.appendChild(li);
  });
}

// --- PAYROLL SYSTEM ---
const payrollBtn = document.getElementById("payrollBtn");
const salarySpan = document.getElementById("salary");

payrollBtn.addEventListener("click", () => {
  if (employees.length === 0) return alert("Add employees first!");
  const salary = baseSalary + attendanceDays * 500;
  salarySpan.textContent = salary;
});

// --- ATTENDANCE SYSTEM ---
const attendanceBtn = document.getElementById("attendanceBtn");
const daysPresentSpan = document.getElementById("daysPresent");

attendanceBtn.addEventListener("click", () => {
  attendanceDays++;
  daysPresentSpan.textContent = attendanceDays;
});

// --- PERFORMANCE SYSTEM ---
const performanceBtn = document.getElementById("performanceBtn");
const ratingSelect = document.getElementById("rating");
const performanceResult = document.getElementById("performanceResult");

performanceBtn.addEventListener("click", () => {
  const rating = ratingSelect.value;
  const text = rating === "1" ? "Needs Improvement" : rating === "2" ? "Satisfactory" : "Excellent";
  performanceResult.textContent = text;
});
