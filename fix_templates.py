with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

print("File loaded, length:", len(content))

# Check current state of DOC-18-RERA
idx = content.find("'DOC-18-RERA': {")
print("DOC-18-RERA found at:", idx)
if idx >= 0:
    # Find end of specificFields
    sf_end = content.find("\n    ]\n  },", idx)
    print("Specific fields end at:", sf_end)
    if sf_end > 0:
        print("Content at sf_end:", repr(content[sf_end:sf_end+50]))