/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 4: Batch 4 (Questions 151 - 200)
 * Curriculum: Digestive, Metabolic, Infant Massage, Peripheral Nervous System
 * Features: v2.0 Hint Integration & APA Citations
 */

window.batch4Questions = [
  {
    id: 151, topic: "Digestive System", difficulty: "Easy",
    question: "When performing an abdominal massage to address chronic constipation, what is the required directional protocol?",
    options: ["Counter-clockwise.", "Clockwise, following the ascending, transverse, and descending colon.", "Medial to lateral from the umbilicus.", "Deep sustained compression directly over the cecum."],
    correctAnswer: 1,
    hint: "You must follow the anatomical path of the large intestine to mechanically assist the movement of fecal matter.",
    rationale: "Abdominal massage must follow the anatomical direction of peristalsis (clockwise) to safely and effectively move fecal matter through the large intestine toward the rectum (Andrade, 2023)."
  },
  {
    id: 152, topic: "Digestive System", difficulty: "Easy",
    question: "Which of the following conditions is a functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits (diarrhea/constipation) WITHOUT any structural tissue damage or inflammation?",
    options: ["Crohn's Disease", "Ulcerative Colitis", "Irritable Bowel Syndrome (IBS)", "Diverticulitis"],
    correctAnswer: 2,
    hint: "The hardware (the tissue) is fine, but the software (the neuromuscular control of the bowel) is hyper-reactive, often driven by stress.",
    rationale: "Irritable Bowel Syndrome (IBS) is a functional disorder of the lower GI tract. Unlike IBD, it does not involve autoimmune inflammation, ulcers, or structural damage to the intestinal walls (Werner, 2019)."
  },
  {
    id: 153, topic: "Digestive System", difficulty: "Hard",
    question: "A client with Crohn's Disease presents for a massage during an acute flare-up, reporting severe abdominal pain and bloody diarrhea. What is the appropriate clinical response?",
    options: ["Perform deep, clockwise abdominal massage to clear the blockage.", "Perform a soothing abdominal massage to calm the pain.", "Abdominal massage is an absolute local contraindication during an acute flare-up of Inflammatory Bowel Disease.", "Apply a hot hydrocollator pack directly to the abdomen."],
    correctAnswer: 2,
    hint: "Crohn's disease causes deep, ulcerative lesions in the intestinal wall. Mechanical pressure could cause a catastrophic perforation.",
    rationale: "Crohn's Disease (a type of IBD) involves severe, destructive inflammation and ulceration of the GI tract. Any abdominal massage during a flare-up is strictly contraindicated due to the risk of intestinal perforation (Werner, 2019)."
  },
  {
    id: 154, topic: "Metabolic System", difficulty: "Medium",
    question: "A client with poorly controlled Diabetes Mellitus frequently experiences a \"stocking-and-glove\" distribution of numbness and tingling in their extremities. What is this condition?",
    options: ["Peripheral Artery Disease", "Diabetic Neuropathy", "Multiple Sclerosis", "Raynaud's Disease"],
    correctAnswer: 1,
    hint: "Chronically high blood sugar damages the delicate microvasculature that feeds the distal nerve endings, causing them to die.",
    rationale: "Diabetic Neuropathy is a progressive degeneration of the peripheral nerves, starting distally in the feet and hands, caused by the ischemic damage of chronic hyperglycemia (Norris, 2020)."
  },
  {
    id: 155, topic: "Metabolic System", difficulty: "Medium",
    question: "When treating a client with Type 1 Diabetes who uses an insulin pump or recent injection sites, what specific precaution must be taken?",
    options: ["Avoid massaging the injection site for at least 24 hours to prevent abnormally rapid absorption of the insulin.", "Massage the injection site aggressively to ensure the insulin distributes evenly.", "Apply deep heat over the injection site.", "Refuse treatment; Type 1 diabetes is an absolute systemic contraindication."],
    correctAnswer: 0,
    hint: "Massage increases local circulation. If you increase circulation around an injected drug, you change how fast it hits the bloodstream.",
    rationale: "Massaging over a recent insulin injection site artificially increases local circulation, accelerating the absorption of the drug and potentially triggering a dangerous hypoglycemic crisis (Werner, 2019)."
  },
  {
    id: 156, topic: "Infant Massage", difficulty: "Easy",
    question: "When performing infant massage, what is the primary therapeutic goal?",
    options: ["To break down fascial adhesions.", "To stimulate the sympathetic nervous system.", "To promote bonding, tactile stimulation, and parasympathetic relaxation.", "To correct congenital skeletal deformities."],
    correctAnswer: 2,
    hint: "Infant massage is less about fixing mechanical \"knots\" and more about neurological development and comfort.",
    rationale: "The primary goals of infant massage are to foster parent-child bonding, provide vital tactile stimulation for nervous system development, and induce parasympathetic sedation to aid in sleep and digestion (Andrade, 2023)."
  },
  {
    id: 157, topic: "Infant Massage", difficulty: "Medium",
    question: "During an infant massage session, the baby begins to cry forcefully, turns their head away, and displays a mottled skin tone. What is the correct clinical action?",
    options: ["Continue the massage, but use lighter pressure.", "Stop the massage immediately; these are signs of overstimulation or distress.", "Apply a cold compress to their forehead.", "Sing loudly to distract them from the pain."],
    correctAnswer: 1,
    hint: "Infants cannot verbally revoke consent, so the therapist must strictly obey their physiological and behavioral \"stop\" signals.",
    rationale: "Crying, turning away, splayed fingers, and mottled skin are clear signs of neurological overstimulation or distress. The therapist must immediately cease the massage to respect the infant's tolerance limits (Andrade, 2023)."
  },
  {
    id: 158, topic: "Peripheral Nervous System", difficulty: "Easy",
    question: "Thoracic Outlet Syndrome (TOS) involves the compression of the brachial plexus and/or the subclavian vessels. Which of the following is NOT a common anatomical \"chokepoint\" for TOS?",
    options: ["Between the anterior and middle scalenes.", "Between the clavicle and the first rib.", "Beneath the pectoralis minor and the coracoid process.", "Within the carpal tunnel."],
    correctAnswer: 3,
    hint: "TOS is a proximal entrapment syndrome located in the neck and upper chest.",
    rationale: "The carpal tunnel is located at the wrist and involves the median nerve, making it a distal entrapment site, completely distinct from the proximal brachial plexus compressions defining TOS (Magee, 2021)."
  },
  {
    id: 159, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "You suspect your client has TOS involving the anterior scalene triangle. To perform Adson's Maneuver, you locate the radial pulse and instruct the client to:",
    options: ["Rotate their head AWAY from the test side and look down.", "Rotate their head TOWARD the test side, extend their neck, and take a deep breath.", "Hyperabduct their arm behind their head.", "Squeeze their shoulder blades together forcefully."],
    correctAnswer: 1,
    hint: "This specific combination of movements maximally stretches the anterior scalene while elevating the first rib to pinch the neurovascular bundle.",
    rationale: "Adson's Maneuver tests the anterior scalene triangle. Rotating toward the test side, extending the neck, and inspiring deeply tenses the anterior scalene and elevates the first rib, compressing the neurovascular bundle (Magee, 2021)."
  },
  {
    id: 160, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "Which special test for TOS specifically evaluates compression at the costoclavicular space (between the clavicle and the first rib) by having the client retract and depress their shoulders?",
    options: ["Wright's Test", "Eden's Test (Costoclavicular Test)", "Roos Test", "Halstead's Test"],
    correctAnswer: 1,
    hint: "The client thrusts their chest out and pulls their shoulders down and back, closing the gap like a pair of scissors.",
    rationale: "Eden's Test (the Costoclavicular Test) forces the clavicle inferiorly and posteriorly against the first rib. A diminished radial pulse confirms compression in the costoclavicular space (Magee, 2021)."
  },
  {
    id: 161, topic: "Orthopedic Assessment", difficulty: "Easy",
    question: "Which test for Thoracic Outlet Syndrome evaluates the entire outlet by having the client hold their arms in a \"stick-up\" position (90 degrees abduction and external rotation) while opening and closing their hands for 3 minutes?",
    options: ["Tinel's Sign", "Roos Test (EAST)", "Adson's Maneuver", "Phalen's Test"],
    correctAnswer: 1,
    hint: "This is considered an \"Elevated Arm Stress Test\" and assesses for rapid ischemic fatigue in the upper extremity.",
    rationale: "The Roos Test (Elevated Arm Stress Test) evaluates the entire thoracic outlet. Inability to maintain the position for 3 minutes due to ischemic pain, heaviness, or profound weakness is a positive sign for TOS (Magee, 2021)."
  },
  {
    id: 162, topic: "Peripheral Nervous System", difficulty: "Easy",
    question: "Carpal Tunnel Syndrome involves the compression of which specific peripheral nerve?",
    options: ["Radial Nerve", "Ulnar Nerve", "Median Nerve", "Musculocutaneous Nerve"],
    correctAnswer: 2,
    hint: "This nerve travels dead center down the anterior forearm and passes directly beneath the transverse carpal ligament.",
    rationale: "Carpal Tunnel Syndrome is the entrapment of the Median Nerve as it passes under the flexor retinaculum, affecting sensation to the lateral palm and the first 3.5 digits (Werner, 2019)."
  },
  {
    id: 163, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To assess for Carpal Tunnel Syndrome, you perform Phalen's Test. What is the correct execution of this test?",
    options: ["Forced maximal wrist extension (Prayer position) for 60 seconds.", "Forced maximal wrist flexion (dorsal surfaces of the hands pushed together) for 60 seconds.", "Tapping sharply over the flexor retinaculum.", "Resisted wrist flexion."],
    correctAnswer: 1,
    hint: "You want to push the backs of the hands together to mechanically fold and compress the space within the tunnel.",
    rationale: "Phalen's Test places the wrists in maximal, unforced flexion for up to 60 seconds to purposefully compress the carpal tunnel. Reproduction of tingling in the median nerve distribution is a positive sign (Magee, 2021)."
  },
  {
    id: 164, topic: "Peripheral Nervous System", difficulty: "Hard",
    question: "A client presents with numbness in their thumb and index finger. They test positive for Carpal Tunnel Syndrome (Phalen's), but they ALSO test positive for Thoracic Outlet Syndrome (Adson's). What clinical phenomenon does this describe?",
    options: ["Systemic Lupus Erythematosus", "Double Crush Syndrome", "Raynaud's Phenomenon", "Guillain-Barré Syndrome"],
    correctAnswer: 1,
    hint: "A proximal chokehold on a nerve disrupts its internal flow, making the distal portion of the nerve highly vulnerable to even minor compressions.",
    rationale: "Double Crush Syndrome occurs when a proximal compression (e.g., TOS) disrupts axoplasmic flow, rendering the distal portion of the nerve highly susceptible to secondary entrapments (e.g., CTS). Both sites must be treated for a successful outcome (Hertling & Kessler, 2006)."
  },
  {
    id: 165, topic: "Peripheral Nervous System", difficulty: "Easy",
    question: "Piriformis Syndrome involves the muscular entrapment of which major peripheral nerve?",
    options: ["Femoral Nerve", "Obturator Nerve", "Sciatic Nerve", "Pudendal Nerve"],
    correctAnswer: 2,
    hint: "This is the thickest nerve in the human body, exiting the pelvis directly under (or sometimes through) the piriformis muscle.",
    rationale: "Piriformis Syndrome occurs when a hypertonic or spasming piriformis muscle compresses the Sciatic Nerve, causing radiating pain, numbness, and tingling down the posterior leg (Werner, 2019)."
  },
  {
    id: 166, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "Which special test is utilized to assess for Piriformis Syndrome by having the seated client resist active hip abduction and external rotation?",
    options: ["Thomas Test", "PACE Abduction Test", "Slump Test", "Straight Leg Raise"],
    correctAnswer: 1,
    hint: "The piriformis is a primary external rotator and abductor of the hip; forcing it to fire against resistance will reproduce the nerve pain if it is the culprit.",
    rationale: "The PACE Abduction Test forces the piriformis to contract against resistance. If the muscle is inflamed or entrapping the sciatic nerve, this resisted contraction will reproduce the client's radicular gluteal pain (Magee, 2021)."
  },
  {
    id: 167, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "A client reports shooting pain down their posterior thigh. To differentiate between true Lumbar Radiculopathy (a herniated disc) and Piriformis Syndrome, which assessment is most definitive?",
    options: ["The Straight Leg Raise (SLR).", "The PACE Test.", "The Slump Test; if extending the cervical spine relieves the leg pain, the issue is a spinal dural/root compression, not a peripheral muscle entrapment.", "Palpating the glutes."],
    correctAnswer: 2,
    hint: "You need a test that moves the spinal cord itself without moving the hip muscles.",
    rationale: "The Slump Test evaluates the entire neuromeningeal tract. Because moving the neck does not affect the piriformis muscle, if cervical extension relieves the leg pain, the entrapment must be rooted in the spinal column (Magee, 2021)."
  },
  {
    id: 168, topic: "Peripheral Nervous System", difficulty: "Easy",
    question: "Bell's Palsy is a unilateral flaccid paralysis of the muscles of facial expression. Which cranial nerve is affected?",
    options: ["Trigeminal Nerve (CN V)", "Facial Nerve (CN VII)", "Vagus Nerve (CN X)", "Glossopharyngeal Nerve (CN IX)"],
    correctAnswer: 1,
    hint: "This nerve controls all the superficial muscles used for smiling, frowning, and closing the eyes.",
    rationale: "Bell's Palsy is a lower motor neuron lesion of the Facial Nerve (Cranial Nerve VII), often triggered by a viral infection (like Herpes Simplex) or severe stress (Werner, 2019)."
  },
  {
    id: 169, topic: "Peripheral Nervous System", difficulty: "Hard",
    question: "A client presents with sudden, unilateral facial paralysis. Before treating them for Bell's Palsy, you must rule out a Stroke (CVA). What is the critical visual differentiator?",
    options: ["A stroke causes the mouth to droop, but Bell's palsy does not.", "In Bell's Palsy, the ENTIRE half of the face is paralyzed, meaning they cannot wrinkle their forehead or close their eye. In a stroke, the upper face is usually spared.", "A stroke only affects the tongue.", "Bell's Palsy always presents with a severe fever."],
    correctAnswer: 1,
    hint: "Because the forehead receives dual innervation from both sides of the brain, a brain lesion (stroke) won't paralyze it, but a peripheral nerve lesion (Bell's) will wipe out the whole side.",
    rationale: "A stroke (an upper motor neuron lesion) typically spares the forehead muscles due to bilateral cortical innervation. Bell's Palsy (a peripheral lesion) paralyzes the entire half of the face, rendering the client unable to wrinkle their forehead or close their eyelid (Norris, 2020)."
  },
  {
    id: 170, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "When treating a client with Bell's Palsy, what specific safety precaution must the therapist take regarding the client's eye on the affected side?",
    options: ["Apply deep pressure to the eyeball to stimulate the nerve.", "Ensure the eye is protected (e.g., patched or taped closed during prone work) because the client cannot blink to lubricate or protect the cornea.", "Shine a bright light into the eye to test pupil dilation.", "Apply essential oils around the orbital socket."],
    correctAnswer: 1,
    hint: "Without the blink reflex, the eye is completely defenseless against dust, drying out, or the massage table linens.",
    rationale: "Because the orbicularis oculi is paralyzed, the client cannot close their eye or blink. The cornea is at high risk for severe drying and mechanical scratching, requiring strict protection during treatment (Andrade, 2023)."
  },
  {
    id: 171, topic: "Nerve Lesions", difficulty: "Easy",
    question: "A severe lesion or severing of the Radial Nerve at the axilla or mid-humerus results in which classic clinical deformity?",
    options: ["Claw Hand", "Ape Hand", "Wrist Drop", "Foot Drop"],
    correctAnswer: 2,
    hint: "The radial nerve innervates all the extensor muscles of the posterior arm and forearm. If it dies, gravity takes over.",
    rationale: "A radial nerve lesion denervates the triceps, brachioradialis, and all wrist/finger extensors, resulting in a flaccid \"wrist drop\" where the client cannot actively extend their hand (Hertling & Kessler, 2006)."
  },
  {
    id: 172, topic: "Nerve Lesions", difficulty: "Medium",
    question: "An entrapment of the Ulnar Nerve at Guyon's Canal (between the pisiform and the hook of the hamate) leads to a condition known as \"Handlebar Palsy.\" What is the classic presentation?",
    options: ["Numbness on the dorsal web space of the thumb.", "A 'Claw Hand' deformity affecting the 4th and 5th digits, with atrophy of the hypothenar eminence.", "Inability to flex the elbow.", "Severe swelling of the entire forearm."],
    correctAnswer: 1,
    hint: "The ulnar nerve controls the small intrinsic muscles of the hand that balance the pull of the long finger flexors.",
    rationale: "Ulnar nerve entrapment paralyzes the intrinsic muscles (lumbricals and interossei) of the medial hand. Without their balance, the long flexors pull the ring and pinky fingers into a permanent \"claw\" position (Magee, 2021)."
  },
  {
    id: 173, topic: "Nerve Lesions", difficulty: "Medium",
    question: "A severe, late-stage Median Nerve lesion results in \"Ape Hand\" deformity. Which muscle group suffers profound visible atrophy in this condition?",
    options: ["The hypothenar eminence (pinky side).", "The thenar eminence (thumb side).", "The dorsal interossei.", "The extensor digitorum."],
    correctAnswer: 1,
    hint: "The median nerve is the primary motor supply to the meaty pad at the base of the thumb.",
    rationale: "A median nerve lesion denervates the muscles of the thenar eminence (opponens pollicis, abductor pollicis brevis), causing severe visible wasting and an inability to oppose the thumb, creating an \"ape-like\" flat hand (Hertling & Kessler, 2006)."
  },
  {
    id: 174, topic: "Clinical Interventions", difficulty: "Hard",
    question: "A client has a regenerating peripheral nerve lesion. What manual therapy technique is an ABSOLUTE CONTRAINDICATION for the affected limb?",
    options: ["Passive Range of Motion (PROM) within pain-free limits.", "Light effleurage to assist venous return.", "Passive stretching of the paralyzed or weakened muscles, or stretching the nerve itself.", "Joint mobilizations of the unaffected joints."],
    correctAnswer: 2,
    hint: "Paralyzed muscles have no tone to protect themselves, and regenerating nerve tissue is exquisitely fragile.",
    rationale: "Paralyzed muscles lack the protective stretch reflex. Passively stretching flaccid tissue will cause micro-tearing. Furthermore, placing mechanical tension (stretching) on a regenerating nerve will tear the delicate advancing axons, setting back recovery (Andrade, 2023)."
  },
  {
    id: 175, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To differentiate between Carpal Tunnel Syndrome (CTS) and Pronator Teres Syndrome, what key sensory finding must be assessed?",
    options: ["If Phalen's test is positive, it is automatically Pronator Teres Syndrome.", "If the numbness includes the palm of the hand, the entrapment is proximal (Pronator Teres), because the palmar cutaneous branch of the median nerve bypasses the carpal tunnel.", "Only an MRI can differentiate them.", "Pronator Teres Syndrome only affects the elbow, never the hand."],
    correctAnswer: 1,
    hint: "Think about the \"fork in the road.\" The nerve branch that feeds the skin of the palm splits off *before* it goes under the wrist ligament.",
    rationale: "The palmar cutaneous branch of the median nerve does not pass through the carpal tunnel. If the client has numbness in the palm itself, the entrapment must be proximal to the wrist (e.g., at the pronator teres) (Magee, 2021)."
  },
  {
    id: 176, topic: "Systemic Conditions", difficulty: "Medium",
    question: "Poliomyelitis is a viral infection that specifically destroys what part of the nervous system, leading to flaccid paralysis?",
    options: ["The myelin sheath in the brain.", "The sensory receptors in the skin.", "The anterior horn motor neurons in the spinal cord.", "The sympathetic ganglia."],
    correctAnswer: 2,
    hint: "This virus attacks the specific cells in the spinal cord that send \"movement\" signals out to the muscles.",
    rationale: "The poliovirus specifically targets and destroys the anterior horn cells (lower motor neurons) in the spinal cord, permanently cutting off the motor signal to the skeletal muscles and causing flaccid paralysis (Norris, 2020)."
  },
  {
    id: 177, topic: "Systemic Conditions", difficulty: "Hard",
    question: "A client who had Polio 40 years ago now presents with new, profound muscle weakness, severe fatigue, and joint pain. What condition is this, and what is the massage treatment approach?",
    options: ["This is a re-infection of the Polio virus; massage is contraindicated.", "This is Post-Polio Syndrome. The overworked surviving motor neurons are dying. Treatment must be exceptionally gentle to avoid exhausting the remaining motor units.", "This is Multiple Sclerosis; treat with deep cross-fiber friction.", "This is normal aging; apply heavy tapotement to stimulate the nerves."],
    correctAnswer: 1,
    hint: "Decades after the initial illness, the few nerve cells that survived and took on the workload of the dead cells finally burn out from exhaustion.",
    rationale: "Post-Polio Syndrome is the late-onset degeneration of the compensatory motor units that survived the initial infection. Because these neurons are critically overworked, aggressive or fatiguing massage is contraindicated as it can accelerate their breakdown (Werner, 2019)."
  },
  {
    id: 178, topic: "Systemic Conditions", difficulty: "Easy",
    question: "Parkinson's Disease is characterized by a resting tremor, bradykinesia (slow movement), and a rigid, \"mask-like\" face. What is the underlying pathophysiology?",
    options: ["A viral infection of the cerebellum.", "The progressive death of dopamine-producing cells in the substantia nigra of the basal ganglia.", "An autoimmune attack on the spinal cord.", "A severe drop in blood sugar."],
    correctAnswer: 1,
    hint: "This disease involves a critical shortage of the neurotransmitter responsible for smooth, coordinated movement.",
    rationale: "Parkinson's Disease is a degenerative disorder of the central nervous system caused by the death of dopamine-generating cells in the substantia nigra, severely impairing the brain's ability to initiate and control movement (Norris, 2020)."
  },
  {
    id: 179, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When treating a client with Parkinson's Disease, what is a primary goal of the massage therapy session?",
    options: ["To permanently cure the resting tremor.", "To aggressively stretch the flexor contractures using high-velocity thrusts.", "To reduce rigidity, maintain available joint mobility, and down-regulate the sympathetic nervous system.", "To stimulate the muscles with heavy tapotement."],
    correctAnswer: 2,
    hint: "You cannot fix the brain, but you can manage the \"stiffness\" in the body and calm the anxiety associated with the disease.",
    rationale: "Massage cannot alter the neurodegeneration of Parkinson's, but it is highly effective at temporarily reducing muscular rigidity, preventing permanent contractures through gentle ROM, and providing profound sympathetic sedation (Andrade, 2023)."
  },
  {
    id: 180, topic: "Systemic Conditions", difficulty: "Medium",
    question: "Which systemic autoimmune disease is characterized by the demyelination of the central nervous system (CNS), leading to unpredictable sensory and motor deficits?",
    options: ["Guillain-Barré Syndrome", "Multiple Sclerosis (MS)", "Rheumatoid Arthritis", "Myasthenia Gravis"],
    correctAnswer: 1,
    hint: "This disease affects the brain and spinal cord, replacing the myelin insulation with hard, sclerotic plaques.",
    rationale: "Multiple Sclerosis is a chronic, unpredictable disease where the immune system attacks the myelin sheath of the CNS, disrupting communication between the brain and the rest of the body (Werner, 2019)."
  },
  {
    id: 181, topic: "Systemic Conditions", difficulty: "Hard",
    question: "A client with Multiple Sclerosis is experiencing an acute, severe flare-up of symptoms. What is the appropriate clinical action?",
    options: ["Perform deep, vigorous massage to stimulate nerve regrowth.", "Apply heat packs to the spine.", "Massage is generally contraindicated during an acute flare-up of MS, as the nervous system is highly unstable and any vigorous input can worsen the relapse.", "Focus solely on Joint Mobilizations."],
    correctAnswer: 2,
    hint: "When the central nervous system is actively under attack, it cannot properly process sensory input, and adding stress will prolong the flare-up.",
    rationale: "During an acute MS relapse, the CNS is actively inflamed. Vigorous massage or heat is contraindicated as it can easily overwhelm the compromised nervous system and exacerbate the demyelinating symptoms (Werner, 2019)."
  },
  {
    id: 182, topic: "Systemic Conditions", difficulty: "Easy",
    question: "Human Immunodeficiency Virus (HIV) specifically targets and destroys which cells of the immune system?",
    options: ["Red blood cells.", "CD4+ T-helper cells.", "Platelets.", "Osteoblasts."],
    correctAnswer: 1,
    hint: "These cells act as the \"generals\" of the immune system, directing the response to infections.",
    rationale: "HIV infects and destroys CD4+ T-cells. As the count of these crucial immune coordinators drops, the body becomes vulnerable to opportunistic infections, ultimately leading to AIDS (Norris, 2020)."
  },
  {
    id: 183, topic: "Clinical Fundamentals", difficulty: "Medium",
    question: "When treating a client with HIV/AIDS, what is the most critical consideration for the massage therapist?",
    options: ["You must wear a full hazmat suit.", "Massage is strictly contraindicated for anyone with HIV.", "Strict adherence to universal sanitary precautions, as the client is highly vulnerable to contracting an opportunistic infection from the therapist or the clinic environment.", "You must use extreme deep pressure to stimulate their immune system."],
    correctAnswer: 2,
    hint: "The danger in the treatment room is not you catching the virus; the danger is the client catching a common cold from you that their body cannot fight off.",
    rationale: "The primary concern when treating immunocompromised clients is protecting *them* from environmental pathogens. Therapists must maintain impeccable hygiene and cancel the appointment if the therapist is even mildly ill (Werner, 2019)."
  },
  {
    id: 184, topic: "Systemic Conditions", difficulty: "Medium",
    question: "A client is currently undergoing active radiation therapy for cancer. What is a strict local contraindication for massage?",
    options: ["You cannot massage their feet.", "Any massage, friction, or stretching over the irradiated skin is strictly contraindicated, as the tissue is highly fragile, burned, and prone to tearing or infection.", "You must not talk to the client.", "Massage is an absolute systemic contraindication."],
    correctAnswer: 1,
    hint: "Radiation essentially causes a severe, deep-tissue sunburn that destroys the integrity of the epidermis and underlying fascia.",
    rationale: "Irradiated skin is profoundly compromised, lacking normal elasticity and healing capacity. Mechanical friction or pressure over these \"radiation ports\" is an absolute local contraindication (Werner, 2019)."
  },
  {
    id: 185, topic: "Systemic Conditions", difficulty: "Hard",
    question: "A client with a history of breast cancer presents with severe, unilateral swelling of the entire right arm. What is the likely cause, and what specific modality is indicated?",
    options: ["This is a bicep tear; perform deep frictions.", "This is secondary Lymphedema caused by the surgical removal or radiation of the axillary lymph nodes. Manual Lymph Drainage (MLD) is highly indicated, but deep tissue is contraindicated.", "This is acute compartment syndrome; call 911.", "This is generalized edema; apply hot packs."],
    correctAnswer: 1,
    hint: "When the drainage pipes (nodes) are removed during cancer treatment, the fluid permanently backs up into the limb.",
    rationale: "Secondary lymphedema is a common complication of cancer treatments that damage the lymphatic network. Specialized MLD (by a certified therapist) is required to reroute the fluid. Deep tissue massage will crush the fragile remaining vessels (Andrade, 2023)."
  },
  {
    id: 186, topic: "Systemic Conditions", difficulty: "Medium",
    question: "A client with a lower-limb amputation reports feeling distinct cramping and burning in the foot that was removed. What is this phenomenon called?",
    options: ["Residual Limb Pain", "Phantom Limb Pain", "Referred Pain", "Neuroma"],
    correctAnswer: 1,
    hint: "The brain is still receiving confused sensory signals from the severed nerve endings and projecting them onto a \"ghost\" map of the missing limb.",
    rationale: "Phantom Limb Pain is a complex neuropathic phenomenon where the brain continues to perceive painful sensations originating from the amputated portion of the limb (Werner, 2019)."
  },
  {
    id: 187, topic: "Clinical Interventions", difficulty: "Medium",
    question: "For a client with an above-knee amputation, what is a primary goal of massage and remedial exercise for the residual limb?",
    options: ["To aggressively friction the surgical scar before it heals.", "To completely immobilize the hip joint.", "To prevent hip flexion and abduction contractures, which would make wearing a prosthetic impossible.", "To stretch the sciatic nerve."],
    correctAnswer: 2,
    hint: "Without the weight of the lower leg to anchor the hip, the strong hip flexors tend to pull the stump permanently upward and outward.",
    rationale: "Because the biomechanical balance of the limb is altered, amputees are highly prone to severe contractures. Preventing hip flexion contractures through stretching and positioning is vital for future prosthetic fitting (Andrade, 2023)."
  },
  {
    id: 188, topic: "Digestive System", difficulty: "Medium",
    question: "A client with chronic constipation has a palpable, firm mass in the lower left quadrant of their abdomen. What is the most likely cause?",
    options: ["An abdominal aortic aneurysm.", "Fecal impaction in the descending/sigmoid colon.", "An enlarged spleen.", "A hernia."],
    correctAnswer: 1,
    hint: "Think about the final anatomical \"storage\" segment of the large intestine before the rectum.",
    rationale: "The descending and sigmoid colon reside in the lower left quadrant. In cases of severe constipation, accumulated, hardened feces can be palpated here as a firm, tubular mass (Hertling & Kessler, 2006)."
  },
  {
    id: 189, topic: "Metabolic System", difficulty: "Hard",
    question: "You are treating a client with Diabetes Mellitus. Mid-session, they become suddenly pale, sweaty, confused, and their speech slurs. What is happening, and what is your immediate action?",
    options: ["They are having a stroke; begin CPR.", "They are experiencing a Hypoglycemic (low blood sugar) crisis. Stop the massage immediately and provide a fast-acting sugar (e.g., juice, candy) if they are conscious.", "They are having a Hyperglycemic (high blood sugar) crisis; give them insulin.", "They are just too relaxed; let them sleep."],
    correctAnswer: 1,
    hint: "This is a rapid-onset metabolic emergency where the brain is suddenly starved of its primary fuel source.",
    rationale: "Sudden pallor, sweating, tremors, and confusion in a diabetic client strongly indicate acute hypoglycemia. Immediate administration of oral glucose is required to prevent a diabetic coma (Norris, 2020)."
  },
  {
    id: 190, topic: "Digestive System", difficulty: "Medium",
    question: "When differentiating between Inflammatory Bowel Disease (IBD) and Irritable Bowel Syndrome (IBS), which of the following symptoms is a major \"red flag\" exclusive to IBD?",
    options: ["Abdominal bloating.", "Constipation alternating with diarrhea.", "Blood in the stool (hematochezia) and unexplained weight loss.", "Stress-induced cramping."],
    correctAnswer: 2,
    hint: "IBS is a functional motility issue. IBD involves physical ulceration and destruction of the tissue.",
    rationale: "Blood in the stool and systemic symptoms like weight loss indicate structural tissue damage and ulceration, the hallmarks of IBD (Crohn's/Colitis). These are red flags that require medical management, never found in simple IBS (Werner, 2019)."
  },
  {
    id: 191, topic: "Infant Massage", difficulty: "Easy",
    question: "What is the recommended duration for an infant massage session?",
    options: ["60 minutes.", "Until the baby falls asleep.", "10 to 15 minutes, or whatever the infant's tolerance allows.", "90 minutes."],
    correctAnswer: 2,
    hint: "An infant's nervous system cannot process prolonged sensory input without becoming overwhelmed.",
    rationale: "Infants have a very low threshold for sensory fatigue. Sessions should be kept brief (10-15 minutes) and must be terminated immediately if the baby shows signs of distress (Andrade, 2023)."
  },
  {
    id: 192, topic: "Peripheral Nervous System", difficulty: "Hard",
    question: "A client with TOS presents with venous congestion, deep aching pain in the arm, and a visibly swollen, cyanotic hand. Which specific \"chokepoint\" is most likely compressing the subclavian VEIN?",
    options: ["Between the anterior and middle scalenes.", "The Costoclavicular space (between the clavicle and first rib).", "The Carpal Tunnel.", "The Guyon's Canal."],
    correctAnswer: 1,
    hint: "Look at the anatomy: The subclavian artery passes *between* the scalenes, but the subclavian vein passes *in front* of the anterior scalene. Therefore, it can only be pinched where the bones close down.",
    rationale: "The subclavian vein passes anterior to the anterior scalene. Therefore, it cannot be compressed in the scalene triangle. Venous TOS is almost exclusively caused by compression in the costoclavicular space (Magee, 2021)."
  },
  {
    id: 193, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "A client with Carpal Tunnel Syndrome has severe hypertonicity in their forearm flexors. According to double crush theory, which proximal muscle group must also be thoroughly assessed and treated?",
    options: ["The lumbar erectors.", "The anterior neck (scalenes) and chest (pectorals) to rule out Thoracic Outlet Syndrome.", "The hamstrings.", "The gastrocnemius."],
    correctAnswer: 1,
    hint: "If the hose is kinked at the nozzle (the wrist), you must check the spigot (the neck) to ensure full flow.",
    rationale: "The brachial plexus originates in the neck and supplies the median nerve. Proximal hypertonicity in the scalenes or pectorals (TOS) can predispose the distal nerve to entrapment at the carpal tunnel, necessitating a comprehensive upper-quarter approach (Hertling & Kessler, 2006)."
  },
  {
    id: 194, topic: "Peripheral Nervous System", difficulty: "Easy",
    question: "Piriformis Syndrome is often aggravated by which common daily activity?",
    options: ["Swimming.", "Sleeping supine.", "Sitting for prolonged periods, especially on a thick wallet.", "Standing on one leg."],
    correctAnswer: 2,
    hint: "This activity physically crushes the gluteal muscles and the underlying nerve against a hard surface.",
    rationale: "Prolonged sitting directly compresses the sciatic nerve against the hypertonic piriformis muscle and the ischial tuberosity, classically exacerbating the radicular symptoms of Piriformis Syndrome (Werner, 2019)."
  },
  {
    id: 195, topic: "Nerve Lesions", difficulty: "Medium",
    question: "What is the physiological reason that heat applications are strictly contraindicated over a limb with a severe peripheral nerve lesion (e.g., a severed radial nerve)?",
    options: ["Heat will cause the nerve to grow too fast.", "Heat will melt the myelin.", "The limb has lost sensory function (anesthesia) and autonomic vasomotor control; the client cannot feel if the pack is burning them, and the blood vessels cannot dilate to dissipate the heat.", "Heat causes muscle spasms."],
    correctAnswer: 2,
    hint: "If the alarm system is disconnected, the house will burn down without anyone knowing.",
    rationale: "A nerve lesion abolishes protective thermal sensation and vasomotor reflexes. Applying heat carries an extreme risk of causing severe, unnoticed tissue burns, making it an absolute local contraindication (Andrade, 2023)."
  },
  {
    id: 196, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "When assessing for Piriformis Syndrome, the therapist performs the FAIR test. What does the acronym FAIR stand for?",
    options: ["Flexion, Abduction, Internal Rotation.", "Flexion, Adduction, Internal Rotation.", "Forceful Articular Isometric Resistance.", "Fascial Adhesion Interruption Release."],
    correctAnswer: 1,
    hint: "This motion pulls the knee across the midline of the body, maximizing the stretch on the gluteal region.",
    rationale: "The FAIR test involves passive Flexion, Adduction, and Internal Rotation of the hip. This powerfully stretches the piriformis muscle across the sciatic nerve, reproducing radicular pain if the syndrome is present (Magee, 2021)."
  },
  {
    id: 197, topic: "Peripheral Nervous System", difficulty: "Medium",
    question: "A client recovering from Bell's Palsy is beginning to regain facial movement. Which remedial exercise is most appropriate?",
    options: ["Chewing tough foods like steak.", "Isotonic resistance training for the jaw.", "Active facial expressions in front of a mirror (e.g., smiling, frowning, puckering lips) to retrain neuromuscular control.", "Aggressive neck stretches."],
    correctAnswer: 2,
    hint: "The brain needs visual feedback to relearn how to fire the delicate muscles of expression symmetrically.",
    rationale: "Mirror feedback exercises are the gold standard for Bell's Palsy rehabilitation. Watching themselves perform specific facial expressions helps the client rebuild the neuro-motor pathways and regain symmetrical muscle control (Andrade, 2023)."
  },
  {
    id: 198, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "During an assessment, a client demonstrates a positive Tinel's Sign at the cubital tunnel. Which nerve is entrapped, and where is the pain felt?",
    options: ["The Median Nerve; pain in the thumb.", "The Radial Nerve; pain in the back of the hand.", "The Ulnar Nerve; pain radiating down the medial forearm into the pinky and ring fingers.", "The Sciatic Nerve; pain in the foot."],
    correctAnswer: 2,
    hint: "The cubital tunnel is the anatomical groove for the \"funny bone\" nerve behind the medial epicondyle.",
    rationale: "Tinel's Sign at the cubital tunnel tests the Ulnar Nerve. Tapping the nerve here reproduces tingling along its distribution path: the medial forearm and the 4th and 5th digits (Magee, 2021)."
  },
  {
    id: 199, topic: "OP Protocols: Severe Peripheral Lesions", difficulty: "Hard",
    question: "STEM: During your Oral Practical, you assess a client with a recent laceration to their anterior wrist. They cannot flex their index or middle fingers and have severe atrophy of the thenar eminence. The examiner asks: \"What is the diagnosis, and what technique is locally contraindicated?\"",
    options: ["Diagnosis: Ulnar Nerve Lesion. CI: Deep friction.", "Diagnosis: Carpal Tunnel Syndrome. CI: Joint mobilizations.", "Diagnosis: Median Nerve Lesion (severed). CI: Passive stretching of the flexor compartment, as it will mechanically tear the regenerating nerve ends.", "Diagnosis: Radial Nerve Lesion. CI: Heat."],
    correctAnswer: 2,
    hint: "The loss of the \"pincher\" fingers and thumb pad clearly implicates the nerve running through the carpal tunnel, but the laceration means the \"wire\" has been cut.",
    rationale: "A laceration causing thenar atrophy and loss of digit 2/3 flexion is a severe Median Nerve lesion. Stretching the affected tissues is strictly contraindicated because mechanical tension will pull the fragile, regenerating nerve stumps apart (Andrade, 2023)."
  },
  {
    id: 200, topic: "OP Protocols: Nerve Impingement differentiation", difficulty: "Hard",
    question: "STEM: During an Oral Practical, a client complains of numbness in their thumb and index finger. Phalen's test at the wrist is negative. However, when you resist their active forearm pronation, the numbness in their hand is violently reproduced. What is your clinical differentiation?",
    options: ["They have Thoracic Outlet Syndrome at the scalenes.", "They have Carpal Tunnel Syndrome, and Phalen's test was just a false negative.", "They have Pronator Teres Syndrome. The median nerve is being entrapped proximally in the forearm, not at the wrist.", "They have a C5 radiculopathy."],
    correctAnswer: 2,
    hint: "The nerve is being crushed by the specific muscle that is currently firing against your resistance.",
    rationale: "If resisting the pronator teres muscle reproduces median nerve symptoms, but wrist tests are negative, the entrapment is proximal. This is Pronator Teres Syndrome, requiring myofascial release of the anterior forearm rather than treating the carpal tunnel (Magee, 2021)."
  }
];
