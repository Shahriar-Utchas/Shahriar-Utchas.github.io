// Sidebar for responsive mobile view
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const crossBtn = document.querySelector(".cross-btn");
  const sidebar = document.querySelector(".sidebar");

  const toggleSidebar = () => {
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-250px";
    } else {
      sidebar.style.right = "0px";
    }
  };

  menuBtn.addEventListener("click", toggleSidebar);
  crossBtn.addEventListener("click", toggleSidebar);
});

// Top button functionality
const topButton = document.querySelector(".top");

// Show or hide the button based on scroll position
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Skill, education toggle
const educationOption = document.getElementById("education");
const skillOption = document.getElementById("skill");
const educationContent = document.querySelector(".edu-content");
const skillContent = document.querySelector(".skill-content");
const skillContent2 = document.querySelector(".skill");
const eduContent2 = document.querySelector(".edu");

educationOption.addEventListener("click", () => {
  educationContent.style.display = "flex";
  eduContent2.classList.add("underline");
  skillContent.style.display = "none";
  skillContent2.classList.remove("underline");
});

skillOption.addEventListener("click", () => {
  educationContent.style.display = "none";
  eduContent2.classList.remove("underline");
  skillContent.style.display = "flex";
  skillContent2.classList.add("underline");
});

///E-mail submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(form);

    // Use fetch to send the form data to Formspree
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json", // Optional: Allow Formspree to send back a response
      },
    })
      .then((response) => {
        if (response.ok) {
          // Show success message after form submission
          form.reset(); // Optionally reset the form
          successMessage.style.display = "block"; // Show the success message
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(
          "There was an issue submitting the form. Please try again later."
        );
      });
  });
});
