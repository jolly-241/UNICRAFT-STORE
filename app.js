/* ==========================================
   UNICRAFT RESIN STUDIO (UC) - CLIENT ENGINE
   ========================================== */

// Product Dataset
const products = [
    {
        id: "resin-alphabet-keychain",
        name: "Resin Alphabet Keychains",
        price: 99,
        category: "keychains",
        image: "assets/resin_alphabet_keychain.jpg",
        requiresText: true,
        textLabel: "Letter to display (A-Z):",
        placeholder: "e.g. 'A', 'M', 'S'",
        desc: "Beautiful luxury resin alphabet keychain with gold foil, transparent teal background, dried blue flowers, and an elegant golden ring."
    },
    {
        id: "resin-number-keychain",
        name: "Resin Number Keychains",
        price: 89,
        category: "keychains",
        image: "assets/Resin_Number_Keychain.png.jpeg",
        requiresText: true,
        textLabel: "Number to display (0-99):",
        placeholder: "e.g. '8', '21', '7'",
        desc: "A beautiful luxury resin number keychain. Custom number with silver sparkles, clear glitter base, and dried pink petals."
    },
    {
        id: "resin-bottle-keychain",
        name: "Bottle Keychains",
        price: 49,
        category: "keychains",
        image: "assets/resin_bottle_keychain.jpg",
        requiresText: false,
        desc: "Miniature glass bottle keychain filled with colorful resin art representing a realistic beach ocean wave, complete with a tiny cork top."
    },
    {
        id: "resin-name-plate",
        name: "Custom Resin Name Plate",
        price: 699,
        category: "nameplates",
        image: "assets/resin_name_plate.jpg",
        requiresText: true,
        textLabel: "Family Name / House Name to display:",
        placeholder: "e.g. 'THE SHARMAS', 'SWEET HOME'",
        desc: "Stunning customized resin name plate for home door. Features a rich wooden bottom half, beautiful ocean wave epoxy resin top half with white wave foam texture, and luxury gold lettering."
    },
    {
        id: "illuminated-name-plate",
        name: "Illuminated Lights Name Plate",
        price: 499,
        category: "nameplates",
        image: "assets/illuminated_name_plate.jpg",
        requiresText: true,
        textLabel: "Name / Text to display:",
        placeholder: "e.g. 'Ravit & Neha', 'Aura'",
        desc: "An illuminated warm LED light wooden stand holding a rectangular custom resin plate embedded with dried flowers and custom lettering. Glows beautifully in the dark."
    },
    {
        id: "resin-bangles",
        name: "Handmade Resin Bangles",
        price: 299,
        category: "jewelry",
        image: "assets/Handmade_Resin_Bangles.png.jpeg",
        requiresText: false,
        desc: "A elegant stack of handmade thick clear resin bangles containing real embedded gold flakes and dried pink rose flowers. Premium luxury craft jewelry."
    },
    {
        id: "resin-pendant-chain",
        name: "Resin Pendant Chains & Jewellery",
        price: 199,
        category: "jewelry",
        image: "assets/resin_pendant_chain.jpg",
        requiresText: false,
        desc: "Elegant pendant necklace with an oval metal bezel framing turquoise blue ocean wave resin art, hung on a delicate, premium gold-plated chain."
    },
    {
        id: "resin-phone-case",
        name: "Custom Resin Phone Case",
        price: 299,
        category: "jewelry",
        image: "assets/Handmade_Resin_Phone _Case.png.jpeg",
        requiresText: true,
        textLabel: "Phone Model & Name/Initials:",
        placeholder: "e.g. 'iPhone 15 Pro, Initials: S.R.'",
        desc: "Stunning custom resin phone case decorated with luxury white pearls, a central pearlescent bow, and a glossy, scratch-resistant protective finish. Please specify your exact phone model.",
        isNew: true
    },
    {
        id: "resin-gift-bundle",
        name: "Custom Handmade Gifts Bundle",
        price: 149,
        category: "bundles",
        image: "assets/resin_gift_bundle.png.jpg",
        requiresText: false,
        desc: "A beautiful, aesthetically curated gift box containing a mini custom resin name plate, two custom alphabet keychains, and a small sea wave coaster. Wrapped in a premium ribboned package."
    }
];

// App State
let cart = JSON.parse(localStorage.getItem("uc_cart")) || [];
let likedItems = new Set(JSON.parse(localStorage.getItem("uc_likes")) || []);
let lastOrderMessage = "";

