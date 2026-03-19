/* ============================================
   B-Real Natural Beauty — Main JavaScript
   ============================================ */

/* ---- FAQ Accordion ---- */
(function () {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      // Close all open items
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ---- Scroll Reveal (Intersection Observer) ---- */
(function () {
  var revealEls = document.querySelectorAll('.reveal, .reveal-children');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) { observer.observe(el); });
})();

/* ---- Sticky header shadow ---- */
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
})();

/* ---- Mobile hamburger menu ---- */
(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on nav link click
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* ---- Cart ---- */
var cart = JSON.parse(localStorage.getItem('breal-cart') || '[]');

function updateCartUI() {
  var count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  document.querySelectorAll('#cart-count').forEach(function (el) {
    el.textContent = count;
  });
  localStorage.setItem('breal-cart', JSON.stringify(cart));
}

/* ---- Variant Modal ---- */
function handleQuickAdd(productId) {
  if (typeof BREAL_PRODUCTS === 'undefined') return;
  var p = BREAL_PRODUCTS[productId];
  if (!p) return;
  if (!p.sizes) {
    addToCart(p.name, p.price);
    return;
  }
  showVariantModal(p);
}

function showVariantModal(product) {
  var existing = document.getElementById('variant-modal');
  if (existing) existing.remove();

  var sizeKeys = Object.keys(product.sizes);
  var optionsHtml = sizeKeys.map(function(size) {
    return '<button class="variant-modal-option" onclick="addVariantToCart(\'' +
      product.name.replace(/'/g, "\\'") + '\',\'' + size + '\',' + product.sizes[size] + ')">' +
      '<span class="variant-size">' + size + '</span>' +
      '<span class="variant-price">R' + product.sizes[size] + '</span>' +
      '</button>';
  }).join('');

  var modal = document.createElement('div');
  modal.id = 'variant-modal';
  modal.innerHTML =
    '<div class="variant-modal-overlay" id="variant-overlay">' +
      '<div class="variant-modal-card">' +
        '<button class="variant-modal-close" onclick="closeVariantModal()" aria-label="Close">✕</button>' +
        '<p class="variant-modal-sub">Select a size</p>' +
        '<h3 class="variant-modal-title">' + product.name + '</h3>' +
        '<div class="variant-modal-options">' + optionsHtml + '</div>' +
      '</div>' +
    '</div>';

  document.getElementById('variant-overlay');
  document.body.appendChild(modal);
  document.getElementById('variant-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeVariantModal();
  });
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { modal.classList.add('open'); });
  });
}

function addVariantToCart(name, size, price) {
  addToCart(name + ' (' + size + ')', price);
  closeVariantModal();
}

function closeVariantModal() {
  var modal = document.getElementById('variant-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(function() { if (modal.parentNode) modal.remove(); }, 280);
}

/* ---- Reveal helper for dynamically populated grids ---- */
function triggerReveal(el) {
  if (!el) return;
  el.classList.remove('is-visible');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.disconnect();
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    obs.observe(el);
  } else {
    el.classList.add('is-visible');
  }
}

function addToCart(name, price) {
  var existing = cart.find(function (i) { return i.name === name; });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: name, price: price, qty: 1 });
  }
  updateCartUI();
  showCartFeedback(name);
}

function showCartFeedback(name) {
  var existing = document.getElementById('cart-toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.id = 'cart-toast';
  toast.textContent = '✓ ' + name + ' added to cart';
  toast.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'right:24px',
    'background:#3a5a4a',
    'color:#fff',
    'padding:12px 22px',
    'border-radius:6px',
    'font-size:14px',
    'font-weight:500',
    'z-index:9999',
    'box-shadow:0 4px 16px rgba(0,0,0,0.2)',
    'animation:slideUp 0.3s ease'
  ].join(';');
  document.body.appendChild(toast);

  // Add animation keyframe once
  if (!document.getElementById('toast-style')) {
    var style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = '@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}';
    document.head.appendChild(style);
  }

  setTimeout(function () { toast.remove(); }, 2800);
}

