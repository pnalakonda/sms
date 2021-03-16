"use strict";
const enquiryForm = document.querySelector("#enquiryForm");
const parentFamilyName = document.querySelector("#parentFamilyName");
const parentGivenName = document.querySelector("#parentGivenName");
const kidsFullName = document.querySelector("#kidsFullName");
const mobileNumber = document.querySelector("#mobileNumber");
const emailID = document.querySelector("#emailID");
const childDOB = document.querySelector("#childDOB");
const service = document.querySelector("#service");
const submitBtn = document.querySelector("#submitBtn");

class Enquiry {}

// submitBtn.addEventListener("click", function () {
//   alert("Button Clicked");
// });

let enquiry = {};
let allEnquiries = [];
enquiryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Read all the values
  enquiry.parentFamilyName = parentFamilyName.value;
  enquiry.parentGivenName = parentGivenName.value;
  enquiry.kidsFullName = kidsFullName.value;
  enquiry.mobileNumber = mobileNumber.value;
  enquiry.emailID = emailID.value;
  enquiry.childDOB = childDOB.value;
  enquiry.service = service.value;
  allEnquiries.push(enquiry);
  //empty the form
  parentFamilyName.value = "";
  parentGivenName.value = "";
  kidsFullName.value = " ";
  mobileNumber.value = "";
  emailID.value = "";
  childDOB.value = "";
  service.value = "";
  alert("Form Submitted ");
  console.log(enquiry);
  console.log(allEnquiries);
});
