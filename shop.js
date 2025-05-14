document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            const category = button.dataset.category;

            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Sort functionality
    const sortSelect = document.getElementById('sort-by');
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const productsArray = Array.from(productCards);
        const productGrid = document.querySelector('.product-grid');

        productsArray.sort((a, b) => {
            switch(sortValue) {
                case 'price-asc':
                    return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
                case 'price-desc':
                    return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
                case 'newest':
                    return new Date(b.dataset.date) - new Date(a.dataset.date);
                default:
                    return 0;
            }
        });

        // Re-append sorted products
        productsArray.forEach(product => {
            productGrid.appendChild(product);
        });
    });

    // Modal functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const productModal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            productModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Thumbnail click
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.style.backgroundImage = thumb.style.backgroundImage;
        });
    });

    // Size selection
    const sizes = document.querySelectorAll('.size');
    sizes.forEach(size => {
        size.addEventListener('click', () => {
            sizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');
        });
    });

    // Color selection
    const colors = document.querySelectorAll('.color');
    colors.forEach(color => {
        color.addEventListener('click', () => {
            colors.forEach(c => c.classList.remove('active'));
            color.classList.add('active');
        });
    });

    // Quantity controls
    const qtyMinus = document.querySelector('.qty-minus');
    const qtyPlus = document.querySelector('.qty-plus');
    const qtyDisplay = document.querySelector('.qty');
    let quantity = 1;

    qtyMinus.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            qtyDisplay.textContent = quantity;
        }
    });

    qtyPlus.addEventListener('click', () => {
        quantity++;
        qtyDisplay.textContent = quantity;
    });

    // Close modal when clicking outside
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});



// Featured Collection Modal
document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.collection-view');
    const collectionModal = document.getElementById('collectionModal');
    const closeModal = collectionModal.querySelector('.close-modal');

    // Sample product data (would normally come from your backend)
    const featuredProducts = [
        {
            title: "Silk Twill Scarf",
            price: "$350",
            description: "Hand-rolled edges with 100% mulberry silk. Designed in our Barcelona atelier using non-toxic dyes.",
            image: "4.png"
        },
        {
            title: "Cashmere Blazer",
            price: "$1,290",
            description: "Unlined Mongolian cashmere with horn buttons. Tailored for effortless drape. Limited to 50 pieces worldwide.",
            image: "1.png"
        },
        {
            title: "Leather Tote",
            price: "$890",
            description: "Vegetable-tanned Italian leather with contrast stitching. Ages beautifully over time.",
            image: "6.png"
        }
    ];

    // Open modal with product details
    viewButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const product = featuredProducts[index];

            // Update modal content
            collectionModal.querySelector('.modal-image').style.backgroundImage = `url('${product.image}')`;
            collectionModal.querySelector('h2').textContent = product.title;
            collectionModal.querySelector('.price').textContent = product.price;
            collectionModal.querySelector('.description').textContent = product.description;

            // Show modal
            collectionModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        collectionModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside
    collectionModal.addEventListener('click', (e) => {
        if (e.target === collectionModal) {
            collectionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});