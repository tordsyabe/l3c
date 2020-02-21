const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const enquiry = document.getElementById("enquiry").value;

  console.log(`
    Name: ${name}
    Contact Number: ${contact}
    Email: ${email}
    Suject: ${subject}
    Enquiry: ${enquiry}
  `);
});