// DOM Elements
const productGrid = document.getElementById("product-grid");
const filterTabs = document.querySelectorAll(".filter-tab");
const cartToggle = document.getElementById("cart-toggle");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
const cartDrawer = document.getElementById("cart-drawer");
const cartItemsList = document.getElementById("cart-items-list");
const emptyCartMsg = document.getElementById("empty-cart-msg");
const cartFooter = document.getElementById("cart-footer");
const cartCount = document.getElementById("cart-count");
const cartDrawerCount = document.getElementById("cart-drawer-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutBtn = document.getElementById("checkout-btn");

// Modal Elements
const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalProductImg = document.getElementById("modal-product-img");
const modalProductCategory = document.getElementById("modal-product-category");
const modalProductTitle = document.getElementById("modal-product-title");
const modalProductPrice = document.getElementById("modal-product-price");
const modalProductDesc = document.getElementById("modal-product-description");
const modalProductId = document.getElementById("modal-product-id");
const customTextGroup = document.getElementById("custom-text-group");
const customTextLabel = document.getElementById("custom-text-label");
const customTextInput = document.getElementById("custom-text");
const customizationNotes = document.getElementById("customization-notes");
const customizationForm = document.getElementById("customization-form");
const modalDirectCheckoutBtn = document.getElementById("modal-direct-checkout-btn");

// Wishlist Drawer DOM Elements
const wishlistDrawerBackdrop = document.getElementById("wishlist-drawer-backdrop");
const wishlistDrawer = document.getElementById("wishlist-drawer");
const wishlistItemsList = document.getElementById("wishlist-items-list");
const emptyWishlistMsg = document.getElementById("empty-wishlist-msg");
const wishlistCloseBtn = document.getElementById("wishlist-close-btn");
const wishlistDrawerCount = document.getElementById("wishlist-drawer-count");
const headerLogoInitials = document.getElementById("header-logo-initials");
const footerLogoInitials = document.getElementById("footer-logo-initials");
const headerLogoLink = document.getElementById("header-logo-link");
const footerLogoLink = document.getElementById("footer-logo-link");

// Search elements
const searchToggle = document.getElementById("search-toggle");
const searchBackdrop = document.getElementById("search-backdrop");
const searchCloseBtn = document.getElementById("search-close-btn");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Checkout Guide Modal Elements
const checkoutGuideModal = document.getElementById("checkout-guide-modal");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const btnCopyAgain = document.getElementById("btn-copy-again");
const btnOpenIg = document.getElementById("btn-open-ig");

// Mobile menu elements
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavClose = document.getElementById("mobile-nav-close");

// Toast elements
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");

// --- INITIALIZATION & RENDER ---
document.addEventListener("DOMContentLoaded", () => {
    renderProducts("all");
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
});

// Setup Events
function setupEventListeners() {
    // Category Filtering
    filterTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const filterValue = tab.getAttribute("data-filter");
            renderProducts(filterValue);
        });
    });

    // Cart Drawer Toggle
    cartToggle.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartDrawerBackdrop.addEventListener("click", (e) => {
        if (e.target === cartDrawerBackdrop) closeCart();
    });

    // Wishlist Drawer Toggle
    if (headerLogoInitials) {
        headerLogoInitials.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openWishlist();
        });
    }
    if (footerLogoInitials) {
        footerLogoInitials.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openWishlist();
        });
    }
    if (headerLogoLink) {
        headerLogoLink.addEventListener("click", (e) => {
            closeCart();
            closeWishlist();
        });
    }
    if (footerLogoLink) {
        footerLogoLink.addEventListener("click", (e) => {
            closeCart();
            closeWishlist();
        });
    }
    if (wishlistCloseBtn) {
        wishlistCloseBtn.addEventListener("click", closeWishlist);
    }
    if (wishlistDrawerBackdrop) {
        wishlistDrawerBackdrop.addEventListener("click", (e) => {
            if (e.target === wishlistDrawerBackdrop) closeWishlist();
        });
    }
    
    // Customization Modal Close
    modalCloseBtn.addEventListener("click", closeCustomizationModal);
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeCustomizationModal();
    });

    // Customization Form Submit
    customizationForm.addEventListener("submit", handleCustomizationSubmit);

    // Search Toggle
    searchToggle.addEventListener("click", openSearch);
    searchCloseBtn.addEventListener("click", closeSearch);
    searchBackdrop.addEventListener("click", (e) => {
        if (e.target === searchBackdrop) closeSearch();
    });
    searchInput.addEventListener("input", handleSearchInput);

    // Instagram Checkout Redirect Trigger
    checkoutBtn.addEventListener("click", handleInstagramCheckout);

    // Inclusions Change Listener for validation
    customizationForm.addEventListener("change", (e) => {
        if (e.target.name === "inclusions") {
            const checkedInclusions = document.querySelectorAll('input[name="inclusions"]:checked');
            if (checkedInclusions.length > 2) {
                e.target.checked = false; // Prevent checking more than 2
                showToast("Please select at most 2 inclusions.");
            }
        }
    });

    // Direct Order via IG from Modal
    modalDirectCheckoutBtn.addEventListener("click", handleModalDirectCheckout);

    // Success Guide Modal Controls
    checkoutModalClose.addEventListener("click", closeCheckoutGuide);
    checkoutGuideModal.addEventListener("click", (e) => {
        if (e.target === checkoutGuideModal) closeCheckoutGuide();
    });
    btnCopyAgain.addEventListener("click", () => {
        const messageToCopy = lastOrderMessage || generateOrderMessage();
        copyTextWithFeedback(messageToCopy, btnCopyAgain);
    });


    // Mobile Navbar Controls
    mobileMenuToggle.addEventListener("click", () => mobileNav.classList.add("active"));
    mobileNavClose.addEventListener("click", () => mobileNav.classList.remove("active"));
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => mobileNav.classList.remove("active"));
    });

    // Star Rating Widget Interaction
    const starButtons = document.querySelectorAll(".star-btn");
    const rateThankYou = document.getElementById("rate-thank-you");

    starButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const ratingValue = parseInt(btn.getAttribute("data-value"));
            
            // Highlight active stars
            starButtons.forEach(s => {
                const sValue = parseInt(s.getAttribute("data-value"));
                const icon = s.querySelector("i");
                if (sValue <= ratingValue) {
                    s.classList.add("active");
                    icon.className = "fa-solid fa-star";
                } else {
                    s.classList.remove("active");
                    icon.className = "fa-regular fa-star";
                }
            });

            // Update text dynamic animations and responses
            rateThankYou.classList.add("success-effect");
            if (ratingValue === 5) {
                rateThankYou.innerHTML = `Awesome! 5 Stars! Thank you, visit again! <i class="fa-solid fa-heart" style="color:#e63946; animation: heartPulseAnim 0.5s infinite alternate;"></i>`;
            } else if (ratingValue === 4) {
                rateThankYou.textContent = "Thank you! We're glad you loved our crafts! Visit again!";
            } else {
                rateThankYou.textContent = "Thank you for your feedback! We will keep improving. Visit again!";
            }
            showToast("Thank you for your rating!");
        });
    });

    // Header Scroll Effect
    const mainHeader = document.querySelector(".main-header");
    if (mainHeader) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                mainHeader.classList.add("scrolled");
            } else {
                mainHeader.classList.remove("scrolled");
            }
        });
    }

    // Intro Video Overlay Controls
    const introOverlay = document.getElementById("intro-overlay");
    const introVideo = document.getElementById("intro-video");
    const heroWatchIntroBtn = document.getElementById("hero-watch-intro-btn");

    if (introOverlay && introVideo) {
        // Close/Enter Studio function
        const enterStudio = () => {
            introOverlay.classList.add("fade-out");
            introVideo.pause();
            introVideo.currentTime = 0;
        };

        // Close on click anywhere
        introOverlay.addEventListener("click", enterStudio);

        // Also close automatically when video ends
        introVideo.addEventListener("ended", enterStudio);

        // Ensure paused on load
        introVideo.pause();
    }

    // Hero Video Background Controls (Ensure it stops and pauses at the end)
    const heroVideo = document.querySelector(".hero-video-bg");
    if (heroVideo) {
        heroVideo.addEventListener("ended", () => {
            heroVideo.pause();
        });
    }

    if (heroWatchIntroBtn && introOverlay && introVideo) {
        heroWatchIntroBtn.addEventListener("click", () => {
            introOverlay.classList.remove("fade-out");
            introVideo.currentTime = 0;
            introVideo.muted = false; // Unmute on explicit user request
            introVideo.play().catch(err => {
                console.log("Play failed:", err);
            });
        });
    }

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll(".catalog-section, .gallery-section, .about-section");
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            el.classList.add("reveal-element");
            revealObserver.observe(el);
        });
    }
}

