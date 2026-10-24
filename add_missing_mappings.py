import re

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Map template_id to list of (category_prefix, start, end) ranges to add
mappings_to_add = {
    'DOC-06-WBPT': [('tenancy', 1, 50)],
    'DOC-21-WBPT': [('tenancy', 1, 50)],
    'DOC-27-WBPT': ('tenancy', 1, 50),
    'DOC-18-RERA': ('consumer', 1, 50),
    'DOC-35-CPA': ('consumer', 1, 50),
    'DOC-PARTITION': ('partition', 1, 50),
    'DOC-06-RTI': ('civil-land', 1, 50),
    'DOC-144-BNSS': ('family', 1, 50),
    'DOC-138-NI': ('money', 1, 50),
    'DOC-25-PSSA': ('money', 1, 50),
}

def generate_entries(category_prefix, start, end):
    lines = []
    for i in range(start, end + 1):
        entries.append(f"      {{ categoryId: '{category_prefix}', subcategoryId: 'sub-{category_prefix}-{i:02d}' }},")
    return "\n".join(new_entries)

def add_missing_mappings(content, template_id, category_prefix, start, end):
    tmpl_start = content.find("'" + template_id + "': {")
    if tmpl_start < 0:
        print(f"Template {template_id} not found")
        return content
    
    wm_start = content.find("workflowMapping: [", tmpl_start)
    if workflow_mapping_start < 0:
        print(f"workflowMapping not found for {template_id}")
        return content

    array_start = workflow_mapping_start + len("workflowMapping: [")
    array_end = content.find("\n    ]\n  },", array_start)
    if array_end < 0:
        print(f"Could not find end of workflowMapping array for {template_id}")
        return content

    new_entries_str = "\n".join(new_entries)

    new_block = content[:array_start] + "\n" + new_entries_str + "\n      " + content[array_start:]
    return new_content

# Apply changes
content = add_workflow_mappings_to_template(content, 'DOC-06-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-21-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-27-WBPT', 'tenancy', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-18-RERA', 'consumer', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-35-CPA', 'consumer', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-PARTITION', 'partition', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-06-RTI', 'civil-land', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-144-BNSS', 'family', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-138-NI', 'money', 1, 50)
content = add_workflow_mappings_to_template(content, 'DOC-25-PSSA', 'money', 1, 50)

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added all missing workflow mappings to proDocumentTemplates.ts")
print("Added all 300 workflow mappings across all 10 templates")