// Wire up all add-to-cart buttons
document.addEventListener('DOMContentLoaded', function () {
  updateCartUI();

  /* ---- Product Detail Page ---- */
  // Quantity control
  var qtyMinus = document.getElementById('pd-qty-minus');
  var qtyPlus  = document.getElementById('pd-qty-plus');
  var qtyVal   = document.getElementById('pd-qty-val');
  var pdAddBtn = document.getElementById('pd-add-to-cart');
  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', function () {
      var n = parseInt(qtyVal.textContent, 10);
      if (n > 1) qtyVal.textContent = n - 1;
    });
    qtyPlus.addEventListener('click', function () {
      qtyVal.textContent = parseInt(qtyVal.textContent, 10) + 1;
    });
  }

  // Size selector — update price display and cart data-price
  document.querySelectorAll('.pd-size-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.pd-size-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (pdAddBtn) pdAddBtn.dataset.price = btn.dataset.price;
      var priceEl = document.querySelector('.pd-price');
      if (priceEl) priceEl.firstChild.textContent = 'R' + btn.dataset.price + ' ';
    });
  });

  // Product detail Add to Cart (respects qty)
  if (pdAddBtn) {
    pdAddBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var name  = pdAddBtn.dataset.name;
      var price = parseInt(pdAddBtn.dataset.price, 10);
      var qty   = qtyVal ? parseInt(qtyVal.textContent, 10) : 1;
      for (var i = 0; i < qty; i++) { addToCart(name, price); }
    });
  }

  /* ---- Product Detail Tabs ---- */
  var pdTabBtns = document.querySelectorAll('.pd-tab-btn');
  if (pdTabBtns.length > 0) {
    pdTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.pdTab;
        pdTabBtns.forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.pd-tab-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById(target);
        if (panel) {
          panel.classList.add('active');
          panel.querySelectorAll('.reveal:not(.is-visible), .reveal-children:not(.is-visible)').forEach(function (el) {
            el.classList.add('is-visible');
          });
        }
      });
    });
  }

  document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var pid = btn.dataset.productId;
      if (pid && typeof BREAL_PRODUCTS !== 'undefined' && BREAL_PRODUCTS[pid] && BREAL_PRODUCTS[pid].sizes) {
        showVariantModal(BREAL_PRODUCTS[pid]);
        return;
      }
      var name = btn.dataset.name;
      var price = parseInt(btn.dataset.price, 10);
      addToCart(name, price);
    });
  });

  /* ---- Tabs (Business Clients page) ---- */
  var tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length > 0) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.tab;

        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });

        btn.classList.add('active');
        var panel = document.getElementById(target);
        if (panel) {
          panel.classList.add('active');
          // Trigger scroll-reveal for any hidden items now visible inside the panel
          panel.querySelectorAll('.reveal:not(.is-visible), .reveal-children:not(.is-visible)').forEach(function (el) {
            el.classList.add('is-visible');
          });
        }
      });
    });

    // Handle URL hash for direct linking (#white-label, #private-label, #custom)
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var matchBtn = document.querySelector('[data-tab="' + hash + '"]');
      if (matchBtn) matchBtn.click();
    }
  }

  /* ---- Shop filter pills ---- */
  var filterPills = document.querySelectorAll('.shop-filter-pills .pill');
  if (filterPills.length > 0) {
    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        filterPills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        filterProducts(pill.dataset.filter);
      });
    });

    // Sidebar radio filters
    document.querySelectorAll('[name="cat"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        filterPills.forEach(function (p) { p.classList.remove('active'); });
        var matchPill = document.querySelector('.shop-filter-pills .pill[data-filter="' + radio.value + '"]');
        if (matchPill) matchPill.classList.add('active');
        filterProducts(radio.value);
      });
    });
  }

  /* ---- Price range filter ---- */
  var priceFilter = document.getElementById('price-filter');
  var priceVal = document.getElementById('price-val');
  if (priceFilter) {
    priceFilter.addEventListener('input', function () {
      var max = parseInt(priceFilter.value, 10);
      priceVal.textContent = 'R' + max;
      applyPriceFilter(max);
    });
  }

  /* ---- Sort select ---- */
  var sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      sortProducts(sortSelect.value);
    });
  }

  /* ---- URL query param pre-selection ---- */
  var urlParams = new URLSearchParams(window.location.search);
  var catParam = urlParams.get('cat');
  if (catParam && filterPills.length > 0) {
    var matchPill = document.querySelector('.shop-filter-pills .pill[data-filter="' + catParam + '"]');
    if (matchPill) {
      filterPills.forEach(function (p) { p.classList.remove('active'); });
      matchPill.classList.add('active');
      filterProducts(catParam);
    }
  }
});

