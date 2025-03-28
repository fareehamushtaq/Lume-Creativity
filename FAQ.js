document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach(button => {
        button.addEventListener("click", function () {
            const faq = this.parentElement;

            // Toggle open class
            faq.classList.toggle("open");

            // Close other open FAQs
            document.querySelectorAll(".faq").forEach(item => {
                if (item !== faq) {
                    item.classList.remove("open");
                }
            });
        });
    });
});
