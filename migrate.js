const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'src');

const colorMap = {
  "#5B3BEB": "var(--color-primary, #5B3BEB)",
  "#4B2DC7": "var(--color-primary-hover, #4B2DC7)",
  "#4C31C4": "var(--color-primary-hover, #4C31C4)",
  "#7C3AED": "var(--color-primary-hover, #7C3AED)",
  "#4C1D95": "var(--color-primary-dark, #4C1D95)",
  "#312E81": "var(--color-primary-dark, #312E81)",
  "#E9D5FF": "var(--color-primary-subtle, #E9D5FF)",
  "#F3E8FF": "var(--color-primary-bg, #F3E8FF)",
  "#E0E7FF": "var(--color-primary-bg, #E0E7FF)",
  "#111827": "var(--color-text-primary, #111827)",
  "#101828": "var(--color-text-primary, #101828)",
  "#374151": "var(--color-text-secondary, #374151)",
  "#344054": "var(--color-text-secondary, #344054)",
  "#4B5563": "var(--color-text-secondary, #4B5563)",
  "#667085": "var(--color-text-muted, #667085)",
  "#6B7280": "var(--color-text-secondary, #6B7280)",
  "#9CA3AF": "var(--color-text-muted, #9CA3AF)",
  "#FFFFFF": "var(--color-surface, #FFFFFF)",
  "#fff": "var(--color-surface, #FFFFFF)",
  "#F9FAFB": "var(--color-surface-hover, #F9FAFB)",
  "#F3F4F6": "var(--color-bg-canvas, #F3F4F6)",
  "#F5F6FC": "var(--color-bg-canvas, #F5F6FC)",
  "#EAECEF": "var(--color-border, #EAECEF)",
  "#EAECF0": "var(--color-border, #EAECF0)",
  "#E5E7EB": "var(--color-border-strong, #E5E7EB)",
  "#E2E8F0": "var(--color-border-strong, #E2E8F0)",
  "#D1D5DB": "var(--color-border-strong, #D1D5DB)",
  "#CBD5E1": "var(--color-border-strong, #CBD5E1)",
  "#16A34A": "var(--color-success, #16A34A)",
  "#10B981": "var(--color-success, #10B981)",
  "#166534": "var(--color-success-text, #166534)",
  "#DCFCE7": "var(--color-success-bg, #DCFCE7)",
  "#D1FAE5": "var(--color-success-bg, #D1FAE5)",
  "#E2F5EA": "var(--color-success-bg, #E2F5EA)",
  "#ECFDF5": "var(--color-success-bg, #ECFDF5)",
  "#A7F3D0": "var(--color-success-bg, #A7F3D0)",
  "#DC2626": "var(--color-error, #DC2626)",
  "#EF4444": "var(--color-error, #EF4444)",
  "#B91C1C": "var(--color-error-text, #B91C1C)",
  "#991B1B": "var(--color-error-text, #991B1B)",
  "#FEE2E2": "var(--color-error-bg, #FEE2E2)",
  "#FEF2F2": "var(--color-error-bg, #FEF2F2)",
  "#D97706": "var(--color-warning, #D97706)",
  "#F59E0B": "var(--color-warning, #F59E0B)",
  "#92400E": "var(--color-warning-text, #92400E)",
  "#FEF3C7": "var(--color-warning-bg, #FEF3C7)",
  "#2563EB": "var(--color-info, #2563EB)",
  "#1D4ED8": "var(--color-info, #1D4ED8)",
  "#3B82F6": "var(--color-info, #3B82F6)",
  "#DBEAFE": "var(--color-info-bg, #DBEAFE)"
};

const fontMap = {
  "10px": "var(--font-xs)",
  "11px": "var(--font-xs)",
  "0.6875rem": "var(--font-xs)",
  "12px": "var(--font-sm)",
  "0.75rem": "var(--font-sm)",
  "13px": "var(--font-sm)",
  "14px": "var(--font-base)",
  "0.875rem": "var(--font-base)",
  "15px": "var(--font-base)",
  "16px": "var(--font-md)",
  "1rem": "var(--font-md)",
  "18px": "var(--font-lg)", // closest
  "20px": "var(--font-lg)",
  "1.25rem": "var(--font-lg)",
  "24px": "var(--font-xl)",
  "1.5rem": "var(--font-xl)",
  "26px": "var(--font-xl)",
  "28px": "var(--font-2xl)",
  "1.75rem": "var(--font-2xl)",
  "30px": "var(--font-3xl)",
  "32px": "var(--font-3xl)",
  "2rem": "var(--font-3xl)",
  "40px": "var(--font-3xl)",
  "48px": "var(--font-3xl)",
  "64px": "var(--font-3xl)",
  "80px": "var(--font-3xl)"
};

const radiusMap = {
  "8px": "var(--radius-nav-item, 8px)", // using nearest token
  "12px": "var(--radius-input, 12px)",
  "16px": "var(--radius-key, 12px)", // no exact match
  "20px": "var(--radius-card, 24px)",
  "24px": "var(--radius-card, 24px)"
};

const rgbaMap = [
  { regex: /rgba\(\s*91\s*,\s*59\s*,\s*235\s*,\s*0\.0[58]\s*\)/g, replacement: "var(--color-primary-light)" },
  { regex: /rgba\(\s*91\s*,\s*59\s*,\s*235\s*,\s*0\.1\s*\)/g, replacement: "var(--color-primary-light)" },
  { regex: /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.0[35]\s*\)/g, replacement: "var(--shadow-card)" },
  { regex: /rgba\(\s*15\s*,\s*23\s*,\s*42\s*,\s*0\.35\s*\)/g, replacement: "var(--color-overlay)" },
  { regex: /rgba\(\s*220\s*,\s*38\s*,\s*38\s*,\s*0\.05\s*\)/g, replacement: "var(--color-error-bg)" }
];

function processFile(filePath) {
  if (filePath.endsWith('_variables.scss') || filePath.endsWith('_themes.scss') || filePath.endsWith('_typography.scss')) {
    return; // Skip theme definition files
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace hex colors
  // Only replace hex if it's not already inside a var(--something, #hex) fallback
  // This Regex uses a negative lookbehind.
  const hexRegex = /(?<!var\([^,]+,\s*)#(?:[0-9a-fA-F]{3}){1,2}\b/g;
  content = content.replace(hexRegex, (match) => {
    const upperMatch = match.toUpperCase();
    if (colorMap[upperMatch]) {
      return colorMap[upperMatch];
    } else if (match === '#fff') {
      return colorMap['#FFFFFF'];
    }
    return match;
  });

  // 2. Replace rgba
  for (const { regex, replacement } of rgbaMap) {
    content = content.replace(regex, replacement);
  }

  // 3. Replace font sizes
  const fontRegex = /(font-size:\s*)([0-9.]+(?:px|rem))/g;
  content = content.replace(fontRegex, (match, prefix, size) => {
    if (fontMap[size]) {
      return prefix + fontMap[size];
    }
    return match;
  });

  // 4. Replace border radius
  const radiusRegex = /(border-radius:\s*)([0-9]+px)/g;
  content = content.replace(radiusRegex, (match, prefix, size) => {
    if (radiusMap[size]) {
      return prefix + radiusMap[size];
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.scss')) {
      processFile(filePath);
    }
  }
}

walkDir(rootDir);
console.log('Migration complete.');
