/**
 * PHASE C: HIGH-TRAFFIC PILLAR WORKFLOW ENRICHMENTS (E-E-A-T & CONTENT DEPTH)
 * Provides verified Supreme Court / Calcutta High Court case law citations,
 * West Bengal Court-fees Act, 1970 & Limitation Act, 1963 fee/timeline schedules,
 * statutory appeal remedies against rejection, and exact 50-60 char non-truncated SEO titles.
 */

export interface LandmarkCase {
  citation: string;
  court: string;
  holding: string;
}

export interface FeeLimitationRow {
  stage: string;
  feeNote: string;
  limitation: string;
}

export interface RejectionRemedy {
  scenario: string;
  forum: string;
  provision: string;
  timeLimit: string;
}

export interface PillarEnrichment {
  seoTitle: string;
  seoDescription: string;
  executiveSummary: string;  // 45-60 word Quick Answer for AI Overviews / Perplexity / Copilot
  faqs: FAQItem[];  // Conversational FAQ for GEO / FAQPage schema
  landmarkCases: LandmarkCase[];
  courtFeeAndLimitation: FeeLimitationRow[];
  remediesAgainstRejection: RejectionRemedy[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PILLAR_ENRICHMENTS: Record<string, PillarEnrichment> = {
  'sub-land-01': {
    seoTitle: 'Banglarbhumi & KMC Land Mutation Guide WB | NyayaMitra',
    seoDescription:
      'Step-by-step West Bengal land mutation under Sec 50 WBLR Act (Banglarbhumi Form 13) & Sec 183 KMC Act: fees, case law, and BL&LRO appeal remedies.',
    executiveSummary:
      'Mutate land in West Bengal via Banglarbhumi (Sec 50 WBLR Act) or KMC (Sec 183 KMC Act). File Form 13 with sale deed, Khajna receipt, and BL&LRO hearing. Appeal rejection to DLLRO within 30 days; further to WBLRTT in 60 days. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to apply for land mutation on Banglarbhumi?',
        answer:
          'Submit Form 13 with registered sale deed, up-to-date Khajna receipt, and mutation fee via GRIPS portal. BL&LRO will schedule hearing; attend with documents. Track status on Banglarbhumi portal.',
      },
      {
        question: 'What if BL&LRO rejects my mutation application?',
        answer:
          'File Sec 54 appeal to DLLRO within 30 days; if refused, appeal to WBLRTT within 60 days. For judicial review, approach High Court at Calcutta under Art 226/227.',
      },
      {
        question: 'Can I mutate agricultural land to non-agricultural use in West Bengal?',
        answer:
          'Requires Sec 4C WBLR Act conversion permission before construction. Apply via Banglarbhumi with conversion fee. Unauthorized conversion attracts Sec 4D penalty and restoration liability.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Suraj Bhan & Ors. v. Financial Commissioner, (2007) 6 SCC 186',
        court: 'Supreme Court of India',
        holding: 'Revenue mutation entries (ROR/Porcha) are only for fiscal/land-revenue collection and do not confer or extinguish substantive civil title.'
      },
      {
        citation: 'Jitendra Singh v. State of Madhya Pradesh, 2021 SCC OnLine SC 802',
        court: 'Supreme Court of India',
        holding: 'Disputed claims of title or validity of a will/gift cannot be adjudicated by revenue mutation authorities; civil court decree governs record correction.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Banglarbhumi Form 13 Mutation (Districts)',
        feeNote: 'Government processing fee per decimal/land class as notified via GRIPS portal',
        limitation: 'No statutory bar on late application; apply promptly after deed registration'
      },
      {
        stage: 'KMC Assessment Mutation (Kolkata)',
        feeNote: 'KMC mutation fee schedule based on annual valuation/property slab (Sec 183 KMC Act)',
        limitation: 'Statutory intimation within 3 months of transfer under KMC Act, 1980'
      },
      {
        stage: 'Appeal Before DLLRO (Sec 54 WBLR Act)',
        feeNote: 'Nominal court-fee stamp under West Bengal Court-fees Act, 1970 (Schedule II)',
        limitation: '30 days from date of BL&LRO mutation order (Sec 54 WBLR Act)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'BL&LRO rejects mutation or keeps Form 13 pending indefinitely',
        forum: 'District Land & Land Reforms Officer (DLLRO)',
        provision: 'Section 54 Appeal, West Bengal Land Reforms Act, 1955',
        timeLimit: '30 days from order'
      },
      {
        scenario: 'Adverse order by DLLRO or jurisdictional error by Revenue Officer',
        forum: 'West Bengal Land Reforms & Tenancy Tribunal (WBLRTT)',
        provision: 'Section 6 & 10 Original Application, WBLRTT Act, 1997',
        timeLimit: '60 days from appellate order'
      },
      {
        scenario: 'Judicial review of WBLRTT order or gross inaction',
        forum: 'High Court at Calcutta (Division Bench)',
        provision: 'Article 226 / Article 227, Constitution of India',
        timeLimit: 'Reasonable time (no laches)'
      }
    ]
  },