/* ---- Product filter ---- */
function filterProducts(category) {
  var cards = document.querySelectorAll('#products-grid .product-card');
  var visible = 0;
  cards.forEach(function (card) {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });
  var countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = visible + ' product' + (visible !== 1 ? 's' : '');
}

function applyPriceFilter(maxPrice) {
  var cards = document.querySelectorAll('#products-grid .product-card');
  var visible = 0;
  cards.forEach(function (card) {
    var price = parseInt(card.dataset.price, 10);
    if (price <= maxPrice) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });
  var countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = visible + ' product' + (visible !== 1 ? 's' : '');
}

function sortProducts(mode) {
  var grid = document.getElementById('products-grid');
  if (!grid) return;
  var cards = Array.from(grid.querySelectorAll('.product-card'));

  cards.sort(function (a, b) {
    if (mode === 'price-asc') return parseInt(a.dataset.price) - parseInt(b.dataset.price);
    if (mode === 'price-desc') return parseInt(b.dataset.price) - parseInt(a.dataset.price);
    if (mode === 'name') {
      var na = a.querySelector('.product-name') ? a.querySelector('.product-name').textContent : '';
      var nb = b.querySelector('.product-name') ? b.querySelector('.product-name').textContent : '';
      return na.localeCompare(nb);
    }
    return 0;
  });

  cards.forEach(function (card) { grid.appendChild(card); });
}

/* ---- Form submit handler ---- */
function handleFormSubmit(e, successId) {
  e.preventDefault();
  var form = e.target;
  var success = document.getElementById(successId);

  // Basic validation
  var required = form.querySelectorAll('[required]');
  var valid = true;
  required.forEach(function (field) {
    if (!field.value.trim()) {
      field.style.borderColor = '#c0392b';
      valid = false;
    } else {
      field.style.borderColor = '';
    }
  });

  if (!valid) return;

  // Simulate submission
  var submitBtn = form.querySelector('[type="submit"]');
  if (submitBtn) {
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
  }

  setTimeout(function () {
    form.style.display = 'none';
    if (success) success.classList.add('visible');
  }, 1000);
}

/* ============================================
   GIFT BUILDER
   ============================================ */

var giftState = {
  products: [],
  packaging: null,
  extras: []
};

function toggleGiftProduct(card) {
  var name = card.dataset.name;
  var price = parseInt(card.dataset.price, 10);
  var idx = giftState.products.findIndex(function (p) { return p.name === name; });

  if (idx >= 0) {
    giftState.products.splice(idx, 1);
    card.classList.remove('selected');
  } else {
    giftState.products.push({ name: name, price: price });
    card.classList.add('selected');
  }

  updateGiftSummary();
}

function selectPackaging(card) {
  document.querySelectorAll('.packaging-card').forEach(function (c) { c.classList.remove('selected'); });
  card.classList.add('selected');
  giftState.packaging = {
    name: card.dataset.name,
    price: parseInt(card.dataset.price, 10)
  };
  updateGiftSummary();
}

function toggleExtra(item, name, price) {
  var checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  item.classList.toggle('selected', checkbox.checked);

  if (checkbox.checked) {
    giftState.extras.push({ name: name, price: price });
  } else {
    var idx = giftState.extras.findIndex(function (e) { return e.name === name; });
    if (idx >= 0) giftState.extras.splice(idx, 1);
  }

  updateGiftSummary();
}

