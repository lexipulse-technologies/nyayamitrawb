with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find DOC-144-BNSS section
start_idx = content.find("'DOC-144-BNSS': {")
if start_idx < 0:
    print("DOC-144-BNSS not found")
else:
    print(f"Found DOC-144-BNSS start at {start_idx}")
    
    # Find where DOC-144-BNSS ends - look for next template
    next_template_start = content.find("'DOC-18-RERA': {", start_idx)
    if next_template_start < 0:
        print("Could not find DOC-18-RERA after DOC-144-BNSS")
    else:
        print(f"DOC-144-BNSS block ends at {next_template_start}")
        
        # Remove everything from start_idx to next_template_start
        new_content = content[:start_idx] + content[next_template_start:]
        print(f"Removed broken section. New length: {len(new_content)} (was {len(content)})")
        
        with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w') as f:
            f.write(new_content)
        print("Fixed!")