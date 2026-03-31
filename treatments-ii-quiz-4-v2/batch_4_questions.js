/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 3 - Action 4: Batch 4 (Questions 151 - 200)
 * Curriculum: Quiz 4 (Digestive, Metabolic, Infant Massage, Peripheral Nervous System)
 * Difficulty Distribution: 25 Easy, 15 Medium, 10 Hard
 */

window.batch4Questions = [
  // ==========================================
  // EASY: Foundational Definitions & Protocols
  // ==========================================
  {
    id: 151,
    topic: "Digestive System",
    difficulty: "Easy",
    question: "When performing an abdominal massage to address chronic constipation, what is the required directional protocol?",
    options: ["Counter-clockwise.", "Clockwise, following the ascending, transverse, and descending colon.", "Medial to lateral from the umbilicus.", "Deep sustained compression directly over the cecum."],
    correctAnswer: 1,
    rationale: "Abdominal massage must follow the anatomical direction of peristalsis (clockwise) to safely and effectively move fecal matter through the large intestine (Andrade, 2023)."
  },
  {
    id: 152,
    topic: "Digestive System",
    difficulty: "Easy",
    question: "Which of the following conditions is a functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits (diarrhea/constipation) WITHOUT any structural tissue damage or inflammation?",
    options: ["Crohn's Disease", "Ulcerative Colitis", "Irritable Bowel Syndrome (IBS)", "Diverticulitis"],
    correctAnswer: 2,
    rationale: "IBS is a functional disorder involving visceral hypersensitivity and altered gut motility. Unlike Inflammatory Bowel Disease (IBD), IBS does not cause structural damage or ulceration to the intestinal lining (Norris, 2020)."
  },
  {
    id: 153,
    topic: "Digestive System",
    difficulty: "Easy",
    question: "Crohn's Disease and Ulcerative Colitis are both classified under which broader medical category?",
    options: ["Irritable Bowel Syndrome (IBS)", "Inflammatory Bowel Disease (IBD)", "Metabolic Syndromes", "Peptic Ulcer Diseases"],
    correctAnswer: 1,
    rationale: "Crohn's Disease and Ulcerative Colitis are the two primary types of Inflammatory Bowel Disease (IBD), characterized by chronic, destructive autoimmune inflammation of the gastrointestinal tract (Werner, 2019)."
  },
  {
    id: 154,
    topic: "Metabolic Conditions",
    difficulty: "Easy",
    question: "Type 1 Diabetes Mellitus is primarily caused by:",
    options: ["Insulin resistance at the cellular receptor level due to obesity.", "An autoimmune destruction of the insulin-producing beta cells in the pancreas.", "Overconsumption of dietary sugar.", "A failure of the kidneys to excrete glucose."],
    correctAnswer: 1,
    rationale: "Type 1 Diabetes is an autoimmune condition where the immune system destroys the pancreatic beta cells, resulting in an absolute deficiency of insulin production (Norris, 2020)."
  },
  {
    id: 155,
    topic: "Metabolic Conditions",
    difficulty: "Easy",
    question: "What is a major, common systemic complication of chronic, poorly managed Diabetes Mellitus that a massage therapist must assess for?",
    options: ["Peripheral neuropathy (loss of protective sensation in the extremities).", "Hyperkyphosis.", "Thoracic Outlet Syndrome.", "Osteoarthritis of the TMJ."],
    correctAnswer: 0,
    rationale: "Chronic hyperglycemia damages the microvasculature supplying the peripheral nerves, leading to diabetic peripheral neuropathy. This results in numbness, tingling, and a dangerous loss of pain sensation, particularly in the feet (Werner, 2019)."
  },
  {
    id: 156,
    topic: "Special Populations (Infant Massage)",
    difficulty: "Easy",
    question: "Which of the following represents an ABSOLUTE contraindication for performing infant massage?",
    options: ["The infant is crying.", "The infant has an acute systemic infection or a fever.", "The infant has not slept well the previous night.", "The infant has mild cradle cap."],
    correctAnswer: 1,
    rationale: "As with adult populations, an acute systemic infection or fever is an absolute contraindication. Massage increases systemic circulation and metabolic demand, which can overtax an infant's actively fighting immune system (Andrade, 2023)."
  },
  {
    id: 157,
    topic: "Special Populations (Infant Massage)",
    difficulty: "Easy",
    question: "When a massage therapist is instructing a parent on infant massage, what is the primary indicator that the massage should be stopped or modified?",
    options: ["The infant smiles.", "The infant exhibits disengagement cues such as crying, turning away, or stiffening.", "The infant falls asleep.", "The infant makes eye contact."],
    correctAnswer: 1,
    rationale: "Infants communicate tolerance through behavioral cues. Disengagement cues (crying, arching the back, averting gaze, stiffening) indicate sensory overload or discomfort, requiring the therapist or parent to immediately cease or alter the intervention (Andrade, 2023)."
  },
  {
    id: 158,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Thoracic Outlet Syndrome (TOS) involves the compression of the neurovascular bundle. Which specific nerve plexus is typically compromised in TOS?",
    options: ["Cervical Plexus", "Brachial Plexus", "Lumbar Plexus", "Sacral Plexus"],
    correctAnswer: 1,
    rationale: "TOS involves the entrapment of the brachial plexus (C5-T1 nerve roots) and/or the subclavian artery and vein as they exit the cervical region and descend into the arm (Magee, 2021)."
  },
  {
    id: 159,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Which of the following is NOT one of the three primary entrapment sites for Thoracic Outlet Syndrome (TOS)?",
    options: ["Between the anterior and middle scalene muscles (Interscalene triangle).", "Between the clavicle and the first rib (Costoclavicular space).", "Beneath the pectoralis minor muscle (Subcoracoid space).", "Within the carpal tunnel of the wrist."],
    correctAnswer: 3,
    rationale: "The carpal tunnel is an entrapment site for the median nerve at the wrist, not part of the thoracic outlet. TOS specifically involves the scalenes, the costoclavicular space, or the pectoralis minor (Hertling & Kessler, 2006)."
  },
  {
    id: 160,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Carpal Tunnel Syndrome is defined as the compression of which specific nerve at the wrist?",
    options: ["Ulnar Nerve", "Radial Nerve", "Median Nerve", "Musculocutaneous Nerve"],
    correctAnswer: 2,
    rationale: "Carpal Tunnel Syndrome is the entrapment neuropathy of the median nerve as it passes beneath the transverse carpal ligament (flexor retinaculum) at the wrist (Magee, 2021)."
  },
  {
    id: 161,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "A client with Carpal Tunnel Syndrome will most commonly experience numbness, tingling, and pain in which part of the hand?",
    options: ["The palmar aspect of the thumb, index, middle, and radial half of the ring finger.", "The dorsal aspect of the entire hand.", "Only the 5th digit (pinky finger).", "The 4th and 5th digits."],
    correctAnswer: 0,
    rationale: "The sensory distribution of the median nerve covers the palmar surface of the thumb (1st digit), index (2nd), middle (3rd), and the lateral half of the ring finger (4th digit) (Tortora & Derrickson, 2017)."
  },
  {
    id: 162,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Piriformis Syndrome involves the compression of which major peripheral nerve?",
    options: ["Femoral Nerve", "Sciatic Nerve", "Obturator Nerve", "Pudendal Nerve"],
    correctAnswer: 1,
    rationale: "Piriformis syndrome occurs when a hypertonic or contractured piriformis muscle compresses the sciatic nerve as it exits the greater sciatic foramen, causing pain and paresthesia down the posterior leg (Werner, 2019)."
  },
  {
    id: 163,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Which of the following is a classic mechanism of injury for a Radial Nerve lesion causing 'Saturday Night Palsy'?",
    options: ["Repetitive typing on a keyboard.", "Compression of the nerve against the humerus (e.g., falling asleep with the arm draped over the back of a hard chair).", "A direct blow to the 'funny bone' at the elbow.", "Hypertonicity of the piriformis muscle."],
    correctAnswer: 1,
    rationale: "The radial nerve spirals around the posterior humerus in the radial groove. Prolonged compression in this area (often while intoxicated, hence 'Saturday Night') causes ischemia and neuropraxia of the radial nerve (Magee, 2021)."
  },
  {
    id: 164,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "What is the hallmark motor deficit (visible deformity) associated with a severe Radial Nerve lesion?",
    options: ["Ape Hand", "Claw Hand", "Wrist Drop", "Foot Drop"],
    correctAnswer: 2,
    rationale: "The radial nerve innervates the extensor muscles of the posterior arm and forearm. A lesion results in paralysis of the wrist and finger extensors, causing the hand to hang limply in flexion, known as 'Wrist Drop' (Tortora & Derrickson, 2017)."
  },
  {
    id: 165,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "A lesion of the Ulnar Nerve, often compressed at the cubital tunnel ('funny bone'), primarily affects which digits?",
    options: ["The thumb and index finger.", "The 4th (ring) and 5th (little) digits.", "All five digits equally.", "The middle finger only."],
    correctAnswer: 1,
    rationale: "The ulnar nerve provides sensory innervation to the 5th digit and the medial half of the 4th digit. Entrapment commonly causes paresthesia and weakness specifically in these fingers (Magee, 2021)."
  },
  {
    id: 166,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "What visible hand deformity is classically associated with a severe, chronic Ulnar Nerve lesion?",
    options: ["Ape Hand", "Wrist Drop", "Claw Hand (or Ulnar Claw)", "Swan Neck Deformity"],
    correctAnswer: 2,
    rationale: "The ulnar nerve innervates the intrinsic muscles of the hand (lumbricals of digits 4 and 5). Loss of this innervation causes the 4th and 5th digits to hyperextend at the MCP joints and flex at the IP joints, creating a 'Claw Hand' (Hertling & Kessler, 2006)."
  },
  {
    id: 167,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Severe compression of the Median Nerve can lead to atrophy of the thenar eminence (the muscle mass at the base of the thumb). This specific clinical deformity is known as:",
    options: ["Claw Hand", "Ape Hand", "Wrist Drop", "Boutonniere Deformity"],
    correctAnswer: 1,
    rationale: "The median nerve innervates the thenar muscles responsible for thumb apposition. Severe lesions cause these muscles to waste away, flattening the palm and leaving the thumb resting in the same plane as the other fingers—termed 'Ape Hand' (Magee, 2021)."
  },
  {
    id: 168,
    topic: "Metabolic Conditions",
    difficulty: "Easy",
    question: "When treating a client with Diabetes Mellitus who injects insulin, what is a crucial local contraindication?",
    options: ["Do not massage the abdomen at all.", "Massage directly over recent injection sites is contraindicated.", "Do not massage the neck.", "Massage is completely contraindicated for all diabetics."],
    correctAnswer: 1,
    rationale: "Massaging over a recent insulin injection site increases local blood flow, which can dangerously accelerate the absorption rate of the insulin into the bloodstream, potentially causing a hypoglycemic emergency (Werner, 2019)."
  },
  {
    id: 169,
    topic: "Digestive System",
    difficulty: "Easy",
    question: "Abdominal massage is absolutely contraindicated during an active flare-up of which condition?",
    options: ["Mild, chronic constipation", "Inflammatory Bowel Disease (Crohn's Disease or Ulcerative Colitis)", "Tension headaches", "Irritable Bowel Syndrome (IBS) without pain"],
    correctAnswer: 1,
    rationale: "During an active IBD flare-up, the intestinal walls are highly inflamed, ulcerated, and friable. Direct mechanical pressure on the abdomen is strictly contraindicated as it can cause severe pain or trigger an intestinal perforation (Werner, 2019)."
  },
  {
    id: 170,
    topic: "Special Populations (Infant Massage)",
    difficulty: "Easy",
    question: "What type of oil is generally recommended as the safest option for infant massage?",
    options: ["Heavy mineral oils", "Scented essential oils like eucalyptus", "Cold-pressed, edible, food-grade oils (e.g., grapeseed or sunflower oil)", "Warming muscle rubs"],
    correctAnswer: 2,
    rationale: "Infants frequently put their hands and feet in their mouths. Therefore, cold-pressed, unscented, edible food-grade oils are recommended to prevent ingestion toxicity and minimize allergic skin reactions (Andrade, 2023)."
  },
  {
    id: 171,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "Which of the following symptoms is a hallmark sign of a peripheral nerve entrapment (like TOS or Carpal Tunnel)?",
    options: ["A deep, localized, dull ache in a muscle belly.", "Paresthesia (numbness, tingling, 'pins and needles') radiating into the distal extremity.", "A high systemic fever.", "A sudden, visible bruise."],
    correctAnswer: 1,
    rationale: "Neuropathic pain resulting from nerve compression classically presents with altered sensation—paresthesia (tingling/numbness), burning, or shooting electrical pain that radiates along the nerve's distribution pathway (Magee, 2021)."
  },
  {
    id: 172,
    topic: "Digestive System",
    difficulty: "Easy",
    question: "The autonomic nervous system regulates digestion. Which branch must be stimulated to encourage bowel motility and relieve constipation?",
    options: ["Sympathetic Nervous System ('Fight or Flight')", "Parasympathetic Nervous System ('Rest and Digest')", "Somatic Nervous System", "Central Nervous System"],
    correctAnswer: 1,
    rationale: "The parasympathetic nervous system (primarily via the vagus nerve) stimulates gastrointestinal motility, peristalsis, and glandular secretion. Massage aims to down-regulate sympathetic tone to allow parasympathetic dominance for digestion (Tortora & Derrickson, 2017)."
  },
  {
    id: 173,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "True or False: Piriformis Syndrome is considered a radiculopathy.",
    options: ["True. It originates at the spinal nerve root.", "False. It is a peripheral entrapment neuropathy, not a spinal radiculopathy.", "True. It always involves a herniated disc.", "False. It is a vascular disease."],
    correctAnswer: 1,
    rationale: "A radiculopathy strictly refers to pathology at the spinal nerve root (e.g., from a herniated lumbar disc). Piriformis syndrome is an entrapment of the sciatic nerve occurring peripherally in the gluteal region, making it an entrapment neuropathy, not a radiculopathy (Hertling & Kessler, 2006)."
  },
  {
    id: 174,
    topic: "Metabolic Conditions",
    difficulty: "Easy",
    question: "Hypoglycemia is a medical emergency that can occur in diabetic clients. What does hypoglycemia mean?",
    options: ["Dangerously low blood sugar (glucose) levels.", "Dangerously high blood sugar (glucose) levels.", "High blood pressure.", "Low blood oxygen levels."],
    correctAnswer: 0,
    rationale: "Hypoglycemia (low blood sugar) can occur if a diabetic client takes too much insulin, skips a meal, or exercises heavily. Symptoms include shaking, sweating, confusion, and potential unconsciousness (Norris, 2020)."
  },
  {
    id: 175,
    topic: "Peripheral Nervous System",
    difficulty: "Easy",
    question: "What does the Phalen's Test specifically assess for?",
    options: ["Thoracic Outlet Syndrome", "Radial nerve palsy", "Carpal Tunnel Syndrome (Median nerve compression)", "Ulnar nerve compression at the elbow"],
    correctAnswer: 2,
    rationale: "Phalen's test involves forced maximal wrist flexion for 60 seconds. This compresses the space within the carpal tunnel; reproducing numbness or tingling in the median nerve distribution is a positive sign for Carpal Tunnel Syndrome (Magee, 2021)."
  },

  // ==========================================
  // MEDIUM: Pathophysiology & Clinical Reasoning
  // ==========================================
  {
    id: 176,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "During an assessment for Thoracic Outlet Syndrome, you perform Adson's Test. The client's radial pulse diminishes and their arm tingling is reproduced. Which specific entrapment site does this implicate?",
    options: [
      "The Subcoracoid space (Pectoralis Minor).",
      "The Interscalene Triangle (compression between the anterior and middle scalenes).",
      "The Costoclavicular space (between the clavicle and first rib).",
      "The Carpal Tunnel."
    ],
    correctAnswer: 1,
    rationale: "Adson's test requires the client to extend and rotate their neck toward the tested side while holding a deep breath. This mechanically narrows the interscalene triangle, specifically implicating the anterior and middle scalenes as the entrapment site (Magee, 2021)."
  },
  {
    id: 177,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "Which orthopedic test specifically assesses the Subcoracoid space (beneath the Pectoralis Minor) for Thoracic Outlet Syndrome?",
    options: ["Adson's Test", "Eden's (Costoclavicular) Test", "Wright's (Hyperabduction) Test", "Phalen's Test"],
    correctAnswer: 2,
    rationale: "Wright's test involves hyperabducting the client's arm while monitoring the radial pulse. This movement stretches the pectoralis minor over the coracoid process, trapping the neurovascular bundle if the muscle is hypertonic (Magee, 2021)."
  },
  {
    id: 178,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "How do you clinically differentiate between True Sciatica and Piriformis Syndrome?",
    options: [
      "True sciatica is unilateral; Piriformis syndrome is bilateral.",
      "True sciatica (radiculopathy) usually involves neurological signs (diminished deep tendon reflexes, myotome weakness) and a positive Straight Leg Raise testing the nerve roots. Piriformis syndrome is a peripheral entrapment that rarely diminishes spinal reflexes and is provoked by resisting hip external rotation.",
      "True sciatica only affects the foot; Piriformis syndrome only affects the thigh.",
      "They are identical and cannot be differentiated."
    ],
    correctAnswer: 1,
    rationale: "True sciatica originates from spinal nerve root compression (L4-S3), affecting deep spinal reflexes and dermatomes/myotomes. Piriformis syndrome compresses the nerve peripherally after it has exited the spine, meaning spinal reflexes usually remain intact, but local provocation (stretching/contracting the piriformis) causes pain (Hertling & Kessler, 2006)."
  },
  {
    id: 179,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "Tinel's Sign is a common neurological assessment. How is it performed and what does it indicate?",
    options: [
      "Stretching the nerve to see if it tears.",
      "Tapping directly over a superficial nerve (e.g., the median nerve at the wrist). A positive sign is a tingling sensation radiating distally, indicating nerve irritation or regeneration.",
      "Applying heat to a nerve to test thermal sensation.",
      "Injecting dye into the nerve sheath."
    ],
    correctAnswer: 1,
    rationale: "Tinel's sign is elicited by lightly tapping (percussing) over a nerve. If the nerve is irritated, compressed, or regenerating, this mechanical tap will send an electrical 'zap' or tingling sensation distally along its sensory distribution (Magee, 2021)."
  },
  {
    id: 180,
    topic: "Digestive System",
    difficulty: "Medium",
    question: "A client with Irritable Bowel Syndrome (IBS) presents with IBS-D (diarrhea-predominant). How should your abdominal massage protocol differ from treating a client with constipation?",
    options: [
      "Use extremely deep, fast clockwise strokes to stop the diarrhea.",
      "Abdominal massage is contraindicated for IBS-D. Instead, focus on soothing, parasympathetic-inducing techniques (e.g., gentle back massage, sacral holds) to reduce visceral hyper-motility and down-regulate the nervous system.",
      "Use counter-clockwise strokes to push the stool backward.",
      "Apply ice packs to the abdomen."
    ],
    correctAnswer: 1,
    rationale: "In diarrhea-predominant IBS, the gut is hyper-motile. Direct abdominal massage (which stimulates peristalsis) is counterproductive and often uncomfortable. The clinical goal is to calm the nervous system to reduce gut hyperactivity (Werner, 2019)."
  },
  {
    id: 181,
    topic: "Metabolic Conditions",
    difficulty: "Medium",
    question: "Why must a massage therapist meticulously assess the skin integrity of the feet in a client with long-standing Diabetes Mellitus?",
    options: [
      "To check for contagious foot fungus.",
      "Diabetic neuropathy causes a loss of protective pain sensation, and peripheral vascular disease impairs healing. A minor scrape or blister can go unnoticed, become infected, and rapidly develop into a necrotic ulcer, leading to amputation.",
      "To determine if they need reflexology.",
      "To check their blood glucose levels."
    ],
    correctAnswer: 1,
    rationale: "The combination of sensory loss (neuropathy) and poor circulation (ischemia) in the lower extremities makes diabetics highly susceptible to severe, non-healing foot ulcers. The therapist must visually inspect the tissue and avoid deep pressure on fragile skin (Norris, 2020)."
  },
  {
    id: 182,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "What is 'Double Crush Syndrome'?",
    options: [
      "Being run over by a car twice.",
      "A condition where a peripheral nerve is compressed at two or more locations along its pathway (e.g., a cervical nerve root compression combined with Carpal Tunnel Syndrome), making it more symptomatic than a single lesion.",
      "A fracture of two carpal bones simultaneously.",
      "A muscle strain occurring on both sides of a joint."
    ],
    correctAnswer: 1,
    rationale: "Double Crush Syndrome occurs when a nerve's axoplasmic flow is impaired at one proximal site (like the thoracic outlet), making the distal portion of the nerve highly susceptible to injury or compression at a second site (like the carpal tunnel) (Magee, 2021)."
  },
  {
    id: 183,
    topic: "Special Populations (Infant Massage)",
    difficulty: "Medium",
    question: "When performing or teaching infant massage, what is the appropriate level of pressure?",
    options: [
      "Deep tissue pressure to release fascial restrictions.",
      "Light, feather-stroking (tickling) to stimulate the nerves.",
      "Firm, gentle, and consistent contact. Pressure should be enough to move the skin slightly without pressing deeply into muscle tissue, avoiding light tickling which can overstimulate the nervous system.",
      "Joint mobilizations to Grade 4."
    ],
    correctAnswer: 2,
    rationale: "Infants have highly sensitive nervous systems. Light, tickling strokes are often irritating or agitating. Firm, confident, and consistent contact provides soothing proprioceptive input without causing structural harm or sensory overload (Andrade, 2023)."
  },
  {
    id: 184,
    topic: "Digestive System",
    difficulty: "Medium",
    question: "A client reports experiencing alternating bouts of diarrhea and constipation, accompanied by abdominal bloating and cramping that is temporarily relieved by defecation. Medical tests show no inflammation or ulcers. This clinical picture is the classic presentation of:",
    options: ["Crohn's Disease", "Irritable Bowel Syndrome (IBS)", "Colon Cancer", "Appendicitis"],
    correctAnswer: 1,
    rationale: "This is the classic diagnostic criteria (Rome IV criteria) for Irritable Bowel Syndrome: abdominal pain associated with defecation and a change in bowel habits, in the absolute absence of structural or inflammatory pathology on medical imaging (Norris, 2020)."
  },
  {
    id: 185,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "During a postural assessment, you observe a client with significant anterior pelvic tilt and internal rotation of the femurs. They complain of sciatica-like pain. How does this posture contribute to Piriformis Syndrome?",
    options: [
      "It causes the spine to fuse.",
      "Internal femoral rotation places the external rotators (including the piriformis) in a chronically overstretched, eccentric load, leading to ischemia, trigger points, and hypertonicity, which subsequently compresses the sciatic nerve.",
      "It causes the hamstrings to atrophy.",
      "It has no biomechanical effect on the piriformis."
    ],
    correctAnswer: 1,
    rationale: "The piriformis is an external rotator of the hip. Chronic internal rotation (often accompanying anterior pelvic tilt) continuously strains the piriformis. This eccentric loading causes the muscle to become taut and inflamed, compressing the underlying sciatic nerve (Hertling & Kessler, 2006)."
  },
  {
    id: 186,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "A client tests positive on Eden's Test (Costoclavicular Test). Based on OP protocols, which structures must the therapist target to relieve this specific TOS entrapment?",
    options: [
      "The Pectoralis Minor.",
      "The Anterior and Middle Scalenes.",
      "The Subclavius muscle and structures depressing the clavicle, aiming to increase the space between the clavicle and the first rib.",
      "The Flexor Retinaculum."
    ],
    correctAnswer: 2,
    rationale: "Eden's test assesses the costoclavicular space. Entrapment here is often caused by a depressed clavicle or an elevated first rib. Treatment must address the subclavius, scalenes (which elevate the 1st rib), and postural re-education to elevate the shoulder girdle (Magee, 2021)."
  },
  {
    id: 187,
    topic: "Metabolic Conditions",
    difficulty: "Medium",
    question: "If a diabetic client begins to exhibit signs of hypoglycemia (shaking, sweating, confusion, slurred speech) during a massage session, what is your immediate clinical action?",
    options: [
      "Continue the massage but apply ice to the back of their neck.",
      "Stop the massage immediately, sit the client up, and provide a fast-acting source of oral glucose (e.g., fruit juice, glucose tablets, or hard candy) if they are conscious and able to swallow.",
      "Administer an insulin injection.",
      "Perform deep effleurage on their legs to increase circulation."
    ],
    correctAnswer: 1,
    rationale: "Hypoglycemia is a rapidly progressing medical emergency. The brain is starving for glucose. If the client is conscious, immediate administration of fast-acting sugar is required to stabilize blood glucose levels. If unconscious, call 911 immediately (Werner, 2019)."
  },
  {
    id: 188,
    topic: "Digestive System",
    difficulty: "Medium",
    question: "In the context of abdominal massage for constipation, where does the sequence anatomically begin and end?",
    options: [
      "Begins at the sigmoid colon; ends at the cecum.",
      "Begins at the cecum (lower right quadrant), travels up the ascending colon, across the transverse colon, and down the descending colon to the sigmoid colon (lower left quadrant).",
      "Begins at the stomach; ends at the liver.",
      "Begins at the umbilicus and spirals outward."
    ],
    correctAnswer: 1,
    rationale: "To physically assist the movement of fecal matter, the strokes must follow the anatomical pathway of the large intestine, starting at the ileocecal valve (lower right), moving superiorly, then transversely, and finally inferiorly toward the rectum (Andrade, 2023)."
  },
  {
    id: 189,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "What is the PACE test used for, and what indicates a positive result?",
    options: [
      "Tests the median nerve; positive is tingling in the thumb.",
      "Tests for Piriformis Syndrome; the client actively abducts and externally rotates their hips against the therapist's resistance while seated. A positive sign is pain in the gluteal region, indicating piriformis pathology.",
      "Tests for TOS; positive is a loss of radial pulse.",
      "Tests for carpal tunnel; positive is wrist drop."
    ],
    correctAnswer: 1,
    rationale: "The PACE sign involves resisted abduction and external rotation of the hip in a seated position. Since the piriformis performs these actions, resisting them will provoke pain if the muscle is inflamed or in spasm, helping differentiate it from a spinal disc issue (Magee, 2021)."
  },
  {
    id: 190,
    topic: "Peripheral Nervous System",
    difficulty: "Medium",
    question: "A client complains of hand numbness that wakes them up at night. They frequently have to 'shake out' their hands to restore feeling. This specific nocturnal symptom pattern is a classic hallmark of:",
    options: ["Thoracic Outlet Syndrome", "Ulnar Nerve Palsy", "Carpal Tunnel Syndrome (CTS)", "Radial Nerve Palsy"],
    correctAnswer: 2,
    rationale: "Nocturnal pain and paresthesia that awakens the patient, prompting them to 'flick' or shake their hands (the 'Flick Sign'), is a highly specific and classic diagnostic symptom of Carpal Tunnel Syndrome, often caused by sleeping with flexed wrists (Magee, 2021)."
  },

  // ==========================================
  // HARD: Complex STEMs & OP Clinical Reasoning
  // ==========================================
  {
    id: 191,
    topic: "Case Scenario: Pregnancy & Neuropathy",
    difficulty: "Hard",
    question: "STEM: A client in her 30th week of pregnancy presents with severe bilateral numbness and tingling in her thumbs, index, and middle fingers. She has no history of neck trauma. What is the most likely pathophysiological mechanism for her symptoms, and how does it dictate treatment?",
    options: [
      "She has bilateral Thoracic Outlet Syndrome from poor posture. Treat the scalenes vigorously.",
      "Pregnancy-induced fluid retention (edema) is increasing pressure within the rigid carpal tunnels, compressing both median nerves. Treatment must focus on systemic lymphatic drainage (MLD), arm elevation, and safe myofascial release of the flexor retinaculum, avoiding deep tissue techniques.",
      "She has a cervical disc herniation. Refer to surgery.",
      "It is a normal pregnancy symptom; massage is contraindicated."
    ],
    correctAnswer: 1,
    rationale: "Gestational edema frequently causes temporary, secondary Carpal Tunnel Syndrome because the carpal tunnel is an inelastic space. The clinical focus must shift from standard musculoskeletal friction to fluid management (MLD) and accommodating pregnancy safety protocols (Werner, 2019)."
  },
  {
    id: 192,
    topic: "Case Scenario: Differential Diagnosis (Sciatica vs. Piriformis)",
    difficulty: "Hard",
    question: "STEM: A client presents with shooting pain down the back of their right leg to their calf. OP Assessment: Straight Leg Raise (SLR) is positive at 35 degrees. Deep tendon reflex of the Achilles tendon (S1/S2) is noticeably diminished on the right side. PACE test is negative. What is your clinical impression?",
    options: [
      "Classic Piriformis Syndrome. Apply deep ischemic compression to the glutes.",
      "True Sciatica (Lumbar Radiculopathy). The diminished spinal reflex and early positive SLR strongly indicate a nerve root compression (e.g., L5/S1 disc herniation), not a peripheral piriformis entrapment. Refer to a physician for imaging and avoid aggressive lumbar manipulation.",
      "IT Band Friction Syndrome.",
      "Acute Compartment Syndrome."
    ],
    correctAnswer: 1,
    rationale: "Willis College standards require differentiating nerve root from peripheral entrapment. A diminished deep tendon reflex (Achilles) is a hard neurological sign of spinal nerve root compromise. Piriformis syndrome is peripheral and does not typically alter spinal reflexes (Magee, 2021)."
  },
  {
    id: 193,
    topic: "Case Scenario: Double Crush & Posture",
    difficulty: "Hard",
    question: "STEM: A data entry clerk presents with Carpal Tunnel Syndrome. Despite wearing wrist splints and receiving localized wrist treatments, their symptoms haven't improved. Postural assessment reveals severe Hyperkyphosis (forward head, rounded shoulders). What advanced clinical reasoning concept applies here?",
    options: [
      "The wrist splints are causing the hyperkyphosis.",
      "Double Crush Syndrome. The hyperkyphotic posture is likely compressing the brachial plexus proximally at the Thoracic Outlet (e.g., tight pectoralis minor). This proximal restriction makes the median nerve highly vulnerable to distal compression at the carpal tunnel. You must treat the anterior chest and neck, not just the wrist.",
      "They have Dupuytren's contracture, not CTS.",
      "The client needs a stronger wrist splint."
    ],
    correctAnswer: 1,
    rationale: "In Double Crush Syndrome, proximal nerve impingement (TOS from poor posture) impairs axonal transport, reducing the nerve's ability to withstand minor compressions distally (at the wrist). Treating only the wrist will fail; the therapist must address the proximal postural entrapment (Hertling & Kessler, 2006)."
  },
  {
    id: 194,
    topic: "Case Scenario: Diabetic Complications",
    difficulty: "Hard",
    question: "STEM: A 65-year-old client with Type 2 Diabetes books a massage for a severe calf cramp. Upon visual inspection of their foot, you notice a dark, open, painless ulcer on the plantar surface of their heel. The client says, 'Oh, I didn't even feel that, I must have stepped on something.' What is your immediate clinical action?",
    options: [
      "Clean the wound, apply a bandage, and perform deep tissue massage on the calf.",
      "Massage the foot to increase circulation to the ulcer.",
      "Massage is absolutely locally contraindicated for the affected leg due to the open wound and high risk of systemic infection. The client must be referred immediately to a physician or wound care specialist, as diabetic ulcers can quickly lead to gangrene.",
      "Perform MLD directly over the ulcer."
    ],
    correctAnswer: 2,
    rationale: "A painless, open ulcer in a diabetic client indicates severe peripheral neuropathy and compromised healing. This is a massive infection risk. The therapist cannot treat the limb and must prioritize emergency medical referral to prevent potential amputation (Werner, 2019)."
  },
  {
    id: 195,
    topic: "Oral Practical: TOS Assessment Sequence",
    difficulty: "Hard",
    question: "STEM: During an Oral Practical, you suspect Thoracic Outlet Syndrome. The examiner asks you to demonstrate the specific test to isolate the Pectoralis Minor. You perform Wright's (Hyperabduction) Test, and the radial pulse disappears. What is the precise treatment protocol you must now verbally justify to the examiner?",
    options: [
      "I will apply Muscle Approximation to the Anterior Scalenes.",
      "I will perform Grade 4 joint mobilizations on the cervical spine.",
      "Because Wright's test isolates the subcoracoid space, I will target the Pectoralis Minor. I will apply Myofascial Release to the anterior chest, followed by specific friction to the coracoid process attachment, and finish with a passive pectoral stretch.",
      "I will stretch the carpal tunnel."
    ],
    correctAnswer: 2,
    rationale: "OP grading requires linking the specific positive orthopedic test to the exact anatomical treatment site. Wright's test specifically entraps the neurovascular bundle under a tight pectoralis minor; therefore, the treatment plan must directly address the fascial and muscular tension of the pec minor (Willis College OP Protocol)."
  },
  {
    id: 196,
    topic: "Case Scenario: Complex Digestive CIs",
    difficulty: "Hard",
    question: "STEM: A client with Crohn's disease (Inflammatory Bowel Disease) comes in for chronic low back pain. They inform you they are currently having a moderate flare-up (frequent diarrhea, mild fever, abdominal cramping). How do you safely proceed?",
    options: [
      "Perform a deep abdominal massage to relieve the cramping, then treat the back.",
      "Place them prone, apply hot hydrotherapy to the abdomen, and perform deep tissue on the lumbar spine.",
      "Due to the systemic fever and active autoimmune flare-up, vigorous massage is contraindicated. Direct abdominal work is an absolute local CI. The treatment must be modified to gentle, soothing, palliative work (e.g., gentle side-lying back massage) to avoid overtaxing their immune system, or rescheduled entirely.",
      "Perform joint mobilizations on the sacroiliac joint."
    ],
    correctAnswer: 2,
    rationale: "An IBD flare-up with a fever indicates systemic inflammation and tissue vulnerability. Deep work, prone positioning (pressure on inflamed bowels), and direct abdominal massage are contraindicated. The therapist must pivot to palliative care or decline treatment until the fever subsides (Werner, 2019)."
  },
  {
    id: 197,
    topic: "Oral Practical: Ulnar Nerve Entrapment",
    difficulty: "Hard",
    question: "STEM: Your OP client presents with numbness in their 4th and 5th digits. Tinel's sign is positive at the medial epicondyle of the humerus. You observe early signs of a 'Claw Hand'. What is the pathology, and what structure must you treat?",
    options: [
      "Pathology: Radial Nerve Palsy. Treat: The spiral groove.",
      "Pathology: Carpal Tunnel Syndrome. Treat: The flexor retinaculum.",
      "Pathology: Ulnar Nerve Entrapment (Cubital Tunnel Syndrome). Treat: Reduce hypertonicity in the Flexor Carpi Ulnaris and surrounding medial elbow structures to decompress the nerve.",
      "Pathology: Thoracic Outlet Syndrome. Treat: The scalenes."
    ],
    correctAnswer: 2,
    rationale: "Tinel's at the medial epicondyle ('funny bone') and 4th/5th digit symptoms definitively point to the Ulnar nerve at the cubital tunnel. Treatment must decompress this specific peripheral site by addressing the forearm flexors and fascial retinaculum at the elbow (Magee, 2021)."
  },
  {
    id: 198,
    topic: "Case Scenario: Infant Massage Precaution",
    difficulty: "Hard",
    question: "STEM: A mother brings her 4-month-old infant in for a massage demonstration to help with colic. She mentions the baby received their standard childhood vaccinations earlier that morning. What is the safest clinical approach?",
    options: [
      "Proceed with a deep abdominal massage to cure the colic.",
      "Massage directly over the injection sites to disperse the vaccine.",
      "Reschedule the appointment. Infants commonly run mild fevers or experience systemic immune responses 24-48 hours post-vaccination. Massage is contraindicated during this highly active immune period.",
      "Perform full-body tapotement."
    ],
    correctAnswer: 2,
    rationale: "Vaccinations intentionally provoke a systemic immune response, often resulting in low-grade fevers or lethargy. Introducing massage (which increases systemic circulation and metabolic load) during this immediate post-vaccination window is contraindicated. A 48-hour wait period is standard protocol (Andrade, 2023)."
  },
  {
    id: 199,
    topic: "Differential Diagnosis: Median Nerve",
    difficulty: "Hard",
    question: "A client has numbness in their thumb, index, and middle fingers. Phalen's test at the wrist is negative. However, resisted forearm pronation reproduces the neurological symptoms. Where is the Median nerve most likely entrapped?",
    options: [
      "At the carpal tunnel.",
      "At the interscalene triangle.",
      "Between the two heads of the Pronator Teres muscle in the proximal forearm (Pronator Teres Syndrome).",
      "At the cubital tunnel."
    ],
    correctAnswer: 2,
    rationale: "The median nerve can be entrapped proximally as it passes through the pronator teres muscle. If wrist tests (Phalen's) are negative, but resisting the pronator teres reproduces the nerve pain, it indicates Pronator Teres Syndrome, a distinct entrapment requiring treatment of the forearm, not the wrist (Magee, 2021)."
  },
  {
    id: 200,
    topic: "Oral Practical: Chronic Entrapment CIs",
    difficulty: "Hard",
    question: "STEM: During your OP, you assess a client with chronic, severe Carpal Tunnel Syndrome. They have visible thenar atrophy (Ape Hand) and profound loss of sensation in their thumb. The examiner asks: 'What specific massage technique is locally CONTRAINDICATED directly over the flexor retinaculum in this severe stage?'",
    options: [
      "Light effleurage.",
      "Deep, heavy transverse friction or ischemic compression directly over the carpal tunnel.",
      "Passive stretching of the forearm flexors.",
      "Manual Lymph Drainage."
    ],
    correctAnswer: 1,
    rationale: "In severe, late-stage CTS with atrophy and sensory loss, the median nerve is severely compromised and ischemic. Applying deep, heavy friction or direct compression over the tunnel will further crush the dying nerve, exacerbating the neuropraxia. It is an absolute local contraindication; treatment must focus on proximal decompression and fascial release (Hertling & Kessler, 2006)."
  }
];
