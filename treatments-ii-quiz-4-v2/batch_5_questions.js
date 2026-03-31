/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 5: Batch 5 (Questions 201 - 250)
 * Curriculum: Oral Practical (OP) Capstone, Mock OSCE Scenarios & Advanced Integration
 * Features: v2.0 Hint Integration & APA Citations
 */

window.batch5Questions = [
  {
    id: 201, topic: "Nervous System Integration", difficulty: "Easy",
    question: "Bell's Palsy involves the acute, unilateral paralysis of the facial muscles. Which specific cranial nerve is affected in this condition?",
    options: ["Trigeminal Nerve (CN V)", "Facial Nerve (CN VII)", "Vagus Nerve (CN X)", "Hypoglossal Nerve (CN XII)"],
    correctAnswer: 1,
    hint: "This nerve controls the muscles of facial expression and is highly vulnerable to viral inflammation as it exits the skull.",
    rationale: "Bell's Palsy is a lower motor neuron lesion of the Facial Nerve (Cranial Nerve VII), often triggered by a virus or extreme stress, resulting in flaccid paralysis of one side of the face (Werner, 2019)."
  },
  {
    id: 202, topic: "OP Protocols: Clinical Differentiation", difficulty: "Hard",
    question: "According to clinical protocols, what is a crucial visual indicator used to differentiate Bell's Palsy from a Stroke (CVA)?",
    options: ["A stroke causes bilateral paralysis; Bell's Palsy is unilateral.", "In Bell's Palsy, the client cannot close their eye or wrinkle their forehead on the affected side. In a stroke, the forehead is typically spared due to bilateral cortical innervation.", "A stroke only affects the lower jaw.", "Bell's palsy causes severe resting tremors."],
    correctAnswer: 1,
    hint: "Think about the dual wiring from the brain to the upper face. A brain lesion won't knock out the forehead, but a cut wire in the face will.",
    rationale: "Because the upper face receives motor signals from both hemispheres of the brain, an upper motor neuron lesion (stroke) typically spares the forehead. A peripheral lesion (Bell's Palsy) knocks out the entire half of the face (Norris, 2020)."
  },
  {
    id: 203, topic: "Nervous System Integration", difficulty: "Medium",
    question: "During an OP, you are treating a client with Parkinson's Disease. They present with severe rigidity and a resting tremor. What is the primary focus of your manual therapy?",
    options: ["Aggressive stretching to break the contractures.", "Deep friction to the basal ganglia.", "Rhythmic, soothing techniques to down-regulate the sympathetic nervous system and maintain available joint mobility.", "High-velocity joint manipulations."],
    correctAnswer: 2,
    hint: "You cannot cure the neurological deficit, but you can manage the hyper-aroused state of the nervous system and the resulting stiffness.",
    rationale: "Massage cannot reverse the loss of dopamine in Parkinson's Disease. The goal is palliative: using rhythmic, relaxing techniques to reduce rigidity, manage pain, and provide profound sympathetic sedation (Andrade, 2023)."
  },
  {
    id: 204, topic: "Nervous System Integration", difficulty: "Medium",
    question: "A client with Multiple Sclerosis (MS) is scheduled for a massage. Which environmental factor must you strictly control to prevent triggering Uhthoff's phenomenon?",
    options: ["The volume of the music.", "The ambient temperature and the use of hot hydrotherapy.", "The lighting in the room.", "The scent of the massage oil."],
    correctAnswer: 1,
    hint: "Demyelinated nerves short-circuit when the core body temperature rises.",
    rationale: "Uhthoff's phenomenon is the temporary worsening of MS symptoms caused by an increase in body temperature. Hot packs, heavy blankets, or overheated rooms are contraindicated (Werner, 2019)."
  },
  {
    id: 205, topic: "Nervous System Integration", difficulty: "Hard",
    question: "A client who survived Poliomyelitis in childhood presents decades later with profound, new-onset muscle weakness and severe fatigue. What is the diagnosis and the appropriate massage modification?",
    options: ["Post-Polio Syndrome. Massage must be extremely gentle and non-fatiguing to preserve the overworked, dying motor units.", "Active Polio Infection. Refuse treatment.", "Multiple Sclerosis. Use deep friction.", "Peripheral Neuropathy. Apply heat."],
    correctAnswer: 0,
    hint: "The compensatory nerve cells that took over the workload years ago are now burning out from exhaustion. Do not force them to work harder.",
    rationale: "Post-Polio Syndrome involves the late-stage exhaustion of compensatory motor neurons. Aggressive or fatiguing massage is contraindicated; treatments must be short, gentle, and highly supportive (Werner, 2019)."
  },
  {
    id: 206, topic: "OP Protocols: Severe Nerve Lesions", difficulty: "Medium",
    question: "STEM: During an OP, you are presented with a client who sustained a complete severance of the Radial Nerve at the mid-humerus. The examiner asks: 'What specific manual technique is an absolute contraindication for the posterior forearm?'",
    options: ["Light effleurage.", "Passive Range of Motion.", "Passive stretching of the paralyzed extensor muscles.", "Manual Lymph Drainage."],
    correctAnswer: 2,
    hint: "Flaccid muscles have no stretch reflex to protect themselves, and pulling on a severed nerve will rip the fragile, regenerating tissue.",
    rationale: "Passively stretching flaccid, denervated tissue will cause micro-tearing. Furthermore, placing tension on a regenerating nerve axon will disrupt the delicate healing process, making it an absolute contraindication (Andrade, 2023)."
  },
  {
    id: 207, topic: "Advanced Integration", difficulty: "Easy",
    question: "When performing Manual Lymph Drainage (MLD) for acute edema, which anatomical region must be 'pumped' or cleared FIRST according to clinical protocols?",
    options: ["The affected joint.", "The terminus (the supraclavicular fossa).", "The cisterna chyli.", "The inguinal nodes."],
    correctAnswer: 1,
    hint: "You cannot empty a backed-up sink if the main drain is clogged.",
    rationale: "MLD protocols strictly require clearing the proximal pathways first. Pumping the terminus (where lymph re-enters the venous system) creates a vacuum effect to draw fluid up from the distal extremities (Andrade, 2023)."
  },
  {
    id: 208, topic: "OP Protocols: Advanced Techniques", difficulty: "Medium",
    question: "A client complains of a severe, acute muscle spasm in their gastrocnemius during treatment. Which advanced technique is immediately indicated to disarm the neurological reflex?",
    options: ["Aggressive passive dorsiflexion.", "Origin & Insertion technique.", "Muscle Approximation (pushing the attachments together).", "Deep ischemic compression to the belly."],
    correctAnswer: 2,
    hint: "Physically fold the muscle to turn off the alarm bells inside the muscle spindle.",
    rationale: "Muscle Approximation physically slackens the intrafusal fibers of the muscle spindle. This removes the mechanical tension driving the stretch reflex, safely and effectively shutting down the active spasm (Willis College OP Protocol)."
  },
  {
    id: 209, topic: "OP Protocols: Advanced Techniques", difficulty: "Medium",
    question: "To effectively perform a Golgi Tendon Organ (GTO) release on a hypertonic muscle, what specific mechanical input is required?",
    options: ["Rapid, light tapping on the tendon.", "Sustained, specific compression or 'bowing' directly on the tendon (at the musculotendinous junction).", "Skin rolling over the muscle belly.", "High-velocity thrusting."],
    correctAnswer: 1,
    hint: "You must simulate extreme tension on the tendon to trick the brain into relaxing the muscle to prevent a tear.",
    rationale: "GTO release requires sustained mechanical deformation (compression or bowing) of the tendon. This artificial tension triggers autogenic inhibition, causing the alpha motor neurons to reflexively relax the target muscle (Andrade, 2023)."
  },
  {
    id: 210, topic: "OP Protocols: Advanced Techniques", difficulty: "Easy",
    question: "Which advanced technique is the primary 'indirect' choice when a client's muscle belly is far too painful or hyperalgesic to touch directly?",
    options: ["Deep transverse friction.", "Origin and Insertion (O&I) technique.", "Myofascial stripping.", "Ischemic compression."],
    correctAnswer: 1,
    hint: "If you cannot touch the middle of the string, you must work on the ends where it ties to the bone.",
    rationale: "The Origin & Insertion (O&I) technique applies pressure to the tendinous attachments rather than the muscle belly. This safely stimulates mechanoreceptors to induce a reflex release without irritating the hypersensitive tissue (Willis College OP Protocol)."
  },
  {
    id: 211, topic: "Mock OSCE: Secondary Conditions", difficulty: "Hard",
    question: "STEM: Your client presents with acute Torticollis (Wryneck). During the intake, they mention they are 28 weeks pregnant. How does this secondary condition drastically alter your treatment plan?",
    options: ["Pregnancy prevents the use of any cervical massage.", "The client must be treated in a seated or side-lying position (avoiding prolonged supine or prone) to prevent Supine Hypotensive Syndrome. Deep abdominal work is also contraindicated.", "You must use heavy tapotement on the SCM.", "You must refer them out immediately."],
    correctAnswer: 1,
    hint: "The neck injury requires treatment, but the mechanical weight of the fetus dictates how the client can safely be positioned on the table.",
    rationale: "In the third trimester, the gravid uterus can compress the inferior vena cava if the client is supine, causing a dangerous drop in maternal blood pressure. Positioning must be modified to side-lying or semi-Fowler, regardless of the primary neck complaint (Werner, 2019)."
  },
  {
    id: 212, topic: "Mock OSCE: Secondary Conditions", difficulty: "Hard",
    question: "STEM: A client presents with a severe Whiplash injury sustained 4 days ago. They also have a history of Primary Hypertension. Which assessment is absolutely critical, and what physiological response must you monitor?",
    options: ["The Thomas Test; monitor for hip pain.", "The Vertebral Artery Test (VAT) is mandatory to rule out vascular compromise. Additionally, you must monitor for orthostatic hypotension when they get off the table due to anti-hypertensive medications.", "The Slump Test; monitor for sciatica.", "The Phalen's Test; monitor for hand numbness."],
    correctAnswer: 1,
    hint: "Whiplash violently snaps the neck, endangering the arteries. Blood pressure medication makes clients dizzy when they stand up.",
    rationale: "Whiplash trauma heavily stresses the cervical vessels, mandating a VAT screen. Secondly, anti-hypertensive medications blunt the body's ability to regulate blood pressure upon standing, creating a high risk for fainting (orthostatic hypotension) (Magee, 2021)."
  },
  {
    id: 213, topic: "Mock OSCE: Complex Pathologies", difficulty: "Medium",
    question: "STEM: Your client presents with Functional Hyperkyphosis. Their health history notes chronic Bronchitis and the use of an inhaler. What is the primary impairment you are trying to resolve in this specific scenario?",
    options: ["A weak pectoralis major.", "Restricted thoracic extension and anterior fascial adhesions that are mechanically limiting the expansion of the rib cage, exacerbating their respiratory distress.", "A torn rhomboid.", "A hypertonic diaphragm."],
    correctAnswer: 1,
    hint: "If the shoulders are permanently rolled forward, the lungs physically cannot inflate fully.",
    rationale: "Functional hyperkyphosis involves adaptively shortened anterior structures (pectorals) that lock the thorax in flexion. Releasing these structures improves rib cage mechanics, directly aiding the client's comorbid respiratory condition (Andrade, 2023)."
  },
  {
    id: 214, topic: "Mock OSCE: Complex Pathologies", difficulty: "Hard",
    question: "STEM: A client complains of right-sided Temporomandibular Joint (TMJ) pain that refers into their teeth. They have an S-curve deviation upon opening. Their history notes Osteoarthritis (OA) in their knees. What does the S-curve indicate, and does the OA affect your TMJ treatment?",
    options: ["The S-curve indicates a dislocated jaw. The OA means you cannot touch them.", "The S-curve indicates a muscular imbalance (motor control issue). The OA in the knees does not directly contraindicate TMJ work, but indicates a systemic tendency toward joint degeneration that warrants gentle assessment.", "The S-curve indicates trigeminal neuralgia.", "The S-curve indicates a fractured mandible."],
    correctAnswer: 1,
    hint: "A wandering jaw that returns to center is a muscle timing issue. OA is a 'wear and tear' disease, so if they have it in their knees, their other joints might be fragile too.",
    rationale: "An S-curve deviation implies an altered muscular firing sequence (usually the pterygoids), rather than a hard structural block. While OA in the knees doesn't preclude TMJ work, it requires the therapist to be mindful of overall joint health and avoid aggressive capsular forcing (Hertling & Kessler, 2006)."
  },
  {
    id: 215, topic: "Mock OSCE: Red Flags", difficulty: "Hard",
    question: "STEM: A 65-year-old client with Osteoporosis (T-score -2.9) presents with back pain. The OP examiner asks: 'Can you perform Grade 3 Joint Mobilizations on their thoracic spine to increase extension?'",
    options: ["Yes, to stimulate bone growth.", "Yes, but only if you use a lot of oil.", "No. Severe osteoporosis is an absolute local contraindication for high-grade joint mobilizations or heavy downward compressions due to the severe risk of fracturing the fragile vertebrae.", "Yes, if they sign a waiver."],
    correctAnswer: 2,
    hint: "A T-score of -2.9 means the bones resemble fragile honeycomb. Pushing on them forcefully will break them.",
    rationale: "Osteoporosis involves severe loss of bone density. Applying Grade 3 or 4 mobilizations, which push into the tissue resistance barrier, carries an unacceptable risk of causing pathological fractures or rib subluxations (Werner, 2019)."
  },
  {
    id: 216, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "During an assessment for Thoracic Outlet Syndrome, you perform Wright's Test (Hyperabduction). The radial pulse disappears. Which specific anatomical chokepoint is implicated?",
    options: ["Between the clavicle and first rib.", "Between the anterior and middle scalenes.", "Beneath the pectoralis minor and the coracoid process.", "At the pronator teres."],
    correctAnswer: 2,
    hint: "Lifting the arm high above the head stretches the neurovascular bundle tightly underneath this specific chest muscle.",
    rationale: "Wright's Test hyperabducts the arm, selectively stretching the axillary artery and brachial plexus under a hypertonic pectoralis minor. A diminished pulse confirms this specific entrapment site (Magee, 2021)."
  },
  {
    id: 217, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "A client presents with 'Double Crush Syndrome' involving the median nerve. What does this mean for your treatment plan?",
    options: ["You only need to treat the carpal tunnel.", "The nerve is compressed in two places (e.g., the neck and the wrist). You MUST treat the proximal entrapment (TOS) first or concurrently, otherwise treating the distal entrapment (CTS) will fail.", "The nerve is completely severed.", "The client has both Lupus and MS."],
    correctAnswer: 1,
    hint: "If a garden hose is kinked at the house and at the nozzle, fixing just the nozzle won't restore the water pressure.",
    rationale: "Double Crush Syndrome dictates that a proximal nerve compression disrupts the axoplasmic flow, making the distal nerve highly vulnerable. Both the proximal source (e.g., scalenes) and the distal symptom (e.g., carpal tunnel) must be treated for clinical success (Hertling & Kessler, 2006)."
  },
  {
    id: 218, topic: "Mock OSCE: Acute Trauma", difficulty: "Hard",
    question: "STEM: A client tore their Anterior Cruciate Ligament (ACL) 3 days ago. The knee is massively swollen, hot, and painful. What is the required Willis College OP protocol for this acute stage?",
    options: ["Deep transverse friction to the ACL.", "Lachman's test followed by high-velocity joint mobilizations.", "RICE protocol (Rest, Ice, Compression, Elevation), Manual Lymph Drainage to clear the effusion, and treatment of compensatory hip/ankle structures. Direct mechanical work on the knee is contraindicated.", "Aggressive hamstring stretches."],
    correctAnswer: 2,
    hint: "The joint is a balloon of acute inflammatory fluid and severed tissue. Do not touch the injury site directly.",
    rationale: "In the acute stage of a Grade 3 sprain, the primary goals are managing inflammation and protecting the joint. Direct massage, friction, and joint play are absolutely contraindicated. MLD and compensatory care are the standards of practice (Andrade, 2023)."
  },
  {
    id: 219, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "You are assessing a client with lateral elbow pain. You perform Cozen's Test (resisted wrist extension/radial deviation), which is positive. What structure is damaged?",
    options: ["The common flexor tendon (Medial Epicondylitis).", "The ulnar collateral ligament.", "The common extensor tendon, specifically the Extensor Carpi Radialis Brevis (Lateral Epicondylitis).", "The radial nerve."],
    correctAnswer: 2,
    hint: "This test forces the muscles that lift the back of the hand to fire forcefully.",
    rationale: "Cozen's test actively engages the wrist extensors. Pain at the lateral epicondyle confirms Lateral Epicondylitis (Tennis Elbow), primarily involving the ECRB tendon (Magee, 2021)."
  },
  {
    id: 220, topic: "Mock OSCE: OP Protocol", difficulty: "Easy",
    question: "During an Oral Practical, you are instructed to perform 'Myofascial Release' (MFR) on the IT Band. What must you explicitly avoid using on the client's skin?",
    options: ["Your hands.", "Massage lotion or oil.", "A drape.", "Conversation."],
    correctAnswer: 1,
    hint: "You need a 'stick-and-drag' interface to physically shear the connective tissue.",
    rationale: "MFR requires sustained mechanical traction to deform the fascial matrix. Lubricants cause the therapist's hands to slide over the epidermis, completely defeating the purpose of the technique (Willis College OP Protocol)."
  },
  {
    id: 221, topic: "Systemic Conditions Integration", difficulty: "Medium",
    question: "A client with Systemic Lupus Erythematosus (SLE) presents with joint pain. They are currently taking high-dose systemic corticosteroids. What clinical modification is required?",
    options: ["Deep tissue massage to flush the medication.", "Long-term steroid use degrades collagen, causing tissue fragility and osteoporosis. Deep pressure, aggressive stretching, and joint mobilizations are contraindicated.", "Apply hot packs to all joints.", "Treat only the left side of the body."],
    correctAnswer: 1,
    hint: "Steroids are powerful anti-inflammatories, but over time, they melt away the structural integrity of skin, tendons, and bones.",
    rationale: "Systemic corticosteroids inhibit collagen synthesis. This leads to profound tissue fragility, making the client highly susceptible to bruising, tearing, and pathological fractures if standard mechanical pressure is applied (Werner, 2019)."
  },
  {
    id: 222, topic: "Systemic Conditions Integration", difficulty: "Hard",
    question: "A client with Ankylosing Spondylitis (AS) in the late chronic stage presents with a fully fused 'bamboo spine'. They ask you to 'crack their back' to restore mobility. What is your response?",
    options: ["Perform a Grade 5 high-velocity thrust.", "Explain that the spinal ligaments have ossified (turned to bone). The fusion is permanent and structural. Joint mobilizations are completely contraindicated, and treatment must focus on palliative soft tissue care and respiratory mechanics.", "Apply deep transverse friction to the spine.", "Use a mechanical traction table."],
    correctAnswer: 1,
    hint: "You cannot massage or mobilize bone back into a ligament.",
    rationale: "In late-stage AS, the spine structurally fuses due to pathological ossification. Any attempt to forcefully mobilize or manipulate the fused segments will cause a catastrophic fracture (Werner, 2019)."
  },
  {
    id: 223, topic: "Advanced Techniques", difficulty: "Easy",
    question: "According to Cyriax, what is the primary purpose of Deep Transverse Friction on a healing ligament?",
    options: ["To cause immediate numbing.", "To physically break down irregular cross-links and stimulate the parallel alignment of the healing collagen matrix.", "To push swelling out of the joint.", "To stimulate bone growth."],
    correctAnswer: 1,
    hint: "Scar tissue heals in a messy, haphazard web. You must rub across the grain to comb it straight.",
    rationale: "Deep transverse friction acts as a mechanical stressor that disrupts disorganized scar tissue and encourages fibroblasts to lay down new collagen parallel to the lines of tension, restoring normal tensile strength (Magee, 2021)."
  },
  {
    id: 224, topic: "Clinical Differentiation", difficulty: "Medium",
    question: "How do you differentiate between a 'firm' end feel and a 'hard' end feel during an orthopedic assessment?",
    options: ["They are the exact same thing.", "A firm end feel is the leathery stop of a stretched joint capsule/ligament. A hard end feel is the abrupt, unyielding stop of bone hitting bone.", "A firm end feel only happens in muscles.", "A hard end feel means the client is tense."],
    correctAnswer: 1,
    hint: "One feels like stretching a thick leather belt; the other feels like pushing two rocks together.",
    rationale: "A firm end feel (tissue stretch) represents the normal elastic limit of the capsuloligamentous complex. A hard end feel (bone-to-bone) represents the anatomical limit of the joint surfaces meeting, such as in elbow extension (Magee, 2021)."
  },
  {
    id: 225, topic: "OP Protocols: Joint Mobilizations", difficulty: "Medium",
    question: "During an OP, you are asked to perform Grade 2 Joint Mobilizations on the glenohumeral joint. What is the defining characteristic of a Grade 2 mobilization?",
    options: ["A small oscillation at the end of the range.", "A large amplitude rhythmic oscillation performed within the free, available range of motion, NOT pushing into the tissue resistance.", "A high-velocity thrust.", "A static, sustained stretch for 60 seconds."],
    correctAnswer: 1,
    hint: "Grade 1 and 2 are for pain and fluid movement. They stay safely within the easy, open space of the joint.",
    rationale: "Grade 2 mobilizations are utilized for pain modulation and stimulating synovial fluid. They are large-amplitude movements that deliberately avoid stressing or stretching the joint capsule (Hertling & Kessler, 2006)."
  },
  {
    id: 226, topic: "Digestive System Integration", difficulty: "Hard",
    question: "A client with Crohn's Disease (an Inflammatory Bowel Disease) presents during an acute flare-up, reporting severe abdominal pain and bloody stools. What is the absolute rule regarding abdominal massage?",
    options: ["Perform clockwise massage to soothe the bowel.", "Abdominal massage is an absolute regional contraindication. Mechanical pressure on an actively ulcerated bowel carries a critical risk of causing a life-threatening intestinal perforation.", "Perform counter-clockwise massage.", "Apply deep ischemic compression to the colon."],
    correctAnswer: 1,
    hint: "The intestinal walls are severely inflamed, thin, and bleeding. Pressing on them could cause them to burst.",
    rationale: "IBD causes deep, destructive ulcerations in the gastrointestinal tract. Any manual compression during a flare-up is strictly contraindicated due to the extreme risk of rupturing the compromised tissue (Werner, 2019)."
  },
  {
    id: 227, topic: "Metabolic System Integration", difficulty: "Medium",
    question: "A client with long-standing Diabetes Mellitus presents with Diabetic Neuropathy in their feet. What specific precaution must you take?",
    options: ["Massage their feet as hard as possible to wake up the nerves.", "Avoid deep pressure or temperature extremes (hot/cold packs) on the feet, as the client has lost protective sensation and cannot feel if you are causing tissue damage or burns.", "Never touch the feet.", "Use only ice on the feet."],
    correctAnswer: 1,
    hint: "If the alarm system is broken, the house can burn down without the owner knowing.",
    rationale: "Diabetic neuropathy abolishes the sensory feedback loop. The client cannot warn the therapist if the pressure is injurious or if a hydrotherapy application is burning the skin, mandating strict visual monitoring and conservative pressure (Norris, 2020)."
  },
  {
    id: 228, topic: "Mock OSCE: Complex Pathologies", difficulty: "Medium",
    question: "STEM: A client presents with a severe tension headache and a forward head posture. Palpation reveals a massive trigger point in the upper trapezius. Before applying ischemic compression, you must establish the pain scale. What is the target threshold?",
    options: ["Push until it hits a 9/10 to ensure a deep release.", "The pressure must elicit a 'good pain' that stays below the client's guarding threshold (usually 4/10 to 5/10), otherwise the nervous system will reflexively spasm the muscle to protect it.", "No pain should ever be felt.", "Push until the client stops breathing."],
    correctAnswer: 1,
    hint: "If you cause too much pain, the sympathetic nervous system takes over and fights back.",
    rationale: "Effective trigger point therapy relies on neurological yielding. Exceeding the client's pain tolerance triggers sympathetic arousal and defensive muscle guarding, rendering the technique useless and potentially worsening the headache (Andrade, 2023)."
  },
  {
    id: 229, topic: "Nervous System Integration", difficulty: "Easy",
    question: "A client reports an aching pain that radiates from their gluteal region down the back of their thigh, but stops at the knee. They sit on a thick wallet all day. Which condition is most likely?",
    options: ["Lumbar Disc Herniation (Sciatica)", "Piriformis Syndrome", "Plantar Fasciitis", "IT Band Syndrome"],
    correctAnswer: 1,
    hint: "The thick wallet physically crushes the muscle that the large nerve runs directly underneath.",
    rationale: "Piriformis Syndrome is a peripheral entrapment of the sciatic nerve by a hypertonic piriformis muscle, often mechanically aggravated by prolonged sitting on hard objects (Werner, 2019)."
  },
  {
    id: 230, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "During an assessment for the client in the previous question, you perform the Slump Test. The client's leg pain disappears completely when they extend their cervical spine (look up at the ceiling). What does this prove?",
    options: ["It proves they have Piriformis Syndrome.", "It proves the pain is originating from the spinal cord/dura (e.g., a disc herniation), NOT the piriformis muscle, because moving the neck only slackens the continuous neural tube, it does not attach to the hip.", "It proves they have a hamstring tear.", "It proves nothing."],
    correctAnswer: 1,
    hint: "If moving the head fixes a problem in the leg, the problem must be connected to the central 'wire' that connects the two.",
    rationale: "The Slump Test differentiates peripheral from central nerve compressions. Because the piriformis muscle doesn't connect to the neck, symptom relief via cervical extension definitively isolates the lesion to the neuromeningeal tract (Magee, 2021)."
  },
  {
    id: 231, topic: "Mock OSCE: Red Flags", difficulty: "Hard",
    question: "STEM: A client presents with sudden, severe bilateral weakness in their legs, numbness in their groin ('saddle anesthesia'), and mentions they lost control of their bladder this morning. What is the immediate required action?",
    options: ["Perform deep gluteal massage.", "Apply hot packs to the lumbar spine.", "Recognize this as Cauda Equina Syndrome, a catastrophic spinal cord compression. Terminate the assessment and advise them to go to the Emergency Room immediately to prevent permanent paralysis.", "Perform the Thomas Test."],
    correctAnswer: 2,
    hint: "Bilateral leg failure and a loss of bowel/bladder control means the main breaker panel for the lower body has been crushed.",
    rationale: "Saddle anesthesia and bowel/bladder incontinence are the ultimate red flags for Cauda Equina Syndrome. This requires emergency surgical decompression; any delay or manual therapy intervention is negligent (Magee, 2021)."
  },
  {
    id: 232, topic: "Mock OSCE: Red Flags", difficulty: "Hard",
    question: "STEM: A client presents with severe anterior lower leg pain after running. The skin over the tibialis anterior is tight, glossy, and warm. You palpate for the dorsal pedis pulse, and it is completely absent. What is the diagnosis?",
    options: ["Shin Splints (Periostitis).", "Acute Compartment Syndrome. The fascial pressure has cut off arterial blood supply. This is a medical emergency requiring immediate hospitalization.", "A stress fracture.", "A calf cramp."],
    correctAnswer: 1,
    hint: "An absent pulse means the tissue is currently suffocating and will soon die.",
    rationale: "An absent pulse combined with severe pain and shiny, tight skin indicates Acute Compartment Syndrome. The fascial compartment pressure has exceeded arterial pressure, leading to imminent tissue necrosis if not surgically relieved (Norris, 2020)."
  },
  {
    id: 233, topic: "Systemic Conditions Integration", difficulty: "Medium",
    question: "A client who underwent an axillary lymph node dissection for breast cancer 5 years ago presents with massive, painless swelling in their right arm. What is this condition, and what is the treatment approach?",
    options: ["Deep vein thrombosis; use deep friction.", "Secondary Lymphedema. Requires specialized Manual Lymph Drainage (MLD) to reroute the fluid. Deep tissue massage on the affected arm is strictly contraindicated as it will crush the remaining fragile lymphatic vessels.", "Cellulitis; apply heat.", "Muscle hypertrophy; do nothing."],
    correctAnswer: 1,
    hint: "The surgical removal of the nodes destroyed the drainage pipes. You must gently coax the fluid to a different set of pipes.",
    rationale: "Secondary Lymphedema results from surgical lymphatic destruction. MLD is highly indicated, but standard deep tissue massage will irreversibly damage the delicate compensatory lymphatic capillaries the body is trying to rebuild (Andrade, 2023)."
  },
  {
    id: 234, topic: "Systemic Conditions Integration", difficulty: "Medium",
    question: "A client with Chronic Fatigue Syndrome (CFS/ME) asks for a vigorous 90-minute deep tissue massage to 'wake up their muscles'. Why must you refuse this specific request?",
    options: ["Because they will get a rash.", "Because CFS is defined by Post-Exertional Malaise (PEM). A vigorous 90-minute session will overwhelm their broken cellular energy systems and trigger a massive, multi-day symptom crash.", "Because their bones are too fragile.", "Because they will fall asleep on the table."],
    correctAnswer: 1,
    hint: "Even receiving a massage requires the body to expend energy to process the sensory input and heal the micro-trauma.",
    rationale: "In CFS, the body cannot produce energy normally. Any physical stress (including aggressive bodywork) triggers Post-Exertional Malaise, leading to a profound and debilitating exacerbation of pain and fatigue (Werner, 2019)."
  },
  {
    id: 235, topic: "OP Protocols: Assessment", difficulty: "Easy",
    question: "During an OP, you are performing a Cyriax assessment. The client has pain on Active Range of Motion, pain on Resisted Range of Motion, but NO pain when you passively move the joint for them. Where is the lesion?",
    options: ["In the joint capsule (inert tissue).", "In the muscle belly or tendon (contractile tissue).", "In the bone.", "In the bursa."],
    correctAnswer: 1,
    hint: "What tissue is completely turned off and relaxed during a passive movement?",
    rationale: "If the pain only occurs when the muscle is forced to fire (active/resisted), but disappears when the muscle is relaxed (passive), the lesion is isolated to the contractile unit (Magee, 2021)."
  },
  {
    id: 236, topic: "OP Protocols: Assessment", difficulty: "Medium",
    question: "You perform the Lachman's Test on a client's knee. The tibia translates excessively forward with a 'mushy' or empty end feel. What structure has been ruptured?",
    options: ["The Posterior Cruciate Ligament (PCL).", "The Anterior Cruciate Ligament (ACL).", "The Medial Collateral Ligament (MCL).", "The Patellar Tendon."],
    correctAnswer: 1,
    hint: "This ligament prevents the shin bone from sliding out the front of the knee.",
    rationale: "Lachman's Test specifically assesses the ACL. Excessive anterior tibial translation with a soft or empty end feel confirms a Grade 3 complete rupture of the ligament (Magee, 2021)."
  },
  {
    id: 237, topic: "Mock OSCE: Advanced Protocols", difficulty: "Hard",
    question: "STEM: A client presents with a severe contracture of the right Iliopsoas, resulting in an anterior pelvic tilt. Which Proprioceptive Neuromuscular Facilitation (PNF) technique would be most effective, and how is it performed?",
    options: ["Skin rolling the abdomen.", "Post-Isometric Relaxation (PIR) or Contract-Relax. You bring the hip into extension to the barrier, have the client isometrically contract the iliopsoas (flex the hip) against your resistance for 5-10 seconds, then client relaxes, and you stretch further into extension.", "Deep friction to the ASIS.", "Muscle approximation of the glutes."],
    correctAnswer: 1,
    hint: "You must fatigue the tight muscle by making it fight you before you can effectively stretch it.",
    rationale: "PNF stretching (Contract-Relax) utilizes autogenic inhibition. The isometric contraction of the hypertonic iliopsoas fatigues the muscle and triggers a neurological relaxation phase, allowing the therapist to safely increase the range of extension (Andrade, 2023)."
  },
  {
    id: 238, topic: "Clinical Integration", difficulty: "Medium",
    question: "A client with Rheumatoid Arthritis (RA) presents for an appointment. They state that two of their finger joints are currently 'flaring up'—they are red, swollen, and hot. What is the clinical protocol?",
    options: ["Perform Grade 4 joint mobilizations on the fingers.", "Apply deep transverse friction to the swollen joints.", "Massage, stretching, and hydrotherapy (heat) are absolute local contraindications on the actively flaring joints to prevent further destruction of the synovial membrane.", "Apply ice and stretch them aggressively."],
    correctAnswer: 2,
    hint: "The immune system is currently attacking and dissolving the joint tissue. Mechanical pressure will speed up the destruction.",
    rationale: "During an acute RA flare-up, the joints are actively inflamed and structurally unstable due to pannus formation. Any manual therapy on these specific joints will exacerbate the autoimmune destruction and is strictly contraindicated (Werner, 2019)."
  },
  {
    id: 239, topic: "Mock OSCE: OP Protocol", difficulty: "Hard",
    question: "STEM: You are treating a client with a history of deep vein thrombosis (DVT) in their left calf 3 years ago. They are currently on anticoagulant medication (blood thinners). They complain of left calf tightness. What technique must you absolutely avoid?",
    options: ["Light effleurage.", "Deep, sustained ischemic compression or aggressive deep tissue stripping to the calf.", "Passive range of motion of the ankle.", "Reflexology."],
    correctAnswer: 1,
    hint: "Blood thinners make the vascular system highly prone to severe internal bleeding and bruising from mechanical pressure.",
    rationale: "Clients on anticoagulant therapy are highly susceptible to severe hematomas and tissue damage from mechanical compression. Deep ischemic work or aggressive stripping is locally contraindicated (Andrade, 2023)."
  },
  {
    id: 240, topic: "Nervous System Integration", difficulty: "Easy",
    question: "Which entrapment syndrome is characterized by a positive Phalen's test, a positive Tinel's sign at the wrist, and numbness in the thumb, index, and middle fingers?",
    options: ["Cubital Tunnel Syndrome", "Thoracic Outlet Syndrome", "Carpal Tunnel Syndrome", "Guyon's Canal Syndrome"],
    correctAnswer: 2,
    hint: "This syndrome compresses the median nerve directly under the flexor retinaculum.",
    rationale: "These are the classic, hallmark diagnostic indicators for Carpal Tunnel Syndrome, representing an entrapment of the median nerve at the wrist (Magee, 2021)."
  },
  {
    id: 241, topic: "OP Protocols: Joint Mobilizations", difficulty: "Hard",
    question: "According to the Convex-Concave rule, if a client lacks shoulder Abduction, in which direction must you glide the humeral head to restore arthrokinematic motion?",
    options: ["Superiorly.", "Anteriorly.", "Inferiorly (Caudally).", "Posteriorly."],
    correctAnswer: 2,
    hint: "As the arm bone rolls UP, the ball must slide DOWN so it doesn't pop out of the socket.",
    rationale: "The Convex-Concave rule states that a convex surface (humeral head) moving on a stable concave surface (glenoid) slides in the opposite direction of the bone shaft. Therefore, to increase upward abduction, an inferior glide is required (Hertling & Kessler, 2006)."
  },
  {
    id: 242, topic: "Mock OSCE: Acute Trauma", difficulty: "Medium",
    question: "A client presents 24 hours after rolling their ankle (Inversion Sprain). The lateral ankle is severely swollen and bruised. What is the most appropriate hydrotherapy application?",
    options: ["A hot hydrocollator pack to increase circulation.", "A cold compress or ice pack to manage the acute inflammatory exudate and provide analgesia.", "A contrast bath.", "Warm paraffin wax."],
    correctAnswer: 1,
    hint: "Heat dilates blood vessels, which would pour more fluid into an already swollen, bleeding joint.",
    rationale: "In the acute inflammatory phase (first 24-72 hours), cold hydrotherapy is indicated to induce vasoconstriction, limiting further edema and providing vital pain relief (Andrade, 2023)."
  },
  {
    id: 243, topic: "Clinical Differentiation", difficulty: "Medium",
    question: "How do you clinically differentiate between a structural scoliosis and a functional scoliosis?",
    options: ["By taking their blood pressure.", "By performing Adam's Forward Bend Test. If the rib hump remains when they bend over, it is structural (bony). If the spine straightens out, it is functional (muscular).", "By asking how long they have had it.", "By performing the Slump Test."],
    correctAnswer: 1,
    hint: "You must remove the influence of the postural muscles to see if the bones themselves are twisted.",
    rationale: "Adam's Forward Bend Test removes the active postural tone of the erector spinae. If the scoliotic curve and rotational rib hump persist in flexion, the deformity is fixed within the bone structure (Magee, 2021)."
  },
  {
    id: 244, topic: "Digestive System Integration", difficulty: "Easy",
    question: "During a general abdominal massage for digestion, in which quadrant should the strokes ultimately terminate to encourage the evacuation of the bowel?",
    options: ["Upper Right Quadrant.", "Lower Right Quadrant.", "Lower Left Quadrant (following the descending and sigmoid colon).", "Upper Left Quadrant."],
    correctAnswer: 2,
    hint: "This is where the colon makes its final turn into the rectum.",
    rationale: "The large intestine terminates at the descending and sigmoid colon in the lower left quadrant. All abdominal massage strokes for constipation must follow the clockwise path and end here to assist fecal movement (Werner, 2019)."
  },
  {
    id: 245, topic: "Systemic Conditions Integration", difficulty: "Medium",
    question: "A pregnant client in her 3rd trimester reports feeling dizzy, nauseous, and short of breath when she lies flat on her back. What is the physiological cause?",
    options: ["She is having a panic attack.", "Supine Hypotensive Syndrome. The weight of the fetus is physically crushing the inferior vena cava against her spine, cutting off blood return to her heart.", "She is allergic to the massage oil.", "She is dehydrated."],
    correctAnswer: 1,
    hint: "The large vein returning blood from the legs is located deep in the abdomen, directly beneath the heavy uterus.",
    rationale: "Supine positioning in late pregnancy causes the gravid uterus to occlude the inferior vena cava, leading to a drastic drop in venous return and cardiac output. The client must be immediately moved to a side-lying position (Werner, 2019)."
  },
  {
    id: 246, topic: "Mock OSCE: Advanced Protocols", difficulty: "Hard",
    question: "STEM: During an OP, the examiner points to a client's upper trapezius and says, 'This muscle is extremely hypertonic, but the client cannot tolerate direct pressure on the belly. Demonstrate the Origin & Insertion (O&I) technique.' Where do you place your hands?",
    options: ["On the middle of the muscle belly.", "On the occipital ridge and the lateral third of the clavicle/acromion.", "On the spinous processes of the lumbar spine.", "On the sternum."],
    correctAnswer: 1,
    hint: "You must know the exact anatomical attachments of the upper trapezius to perform this technique.",
    rationale: "The O&I technique requires specific compression on the tendinous attachments. The upper trapezius originates on the external occipital protuberance/nuchal line and inserts on the lateral clavicle and acromion process (Willis College OP Protocol)."
  },
  {
    id: 247, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "A client reports severe heel pain with their first steps out of bed. You perform the Windlass Test (passively extending the great toe while the client bears weight). The test reproduces the sharp pain in their heel. What is the diagnosis?",
    options: ["Achilles Tendinopathy", "Tarsal Tunnel Syndrome", "Plantar Fasciitis", "Morton's Neuroma"],
    correctAnswer: 2,
    hint: "Extending the big toe pulls the thick tissue on the bottom of the foot completely taut, straining the attachment at the heel.",
    rationale: "The Windlass mechanism tightens the plantar aponeurosis to support the arch. A positive test (pain at the medial calcaneal tubercle) confirms the mechanical irritation characteristic of Plantar Fasciitis (Magee, 2021)."
  },
  {
    id: 248, topic: "Clinical Integration", difficulty: "Hard",
    question: "A client presents with 'Frozen Shoulder' (Adhesive Capsulitis) in the acute 'Freezing' stage. The joint is exquisitely painful and ROM is severely limited. What is your treatment plan?",
    options: ["Forceful Grade 4 joint mobilizations to break the frozen capsule.", "Aggressive stretching past the pain barrier.", "Pain-free active range of motion, pendulum exercises, and treating the compensatory neck and scapular muscles. Aggressive mechanical forcing is strictly contraindicated.", "Complete immobilization in a sling for 6 months."],
    correctAnswer: 2,
    hint: "The joint is actively inflamed and thickening. Forcing it will only provoke the immune system to lay down more scar tissue.",
    rationale: "During the acute 'freezing' stage, the capsule is actively inflamed. Aggressive stretching or high-grade mobilizations will trigger further inflammatory responses and worsen the contracture. Treatment is palliative and supportive (Andrade, 2023)."
  },
  {
    id: 249, topic: "Mock OSCE: Red Flags", difficulty: "Hard",
    question: "STEM: During an OP, a client presents with unilateral swelling, heat, and deep, throbbing pain in their right calf. They recently returned from a 14-hour flight. What must you do?",
    options: ["Perform deep effleurage to move the fluid.", "Perform a GTO release on the Achilles.", "Recognize the cardinal signs of a Deep Vein Thrombosis (DVT). Massage to the area is an absolute contraindication. Terminate the session and refer them for emergency medical imaging.", "Apply a hot pack."],
    correctAnswer: 2,
    hint: "Prolonged immobility on a plane causes blood to pool and clot in the deep veins of the leg.",
    rationale: "Unilateral heat, swelling, and pain following prolonged immobility are classic red flags for a DVT. Any mechanical manipulation could dislodge the thrombus, causing a fatal pulmonary embolism (Norris, 2020)."
  },
  {
    id: 250, topic: "The Capstone: The OP Spasm Scenario", difficulty: "Hard",
    question: "STEM: During the final minutes of your OP, the examiner points to the client's hamstring and says, 'The client has just developed an active, agonizing muscle spasm right here. Show me your immediate intervention.' What is the required Willis College physical demonstration?",
    options: ["I will forcefully stretch the hamstring by flexing the hip and extending the knee.", "I will apply deep, direct elbow pressure to the center of the spasm.", "I will apply the 'Muscle Approximation' technique. I will grasp the tissue near the ischial tuberosity and the posterior knee, and physically push the attachments together to slacken the muscle spindles, holding until the reflex yields.", "I will perform rapid tapotement to confuse the nerve."],
    correctAnswer: 2,
    hint: "Do not pull the muscle apart; fold it together to turn off the alarm.",
    rationale: "The Willis College Clinical Guide explicitly designates Muscle Approximation as the primary advanced protocol for an active muscle spasm. Stretching an active spasm can tear the tissue; deep pressure exacerbates the pain. Approximation uses neurophysiology to safely disarm the reflex (Willis College OP Protocol)."
  }
];
