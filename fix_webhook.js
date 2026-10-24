with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the broken section: lines 1447-1450 have workflowMapping outside DOC-144-BNSS
# Find "'DOC-144-BNSS': {" then find the closing "}," after workflowMapping
start_idx = content.find("'DOC-144-BNSS': {")
if start_idx < 0:
    print("Could not find DOC-144-BNSS start")
else:
    print(f"Found DOC-144-BNSS start at {start_idx}")
    
    # Find the closing "  }," of DOC-144-BNSS object (after webhookMapping block)
    # The broken block is at lines 1447-1450 approximately
    # Find "workflowMapping: [" after start_idx
    wm_start = content.find("workflowMapping: [", start_idx)
    if wm_start >= 0:
        # Find the closing "  },\n" after workflowMapping array
        wm_end = content.find("\n  },\n", wm_start)
        if wm_end >= 0:
            print(f"Found workflowMapping block at {wm_start}, ends at {wm_end}")
            print(f"Content at wm_start: {repr(content[wm_start:wm_start+80])}")
            
            # Remove lines from wm_start to wm_end + len("\n  },\n")
            wm_end_with_comma = wm_end + len("\n  },\n")
            content = content[:wm_start] + content[wm_end_with_comma:]
            print(f"Removed broken workflowMapping block. New length: {len(content)}")
        else:
            print("Could not find end of workflowMapping array")
    else:
        print("workflowMapping not found after DOC-144-BNSS")

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done fixing DOC-144-BNSS")