function updateGiftSummary() {
  var emptyEl = document.getElementById('summary-empty');
  var itemsEl = document.getElementById('summary-items');
  var totalEl = document.getElementById('summary-total');
  var totalPriceEl = document.getElementById('total-price');
  var reviewEl = document.getElementById('review-section');

  if (!emptyEl) return;

  var total = 0;
  var lines = [];

  giftState.products.forEach(function (p) {
    lines.push({ name: p.name, price: p.price });
    total += p.price;
  });

  if (giftState.packaging) {
    lines.push({ name: giftState.packaging.name, price: giftState.packaging.price });
    total += giftState.packaging.price;
  }

  giftState.extras.forEach(function (e) {
    lines.push({ name: e.name, price: e.price });
    total += e.price;
  });

  if (lines.length === 0) {
    emptyEl.style.display = 'block';
    itemsEl.style.display = 'none';
    totalEl.style.display = 'none';
    if (reviewEl) reviewEl.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">Your gift summary will appear here as you make selections above.</p>';
    return;
  }

  emptyEl.style.display = 'none';
  itemsEl.style.display = 'block';
  totalEl.style.display = 'flex';

  // Build summary lines
  itemsEl.innerHTML = lines.map(function (l) {
    return '<div class="summary-line"><span class="name">' + l.name + '</span><span class="price">R' + l.price + '</span></div>';
  }).join('');

  totalPriceEl.textContent = 'R' + total;

  // Update review section
  if (reviewEl) {
    var reviewHTML = '<div style="display:flex;flex-direction:column;gap:8px;">';
    lines.forEach(function (l) {
      reviewHTML += '<div style="display:flex;align-items:center;gap:8px;font-size:14px;"><span style="color:var(--sage);font-weight:700;">✓</span><span>' + l.name + '</span><span style="margin-left:auto;font-weight:600;color:var(--sage-dark);">R' + l.price + '</span></div>';
    });
    reviewHTML += '<div style="border-top:1px solid var(--border-light);margin-top:12px;padding-top:12px;display:flex;justify-content:space-between;font-weight:700;font-size:1rem;"><span>Total</span><span style="color:var(--sage-dark);">R' + total + '</span></div>';
    reviewHTML += '</div>';
    reviewEl.innerHTML = reviewHTML;
  }
}

function checkoutGift() {
  if (giftState.products.length === 0) {
    alert('Please select at least one product for your gift.');
    return;
  }
  // In production: integrate with Yoco payment API
  alert('Redirecting to Yoco checkout...\n\nIntegrate your Yoco payment link here.');
}

/* ---- Cart button → navigate to cart.html ---- */
document.addEventListener('DOMContentLoaded', function () {
  var cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', function () {
      window.location.href = 'cart.html';
    });
  }
});

/* ---- EFT / Yoco payment method toggle ---- */
document.addEventListener('DOMContentLoaded', function () {
  var payYoco = document.getElementById('pay-yoco');
  var payEft  = document.getElementById('pay-eft');
  var eftBox  = document.getElementById('eft-details');
  var btnText = document.getElementById('checkout-btn-text');

  if (!payYoco || !payEft) return;

  function setMethod(method) {
    payYoco.classList.toggle('active', method === 'yoco');
    payEft.classList.toggle('active',  method === 'eft');
    if (eftBox) eftBox.style.display = method === 'eft' ? 'block' : 'none';
    if (btnText) btnText.textContent  = method === 'eft' ? 'Place Order (EFT)' : 'Checkout with Yoco';
  }

  payYoco.addEventListener('click', function () { setMethod('yoco'); });
  payEft.addEventListener('click',  function () { setMethod('eft');  });
});

