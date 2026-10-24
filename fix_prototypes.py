with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 1449 (index 1448) is "  }" closing DOC-144-BNSS
# Line 1450 (index 1449) is "    workflowMapping: [" - broken, outside object
# Line 1028 (index 1027) is "    ]\n  }," - end of workflowMapping array
# Line 1029 (index 1028) is "  }," closing PRO_TEMPLATES

print(f"Line 1449 (index 1448): {repr(lines[1448])}")
print(f"Line 1450 (index 1449): {repr(lines[1449])}")
print(f"Line 1027 (index 1026): {repr(lines[1026])}")
print(f"Line 1028 (index 1027): {repr(lines[1027])}")

# Remove lines 1450-1028 (indices 1449-1027)
new_lines = lines[:1449] + lines[1027:]

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w') as f:
    f.writelines(new_lines)

print(f"Removed lines 1450-1028. New length: {len(new_lines)} lines (was {len(lines)})")