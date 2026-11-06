
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recruitment-enquiry-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      alert(
        "Thank you for contacting Ventus International. An Edinburgh director will follow up shortly."
      );
    });
  }
});
