/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 3 - Action 2: Batch 2 (Questions 51 - 100)
 * Curriculum: Quiz 2 Completion (Extremities, Head/Neck, Pregnancy) & Oral Practical Protocols
 * Difficulty Distribution: 25 Easy, 15 Medium, 10 Hard
 */

const batch2Questions = [
  // ==========================================
  // EASY: Foundational Definitions & Protocols
  // ==========================================
  {
    id: 51,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "Which condition is characterized by micro-tearing and inflammation of the thick connective tissue on the plantar surface of the foot, often causing sharp heel pain with the first steps in the morning?",
    options: ["Tarsal Tunnel Syndrome", "Plantar Fasciitis", "Achilles Tendinopathy", "Pes Cavus"],
    correctAnswer: 1,
    rationale: "Plantar Fasciitis involves inflammation and micro-tearing of the plantar fascia, classically presenting with severe, sharp pain during the first weight-bearing steps of the day (Werner, 2019)."
  },
  {
    id: 52,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "Iliotibial (IT) Band Friction Syndrome commonly causes pain at the lateral knee. Where does the IT band distally insert?",
    options: ["The medial condyle of the tibia", "The head of the fibula", "Gerdy's tubercle on the anterolateral tibia", "The lateral epicondyle of the femur"],
    correctAnswer: 2,
    rationale: "The IT band descends along the lateral thigh and inserts onto Gerdy's tubercle of the lateral tibial condyle. Friction typically occurs as the band snaps over the lateral femoral epicondyle during knee flexion (Magee, 2021)."
  },
  {
    id: 53,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "In Patellofemoral Syndrome (PFS), anterior knee pain is primarily caused by poor tracking of the patella. Which direction does the patella most commonly track incorrectly?",
    options: ["Medially", "Laterally", "Superiorly", "Inferiorly"],
    correctAnswer: 1,
    rationale: "The patella most frequently tracks laterally due to a hypertonic vastus lateralis and a weak, overstretched vastus medialis oblique (VMO) (Hertling & Kessler, 2006)."
  },
  {
    id: 54,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "Acute Compartment Syndrome is a severe condition characterized by:",
    options: ["A slow, chronic tightening of the Achilles tendon.", "Micro-tearing of the tibialis anterior muscle off the tibia.", "A rapid increase in pressure within a fascial compartment compressing nerves and blood vessels.", "Varicose veins pooling in the deep calf."],
    correctAnswer: 2,
    rationale: "Acute compartment syndrome involves rapid bleeding and edema within a closed fascial compartment (often the lower leg). This increased pressure causes ischemia and nerve damage, constituting an absolute medical emergency (Norris, 2020)."
  },
  {
    id: 55,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "Pes Planus is the clinical term for which structural foot deformity?",
    options: ["High medial longitudinal arch (High arches)", "Dropped medial longitudinal arch (Flat feet)", "Hyperextension of the MTP joints", "Fusion of the tarsal bones"],
    correctAnswer: 1,
    rationale: "Pes planus, commonly known as 'flat feet,' is the collapse or dropping of the medial longitudinal arch, which alters the biomechanics of the entire lower kinetic chain (Magee, 2021)."
  },
  {
    id: 56,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "Which muscle is primarily responsible for the characteristic presentation of acute Torticollis?",
    options: ["Levator Scapulae", "Sternocleidomastoid (SCM)", "Upper Trapezius", "Splenius Capitis"],
    correctAnswer: 1,
    rationale: "Acute acquired torticollis is primarily caused by a unilateral spasm of the SCM, which pulls the head into lateral flexion toward the affected side and rotation away from the affected side (Werner, 2019)."
  },
  {
    id: 57,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "Frozen Shoulder (Adhesive Capsulitis) typically progresses through three distinct stages. Which is the correct chronological order?",
    options: ["Frozen, Freezing, Thawing", "Freezing, Frozen, Thawing", "Thawing, Freezing, Frozen", "Inflammatory, Proliferative, Remodeling"],
    correctAnswer: 1,
    rationale: "The clinical progression of Adhesive Capsulitis is 1. Freezing (acute pain, progressive stiffness), 2. Frozen (less pain, severe stiffness), and 3. Thawing (gradual return of ROM) (Magee, 2021)."
  },
  {
    id: 58,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "During an assessment of Temporomandibular Joint (TMJ) dysfunction, which muscle should be treated to address excessive elevation (clenching) of the mandible?",
    options: ["Lateral Pterygoid", "Digastric", "Masseter", "Platysma"],
    correctAnswer: 2,
    rationale: "The Masseter, along with the Temporalis and Medial Pterygoid, is a primary elevator of the mandible. Hypertonicity in these muscles contributes heavily to TMJ clenching and bruxism (Hertling & Kessler, 2006)."
  },
  {
    id: 59,
    topic: "Special Populations (Pregnancy)",
    difficulty: "Easy",
    question: "During pregnancy, the body releases a hormone that increases the laxity of ligaments and joint capsules to prepare the pelvis for birth. What is this hormone?",
    options: ["Cortisol", "Estrogen", "Relaxin", "Progesterone"],
    correctAnswer: 2,
    rationale: "Relaxin is secreted during pregnancy to loosen the pelvic ligaments. This systemic laxity makes pregnant clients more susceptible to joint sprains and overstretching, requiring the therapist to modify stretching and joint mobilizations (Werner, 2019)."
  },
  {
    id: 60,
    topic: "Special Populations (Pregnancy)",
    difficulty: "Easy",
    question: "Deep massage on the medial aspect of the thigh is contraindicated during pregnancy due to the increased risk of:",
    options: ["Sciatica", "Deep Vein Thrombosis (DVT)", "Gestational Diabetes", "Placental abruption"],
    correctAnswer: 1,
    rationale: "Pregnancy creates a hypercoagulable state and increases pressure on pelvic veins, significantly raising the risk of blood clots. Deep work on the medial thigh (femoral/saphenous veins) is contraindicated to avoid dislodging a potential DVT (Werner, 2019)."
  },
  {
    id: 61,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "Which advanced technique protocol specifically targets the musculotendinous junction to reduce muscle tone through a reflex loop?",
    options: ["Muscle Approximation", "Golgi Tendon Organ (GTO) Release", "Manual Lymph Drainage (MLD)", "Joint Mobilizations"],
    correctAnswer: 1,
    rationale: "GTO Release involves bowing or applying specific compression to the tendon to stimulate the Golgi tendon organs, which reflexively inhibits (relaxes) the alpha motor neurons firing the muscle belly (Andrade, 2023)."
  },
  {
    id: 62,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "Which proprioceptor is the specific target of the 'Muscle Approximation' technique used during acute muscle spasms?",
    options: ["Ruffini endings", "Pacinian corpuscles", "Golgi tendon organs", "Muscle spindles"],
    correctAnswer: 3,
    rationale: "Muscle approximation physically pushes the attachments of a spasming muscle together. This slackens the intrafusal fibers of the muscle spindles, decreasing their firing rate and reducing the spasm (Willis College OP Protocol)."
  },
  {
    id: 63,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "When applying the Origin and Insertion (O&I) technique to a muscle that is 'too painful to touch', where must the therapist apply pressure?",
    options: ["The exact center of the muscle belly.", "Directly over the trigger point.", "Only on the tendinous attachments (the origin and insertion).", "On the antagonist muscle."],
    correctAnswer: 2,
    rationale: "O&I is an indirect technique. By treating the tendinous attachments, the therapist can safely induce a reflexive relaxation in the affected muscle belly without causing pain at the acute injury site (Willis College OP Protocol)."
  },
  {
    id: 64,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "In Myofascial Release (MFR), what term describes the palpable, viscoelastic lengthening of the fascial tissue under sustained tension?",
    options: ["Thixotropy", "The 'Creep' Phenomenon", "Ischemia", "Reactive Hyperemia"],
    correctAnswer: 1,
    rationale: "The 'Creep' phenomenon refers to the slow, continuous deformation and lengthening of connective tissue when subjected to a constant, sustained tensional force during MFR (Andrade, 2023)."
  },
  {
    id: 65,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "According to strict Willis College MLD protocols, what is the required first step before moving fluid out of an edematous limb?",
    options: ["Apply heat to the limb.", "Pump the lymphatic terminus (venous angles).", "Perform deep effleurage on the affected area.", "Stretch the affected joints."],
    correctAnswer: 1,
    rationale: "Manual Lymph Drainage must always begin by 'clearing the drains.' Pumping the lymphatic terminus at the base of the neck ensures the central lymphatic system can accept the incoming fluid mobilized from the periphery (Willis College OP Protocol)."
  },
  {
    id: 66,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "What differentiates PNF and PIR (Post-Isometric Relaxation) from passive massage modalities?",
    options: ["They do not require informed consent.", "They only use mechanical tools.", "They require the patient's active participation through controlled muscular contractions.", "They are only performed in a hydrotherapy bath."],
    correctAnswer: 2,
    rationale: "PNF and PIR are active tissue manipulation strategies requiring the client to actively contract specific muscles against the therapist's resistance to utilize neurophysiological reflexes (reciprocal inhibition/post-isometric relaxation) (Andrade, 2023)."
  },
  {
    id: 67,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "What is the primary goal of applying Grade 1 and 2 Joint Mobilizations?",
    options: ["To forcefully break joint adhesions.", "To realign a dislocated joint.", "To increase joint play, provide pain relief, and maintain capsular nutrition.", "To stretch a torn ligament."],
    correctAnswer: 2,
    rationale: "Low-grade (1 and 2) joint mobilizations utilize small amplitude accessory motions to stimulate mechanoreceptors (reducing pain via the pain-gate theory) and circulate synovial fluid, without stretching the capsule (Magee, 2021)."
  },
  {
    id: 68,
    topic: "Oral Practical Protocols",
    difficulty: "Easy",
    question: "When performing an orthopedic assessment, what does Active Range of Motion (AROM) primarily test?",
    options: ["The strength of the joint capsule.", "The client's willingness to move and the integrity of contractile tissues.", "The presence of a deep vein thrombosis.", "The integrity of the lymphatic system."],
    correctAnswer: 1,
    rationale: "AROM requires the client to voluntarily fire their muscles. It tests their willingness to move, coordination, and the ability of the contractile units (muscles/tendons) to generate force (Magee, 2021)."
  },
  {
    id: 69,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "The mechanism of injury for Whiplash (WAD) is most accurately described as:",
    options: ["A slow, repetitive strain over years.", "A forceful acceleration-deceleration transfer of energy to the neck.", "A bacterial infection of the cervical meninges.", "A congenital fusion of the cervical vertebrae."],
    correctAnswer: 1,
    rationale: "Whiplash Associated Disorders (WAD) result from sudden acceleration-deceleration forces (commonly MVAs) that cause rapid extreme extension and flexion, damaging soft tissues in the cervical spine (Magee, 2021)."
  },
  {
    id: 70,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "Which specific orthopedic test is used to assess for nerve root compression in the cervical spine?",
    options: ["Adam's Forward Bend Test", "Spurling's Test (Cervical Compression)", "Ober's Test", "Thompson's Test"],
    correctAnswer: 1,
    rationale: "Spurling's test involves lateral flexion, extension, and axial compression of the cervical spine. Radicular pain radiating down the arm is a positive sign for nerve root compression or facet dysfunction (Magee, 2021)."
  },
  {
    id: 71,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "A positive Ober's Test strongly indicates contracture or tightness of which structure?",
    options: ["Plantar Fascia", "Iliotibial (IT) Band and Tensor Fascia Latae (TFL)", "Anterior Cruciate Ligament (ACL)", "Medial Meniscus"],
    correctAnswer: 1,
    rationale: "Ober's Test evaluates the flexibility of the TFL and IT band. If the upper leg fails to drop below horizontal when the hip is extended and abducted, the test is positive for IT band contracture (Magee, 2021)."
  },
  {
    id: 72,
    topic: "Lower Extremity",
    difficulty: "Easy",
    question: "A client presents with 'shin splints' characterized by pain along the medial border of the tibia. This condition is clinically referred to as:",
    options: ["Compartment Syndrome", "Periostitis (Medial Tibial Stress Syndrome)", "Pes Cavus", "Deep Vein Thrombosis"],
    correctAnswer: 1,
    rationale: "Periostitis (commonly called shin splints) is an inflammation of the periosteum of the tibia, usually caused by the repetitive traction of the soleus or tibialis posterior during running (Hertling & Kessler, 2006)."
  },
  {
    id: 73,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "What is the classic capsular pattern of restriction found in a true Frozen Shoulder (Adhesive Capsulitis)?",
    options: ["Flexion is most limited, followed by internal rotation.", "External rotation is most limited, followed by abduction, then internal rotation.", "Adduction is most limited, followed by extension.", "All ranges are completely unaffected."],
    correctAnswer: 1,
    rationale: "The glenohumeral capsular pattern is a proportional restriction of movement: External Rotation is the most severely limited, followed by Abduction, and finally Internal Rotation (Magee, 2021)."
  },
  {
    id: 74,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Easy",
    question: "What is the purpose of the Vertebral Artery Test during a cervical assessment?",
    options: ["To test the strength of the scalenes.", "To rule out compromised blood flow to the brain before applying cervical extension and rotation.", "To diagnose torticollis.", "To assess lymphatic drainage in the neck."],
    correctAnswer: 1,
    rationale: "The Vertebral Artery Test (VAT) checks for vertebrobasilar insufficiency. It is a mandatory safety screen before performing aggressive neck treatments or mobilizations, especially post-whiplash (Magee, 2021)."
  },
  {
    id: 75,
    topic: "Special Populations (Pregnancy)",
    difficulty: "Easy",
    question: "What is Supine Hypotensive Syndrome in a pregnant client?",
    options: ["High blood pressure caused by stress.", "Dizziness, nausea, and reduced placental blood flow caused by the weight of the fetus compressing the inferior vena cava when lying supine.", "Swelling of the ankles due to standing.", "A drop in blood sugar."],
    correctAnswer: 1,
    rationale: "In the 2nd and 3rd trimesters, lying supine causes the heavy uterus to compress the inferior vena cava, severely restricting venous return to the heart and causing hypotension and fainting (Werner, 2019)."
  },

  // ==========================================
  // MEDIUM: Pathophysiology & Clinical Reasoning
  // ==========================================
  {
    id: 76,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "How does a clinician differentiate between IT Band Friction Syndrome and Trochanteric Bursitis during an assessment?",
    options: [
      "IT Band syndrome causes pain at the medial knee; Bursitis causes pain in the groin.",
      "IT Band syndrome typically causes sharp pain at the lateral knee (Gerdy's tubercle) during movement; Trochanteric Bursitis causes deep, aching pain directly over the greater trochanter of the femur.",
      "Trochanteric Bursitis only occurs in men.",
      "There is no clinical difference; they are treated identically."
    ],
    correctAnswer: 1,
    rationale: "While a tight IT band can contribute to both, Friction Syndrome manifests at the lateral epicondyle of the femur/lateral knee. Trochanteric Bursitis presents as local point tenderness and deep ache directly over the greater trochanter of the hip (Hertling & Kessler, 2006)."
  },
  {
    id: 77,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "What is the biomechanical rationale for treating Patellofemoral Syndrome (PFS)?",
    options: [
      "To stretch the vastus medialis and strengthen the vastus lateralis.",
      "To reduce hypertonicity in the vastus lateralis and IT Band, while recommending strengthening exercises for the vastus medialis oblique (VMO) to correct lateral tracking.",
      "To apply deep cross-fiber friction directly to the patellar cartilage.",
      "To fuse the knee joint."
    ],
    correctAnswer: 1,
    rationale: "PFS is primarily caused by an imbalance where the strong lateral structures (Vastus Lateralis/IT Band) overpower the weaker medial structures (VMO), pulling the patella out of the trochlear groove (Magee, 2021)."
  },
  {
    id: 78,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "A client who recently started marathon training complains of tightness and aching in their anterior lower leg that only occurs during their run and subsides an hour after resting. What is the likely diagnosis?",
    options: ["Acute Compartment Syndrome", "Chronic (Exertional) Compartment Syndrome", "A severe Grade 3 strain of the Soleus", "Deep Vein Thrombosis"],
    correctAnswer: 1,
    rationale: "Chronic (Exertional) Compartment Syndrome involves reversible ischemia and pressure buildup within the fascial compartment only during exercise, which dissipates with rest. Unlike Acute Compartment Syndrome, it is not an immediate medical emergency (Werner, 2019)."
  },
  {
    id: 79,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Medium",
    question: "During a TMJ assessment, you ask the client to open their mouth slowly. You observe the jaw deviates to the right, but then returns to the midline before fully opening. This is known as a 'C-Curve' deviation. What does this indicate?",
    options: ["A normal, healthy jaw.", "Capsular pattern of the cervical spine.", "A unilateral restriction or hypertonicity; the jaw deviates toward the side of the restriction (the right side).", "A bilateral dislocation."],
    correctAnswer: 2,
    rationale: "A 'C-Curve' deviation indicates a functional restriction (often a tight masseter/lateral pterygoid or hypomobile joint capsule). The mandible will deviate toward the restricted (hypomobile) side during opening (Magee, 2021)."
  },
  {
    id: 80,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Medium",
    question: "During the 'Freezing' stage of Adhesive Capsulitis, how does the clinical presentation differ from the 'Frozen' stage?",
    options: [
      "The Freezing stage has severe, active inflammation and pain (often worse at night) with progressively worsening ROM. The Frozen stage has less resting pain, but severe, rigid stiffness.",
      "The Freezing stage is painless; the Frozen stage is an emergency.",
      "The Freezing stage only affects abduction; the Frozen stage affects flexion.",
      "There is no difference."
    ],
    correctAnswer: 0,
    rationale: "The acute 'Freezing' stage is highly inflammatory and very painful. As it transitions to the subacute/chronic 'Frozen' stage, the inflammation subsides (less pain), but the fibrotic adhesions solidify, causing profound stiffness (Andrade, 2023)."
  },
  {
    id: 81,
    topic: "Oral Practical Protocols",
    difficulty: "Medium",
    question: "When applying the Cyriax rules of assessment, a client with a suspected Grade 2 muscle strain will most likely present with:",
    options: [
      "Painful AROM, painless PROM in the same direction, and painful/weak RROM.",
      "Painful AROM, painful PROM in the same direction, and painless RROM.",
      "Painless AROM, painless PROM, and painless RROM.",
      "Loss of sensation and reflex integrity."
    ],
    correctAnswer: 0,
    rationale: "Contractile lesions (strains) cause pain when actively contracted (AROM/RROM) and when passively stretched in the opposite direction. Passive movement in the same direction (shortening the muscle) is typically painless (Magee, 2021)."
  },
  {
    id: 82,
    topic: "Oral Practical Protocols",
    difficulty: "Medium",
    question: "What is the primary neurophysiological difference between applying a Golgi Tendon Organ (GTO) release versus Muscle Approximation?",
    options: [
      "GTO targets the muscle belly directly; Approximation targets the joint.",
      "GTO inhibits the muscle by stimulating mechanoreceptors in the tendon to induce a reflex arc; Approximation slackens the muscle spindles within the muscle belly to reduce their firing rate.",
      "GTO requires extreme force; Approximation uses light touch.",
      "They are two terms for the exact same technique."
    ],
    correctAnswer: 1,
    rationale: "GTO release utilizes tension on the tendon to trigger the GTO's autogenic inhibition reflex. Muscle Approximation mechanically shortens the muscle, reducing the stretch on the muscle spindles and decreasing the stretch reflex driving a spasm (Andrade, 2023)."
  },
  {
    id: 83,
    topic: "Musculoskeletal System",
    difficulty: "Medium",
    question: "A client is in the remodeling phase of healing from a severe ligamentous sprain. Why is Deep Transverse Friction (Cross-Fiber Friction) indicated?",
    options: [
      "To completely break down all scar tissue and remove it from the body.",
      "To stimulate a new inflammatory response.",
      "To break unnecessary cross-links and encourage the parallel alignment of newly formed collagen fibers along lines of stress.",
      "To increase lymphatic drainage."
    ],
    correctAnswer: 2,
    rationale: "Deep transverse friction provides a mechanical stimulus that breaks weak, chaotic cross-links in the scar tissue and promotes the functional, parallel alignment of collagen fibers essential for restoring ligament strength (Hertling & Kessler, 2006)."
  },
  {
    id: 84,
    topic: "Head, Neck & Upper Extremity",
    difficulty: "Medium",
    question: "What is the clinical distinction between Congenital Torticollis and Acquired Torticollis?",
    options: [
      "Congenital is caused by sleeping awkwardly; Acquired is caused by a virus.",
      "Congenital is present from birth, often due to birth trauma or positioning causing SCM fibrosis; Acquired develops later in life due to trauma, cold drafts, or compensatory spasms.",
      "Congenital affects the scalenes; Acquired affects the trapezius.",
      "There is no difference in treatment or pathology."
    ],
    correctAnswer: 1,
    rationale: "Congenital torticollis (wryneck) is usually related to intrauterine positioning or SCM trauma during delivery leading to fibrosis. Acquired torticollis is an acute spasm in adults resulting from sudden movements, drafts, or postural strain (Werner, 2019)."
  },
  {
    id: 85,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "A client has an x-ray confirming a 'heel spur' (calcaneal exostosis). However, the therapist determines their pain is primarily caused by Plantar Fasciitis. Why do these two conditions often coexist?",
    options: [
      "The heel spur causes the plantar fascia to tear.",
      "Chronic tension and micro-tearing of the plantar fascia at its attachment site stimulates osteoblastic activity, causing the bone to grow a spur in response to the stress.",
      "They are caused by wearing shoes that are too large.",
      "Plantar fasciitis is an autoimmune reaction to bone spurs."
    ],
    correctAnswer: 1,
    rationale: "A heel spur is an osteophyte that develops as a physiological adaptation (Wolff's Law) to the chronic pulling and inflammation of the plantar fascia on the calcaneus. The spur itself is rarely the source of the sharp pain (Werner, 2019)."
  },
  {
    id: 86,
    topic: "Oral Practical Protocols",
    difficulty: "Medium",
    question: "A client presents with significant edema in their right arm post-trauma. You decide to perform Manual Lymph Drainage (MLD). Which of the following conditions in their health history would be an ABSOLUTE systemic contraindication for MLD?",
    options: ["Mild hypertension", "Chronic Congestive Heart Failure (CCHF)", "Tension headaches", "Irritable Bowel Syndrome (IBS)"],
    correctAnswer: 1,
    rationale: "MLD pushes significant volumes of fluid into the venous return system. In a client with CCHF, the weakened heart cannot handle the increased fluid load (preload), risking acute pulmonary edema. It is strictly contraindicated (Willis College OP Protocol)."
  },
  {
    id: 87,
    topic: "Oral Practical Protocols",
    difficulty: "Medium",
    question: "According to the Convex-Concave rule of joint mobilization: If the moving joint surface is CONVEX, the therapeutic glide should be applied in the:",
    options: [
      "Same direction as the bone movement.",
      "Opposite direction to the bone movement.",
      "A purely rotational direction.",
      "Inferior direction only."
    ],
    correctAnswer: 1,
    rationale: "The Convex-Concave rule dictates that when a convex articular surface moves on a stable concave surface (e.g., the humeral head in the glenoid fossa), the intra-articular glide occurs in the opposite direction of the bone shaft's movement (Magee, 2021)."
  },
  {
    id: 88,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "Biomechanical 'Pronation' of the foot is not a single movement, but a tri-planar complex. What three movements combine to create foot pronation?",
    options: [
      "Plantarflexion, Inversion, and Adduction.",
      "Dorsiflexion, Eversion, and Abduction.",
      "Flexion, Extension, and Rotation.",
      "Supination, Eversion, and Extension."
    ],
    correctAnswer: 1,
    rationale: "Pronation is a compound movement consisting of dorsiflexion, eversion, and forefoot abduction. It is the foot's primary mechanism for shock absorption and adapting to uneven terrain (Hertling & Kessler, 2006)."
  },
  {
    id: 89,
    topic: "Lower Extremity",
    difficulty: "Medium",
    question: "Why is an arch support or orthotic often recommended for clients suffering from severe Pes Planus (Flat Feet) alongside massage therapy?",
    options: [
      "Massage cannot alter the length of ligaments; if the spring ligament has structurally collapsed, orthotics provide the necessary passive mechanical support.",
      "Orthotics cure plantar fasciitis permanently.",
      "To prevent the development of a Colles' fracture.",
      "To increase the speed of nerve conduction."
    ],
    correctAnswer: 0,
    rationale: "While massage can treat the muscular compensations (e.g., tight tibialis posterior), structural pes planus involves the permanent overstretching of the plantar ligaments (like the spring ligament). Ligaments cannot be actively tightened by massage; external mechanical support is required (Magee, 2021)."
  },
  {
    id: 90,
    topic: "Special Populations (Pregnancy)",
    difficulty: "Medium",
    question: "A client in her third trimester requests a massage for severe low back pain. She insists she is comfortable lying prone (face down) because she has a specialized 'pregnancy cushion' with a belly cutout. According to safest practices, what is the best clinical reasoning?",
    options: [
      "Use the cushion; client comfort dictates safety.",
      "Refuse treatment entirely.",
      "Educate the client that side-lying is the safest protocol, as prone positioning—even with a cutout—can place undue stress on the uterine ligaments and lumbar spine in the late stages.",
      "Treat her seated in a regular dining chair."
    ],
    correctAnswer: 2,
    rationale: "In advanced pregnancy, prone positioning is generally avoided even with specialized pillows. Gravity pulling the fetus downward can strain the already lax round ligaments and exacerbate lumbar hyperlordosis. Side-lying with bolsters is the gold standard for safety and hemodynamics (Werner, 2019)."
  },

  // ==========================================
  // HARD: Complex STEMs & OP Clinical Reasoning
  // ==========================================
  {
    id: 91,
    topic: "Case Scenario: Lower Extremity Biomechanics",
    difficulty: "Hard",
    question: "STEM: A cross-country runner presents with dull, aching anterior knee pain. OP Assessment: Positive Clarke's sign (Patellar Grind Test). Palpation reveals a highly fibrotic IT band and Vastus Lateralis. Visual observation shows the patella sitting laterally and superiorly. Based on Outcome-Based Massage (OBM), what is the most clinically sound treatment plan for Patellofemoral Syndrome?",
    options: [
      "Apply deep friction to the patellar tendon to stimulate inflammation, then stretch the Vastus Medialis.",
      "Apply Myofascial Release (MFR) to the Vastus Lateralis and IT Band to reduce lateral tension; use stimulating tapotement on the Vastus Medialis (VMO) to encourage medial tracking.",
      "Apply Muscle Approximation to the gastrocnemius.",
      "Immobilize the knee and refer to surgery."
    ],
    correctAnswer: 1,
    rationale: "PFS is a mechanical tracking error. The OBM goal is to release the tight lateral structures (VL, IT Band) that are pulling the patella off-center, and facilitate/stimulate the weak medial structures (VMO) to restore central tracking in the trochlear groove (Hertling & Kessler, 2006)."
  },
  {
    id: 92,
    topic: "Case Scenario: Pregnancy & Acute Spasm",
    difficulty: "Hard",
    question: "STEM: A client in her 34th week of pregnancy arrives with an acute, painful Acquired Torticollis (head side-bent left, rotated right). She is visibly distressed. How must you adapt your Oral Practical (OP) protocols to safely treat her primary complaint while accommodating her secondary condition?",
    options: [
      "Place her supine, perform a Vertebral Artery Test, and apply Grade 4 joint mobilizations to the cervical spine.",
      "Place her in a left side-lying position (to avoid IVC compression). Since the right SCM is in acute spasm and painful, apply the Origin & Insertion (O&I) technique to the mastoid and clavicular attachments.",
      "Place her prone using a pregnancy pillow and apply deep ischemic compression directly to the SCM belly.",
      "Massage is absolutely contraindicated; refer out."
    ],
    correctAnswer: 1,
    rationale: "This STEM tests positioning and technique selection. 34 weeks pregnant requires side-lying (left side preferred for optimal hemodynamics). Because the torticollis is an acute spasm ('painful to touch'), the Willis OP protocol requires an indirect technique like O&I rather than direct deep pressure (Willis College OP Protocol)."
  },
  {
    id: 93,
    topic: "Case Scenario: Comorbidities (Autoimmune)",
    difficulty: "Hard",
    question: "STEM: A 56-year-old client presents in the 'Thawing' stage of Adhesive Capsulitis (Frozen Shoulder). Her health history notes Systemic Lupus Erythematosus (SLE), which is currently experiencing a mild flare-up causing systemic joint aches and fatigue. What is your clinical action?",
    options: [
      "Perform aggressive Grade 3 joint mobilizations on the shoulder to break the capsule adhesions.",
      "Proceed with full-body deep tissue massage to relieve her lupus joint aches.",
      "Modify the treatment. A Lupus flare-up is a systemic inflammatory state. Aggressive shoulder mobilizations and deep systemic massage are contraindicated. Focus on gentle, supportive work and pain relief within her tolerance.",
      "Apply alternating extreme hot and cold hydrotherapy to shock the immune system."
    ],
    correctAnswer: 2,
    rationale: "Lupus (SLE) is an autoimmune condition. During a flare-up, the body is highly inflamed and fatigued. Aggressive therapies (like capsular stretching for frozen shoulder) will overtax the immune system and exacerbate the flare. Treatment must be palliative and gentle until the flare subsides (Werner, 2019)."
  },
  {
    id: 94,
    topic: "Oral Practical: Sequence & Rationale",
    difficulty: "Hard",
    question: "STEM: Your OP scenario requires you to treat an acute Grade 2 strain of the biceps brachii (2 days old, visible bruising). Your examiner asks you to demonstrate the correct intervention sequence. What is the required protocol?",
    options: [
      "Deep Transverse Friction -> PROM -> Ice.",
      "Pump lymphatic terminus -> MLD strokes proximal to distal on the arm -> Active Resisted Stretching.",
      "Pump lymphatic terminus -> MLD strokes distal to proximal (toward nodes) -> pain-free Passive Range of Motion (PROM).",
      "Muscle Approximation -> Heat -> Cross-fiber friction."
    ],
    correctAnswer: 2,
    rationale: "For an acute injury with edema, MLD is the primary indication. The strict protocol is: 1. Clear the terminus (neck). 2. MLD strokes moving fluid proximally (toward the axillary nodes). 3. Finish with pain-free PROM to maintain joint mobility and assist the lymphatic pump (Willis College OP Protocol)."
  },
  {
    id: 95,
    topic: "Differential Diagnosis: Foot Pain",
    difficulty: "Hard",
    question: "A client reports severe foot pain. How do you clinically differentiate between Plantar Fasciitis and Tarsal Tunnel Syndrome?",
    options: [
      "Plantar fasciitis pain is worst at the end of the day; Tarsal tunnel pain is worst in the morning.",
      "Plantar fasciitis is a mechanical inflammation causing sharp pain at the medial calcaneal tubercle upon weight-bearing. Tarsal Tunnel is a neurological entrapment (tibial nerve) causing burning, tingling, or numbness radiating into the sole of the foot.",
      "Plantar fasciitis only affects the toes; Tarsal tunnel only affects the heel.",
      "There is no clinical way to differentiate them without an MRI."
    ],
    correctAnswer: 1,
    rationale: "Differentiation relies on tissue type. Plantar fasciitis is an inert connective tissue pathology (mechanical pain, worse with first steps). Tarsal Tunnel is a peripheral nerve entrapment beneath the flexor retinaculum, presenting with classic neurological signs like burning, tingling (paresthesia), and numbness (Magee, 2021)."
  },
  {
    id: 96,
    topic: "Case Scenario: Postural & Digestive",
    difficulty: "Hard",
    question: "STEM: A client presents with severe Hyperlordosis and anterior pelvic tilt. Their health history indicates chronic Constipation. During your assessment, you note profound hypertonicity in the Psoas major. How does the biomechanics of the Psoas relate to both their primary and secondary complaints?",
    options: [
      "The Psoas pulls the ribcage down, causing asthma.",
      "A contractured Psoas creates an anterior pelvic tilt (exacerbating hyperlordosis) and physically limits the abdominal space, potentially increasing intra-abdominal pressure and restricting normal bowel peristalsis.",
      "The Psoas directly innervates the colon.",
      "There is no connection between lumbar posture and digestion."
    ],
    correctAnswer: 1,
    rationale: "The Psoas major originates on the lumbar vertebrae and inserts on the lesser trochanter. Hypertonicity causes anterior pelvic tilt (hyperlordosis). Because the Psoas lies directly posterior to the abdominal viscera, chronic tension can structurally restrict visceral mobility and contribute to sluggish digestion (constipation) (Andrade, 2023)."
  },
  {
    id: 97,
    topic: "Oral Practical: Advanced Integration",
    difficulty: "Hard",
    question: "Your client has a chronic IT Band contracture. According to OP standards, you apply Myofascial Release (MFR). The examiner asks: 'Once you achieve the initial fascial creep, how can you integrate an active technique (PNF) to further elongate the tissue?'",
    options: [
      "Have the client actively contract their TFL/Glute Max against your resistance (isometric), then relax, and you passively take the fascia to a new barrier.",
      "Apply deep friction with a tool.",
      "Perform MLD immediately.",
      "Instruct the client to hold their breath."
    ],
    correctAnswer: 0,
    rationale: "Integrating PNF (specifically Post-Isometric Relaxation/Hold-Relax) with MFR involves taking the tissue to its barrier, having the client perform a 20% isometric contraction of the target muscle (TFL/Glutes) against resistance, relaxing, and then taking the fascial traction to the newly achieved length barrier (Andrade, 2023)."
  },
  {
    id: 98,
    topic: "Differential Diagnosis: TMJ & Cervical",
    difficulty: "Hard",
    question: "A client reports right-sided jaw pain that refers into their teeth, but also complains of chronic neck stiffness. How can you determine if the jaw pain is a primary TMJ issue or referred pain from a cervical trigger point?",
    options: [
      "Extract a tooth to see if the pain stops.",
      "Assess cervical AROM. If neck movements reproduce the jaw/tooth pain, it is likely a cervical referral (e.g., upper trapezius or SCM trigger point). If biting or jaw opening reproduces the pain, it is a primary TMJ issue.",
      "Perform an Adam's forward bend test.",
      "Apply heat to both areas simultaneously."
    ],
    correctAnswer: 1,
    rationale: "Trigger points in the cervical musculature (like the SCM) commonly refer pain to the jaw and face. Differentiating requires testing the tissues: reproducing the pain via cervical movement implicates the neck, while reproducing the pain via mastication implicates the TMJ (Magee, 2021)."
  },
  {
    id: 99,
    topic: "Case Scenario: Foot Deformity Mechanics",
    difficulty: "Hard",
    question: "STEM: A client with bilateral Pes Cavus (high rigid arches) is training for a marathon and develops IT Band Friction Syndrome. What is the biomechanical link between their foot structure and their knee pathology?",
    options: [
      "Pes Cavus causes the foot to over-pronate, stretching the medial knee.",
      "Pes Cavus creates a highly rigid foot that lacks normal pronation (shock absorption). The unabsorbed ground reaction forces are transmitted directly up the kinetic chain to the lateral knee, overloading the IT band.",
      "The high arches compress the tibial nerve.",
      "Pes Cavus causes the femur to rotate internally."
    ],
    correctAnswer: 1,
    rationale: "A 'Cavus' foot is locked and rigid. It fails to pronate adequately during the stance phase of running, meaning it cannot absorb shock. This kinetic energy travels up the leg, frequently manifesting as overuse injuries at the lateral knee (IT Band) or hip (Hertling & Kessler, 2006)."
  },
  {
    id: 100,
    topic: "Oral Practical: Absolute Contraindication",
    difficulty: "Hard",
    question: "During an OP, you are presented with a client who suffered a severe contusion to their thigh 3 weeks ago. You palpate a hard, distinct, bone-like mass in the vastus lateralis. The examiner asks: 'What is your clinical impression, and what technique is indicated?' What is the correct response?",
    options: [
      "Impression: Scar tissue. Indication: Deep transverse friction.",
      "Impression: Myositis Ossificans. Indication: Absolute local contraindication for deep massage, friction, or aggressive stretching, as it will exacerbate the abnormal bone growth.",
      "Impression: Lipoma. Indication: Myofascial release.",
      "Impression: Muscle spasm. Indication: Muscle approximation."
    ],
    correctAnswer: 1,
    rationale: "A hard mass developing in a muscle belly weeks after a severe blunt trauma is the classic presentation of Myositis Ossificans (calcification within the muscle). Massage, friction, and passive stretching are strictly contraindicated as they will provoke further bone deposition (Magee, 2021)."
  }
];

export default batch2Questions;
