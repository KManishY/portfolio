function SendMSG(e) {
  e.preventDefault()
  
  // Get form elements
  let nam_txt = document.querySelector("#name")
  let email_txt = document.querySelector("#email")
  let subject_txt = document.querySelector("#subject")
  let message_txt = document.querySelector("#message")
  let send_btn = document.querySelector("#send_msg")
  let loader = document.getElementById("email-loader");
  
  // Form validation
  if (!nam_txt.value.trim() || !email_txt.value.trim() || !subject_txt.value.trim() || !message_txt.value.trim()) {
    failure("Please fill in all fields")
    return
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email_txt.value)) {
    failure("Please enter a valid email address")
    return
  }
  
  // Show loading state
  send_btn.innerHTML = "Sending..."
  send_btn.disabled = true
  if (loader) loader.style.display = "flex";
  
  // Prepare email data
  let body = `Name: ${nam_txt.value}\nEmail: ${email_txt.value}\nSubject: ${subject_txt.value}\nMessage: ${message_txt.value}`

  let temp = {
    from_name: nam_txt.value,
    to_name: "Manish Kumar",
    message: body,
    reply_to: email_txt.value
  }

  // Check if EmailJS is initialized
  if (typeof emailjs === 'undefined') {
    failure("Email service not available. Please try again later.")
    resetForm()
    if (loader) loader.style.display = "none";
    return
  }

  // Send email
  emailjs.send('service_f3etz3t', 'template_v4x8ndu', temp)
    .then((res) => {
      if (res.status === 200) {
        success()
        resetForm()
      } else {
        failure("Failed to send message. Please try again.")
      }
    })
    .catch((error) => {
      console.error("EmailJS Error:", error)
      failure("Failed to send message. Please try again later.")
    })
    .finally(() => {
      // Reset button state
      send_btn.innerHTML = "S"
      send_btn.disabled = false
      if (loader) loader.style.display = "none";
    })
}

function resetForm() {
  let nam_txt = document.querySelector("#name")
  let email_txt = document.querySelector("#email")
  let subject_txt = document.querySelector("#subject")
  let message_txt = document.querySelector("#message")
  
  nam_txt.value = ""
  email_txt.value = ""
  subject_txt.value = ""
  message_txt.value = ""
}

function success() {
  let thank = document.querySelector(".msg-pop-up")
  let loader = document.getElementById("email-loader");
  if (loader) loader.style.display = "none";
  thank.style.display = "block"
  setTimeout(() => {
    thank.style.display = "none"
  }, 3000)
}

function failure(message = "Please Fill Proper Information") {
  let fail = document.querySelector(".failed-msgpop")
  let loader = document.getElementById("email-loader");
  if (loader) loader.style.display = "none";
  fail.textContent = message
  fail.style.display = "block"
  setTimeout(() => {
    fail.style.display = "none"
  }, 3000)
}

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Check if EmailJS is available
  if (typeof emailjs !== 'undefined') {
    console.log("EmailJS is ready")
  } else {
    console.error("EmailJS not loaded")
  }
})

// Remove exposed API keys from comments
// service id = service_f3etz3t