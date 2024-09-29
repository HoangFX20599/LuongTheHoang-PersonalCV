"use strict";

// Target 1: The First input email

const informationForm = document.querySelector(".information__form");
const informationBody = document.querySelector(".information__body");
const formText = document.querySelector(".form-text");
const warningMsg = document.querySelector(".warning-msg");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// read event click button Submit and save inputed
document
  .querySelector(".info-submit")
  .addEventListener("click", function (event) {
    const emailCheck = document.querySelector(".email-check").value;
    // console.log(emailCheck);
    // console.log(regex.test(emailCheck));

    if (emailCheck === "") {
      formText.classList.add("hidden");
      warningMsg.classList.remove("hidden");
      event.preventDefault();
    }

    // check inputed and regex
    if (regex.test(emailCheck)) {
      informationForm.classList.add("hidden");
      informationBody.classList.remove("hidden");

      //   ngăn hành động mặc định của nút submit gửi data về máy chủ ở đây là tải lại trang khi dữ liều check oke
      event.preventDefault();
    }
  });

//   Target 2: Show and hide for the section main information

//Ý tưởng
// 1. chọn hết các nút view more và view less... khỏi tạo các object lưu trữ biến cho các class, button
// 2. XỬ lý trên từng main-item (có 6 thẻ)--dùng vòng lặp for
//    2.1 tạo sự kiện addEvent cho click nút view more
//    - hiện body, thêm class "d-flex" - ẩn view more, hiện view less
//    2.2 tạo sự kiện addEvent cho click nút view less
//    -ẩn body, xóa class "d-flex" - hiện view more, - ẩn view less
// 3. Xử lý các bug, nếu ko khả thi thì nghĩ cách khác (thử cho trường hợp 1 thẻ trc nếu oke thì triển mảng 6)
// 4. Note lại nh bug gặp phải và cách fix

//Khỏi tạo biến
const btnsViewMore = document.querySelectorAll(".view-more");
const btnsViewLess = document.querySelectorAll(".view-less");
const mainsCard = document.querySelectorAll(".main-card");
const mainsCardBody = document.querySelectorAll(".main-card__body");
const mainsInfoItem = document.querySelectorAll(".main-info-item");

//Tạo biến trạng thái
let bodyShow = [true, true, true, true, true, true];
let bodyHide = [false, false, false, false, false, false];

// Xử lý từng phần tử main-item

for (let i = 0; i < mainsCard.length; i++) {
  console.log("mainsCard");

  //Hiện btn view more khi hover
  mainsCard[i].addEventListener("mouseenter", function () {
    if (!bodyHide[i]) {
      btnsViewMore[i].classList.remove("hidden");
    }
  });

  //Ẩn btn view more khi ra khỏi mainCard
  mainsCard[i].addEventListener("mouseleave", function () {
    btnsViewMore[i].classList.add("hidden");
  });

  //click view more thì show main-bdy
  btnsViewMore[i].addEventListener("click", function () {
    mainsCardBody[i].classList.remove("hidden");
    bodyHide[i] = true;
    mainsInfoItem[i].classList.add("d-flex");
    btnsViewMore[i].classList.add("hidden");
    btnsViewLess[i].classList.remove("hidden");
  });

  //click view less thì ẩn main-body
  btnsViewLess[i].addEventListener("click", function () {
    mainsCardBody[i].classList.add("hidden");
    bodyHide[i] = false;
    mainsInfoItem[i].classList.remove("d-flex");
    btnsViewMore[i].classList.remove("hidden");
    btnsViewLess[i].classList.add("hidden");
  });
}

//  bug và fix
// 1. bug: dùng css để hover => fix: js có sự kiện mouseenter và mouseleave
// 2. bug: tạo biến trạng trái let show = true; để  khi mouseenter sẽ chuyển sang false nhằm ẩn view more đi nhưng mà khi di chột ra ngoài quay lại view more vẫn hiện => fix: phải khỏi tạo biến trạng thái dạng mảng cho từng main-item, có thể dùng sự kiện main-body đc hiện để kiểm soát sự kiện mouseenter, và đặt lại giá trị cho nó trong sự kiện click view more or view less
// 3. bug: dùng vòng lặp for để load các giá trị của object fix: ngáo quá đi
// 4.

//   Target 3: Show project by js

/* 
// @@@@@@ ORIGINAL CODE
const projectItem = document.querySelectorAll(".project-item");

for (let i = 0; i < projectItem.length; i++) {
  console.log("project");
  projectItem[i].addEventListener("click", function (event) {
    const selectedProject = `${i}`;
    localStorage.setItem("selectedProject", selectedProject);
    window.location.href = "./project-charter.html";
    console.log(selectedProject);
    event.preventDefault();
  });
}
 */

// @@@@@@  REFACTORED CODE
const projectItem = document.querySelectorAll(".project-item");

for (let i = 0; i < projectItem.length; i++) {
  projectItem[i].addEventListener("click", function (event) {
    localStorage.setItem("selectedProject", i);
    window.location.href = "./project-charter.html";
    event.preventDefault();
  });
}

// The end