// Render Products Grid
function renderProducts(filter) {
    productGrid.innerHTML = "";
    
    const filteredProducts = filter === "all" 
        ? products 
        : products.filter(p => p.category === filter);
        
    filteredProducts.forEach(product => {
        const isLiked = likedItems.has(product.id);
        const cardHTML = `
            <article class="product-card" data-category="${product.category}">
                ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                <button class="like-btn ${isLiked ? 'liked' : ''}" aria-label="Add to favorites" onclick="toggleLike('${product.id}', event)">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                <div class="product-img-wrapper" onclick="openCustomizationModal('${product.id}')">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title" onclick="openCustomizationModal('${product.id}')" style="cursor:pointer">${product.name}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addDefaultToCart('${product.id}')">Add to Cart</button>
                        <button class="btn-customize-icon" onclick="openCustomizationModal('${product.id}')" title="Customize Order">
                            <i class="fa-solid fa-sliders"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
        productGrid.insertAdjacentHTML("beforeend", cardHTML);
    });
}

// --- PRODUCT LIKING ---
window.toggleLike = function(productId, event) {
    event.stopPropagation(); // Avoid triggering card click
    const button = event.currentTarget;
    const icon = button.querySelector("i");
    
    if (likedItems.has(productId)) {
        likedItems.delete(productId);
        button.classList.remove("liked");
        icon.className = "fa-regular fa-heart";
        showToast("Removed from favorites");
    } else {
        likedItems.add(productId);
        button.classList.add("liked");
        icon.className = "fa-solid fa-heart";
        showToast("Added to favorites!");
        triggerLogoPulse();
    }
    
    localStorage.setItem("uc_likes", JSON.stringify(Array.from(likedItems)));
    updateWishlistUI();
};

// --- CUSTOMIZATION MODAL ENGINE ---
window.openCustomizationModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Reset Form
    customizationForm.reset();
    
    // Set Product Data
    modalProductId.value = product.id;
    modalProductImg.src = product.image;
    modalProductImg.alt = product.name;
    modalProductCategory.textContent = product.category;
    modalProductTitle.textContent = product.name;
    modalProductPrice.textContent = `₹${product.price}`;
    modalProductDesc.textContent = product.desc;

    // Render Conditional Text Input based on requiresText
    if (product.requiresText) {
        customTextGroup.style.display = "flex";
        customTextLabel.textContent = product.textLabel;
        customTextInput.placeholder = product.placeholder;
        customTextInput.required = true;
    } else {
        customTextGroup.style.display = "none";
        customTextInput.required = false;
        customTextInput.value = "";
    }


    productModal.classList.add("active");
};

function closeCustomizationModal() {
    productModal.classList.remove("active");
}

// Handle Form Submission of Customization Details
function handleCustomizationSubmit(e) {
    e.preventDefault();
    
    const productId = modalProductId.value;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const textVal = customTextInput.value.trim();
    
    const colorThemeInput = document.querySelector('input[name="color-theme"]:checked');
    if (!colorThemeInput) {
        showToast("Please select a base color theme.");
        return;
    }
    const colorThemeVal = colorThemeInput.value;
    
    // Get Checked Inclusions
    const checkedInclusions = [];
    document.querySelectorAll('input[name="inclusions"]:checked').forEach(cb => {
        checkedInclusions.push(cb.value);
    });

    if (checkedInclusions.length < 1 || checkedInclusions.length > 2) {
        showToast("Please select 1 or 2 inclusions.");
        return;
    }

    const notesVal = customizationNotes.value.trim();

    // Create Cart Item Object
    const cartItem = {
        uniqueId: `${product.id}-${Date.now()}`, // uniquely identify for multiple custom versions of same item
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        customizations: {
            text: textVal || null,
            colorTheme: colorThemeVal,
            inclusions: checkedInclusions,
            notes: notesVal || "None"
        }
    };

    cart.push(cartItem);
    saveCart();
    updateCartUI();
    closeCustomizationModal();
    openCart();
    showToast("Added customized order to cart!");
}

// Add Default Version directly to cart without custom choices
window.addDefaultToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if the product requires text (e.g. alphabet). If it does, force opening the customization modal
    if (product.requiresText) {
        openCustomizationModal(productId);
        showToast("Custom text required for this item.");
        return;
    }

    // Default inclusions and color
    const cartItem = {
        uniqueId: `${product.id}-default-${Date.now()}`,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        customizations: {
            text: null,
            colorTheme: "Teal & Ocean Blue",
            inclusions: ["Gold Foil Flakes"],
            notes: "Default design request (teal resin & gold flakes)."
        }
    };

    cart.push(cartItem);
    saveCart();
    updateCartUI();
    showToast("Item added to cart!");
};

// --- CART STATE MANAGEMENT ---
function openCart() {
    cartDrawerBackdrop.classList.add("active");
}

function closeCart() {
    cartDrawerBackdrop.classList.remove("active");
}

function saveCart() {
    localStorage.setItem("uc_cart", JSON.stringify(cart));
}

function updateCartUI() {
    // Total count of items
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartDrawerCount.textContent = totalCount;

    // Toggle Empty State vs List State
    if (cart.length === 0) {
        emptyCartMsg.style.display = "flex";
        cartItemsList.style.display = "none";
        cartFooter.style.display = "none";
    } else {
        emptyCartMsg.style.display = "none";
        cartItemsList.style.display = "flex";
        cartFooter.style.display = "block";
        
        // Render Cart items list
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            // Format Customizations tags
            let customTags = `<strong>Theme:</strong> ${item.customizations.colorTheme}`;
            if (item.customizations.text) {
                customTags += ` | <strong>Display text:</strong> "${item.customizations.text}"`;
            }
            if (item.customizations.inclusions.length > 0) {
                customTags += ` | <strong>Inclusions:</strong> ${item.customizations.inclusions.join(", ")}`;
            }
            if (item.customizations.notes && item.customizations.notes !== "None") {
                customTags += ` | <strong>Notes:</strong> ${item.customizations.notes}`;
            }

            const itemHTML = `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <div class="cart-item-custom-details">${customTags}</div>
                        <div class="cart-item-row">
                            <span class="cart-item-price">₹${item.price * item.quantity}</span>
                            <div class="qty-selector">
                                <button class="qty-btn" onclick="updateQty('${item.uniqueId}', -1)"><i class="fa-solid fa-minus"></i></button>
                                <span class="qty-val">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQty('${item.uniqueId}', 1)"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <button class="cart-item-copy" onclick="copyCartItemMessage('${item.uniqueId}', this)" title="Copy Item Message" aria-label="Copy item message">
                                <i class="fa-regular fa-copy"></i>
                            </button>
                            <button class="cart-item-delete" onclick="removeCartItem('${item.uniqueId}')" aria-label="Remove item">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsList.insertAdjacentHTML("beforeend", itemHTML);
        });

        // Calculate Subtotal
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `₹${subtotal}`;

        // Get checkout link
        const formattedMessage = generateOrderMessage();
        const encodedMessage = encodeURIComponent(formattedMessage);
        const instagramUsername = "unicraft_2k26";
        checkoutBtn.href = `https://ig.me/m/${instagramUsername}?text=${encodedMessage}`;

    }
}