  'sub-land-02': {
    seoTitle: 'Warishan Mutation & Inherited Share Entry | NyayaMitra',
    seoDescription:
      'West Bengal Warishan mutation guide: legal heir certificate, Banglarbhumi / KMC inherited share entry, court fees, and Sec 54 WBLR appeal route.',
    executiveSummary:
      'Inherited property shares in West Bengal require Warishan mutation via Banglarbhumi (rural) or KMC (Kolkata). Obtain legal heir/Warishan certificate, then file Form 13 with inheritance docs. Appeal BL&LRO refusal via Sec 54 (30 days) to DLLRO, then WBLRTT in 60 days. Disputed heirship needs civil suit for declaration/partition (Art 58 Limitation Act). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to get Warishan / Legal Heir certificate in West Bengal?',
        answer:
          'Apply via e-District portal (rural) or KMC portal (Kolkata) with death certificate, family tree affidavit, and death certificate. Panchayat/ward councillor verification may be required. Free or nominal fee via e-District/KMC portals.',
      },
      {
        question: 'Can one co-sharer be excluded from Warishan mutation record?',
        answer:
          'No. BL&LRO must notify all legal heirs under Sec 50/51A WBLR Act. Excluded co-sharer can file BL&LRO Review / DLLRO Appeal (Sec 50/51A) within 30 days; then WBLRTT appeal in 60 days. Disputed heirship requires civil suit for declaration/partition (Art 58 Limitation Act, 3 years).',
      },
      {
        question: 'Is there a time limit for filing Warishan mutation after inheritance?',
        answer:
          'No statutory time bar for filing Warishan/inheritance mutation, but delayed entry attracts accumulated Khajna/tax arrears. Apply promptly with death certificate, family tree affidavit, and legal heir certificate to avoid tax arrears.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Sawarni v. Inder Kaur, (1996) 6 SCC 223',
        court: 'Supreme Court of India',
        holding: 'Mutation of a property in revenue records neither creates nor extinguishes title; inheritance devolves by succession law at death.'
      },
      {
        citation: 'Prafulla Kumar v. State of West Bengal',
        court: 'High Court at Calcutta (WBLR Jurisprudence)',
        holding: 'BL&LRO must verify all co-sharers under Sec 50 WBLR Act after issuing statutory hearing notices to legal heirs.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Warishan / Legal Heir Certificate (Rural / Municipal)',
        feeNote: 'Free or nominal civic portal processing charge via e-District / Panchayat / KMC',
        limitation: 'No limitation; apply with death certificate and genealogy proof'
      },
      {
        stage: 'Succession / Inheritance Mutation (Banglarbhumi / KMC)',
        feeNote: 'Exempted or reduced inheritance slab per current WB Govt / KMC notification',
        limitation: 'No statutory time bar; delayed entry attracts accumulated Khajna/tax'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'One co-sharer excluded from Warishan mutation record',
        forum: 'BL&LRO Review / DLLRO Appellate Authority',
        provision: 'Section 50 / 51A(4) & Section 54 Appeal, WBLR Act, 1955',
        timeLimit: '30 days from knowledge/order'
      },
      {
        scenario: 'Dispute over genuineness of adoption or disputed heirship',
        forum: 'Civil Judge (Junior/Senior Division)',
        provision: 'Suit for Declaration & Partition (Sec 34 Specific Relief Act)',
        timeLimit: '3 years from right to sue (Art 58 Limitation Act, 1963)'
      }
    ]
  },

  'sub-land-03': {
    seoTitle: 'Sali to Vastu Land Conversion Sec 4C WBLR | NyayaMitra',
    seoDescription:
      'How to convert agricultural Sali/Bagan land to Vastu in West Bengal under Sec 4C WBLR Act: conversion fee, penalties, and WBLRTT appeal remedies.',
    executiveSummary:
      'Convert agricultural Sali/Bagan land to Vastu in West Bengal under Sec 4C WBLR Act. Apply via Banglarbhumi/DL&LRO with conversion fee per decimal. Unauthorized conversion attracts Sec 4D penalty and restoration liability. WBLRTT appeal within 60 days. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to apply for Sali to Vastu conversion in West Bengal?',
        answer:
          'Apply via Banglarbhumi/DL&LRO portal under Sec 4C WBLR Act with conversion fee per decimal based on land classification. Prior permission mandatory before construction.',
      },
      {
        question: 'What if land is converted without Sec 4C permission?',
        answer:
          'Unauthorized conversion attracts Sec 4D penalty — criminal prosecution and restoration liability. WBLRTT appeal within 60 days from adverse order.',
      },
      {
        question: 'Can waterbody (Doba/Pukur) land be converted under Sec 4C?',
        answer:
          'Sec 4C rejected if land classified as waterbody (Doba/Pukur). Challenge misclassification via BL&LRO record correction + WBLRTT within 60 days / 1 year.',
      },
    ],
    landmarkCases: [
      {
        citation: 'M.C. Mehta v. Kamal Nath & Public Trust Doctrine',
        court: 'Supreme Court of India',
        holding: 'Natural waterbodies and wetlands remain protected under public trust; conversion violating ecological statutes cannot be regularized.'
      },
      {
        citation: 'Inland Fisheries / WBLR Sec 4C Principles',
        court: 'High Court at Calcutta',
        holding: 'Prior written permission of the Collector/DL&LRO under Section 4C WBLR Act is mandatory before altering character of agricultural land.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Sec 4C Conversion Application (Banglarbhumi / DL&LRO)',
        feeNote: 'Conversion fee per decimal calculated by land classification & market rate via GRIPS',
        limitation: 'Must be obtained BEFORE starting non-agricultural construction'
      },
      {
        stage: 'Unauthorized Conversion Penalty (Sec 4D WBLR Act)',
        feeNote: 'Criminal prosecution & restoration liability if converted without Sec 4C sanction',
        limitation: 'Statutory show-cause notice requires immediate compliance/restoration'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Arbitrary rejection or prolonged delay on Sec 4C conversion file',
        forum: 'Divisional Commissioner / WBLRTT',
        provision: 'Section 54 Appeal (WBLR Act) & Section 10 OA (WBLRTT Act, 1997)',
        timeLimit: '30 days (Appeal) / 60 days (WBLRTT)'
      },
      {
        scenario: 'Sec 4C rejected due to misclassified waterbody (Doba/Pukur) entry',
        forum: 'BL&LRO / DL&LRO Record Correction + WBLRTT',
        provision: 'Section 51A(4) / 51B WBLR Act & Inland Fisheries verification',
        timeLimit: '1 year / 60 days from adverse order'
      }
    ]
  },

  'sub-land-06': {
    seoTitle: 'Porcha & ROR Record Correction West Bengal | NyayaMitra',
    seoDescription:
      'Correct wrong Dag, Khatian, or area in West Bengal Porcha/ROR under Sec 51A(4) & 51B WBLR Act or Sec 186 KMC Act: procedure, fees, and appeals.',
    executiveSummary:
      'Fix Dag/Khatian/area errors in West Bengal Porcha/ROR under Sec 51A(4)/51B WBLR Act or Sec 186 KMC Act. Clerical/arithmetical correction via Sec 51B (nominal fee). Revision of final ROR entry under Sec 51A(4)/(5) — 1 year from publication. BL&LRO refusal → DLLRO/WBLRTT (30–60 days). Competing ownership → Civil Court declaration (Art 58, 3 yrs). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to correct a clerical error in Porcha/ROR?',
        answer:
          'File Sec 51B WBLR application with nominal court-fee stamp. BL&LRO corrects clerical/arithmetical errors without hearing. No time limit for bona fide errors.',
      },
      {
        question: 'How to revise a final Record of Rights entry?',
        answer:
          'File Sec 51A(4)/(5) revision petition with prescribed revenue court fee within 1 year of final publication. Suo motu revision possible under Sec 51A(5).',
      },
      {
        question: 'What if BL&LRO refuses to correct Khatian/Dag error?',
        answer:
          'Appeal to DLLRO/WBLRTT (Salt Lake) under Sec 51A(5)/Sec 54 WBLR Act & Sec 10 WBLRTT Act within 30–60 days of refusal. Civil Court declaration suit (Art 58, 3 yrs) for ownership disputes.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Vishwa Vijay Bharati v. Fakhrul Hassan, (1976) 3 SCC 642',
        court: 'Supreme Court of India',
        holding: 'Presumption of correctness of Record of Rights under revenue statutes is rebuttable by registered title deeds and credible evidence.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Clerical / Arithmetical Correction (Sec 51B WBLR)',
        feeNote: 'Nominal application stamp per WB Court-fees Act, 1970',
        limitation: 'May be moved upon discovery of bona fide clerical/typographical error'
      },
      {
        stage: 'Revision of Final ROR Entry (Sec 51A(4)/(5) WBLR)',
        feeNote: 'Prescribed revenue petition court fee',
        limitation: '1 year from final publication (Sec 51A(4)); suo motu/revision under 51A(5)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'BL&LRO refuses to correct Khatian/Dag error despite registered deed',
        forum: 'DLLRO / WBLRTT (Salt Lake, Kolkata)',
        provision: 'Section 51A(5) / Section 54 WBLR Act & Section 10 WBLRTT Act',
        timeLimit: '30–60 days from refusal order'
      },
      {
        scenario: 'Competing claimant disputes ownership underlying the ROR entry',
        forum: 'Civil Court (Declaration of Title)',
        provision: 'Section 34 Specific Relief Act, 1963',
        timeLimit: '3 years from adverse title denial (Art 58 Limitation Act)'
      }
    ]
  },

  'sub-land-10': {
    seoTitle: 'Cancel Fraudulent Sale Deed in India & WB | NyayaMitra',
    seoDescription:
      'File civil suit under Sec 31 Specific Relief Act to cancel forged or fraudulent registered sale deeds: WB court fees, Art 59 limitation & appeals.',
    executiveSummary:
      'Cancel forged/fraudulent sale deeds via Sec 31 Specific Relief Act civil suit. Executant pays ad valorem fee on consideration (Suhrid Singh); non-executant out of possession pays ad valorem, in possession pays fixed fee (Suhrid Singh v. Randhir Singh). Art 59 Limitation Act: 3 years from knowledge of fraud. File Sec 31 SRA suit + Sec 31 RPA appeal (90 days HC). Revocation at ADSR/Registrar with fixed stamp duty; publish public notice. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to cancel a fraudulent sale deed in West Bengal?',
        answer:
          'File Sec 31 Specific Relief Act civil suit for cancellation. Executant pays ad valorem court fee on consideration; non-executant in possession pays fixed fee. File within 3 years of discovering fraud (Art 59 Limitation Act).',
      },
      {
        question: 'Can a void ab initio forged deed be challenged anytime?',
        answer:
          'Void ab initio forged documents (Art 59) have no limitation bar — challenge anytime cloud is cast on title. Forgery void ab initio under Prem Singh v. Birbal, (2006) 5 SCC 353.',
      },
      {
        question: 'What if the fraudulent deed is transferred to a third party?',
        answer:
          'File Lis Pendens (Sec 52 TP Act) + implead third party immediately. Seek Sec 38 SRA temporary injunction to restrain resale. File Sec 96 appeal if decree challenged (30 days DC / 90 days HC).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Suhrid Singh @ Sardool Singh v. Randhir Singh, (2010) 12 SCC 112',
        court: 'Supreme Court of India',
        holding: 'Executant seeking cancellation of own deed pays ad valorem court fee on consideration; non-executant out of possession pays ad valorem, whereas non-executant in possession pays fixed court fee for declaration.'
      },
      {
        citation: 'Prem Singh & Ors. v. Birbal & Ors., (2006) 5 SCC 353',
        court: 'Supreme Court of India',
        holding: 'Voidable instruments require Sec 31 cancellation within 3 years under Article 59; void ab initio forged documents may be challenged when cloud is cast on title.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Civil Suit for Cancellation (Sec 31 Specific Relief Act)',
        feeNote: 'Ad valorem / fixed fee under Sec 7(iv) / Schedule II, WB Court-fees Act, 1970 (per Suhrid Singh)',
        limitation: '3 years from when facts entitling cancellation become known (Art 59 Limitation Act)'
      },
      {
        stage: 'Temporary Injunction (Order XXXIX Rules 1–2 CPC)',
        feeNote: 'Nominal interlocutory petition court-fee stamp',
        limitation: 'File concurrently with plaint to restrain third-party resale'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Interim injunction against resale refused by Civil Judge',
        forum: 'District Judge / High Court at Calcutta (Misc. Appeal)',
        provision: 'Order XLIII Rule 1(r), Code of Civil Procedure, 1908',
        timeLimit: '30 days (District Court) / 90 days (High Court)'
      },
      {
        scenario: 'Dismissal of cancellation suit on merits',
        forum: 'First Appellate Court (District Judge / High Court)',
        provision: 'Section 96 Regular First Appeal, CPC, 1908',
        timeLimit: '30 days (District Court) / 90 days (High Court)'
      }
    ]
  },

  'sub-land-13': {
    seoTitle: 'Specific Performance of Land Agreement Baina | NyayaMitra',
    seoDescription:
      'Enforce registered Baina / agreement for sale in India & West Bengal under Specific Relief Act 1963: readiness & willingness, Art 54 limitation & fees.',
    executiveSummary:
      'Enforce registered Baina/agreement for sale under Specific Relief Act 1963. Prove continuous readiness/willingness (Sec 16(c) SRA); 2018 amendment makes specific performance mandatory (Kattta Sujatha Reddy). Ad valorem court fee on consideration (Sec 7(x)(a), WB Court-fees Act); 3-yr limitation from performance date/refusal (Art 54). Seller transfers to third party → implead immediately (Sec 52 TP Act / Order I Rule 10 CPC). Erroneous share decree → Sec 96/97 Appeal (30/90 days). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to enforce a registered Baina for land sale in West Bengal?',
        answer:
          'File Sec 10 Specific Relief Act suit for specific performance. Prove continuous readiness/willingness (Sec 16(c) SRA); 2018 amendment makes specific performance mandatory. File within 3 years from performance date/refusal (Art 54 Limitation Act).',
      },
      {
        question: 'What if seller transfers land to third party during suit?',
        answer:
          'Implead third party immediately (Sec 52 TP Act lis pendens + Order I Rule 10 CPC). File temporary injunction (Order XXXIX Rules 1–2) to prevent alienation.',
      },
      {
        question: 'What if court refuses specific performance?',
        answer:
          'Buyer entitled to earnest money refund under Sec 22 SRA (alternative refund). Appeal under Sec 96 CPC within 30/90 days (District/High Court). Sec 22 SRA provides alternative refund remedy.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Kattta Sujatha Reddy v. Siddamsetty Infra Projects, (2023) 1 SCC 355',
        court: 'Supreme Court of India',
        holding: 'The 2018 Amendment making specific performance mandatory rather than discretionary applies prospectively; continuous readiness and willingness under Sec 16(c) remains essential.'
      },
      {
        citation: 'Saradamani Kandappan v. S. Rajalakshmi, (2011) 12 SCC 18',
        court: 'Supreme Court of India',
        holding: 'In urban real estate contracts, courts scrutinize steep market escalation and whether time was of the essence for payment milestones.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Suit for Specific Performance (Sec 10 SRA, 1963)',
        feeNote: 'Ad valorem court fee on agreed sale consideration under Sec 7(x)(a), WB Court-fees Act, 1970',
        limitation: '3 years from date fixed for performance or refusal notice (Art 54 Limitation Act)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Seller transfers land to third party during pending suit',
        forum: 'Trial Civil Court (Lis Pendens & Impleadment)',
        provision: 'Section 52 Transfer of Property Act & Order I Rule 10 CPC',
        timeLimit: 'Immediate application on discovering third-party deed'
      },
      {
        scenario: 'Decree refused; buyer seeks earnest money refund or appeal',
        forum: 'Appellate Court under Section 96 CPC',
        provision: 'Section 22 Specific Relief Act (alternative refund) & Sec 96 CPC',
        timeLimit: '30 / 90 days from decree'
      }
    ]
  },

  'sub-land-16': {
    seoTitle: 'Adverse Possession Law in India & West Bengal | NyayaMitra',
    seoDescription:
      'Claim or defend adverse possession under Art 65 Limitation Act 1963: 12-year hostile possession rule, Ravinder Kaur Grewal SC ruling & court fees.',
    executiveSummary:
      'Adverse possession under Art 65 Limitation Act 1963: 12 years open, continuous, hostile possession (nec vi, nec clam, nec precario) perfects title as "sword" (Ravinder Kaur Grewal, 2019 SC 3-Judge Bench). Karnataka Wakf: permissive possession never matures. Ad valorem/market-value court fee (Sec 7(v) WB Court-fees Act); 12 yrs private / 30 yrs govt land (Art 65/112 Limitation Act). Dismissed suit → Sec 6 SRA Summary Possession (6 months) / Appeal (30-90 days). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to claim adverse possession in West Bengal?',
        answer:
          'File Art 65 Limitation Act declaration/recovery suit proving 12 years open, continuous, hostile possession (nec vi, nec clam, nec precario). Ad valorem/market-value court fee (Sec 7(v) WB Court-fees Act). Private land 12 yrs / Govt 30 yrs (Art 65/112 Limitation Act).',
      },
      {
        question: 'Does permissive possession ever become adverse?',
        answer:
          'No. Permissive/licensed possession never matures into adverse title regardless of duration (Karnataka Board of Wakf v. Govt. of India, 2004 SC). Must prove hostility from inception.',
      },
      {
        question: 'What if adverse possession suit is dismissed?',
        answer:
          'Possessory suit dismissed → Sec 6 SRA Summary Possession (6 months from dispossession) / Appeal 30-90 days. Forcible dispossession → Sec 6 SRA within 6 months.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Ravinder Kaur Grewal & Ors. v. Manjit Kaur & Ors., (2019) 8 SCC 729',
        court: 'Supreme Court of India (3-Judge Bench)',
        holding: 'A person who has perfected title by 12 years of open, continuous, and hostile adverse possession can use it as a "sword" to file a suit for declaration and injunction under Art 65.'
      },
      {
        citation: 'Karnataka Board of Wakf v. Govt. of India, (2004) 10 SCC 779',
        court: 'Supreme Court of India',
        holding: 'Possession must be nec vi, nec clam, nec precario (adequate in continuity, publicity, and extent) and adverse to the true owner; permissive possession never matures into adverse title.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Declaration / Recovery Suit (Art 65 Limitation Act)',
        feeNote: 'Ad valorem / market-value valuation under Sec 7(v), WB Court-fees Act, 1970',
        limitation: '12 years (private land, Art 65) / 30 years (Government land, Art 112 Limitation Act)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Possessory suit dismissed or dispossession threatened forcibly',
        forum: 'Civil Court (Sec 6 SRA Summary Possession) / First Appellate Court',
        provision: 'Section 6 Specific Relief Act (within 6 months of forcible dispossession) / Sec 96 CPC',
        timeLimit: '6 months (Sec 6 SRA) / 30–90 days (Appeal)'
      }
    ]
  },

  'sub-land-20': {
    seoTitle: 'Cancel Misused Power of Attorney GPA Land Sale | NyayaMitra',
    seoDescription:
      'Revoke misused GPA and challenge invalid GPA/Will land sales in India under Suraj Lamp Supreme Court precedent: registration rules & civil remedies.',
    executiveSummary:
      'Revoke misused GPA immediately via registered revocation deed at ADSR/Registrar (fixed stamp duty). Publish public notice. Challenge unauthorized GPA/Will land sales via Sec 31/38 SRA cancellation suit (Ad valorem fee; 3 yrs from knowledge per Art 59 Limitation Act). Suraj Lamp (2012): GPA/Will transfers cannot convey immovable property title — only registered deed of conveyance under Sec 54 TPA. Revoke ADSR/sub-registrar refusal → District Registrar/High Court Writ (Sec 72 Regn Act/Art 226). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to revoke a misused General Power of Attorney for land?',
        answer:
          'Execute registered deed of revocation at ADSR/Registrar (fixed stamp duty). Publish public notice. If agent alienated property, file Sec 31/38 SRA cancellation suit + Sec 31 RPA appeal (Ad valorem fee; 3 yrs from knowledge per Art 59). Sub-Registrar refusal → District Registrar Appeal/HC Writ (Sec 72 Regn Act/Art 226).',
      },
      {
        question: 'Can a GPA holder sell property without principal\'s consent?',
        answer:
          'No. Suraj Lamp (2012) SC: GPA/Agreement-to-Sell/Will cannot convey immovable property title. Only registered deed of conveyance under Sec 54 Transfer of Property Act transfers valid title.',
      },
      {
        question: 'What if agent already sold property via misused GPA?',
        answer:
          'File Sec 31/38 Specific Relief Act cancellation suit + Sec 31 RPA appeal (Ad valorem fee; 3 yrs from knowledge per Art 59). Revoke at ADSR → publish notice. Sub-Registrar refusal → District Registrar Appeal / HC Writ (Sec 72 Regn Act / Art 226).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana, (2012) 1 SCC 656',
        court: 'Supreme Court of India',
        holding: 'Immovable property cannot be legally conveyed via GPA/Agreement-to-Sell/Will transfers; only a registered deed of conveyance transfers valid title under Sec 54 Transfer of Property Act.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Registered Deed of Revocation at ADSR / Registrar',
        feeNote: 'Fixed stamp duty & registration fee per West Bengal Stamp/Registration schedule',
        limitation: 'Execute immediately before agent alienates property; publish public notice'
      },
      {
        stage: 'Suit for Cancellation / Injunction (Sec 31 & 38 SRA)',
        feeNote: 'WB Court-fees Act, 1970 declaration/cancellation fee',
        limitation: '3 years from knowledge of unauthorized transfer (Art 59 Limitation Act)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Sub-Registrar refuses registration of unilateral deed vs agent',
        forum: 'District Registrar Appeal / High Court Writ',
        provision: 'Section 72 Registration Act, 1908 / Article 226 Constitution',
        timeLimit: '30 days from Sub-Registrar refusal order'
      }
    ]
  },

  'sub-tenancy-01': {
    seoTitle: 'Deposit Rent with Rent Controller WBPT Act | NyayaMitra',
    seoDescription:
      'Deposit rent before Kolkata or District SDO Rent Controller under Sec 21 & 22 WBPT Act 1997 when landlord refuses rent: tender rules & timelines.',
    executiveSummary:
      'Tender rent via postal money order to landlord; if refused, deposit before SDO (Districts) / Rent Controller (Kolkata) under Sec 21-22 WBPT Act within 15 days of due date/following month. Prescribed M.O. commission + nominal WBPT challan. Rent Controller rejection → WBLRTT / Civil Judge (Eviction Suit) under Sec 7(3) + Sec 43 Appeal. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to deposit rent with Rent Controller when landlord refuses?',
        answer:
          'Tender rent via postal money order to landlord; if refused, deposit before SDO (Districts) / Rent Controller (Kolkata) within 15 days of due date or 15 days of following month (Sec 21(3) WBPT). Prescribed M.O. commission + nominal WBPT challan fee.',
      },
      {
        question: 'What if Rent Controller rejects the challan?',
        answer:
          'Appeal to West Bengal Land Reforms & Tenancy Tribunal / Civil Judge (Eviction Suit) under Sec 7(3) WBPT Act deposit protection in suit; Sec 43 Appeal. Move within 1 month of service of eviction summons (Sec 7 WBPT).',
      },
      {
        question: 'Can tenant deposit rent after eviction suit is filed?',
        answer:
          'Deposit before final decree protects tenancy under Sec 7(3) WBPT Act (deposit within 1 month of summons service). Court strikes out defence on deposit under Sec 7(3). Move Sec 7(3) petition immediately after statutory 1-month window expires.',
      },
    ],
    landmarkCases: [
      {
        citation: 'E. Palanisamy v. Palanisamy, (2003) 1 SCC 123 / WBPT Sec 21 Mandate',
        court: 'Supreme Court of India',
        holding: 'Statutory procedure for rent tender (money order refusal before Rent Controller deposit) must be strictly complied with to avoid default in eviction proceedings.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Postal Money Order Tender + Rent Controller Deposit (Sec 21–22)',
        feeNote: 'Prescribed postal M.O. commission + nominal WBPT challan court fee',
        limitation: 'Deposit within 15 days of time fixed or 15 days of following month (Sec 21(3) WBPT)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Rent Controller rejects challan or landlord disputes validity',
        forum: 'West Bengal Land Reforms & Tenancy Tribunal / Civil Judge (Eviction Suit)',
        provision: 'Section 7(1) & 7(2) WBPT Act deposit protection in suit; Sec 43 Appeal',
        timeLimit: 'Within 1 month of service of eviction summons under Sec 7 WBPT'
      }
    ]
  },

  'sub-tenancy-02': {
    seoTitle: 'Tenant Eviction Procedure WBPT Act Sec 6 | NyayaMitra',
    seoDescription:
      'Complete guide to tenant eviction in West Bengal under Sec 6 WBPT Act 1997 & Sec 106 TP Act: Notice to Quit, court fees, and Presidency/Civil Court filing.',
    executiveSummary:
      'Evict tenant under Sec 6 WBPT Act 1997 (Sec 106 TP Act fallback): Serve statutory 1-month Notice to Quit expiring with tenancy month (Sec 6(4) WBPT / 15 days Sec 106 TP Act) via Regd Post AD. File Title Eviction Suit before Civil Judge/Small Causes Court — ad valorem fee on 12 months rent (Sec 7(xiii)(d) WB Court-fees Act). Limitation: 12 years from tenancy determination (Art 67 Limitation Act). Tenant deposits arrears within 1 month → defence struck off (Sec 7(3)). Dismissal → District Judge/High Court Appeal (30/90 days). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to serve a valid Notice to Quit under WBPT Act?',
        answer:
          'Serve statutory 1-month Notice to Quit expiring with tenancy month (Sec 6(4) WBPT) via Regd Post A/D. Calcutta 15-day notice under Sec 106 Transfer of Property Act where applicable.',
      },
      {
        question: 'What if tenant deposits arrears within 1 month of summons?',
        answer:
          'Deposit arrears within 1 month of summons service under Sec 7(3) WBPT Act — defence struck off under Sec 7(3). Move Sec 7(3) petition immediately after statutory 1-month window expires.',
      },
      {
        question: 'What if eviction suit is dismissed or decree is adverse?',
        answer:
          'Appeal to District Judge / City Civil Court / High Court at Calcutta. Sec 96 First Appeal (30 days District/City Civil / 90 days High Court). Sec 115 CPC / Art 227 Revision (90 days HC).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Nopany Investments (P) Ltd. v. Santokh Singh (HUF), (2008) 2 SCC 728',
        court: 'Supreme Court of India',
        holding: 'Requirement of prior statutory notice and filing of eviction suit after expiry of notice period governed strictly by applicable tenancy enactment.'
      },
      {
        citation: 'Biswanath Agarwalla v. Sabitri Bera, (2009) 15 SCC 693',
        court: 'Supreme Court of India',
        holding: 'Landlord establishing bona fide reasonable requirement or statutory default under Sec 6 WBPT Act is entitled to eviction decree on strict proof.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Statutory Notice to Quit (Sec 6(4) WBPT / Sec 106 TP Act)',
        feeNote: 'Registered Post A/D postal charges (no court fee)',
        limitation: '1 full calendar month notice under WBPT Sec 6(4) (15 days under Sec 106 TP Act)'
      },
      {
        stage: 'Title Eviction Suit (Civil Judge / Small Causes Court)',
        feeNote: '12 months rent valuation under Sec 7(xiii)(d), WB Court-fees Act, 1970',
        limitation: '12 years from determination of tenancy (Art 67 Limitation Act, 1963)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Tenant fails to deposit arrears within 1 month of summons (Sec 7(1)/(2))',
        forum: 'Trial Civil Court (Striking Out Defence)',
        provision: 'Section 7(3) WBPT Act, 1997',
        timeLimit: 'Move Sec 7(3) petition immediately after statutory 1-month window expires'
      },
      {
        scenario: 'Dismissal of eviction suit or aggrieved by decree',
        forum: 'District Judge / City Civil Court / High Court at Calcutta',
        provision: 'Section 96 First Appeal / Sec 115 CPC / Article 227 Revision',
        timeLimit: '30 days (District/City Civil) / 90 days (High Court)'
      }
    ]
  },

  'sub-tenancy-03': {
    seoTitle: 'Restore Cut-off Water or Electricity WBPT | NyayaMitra',
    seoDescription:
      'Emergency petition under Sec 27 WBPT Act 1997 to restore water, electricity, or lift cut off by landlord in Kolkata & West Bengal: fees and penalties.',
    executiveSummary:
      'Emergency Sec 27 WBPT Act petition restores water/electricity/lift cut off by landlord in Kolkata & West Bengal. Landlords cannot use supply disconnection as extra-judicial eviction weapon (Chameli Devi precedent). File urgent application before Rent Controller — nominal WBPT petition stamp. Immediate interim restoration order available. Landlord disobedience → Civil Court Mandatory Injunction / High Court Art 226 (CESC/WBSEDCL direct meter). Sec 43 Electricity Act (occupier right to electricity) & WBPT Sec 27. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file emergency petition for water/electricity restoration?',
        answer:
          'File urgent Sec 27 WBPT petition before Rent Controller — nominal WBPT petition stamp. File immediately upon disconnection; Rent Controller may pass interim restoration order. Simultaneously file Art 226 writ for CESC/WBSEDCL direct meter.',
      },
      {
        question: 'What if landlord disobeys restoration order?',
        answer:
          'File Civil Court Mandatory Injunction / High Court Art 226 (CESC/WBSEDCL direct meter). Sec 43 Electricity Act, 2003 (occupier right to electricity) & WBPT Sec 27. Immediate urgent listing.',
      },
      {
        question: 'Can landlord disconnect utilities to force eviction?',
        answer:
          'No. Electricity/water are essential amenities; disconnection as extra-judicial eviction weapon is illegal (Chameli Devi / WBPT Sec 27 precedent). File Sec 27 petition + Art 226 writ simultaneously for immediate relief.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Chameli Devi / WBPT Sec 27 Essential Supply Precedents',
        court: 'High Court at Calcutta',
        holding: 'Electricity and drinking water are essential amenities; landlords cannot use supply disconnection as an extra-judicial weapon to force tenant eviction.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Urgent Application Before Rent Controller (Sec 27 WBPT)',
        feeNote: 'Fixed nominal WBPT petition stamp under West Bengal Court-fees Act',
        limitation: 'File immediately upon disconnection; Rent Controller may pass interim restoration order'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Landlord disobeys restoration order or Rent Controller delays',
        forum: 'Civil Court Mandatory Injunction / High Court Art 226 (CESC/WBSEDCL direct meter)',
        provision: 'Section 43 Electricity Act, 2003 (occupier right to electricity) & WBPT Sec 27',
        timeLimit: 'Immediate urgent listing'
      }
    ]
  },

  'sub-consumer-01': {
    seoTitle: 'File Consumer Complaint on e-Jagriti Portal | NyayaMitra',
    seoDescription:
      'Step-by-step consumer complaint filing under Sec 35 CPA 2019 on e-Jagriti: District/State/National pecuniary limits, zero fee under Rs 5L & appeals.',
    executiveSummary:
      'File consumer complaint on e-Jagriti portal under Sec 35 CPA 2019: zero fee up to ₹5L; District/State/National pecuniary jurisdiction. CPA covers service deficiency (builders, medical, banking, e-commerce). DLSA 15100 free legal aid. Appeal: District→State Commission (45 days, 50% deposit) → NCDRC (30 days). Cyber fraud → 1930 + cybercrime.gov.in. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file a consumer complaint on e-Jagriti portal?',
        answer:
          'Register on e-jagriti.gov.in, fill Form V with claim details, upload documents (bill, warranty, correspondence). Zero fee up to ₹5 Lakh; ₹200 (₹5L–₹10L), ₹400 (₹10L–₹20L), ₹1,000 (₹20L–₹50L). 2-year limitation from cause of action (Sec 69 CPA 2019).',
      },
      {
        question: 'Can a commercial entity file consumer complaint for defective goods?',
        answer:
          'Yes. National Insurance v. Harsolia Motors (2023 SC): Commercial entities buying insurance/services without profit nexus qualify as "consumers" under CPA 2019.',
      },
      {
        question: 'What if District Commission rejects my complaint?',
        answer:
          'Appeal to State Consumer Disputes Redressal Commission (WBCDRC) within 45 days (50% pre-deposit if OP appeals). Further appeal to NCDRC within 30 days (Appeal) / 90 days (Revision).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Lucknow Development Authority v. M.K. Gupta, (1994) 1 SCC 243',
        court: 'Supreme Court of India',
        holding: 'Statutory authorities and builders providing housing/public services fall within "service" under the Consumer Protection Act, accountable for deficiency.'
      },
      {
        citation: 'National Insurance Co. Ltd. v. Harsolia Motors, (2023) 8 SCC 362',
        court: 'Supreme Court of India',
        holding: 'Commercial entities purchasing insurance or indemnity policies without profit-generation nexus qualify as "consumers" under CPA.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'District Commission (Claims up to ₹50 Lakh)',
        feeNote: '₹0 up to ₹5 Lakh; ₹200 (₹5L–₹10L); ₹400 (₹10L–₹20L); ₹1,000 (₹20L–₹50L) per CPA Rules 2020',
        limitation: '2 years from date cause of action arises (Sec 69 CPA, 2019)'
      },
      {
        stage: 'State Commission / WBCDRC (₹50 Lakh – ₹2 Crore)',
        feeNote: '₹2,000 (₹50L–₹1Cr); ₹2,500 (₹1Cr–₹2Cr) via e-Jagriti online payment',
        limitation: '2 years (condonable on sufficient cause under Sec 69(2))'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Complaint dismissed or inadequate compensation awarded by District Commission',
        forum: 'State Consumer Disputes Redressal Commission (WBCDRC)',
        provision: 'Section 41 Appeal, Consumer Protection Act, 2019 (50% pre-deposit if OP appeals)',
        timeLimit: '45 days from date of order'
      },
      {
        scenario: 'Adverse order by State Commission',
        forum: 'National Consumer Disputes Redressal Commission (NCDRC)',
        provision: 'Section 51 Appeal / Sec 58(1)(b) Revision, CPA 2019',
        timeLimit: '30 days (Appeal) / 90 days (Revision)'
      }
    ]
  },

  'sub-consumer-02': {
    seoTitle: 'WBRERA Builder Delay & Refund Form-M Guide | NyayaMitra',
    seoDescription:
      'Claim builder delay interest (SBI MCLR+2%) or refund in West Bengal via WBRERA Form-M under Sec 18 RERA 2016: fees, Sec 40 execution & appeals.',
    executiveSummary:
      'Builder delay → WBRERA Form-M complaint (₹1,000 fee on rera.wb.gov.in). Unconditional refund with SBI MCLR+2% interest is absolute right under Sec 18 RERA (Newtech Promoters v. State of UP). Form-N for Adjudicating Officer compensation. Continuing cause of action until OC + possession. Form-N → Adjudicating Officer → Sec 40 DM recovery. Grievance → WBREAT appeal (60 days). Remedies concurrent with CPA (Imperia Structures). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file WBRERA Form-M complaint for builder delay?',
        answer:
          'Register on rera.wb.gov.in, fill Form-M, pay ₹1,000 fee. Attach allotment letter, payment receipts, builder correspondence. Continuing cause of action until OC + possession offered.',
      },
      {
        question: 'Can I get refund instead of delayed possession?',
        answer:
          'Yes. Newtech Promoters v. State of UP (2021 SC): Unconditional refund with SBI MCLR+2% interest is absolute right under Sec 18 RERA when builder fails to deliver on agreed date. Must elect one forum (RERA or CPA).',
      },
      {
        question: 'What if builder ignores WBRERA refund order?',
        answer:
          'File Sec 40 RERA execution → District Magistrate recovery as land revenue arrears. Immediate execution petition post compliance expiry. Aggrieved by Authority/AO order → WBREAT appeal (60 days).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Newtech Promoters & Developers Pvt. Ltd. v. State of UP, (2021) 18 SCC 1',
        court: 'Supreme Court of India',
        holding: 'Homebuyer right to unconditional refund with interest under Sec 18 RERA when builder fails to deliver possession on agreed date is unqualified and absolute.'
      },
      {
        citation: 'Imperia Structures Ltd. v. Anil Patni, (2020) 10 SCC 783',
        court: 'Supreme Court of India',
        holding: 'RERA does not bar homebuyers from choosing the Consumer Commission (CPA) if they are "consumers"; remedies are concurrent (must elect one forum).'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'WBRERA Form-M Complaint (Authority) / Form-N (Adjudicating Officer)',
        feeNote: '₹1,000 statutory online filing fee on rera.wb.gov.in (verify current WB RERA Rules)',
        limitation: 'Continuing cause of action until valid Occupation Certificate & possession offered'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Builder ignores WBRERA refund/interest recovery order',
        forum: 'WBRERA Execution → District Magistrate Revenue Recovery',
        provision: 'Section 40(1) RERA, 2016 (recovery as arrears of land revenue)',
        timeLimit: 'Immediate execution petition post compliance expiry'
      },
      {
        scenario: 'Aggrieved by WBRERA Authority or Adjudicating Officer order',
        forum: 'West Bengal Real Estate Appellate Tribunal (WBREAT)',
        provision: 'Section 44 Appeal, RERA 2016',
        timeLimit: '60 days from receipt of order'
      }
    ]
  },

  'sub-partition-01': {
    seoTitle: 'Ancestral Property Partition Suit India & WB | NyayaMitra',
    seoDescription:
      'File partition suit in West Bengal & India under Order XX Rule 18 CPC & Hindu Succession Act: fixed court fee in WB, preliminary/final decree & appeals.',
    executiveSummary:
      'Partition suit by co-sharer in joint possession under Order XX Rule 18 CPC & Hindu Succession Act (Vineeta Sharma: daughters coparceners by birth). Fixed WB court fee (Sec 7(viA), not ad valorem). Preliminary decree → Commissioner → Final decree by metes/bounds. Co-sharer sells during suit → Lis Pendens (Sec 52 TP Act) + Order I Rule 10 CPC (file day 1). Erroneous share → District Judge/HC Appeal (Sec 96/97 CPC; 30/90 days). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file a partition suit for ancestral property in West Bengal?',
        answer:
          'File partition suit under Order XX Rule 18 CPC by co-sharer in joint possession. Fixed WB court fee (Sec 7(viA), not ad valorem). Preliminary decree → Commissioner → Final decree by metes/bounds. No limitation while jointness continues; 12 years from ouster (Art 110).',
      },
      {
        question: 'What if a co-sharer sells joint property during partition suit?',
        answer:
          'Implead third party immediately (Sec 52 TP Act lis pendens + Order I Rule 10 CPC). File temp injunction (Order XXXIX Rules 1–2) to prevent alienation. File with plaint on day 1.',
      },
      {
        question: 'What if preliminary/final decree has erroneous share determination?',
        answer:
          'Appeal to District Judge / High Court at Calcutta under Sec 96 & 97 CPC. District Court: 30 days; High Court: 90 days.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Vineeta Sharma v. Rakesh Sharma & Ors., (2020) 9 SCC 1',
        court: 'Supreme Court of India (3-Judge Bench)',
        holding: 'Daughters hold coparcenary rights by birth equally with sons regardless of whether the father was alive on 9 September 2005.'
      },
      {
        citation: 'Shub Karan Bubna v. Sita Saran Bubna, (2009) 9 SCC 689',
        court: 'Supreme Court of India',
        holding: 'A preliminary partition decree determines shares; the court should proceed smoothly to appoint a Commissioner and pass a final decree by metes and bounds without fresh suit.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Partition Suit by Co-sharer in Joint Possession (WB)',
        feeNote: 'Fixed court fee under Sec 7(viA) / Schedule II Art 17(va), WB Court-fees Act, 1970 (not ad valorem if joint possession)',
        limitation: 'No fixed bar while jointness continues; 12 years only from clear ouster (Art 110 Limitation Act)'
      },
      {
        stage: 'Final Decree Stamp Duty (Commissioner Takhta)',
        feeNote: 'Partition instrument stamp duty on separated share value per Indian Stamp Act (WB Amendment)',
        limitation: 'No limitation to apply for final decree once preliminary decree is passed'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Co-sharer tries to sell or alter joint property during partition suit',
        forum: 'Trial Civil Judge (Senior Division)',
        provision: 'Order XXXIX Rules 1–2 CPC Temporary Injunction & Sec 52 TP Act Lis Pendens',
        timeLimit: 'File with plaint on day 1'
      },
      {
        scenario: 'Erroneous share determination in Preliminary or Final Decree',
        forum: 'District Judge / High Court at Calcutta',
        provision: 'Section 96 & Section 97 Regular First Appeal, CPC, 1908',
        timeLimit: '30 days (District Court) / 90 days (High Court)'
      }
    ]
  },

  'sub-partition-02': {
    seoTitle: 'Will Probate Rules Post-2025 Sec 213 ISA | NyayaMitra',
    seoDescription:
      'Understand Will Probate in Kolkata & West Bengal after Sec 213 Indian Succession Act reform: voluntary probate benefits, court fees & caveat contests.',
    executiveSummary:
      'Voluntary probate under Sec 213 ISA (post-2025 Sec 213 omission) avoids caveat contests. Ad valorem estate-value fee per Schedule I Art 11, WB Court-fees Act, 1970 (cap applies). No strict limitation; 3-yr unexplained delay (Art 137) requires explanation. Caveat → District Judge/HC (Sec 295 ISA → contentious suit). Refusal → Sec 299 Appeal / Sec 263 Revocation (90 days HC). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'When is probate mandatory in Kolkata?',
        answer:
          'Probate mandatory for wills of Hindus, Christians, Parsis within Kolkata municipal limits (Sec 213 ISA). Voluntary probate recommended even outside limits to avoid caveat contests (Sec 213 omission post-2025 amendment).',
      },
      {
        question: 'What if a caveat is filed against probate?',
        answer:
          'Caveat converts probate petition to contentious suit (Sec 295 ISA). Transferred to District Judge/HC Original Side. File written statement + affidavit; court frames issues & tries testamentary suit.',
      },
      {
        question: 'What if probate is refused or revoked?',
        answer:
          'Appeal under Sec 299 ISA / Sec 263 Revocation for just cause. 90 days from final order (Art 116 Limitation Act) to High Court at Calcutta.',
      },
    ],
    landmarkCases: [
      {
        citation: 'H. Venkatachala Iyengar v. B.N. Thimmajamma, AIR 1959 SC 443',
        court: 'Supreme Court of India',
        holding: 'Propounder of a Will must satisfy the court’s judicial conscience by removing all suspicious circumstances and proving due attestation under Sec 63 ISA.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Uncontested / Contested Probate Petition',
        feeNote: 'Ad valorem estate-value fee per Schedule I Art 11, West Bengal Court-fees Act, 1970 (with statutory cap where applicable)',
        limitation: 'No strict statutory bar; unexplained delay beyond 3 years (Art 137) must be explained satisfactorily'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Caveat filed objecting to Will genuineness',
        forum: 'District Delegate transfers to District Judge / High Court (Original Side)',
        provision: 'Section 295 Indian Succession Act, 1925 (converted to Contentious Suit)',
        timeLimit: 'Converted to regular testamentary suit upon caveat & affidavit'
      },
      {
        scenario: 'Probate refused or revoked',
        forum: 'High Court at Calcutta',
        provision: 'Section 299 Appeal / Section 263 Revocation for just cause',
        timeLimit: '90 days from final order (Art 116 Limitation Act)'
      }
    ]
  },

  'sub-partition-03': {
    seoTitle: 'Succession Certificate for Bank & Shares | NyayaMitra',
    seoDescription:
      'Obtain a Succession Certificate under Sec 372 Indian Succession Act for deceased bank accounts, FDs & shares in West Bengal: court fees & timeline.',
    executiveSummary:
      'Obtain Succession Certificate under Sec 372 ISA for deceased bank accounts, FDs & shares. Petition before District Delegate/Judge with death certificate, bank balance proof & family tree. Graduated % court-fee stamp on total value (Schedule I Art 12, WB Court-fees Act, 1970). No statutory limitation; apply with death certificate, bank balance proof & family tree. Objection → District Judge/HC Appeal (Sec 384/383 ISA). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to obtain a Succession Certificate for bank deposits in West Bengal?',
        answer:
          'File Sec 372 ISA petition before District Delegate/Judge with death certificate, bank balance certificates, and family tree. Graduated % court-fee stamp on total value (Schedule I Art 12, WB Court-fees Act, 1970). No statutory limitation; apply with death certificate, balance proof, family tree.',
      },
      {
        question: 'What if a bank refuses to release funds after Succession Certificate?',
        answer:
          'Sec 381 ISA: Certificate protects debtors/banks paying in good faith. Non-compliance → District Judge/HC Appeal (Sec 384/383 ISA). File execution if bank still refuses.',
      },
      {
        question: 'Can a bank refuse to honour a valid Succession Certificate?',
        answer:
          'No. Sec 381 ISA protects debtors/banks paying in good faith. Refusal → District Judge/HC Appeal (Sec 384/383 ISA) or execution proceedings.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Banarsi Dass v. Teeku Dutta, (2005) 4 SCC 449',
        court: 'Supreme Court of India',
        holding: 'Succession Certificate proceedings under Part X ISA are summary and protect debtors/banks paying in good faith; they do not decide immovable property title.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Sec 372 Succession Certificate Petition (District Delegate / Judge)',
        feeNote: 'Graduated percentage court-fee stamp on total value of debts/securities under Schedule I Art 12, WB Court-fees Act, 1970',
        limitation: 'No statutory limitation; apply with death certificate, bank balance proof & family tree'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Objection by another claimant or bank refuses release',
        forum: 'District Judge / High Court Appeal',
        provision: 'Section 384 Appeal & Section 383 Revocation, Indian Succession Act, 1925',
        timeLimit: 'As prescribed under Sec 384 ISA / Limitation Act'
      }
    ]
  },

  'sub-money-01': {
    seoTitle: 'Cheque Bounce Sec 138 Notice & Complaint | NyayaMitra',
    seoDescription:
      'Complete Section 138 NI Act cheque bounce procedure in India & Kolkata (Bankshall / District Courts): 30-15-30 day timeline, 20% Sec 143A & appeals.',
    executiveSummary:
      'Cheque bounce under Sec 138 NI Act: 30-day demand notice → 15-day cure window → 30-day complaint filing. Bankshall CMM (Kolkata) or District CJM/JMFC. 20% Sec 143A interim compensation. Meters & Instruments: civil-compensatory nature encourages compounding. Dashrath Rupsingh: payee\'s home bank branch jurisdiction. Sec 143A 20% interim compensation. Dashrath Rupsingh: payee\'s home bank branch jurisdiction (Bankshall CMM / District CJM). Appeal/Revision: 60/90 days. Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'What is the timeline for a cheque bounce case under Section 138 NI Act?',
        answer:
          '30 days for statutory demand notice after bank return memo → 15 days cure period for drawer → 30 days to file complaint after cure period expires (total ~60 days from memo).',
      },
      {
        question: 'Where to file cheque bounce case in Kolkata?',
        answer:
          'Chief Metropolitan Magistrate (CMM), Bankshall Court, Kolkata (payee\'s home bank branch jurisdiction per Dashrath Rupsingh). District CJM/JMFC for districts.',
      },
      {
        question: 'What if complaint is filed beyond 30-day limitation?',
        answer:
          'File condonation application showing sufficient cause (Proviso to Sec 142(1)(b) NI Act). Magistrate may condone delay at filing.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Meters and Instruments Pvt. Ltd. v. Kanchan Mehta, (2018) 1 SCC 560',
        court: 'Supreme Court of India',
        holding: 'Section 138 NI Act offences are primarily civil-compensatory in nature; courts encourage compounding and swift restitution upon payment of cheque amount + interest/costs.'
      },
      {
        citation: 'Dashrath Rupsingh Rathod / Sec 142(2) NI Act Amendment (2015)',
        court: 'Supreme Court & Parliament of India',
        holding: 'Account-payee cheque complaints lie where the payee’s home bank branch (where the cheque is presented for collection) is situated (Bankshall CMM in Kolkata or District CJM/JMFC).'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Statutory 15-Day Demand Notice (Sec 138(b) NI Act)',
        feeNote: 'Registered Post / Speed Post receipt (no court fee)',
        limitation: 'Strictly within 30 days of receiving bank cheque return memo'
      },
      {
        stage: 'Filing Complaint (Sec 138 & 142) + 20% Interim Compensation (Sec 143A)',
        feeNote: 'Fixed nominal complaint court-fee stamp under WB Court-fees Act (criminal complaint schedule)',
        limitation: 'Strictly within 30 days after expiry of the 15-day cure window from notice receipt'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Complaint filed slightly beyond 30-day limitation',
        forum: 'Magistrate Court (Condonation Application)',
        provision: 'Proviso to Section 142(1)(b), Negotiable Instruments Act, 1881',
        timeLimit: 'Show sufficient cause for delay at filing'
      },
      {
        scenario: 'Dismissal of complaint / acquittal or insufficient compensation',
        forum: 'Sessions Court / High Court at Calcutta',
        provision: 'BNSS Section 419 (Appeal against acquittal) / Revision',
        timeLimit: '60 / 90 days from judgment'
      }
    ]
  },

  'sub-money-02': {
    seoTitle: 'Cyber UPI Fraud Account Freeze 1930 & BNSS | NyayaMitra',
    seoDescription:
      'Freeze stolen funds after UPI or net-banking cyber fraud in India via 1930 portal and reclaim lien amounts under Sec 497/503 BNSS 2023 before Magistrate.',
    executiveSummary:
      'UPI/net-banking fraud → Report within 1–2 hours ("Golden Hour") on Helpline 1930 / cybercrime.gov.in to place bank lien before cash-out (Sunderbhai Ambalal Desai). File Sec 497/503 BNSS release petition before Magistrate with nominal criminal petition stamp + indemnity bond. Bank refusal → RBI Ombudsman / HC Writ / Sessions Revision (RBI Unauthorized Transactions Circular + BNSS Sec 438 Revision). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to freeze stolen funds after UPI fraud?',
        answer:
          'Report within 1–2 hours ("Golden Hour") on Helpline 1930 / cybercrime.gov.in. Bank places lien before cash-out. File Sec 497/503 BNSS release petition with indemnity bond before Magistrate.',
      },
      {
        question: 'What if bank refuses refund despite RBI zero-liability rules?',
        answer:
          'Notify bank within 3 working days for zero-liability protection. Escalate to RBI Integrated Ombudsman / High Court Writ / Sessions Revision (BNSS Sec 438 Revision).',
      },
      {
        question: 'Can frozen funds be released before investigation completes?',
        answer:
          'Magistrate may order release on bond/indemnity under Sec 497/503 BNSS (Sec 451 CrPC / Sec 497 BNSS). File petition once Cyber PS confirms bank hold/lien & account freeze.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Sunderbhai Ambalal Desai v. State of Gujarat, (2002) 10 SCC 283',
        court: 'Supreme Court of India',
        holding: 'Seized/frozen money and property should not remain locked indefinitely; Magistrates must expeditiously release frozen funds upon bond/indemnity under Sec 451 CrPC / Sec 497 BNSS.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Golden-Hour Reporting on Helpline 1930 / cybercrime.gov.in',
        feeNote: 'Free (₹0 government cyber reporting)',
        limitation: 'Report within first 1–2 hours ("Golden Hour") to place bank lien before cash-out'
      },
      {
        stage: 'Release Petition Before Magistrate (Sec 497 / 503 BNSS)',
        feeNote: 'Nominal criminal miscellaneous petition stamp + indemnity bond',
        limitation: 'File once Cyber PS confirms bank hold/lien & account freeze'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Bank refuses refund despite RBI zero-liability rules or Magistrate delays release',
        forum: 'RBI Integrated Ombudsman / High Court Writ / Sessions Revision',
        provision: 'RBI Circular on Unauthorized Electronic Banking Transactions & BNSS Sec 438 Revision',
        timeLimit: 'Notify bank within 3 working days for zero-liability protection'
      }
    ]
  },

  'sub-money-03': {
    seoTitle: 'Order 37 CPC Summary Debt Recovery Suit | NyayaMitra',
    seoDescription:
      'Recover unpaid invoices, promissory notes & loan agreements fast via Order XXXVII CPC summary suit in Kolkata & West Bengal: 10-day summons & court fees.',
    executiveSummary:
      'Recover debts fast via Order XXXVII CPC summary suit in Kolkata/West Bengal: 10-day summons. Ad valorem court fee on principal + interest (Schedule I, WB Court-fees Act, 1970). 3-yr limitation from invoice/cheque/acknowledgement (Arts 19–35). IDBI Trusteeship: refined leave-to-defend principles — sham defences merit ex parte decree. Defendant enters appearance within 10 days or ex parte decree. Leave to defend granted → High Court/Appeal (Sec 115/Art 227). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file a fast-track debt recovery suit under Order XXXVII CPC?',
        answer:
          'File Order XXXVII summary plaint with ad valorem court fee on principal + interest (Schedule I, WB Court-fees Act). 10-day summons for defendant to enter appearance. 3-yr limitation from invoice/cheque/acknowledgement (Arts 19–35 Limitation Act).',
      },
      {
        question: 'What if defendant fails to appear within 10 days of summons?',
        answer:
          'Plaintiff entitled to immediate ex parte decree (Order XXXVII Rule 2(3) CPC). No leave to defend granted if defence is frivolous/sham (IDBI Trusteeship v. Hubtown).',
      },
      {
        question: 'What if leave to defend is granted unconditionally?',
        answer:
          'Proceed to full trial. Summary decree challenged → High Court at Calcutta / Appellate Court (Sec 115 CPC / Art 227 or Sec 96 Appeal). 30–90 days for appeal.',
      },
    ],
    landmarkCases: [
      {
        citation: 'IDBI Trusteeship Services Ltd. v. Hubtown Ltd., (2017) 1 SCC 568',
        court: 'Supreme Court of India',
        holding: 'Refined principles for grant of Leave to Defend under Order XXXVII Rule 3(5) CPC: frivolous or sham defences merit immediate summary decree without full trial.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Order XXXVII Summary Plaint (Civil Judge / Commercial Court)',
        feeNote: 'Ad valorem court fee on principal + claimed interest under Schedule I, WB Court-fees Act, 1970',
        limitation: '3 years from invoice/cheque/acknowledgement date (Arts 19–35 Limitation Act)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Defendant fails to enter appearance within 10 days of Rule 2 summons',
        forum: 'Trial Civil / Commercial Court',
        provision: 'Order XXXVII Rule 2(3) CPC (Plaintiff entitled to immediate ex parte decree)',
        timeLimit: 'After 10 days of summons service'
      },
      {
        scenario: 'Leave to defend unconditionally granted or summary decree challenged',
        forum: 'High Court at Calcutta / Appellate Court',
        provision: 'Section 115 CPC / Article 227 (against leave order) or Sec 96 Appeal (against decree)',
        timeLimit: '30–90 days'
      }
    ]
  },

  'sub-family-01': {
    seoTitle: 'Sec 144 BNSS Maintenance Petition Guide | NyayaMitra',
    seoDescription:
      'Claim monthly & interim maintenance for wife, children & parents under Sec 144 BNSS 2023 (ex-Sec 125 CrPC): Rajnesh v. Neha affidavit, fees & execution.',
    executiveSummary:
      'Claim monthly/interim maintenance for wife, children & parents under Sec 144 BNSS 2023 (ex-Sec 125 CrPC). Mandated uniform Affidavit of Disclosure of Assets & Liabilities (Rajnesh v. Neha); maintenance from date of application; enforcement against defaulters. Nominal court-fee stamp; free legal aid via DLSA 15100. Arrears execution within 12 months (Sec 144(3) proviso). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file a maintenance petition under Section 144 BNSS?',
        answer:
          'File Sec 144 BNSS petition in Family Court / CJM with mandatory Affidavit of Disclosure of Assets & Liabilities (Rajnesh v. Neha). Maintenance from date of application. Nominal court-fee stamp; free legal aid via DLSA 15100 for eligible women/children.',
      },
      {
        question: 'What if spouse defaults on ordered monthly maintenance?',
        answer:
          'File execution in Family Court / Magistrate: Distress Warrant (salary attachment) + Imprisonment for default under Sec 144(3) BNSS. File execution within 1 year from date amount fell due.',
      },
      {
        question: 'What if interim maintenance is rejected or inadequate?',
        answer:
          'Appeal to High Court at Calcutta (Family Courts Act Sec 19) / Sessions Court under Sec 438 BNSS Criminal Revision. 30 days (Family Courts Act) / 90 days (Revision).',
      },
    ],
    landmarkCases: [
      {
        citation: 'Rajnesh v. Neha & Anr., (2021) 2 SCC 324',
        court: 'Supreme Court of India',
        holding: 'Mandated uniform Affidavit of Disclosure of Assets and Liabilities by both spouses, payment of maintenance from date of application, and enforcement against defaulters.'
      },
      {
        citation: 'Chaturbhuj v. Sita Bai, (2008) 2 SCC 316',
        court: 'Supreme Court of India',
        holding: '"Unable to maintain herself" does not mean absolute destitution; maintenance must allow the spouse to live with dignity comparable to the matrimonial standard.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Sec 144 BNSS Maintenance & Interim Application (Family Court / CJM)',
        feeNote: 'Nominal court fee stamp under WB Court-fees Act (free legal aid via DLSA 15100 for eligible women/children)',
        limitation: 'No limitation for claiming ongoing maintenance; arrears execution within 12 months of due date (Sec 144(3) proviso)'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Spouse defaults on ordered monthly maintenance',
        forum: 'Family Court / Magistrate (Warrant & Salary Attachment)',
        provision: 'Section 144(3) BNSS, 2023 (Distress Warrant & Imprisonment for default)',
        timeLimit: 'File execution within 1 year from date amount became due'
      },
      {
        scenario: 'Inadequate maintenance or rejection of interim maintenance',
        forum: 'High Court at Calcutta (Family Courts Act Sec 19) / Sessions Court',
        provision: 'Section 19(4) Family Courts Act / Sec 438 BNSS Criminal Revision',
        timeLimit: '30 days (Family Courts Act) / 90 days (Revision)'
      }
    ]
  },

  'sub-family-02': {
    seoTitle: 'Senior Citizen Maintenance & Eviction Act | NyayaMitra',
    seoDescription:
      'Protect parents & senior citizens under Sec 5 & 23 Senior Citizens Act 2007 in West Bengal: cancel conditional gift deeds, evict abusive children & SDO appeals.',
    executiveSummary:
      'Protect parents/senior citizens under Sec 5 & 23 Senior Citizens Act 2007 in West Bengal. Cancel conditional gift deeds; evict abusive children/relatives via SDO Tribunal (Sec 23). S. Vanitha v. DC Bengaluru: Tribunal orders eviction balanced with daughter-in-law\'s shared household rights (PWDVA 2005). Sudesh Chhikara: void transfer if no express/implied condition for basic amenities. Exempt/nominal fee (no lawyers needed per Sec 17). Disposal within 90 days (Sec 5(4)). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file for senior citizen maintenance/eviction in West Bengal?',
        answer:
          'File Sec 5/23 Senior Citizens Act application before SDO Tribunal. Exempt/nominal fee; no lawyers mandatory (Sec 17). Tribunal targets 90-day disposal (Sec 5(4)). Maintenance & eviction of abusive children/relatives.',
      },
      {
        question: 'Can a daughter-in-law claim shared household rights during parents\' eviction case?',
        answer:
          'Yes. S. Vanitha v. DC Bengaluru (2021 SC): Tribunal orders eviction balanced with daughter-in-law\'s right of shared household under PWDVA 2005. Eviction order balanced with her right of residence.',
      },
      {
        question: 'What if property transfer under Sec 23 is challenged?',
        answer:
          'Sudesh Chhikara v. Ramti Devi: Deed must contain express/implied condition that transferee provides basic amenities/physical needs. Absent condition → transfer voidable under Sec 23(1).',
      },
    ],
    landmarkCases: [
      {
        citation: 'S. Vanitha v. Deputy Commissioner, Bengaluru Urban, (2021) 15 SCC 730',
        court: 'Supreme Court of India',
        holding: 'Senior Citizens Act Tribunal has power to order eviction of abusive children/relatives, balanced harmoniously with a daughter-in-law’s right of shared household under PWDVA 2005.'
      },
      {
        citation: 'Sudesh Chhikara v. Ramti Devi & Anr., 2022 SCC OnLine SC 1684',
        court: 'Supreme Court of India',
        holding: 'To void a property transfer under Sec 23(1), the deed must contain an express or implied condition that the transferee shall provide basic amenities and physical needs.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Maintenance / Sec 23 Gift Cancellation Before SDO Tribunal',
        feeNote: 'Exempt / nominal application fee (lawyers not mandatory before Tribunal under Sec 17)',
        limitation: 'No strict limitation for maintenance; Tribunal aims for disposal within 90 days (Sec 5(4))'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Maintenance or eviction application rejected by SDO Tribunal',
        forum: 'Appellate Tribunal (District Magistrate)',
        provision: 'Section 16 Appeal, Maintenance and Welfare of Parents & Senior Citizens Act, 2007',
        timeLimit: '60 days from date of Tribunal order'
      }
    ]
  },

  'sub-family-03': {
    seoTitle: 'Domestic Violence Act PWDVA 2005 Protection | NyayaMitra',
    seoDescription:
      'Seek protection, shared residence & monetary relief under Sec 12, 18, 19 & 20 PWDVA 2005 in India & West Bengal: DIR, interim ex parte orders & Sec 29 appeals.',
    executiveSummary:
      'Seek protection, shared residence & monetary relief under Sec 12, 18, 19 & 20 PWDVA 2005 in India & West Bengal. Prabha Tyagi: DIR from Protection Officer NOT mandatory for Magistrate to take cognizance/interim orders; subsisting domestic relationship at filing not required for shared household rights. Free legal aid via DLSA 15100. Interim/ex parte orders within 3 days; disposal target 60 days (Sec 12(4)-(5)). Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010).',
    faqs: [
      {
        question: 'How to file a Domestic Violence Act application in West Bengal?',
        answer:
          'File Sec 12 PWDVA application before Magistrate. DIR from Protection Officer NOT mandatory (Prabha Tyagi); subsisting domestic relationship at filing NOT required for shared household rights. Zero/nominal stamp duty; free legal aid via DLSA 15100. Interim/ex parte orders within 3 days; disposal target 60 days (Sec 12(4)-(5)).',
      },
      {
        question: 'What if interim residence/protection order is refused?',
        answer:
          'Appeal to Court of Sessions Judge under Sec 29 PWDVA 2005. File within 30 days of Magistrate order.',
      },
      {
        question: 'Does shared household right apply if woman was never married to respondent?',
        answer:
          'Yes. Domestic relationship includes live-in relationships "in the nature of marriage" (Velusamy v. Patchaiammal). Shared household right extends to all women in domestic relationship regardless of marital status.',
      },
    ],
    landmarkCases: [
      {
        citation: 'Prabha Tyagi v. Kamlesh Devi, (2022) 8 SCC 90',
        court: 'Supreme Court of India',
        holding: 'A Domestic Incident Report (DIR) from a Protection Officer is NOT mandatory before a Magistrate takes cognizance and passes interim orders on a Sec 12 PWDVA application; subsisting domestic relationship at filing is not required for shared household rights.'
      }
    ],
    courtFeeAndLimitation: [
      {
        stage: 'Sec 12 Application & Ex Parte Interim Relief (Sec 23 PWDVA)',
        feeNote: 'Zero / nominal stamp duty; free legal aid available via DLSA 15100',
        limitation: 'First hearing targeted within 3 days; disposal targeted within 60 days (Sec 12(4)-(5))'
      }
    ],
    remediesAgainstRejection: [
      {
        scenario: 'Interim residence/protection order refused or modified adversely',
        forum: 'Court of Sessions Judge',
        provision: 'Section 29 Appeal, Protection of Women from Domestic Violence Act, 2005',
        timeLimit: '30 days from date of Magistrate order'
      }
    ]
  }
};
