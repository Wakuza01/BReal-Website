/* ============================================
   B-Real Natural Beauty — Product Data
   All product information lives here.
   ============================================ */

var BREAL_PRODUCTS = {

  'moisture-boost': {
    id: 'moisture-boost',
    name: 'Moisture Boost',
    subtitle: 'Hydrating Facial Oil',
    category: 'Skincare', categorySlug: 'skincare',
    price: 85, sizes: null,
    rating: 4.9, reviewCount: 28,
    shortDesc: 'A rich yet fast-absorbing facial oil blend that locks in moisture for a dewy, radiant glow.',
    longDesc: 'Moisture Boost is a luxurious blend of cold-pressed botanical oils formulated to deeply nourish dry, dull and dehydrated skin. Lightweight enough for daily use, it absorbs quickly without clogging pores — leaving skin visibly plumper, softer and luminous. Safe for all skin types, including combination and sensitive skin.',
    benefits: [
      'Deeply hydrates without a greasy finish',
      'Plumps fine lines with sustained moisture',
      'Restores the skin\'s natural lipid barrier',
      'Improves radiance with continued use',
      'Free from parabens, mineral oils and artificial fragrance'
    ],
    ingredients: [
      { name: 'Rosehip Oil', role: 'Rich in vitamin A and C — brightens and repairs.' },
      { name: 'Jojoba Oil', role: 'Mimics skin\'s natural sebum. Balances oil production.' },
      { name: 'Marula Oil', role: 'Deeply moisturising oleic acid. Fast-absorbing.' },
      { name: 'Vitamin E', role: 'Antioxidant protection against environmental stress.' },
      { name: 'Lavender Extract', role: 'Calming and mildly antibacterial.' },
      { name: 'Sweet Almond Oil', role: 'Emollient base — softens and soothes.' }
    ],
    howToUse: [
      'Cleanse and tone your face as normal.',
      'Apply 3–4 drops to your fingertips and press gently into skin.',
      'Use morning and/or evening before SPF or moisturiser.',
      'For extra hydration, mix one drop into your moisturiser.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#f0e8d4,#ddd0b8)', capColor: 'linear-gradient(180deg,#e0c890,#c4a860)', bodyGradient: 'linear-gradient(180deg,#d4a843 0%,#a87830 100%)', labelText: 'Moisture<br>Boost', labelDark: false },
    related: ['spot-control', 'glow', 'aloe-ferox-gel']
  },

  'spot-control': {
    id: 'spot-control',
    name: 'Spot Control',
    subtitle: 'Targeted Blemish Oil',
    category: 'Skincare', categorySlug: 'skincare',
    price: 85, sizes: null,
    rating: 4.8, reviewCount: 41,
    shortDesc: 'Targeted blemish oil with tea tree and neem. Calms breakouts fast without drying skin.',
    longDesc: 'Spot Control is a precision blemish treatment oil that targets breakouts, blackheads and blemish-prone areas without stripping your skin. The synergistic blend of tea tree, neem and zinc-rich hemp seed oil works rapidly to reduce inflammation, balance sebum and prevent future breakouts — all without the harsh dryness of conventional spot treatments.',
    benefits: [
      'Reduces blemish size and redness within 24 hours',
      'Balances excess sebum without over-drying',
      'Prevents future breakouts with antimicrobial botanicals',
      'Suitable for acne-prone and oily skin types',
      'Gentle enough for daily use'
    ],
    ingredients: [
      { name: 'Tea Tree Oil', role: 'Powerful antibacterial and antifungal. Fights acne-causing bacteria.' },
      { name: 'Neem Oil', role: 'Anti-inflammatory and antimicrobial. Reduces redness.' },
      { name: 'Hemp Seed Oil', role: 'Zinc-rich, balances sebum without clogging pores.' },
      { name: 'Salicylic Extract', role: 'Exfoliates inside pores to prevent blackheads.' },
      { name: 'Rosehip Oil', role: 'Fades post-blemish marks and supports skin repair.' },
      { name: 'Peppermint Oil', role: 'Cooling and antimicrobial. Calms inflamed skin.' }
    ],
    howToUse: [
      'Apply directly to individual blemishes using the rollerball or a cotton bud.',
      'Use morning and evening after cleansing and toning.',
      'For full-face oily skin: apply 2–3 drops across the T-zone before moisturiser.',
      'Do not rinse off. Avoid eye area.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#e8e4d8,#d8d0c4)', capColor: 'linear-gradient(180deg,#d8d0a0,#b8b060)', bodyGradient: 'linear-gradient(180deg,#c8b87a 0%,#a09040 100%)', labelText: 'Spot<br>Control', labelDark: false },
    related: ['moisture-boost', 'glow', 'charcoal-mint-bar']
  },

  'glow': {
    id: 'glow',
    name: 'Glow',
    subtitle: 'Brightening Facial Oil',
    category: 'Skincare', categorySlug: 'skincare',
    price: 85, sizes: null,
    rating: 4.9, reviewCount: 53,
    shortDesc: 'Brightening facial oil with rosehip and jojoba for visibly luminous, even-toned skin.',
    longDesc: 'Glow is a brightening facial oil formulated to even skin tone, fade dark spots and restore your skin\'s natural luminosity. Packed with vitamin-rich botanicals that target hyperpigmentation, sun damage and dullness — leaving your complexion visibly clearer and more radiant with every use. Lightweight and non-comedogenic.',
    benefits: [
      'Visibly fades dark spots and hyperpigmentation',
      'Evens skin tone with consistent use',
      'Boosts radiance for a natural lit-from-within glow',
      'Non-comedogenic — safe for all skin types',
      'Rich in vitamins A, C and E'
    ],
    ingredients: [
      { name: 'Rosehip Seed Oil', role: 'High in vitamin A. Fades pigmentation and scars.' },
      { name: 'Jojoba Oil', role: 'Lightweight emollient. Softens without clogging.' },
      { name: 'Bakuchiol', role: 'Natural retinol alternative. Brightens and firms.' },
      { name: 'Sea Buckthorn', role: 'Vitamin C-rich. Boosts radiance and collagen.' },
      { name: 'Turmeric Extract', role: 'Anti-inflammatory. Evens complexion.' },
      { name: 'Vitamin E', role: 'Antioxidant that protects and conditions.' }
    ],
    howToUse: [
      'Cleanse and tone skin before application.',
      'Apply 3–5 drops to the face and neck, focusing on uneven areas.',
      'Gently massage in upward circular motions until absorbed.',
      'Use morning and evening. Follow with SPF during the day.',
      'Best results visible after 4–6 weeks of consistent use.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#f0ede4,#e0d8cc)', capColor: 'linear-gradient(180deg,#e0d8c0,#c8c0a8)', bodyGradient: 'linear-gradient(180deg,#e8dfc4 0%,#c8b498 100%)', labelText: 'Glow', labelDark: true },
    related: ['moisture-boost', 'spot-control', 'aloe-ferox-gel']
  },

  'aloe-ferox-gel': {
    id: 'aloe-ferox-gel',
    name: 'Aloe Ferox Gel',
    subtitle: 'Soothing Hydration Gel',
    category: 'Skincare', categorySlug: 'skincare',
    price: 95, sizes: { '50ml': 95, '100ml': 160 },
    rating: 4.8, reviewCount: 36,
    shortDesc: 'Pure South African Aloe Ferox gel. Soothes, hydrates and calms irritated skin naturally.',
    longDesc: 'Sourced from wild-harvested Aloe Ferox — South Africa\'s native aloe species, more potent than the common Aloe Vera — this pure gel hydrates deeply, soothes inflammation and supports skin healing. Ideal as a daily moisturiser, aftersun treatment, or soothing mask for irritated, sunburnt or reactive skin.',
    benefits: [
      'Instantly soothes sunburn, rashes and skin irritation',
      'Provides lasting hydration without heaviness',
      'Supports wound healing and skin regeneration',
      'Anti-inflammatory and antioxidant rich',
      'Proudly sourced from South African Aloe Ferox'
    ],
    ingredients: [
      { name: 'Aloe Ferox Gel', role: 'South African native aloe — more potent than Aloe Vera.' },
      { name: 'Hyaluronic Acid', role: 'Attracts and holds moisture in the skin.' },
      { name: 'Allantoin', role: 'Skin softener and wound-healing agent.' },
      { name: 'Chamomile Extract', role: 'Calming and anti-inflammatory.' },
      { name: 'Glycerin', role: 'Humectant that draws moisture into skin.' },
      { name: 'Rooibos Extract', role: 'Antioxidant-rich. Protects and soothes.' }
    ],
    howToUse: [
      'Apply a small amount to clean skin and smooth evenly.',
      'Use as a daily lightweight moisturiser for oily/combination skin.',
      'Apply generously to sunburnt or irritated skin for immediate relief.',
      'Can be used as a soothing overnight mask — apply a thicker layer before bed.',
      'Store in the fridge for an extra cooling effect.'
    ],
    visual: { type: 'jar', bg: 'linear-gradient(145deg,#e8f4ec,#c8e0d4)', capColor: 'linear-gradient(180deg,#a0c8b4,#7fa090)', bodyGradient: 'linear-gradient(180deg,#c8e4d8 0%,#a8ccc0 100%)', labelText: 'Aloe<br>Ferox', labelDark: true },
    related: ['moisture-boost', 'glow', 'lavender-soap']
  },

  'revive-scalp-oil': {
    id: 'revive-scalp-oil',
    name: 'Revive Scalp Oil',
    subtitle: 'Nourishing Scalp Treatment',
    category: 'Haircare', categorySlug: 'haircare',
    price: 120, sizes: { '30ml': 120, '50ml': 180, '100ml': 280 },
    rating: 4.9, reviewCount: 34,
    shortDesc: 'Nourishing scalp treatment oil that stimulates growth, soothes irritation and adds natural shine.',
    longDesc: 'A deeply nourishing scalp treatment oil crafted from pure botanical extracts. Stimulates healthy hair growth, soothes an irritated scalp and adds natural shine — without weighing hair down. Plant-powered, free from silicones and mineral oils.',
    benefits: [
      'Stimulates scalp circulation to encourage healthy hair growth',
      'Soothes dryness, itching and flakiness',
      'Strengthens hair strands and reduces breakage',
      'Adds natural shine without a greasy finish',
      'Free from silicones, sulphates and mineral oils'
    ],
    ingredients: [
      { name: 'Castor Oil', role: 'Rich in ricinoleic acid — promotes scalp circulation and encourages growth.' },
      { name: 'Peppermint Oil', role: 'Cooling and stimulating. Increases blood flow to hair follicles.' },
      { name: 'Argan Oil', role: 'Deeply moisturising. Tames frizz and adds brilliant shine.' },
      { name: 'Rosemary Extract', role: 'Clinically shown to support hair density comparable to minoxidil.' },
      { name: 'Tea Tree Oil', role: 'Antibacterial and antifungal. Keeps the scalp clean and balanced.' },
      { name: 'Jojoba Oil', role: 'Structurally similar to sebum — lightweight, absorbs fast, non-greasy.' }
    ],
    howToUse: [
      'Section your hair to expose the scalp.',
      'Apply 4–6 drops directly to the scalp along each parting.',
      'Massage gently in circular motions for 3–5 minutes.',
      'Leave overnight for deep treatment, or 30+ minutes before shampooing.',
      'Use 2–3 times per week for best results.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#dde8e4,#c4d8d0)', capColor: 'linear-gradient(180deg,#a0c8b4,#7fa090)', bodyGradient: 'linear-gradient(180deg,#7fa090 0%,#4a7060 100%)', labelText: 'Revive<br>Scalp Oil', labelDark: false },
    related: ['botanical-shampoo', 'botanical-conditioner', 'nourishing-hair-mask']
  },

  'botanical-shampoo': {
    id: 'botanical-shampoo',
    name: 'Botanical Repair Shampoo',
    subtitle: 'Gentle Cleansing Shampoo',
    category: 'Haircare', categorySlug: 'haircare',
    price: 150, sizes: { '250ml': 150, '500ml': 260 },
    rating: 4.8, reviewCount: 22,
    shortDesc: 'Sulphate-free repair shampoo with baobab and rooibos. Cleanses gently without stripping.',
    longDesc: 'Botanical Repair Shampoo is a sulphate-free formula that cleanses gently while actively repairing damage. Enriched with baobab protein, rooibos antioxidants and marula oil, it leaves hair noticeably stronger, shinier and more manageable with every wash. Safe for colour-treated, chemically processed and natural hair.',
    benefits: [
      'Sulphate-free — gentle on colour and keratin-treated hair',
      'Strengthens and repairs with baobab protein',
      'Reduces breakage and split ends',
      'Leaves hair soft and manageable',
      'Rich lather without harsh detergents'
    ],
    ingredients: [
      { name: 'Baobab Protein', role: 'Penetrates the hair shaft to repair and strengthen.' },
      { name: 'Rooibos Extract', role: 'Antioxidant-rich. Protects hair from environmental damage.' },
      { name: 'Marula Oil', role: 'Adds shine and seals the cuticle for smooth hair.' },
      { name: 'Aloe Ferox', role: 'Soothes the scalp and maintains moisture balance.' },
      { name: 'Sodium Cocoyl Isethionate', role: 'Gentle coconut-derived cleanser. Sulphate-free.' },
      { name: 'Panthenol (B5)', role: 'Conditions and adds volume.' }
    ],
    howToUse: [
      'Wet hair thoroughly with warm water.',
      'Apply a coin-sized amount to the scalp and work into a lather.',
      'Massage gently into scalp and through lengths.',
      'Rinse well and follow with Botanical Repair Conditioner.',
      'For best results, use with Revive Scalp Oil 2–3 times per week.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#f0ede8,#e4dcd4)', capColor: 'linear-gradient(180deg,#e8e4e0,#d0ccc8)', bodyGradient: 'linear-gradient(180deg,#f0ede8 0%,#d4cdc4 100%)', labelText: 'Botanical<br>Shampoo', labelDark: true },
    related: ['botanical-conditioner', 'nourishing-hair-mask', 'revive-scalp-oil']
  },

  'botanical-conditioner': {
    id: 'botanical-conditioner',
    name: 'Botanical Repair Conditioner',
    subtitle: 'Deep Conditioning Treatment',
    category: 'Haircare', categorySlug: 'haircare',
    price: 150, sizes: { '250ml': 150, '500ml': 260 },
    rating: 4.9, reviewCount: 19,
    shortDesc: 'Deep conditioning treatment that softens, detangles and repairs with plant extracts.',
    longDesc: 'Pair this with Botanical Repair Shampoo for complete hair transformation. The rich, creamy formula melts into hair to deliver deep conditioning, intense softness and manageable detangling. Shea butter and mongongo oil coat each strand, rebuilding the hair\'s protective layer and restoring shine to damaged hair.',
    benefits: [
      'Deeply conditions and detangles in 1–2 minutes',
      'Rebuilds damaged hair with plant proteins',
      'Reduces frizz and adds mirror shine',
      'Safe for all hair textures including 4C',
      'Free from silicones and parabens'
    ],
    ingredients: [
      { name: 'Shea Butter', role: 'Rich, nourishing fat that seals moisture into hair.' },
      { name: 'Mongongo Oil', role: 'African superfood oil. Repairs and adds exceptional shine.' },
      { name: 'Quinoa Protein', role: 'Fills in damaged areas of the hair shaft.' },
      { name: 'Baobab Oil', role: 'Deeply penetrating omega-rich oil. Softens and strengthens.' },
      { name: 'Cetyl Alcohol', role: 'Plant-derived conditioning agent. Reduces friction.' },
      { name: 'Rooibos Extract', role: 'Antioxidant protection for colour-treated hair.' }
    ],
    howToUse: [
      'After shampooing, squeeze excess water from hair.',
      'Apply generously from mid-lengths to ends (avoid roots).',
      'Comb through with a wide-tooth comb to distribute evenly.',
      'Leave for 1–3 minutes (or up to 10 for deep treatment).',
      'Rinse thoroughly with cool water to seal the cuticle.'
    ],
    visual: { type: 'bottle', bg: 'linear-gradient(145deg,#f0ede8,#e4dcd4)', capColor: 'linear-gradient(180deg,#e8e4e0,#d0ccc8)', bodyGradient: 'linear-gradient(180deg,#e8e4de 0%,#ccc6be 100%)', labelText: 'Botanical<br>Conditioner', labelDark: true },
    related: ['botanical-shampoo', 'nourishing-hair-mask', 'revive-scalp-oil']
  },

  'nourishing-hair-mask': {
    id: 'nourishing-hair-mask',
    name: 'Nourishing Hair Mask',
    subtitle: 'Intensive Repair Mask',
    category: 'Haircare', categorySlug: 'haircare',
    price: 180, sizes: null,
    rating: 4.9, reviewCount: 27,
    shortDesc: 'Intensive 3-in-1 hair mask with shea and marula. Deep conditions, repairs and adds shine.',
    longDesc: 'The Nourishing Hair Mask is a 3-in-1 deep treatment that conditions, repairs and adds brilliant shine in one step. A rich blend of shea butter, marula oil and quinoa protein penetrates the hair shaft to restore elasticity, reduce breakage and leave hair impossibly soft. The ultimate weekly treat for dry, damaged or over-processed hair.',
    benefits: [
      'Intensive repair for dry and damaged hair',
      'Dramatically improves softness and manageability',
      'Reduces breakage and split ends',
      'Works as a pre-shampoo treatment or conditioner',
      'Suitable for all hair types — especially coily and textured hair'
    ],
    ingredients: [
      { name: 'Shea Butter', role: 'Deep nourishment. Seals moisture and reduces frizz.' },
      { name: 'Marula Oil', role: 'Lightweight luxury oil. Adds shine and softness.' },
      { name: 'Quinoa Protein', role: 'Structural repair. Fills in cracks along the hair shaft.' },
      { name: 'Avocado Oil', role: 'Penetrates deep — conditions from within.' },
      { name: 'Coconut Milk', role: 'Rich in fatty acids. Nourishes and strengthens.' },
      { name: 'Argan Oil', role: 'Tames frizz and adds mirror-shine finish.' }
    ],
    howToUse: [
      'Apply generously to clean, damp hair from roots to ends.',
      'Cover with a shower cap and leave for 20–30 minutes.',
      'For intensive treatment: apply heat with a warm towel or hair cap.',
      'Rinse thoroughly. Style as normal.',
      'Use once or twice weekly for best results.'
    ],
    visual: { type: 'jar', bg: 'linear-gradient(145deg,#e8e4d4,#d8d0c0)', capColor: 'linear-gradient(180deg,#c8c0a8,#a8a090)', bodyGradient: 'linear-gradient(145deg,#e8e0cc,#d0c8b0)', labelText: 'Hair<br>Mask', labelDark: true },
    related: ['botanical-shampoo', 'botanical-conditioner', 'revive-scalp-oil']
  },

  'charcoal-mint-bar': {
    id: 'charcoal-mint-bar',
    name: 'Charcoal Mint Facial Bar',
    subtitle: 'Deep Cleansing Facial Soap',
    category: 'Soaps & Bars', categorySlug: 'soaps',
    price: 70, sizes: null,
    rating: 4.8, reviewCount: 45,
    shortDesc: 'Activated charcoal facial bar with refreshing mint. Draws out impurities and unclogs pores.',
    longDesc: 'Charcoal Mint Facial Bar harnesses the powerful adsorption properties of activated charcoal to draw out impurities, excess oil and environmental toxins from deep within your pores. Combined with cooling peppermint, it leaves skin feeling thoroughly clean, refreshed and visibly clearer. Cold-pressed and hand-poured in small batches.',
    benefits: [
      'Deep cleanses pores and removes blackheads',
      'Absorbs excess oil — ideal for oily/combination skin',
      'Leaves a cooling, refreshed sensation',
      'Gentle enough for daily use',
      'Cold-process — preserves all natural glycerin'
    ],
    ingredients: [
      { name: 'Activated Charcoal', role: 'Draws out toxins and unclogs pores.' },
      { name: 'Peppermint Oil', role: 'Cooling, antimicrobial and refreshing.' },
      { name: 'Shea Butter', role: 'Prevents over-drying — keeps skin soft.' },
      { name: 'Coconut Oil', role: 'Natural cleanser and lather booster.' },
      { name: 'Castor Oil', role: 'Rich lather and conditioning.' },
      { name: 'Kaolin Clay', role: 'Gentle exfoliation and oil absorption.' }
    ],
    howToUse: [
      'Wet face with warm water to open pores.',
      'Lather bar between hands or directly on face.',
      'Massage gently in circular motions for 30–60 seconds.',
      'Rinse thoroughly with cool water.',
      'Follow with your favourite B-Real facial oil or moisturiser.',
      'Use daily or every other day.'
    ],
    visual: { type: 'bar', bg: 'linear-gradient(145deg,#3a3a3a,#1e1e1e)', capColor: null, bodyGradient: 'linear-gradient(145deg,#3a3a3a,#1e1e1e)', labelText: 'Charcoal<br>Mint', labelDark: false },
    related: ['bentonite-clay-bar', 'sandalwood-bar', 'spot-control']
  },

  'bentonite-clay-bar': {
    id: 'bentonite-clay-bar',
    name: 'Bentonite Clay Facial Bar',
    subtitle: 'Pore-Purifying Facial Soap',
    category: 'Soaps & Bars', categorySlug: 'soaps',
    price: 75, sizes: null,
    rating: 4.7, reviewCount: 31,
    shortDesc: 'Purifying bentonite clay bar. Tightens pores, balances oily skin and draws out impurities.',
    longDesc: 'Bentonite Clay Facial Bar uses one of nature\'s most powerful detoxifying minerals to pull impurities, heavy metals and excess oil from skin. The clay creates a gentle vacuum effect on pores, visibly tightening them over time. Enriched with kaolin clay and soothing botanicals, it leaves skin balanced, clear and refined.',
    benefits: [
      'Visibly tightens and minimises pores',
      'Balances oily and acne-prone skin',
      'Detoxifies with natural mineral clay',
      'Gentle physical exfoliation',
      'Suitable for sensitive and reactive skin'
    ],
    ingredients: [
      { name: 'Bentonite Clay', role: 'Powerful detoxifier that draws out impurities from pores.' },
      { name: 'Kaolin Clay', role: 'Gentle exfoliant that refines skin texture.' },
      { name: 'Tea Tree Oil', role: 'Antimicrobial. Prevents bacterial buildup in pores.' },
      { name: 'Jojoba Beads', role: 'Smooth exfoliation without micro-tears.' },
      { name: 'Shea Butter', role: 'Counterbalances drying effects of clay.' },
      { name: 'Coconut Oil', role: 'Cleansing and lather base.' }
    ],
    howToUse: [
      'Wet face with warm water.',
      'Work the bar into a lather and apply to face.',
      'Leave lather on skin for 30 seconds before rinsing for a clay mask effect.',
      'Rinse thoroughly and pat dry.',
      'Use 3–4 times per week, or daily for oily skin types.'
    ],
    visual: { type: 'bar', bg: 'linear-gradient(145deg,#c8b090,#a8906a)', capColor: null, bodyGradient: 'linear-gradient(145deg,#d4a870,#b08850)', labelText: 'Bentonite<br>Clay', labelDark: false },
    related: ['charcoal-mint-bar', 'sandalwood-bar', 'aloe-ferox-gel']
  },

  'sandalwood-bar': {
    id: 'sandalwood-bar',
    name: 'Sandalwood Charcoal Bar',
    subtitle: 'Warm & Deeply Cleansing Soap',
    category: 'Soaps & Bars', categorySlug: 'soaps',
    price: 70, sizes: null,
    rating: 4.9, reviewCount: 38,
    shortDesc: 'Warming sandalwood and charcoal soap for deep, thorough cleansing with an earthy scent.',
    longDesc: 'Sandalwood Charcoal Bar combines the grounding warmth of sandalwood essential oil with the deep-cleansing power of activated charcoal. An earthy, luxurious soap that feels like a spa treatment — cleansing thoroughly while leaving skin soft, subtly scented and deeply refreshed. Loved by all skin types, particularly dry and mature skin.',
    benefits: [
      'Gently detoxifies with activated charcoal',
      'Warm sandalwood scent with aromatherapeutic benefits',
      'Rich in skin-softening plant butters',
      'Leaves skin smooth and gently fragrant',
      'Suitable for face and body'
    ],
    ingredients: [
      { name: 'Sandalwood Oil', role: 'Grounding, anti-ageing and skin-soothing.' },
      { name: 'Activated Charcoal', role: 'Deep cleansing and pore purification.' },
      { name: 'Cocoa Butter', role: 'Luxurious emollient. Softens and conditions.' },
      { name: 'Shea Butter', role: 'Moisture retention and skin barrier support.' },
      { name: 'Olive Oil', role: 'Rich, nourishing base oil.' },
      { name: 'Frankincense', role: 'Anti-ageing and skin cell regenerating.' }
    ],
    howToUse: [
      'Use on face and/or body with warm water.',
      'Lather between hands or directly on skin.',
      'Massage gently and rinse thoroughly.',
      'Pat dry and follow with your favourite oil or moisturiser.',
      'Use daily or as needed.'
    ],
    visual: { type: 'bar', bg: 'linear-gradient(145deg,#8B6040,#5c3a1e)', capColor: null, bodyGradient: 'linear-gradient(145deg,#9a7050,#6a4028)', labelText: 'Sandalwood<br>Charcoal', labelDark: false },
    related: ['charcoal-mint-bar', 'bentonite-clay-bar', 'moisture-boost']
  },

  'lavender-soap': {
    id: 'lavender-soap',
    name: 'Lavender Facial Soap',
    subtitle: 'Calming Facial Cleanser',
    category: 'Soaps & Bars', categorySlug: 'soaps',
    price: 65, sizes: null,
    rating: 4.8, reviewCount: 29,
    shortDesc: 'Gentle lavender soap that soothes sensitive skin, promotes calm and cleanses delicately.',
    longDesc: 'Lavender Facial Soap is the most gentle of our soap range — perfect for sensitive, reactive or mature skin. Pure lavender essential oil delivers powerful calming and antibacterial benefits while the rich coconut and olive oil base cleanses without irritation. Ideal for those who\'ve struggled with harsh commercial soaps.',
    benefits: [
      'Specially formulated for sensitive and reactive skin',
      'Calming lavender promotes relaxation',
      'Gentle enough for nightly use',
      'High glycerin content from cold-process method',
      'No artificial fragrance or colourants'
    ],
    ingredients: [
      { name: 'Lavender Essential Oil', role: 'Calming, antibacterial and skin-soothing.' },
      { name: 'Coconut Oil', role: 'Gentle cleansing and lather.' },
      { name: 'Olive Oil', role: 'Rich and conditioning. Suitable for sensitive skin.' },
      { name: 'Shea Butter', role: 'Nourishing and barrier-supporting.' },
      { name: 'Chamomile Extract', role: 'Anti-inflammatory and calming.' },
      { name: 'Natural Glycerin', role: 'Humectant. Keeps skin soft after cleansing.' }
    ],
    howToUse: [
      'Wet face with lukewarm water.',
      'Lather gently between hands and apply to face.',
      'Rinse thoroughly. Avoid eye area.',
      'Pat dry gently — do not rub sensitive skin.',
      'Follow with a lightweight moisturiser or facial oil.',
      'Use morning and/or evening.'
    ],
    visual: { type: 'bar', bg: 'linear-gradient(145deg,#c8b8e0,#a898c8)', capColor: null, bodyGradient: 'linear-gradient(145deg,#b8a8d8,#9888c0)', labelText: 'Lavender<br>Soap', labelDark: false },
    related: ['charcoal-mint-bar', 'aloe-ferox-gel', 'moisture-boost']
  },

  'mystic-foot-cream': {
    id: 'mystic-foot-cream',
    name: 'Mystic Foot Repair Cream',
    subtitle: 'Intensive Heel & Foot Cream',
    category: 'Body', categorySlug: 'body',
    price: 120, sizes: null,
    rating: 4.9, reviewCount: 62,
    shortDesc: 'Intensive heel and foot repair cream with rich plant butters. Transforms cracked heels overnight.',
    longDesc: 'Mystic Foot Repair Cream is an intensive treatment formulated specifically for cracked heels, calluses and rough feet. A concentrated blend of shea butter, urea and tea tree oil softens even the toughest skin while fighting odour and infection. Many customers see results after a single overnight treatment. A staple for dry South African summers.',
    benefits: [
      'Transforms cracked heels in as little as one application',
      'Deeply softens calluses and rough patches',
      'Antibacterial — prevents and treats foot odour and fungal issues',
      'Long-lasting moisture — no greasy residue',
      'Safe for diabetic skin'
    ],
    ingredients: [
      { name: 'Shea Butter', role: 'Deeply softening and healing for cracked skin.' },
      { name: 'Urea 10%', role: 'Breaks down hard, thickened skin safely.' },
      { name: 'Tea Tree Oil', role: 'Antifungal and antibacterial.' },
      { name: 'Peppermint Oil', role: 'Cooling and deodorising.' },
      { name: 'Cocoa Butter', role: 'Forms a protective barrier over repaired skin.' },
      { name: 'Aloe Ferox', role: 'Soothes and accelerates skin healing.' }
    ],
    howToUse: [
      'Wash and dry feet thoroughly before applying.',
      'Apply generously to heels and any rough areas.',
      'For best results: apply at night and cover with cotton socks.',
      'Wash off in the morning — feet will feel transformed.',
      'Use daily until heels are healed, then 2–3 times weekly for maintenance.'
    ],
    visual: { type: 'tube', bg: 'linear-gradient(145deg,#f0e8e0,#e4d8cc)', capColor: 'linear-gradient(180deg,#d8d0c0,#c0b8a8)', bodyGradient: 'linear-gradient(180deg,#e8dfc4 0%,#d0c4a0 100%)', labelText: 'Foot<br>Repair', labelDark: true },
    related: ['nourishing-hair-mask', 'lavender-soap', 'aloe-ferox-gel']
  },

  'natural-lip-balm': {
    id: 'natural-lip-balm',
    name: 'Natural Lip Balm',
    subtitle: 'Moisturising Lip Treatment',
    category: 'Lip Care', categorySlug: 'lip-care',
    price: 45, sizes: null,
    rating: 4.8, reviewCount: 74,
    shortDesc: 'Moisturising lip balm made with beeswax and natural plant oils. Soft, healing lips all day.',
    longDesc: 'Natural Lip Balm is a simple, honest formulation that does exactly what lips need — long-lasting moisture, protection from the elements and gentle healing. Made with beeswax, shea butter and a blend of nourishing plant oils, it glides on smoothly and stays on without feeling sticky or heavy. Our bestselling multipurpose balm.',
    benefits: [
      'Provides all-day moisture without reapplication',
      'Heals chapped and cracked lips',
      'Forms a protective barrier against wind and cold',
      'No petroleum, synthetic waxes or artificial flavour',
      'Can be used on cuticles and dry patches too'
    ],
    ingredients: [
      { name: 'Beeswax', role: 'Forms a protective barrier and holds moisture in.' },
      { name: 'Shea Butter', role: 'Deeply nourishing and healing.' },
      { name: 'Sweet Almond Oil', role: 'Emollient base — softens and conditions.' },
      { name: 'Vitamin E', role: 'Antioxidant. Promotes lip healing.' },
      { name: 'Coconut Oil', role: 'Antimicrobial and deeply moisturising.' },
      { name: 'Vanilla Extract', role: 'Natural flavour and antioxidant.' }
    ],
    howToUse: [
      'Apply directly to lips as needed throughout the day.',
      'Use as a nightly treatment before bed for intensive healing.',
      'Apply to dry cuticles or rough patches on skin.',
      'Can be layered under lipstick as a moisturising base.',
      'Store below 30°C to maintain consistency.'
    ],
    visual: { type: 'stick', bg: 'linear-gradient(145deg,#f8f0e8,#f0e4d4)', capColor: 'linear-gradient(180deg,#e8c890,#c8a860)', bodyGradient: 'linear-gradient(180deg,#f0d4b0 0%,#d4a870 100%)', labelText: 'Lip<br>Balm', labelDark: true },
    related: ['moisture-boost', 'aloe-ferox-gel', 'mystic-foot-cream']
  }

};

/* Map product IDs used in shop.html to BREAL_PRODUCTS keys */
var PRODUCT_ID_MAP = {
  'moisture-boost': 'moisture-boost',
  'spot-control': 'spot-control',
  'glow': 'glow',
  'aloe-ferox-gel': 'aloe-ferox-gel',
  'revive-scalp-oil': 'revive-scalp-oil',
  'botanical-shampoo': 'botanical-shampoo',
  'botanical-conditioner': 'botanical-conditioner',
  'nourishing-hair-mask': 'nourishing-hair-mask',
  'charcoal-mint-bar': 'charcoal-mint-bar',
  'bentonite-clay-bar': 'bentonite-clay-bar',
  'sandalwood-bar': 'sandalwood-bar',
  'lavender-soap': 'lavender-soap',
  'mystic-foot-cream': 'mystic-foot-cream',
  'natural-lip-balm': 'natural-lip-balm'
};