window.updateQty = function(uniqueId, change) {
    const item = cart.find(item => item.uniqueId === uniqueId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.uniqueId !== uniqueId);
    }
    saveCart();
    updateCartUI();
};

window.removeCartItem = function(uniqueId) {
    cart = cart.filter(i => i.uniqueId !== uniqueId);
    saveCart();
    updateCartUI();
    showToast("Item removed from cart");
};

// --- INSTAGRAM CHECKOUT REDIRECT FLOW ---
function generateOrderMessage() {
    let message = "Hi! I'd like to order the following items from your website:\n\n";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.quantity}x) - ₹${item.price * item.quantity}\n`;
        const theme = item.customizations?.colorTheme || "Teal & Ocean Blue";
        message += `   - Base Color: ${theme}\n`;
        if (item.customizations?.text) {
            message += `   - Display Text: "${item.customizations.text}"\n`;
        }
        if (item.customizations?.inclusions && item.customizations.inclusions.length > 0) {
            message += `   - Inclusions: ${item.customizations.inclusions.join(", ")}\n`;
        }
        if (item.customizations?.notes && item.customizations.notes !== "None") {
            message += `   - Special Notes: ${item.customizations.notes}\n`;
        }
        message += "\n";
    });

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    message += `Total Order Value: ₹${subtotal}\n\n`;
    message += "Please let me know how I can send the payment!";
    
    return message;
}

function handleInstagramCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) {
        showToast("Cart is empty.");
        return;
    }

    lastOrderMessage = generateOrderMessage();
    const encodedMessage = encodeURIComponent(lastOrderMessage);
    
    // Create Deep Link URL
    const instagramUsername = "unicraft_2k26";
    const instagramLink = `https://ig.me/m/${instagramUsername}?text=${encodedMessage}`;
    
    // Copy order text to Clipboard with fallback helper
    internalCopyToClipboard(lastOrderMessage, 
        () => {
            checkoutBtn.href = instagramLink;
            btnOpenIg.href = instagramLink;

            // Close Cart drawer & Open Success Guide Modal
            closeCart();
            openCheckoutGuide();

            // Automatically open the Instagram link in a new tab
            window.open(instagramLink, "_blank");

            // Clear and refresh the cart state after redirection
            cart = [];
            saveCart();
            updateCartUI();
        },
        (err) => {
            console.error("Clipboard copy failed: ", err);
            checkoutBtn.href = instagramLink;
            btnOpenIg.href = instagramLink;

            // Close Cart drawer & Open Success Guide Modal
            closeCart();
            openCheckoutGuide();

            window.open(instagramLink, "_blank");

            // Clear and refresh the cart state as fallback
            cart = [];
            saveCart();
            updateCartUI();
        }
    );
}

