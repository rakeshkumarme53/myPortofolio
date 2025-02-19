export const sendContactForm = async (data) => {
  // In a real application, you would send this data to your backend
  // For this example, we'll just simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 90% success rate
        console.log("Contact form submission:", data)
        resolve({ success: true })
      } else {
        reject(new Error("Failed to send message"))
      }
    }, 1000)
  })
}

