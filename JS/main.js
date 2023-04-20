"use strict";

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let certificate = $("#certificate");
let project = $("#project");
let certificateLink = $(".certificate");
let projectLink = $(".project");
let resume = $(".resume");
let information = $(".information");
let job_info = $("#job-info");
let about = $("#about");

let app = {
  start: function () {
    this.handler();
  },
  // xử lí các sự kiện khi ấn
  handler: function () {
    let _this = this;
    // ấn vào thông tin
    information.addEventListener("click", function (e) {
      e.preventDefault();
      let coordinates = job_info.getBoundingClientRect();
      _this.scrollPage(
        coordinates.left + window.pageXOffset,
        coordinates.top + window.pageYOffset
      );
      return true;
    });

    // ấn vào lý lịch
    resume.addEventListener("click", function (e) {
      e.preventDefault();
      let coordinates = about.getBoundingClientRect();
      _this.scrollPage(
        coordinates.left + window.pageXOffset,
        coordinates.top + window.pageYOffset
      );
      return true;
    });

    // ấn vào xem chứng chỉ
    certificateLink.addEventListener("click", function (e) {
      e.preventDefault();
      let coordinates = certificate.getBoundingClientRect();
      _this.scrollPage(
        coordinates.left + window.pageXOffset,
        coordinates.top + window.pageYOffset
      );
      return true;
    });

    // ấn vào xem dự án
    projectLink.addEventListener("click", function (e) {
      e.preventDefault();
      let coordinates = project.getBoundingClientRect();
      _this.scrollPage(
        coordinates.left + window.pageXOffset,
        coordinates.top + window.pageYOffset
      );
      return true;
    });
  },
  //   hàm cuộn trang tới nơi chỉ định
  scrollPage: function (leftCoord, topCoord) {
    window.scrollTo({
      left: leftCoord,
      top: topCoord,
      behavior: "smooth",
    });
  },
};

app.start();
