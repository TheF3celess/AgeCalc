document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculate")
  const birthdateInput = document.getElementById("birthdate")
  const resultDiv = document.getElementById("result")
  const yearsSpan = document.getElementById("years")
  const monthsSpan = document.getElementById("months")
  const daysSpan = document.getElementById("days")

  calculateBtn.addEventListener("click", () => {
    const birthdate = new Date(birthdateInput.value)
    const today = new Date()

    if (isNaN(birthdate.getTime())) {
      alert("Please enter a valid birthdate")
      return
    }

    let years = today.getFullYear() - birthdate.getFullYear()
    let months = today.getMonth() - birthdate.getMonth()
    let days = today.getDate() - birthdate.getDate()

    if (months < 0 || (months === 0 && days < 0)) {
      years--
      months += 12
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate())
      days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24))
      months--
    }

    yearsSpan.textContent = `${years} year${years !== 1 ? "s" : ""}`
    monthsSpan.textContent = `${months} month${months !== 1 ? "s" : ""}`
    daysSpan.textContent = `${days} day${days !== 1 ? "s" : ""}`

    resultDiv.classList.remove("hidden")

    // Add animation to the result
    resultDiv.style.animation = "fadeIn 0.5s ease-out"
  })

  // Add this to your existing CSS file
  const style = document.createElement("style")
  style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `
  document.head.appendChild(style)
})