function openCheckoutGuide() {
    // Reset star rating widget to default empty state
    const starButtons = document.querySelectorAll(".star-btn");
    const rateThankYou = document.getElementById("rate-thank-you");
    
    if (starButtons && rateThankYou) {
        starButtons.forEach(s => {
            s.classList.remove("active");
            s.querySelector("i").className = "fa-regular fa-star";
        });
        rateThankYou.classList.remove("success-effect");
        rateThankYou.textContent = "Thank you for supporting UniCraft Resin Studio!";
    }

    
    checkoutGuideModal.classList.add("active");
}

function closeCheckoutGuide() {
    checkoutGuideModal.classList.remove("active");
}

// --- SEARCH ENGINE ---
function openSearch() {
    searchBackdrop.classList.add("active");
    searchInput.value = "";
    searchResults.innerHTML = "";
    setTimeout(() => searchInput.focus(), 150);
}

function closeSearch() {
    searchBackdrop.classList.remove("active");
}

function handleSearchInput(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        searchResults.innerHTML = "";
        return;
    }
    
    const matchedProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query)
    );
    
    searchResults.innerHTML = "";
    if (matchedProducts.length === 0) {
        searchResults.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 15px;">No products found.</div>`;
        return;
    }
    
    matchedProducts.forEach(product => {
        const item = document.createElement("div");
        item.className = "search-item";
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="search-item-info">
                <h5>${product.name}</h5>
                <span>${product.category.toUpperCase()} • ₹${product.price}</span>
            </div>
        `;
        item.addEventListener("click", () => {
            window.openCustomizationModal(product.id);
            closeSearch();
        });
        searchResults.appendChild(item);
    });
}


// --- GLOBAL NOTIFICATION TOAST ---
function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add("active");
    
    // Auto remove toast
    setTimeout(() => {
        toast.classList.remove("active");
    }, 3000);
}


function handleModalDirectCheckout(e) {
    e.preventDefault();
    const productId = modalProductId.value;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Validate text inputs if required
    if (product.requiresText && !customTextInput.value.trim()) {
        showToast("Please enter the name/text to display.");
        customTextInput.focus();
        return;
    }

    const textVal = customTextInput.value.trim();
    
    const colorThemeInput = document.querySelector('input[name="color-theme"]:checked');
    if (!colorThemeInput) {
        showToast("Please select a base color theme.");
        return;
    }
    const colorThemeVal = colorThemeInput.value;
    
    const checkedInclusions = [];
    document.querySelectorAll('input[name="inclusions"]:checked').forEach(cb => {
        checkedInclusions.push(cb.value);
    });

    if (checkedInclusions.length < 1 || checkedInclusions.length > 2) {
        showToast("Please select 1 or 2 inclusions.");
        return;
    }

    const notesVal = customizationNotes.value.trim();

    // Construct direct checkout text
    let message = "Hi! I'd like to order the following item from your website:\n\n";
    message += `1. ${product.name} (1x) - ₹${product.price}\n`;
    message += `   - Base Color: ${colorThemeVal}\n`;
    if (product.requiresText) {
        message += `   - Display Text: "${textVal}"\n`;
    }
    if (checkedInclusions.length > 0) {
        message += `   - Inclusions: ${checkedInclusions.join(", ")}\n`;
    }
    if (notesVal) {
        message += `   - Special Notes: ${notesVal}\n`;
    }
    message += `\nTotal Order Value: ₹${product.price}\n\n`;
    message += "Please let me know how I can send the payment!";

    lastOrderMessage = message;
    const encodedMessage = encodeURIComponent(message);
    const instagramLink = `https://ig.me/m/unicraft_2k26?text=${encodedMessage}`;

    internalCopyToClipboard(message,
        () => {
            checkoutBtn.href = instagramLink;
            btnOpenIg.href = instagramLink;

            closeCustomizationModal();
            openCheckoutGuide();

            // Open direct checkout link in a new tab
            window.open(instagramLink, "_blank");
        },
        (err) => {
            console.error("Clipboard copy failed: ", err);
            checkoutBtn.href = instagramLink;
            btnOpenIg.href = instagramLink;

            closeCustomizationModal();
            openCheckoutGuide();

            window.open(instagramLink, "_blank");
        }
    );
}

function internalCopyToClipboard(text, onSuccess, onFailure) {
    if (!text) return;
    
    // 1. Try synchronous fallback copy first (highly reliable inside click events, keeps user activation)
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        textArea.style.fontSize = "16px";
        document.body.appendChild(textArea);
        
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            const range = document.createRange();
            range.selectNode(textArea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, text.length);
        } else {
            textArea.focus();
            textArea.select();
            textArea.setSelectionRange(0, text.length);
        }
        
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
            if (onSuccess) onSuccess();
            return;
        }
    } catch (err) {
        console.warn("Synchronous fallback copy failed, trying modern clipboard:", err);
    }
    
    // 2. If synchronous fallback fails, try the modern Promise-based Clipboard API
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text)
            .then(onSuccess)
            .catch(onFailure);
    } else {
        if (onFailure) onFailure(new Error("No clipboard access"));
    }
}

