// ===================================================
//  PawChef — AAFCO Dog Food Nutrient Compliance
//  Source: AAFCO Dog Food Nutrient Profiles (2016)
//  Values expressed per 1,000 kcal Metabolizable Energy
// ===================================================

const AAFCO_PROFILES = {

  adult: {
    name: 'Adult Maintenance',
    protein: { min: 45,   unit: 'g', label: 'Protein'   },
    fat:     { min: 13.8, unit: 'g', label: 'Total Fat'  },
  },

  puppy: {
    name: 'Growth & Reproduction (Puppy)',
    protein: { min: 56.3, unit: 'g', label: 'Protein'   },
    fat:     { min: 21.3, unit: 'g', label: 'Total Fat'  },
  },

};

// Map app life-stage → AAFCO profile
function getAafcoProfile(age) {
  return age === 'puppy' ? AAFCO_PROFILES.puppy : AAFCO_PROFILES.adult;
}

// ---- Main check ----
// nutrition = { calories, protein, fat, carbs, fiber, matched }
// Returns { compliant, profileName, checks, noData }
function checkAafcoCompliance(nutrition, age = 'adult') {
  const profile = getAafcoProfile(age);

  if (!nutrition || nutrition.calories < 10 || nutrition.matched === 0) {
    return { compliant: false, profileName: profile.name, checks: [], noData: true };
  }

  const scale = 1000 / nutrition.calories; // factor to reach per-1000-kcal basis

  const checks = ['protein', 'fat'].map(key => {
    const std    = profile[key];
    const actual = +(nutrition[key] * scale).toFixed(1);
    const pass   = actual >= std.min;
    const pct    = Math.min(Math.round((actual / std.min) * 100), 100);
    return { key, label: std.label, actual, min: std.min, unit: std.unit, pass, pct };
  });

  return {
    compliant:   checks.every(c => c.pass),
    profileName: profile.name,
    checks,
    noData: false,
  };
}
