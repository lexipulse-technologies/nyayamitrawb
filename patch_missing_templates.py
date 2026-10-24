with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def add_content_controls(content, template_id, product_category, eligibility_questions, evidence_items, optional_clauses, not_applicable_text, source_url, workflow_mappings):
    tmpl_start = content.find("'" + template_id + "': {")
    if tmpl_start < 0:
        print("Template " + template_id + " not found")
        return content
    specific_fields_end = content.find("\n    ]\n  },", tmpl_start)
    if specific_fields_end < 0:
        print("Could not find closing for " + template_id)
        return content
    
    eligibility_json = ",\n    eligibilityGate: [\n"
    for i, eq in enumerate(eligibility_questions):
        options_json = ""
        for j, opt in enumerate(eq['options']):
            reason_str = ""
            if opt.get('reason'):
                reason_str = f",\n              reason: {{ en: '{opt['reason']['en']}', bn: '{opt['reason']['bn']}', hi: '{opt['reason']['hi']}' }}"
            options_json += "          {\n            value: '" + opt['value'] + "',\n            label: { en: '" + opt['label']['en'] + "', bn: '" + opt['label']['bn'] + "', hi: '" + opt['label']['hi'] + "' },\n            eligible: " + str(opt['eligible']).lower() + reason_str + "\n          }"
            if j < len(eq['options']) - 1:
                options_json += ","
            options_json += "\n        "
        eligibility_json += f"""      {{
        question: {{
          en: '{eq['question']['en']}',
          bn: '{eq['question']['bn']}',
          hi: '{eq['question']['hi']}'
        }},
        options: [
{options_json}      }}
        ]"""
        if i < len(eligibility_questions) - 1:
            eligibility_json += ","
        eligibility_json += "\n      "
    
    evidence_json = ""
    for i, ei in enumerate(evidence_items):
        evidence_json += "      {{ key: '{0}', label: {{ en: '{1}', bn: '{2}', hi: '{3}' }}, required: {4} }}".format(
            ei['key'], ei['label']['en'], ei['label']['bn'], ei['label']['hi'], str(ei['required']).lower()
        )
        if i < len(evidence_items) - 1:
            evidence_json += ","
        evidence_json += "\n      "
    
    optional_json = ""
    for i, oc in enumerate(optional_clauses):
        optional_json += "      {{ key: '{0}', label: {{ en: '{1}', bn: '{2}', hi: '{3}' }}, defaultChecked: {4} }}".format(
            oc['key'], oc['label']['en'], oc['label']['bn'], oc['label']['hi'], str(oc['defaultChecked']).lower()
        )
        if i < len(optional_clauses) - 1:
            optional_json += ","
        optional_json += "\n      "
    
    workflow_json = ""
    for i, wm in enumerate(workflow_mappings):
        workflow_json += "      {{ categoryId: '{0}', subcategoryId: '{1}' }}".format(wm['categoryId'], wm['subcategoryId'])
        if i < len(workflow_mappings) - 1:
            workflow_json += ","
        workflow_json += "\n      "
    
    new_block = """    productCategory: '{0}',
    eligibilityGate: {1}
    ],
    evidenceChecklist: [
{2}
    ],
    optionalClauses: [
{3}
    ],
    notApplicableExplanation: {{
      en: '{4}',
      bn: '{5}',
      hi: '{6}'
    }},
    sourceVersionCheckedDate: {{
      version: '1.0',
      checkedOn: '2026-10-17',
      source: '{7}'
    }},
    counselApprovalStatus: {{
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: ''
    }},
    workflowMapping: [
{8}
    ]
  },""".format(
        product_category,
        eligibility_json.rstrip(),
        evidence_json,
        optional_json,
        not_applicable_text['en'],
        not_applicable_text['bn'],
        not_applicable_text['hi'],
        source_url,
        workflow_json
    )
    
    new_content = content[:specific_fields_end + len("\n    ]")] + "\n" + new_block + content[specific_fields_end + len("\n    ]"):]
    return new_content

