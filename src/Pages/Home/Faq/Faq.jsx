import { useState } from "react";

const Faq = () => {
  // JSON data for FAQ
  const faqData = [
    {
      question: "How do I update my software?",
      answer:
        "To update your software, check for the latest updates in the settings menu or application interface. Typically, you can find a 'Check for updates' option in the settings or help section.",
    },
    {
      question: "How can I improve my Wi-Fi signal?",
      answer:
        "To enhance your Wi-Fi signal, try repositioning your router to a central location, minimizing obstructions, and reducing interference from other electronic devices. Additionally, consider upgrading to a higher-quality router or using Wi-Fi signal extenders for larger spaces.",
    },
    {
      question: "What are the system requirements for this software?",
      answer:
        "You can find the system requirements for our software on the product page or in the documentation provided with the software. Ensure that your device meets the minimum specifications outlined to ensure optimal performance.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Check your order status and tracking information through your account dashboard or contact our support team for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other secure payment methods. Learn more about our payment options in the checkout process.",
    },
    {
      question: "How can I protect my device from malware?",
      answer:
        "To safeguard your device from malware, consider installing reputable antivirus software, regularly updating your operating system and applications, avoiding suspicious links or downloads, and using secure networks when browsing.",
    },
    {
      question: "What should I do if my device is overheating?",
      answer:
        "If your device is overheating, try closing any resource-intensive applications, ensuring proper ventilation around the device, and keeping it out of direct sunlight. If the issue persists, consider contacting the device manufacturer for further assistance.",
    },
    {
      question: "How do I improve my device's battery life?",
      answer:
        "To extend your device's battery life, try reducing screen brightness, turning off unnecessary features like Bluetooth or Wi-Fi when not in use, and closing background applications. You can also consider using power-saving modes provided by your device.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "You can reset your password by visiting the login page and clicking on the 'Forgot password' link. Follow the prompts to receive a password reset link via email.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, navigate to the account settings section of our website or app. There, you'll find the option to manage or cancel your subscription.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Refunds are subject to our refund policy. If you believe you are eligible for a refund, please contact our support team with your order details for assistance.",
    },
    {
      question: "How do I enable two-factor authentication?",
      answer:
        "To enable two-factor authentication (2FA), go to your account settings and select 'Security'. Follow the instructions to set up 2FA using an authenticator app or SMS.",
    },
    {
      question: "What should I do if I encounter an error message?",
      answer:
        "If you encounter an error message, try restarting the application or device. If the problem persists, contact our support team with a screenshot and description of the error.",
    },
    {
      question: "How do I install the software on multiple devices?",
      answer:
        "To install the software on multiple devices, download the application on each device and log in using the same account credentials. Depending on your license, there may be limits on the number of installations.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email, phone, or live chat. Visit the 'Contact Us' section on our website for more details.",
    },
    {
      question: "Why is my software running slow?",
      answer:
        "Slow software performance may be due to insufficient system resources. Ensure that your device meets the minimum system requirements, and try closing other programs running in the background.",
    },
    {
      question: "How do I check my software version?",
      answer:
        "You can check your software version by going to the 'About' section in the software menu. It typically displays the current version and any available updates.",
    },
    {
      question: "How do I enable dark mode?",
      answer:
        "To enable dark mode, go to the display or appearance settings of the software or your device and select 'Dark Mode'. This setting may vary depending on the platform you are using.",
    },
    {
      question: "What should I do if I forget my login credentials?",
      answer:
        "If you forget your login credentials, use the 'Forgot username' or 'Forgot password' link on the login page. Follow the instructions to recover your account information.",
    },
    {
      question: "How do I update my billing information?",
      answer:
        "To update your billing information, log into your account, go to 'Billing' or 'Payment Information', and edit your payment details. Make sure to save the changes.",
    },
  ];

  const [visibleFaqs, setVisibleFaqs] = useState(5);
  const showMoreFaqs = () => setVisibleFaqs(faqData.length);

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-24 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="text-3xl font-bold">Customer Support</p>
          <p className="text-lg mt-2">
            Have a question? {"We're"} here to help. Check out our {"FAQ's"}{" "}
            below.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-[900px] mx-auto">
          {faqData.slice(0, visibleFaqs).map((faq, index) => (
            <div key={index} className="collapse collapse-arrow bg-white mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

          {/* Button to view more */}
          {visibleFaqs < faqData.length && (
            <div className="text-right mt-6">
              <button
                onClick={showMoreFaqs}
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-400 transition"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
