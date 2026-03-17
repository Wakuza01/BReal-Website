/* ============================================
   B-Real Natural Beauty — Main JavaScript
   ============================================ */

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
    'background:#2d4438',
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

  document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
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
        if (panel) panel.classList.add('active');
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