# DOC-27-WBPT - Emergency Utility Restoration
content = add_content_controls(
    content,
    'DOC-27-WBPT',
    'paid',
    [
        {
            'question': {
                'en': 'Was electricity, water, or drainage connection unlawfully disconnected by the landlord?',
                'bn': 'বাড়িওয়ালা অন্যায়ভাবে বিদ্যুৎ/জল বা ড্রেনেজ সংযোগ কেটে দিয়েছেন কি?',
                'hi': 'क्या मकान मालिक ने बिजली/पानी/नालेज कनेक्शन अवैध रूप से काट दिया है?'
            },
            'options': [
                {'value': 'yes', 'label': {'en': 'Yes, unlawfully disconnected', 'bn': 'হ্যাঁ, অন্যায়ভাবে কাটা হয়েছে', 'hi': 'हां, अवैध रूप से काट दिया गया है'}, 'eligible': True},
                {'value': 'no', 'label': {'en': 'No, not disconnected', 'bn': 'না, কাটা হয়নি', 'hi': 'नहीं, नहीं काटा गया है'}, 'eligible': False, 'reason': {'en': 'Section 27 WBPT Act applies only when landlord unlawfully disconnects essential services.', 'bn': 'ধারা ২৭ ডব্লুবিপিটিএ শুধুমাত্র প্রযোজ্য যখন বাড়িওয়ালা অন্যায়ভাবে প্রয়োজনীয় সেবা কেটে দেন।', 'hi': 'धारा 27 डब्ल्यूबीपीटी अधिनियम केवल तब लागू होता है जब मकान मालिक आवश्यक सेवाओं को अवैध रूप से काटता है।'}}
            ]
        }
    ],
    [
        {'key': 'disconnection_proof', 'label': {'en': 'Proof of disconnection', 'bn': 'সংযোগ কাটার প্রমাণ', 'hi': 'कटौती का प्रमाण'}, 'required': True},
        {'key': 'tenant_proof', 'label': {'en': 'Tenancy proof', 'bn': 'ভাড়া চুক্তির প্রমাণ', 'hi': 'किरायेदारी का प्रमाण'}, 'required': True},
        {'key': 'sender_proof', 'label': {'en': 'Sender identity proof', 'bn': 'প্রেরকের পরিচয়পত্র', 'hi': 'प्रेषक का पहचान पत्र'}, 'required': True}
    ],
    [
        {'key': 'immediate_restoration', 'label': {'en': 'Demand immediate restoration', 'bn': 'অবিলম্বে সংযোগ চালুর দাবি', 'hi': 'तत्काल बहाली की मांग'}, 'defaultChecked': True},
        {'key': 'compensation', 'label': {'en': 'Claim compensation for inconvenience', 'bn': 'অসুবিধার ক্ষতিপূরণ দাবি', 'hi': 'असुविधा का क्षतिपूर्ति दावा'}, 'defaultChecked': False}
    ],
    {
        'en': 'Section 27 WBPT Act does not apply if: (a) essential service not unlawfully disconnected, (b) premises not covered under WBPT Act, or (c) disconnection was for non-payment of dues.',
        'bn': 'ধারা ২৭ ডব্লুবিপিটিএ প্রযোজ্য নয় যদি: (ক) প্রয়োজনীয় সেবা অন্যায়ভাবে কাটা হয়নি, (খ) প্রমিজেনস ডব্লুবিপিটিএ এর আওতায় না পড়ে, অথবা (গ) বকেয়া বিলের জন্য সংযোগ কাটা হয়েছে।',
        'hi': 'धारा 27 डब्ल्यूबीपीटी अधिनियम लागू नहीं होता यदि: (क) आवश्यक सेवा अवैध रूप से नहीं काटी गई, (ख) परिसर डब्ल्यूबीपीटी अधिनियम के अंतर्गत नहीं आता, या (ग) बकाया बिल के लिए कनेक्शन काटा गया।'
    },
    'West Bengal Premises Tenancy Act, 1997, Section 27',
    [
        {'categoryId': 'tenancy', 'subcategoryId': 'sub-tenancy-21'},
        {'categoryId': 'tenancy', 'subcategoryId': 'sub-tenancy-22'},
        {'categoryId': 'tenancy', 'subcategoryId': 'sub-tenancy-23'},
        {'categoryId': 'tenancy', 'subcategoryId': 'sub-tenancy-24'},
        {'categoryId': 'tenancy', 'subcategoryId': 'sub-tenancy-25'}
    ]
)