function fallbackCopyText(text, onSuccess, onFailure) {
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Prevent scrolling and keep it hidden but accessible
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        textArea.style.fontSize = "16px"; // iOS zoom prevention
        
        document.body.appendChild(textArea);
        
        // Handle selection range (iOS-safe)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            const range = document.createRange();
            range.selectNode(textArea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, text.length);
        } else {
            textArea.select();
            textArea.setSelectionRange(0, text.length);
        }
        
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
            if (onSuccess) onSuccess();
        } else {
            if (onFailure) onFailure(new Error("execCommand returned false"));
        }
    } catch (err) {
        if (onFailure) onFailure(err);
    }
}

function copyTextWithFeedback(text, button, feedbackElement) {
    if (!text || text.includes("Loading") || text.includes("Select options")) return;
    internalCopyToClipboard(text,
        () => {
            showToast("Copied to clipboard!");
            if (button) {
                const originalHTML = button.innerHTML;
                const isSymbolOnly = !button.textContent.trim();
                if (isSymbolOnly) {
                    button.innerHTML = `<i class="fa-solid fa-check" style="color: #2ecc71;"></i>`;
                } else {
                    button.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                }
                button.classList.add("copied");
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.classList.remove("copied");
                }, 2000);
            }
            if (feedbackElement) {
                feedbackElement.classList.remove("flash-copied");
                void feedbackElement.offsetWidth; // Force reflow
                feedbackElement.classList.add("flash-copied");
                setTimeout(() => {
                    feedbackElement.classList.remove("flash-copied");
                }, 1000);
            }
        },
        (err) => {
            console.error("Failed to copy: ", err);
            showToast("Copy failed, please highlight text manually.");
        }
    );
}

