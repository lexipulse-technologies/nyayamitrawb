with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/components/DocumentDrafterModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the dead Step 3 block
start_marker = "{/* STEP 3: RAZORPAY STANDARD LIVE CHECKOUT (With 5-Minute Timer) */}"
end_marker = "{/* STEP 4: DOWNLOADS (Word Format Completely Removed) */}"

start_pos = content.find(start_marker)
if start_idx < 0:
    print("Could not find start of Step 3 block")
else:
    end_idx = content.find(end_marker, start_idx)
    if end_idx < 0:
        print("Could not find end of Step 3 block")
    else:
        # Remove from start_idx to end_idx (inclusive of start, exclusive of end_marker start)
        new_content = content[:start_idx] + content[end_idx:]
        with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/components/DocumentDrafterModal.tsx', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Removed dead Step 3 block. Removed {end_idx - start_idx} characters.")
        print(f"Old length: {len(content)}, New length: {len(new_content)}")