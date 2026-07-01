const WhatsAppButton = () => {
  const phoneNumber = "923131664680"
  const message = "Hi I visited https://yourwebsite.com and want details which kind of products you have."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
     <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-30 flex items-center justify-center
                 bg-black text-white text-sm sm:text-base font-medium
                 px-4 sm:px-5 py-2.5 rounded-full shadow-lg
                 hover:bg-green-500 transition-colors duration-300"
    >
      WHATSAPP
    </a>
  )
}

export default WhatsAppButton