/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 3: Batch 3 (Questions 101 - 150)
 * Curriculum: Spinal Posture, Joint Dysfunction, Autoimmune & Systemic
 * Features: v2.0 Hint Integration & APA Citations
 */

window.batch3Questions = [
  {
    id: 101, topic: "Spinal & Postural Conditions", difficulty: "Easy",
    question: "Scoliosis is clinically defined as:",
    options: ["An exaggerated anterior curve of the lumbar spine.", "A lateral deviation of the spine, usually accompanied by vertebral rotation.", "A fusion of the cervical vertebrae.", "An exaggerated posterior curve of the thoracic spine."],
    correctAnswer: 1,
    hint: "This condition involves a three-dimensional deformity of the spine, often presenting with a prominent rib hump on one side.",
    rationale: "Scoliosis is a three-dimensional deformity involving a lateral deviation of the spinal column, most frequently accompanied by rotation of the vertebral bodies (Magee, 2021)."
  },
  {
    id: 102, topic: "Spinal & Postural Conditions", difficulty: "Easy",
    question: "Hyperkyphosis is characterized by an excessive posterior curvature in which region of the spine?",
    options: ["Cervical", "Thoracic", "Lumbar", "Sacral"],
    correctAnswer: 1,
    hint: "This curvature creates a rounded, 'hunchback' posture often associated with forward head carriage.",
    rationale: "Hyperkyphosis (often colloquially called a hunchback) is an exaggerated posterior curvature of the thoracic spine, frequently driven by poor ergonomics or osteoporosis (Werner, 2019)."
  },
  {
    id: 103, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To differentiate between structural and functional scoliosis, which active assessment is considered the gold standard?",
    options: ["Slump Test", "Adam's Forward Bend Test", "Straight Leg Raise", "Kemp's Test"],
    correctAnswer: 1,
    hint: "The client flexes forward at the waist while the therapist observes the spine from behind for a rotational rib hump.",
    rationale: "Adam's Forward Bend Test differentiates structural from functional scoliosis. If the lateral curve and rib hump remain visible during flexion, the scoliosis is structural (bony). If the spine straightens, it is functional (muscular) (Magee, 2021)."
  },
  {
    id: 104, topic: "Spinal & Postural Conditions", difficulty: "Medium",
    question: "In a client presenting with Hyperlordosis (Lower Crossed Syndrome), which specific muscle groups are adaptively shortened and hypertonic?",
    options: ["Gluteus maximus and abdominals.", "Iliopsoas, rectus femoris, and lumbar erector spinae.", "Hamstrings and latissimus dorsi.", "Rhomboids and middle trapezius."],
    correctAnswer: 1,
    hint: "Think about the muscles that tilt the pelvis anteriorly (down in the front, up in the back).",
    rationale: "Lower Crossed Syndrome involves an anterior pelvic tilt driven by tight, adaptively shortened hip flexors (iliopsoas/rectus femoris) and lumbar extensors (erector spinae), paired with weak glutes and abdominals (Hertling & Kessler, 2006)."
  },
  {
    id: 105, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When treating a functional Hyperkyphosis, what is the primary structural goal of the massage treatment plan?",
    options: ["Stretch the rhomboids and strengthen the pectoralis major.", "Stretch the anterior chest (pectorals) and stimulate/strengthen the posterior thoracic extensors (rhomboids, middle trapezius).", "Apply aggressive transverse friction to the spinous processes.", "Perform high-velocity manipulations to the cervical spine."],
    correctAnswer: 1,
    hint: "You must lengthen the tissues pulling the shoulders forward and wake up the tissues failing to hold the shoulders back.",
    rationale: "Treatment for hyperkyphosis centers on lengthening the adaptively shortened anterior structures (pectoralis major/minor) while stimulating and facilitating the overstretched, ischemic posterior stabilizers (rhomboids, mid-trapezius) (Andrade, 2023)."
  },
  {
    id: 106, topic: "Systemic Conditions", difficulty: "Easy",
    question: "Which condition is characterized by a severe decrease in bone mass and density, increasing the critical risk of pathological fractures?",
    options: ["Osteoarthritis", "Osteoporosis", "Rheumatoid Arthritis", "Scleroderma"],
    correctAnswer: 1,
    hint: "The name of this disease literally translates to 'porous bone'.",
    rationale: "Osteoporosis is a metabolic bone disorder where osteoclast activity outpaces osteoblast activity, resulting in porous, fragile bones highly susceptible to fracture (Norris, 2020)."
  },
  {
    id: 107, topic: "Systemic Conditions", difficulty: "Hard",
    question: "A client with advanced Ankylosing Spondylitis (AS) is on your table. What pathological process defines this disease, and what is its classic radiographic presentation?",
    options: ["The breakdown of hyaline cartilage; presenting as bone spurs.", "A bacterial infection of the intervertebral discs; presenting as disc space narrowing.", "A chronic, systemic autoimmune inflammatory disease that causes fusion of the spinal vertebrae and SI joints; presenting as a 'bamboo spine'.", "A demyelinating disease of the central nervous system; presenting as spinal lesions."],
    correctAnswer: 2,
    hint: "This condition causes the spinal ligaments to ossify, eventually welding the spine into a single, rigid column.",
    rationale: "Ankylosing Spondylitis is a chronic autoimmune inflammatory arthritis that targets the axial skeleton, leading to the progressive ossification and fusion of the vertebrae and SI joints, creating the classic 'bamboo spine' appearance (Werner, 2019)."
  },
  {
    id: 108, topic: "Autoimmune Disorders", difficulty: "Medium",
    question: "Systemic Lupus Erythematosus (SLE) is a complex autoimmune disease. Which visible clinical sign is a hallmark of an acute SLE flare-up?",
    options: ["A 'butterfly' (malar) rash across the bridge of the nose and cheeks.", "Severe clubbing of the fingernails.", "A distinct 'barrel chest' deformity.", "Severe unilateral facial paralysis."],
    correctAnswer: 0,
    hint: "This photosensitive dermatological sign is named for its wing-like shape across the face.",
    rationale: "The malar or 'butterfly' rash across the nose and cheeks is a hallmark symptom of Systemic Lupus Erythematosus, often triggered or worsened by exposure to ultraviolet light (Norris, 2020)."
  },
  {
    id: 109, topic: "Spinal Pathologies", difficulty: "Medium",
    question: "A client presents with Degenerative Disc Disease (DDD) in the lumbar spine. Which symptoms are most characteristic of this condition before it progresses to frank herniation?",
    options: ["Sharp, shooting electrical pain down the leg to the foot.", "A dull, chronic, localized ache in the lower back that worsens with prolonged sitting and improves with walking.", "Complete paralysis of the lower extremities.", "Loss of bowel and bladder control."],
    correctAnswer: 1,
    hint: "Without herniation, the pain is usually confined to the disc's outer annulus and the surrounding guarding muscles, rather than a compressed nerve root.",
    rationale: "Early DDD typically presents as a localized, dull, aching pain caused by micro-tears in the annulus fibrosus and localized muscle splinting. Sitting increases intradiscal pressure, exacerbating the pain (Hertling & Kessler, 2006)."
  },
  {
    id: 110, topic: "Spinal Pathologies", difficulty: "Medium",
    question: "In Facet Joint Syndrome of the lumbar spine, which specific active movement will most reliably provoke the client's localized, sharp back pain?",
    options: ["Spinal Flexion", "Spinal Extension", "Cervical Rotation", "Ankle Dorsiflexion"],
    correctAnswer: 1,
    hint: "Consider the anatomical position of the facet joints (zygapophyseal joints) on the posterior aspect of the vertebrae.",
    rationale: "Facet joints are located posteriorly. Spinal extension powerfully compresses these joints together; if they are inflamed or arthritic (Facet Syndrome), extension will predictably provoke sharp, localized pain (Magee, 2021)."
  },
  {
    id: 111, topic: "Systemic Conditions", difficulty: "Medium",
    question: "Which of the following describes the pathophysiology of Rheumatoid Arthritis (RA)?",
    options: ["A localized, mechanical wear-and-tear of articular cartilage.", "A systemic autoimmune attack on the synovial membranes, leading to pannus formation and joint destruction.", "A metabolic buildup of uric acid crystals in the great toe.", "A chronic infection of the bone marrow."],
    correctAnswer: 1,
    hint: "Unlike osteoarthritis, this condition is driven by a confused immune system attacking the joint linings systemically.",
    rationale: "Rheumatoid Arthritis is a systemic autoimmune disease where the immune system attacks the synovial membranes lining the joints, causing severe inflammation, pannus formation, and eventual structural deformity (Norris, 2020)."
  },
  {
    id: 112, topic: "Clinical Interventions", difficulty: "Hard",
    question: "During an assessment of a client with a suspected posterolateral lumbar disc herniation (L4-L5), you perform a Straight Leg Raise (SLR). The client reports severe shooting pain into the foot at 35 degrees of hip flexion. What is the clinical implication?",
    options: ["The pain is likely muscular (hamstrings) because nerves don't stretch until 70 degrees.", "The test is positive for sciatic nerve root compression (radiculopathy) by the herniated disc.", "The client has a sacroiliac joint subluxation.", "The test indicates an acute tear of the gluteus maximus."],
    correctAnswer: 1,
    hint: "Pain arising between 35 and 70 degrees of the SLR places maximal tension directly on the sciatic nerve roots.",
    rationale: "A positive Straight Leg Raise between 35 and 70 degrees places maximal tension on the sciatic nerve roots. Neurological pain (shooting/burning) in this range strongly indicates radiculopathy caused by space-occupying lesions like a disc herniation (Magee, 2021)."
  },
  {
    id: 113, topic: "Autoimmune Disorders", difficulty: "Medium",
    question: "Multiple Sclerosis (MS) is characterized by the autoimmune destruction of what specific neurological structure?",
    options: ["The neuromuscular junction.", "The myelin sheath surrounding axons in the Central Nervous System (brain and spinal cord).", "The peripheral pain receptors in the skin.", "The Golgi Tendon Organs."],
    correctAnswer: 1,
    hint: "This structure acts as the 'insulation' around the nerve wire, allowing electrical signals to travel quickly.",
    rationale: "Multiple Sclerosis is a chronic demyelinating disease where the immune system destroys the myelin sheath within the Central Nervous System, severely disrupting the transmission of electrical impulses (Norris, 2020)."
  },
  {
    id: 114, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When treating a client with Multiple Sclerosis, what specific environmental or therapeutic trigger must be strictly avoided as it rapidly exacerbates their neurological symptoms (Uhthoff's phenomenon)?",
    options: ["Deep pressure.", "Cold hydrotherapy.", "Excessive heat (e.g., hot packs, overheated rooms, vigorous prolonged friction).", "Myofascial release."],
    correctAnswer: 2,
    hint: "Demyelinated nerves are highly sensitive to increases in core body temperature, which blocks electrical conduction.",
    rationale: "Uhthoff's phenomenon is a characteristic of MS where an increase in body temperature (from heat applications, fever, or aggressive exercise) temporarily worsens neurological symptoms by blocking conduction in demyelinated nerves (Werner, 2019)."
  },
  {
    id: 115, topic: "Systemic Conditions", difficulty: "Easy",
    question: "Fibromyalgia Syndrome (FMS) is clinically defined by widespread musculoskeletal pain. Which of the following is considered the primary pathophysiological driver of FMS?",
    options: ["Severe micro-tearing of the muscle fibers.", "Central Nervous System sensitization, leading to a lowered pain threshold (allodynia and hyperalgesia).", "A chronic viral infection in the bloodstream.", "Severe osteoarthritis of all major joints."],
    correctAnswer: 1,
    hint: "The hardware (muscles) is usually fine; the software (the brain's pain processing center) is malfunctioning and amplifying signals.",
    rationale: "Fibromyalgia is driven by central sensitization, where the central nervous system becomes hyper-reactive, amplifying normal sensory input into profound pain signals without any actual peripheral tissue damage (Norris, 2020)."
  },
  {
    id: 116, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "Which special test is used to assess the integrity of the Sacroiliac (SI) Joint by placing the client's foot on their opposite knee (Figure-4) and applying downward pressure to the flexed knee and the contralateral ASIS?",
    options: ["Faber's (Patrick's) Test", "Ober's Test", "Ely's Test", "Thomas Test"],
    correctAnswer: 0,
    hint: "The acronym stands for Flexion, Abduction, and External Rotation.",
    rationale: "FABER's (Patrick's) Test stresses the anterior SI joint. Pain located posteriorly at the SI joint during this maneuver indicates SI joint dysfunction or pathology (Magee, 2021)."
  },
  {
    id: 117, topic: "Head and Neck", difficulty: "Hard",
    question: "A client with Temporomandibular Joint (TMJ) Dysfunction presents with an 'S-curve' deviation when opening their mouth. What does an S-curve typically indicate compared to a C-curve?",
    options: ["An S-curve indicates a unilateral capsular restriction.", "An S-curve indicates a muscular imbalance (motor control issue), whereas a C-curve typically indicates a structural or capsular restriction.", "An S-curve means the jaw is broken.", "An S-curve indicates trigeminal neuralgia."],
    correctAnswer: 1,
    hint: "A deviation that wanders but ultimately returns to the midline suggests the muscles are firing out of sequence, rather than hitting a hard physical wall.",
    rationale: "An S-curve deviation during mandibular depression implies a neuromuscular imbalance or altered firing sequence of the pterygoids. A C-curve typically implies a hard capsular restriction or displaced disc on the side of the deviation (Hertling & Kessler, 2006)."
  },
  {
    id: 118, topic: "Systemic Conditions", difficulty: "Medium",
    question: "Which of the following statements is clinically accurate regarding the massage treatment of a client with Gout during an acute flare-up?",
    options: ["Aggressive Joint Mobilizations are required to crush the uric acid crystals.", "Heat must be applied to the inflamed joint to melt the crystals.", "The affected joint is acutely inflamed and agonizingly painful; local massage is an absolute contraindication.", "Deep transverse friction should be applied to the joint capsule."],
    correctAnswer: 2,
    hint: "Gout feels like the joint is filled with microscopic shards of glass. Any mechanical pressure will cause excruciating pain.",
    rationale: "Acute gout involves the deposition of needle-like monosodium urate crystals in the joint space (commonly the first MTP). The joint is exquisitely painful, swollen, and hot, representing an absolute local contraindication for manual therapy (Werner, 2019)."
  },
  {
    id: 119, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When addressing a severe trigger point in the upper trapezius, you apply Specific Compression. How long should you generally hold the ischemic compression to achieve a release?",
    options: ["2 to 3 seconds.", "Until the client cries.", "Approximately 20 to 60 seconds, or until you feel the tissue soften and the referred pain diminish.", "Exactly 5 minutes."],
    correctAnswer: 2,
    hint: "The pressure must be sustained long enough to disrupt the neurological feedback loop without causing tissue necrosis.",
    rationale: "Specific Compression on a trigger point should be held between 20 to 60 seconds. The therapist waits for the neurological 'yield' (a softening of the tissue and a decrease in the client's reported referred pain) before slowly releasing (Andrade, 2023)."
  },
  {
    id: 120, topic: "Spinal Pathologies", difficulty: "Hard",
    question: "A client with a known L5-S1 disc herniation presents with sudden, bilateral leg weakness, a loss of sensation in their 'saddle' region (groin and inner thighs), and reports recent urinary incontinence. What is your immediate clinical responsibility?",
    options: ["Perform deep MFR on the lumbar fascia to relieve the pressure.", "Suggest they try hot/cold contrast therapy at home.", "Recognize this as Cauda Equina Syndrome; this is a severe medical emergency requiring immediate dispatch to the hospital to prevent permanent paralysis.", "Perform aggressive passive stretching of the hamstrings."],
    correctAnswer: 2,
    hint: "Bilateral neurological deficits paired with bowel/bladder dysfunction represent a catastrophic spinal cord compression.",
    rationale: "Saddle anesthesia, bilateral motor weakness, and bowel/bladder incontinence are the cardinal red flags for Cauda Equina Syndrome. This is a surgical emergency; delaying medical intervention can result in permanent paraplegia (Magee, 2021)."
  },
  {
    id: 121, topic: "Autoimmune Disorders", difficulty: "Medium",
    question: "A client presents with Scleroderma. What is the primary pathological feature of this autoimmune condition?",
    options: ["The demyelination of peripheral nerves.", "The overproduction of collagen, leading to the thickening, hardening, and tightening of the skin and internal connective tissues.", "The destruction of the alveoli in the lungs.", "The formation of uric acid crystals in the blood."],
    correctAnswer: 1,
    hint: "The name of the disease literally translates to 'hard skin'.",
    rationale: "Scleroderma is a chronic connective tissue disease characterized by autoimmune-driven overproduction of collagen, causing progressive fibrosis and hardening of the skin (and often internal organs) (Norris, 2020)."
  },
  {
    id: 122, topic: "Clinical Fundamentals", difficulty: "Easy",
    question: "According to standard grading for Joint Mobilizations (Maitland's Grades), which grades are strictly utilized for pain modulation and neurophysiological relaxation without stretching the joint capsule?",
    options: ["Grades 3 and 4", "Grades 1 and 2", "Grades 2 and 3", "Grade 5 (High-Velocity Thrust)"],
    correctAnswer: 1,
    hint: "These grades involve small or large amplitude oscillations that stay completely out of the tissue resistance barrier.",
    rationale: "Grades 1 and 2 mobilizations operate within the free space of the joint. They stimulate mechanoreceptors to gate pain and move synovial fluid, but do not mechanically stretch the capsular tissues (Hertling & Kessler, 2006)."
  },
  {
    id: 123, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "When performing Kemp's Test (Lumbar Quadrant Test), the therapist guides the seated client into lumbar extension, lateral flexion, and rotation. What does localized pain on the concave (compressed) side indicate?",
    options: ["A muscle strain of the erector spinae on the stretched side.", "Facet joint irritation or pathology on the compressed side.", "A tear in the anterior longitudinal ligament.", "A healthy, normal spine."],
    correctAnswer: 1,
    hint: "This three-dimensional movement completely closes down the posterior articular structures on the side of the bending.",
    rationale: "Kemp's Test maximally compresses the lumbar facet joints and narrows the intervertebral foramen. Localized back pain during this maneuver strongly suggests facet joint irritation or arthritis (Magee, 2021)."
  },
  {
    id: 124, topic: "Systemic Conditions", difficulty: "Medium",
    question: "A client with Chronic Fatigue Syndrome (Myalgic Encephalomyelitis) schedules a massage. What is a critical post-treatment phenomenon you must educate them about?",
    options: ["Post-Exertional Malaise (PEM): Even a gentle massage can trigger a severe, multi-day crash in their energy levels.", "They will immediately feel a massive surge of adrenaline.", "Their bone density will drop for 24 hours.", "They must run 5 kilometers immediately after the massage."],
    correctAnswer: 0,
    hint: "Clients with this condition have broken cellular energy systems; any physiological stress (even relaxing bodywork) requires energy to process.",
    rationale: "Post-Exertional Malaise (PEM) is the hallmark of Chronic Fatigue Syndrome. Even minor physical, cognitive, or sensory exertion (including massage) can trigger a disproportionate and debilitating exacerbation of fatigue and pain lasting days or weeks (Werner, 2019)."
  },
  {
    id: 125, topic: "Myofascial Techniques", difficulty: "Medium",
    question: "You are applying Myofascial Release (MFR) to the IT Band. You engage the tissue, apply longitudinal traction, and hold. How do you know when a fascial 'release' has occurred?",
    options: ["The tissue will pop audibly.", "You will feel a subtle yielding, softening, or lengthening of the tissue under your hands.", "The client will shout in pain.", "The skin will instantly turn white."],
    correctAnswer: 1,
    hint: "Fascia is a thixotropic gel; under sustained mechanical tension, it changes from a solid state to a more liquid state.",
    rationale: "A fascial release is palpated as a subtle melting, yielding, or giving way of the restrictive barrier. The therapist must maintain constant tension until this thixotropic change occurs, usually after 90 to 120 seconds (Andrade, 2023)."
  },
  {
    id: 126, topic: "Spinal & Postural Conditions", difficulty: "Hard",
    question: "A client presents with 'Flat Back' posture. Which muscle imbalances characterize this specific deviation?",
    options: ["Tight hip flexors and weak abdominals.", "Tight hamstrings pulling the pelvis into posterior tilt, paired with weak, lengthened lumbar erector spinae.", "Hypertonic pectorals and weak rhomboids.", "Tight calves and weak quadriceps."],
    correctAnswer: 1,
    hint: "In this posture, the normal lumbar lordosis is completely lost, tucking the tailbone underneath the body.",
    rationale: "Flat Back posture involves a posterior pelvic tilt that flattens the lumbar curve. This is mechanically driven by adaptively shortened hamstrings and abdominals, paired with weak, overstretched hip flexors and lumbar extensors (Hertling & Kessler, 2006)."
  },
  {
    id: 127, topic: "Head and Neck", difficulty: "Medium",
    question: "When assessing the TMJ, you instruct the client to open their mouth as wide as possible. What is the normal, functional range of motion for mandibular depression (measured in knuckles)?",
    options: ["One knuckle", "Two knuckles", "Three knuckles", "Four knuckles"],
    correctAnswer: 2,
    hint: "A healthy jaw should accommodate the width of the client's own non-thumb digits stacked vertically.",
    rationale: "Functional opening of the TMJ is commonly assessed using the 'Three-Knuckle Test'. The client should be able to insert their own index, middle, and ring fingers vertically between their incisors without pain (Magee, 2021)."
  },
  {
    id: 128, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "A client complains of neck pain that radiates into their right arm. You perform Spurling's Test (Cervical Compression). The client reports sharp pain radiating down to their thumb. What does this confirm?",
    options: ["A thoracic outlet syndrome at the scalenes.", "A cervical radiculopathy (nerve root compression), likely at the C6 nerve root level.", "A suboccipital trigger point.", "A torn rotator cuff."],
    correctAnswer: 1,
    hint: "Spurling's test closes the intervertebral foramen. Pain traveling to the thumb follows a highly specific dermatome.",
    rationale: "Spurling's Test compresses the cervical nerve roots. Sharp, radiating pain into the arm confirms radiculopathy. Pain extending to the thumb specifically implicates the C6 neurological level (Magee, 2021)."
  },
  {
    id: 129, topic: "Clinical Fundamentals", difficulty: "Easy",
    question: "Which of the following describes a 'Tensegrity' model of the human body?",
    options: ["The body is a stack of building blocks that relies entirely on gravity.", "The bones float in a continuous tension network of fascia and muscle, meaning a restriction in one area will mechanically affect distant areas.", "The nervous system controls all pain.", "The body heals by resting."],
    correctAnswer: 1,
    hint: "Think about a geodesic dome or a spiderweb; pulling on one string changes the shape of the entire structure.",
    rationale: "Tensegrity (tensional integrity) dictates that the skeleton does not bear weight like a stacked wall; rather, the bones act as rigid spacers suspended within a continuous, tensioned web of myofascial tissue. A restriction in the foot can thereby pull on the fascia of the neck (Andrade, 2023)."
  },
  {
    id: 130, topic: "Systemic Conditions", difficulty: "Medium",
    question: "A client has been on long-term systemic Corticosteroid medication (e.g., Prednisone) for an autoimmune disorder. What critical precaution must you take during treatment?",
    options: ["You must perform aggressive deep tissue to counteract the drugs.", "No precautions are necessary.", "Long-term steroid use severely degrades tissue integrity, leading to fragile skin, weakened ligaments, and osteoporosis. Deep pressure and aggressive joint mobilizations are contraindicated.", "You must only treat them while they are standing."],
    correctAnswer: 2,
    hint: "These powerful anti-inflammatories catabolize (break down) collagen networks over time.",
    rationale: "Prolonged corticosteroid use inhibits collagen synthesis and calcium absorption, rendering the skin, tendons, ligaments, and bones highly fragile and susceptible to tearing and pathological fractures (Werner, 2019)."
  },
  {
    id: 131, topic: "Spinal Pathologies", difficulty: "Hard",
    question: "In the context of disc herniations, what is the difference between a 'Protrusion' and an 'Extrusion'?",
    options: ["Protrusions only happen in the neck; extrusions only happen in the lower back.", "A protrusion means the annulus fibrosus is bulging but intact; an extrusion means the annulus has torn and the nucleus pulposus has spilled out into the epidural space.", "They are two words for the exact same condition.", "An extrusion is easily fixed with massage, a protrusion requires surgery."],
    correctAnswer: 1,
    hint: "One is a bulge in the tire, the other is a blowout where the inner gel leaks.",
    rationale: "In a disc protrusion, the posterior longitudinal ligament and outer annular fibers remain intact to contain the bulge. In an extrusion, the annular fibers completely rupture, allowing the nuclear material to leak into the spinal canal (Hertling & Kessler, 2006)."
  },
  {
    id: 132, topic: "Spinal & Postural Conditions", difficulty: "Medium",
    question: "A client with advanced Scheuermann's Disease seeks massage for back pain. What is the underlying pathology of this condition?",
    options: ["An autoimmune attack on the SI joint.", "A juvenile osteochondrosis resulting in the wedging of multiple thoracic vertebrae, causing a rigid, structural hyperkyphosis.", "A lateral deviation of the lumbar spine.", "A softening of the cranial bones."],
    correctAnswer: 1,
    hint: "This is a growth-plate disorder that occurs in teenagers, permanently altering the shape of the thoracic vertebral bodies from cylinders into wedges.",
    rationale: "Scheuermann's Disease is a structural deformity where anterior wedging of the thoracic vertebral bodies occurs during adolescence, resulting in a fixed, non-reversible hyperkyphosis (Magee, 2021)."
  },
  {
    id: 133, topic: "Orthopedic Assessment", difficulty: "Easy",
    question: "What is the primary purpose of assessing a client's active and passive range of motion bilaterally?",
    options: ["To cause pain.", "To establish a baseline of the client's 'normal' unaffected side to compare against the injured side.", "To stretch the muscles.", "To test their cardiovascular endurance."],
    correctAnswer: 1,
    hint: "You cannot know what 'restricted' means for a specific individual unless you know what 'normal' looks like for their unique body.",
    rationale: "Bilateral comparison is the bedrock of orthopedic assessment. The uninjured side serves as the client's own control standard, allowing the therapist to accurately identify pathological limitations in the affected joint (Magee, 2021)."
  },
  {
    id: 134, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When performing Joint Mobilizations, what is the Convex-Concave Rule regarding the glenohumeral joint?",
    options: ["If you want the arm to go up, you push the bone up.", "Because the convex humeral head moves on the concave glenoid fossa, the arthrokinematic glide occurs in the OPPOSITE direction of the osteokinematic movement.", "It states that mobilizations are contraindicated in the shoulder.", "It dictates that the shoulder must be tractioned before any movement."],
    correctAnswer: 1,
    hint: "Imagine a ball rolling inside a cup; to roll the top of the ball to the left, the bottom of the ball must slide to the right to avoid popping out of the cup.",
    rationale: "The Convex-Concave Rule dictates that when a convex surface (humeral head) moves on a stable concave surface (glenoid fossa), the internal bone glide occurs in the opposite direction of the limb's external swing (Hertling & Kessler, 2006)."
  },
  {
    id: 135, topic: "Autoimmune Disorders", difficulty: "Hard",
    question: "Which of the following is a key distinguishing feature between Rheumatoid Arthritis (RA) and Osteoarthritis (OA) regarding morning stiffness?",
    options: ["OA morning stiffness lasts for hours; RA morning stiffness lasts only 5 minutes.", "RA morning stiffness typically lasts for over an hour and improves slowly with movement, whereas OA morning stiffness usually resolves within 15-30 minutes of waking.", "Neither condition causes morning stiffness.", "RA only causes stiffness at night."],
    correctAnswer: 1,
    hint: "Systemic autoimmune inflammation generates a massive amount of inflammatory exudate overnight that takes significant time to flush out of the tissues.",
    rationale: "Prolonged morning stiffness lasting greater than 60 minutes is a hallmark diagnostic feature of the systemic inflammation in Rheumatoid Arthritis, sharply contrasting with the brief, mechanical 'gelling' seen in Osteoarthritis (Norris, 2020)."
  },
  {
    id: 136, topic: "Spinal & Postural Conditions", difficulty: "Medium",
    question: "During an assessment of a client with Hyperlordosis, you observe that their knees are locked in hyper-extension (genu recurvatum). How does this affect the pelvis?",
    options: ["It causes an anterior pelvic tilt, exacerbating the lumbar lordosis.", "It causes a posterior pelvic tilt, flattening the lumbar spine.", "It has no effect on the pelvis.", "It causes a lateral pelvic tilt."],
    correctAnswer: 0,
    hint: "Locking the knees backward drops the front of the pelvis downward.",
    rationale: "Genu recurvatum (locked, hyperextended knees) shifts the body's center of mass forward, dragging the pelvis into a severe anterior tilt, which mechanically forces the lumbar spine into a deeper, painful hyperlordosis (Hertling & Kessler, 2006)."
  },
  {
    id: 137, topic: "Myofascial Techniques", difficulty: "Medium",
    question: "What is 'Skin Rolling' primarily used to assess and treat?",
    options: ["Deep muscle spasms.", "Superficial fascial restrictions and adhesions between the skin, superficial fascia, and the underlying muscle.", "Bone density.", "Joint capsule tightness."],
    correctAnswer: 1,
    hint: "This technique involves lifting the cutaneous tissues away from the body and rolling them forward like a wave.",
    rationale: "Skin rolling is both an assessment and treatment technique that lifts and shears the superficial fascia, breaking adhesions and restoring glide between the integumentary layer and the deeper myofascial envelopes (Andrade, 2023)."
  },
  {
    id: 138, topic: "Head and Neck", difficulty: "Hard",
    question: "A client presents with unilateral jaw pain and clicking. Upon palpation, you note severe hypertonicity of the Lateral Pterygoid muscle. How is this muscle most effectively accessed for manual release?",
    options: ["By stripping the masseter externally on the cheek.", "By applying direct ischemic compression to the temples.", "Through intra-oral massage, accessing the muscle behind the upper molars (with proper gloving and consent).", "By applying heavy tapotement to the mandible."],
    correctAnswer: 2,
    hint: "This muscle lies deep within the skull, attaching to the condyle of the mandible and the sphenoid bone. It cannot be reached effectively from the outside.",
    rationale: "The lateral pterygoid lies deep within the infratemporal fossa. Effective manual release requires intra-oral techniques, accessing the muscle tissue along the upper gum line behind the molars, strictly requiring advanced training and explicit consent (Hertling & Kessler, 2006)."
  },
  {
    id: 139, topic: "Spinal Pathologies", difficulty: "Easy",
    question: "Which condition is characterized by a unilateral narrowing of the intervertebral foramen, leading to nerve root compression and radicular pain?",
    options: ["Spinal Stenosis (Lateral)", "Spina Bifida", "Meningitis", "Osteoporosis"],
    correctAnswer: 0,
    hint: "The term 'stenosis' means the abnormal narrowing of a biological passage.",
    rationale: "Lateral Spinal Stenosis occurs when osteophytes (bone spurs) or disc degeneration narrows the intervertebral foramen, physically crushing the exiting spinal nerve root and causing radiculopathy (Werner, 2019)."
  },
  {
    id: 140, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "What is the primary purpose of the Valsalva Maneuver during a spinal assessment?",
    options: ["To stretch the hamstrings.", "To voluntarily increase intrathecal (spinal cord) pressure, which will exacerbate pain if a space-occupying lesion (like a herniated disc) is present.", "To test lung capacity.", "To realign the SI joint."],
    correctAnswer: 1,
    hint: "The client takes a deep breath and 'bears down' as if having a bowel movement, increasing pressure in the core cylinder.",
    rationale: "The Valsalva maneuver increases intrathecal pressure. If a herniated disc or tumor is pressing on the spinal cord or nerve root, this added pressure will reproduce the client's radicular pain (Magee, 2021)."
  },
  {
    id: 141, topic: "OP Protocols: Systemic Precaution", difficulty: "Hard",
    question: "STEM: During an Oral Practical, you are presented with a 45-year-old client in the late stages of Multiple Sclerosis. They are currently experiencing severe lower extremity spasticity. The examiner asks: 'How must you adapt your massage pressure and hydrotherapy?'",
    options: ["Apply deep, aggressive stripping to break the spasticity, and use hot packs.", "Use moderate, soothing pressure to calm the nervous system. Heat is strictly contraindicated due to Uhthoff's phenomenon; use cool/tepid applications if necessary.", "Massage is an absolute contraindication.", "Use rapid, heavy tapotement to exhaust the muscles, followed by an ice bath."],
    correctAnswer: 1,
    hint: "Aggressive mechanical input will trigger worse spasticity, and heat will cause their nerves to stop conducting entirely.",
    rationale: "Spasticity is a neurological reflex that will worsen with aggressive mechanical stimulation. Furthermore, heat exacerbates demyelinating diseases (Uhthoff's phenomenon) and is strictly contraindicated. Treatment must be soothing and neurologically calming (Werner, 2019)."
  },
  {
    id: 142, topic: "Spinal & Postural Conditions", difficulty: "Medium",
    question: "A client with an exaggerated anterior pelvic tilt (Hyperlordosis) is experiencing lower back pain. Which specific remedial exercise is most indicated to correct the pelvic position?",
    options: ["Heavy deadlifts to strengthen the back.", "Passive stretching of the gluteus maximus.", "Pelvic tilt exercises (strengthening the abdominals) and stretching the iliopsoas.", "Neck stretches."],
    correctAnswer: 2,
    hint: "To level the pelvis, you must pull up on the front (abdominals) and release the anchor pulling down on the front (hip flexors).",
    rationale: "Correcting hyperlordosis requires reversing the pelvic tilt. Strengthening the weak abdominals (which pull the anterior pelvis up) and stretching the tight iliopsoas (which pull the anterior pelvis down) restores neutral mechanics (Hertling & Kessler, 2006)."
  },
  {
    id: 143, topic: "Systemic Conditions", difficulty: "Easy",
    question: "Which of the following describes 'Crepitus' in an osteoarthritic joint?",
    options: ["A severe muscle spasm.", "A palpable or audible crunching, grinding, or popping sensation caused by roughened articular surfaces rubbing together.", "A sudden loss of blood flow.", "The surgical replacement of a joint."],
    correctAnswer: 1,
    hint: "This is the sound and feeling of the smooth cartilage 'shock absorbers' wearing away, leaving bone grinding on bone.",
    rationale: "Crepitus is the clinical term for the grinding, cracking, or grating sensation felt within a joint, typically caused by the degradation of hyaline cartilage in osteoarthritis (Magee, 2021)."
  },
  {
    id: 144, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To assess a client with suspected Ankylosing Spondylitis, the therapist measures the expansion of the rib cage during a deep breath. What is this clinical assessment called?",
    options: ["Schober's Test", "Costochondral Expansion Test (Chest Expansion Test)", "Valsalva Maneuver", "Brudzinski's Sign"],
    correctAnswer: 1,
    hint: "As the spine fuses, the ribs lose their ability to swing outward like bucket handles.",
    rationale: "The Chest Expansion Test measures the mobility of the costovertebral joints. A significantly reduced expansion (< 2.5 cm) is a strong clinical indicator of the rib fusion characteristic of Ankylosing Spondylitis (Magee, 2021)."
  },
  {
    id: 145, topic: "Clinical Interventions", difficulty: "Medium",
    question: "A client with early-stage Osteoarthritis of the knee presents for treatment. The joint is stiff but not acutely inflamed. Which intervention is highly indicated to improve cartilage nutrition?",
    options: ["Total immobilization of the knee.", "Grade 1 and 2 Joint Mobilizations to stimulate synovial fluid production, bathing the avascular cartilage in nutrients.", "Deep transverse friction to the patellar tendon.", "Heavy tapotement to the joint line."],
    correctAnswer: 1,
    hint: "Hyaline cartilage does not have a blood supply; it relies entirely on the 'sponge effect' of movement to absorb joint fluid.",
    rationale: "Articular cartilage is avascular and relies on the mechanical pumping of synovial fluid for nutrition. Gentle, pain-free joint mobilizations stimulate synovial production and distribution, preserving joint health in OA (Hertling & Kessler, 2006)."
  },
  {
    id: 146, topic: "Autoimmune Disorders", difficulty: "Hard",
    question: "In Rheumatoid Arthritis, what is a 'Pannus'?",
    options: ["A type of bone spur.", "A highly destructive, hyperactive inflammatory membrane that grows over the articular cartilage, releasing enzymes that dissolve the joint structures.", "A benign tumor of the muscle.", "The protective fluid inside a bursa."],
    correctAnswer: 1,
    hint: "This is the abnormal, invasive tissue layer generated by the malfunctioning immune system that physically destroys the joint.",
    rationale: "A pannus is a hallmark of RA. It is an abnormal layer of fibrovascular tissue or granulation tissue that proliferates over the joint surface, secreting lytic enzymes that aggressively destroy cartilage and bone (Norris, 2020)."
  },
  {
    id: 147, topic: "Spinal & Postural Conditions", difficulty: "Medium",
    question: "When assessing a client with a functional leg length discrepancy, which pelvic landmark is commonly palpated bilaterally to check for uneven height?",
    options: ["The greater trochanter.", "The Anterior Superior Iliac Spine (ASIS) and Posterior Superior Iliac Spine (PSIS).", "The ischial tuberosity.", "The xiphoid process."],
    correctAnswer: 1,
    hint: "These are the prominent 'hip bones' at the front and the dimples at the lower back.",
    rationale: "Palpating the ASIS and PSIS bilaterally allows the therapist to assess for pelvic obliquity (tilting or rotation), which is the primary driver of functional leg length discrepancies and compensatory scoliosis (Magee, 2021)."
  },
  {
    id: 148, topic: "Clinical Interventions", difficulty: "Easy",
    question: "What is the primary rationale for applying heat to the surrounding musculature of a joint afflicted with chronic Osteoarthritis?",
    options: ["To melt the bone spurs.", "To reduce compensatory muscle hypertonicity, increase local circulation, and prepare the tissues for gentle stretching.", "To numb the nerve endings.", "To completely cure the arthritis."],
    correctAnswer: 1,
    hint: "While heat cannot reverse joint damage, it profoundly changes the state of the surrounding soft tissues.",
    rationale: "In chronic OA, the surrounding muscles often enter a state of protective guarding. Heat applications relieve this secondary hypertonicity, increase tissue extensibility, and reduce pain, allowing for more effective manual therapy and mobilization (Andrade, 2023)."
  },
  {
    id: 149, topic: "Head and Neck", difficulty: "Hard",
    question: "A client presents with unilateral TMJ pain. The dentist confirms the articular disc is displacing anteriorly. Which muscle directly attaches to the articular disc of the TMJ and, when hypertonic, pulls the disc out of place?",
    options: ["The Masseter", "The Temporalis", "The Superior Head of the Lateral Pterygoid", "The Medial Pterygoid"],
    correctAnswer: 2,
    hint: "This deep muscle runs horizontally and has two heads; the upper head inserts directly into the joint capsule and disc.",
    rationale: "The superior head of the lateral pterygoid inserts directly into the TMJ capsule and the articular disc. Hypertonicity or spasm in this muscle physically pulls the disc anteriorly, causing the classic 'click' and locking of TMJ dysfunction (Hertling & Kessler, 2006)."
  },
  {
    id: 150, topic: "Case Scenario: Osteoporosis Precaution", difficulty: "Hard",
    question: "STEM: A 72-year-old female client presents with Functional Hyperkyphosis. You plan to perform joint mobilizations on her thoracic spine to improve extension. However, her intake form lists a recent diagnosis of Osteoporosis (T-score -2.8). How must you alter your OP protocol?",
    options: ["Perform Grade 4 thrusts to correct the bone density.", "Osteoporosis is an absolute systemic contraindication for massage; refuse treatment.", "Direct vertical pressure (such as CPR-style compressions) and any Grade 3 or 4 joint mobilizations on the spine and ribs are absolute local contraindications due to the critical risk of causing pathological fractures. Treatment must rely on soft tissue MFR and gentle active movement.", "Treat her only in the prone position."],
    correctAnswer: 2,
    hint: "A T-score of -2.8 indicates severe structural fragility; the bones cannot withstand mechanical shearing forces.",
    rationale: "A T-score of -2.8 indicates severe osteoporosis (bone porosity and fragility). The bones of the spine and ribs cannot withstand the mechanical shear forces of standard joint mobilizations or heavy downward compressions; applying them is a direct liability and safety hazard (Werner, 2019)."
  }
];
