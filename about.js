// FAQ Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('active');

        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });

        // Toggle current answer
        if (!isOpen) {
            answer.classList.add('active');
            button.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        } else {
            button.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
});