/* ---- Email Popup ---- */
(function () {
  var POPUP_KEY    = 'breal-popup-dismissed';
  var POPUP_DELAY  = 5000; // 5 seconds

  // Don't show on cart or checkout
  if (window.location.pathname.includes('cart')) return;
  // Don't show if already dismissed in this session
  if (sessionStorage.getItem(POPUP_KEY)) return;

  function buildPopup() {
    var overlay = document.createElement('div');
    overlay.className = 'email-popup-overlay';
    overlay.id = 'email-popup-overlay';
    overlay.innerHTML =
      '<div class="email-popup-card">' +
        '<button class="email-popup-close" id="popup-close" aria-label="Close">✕</button>' +
        '<div class="email-popup-icon">🌿</div>' +
        '<h3>Join the B-Real Community</h3>' +
        '<p>Subscribe for exclusive skincare tips, early access to new products and special offers — only for our subscribers.</p>' +
        '<div class="email-popup-form" id="popup-form-wrap">' +
          '<input type="email" id="popup-email" placeholder="Your email address" autocomplete="email">' +
          '<button class="btn btn-tan" id="popup-submit">Subscribe</button>' +
        '</div>' +
        '<div class="email-popup-success" id="popup-success">' +
          '<div class="email-popup-icon">🎉</div>' +
          '<h3>You\'re in!</h3>' +
          '<p>Thank you for subscribing. Watch your inbox for something special.</p>' +
        '</div>' +
        '<button class="email-popup-skip" id="popup-skip">No thanks</button>' +
      '</div>';
    document.body.appendChild(overlay);

    function dismiss() {
      overlay.classList.remove('visible');
      sessionStorage.setItem(POPUP_KEY, '1');
    }

    document.getElementById('popup-close').addEventListener('click', dismiss);
    document.getElementById('popup-skip').addEventListener('click', dismiss);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) dismiss();
    });

    document.getElementById('popup-submit').addEventListener('click', function () {
      var email = document.getElementById('popup-email').value.trim();
      if (!email || !email.includes('@')) {
        document.getElementById('popup-email').style.borderColor = '#c0392b';
        return;
      }
      // Show success state
      document.getElementById('popup-form-wrap').style.display = 'none';
      document.getElementById('popup-skip').style.display = 'none';
      document.getElementById('popup-success').style.display = 'block';
      sessionStorage.setItem(POPUP_KEY, '1');
      setTimeout(dismiss, 3000);
    });

    // Show with delay
    setTimeout(function () {
      overlay.classList.add('visible');
    }, POPUP_DELAY);

    // Exit intent (desktop)
    document.addEventListener('mouseleave', function handler(e) {
      if (e.clientY <= 0 && !sessionStorage.getItem(POPUP_KEY)) {
        overlay.classList.add('visible');
        document.removeEventListener('mouseleave', handler);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPopup);
  } else {
    buildPopup();
  }
})();

/* ============================================
   CART PAGE
   ============================================ */