// copyCartItemDM function removed

window.copyProductCardMessage = function(productId, button, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let message = "Hi! I'd like to order the following item from your website:\n\n";
    message += `1. ${product.name} (1x) - ₹${product.price}\n`;
    message += `   - Base Color: Teal & Ocean Blue\n`;
    if (product.requiresText) {
        message += `   - Display Text: "[Please specify text, e.g. '${product.placeholder.replace("e.g. ", "")}']"\n`;
    }
    message += `   - Inclusions: Gold Foil Flakes\n`;
    message += `   - Special Notes: Default design request (teal resin & gold flakes).\n`;
    message += `\nTotal Order Value: ₹${product.price}\n\n`;
    message += "Please let me know how I can send the payment!";

    copyTextWithFeedback(message, button);
};

window.copyCartItemMessage = function(uniqueId, button) {
    const item = cart.find(i => i.uniqueId === uniqueId);
    if (!item) return;

    let message = "Hi! I'd like to order the following item from your website:\n\n";
    message += `1. ${item.name} (${item.quantity}x) - ₹${item.price * item.quantity}\n`;
    message += `   - Base Color: ${item.customizations.colorTheme}\n`;
    if (item.customizations.text) {
        message += `   - Display Text: "${item.customizations.text}"\n`;
    }
    if (item.customizations.inclusions.length > 0) {
        message += `   - Inclusions: ${item.customizations.inclusions.join(", ")}\n`;
    }
    if (item.customizations.notes && item.customizations.notes !== "None") {
        message += `   - Special Notes: ${item.customizations.notes}\n`;
    }
    message += `\nTotal Order Value: ₹${item.price * item.quantity}\n\n`;
    message += "Please let me know how I can send the payment!";

    copyTextWithFeedback(message, button);
};

