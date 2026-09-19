import re

file_path = r'd:\Project\BizCopilot-Client\src\ui\features\offers\create-offer\mobile\create-offer-mobile.component.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <div class="back-icon"></div> with <span class="material-symbols-outlined back-icon">arrow_back</span>
content = content.replace('<div class="back-icon"></div>', '<span class="material-symbols-outlined back-icon">arrow_back</span>')

# Regex to match: <div class="svg-icon [optional classes]" style="-webkit-mask-image: url('/assets/icons/[folder]/[icon].svg'); mask-image: ..."></div>
pattern = r'<div class="svg-icon(.*?)" style="-webkit-mask-image: url\(''(?:/assets/icons/(?:.*?/)?(.*?)\.svg)''\); .*?"></div>'
# Replace with <span class="material-symbols-outlined$1">$2</span>
content = re.sub(pattern, r'<span class="material-symbols-outlined\1">\2</span>', content)

# Check if there are still any mask-image around
pattern2 = r'<div class="svg-icon(.*?)" style="-webkit-mask-image: url\(&apos;(?:/assets/icons/(?:.*?/)?(.*?)\.svg)&apos;\); .*?"></div>'
content = re.sub(pattern2, r'<span class="material-symbols-outlined\1">\2</span>', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced successfully")
