
document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality (previous code remains)

    // Product Modal functionality
    const modal = document.getElementById('productModal');
    const viewButtons = document.querySelectorAll('.view-btn');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalPrice = document.querySelector('.modal-price');
    const modalDesc = document.querySelector('.modal-desc');

    // Sample product data (would normally come from your backend)
    const products = [
        {
            title: "Classic Wool Coat",
            price: "$249.00",
            desc: "Handcrafted from premium Italian wool, this timeless coat features a tailored fit and horn buttons. Perfect for transitional weather with its medium weight construction.",
            image: "3.png"
        },
        {
            title: "Silk Evening Dress",
            price: "$189.00",
            desc: "Flowing 100% mulberry silk dress with delicate pintucking details. The bias cut creates elegant drape while the hidden back zipper ensures clean lines.",
            image: "4.png"
        },
        {
            title: "Linen Shirt",
            price: "$79.00",
            desc: "Breathable European linen shirt with mother-of-pearl buttons. Pre-washed for softness and minimal shrinkage. The relaxed fit works equally well tucked or untucked.",
            image: "5.png"
        },
        {
            title: "Denim Jacket",
            price: "$129.00",
            desc: "12oz organic cotton denim jacket with selvedge detailing. Vegetable-tanned leather patches and copper rivets ensure durability. Made in Japan.",
            image: "6.png"
        }
    ];

    // Open modal with product details
    viewButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = products[index];
            modalImage.style.backgroundImage = `url('${product.image}')`;
            modalTitle.textContent = product.title;
            modalPrice.textContent = product.price;
            modalDesc.textContent = product.desc;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Size selection
    const sizeSpans = document.querySelectorAll('.size-selector span');
    sizeSpans.forEach(span => {
        span.addEventListener('click', function() {
            sizeSpans.forEach(s => s.style.borderColor = "#ddd");
            this.style.borderColor = "black";
        });
    });
});