# DOC-18-RERA - Builder Delay
content = add_content_controls(
    content,
    'DOC-18-RERA',
    'paid',
    [
        {
            'question': {
                'en': 'Is the property under a RERA-registered project?',
                'bn': 'ফ্ল্যাটটি র'era-নিবন্ধিত প্রজেক্টের অন্তর্গত কি?',
                'hi': 'क्या फ्लैट रेरा-पंजीकृत परियोजना के अंतर्गत आता है?'
            },
            'options': [
                {'value': 'yes', 'label': {'en': 'Yes, RERA-registered', 'bn': 'হ্যাঁ, র'era-নিবন্ধিত', 'hi': 'हां, रेरा-पंजीकृत'}, 'eligible': True},
                {'value': 'no', 'label': {'en': 'No, not RERA-registered', 'bn': 'না, র'era-নিবন্ধিত নয়', 'hi': 'नहीं, रेरा-पंजीकृत नहीं है'}, 'eligible': False, 'reason': {'en': 'RERA applies only to registered real estate projects.', 'bn': 'র'era শুধুমাত্র নিবন্ধিত রিয়েল এস্টেট প্রজেক্টের জন্য প্রযোজ্য।', 'hi': 'रेरा केवल पंजीकृत रियल एस्टेट परियोजनाओं पर लागू होता है।'}}
            ]
        }
    ],
    [
        {'key': 'project_registration', 'label': {'en': 'WBRERA Project Registration Number', 'bn': 'র'era নিবন্ধন নম্বর', 'hi': 'रेरा पंजीकरण संख्या'}, 'required': True},
        {'key': 'sale_agreement', 'label': {'en': 'Agreement for Sale copy', 'bn': 'চুক্তি (অগ্রিম চুক্তি) এরperienced', 'hi': 'विक्रय अनुबंध की प्रति'}, 'required': True},
        {'key': 'payment_proof', 'label': {'en': 'Payment proof', 'bn': 'পেমেন্ট প্রমাণ', 'hi': 'भुगतान का प्रमाण'}, 'required': True},
        {'key': 'sender_proof', 'label': {'en': 'Sender identity proof', 'bn': 'প্রেরকের পরিচয়পত্র', 'hi': 'प्रेषक का पहचान पत्र'}, 'required': True}
    ],
    [
        {'key': 'interest_claim', 'label': {'en': 'Include SBI MCLR+2% interest claim', 'bn': 'এসবিআই এমসিএলআর+২% সুদের দাবি অন্তর্ভুক্ত করুন', 'hi': 'एसबीआई एमसीएलआर+2% ब्याज दावे को शामिल करें'}, 'defaultChecked': True},
        {'key': 'refund_claim', 'label': {'en': 'Include 100% refund claim', 'bn': 'শতকর্তি ফেরতের দাবি অন্তর্ভুক্ত করুন', 'hi': '100% वापसी दावे को शामिल करें'}, 'defaultChecked': False}
    ],
    {
        'en': 'RERA Section 18 applies only to registered real estate projects. Interest rate under WB RERA Rules 2021 Rule 17 is SBI prime lending rate + 2%, which varies over time.',
        'bn': 'র'era ধারা ১৮ শুধুমাত্র নিবন্ধিত রিয়েল এস্টেট প্রজেক্টের জন্য প্রযোজ্য। ডব্লিউবি র'era নিয়ম ২০২১ রুল ১৭ অনুযায়ী সুদের হার এসবিআই প্রাইম লেন্ডিং রেট+২%, যা সময়ের সাথে পরিবর্তিত হয়।',
        'hi': 'रेरा धारा 18 केवल पंजीकृत रियल एस्टेट परियोजनाओं पर लागू होती है। डब्ल्यूबी रेरा नियम 2021 नियम 17 के अनुसार ब्याज दर एसबीआई प्राइम लेंडिंग दर+2% है, जो समय के साथ परिवर्तित होती है।'
    },
    'Real Estate (Regulation and Development) Act, 2016, Sections 18-19; WB RERA Rules 2021 Rule 17',
    [
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-21'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-22'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-23'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-24'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-25'}
    ]
)

# DOC-35-CPA - Consumer Protection
content = add_content_controls(
    content,
    'DOC-35-CPA',
    'paid',
    [
        {
            'question': {
                'en': 'Is this a consumer dispute involving goods or services purchased for consideration?',
                'bn': 'কি এটি ক্রেতার জন্য ক্রয়কৃত পণ্য বা সেবার সাথে সম্পর্কিত ক্রেতা বিরোধ?',
                'hi': 'क्या यह किसी उपभोक्ता द्वारा क्रय किए गए माल या सेवाओं से संबंधित उपभोक्ता विवाद है?'
            },
            'options': [
                {'value': 'yes', 'label': {'en': 'Yes, consumer dispute', 'bn': 'হ্যাঁ, ক্রেতা বিরোধ', 'hi': 'हां, उपभोक्ता विवाद'}, 'eligible': True},
                {'value': 'no', 'label': {'en': 'No, not a consumer dispute', 'bn': 'না, ক্রেতা বিরোধ নয়', 'hi': 'नहीं, उपभोक्ता विवाद नहीं है'}, 'eligible': False, 'reason': {'en': 'Consumer Protection Act applies only to goods/services purchased for consideration.', 'bn': 'ক্রেতা সুরক্ষা আইন শুধুমাত্র মূল্যে ক্রয়কৃত পণ্য/সেবার জন্য প্রযোজ্য।', 'hi': 'उपभोक्ता संरक्षण अधिनियम केवल मूल्य पर क्रय किए गए माल/सेवाओं पर लागू होता है।'}}
            ]
        }
    ],
    [
        {'key': 'invoice_proof', 'label': {'en': 'Invoice/bill copy', 'bn': 'ইনভয়েস/বিলের प्रति', 'hi': 'बिल/रसीद की प्रति'}, 'required': True},
        {'key': 'payment_proof', 'label': {'en': 'Payment proof', 'bn': 'পেমেন্ট প্রমাণ', 'hi': 'भुगतान का प्रमाण'}, 'required': True},
        {'key': 'deficiency_proof', 'label': {'en': 'Proof of deficiency in service', 'bn': 'সেবা ত্রুটির প্রমাণ', 'hi': 'सेवा में कमी का प्रमाण'}, 'required': True},
        {'key': 'sender_proof', 'label': {'en': 'Sender identity proof', 'bn': 'প্রেরকের পরিচয়পত্র', 'hi': 'प्रेषक का पहचान पत्र'}, 'required': True}
    ],
    [
        {'key': 'refund_claim', 'label': {'en': 'Include refund claim', 'bn': 'ফেরতের দাবি অন্তর্ভুক্ত করুন', 'hi': 'वापसी दावे को शामिल करें'}, 'defaultChecked': True},
        {'key': 'compensation_claim', 'label': {'en': 'Include compensation claim', 'bn': 'ক্ষতিপূরণের দাবি অন্তর্ভুক্ত করুন', 'hi': 'क्षतिपूर्ति दावे को शामिल करें'}, 'defaultChecked': True},
        {'key': 'litigation_costs', 'label': {'en': 'Include litigation costs claim', 'bn': 'মামলার খরচের দাবি অন্তর্ভুক্ত করুন', 'hi': 'मुकदमेबाजी लागत दावे को शामिल करें'}, 'defaultChecked': False}
    ],
    {
        'en': 'Consumer Protection Act Section 35 does not require a mandatory pre-litigation notice. This is a voluntary demand notice before filing on e-Jagriti. Pecuniary jurisdiction: District Commission (up to ₹50 lakh), State Commission (₹50 lakh-₹2 crore), National Commission (above ₹2 crore).',
        'bn': 'ক্রেতা সুরক্ষা আইন ধারা ৩৫ ANN月発売前に mandatory pre-litigation notice. এই একটি voluntary demand notice before filing on e-Jagriti. Pecuniary jurisdiction: District Commission (up to ₹50 lakh), State Commission (₹50 lakh-₹2 crore), National Commission (above ₹2 crore).',
        'hi': 'उपभोक्ता संरक्षण अधिनियम धारा 35 पूर्व-मुकदमा नोटिस की बाध्यता नहीं डालती। यह ई-जागृति पर मामला दायर करने से पहले एक स्वैच्छिक मांग नोटिस है। मौद्रिक अधिकार क्षेत्र: जिला आयोग (50 लाख तक), राज्य आयोग (50 लाख-2 करोड़), राष्ट्रीय आयोग (2 करोड़ से ऊपर)।'
    },
    'Consumer Protection Act, 2019, Section 35; Consumer Protection (Jurisdiction) Rules, 2021',
    [
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-21'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-22'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-23'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-24'},
        {'categoryId': 'consumer', 'subcategoryId': 'sub-consumer-25'}
    ]
)

with open('C:/Users/Admin123/Downloads/Project/nyayamitra/src/utils/proDocumentTemplates.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated DOC-27-WBPT, DOC-18-RERA, DOC-35-CPA successfully")
PYEOF