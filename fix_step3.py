with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/components/DocumentDrafterModal.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = None
end_idx = None

for i, line in enumerate(lines):
    if '{/* STEP 3: RAZORPAY STANDARD LIVE CHECKOUT' in line:
        start_idx = i
    if start_idx is not None and '/* STEP 4: DOWNLOADS' in line:
        end_idx = i
        break

if start_idx is None or end_idx is None:
    print(f"Could not find boundaries: start={start_idx}, end={end_idx}")
else:
    print(f"Removing lines {start_idx+1} to {end_idx} (1-based)")
    new_content = content[:start_idx] + content[end_idx:]
    with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/components/DocumentDrafterModal.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed! Removed {end_idx - start_idx} lines. New length: {len(new_content)} lines (was {len(lines)})")