window.copySubtotalMessage = function(button) {
    const formattedMessage = generateOrderMessage();
    copyTextWithFeedback(formattedMessage, button);
};

// --- WISHLIST / FAVORITES ENGINE ---
function openWishlist() {
    closeCart(); // Symmetrical UX closing the cart
    closeSearch(); // Close search if open
    wishlistDrawerBackdrop.classList.add("active");
}

function closeWishlist() {
    wishlistDrawerBackdrop.classList.remove("active");
}

function updateWishlistUI() {
    wishlistDrawerCount.textContent = likedItems.size;

    if (likedItems.size === 0) {
        emptyWishlistMsg.style.display = "flex";
        wishlistItemsList.style.display = "none";
    } else {
        emptyWishlistMsg.style.display = "none";
        wishlistItemsList.style.display = "flex";

        wishlistItemsList.innerHTML = "";
        likedItems.forEach(id => {
            const product = products.find(p => p.id === id);
            if (!product) return;

            const itemHTML = `
                <div class="wishlist-item">
                    <div class="wishlist-item-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="wishlist-item-info">
                        <h4 class="wishlist-item-title">${product.name}</h4>
                        <span class="wishlist-item-price">₹${product.price}</span>
                        <div class="wishlist-item-actions">
                            <button class="btn-wishlist-cart" onclick="moveWishlistItemToCart('${product.id}')">
                                <i class="fa-solid fa-cart-plus"></i> Add to Cart
                            </button>
                            <button class="wishlist-item-delete" onclick="removeWishlistItem('${product.id}')" aria-label="Remove favorite">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            wishlistItemsList.insertAdjacentHTML("beforeend", itemHTML);
        });
    }
}

window.moveWishlistItemToCart = function(productId) {
    addDefaultToCart(productId);
    closeWishlist();
    openCart();
};

window.removeWishlistItem = function(productId) {
    if (likedItems.has(productId)) {
        likedItems.delete(productId);
        localStorage.setItem("uc_likes", JSON.stringify(Array.from(likedItems)));
        
        // Re-render main catalog cards to update the heart icon states
        const activeFilter = document.querySelector(".filter-tab.active")?.getAttribute("data-filter") || "all";
        renderProducts(activeFilter);
        
        updateWishlistUI();
        showToast("Removed from favorites");
    }
};

function triggerLogoPulse() {
    const logoInitials = document.querySelectorAll(".logo-initials");
    logoInitials.forEach(logo => {
        logo.classList.remove("pulse-logo");
        void logo.offsetWidth; // Force reflow
        logo.classList.add("pulse-logo");
        setTimeout(() => logo.classList.remove("pulse-logo"), 600);
    });
}

// User Requested Custom Copy API Section
window.copyTextToClipboard = function(textToCopy) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    } else {
        // Fallback for secure contexts
        try {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);
            if (successful) {
                alert("Copied to clipboard!");
            } else {
                console.error("Fallback copy failed");
            }
        } catch (err) {
            console.error("Fallback error: ", err);
        }
    }
};

window.handleCopy = function() {
    // 1. Get the text from the input field
    const copyText = document.getElementById("myInput").value;

    // 2. Use the Clipboard API to copy it
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                // 3. Provide user feedback
                const button = document.getElementById("copyBtn");
                const originalText = button.innerText;
                button.innerText = "Copied!";
                
                // Reset the button text after 2 seconds
                setTimeout(() => {
                    button.innerText = originalText;
                }, 2000);
            })
            .catch(err => {
                alert("Something went wrong structure: " + err);
            });
    } else {
        // Fallback
        try {
            const textArea = document.createElement("textarea");
            textArea.value = copyText;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);
            if (successful) {
                const button = document.getElementById("copyBtn");
                const originalText = button.innerText;
                button.innerText = "Copied!";
                setTimeout(() => {
                    button.innerText = originalText;
                }, 2000);
            } else {
                alert("Something went wrong structure: Copy failed");
            }
        } catch (err) {
            alert("Something went wrong structure: " + err);
        }
    }
};


