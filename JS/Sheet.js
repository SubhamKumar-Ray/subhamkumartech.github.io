<!--const scriptURL = 'https://script.google.com/macros/s/AKfycbxFXvVTa6piVRhI8Ql0GnjFCZZmOoMCrzt6lpWQcepNNQYWw8QE6kXYE5UWBnQCcVWn/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})-->

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxFXvVTa6piVRhI8Ql0GnjFCZZmOoMCrzt6lpWQcepNNQYWw8QE6kXYE5UWBnQCcVWn/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()

  // ✅ पहले data copy करो
  const formData = new FormData(form)

  // ✅ अब form साफ करो
  form.reset()

  // ✅ अब data भेजो
  fetch(scriptURL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
  .then(() => {
    alert("🙏 धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।")
  })
})
