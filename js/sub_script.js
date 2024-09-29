"use strict";
/* 
// @@@@@@ ORIGINAL CODE

const projectCharter = document.querySelectorAll(".project-charter");

// Lấy thông tin dự án từ localStorage
const selectedProject = Number(localStorage.getItem("selectedProject"));

console.log(selectedProject);

if (selectedProject === 0) {
  projectCharter[0].classList.remove("hidden");
  projectCharter[1].classList.add("hidden");
  projectCharter[2].classList.add("hidden");
} else if (selectedProject === 1) {
  projectCharter[1].classList.remove("hidden");
  projectCharter[0].classList.add("hidden");
  projectCharter[2].classList.add("hidden");
} else if (selectedProject === 2) {
  projectCharter[2].classList.remove("hidden");
  projectCharter[1].classList.add("hidden");
  projectCharter[0].classList.add("hidden");
} */

// @@@@@@  REFACTORED CODE

const projectCharter = document.querySelectorAll(".project-charter");

// Lấy thông tin dự án từ localStorage
const selectedProject = Number(localStorage.getItem("selectedProject"));

// console.log(selectedProject);

// Ẩn tất cả project charter trước
projectCharter.forEach((charter) => {
  charter.classList.add("hidden");
});

// Hiển thị project charter tương ứng
if (
  !isNaN(selectedProject) &&
  selectedProject >= 0 &&
  selectedProject < projectCharter.length
) {
  projectCharter[selectedProject].classList.remove("hidden");
}

// The end