(function () {
  var cartItemsList = document.getElementById('cart-items-list');
  if (!cartItemsList) return; // only run on cart.html

  var SHIPPING_FLAT = 65;
  var FREE_THRESHOLD = 500;

  function categoryColor(slug) {
    var map = { skincare: '#d4e4dc', haircare: '#c8ddd4', soaps: '#e8cfc0', 'lip-care': '#f0d8d4' };
    return map[slug] || '#e0ece7';
  }

  function initials(name) {
    return name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }

  function productByName(name) {
    if (typeof BREAL_PRODUCTS === 'undefined') return null;
    return Object.values(BREAL_PRODUCTS).find(function (p) { return p.name === name; }) || null;
  }

  function renderCart() {
    cart = JSON.parse(localStorage.getItem('breal-cart') || '[]');

    var emptyEl    = document.getElementById('cart-empty');
    var actionsEl  = document.getElementById('cart-actions');
    var summaryEl  = document.getElementById('order-summary');
    var upsellSec  = document.getElementById('upsell-section');

    if (cart.length === 0) {
      cartItemsList.innerHTML = '';
      if (emptyEl)   emptyEl.style.display   = 'flex';
      if (actionsEl) actionsEl.style.display  = 'none';
      if (summaryEl) summaryEl.style.display  = 'none';
      if (upsellSec) upsellSec.style.display  = 'none';
      return;
    }

    if (emptyEl)   emptyEl.style.display   = 'none';
    if (actionsEl) actionsEl.style.display  = 'flex';
    if (summaryEl) summaryEl.style.display  = '';
    if (upsellSec) upsellSec.style.display  = '';

    cartItemsList.innerHTML = cart.map(function (item, idx) {
      var p    = productByName(item.name);
      var slug = p ? p.categorySlug : '';
      var bg   = categoryColor(slug);
      var init = initials(item.name);

      return (
        '<div class="cart-item">' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-visual" style="background:' + bg + ';font-size:12px;font-weight:700;color:var(--sage-dark);">' + init + '</div>' +
            '<div class="cart-item-details">' +
              '<div class="cart-item-name">' + item.name + '</div>' +
              '<div class="cart-item-unit-price">R' + item.price + ' each</div>' +
              '<button class="cart-item-remove" data-idx="' + idx + '">Remove</button>' +
            '</div>' +
          '</div>' +
          '<div class="cart-item-qty">' +
            '<button class="cart-qty-btn" data-action="minus" data-idx="' + idx + '">−</button>' +
            '<span class="cart-qty-num">' + item.qty + '</span>' +
            '<button class="cart-qty-btn" data-action="plus" data-idx="' + idx + '">+</button>' +
          '</div>' +
          '<div class="cart-item-total">R' + (item.price * item.qty) + '</div>' +
        '</div>'
      );
    }).join('');

    updateCartTotals();
    bindCartItemEvents();
    populateUpsell();
  }

  function updateCartTotals() {
    var subtotal  = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    var shipping  = subtotal >= FREE_THRESHOLD ? 0 : SHIPPING_FLAT;
    var total     = subtotal + shipping;
    var remaining = FREE_THRESHOLD - subtotal;

    var elSubtotal      = document.getElementById('summary-subtotal');
    var elTotal         = document.getElementById('summary-total');
    var elShippingLine  = document.getElementById('shipping-line');
    var elFreeMsg       = document.getElementById('free-shipping-msg');
    var elNote          = document.getElementById('shipping-note');

    if (elSubtotal) elSubtotal.textContent = 'R' + subtotal;
    if (elTotal)    elTotal.textContent    = 'R' + total;

    if (shipping === 0) {
      if (elShippingLine) elShippingLine.style.display = 'none';
      if (elFreeMsg)      elFreeMsg.style.display      = 'flex';
      if (elNote)         elNote.textContent            = '';
    } else {
      if (elShippingLine) elShippingLine.style.display = 'flex';
      if (elFreeMsg)      elFreeMsg.style.display      = 'none';
      if (elNote)         elNote.textContent            = 'Spend R' + remaining + ' more to unlock free shipping!';
    }
  }

  function bindCartItemEvents() {
    // Qty buttons
    document.querySelectorAll('.cart-qty-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx    = parseInt(btn.dataset.idx, 10);
        var action = btn.dataset.action;
        if (action === 'plus') {
          cart[idx].qty += 1;
        } else {
          if (cart[idx].qty > 1) {
            cart[idx].qty -= 1;
          } else {
            cart.splice(idx, 1);
          }
        }
        updateCartUI();
        renderCart();
      });
    });

    // Remove buttons
    document.querySelectorAll('.cart-item-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.dataset.idx, 10);
        cart.splice(idx, 1);
        updateCartUI();
        renderCart();
      });
    });
  }

  function populateUpsell() {
    var grid = document.getElementById('upsell-grid');
    if (!grid || typeof BREAL_PRODUCTS === 'undefined') return;

    var cartNames  = cart.map(function (i) { return i.name; });
    var picks      = Object.values(BREAL_PRODUCTS)
      .filter(function (p) { return !cartNames.includes(p.name); })
      .slice(0, 4);

    grid.innerHTML = picks.map(function (p) {
      var bg = p.visual && p.visual.bg ? p.visual.bg : categoryColor(p.categorySlug);
      return (
        '<div class="product-card" onclick="window.location=\'product.html?id=' + p.id + '\'" style="cursor:pointer;">' +
          '<div class="product-visual" style="background:' + bg + ';"></div>' +
          '<div class="product-info">' +
            '<p class="product-category">' + p.category + '</p>' +
            '<h3 class="product-name">' + p.name + '</h3>' +
            '<div class="product-footer">' +
              '<span class="product-price">R' + p.price + '</span>' +
              '<button class="product-add-btn" data-product-id="' + p.id + '" ' +
                'aria-label="Add ' + p.name + ' to cart" onclick="event.stopPropagation();handleQuickAdd(\'' + p.id + '\')">+</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    triggerReveal(grid);
  }

  // Clear cart
  var clearBtn = document.getElementById('cart-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      if (confirm('Remove all items from your cart?')) {
        cart = [];
        updateCartUI();
        renderCart();
      }
    });
  }

  renderCart();
})();

/* ---- Checkout handler (global, called by onclick in cart.html) ---- */
function handleCheckout() {
  if (!cart || cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  var eftBtn = document.getElementById('pay-eft');
  var isEft  = eftBtn && eftBtn.classList.contains('active');
  if (isEft) {
    alert('Thank you for your order!\n\nPlease make your EFT payment using the banking details shown and email your Proof of Payment to hello@brealbeauty.co.za.\n\nYour order will be processed once payment is confirmed.');
  } else {
    // TODO: Replace with your real Yoco payment link
    alert('Redirecting to Yoco checkout…\n\nIntegrate your Yoco payment link here to complete the integration.');
  }
}
