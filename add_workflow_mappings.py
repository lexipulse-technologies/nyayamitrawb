with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def add_workflow_mappings(content, template_id, category_prefix, start, end):
    """Add workflow mapping entries for a given category range."""
    
    # Find the template section
    tmpl_pattern = f"'{template_id}': {{"
    tmpl_start = content.find(tmpl_pattern)
    if tmpl_start < 0:
        print(f"Template {template_id} not found")
        return content
    
    # Find workflowMapping: [ within this template section
    wm_start = content.find("workflowMapping: [", tmpl_start)
    if wm_start < 0:
        print(f"workflowMapping not found for {template_id}")
        return content
    
    # Find the closing of this array
    array_start = wm_start + len("workflowMapping: [")
    brace_depth = 0
    array_end = -1
    for i in range(array_start, len(content)):
        if content[i] == '{':
            brace_depth += 1
        elif content[i] == '}':
            brace_depth -= 1
            if brace_depth == 0:
                array_end = i + 1
                break
    
    if array_end < 0:
        print(f"Could not find end of workflowMapping array for {template_id}")
        return content
    
    # Generate new entries
    new_entries = []
    for i in range(start, end + 1):
        new_entries.append(f'      {{ categoryId: \'{category_prefix}\', subcategoryId: \'sub-{category_prefix}-{i:02d}\' }},')
    
    new_entries_str = "\n".join(new_entries)
    
    # Replace the content
    new_content = content[:array_start] + "\n" + new_entries_str + "\n      " + content[array_start:]
    return new_content

# Apply mappings for each template:
content = add_workflow_mappings(content, 'DOC-06-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings(content, 'DOC-21-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings(content, 'DOC-27-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings(content, 'DOC-18-RERA', 'consumer', 1, 50)
content = add_workflow_mappings(content, 'DOC-35-CPA', 'consumer', 1, 50)
content = add_workflow_mappings(content, 'DOC-PARTITION', 'partition', 1, 50)
content = add_workflow_mappings(content, 'DOC-06-RTI', 'civil-land', 1, 50)
content = add_workflow_mappings(content, 'DOC-144-BNSS', 'family', 1, 50)
content = add_workflow_mappings(content, 'DOC-138-NI', 'money', 1, 50)
content = add_workflow_mappings(content, 'DOC-25-PSSA', 'money', 1, 50)

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added all missing workflow mappings to proDocumentTemplates.ts")
print("Summary:")
print("  DOC-06-WBPT: sub-tenancy-01 to 50")
print("  DOC-21-WBPT: sub-tenancy-01 to 50")
print("  DOC-27-WBPT: sub-tenancy-01 to 50")
print("  DOC-18-RERA: sub-consumer-01 to 50")
print("  DOC-35-CPA: sub-consumer-01 to 50")
print("  DOC-PARTITION: sub-partition-01 to 50")
print("  DOC-06-RTI: sub-land-01 to 50")
print("  DOC-144-BNSS: sub-family-01 to 50")
print("  DOC-138-NI: sub-money-01 to 50")
print("  DOC-25-PSSA: sub-money-01 to 50")