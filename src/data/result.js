export function generateResults(answers) {
  const results = {};

  // ─── SCALP ───────────────────────────────────────────
  if (answers.Scalp === "Oily & Greasy") {
    results.scalp = {
      emoji: "🧴",
      title: "Oily Scalp",
      description: "Your scalp overproduces sebum, leading to greasiness, buildup, and sometimes yellowish sticky flakes at the roots — a common trigger for dandruff.",
      tips: [
        "Wash your hair once a week with a clarifying or balancing shampoo",
        "Focus shampoo on the scalp only — avoid applying it directly to your ends",
        "Avoid applying heavy oils or butters directly to your scalp",
        "Use lightweight scalp serums or toners between washes if needed"
      ]
    };
  } else if (answers.Scalp === "Dry & Flaky") {
    results.scalp = {
      emoji: "❄️",
      title: "Dry Scalp",
      description: "Your scalp lacks sufficient moisture, which causes tightness, itchiness, and visible white flakes. This is especially common in 4C hair due to the natural curl pattern making it harder for scalp oils to travel down the hair shaft.",
      tips: [
        "Wash every two weeks to avoid stripping your natural oils",
        "Use a sulphate-free, moisturising shampoo",
        "Apply a light scalp oil such as jojoba or tea tree oil between wash days",
        "Avoid washing with hot water — use lukewarm or cool water instead"
      ]
    };
  } else if (answers.Scalp === "Balanced") {
    results.scalp = {
      emoji: "✨",
      title: "Balanced Scalp",
      description: "Your scalp maintains a healthy moisture and oil balance — this is the ideal state, especially for 4C hair which tends to be prone to dryness.",
      tips: [
        "Continue your current wash routine as it is working well",
        "Wash once a week or once every two weeks depending on product buildup",
        "Use gentle, pH-balanced shampoos and conditioners",
        "Avoid over-washing, as this can disrupt your scalp's natural balance"
      ]
    };
  } else if (answers.Scalp === "Combination") {
    results.scalp = {
      emoji: "⚖️",
      title: "Combination Scalp",
      description: "Your roots tend to get oily while the lengths and ends remain dry. This is a common pattern in 4C hair and requires a targeted approach to cleansing.",
      tips: [
        "Apply shampoo directly to your roots and scalp only — allow the lather to rinse through the ends rather than scrubbing them",
        "Apply conditioner from mid-length to ends only, never on the scalp",
        "Wash once a week using a lightweight, balancing shampoo",
        "Avoid heavy product application near the scalp between washes"
      ]
    };
  }

  // ─── POROSITY ─────────────────────────────────────────
  if (answers.Porosity === "Absorbs Very Slowly") {
    results.porosity = {
      emoji: "💧",
      title: "Low Porosity",
      description: "Your hair cuticles lie flat and are tightly closed, making it difficult for moisture and products to penetrate the hair shaft. Many 4C naturals have low porosity hair, which can cause products to sit on top of the hair rather than absorbing.",
      tips: [
        "Always apply products to freshly washed, damp hair for better absorption",
        "Use heat when deep conditioning — a steamer, hooded dryer, or warm towel works well",
        "Choose lightweight, water-based moisturisers over heavy creams and butters",
        "Avoid products high in protein, as they can cause further buildup on low porosity hair"
      ]
    };
  } else if (answers.Porosity === "Absorbs Normally") {
    results.porosity = {
      emoji: "💦",
      title: "Normal Porosity",
      description: "Your hair absorbs and retains moisture at a healthy, balanced rate. This is the most manageable porosity level and responds well to a wide range of products.",
      tips: [
        "Deep condition regularly — every one to two weeks",
        "Most product types will work effectively for your hair",
        "Seal in moisture with a light oil after moisturising",
        "Avoid excessive chemical treatments or heat to maintain your porosity level"
      ]
    };
  } else if (answers.Porosity === "Absorbs Very Quickly") {
    results.porosity = {
      emoji: "🌊",
      title: "High Porosity",
      description: "Your hair cuticles are raised or have gaps, causing your hair to absorb moisture very quickly but lose it just as fast. High porosity is very common in 4C hair, particularly after heat damage, chemical processing, or excessive manipulation.",
      tips: [
        "Use the LOC method (Liquid, Oil, Cream) to lock moisture into your hair",
        "Incorporate regular protein treatments every four to six weeks to strengthen the hair shaft",
        "Always finish washing with a cool water rinse to help close the cuticles",
        "Use heavier creams, butters, and sealants to slow down moisture loss"
      ]
    };
  }

  // ─── DENSITY ──────────────────────────────────────────
  if (answers.Density === "Low Density") {
    results.density = {
      emoji: "🌿",
      title: "Low Density",
      description: "You have fewer hair strands overall, which gives your hair a lighter, finer appearance. With 4C curl patterns, low density hair can still look full due to shrinkage but may be more susceptible to breakage with heavy products.",
      tips: [
        "Use volumising or lightweight shampoos and conditioners",
        "Avoid heavy butters and thick creams that can weigh your hair down",
        "Try mousse or light gels for definition without weight",
        "Avoid excessive layering of products"
      ]
    };
  } else if (answers.Density === "Medium Density") {
    results.density = {
      emoji: "🌱",
      title: "Medium Density",
      description: "You have an average number of hair strands, which gives you a versatile foundation to work with. Medium density 4C hair responds well to most natural hair techniques.",
      tips: [
        "Most wash-and-go, twist-out, and braid-out techniques work well for you",
        "Maintain a balanced routine of moisture and protein",
        "Experiment freely with different protective styles",
        "Medium-hold creams and gels will give you the best results"
      ]
    };
  } else if (answers.Density === "High Density") {
    results.density = {
      emoji: "🌳",
      title: "High Density",
      description: "You have a high number of hair strands, giving your hair a full, voluminous appearance. High density 4C hair is beautiful but requires thorough product distribution and moisture to prevent dryness and tangling.",
      tips: [
        "Section your hair into four to six parts when washing and styling for even product distribution",
        "Use rich, deeply moisturising conditioners and leave-ins",
        "Deep condition every wash day to manage thickness and prevent dryness",
        "Always detangle gently with a wide-tooth comb or your fingers on wet, conditioned hair"
      ]
    };
  }

  // ─── STRAND THICKNESS ─────────────────────────────────
  if (answers["Strand Thickness"] === "Fine") {
    results.thickness = {
      emoji: "🪶",
      title: "Fine Strands",
      description: "Your individual hair strands are thin and delicate. Fine 4C hair is more susceptible to breakage and damage, especially from tension styles and excessive manipulation.",
      tips: [
        "Use lightweight, strengthening products that won't weigh strands down",
        "Avoid heavy oils and thick butters directly on your strands",
        "Minimise heat styling to reduce the risk of breakage",
        "Incorporate a protein treatment every six to eight weeks — if you also have low porosity, extend this to every eight weeks to avoid protein overload"
      ]
    };
  } else if (answers["Strand Thickness"] === "Medium") {
    results.thickness = {
      emoji: "🧵",
      title: "Medium Strands",
      description: "Your hair strands are of average thickness, offering a healthy balance of strength and flexibility. Medium strands are the most adaptable and generally respond well to a wide variety of 4C hair care practices.",
      tips: [
        "Most products formulated for natural hair will suit your strand thickness",
        "Keep a healthy balance between moisturising and protein treatments",
        "Schedule regular trims every eight to twelve weeks to maintain healthy ends",
        "Your strands can handle most protective and stretched styles without issue"
      ]
    };
  } else if (answers["Strand Thickness"] === "Coarse") {
    results.thickness = {
      emoji: "💪",
      title: "Coarse Strands",
      description: "Your individual hair strands are thick and strong. Coarse 4C hair tends to feel rough or dry and requires consistent deep moisture to stay soft and manageable.",
      tips: [
        "Use rich, deeply moisturising conditioners on every wash day",
        "Always apply a leave-in conditioner after washing to maintain softness",
        "Seal in moisture with heavier oils such as castor oil or shea butter",
        "Deep condition every wash day without exception"
      ]
    };
  }

  // ─── ELASTICITY ───────────────────────────────────────
  if (answers.Elasticity === "Snaps Quickly") {
    results.elasticity = {
      emoji: "⚠️",
      title: "Low Elasticity",
      description: "Your hair breaks with very little stretch, which indicates either a protein deficiency, a moisture deficiency, or both. This is a sign that your hair needs immediate attention to prevent further breakage.",
      tips: [
        "Introduce a protein treatment every six weeks — if you have low porosity hair, extend this to every eight weeks to prevent protein overload",
        "Always follow every protein treatment with a deep moisture treatment to restore softness",
        "Avoid excessive heat, tight styles, and chemical treatments until elasticity improves",
        "Handle your hair with extra care, particularly when it is wet, as this is when it is most vulnerable"
      ]
    };
  } else if (answers.Elasticity === "Stretches Slightly") {
    results.elasticity = {
      emoji: "🌟",
      title: "Medium Elasticity",
      description: "Your hair stretches a little before returning to its natural state, indicating a good balance of protein and moisture. This is a healthy sign for 4C hair.",
      tips: [
        "Maintain your current balance of protein and moisture treatments",
        "Alternate between a protein treatment and a deep moisturising treatment each wash day",
        "Protect your hair from environmental damage such as sun, wind, and friction",
        "Continue your current routine — it is clearly working well"
      ]
    };
  } else if (answers.Elasticity === "Very Stretchy") {
    results.elasticity = {
      emoji: "🎯",
      title: "High Elasticity",
      description: "Your hair stretches significantly and springs back without breaking — a sign of excellent hair health and strong internal structure. This is the ideal elasticity level.",
      tips: [
        "Prioritise regular deep conditioning to maintain this level of health",
        "Sleep with a satin or silk bonnet or pillowcase to reduce friction and retain moisture",
        "Avoid overusing protein treatments — your hair is thriving on moisture, so keep that as the focus",
        "Your hair can handle most styles and techniques — enjoy the versatility"
      ]
    };
  }

  return results;
}