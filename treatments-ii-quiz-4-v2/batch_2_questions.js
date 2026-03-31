/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 2: Batch 2 (Questions 51 - 100)
 * Curriculum: Extremities, Head/Neck, Pregnancy & OP Protocols
 * Features: v2.0 Hint Integration & APA Citations
 */

window.batch2Questions = [
  {
    id: 51, topic: "Lower Extremity", difficulty: "Easy",
    question: "Which condition is characterized by micro-tearing and inflammation of the thick connective tissue on the plantar surface of the foot, often causing sharp heel pain with the first steps in the morning?",
    options: ["Tarsal Tunnel Syndrome", "Plantar Fasciitis", "Achilles Tendinopathy", "Pes Cavus"],
    correctAnswer: 1,
    hint: "Think about the broad aponeurosis that supports the longitudinal arch and tightens overnight.",
    rationale: "Plantar Fasciitis involves inflammation and micro-tearing of the plantar fascia, classically presenting with severe, sharp pain during the first weight-bearing steps of the day (Werner, 2019)."
  },
  {
    id: 52, topic: "Lower Extremity", difficulty: "Medium",
    question: "Iliotibial (IT) Band Friction Syndrome commonly causes pain at the lateral knee. Where does the IT band distally insert?",
    options: ["The medial condyle of the tibia", "The head of the fibula", "Gerdy's tubercle on the lateral condyle of the tibia", "The lateral epicondyle of the femur"],
    correctAnswer: 2,
    hint: "The IT band crosses the knee joint laterally to attach to a specific prominence on the proximal tibia.",
    rationale: "The IT band inserts into Gerdy's tubercle on the anterolateral aspect of the proximal tibia, crossing the lateral femoral epicondyle where friction commonly occurs (Magee, 2021)."
  },
  {
    id: 53, topic: "Lower Extremity", difficulty: "Hard",
    question: "During an assessment, a client exhibits a positive Thomas Test (the straight leg raises off the table) and a positive Ely's Test (spontaneous hip flexion upon passive knee flexion). Which specific structures are adaptively shortened?",
    options: ["Gluteus maximus and hamstrings", "Iliopsoas and rectus femoris", "Piriformis and tensor fasciae latae", "Vastus medialis and sartorius"],
    correctAnswer: 1,
    hint: "The Thomas test isolates a deep single-joint hip flexor, while Ely's test isolates a two-joint quadriceps muscle.",
    rationale: "A positive Thomas test indicates iliopsoas shortening, while a positive Ely's test indicates shortening of the rectus femoris, which crosses both the hip and knee (Magee, 2021)."
  },
  {
    id: 54, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To accurately assess the integrity of the Anterior Cruciate Ligament (ACL), which special test is considered the 'Gold Standard' as it minimizes hamstring guarding by testing at 30 degrees of flexion?",
    options: ["Anterior Drawer Test", "McMurray's Test", "Lachman Test", "Apley's Scratch Test"],
    correctAnswer: 2,
    hint: "This test isolates anterior tibial translation without putting the knee in the full 90-degree flexion required by the traditional drawer test.",
    rationale: "The Lachman Test is the most sensitive and reliable clinical test for ACL integrity because testing at 30 degrees of flexion prevents the hamstrings from stabilizing the tibia and masking the tear (Magee, 2021)."
  },
  {
    id: 55, topic: "Pregnancy Modifications", difficulty: "Easy",
    question: "A client in her third trimester of pregnancy presents with bilateral lower extremity edema. Which treatment modification is strictly required?",
    options: ["Apply deep, aggressive effleurage to flush the fluid.", "Position the client side-lying or semi-Fowler to prevent vena cava compression.", "Use hot hydrotherapy on the legs to vasodilate the vessels.", "Perform Grade 4 Joint Mobilizations on the ankles."],
    correctAnswer: 1,
    hint: "Consider the mechanical weight of the fetus on the mother's primary venous return vessels.",
    rationale: "Supine positioning in late pregnancy compresses the inferior vena cava. Side-lying or semi-Fowler positioning is mandatory to maintain cardiac output and maternal safety (Werner, 2019)."
  },
  {
    id: 56, topic: "Head and Neck", difficulty: "Medium",
    question: "A client with an acute whiplash injury complains of dizziness, nausea, and nystagmus when looking up. Which critical safety test must be performed before any cervical treatment?",
    options: ["Vertebral Artery Test (VAT)", "Tinel's Sign", "Kernig's Test", "Spurling's Test"],
    correctAnswer: 0,
    hint: "These symptoms suggest a restriction of blood flow to the hindbrain.",
    rationale: "Dizziness, nausea, and nystagmus (the '5 Ds and 3 Ns') are red flags for vertebrobasilar insufficiency. The Vertebral Artery Test (VAT) is mandatory to rule out vascular compromise before proceeding (Magee, 2021)."
  },
  {
    id: 57, topic: "Head and Neck", difficulty: "Hard",
    question: "In a case of true congenital torticollis (Wryneck) in an infant, what is the primary pathophysiological driver of the condition?",
    options: ["A viral infection of the cervical nerves.", "Degenerative disc disease of the cervical spine.", "Fibrosis and shortening of the sternocleidomastoid (SCM) muscle due to birth trauma or intrauterine positioning.", "An acute ligamentous sprain of the alar ligament."],
    correctAnswer: 2,
    hint: "Congenital means present at birth, often resulting from mechanical stress or ischemia within the womb.",
    rationale: "Congenital torticollis is typically caused by ischemia, birth trauma, or restricted intrauterine positioning leading to fibrous contracture of the SCM muscle (Hertling & Kessler, 2006)."
  },
  {
    id: 58, topic: "Upper Extremity", difficulty: "Medium",
    question: "A client presents with 'Frozen Shoulder' (Adhesive Capsulitis) in the acute 'freezing' stage. What is the most appropriate clinical intervention?",
    options: ["Aggressive Grade 4 Joint Mobilizations to break the adhesions.", "Passive stretching well beyond the pain barrier.", "Pain-free active range of motion, pendulum exercises, and treating compensatory structures.", "Deep transverse frictions to the subscapularis tendon."],
    correctAnswer: 2,
    hint: "During the acute inflammatory 'freezing' stage, aggressive mechanical disruption will provoke further inflammation and capsule thickening.",
    rationale: "In the acute freezing stage of adhesive capsulitis, aggressive stretching and high-grade joint play are contraindicated. Treatment must focus on pain management and maintaining available mobility through pendulum exercises (Andrade, 2023)."
  },
  {
    id: 59, topic: "Upper Extremity", difficulty: "Easy",
    question: "Which condition is characterized by compression of the median nerve as it passes under the flexor retinaculum of the wrist?",
    options: ["Cubital Tunnel Syndrome", "Carpal Tunnel Syndrome", "Thoracic Outlet Syndrome", "Guyon's Canal Syndrome"],
    correctAnswer: 1,
    hint: "This syndrome frequently affects office workers and causes numbness in the thumb, index, and middle fingers.",
    rationale: "Carpal Tunnel Syndrome involves the entrapment of the median nerve within the carpal tunnel, leading to paresthesia and weakness in the lateral aspect of the hand (Werner, 2019)."
  },
  {
    id: 60, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "During an assessment for Carpal Tunnel Syndrome, you instruct the client to force the dorsal surfaces of their hands together in maximal wrist flexion for 60 seconds. What is this test called?",
    options: ["Tinel's Sign", "Reverse Phalen's Test", "Phalen's Test", "Finkelstein's Test"],
    correctAnswer: 2,
    hint: "This test relies on mechanically compressing the tunnel to reproduce the neurological symptoms.",
    rationale: "Phalen's Test places the wrists in maximum flexion to deliberately compress the median nerve within the carpal tunnel, reproducing symptoms of numbness and tingling (Magee, 2021)."
  },
  {
    id: 61, topic: "Myofascial Techniques", difficulty: "Easy",
    question: "What is the primary physiological purpose of applying cross-fiber friction to a healing ligament in the late subacute phase?",
    options: ["To induce immediate, systemic parasympathetic relaxation.", "To stimulate the lymphatic system.", "To physically break down restrictive cross-links and promote parallel alignment of the healing collagen.", "To reduce bone density."],
    correctAnswer: 2,
    hint: "Think about Cyriax's principles for modifying how scar tissue forms.",
    rationale: "Deep transverse frictions must be applied perpendicular to the tissue fibers to physically break down restrictive cross-links and promote parallel alignment of the healing collagen matrix (Magee, 2021)."
  },
  {
    id: 62, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When performing Joint Mobilizations, what is the defining characteristic of a Grade 3 oscillation?",
    options: ["A small amplitude movement at the beginning of the range.", "A large amplitude movement performed within the free range of the joint.", "A large amplitude movement performed up to the limit of the range and pushed into the tissue resistance.", "A high-velocity, low-amplitude thrust past the anatomical barrier."],
    correctAnswer: 2,
    hint: "Unlike Grades 1 and 2 (which are for pain), Grade 3 is designed to physically stretch the joint capsule.",
    rationale: "Grade 3 mobilizations are large-amplitude oscillations that reach the limit of the joint's available range and push into the tissue resistance, specifically designed to increase joint mobility (Hertling & Kessler, 2006)."
  },
  {
    id: 63, topic: "Lower Extremity", difficulty: "Hard",
    question: "A client with suspected meniscal damage undergoes McMurray's Test. The examiner flexes the knee, internally rotates the tibia, and extends the knee while applying a varus stress. A painful 'click' is felt. Which structure is implicated?",
    options: ["The anterior cruciate ligament (ACL)", "The lateral meniscus", "The medial meniscus", "The medial collateral ligament (MCL)"],
    correctAnswer: 1,
    hint: "Internal rotation of the tibia combined with a varus stress specifically pinches the lateral compartment of the knee.",
    rationale: "During McMurray's Test, internal rotation of the tibia combined with varus stress compresses the lateral meniscus. A palpable or audible click indicates a lateral meniscal tear (Magee, 2021)."
  },
  {
    id: 64, topic: "Orthopedic Assessment", difficulty: "Easy",
    question: "When assessing a client with a suspected lateral ankle sprain, you perform a Talar Tilt Test. What specific end feel confirms a completely healthy, intact ligament?",
    options: ["Empty", "Soft", "Firm", "Hard"],
    correctAnswer: 2,
    hint: "A healthy ligament should stretch slightly and then stop abruptly with a leathery resistance.",
    rationale: "A firm end feel (previously known as tissue stretch) is the normal physiological sensation of an intact ligament or joint capsule reaching its maximum elastic limit (Magee, 2021)."
  },
  {
    id: 65, topic: "Advanced Techniques", difficulty: "Medium",
    question: "A client presents with an actively spasming gastrocnemius. You decide to apply the Muscle Approximation technique. How is this performed?",
    options: ["By aggressively stretching the muscle into dorsiflexion.", "By applying heavy tapotement directly to the muscle belly.", "By physically pushing the origin and insertion of the muscle closer together to slacken the muscle spindles.", "By applying ice directly to the spasm."],
    correctAnswer: 2,
    hint: "The goal is to turn off the neurological stretch reflex that is driving the involuntary contraction.",
    rationale: "Muscle Approximation mechanically slackens the muscle fibers by pushing the attachments together, which inhibits the muscle spindle's stretch reflex and safely disarms the spasm (Willis College OP Protocol)."
  },
  {
    id: 66, topic: "Pregnancy Modifications", difficulty: "Hard",
    question: "A client in her 35th week of pregnancy presents with deep, aching pain in her posterior pelvis. You suspect sacroiliac (SI) joint dysfunction. Why is the SI joint particularly vulnerable during late pregnancy?",
    options: ["The expanding uterus permanently dislocates the sacrum.", "The hormone 'relaxin' creates systemic ligamentous laxity, compromising the passive stability of the pelvic girdle.", "The baby directly kicks the sciatic nerve.", "Pregnant women lose bone density rapidly in the third trimester."],
    correctAnswer: 1,
    hint: "The body releases a specific endocrine hormone to prepare the birth canal for delivery.",
    rationale: "The hormone relaxin dramatically increases ligamentous laxity throughout the body to prepare the pelvis for childbirth. This loss of passive stability frequently leads to hypermobility and pain in the SI joints (Werner, 2019)."
  },
  {
    id: 67, topic: "Upper Extremity", difficulty: "Easy",
    question: "Which muscle is most commonly implicated in Lateral Epicondylitis ('Tennis Elbow')?",
    options: ["Flexor carpi radialis", "Extensor carpi radialis brevis (ECRB)", "Pronator teres", "Brachioradialis"],
    correctAnswer: 1,
    hint: "This muscle actively extends and radially deviates the wrist, absorbing massive eccentric loads during a backhand swing.",
    rationale: "Lateral Epicondylitis is primarily an overuse tendinopathy of the common extensor tendon, with the Extensor Carpi Radialis Brevis (ECRB) being the most frequently damaged structure (Hertling & Kessler, 2006)."
  },
  {
    id: 68, topic: "Upper Extremity", difficulty: "Medium",
    question: "To differentiate between true Carpal Tunnel Syndrome and Pronator Teres Syndrome, what key clinical finding must be assessed?",
    options: ["The presence of a dorsal wrist ganglion.", "If Phalen's test is positive, it is always Pronator Teres Syndrome.", "If the paresthesia includes the palmar aspect of the hand and the forearm, the entrapment is proximal (Pronator Teres), as the palmar cutaneous branch does not pass through the carpal tunnel.", "Only an X-ray can differentiate the two."],
    correctAnswer: 2,
    hint: "Think about the anatomical branching of the median nerve before it enters the wrist.",
    rationale: "The palmar cutaneous branch of the median nerve branches off proximal to the carpal tunnel. Therefore, if sensation is lost in the palm itself, the entrapment must be higher up, such as at the pronator teres (Magee, 2021)."
  },
  {
    id: 69, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "A client complains of catching and locking in their finger, which sometimes gets stuck in a flexed position. What is the pathological mechanism of 'Trigger Finger'?",
    options: ["A fracture of the distal phalanx.", "A nodule forming on the flexor tendon that catches on the A1 pulley during gliding.", "A complete tear of the extensor digitorum.", "Rheumatoid arthritis of the DIP joint."],
    correctAnswer: 1,
    hint: "The tendon has developed a physical swelling that cannot smoothly pass through its fibrous sheath.",
    rationale: "Trigger Finger (stenosing tenosynovitis) occurs when a localized nodule or swelling on the flexor tendon catches against the fibrous A1 pulley at the metacarpal head, causing the finger to lock (Hertling & Kessler, 2006)."
  },
  {
    id: 70, topic: "Advanced Techniques", difficulty: "Hard",
    question: "When applying a Golgi Tendon Organ (GTO) Release to a hypertonic muscle, what is the precise physiological outcome of the sustained pressure?",
    options: ["It stimulates the alpha motor neurons to contract.", "It increases blood flow to the epidermis.", "It artificially increases tension on the receptor, triggering autogenic inhibition and reflexively relaxing the associated muscle belly.", "It physically breaks down fascial adhesions."],
    correctAnswer: 2,
    hint: "The GTO is a safety mechanism designed to prevent the muscle from tearing under extreme tension.",
    rationale: "Sustained pressure on the GTO simulates high tension, which triggers a neurological reflex (autogenic inhibition) that decreases alpha motor neuron firing, forcing the hypertonic muscle to relax (Andrade, 2023)."
  },
  {
    id: 71, topic: "Upper Extremity", difficulty: "Medium",
    question: "Thoracic Outlet Syndrome (TOS) can involve the compression of the brachial plexus. Which specific structures form the anterior scalene triangle, a primary entrapment site?",
    options: ["The clavicle and the first rib.", "The anterior scalene, the middle scalene, and the first rib.", "The pectoralis minor and the coracoid process.", "The sternocleidomastoid and the trapezius."],
    correctAnswer: 1,
    hint: "This 'triangle' is bordered by two cervical muscles and the bone they attach to.",
    rationale: "The anterior scalene triangle is bordered anteriorly by the anterior scalene, posteriorly by the middle scalene, and inferiorly by the superior border of the first rib. Hypertonicity here compresses the brachial plexus (Magee, 2021)."
  },
  {
    id: 72, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "To assess for Thoracic Outlet Syndrome at the pectoralis minor chokepoint, which special test instructs the client to hyperabduct their arm while the therapist monitors the radial pulse?",
    options: ["Adson's Maneuver", "Halstead's Test", "Wright's Test (Hyperabduction Test)", "Eden's Test (Costoclavicular Test)"],
    correctAnswer: 2,
    hint: "This maneuver stretches the neurovascular bundle tightly beneath the coracoid process.",
    rationale: "Wright's Test requires the client to hyperabduct the arm, which specifically stretches the axillary artery and brachial plexus under a tight pectoralis minor. A diminished pulse indicates a positive test for this specific entrapment site (Magee, 2021)."
  },
  {
    id: 73, topic: "Sprains and Strains", difficulty: "Easy",
    question: "A client sustained a Grade 2 strain of their hamstrings. What is the clinical definition of a Grade 2 strain?",
    options: ["Mild micro-tearing with no loss of strength.", "A complete rupture of the musculotendinous unit.", "A partial tear of the muscle fibers, resulting in pain, moderate loss of strength, and localized swelling/ecchymosis.", "A fracture of the ischial tuberosity."],
    correctAnswer: 2,
    hint: "It falls exactly between a microscopic stretch and a total catastrophic failure of the tissue.",
    rationale: "A Grade 2 strain involves a significant partial tearing of the contractile tissue, characterized by a palpable defect, bruising, and a distinct loss of functional strength (Magee, 2021)."
  },
  {
    id: 74, topic: "Clinical Fundamentals", difficulty: "Medium",
    question: "During an Oral Practical exam, you are instructed to perform Myofascial Release (MFR) on the thoracolumbar fascia. Why is the use of lotion or oil contraindicated for this technique?",
    options: ["It alters the skin temperature too rapidly.", "It prevents the therapist from achieving the non-gliding fascial traction required to shear the tissue matrix.", "It triggers an allergic reaction in the fascia.", "It makes the client too relaxed."],
    correctAnswer: 1,
    hint: "MFR requires you to physically 'grip' and drag the deep connective tissue.",
    rationale: "MFR relies on sustained, dragging mechanical tension. Lubricants cause the hands to slip over the epidermis, making it impossible to engage and deform the underlying fascial restrictions (Willis College Clinical Guide)."
  },
  {
    id: 75, topic: "Lower Extremity", difficulty: "Hard",
    question: "A client presents with 'Foot Drop' and an inability to actively dorsiflex their ankle, leading to a steppage gait. Which peripheral nerve has likely sustained a lesion?",
    options: ["The Tibial Nerve", "The Deep Fibular (Peroneal) Nerve", "The Sural Nerve", "The Obturator Nerve"],
    correctAnswer: 1,
    hint: "This nerve innervates the anterior compartment of the lower leg (tibialis anterior).",
    rationale: "The Deep Fibular Nerve innervates the dorsiflexors of the ankle. A lesion or entrapment of this nerve (often at the fibular head) results in paralysis of the anterior compartment, causing 'foot drop' (Norris, 2020)."
  },
  {
    id: 76, topic: "OP Protocols", difficulty: "Medium",
    question: "A client with acute De Quervain's Tenosynovitis presents with exquisite pain over the anatomical snuffbox. What is the primary focus of your massage treatment?",
    options: ["Aggressive cross-fiber friction over the inflamed tendon sheath.", "Passive stretching of the thumb into ulnar deviation.", "Compensatory treatment of the forearm muscles and lymphatic drainage, avoiding direct pressure on the acute inflammation.", "Grade 4 Joint Mobilizations of the first CMC joint."],
    correctAnswer: 2,
    hint: "Tenosynovitis involves severe inflammation of the synovial sheath; direct mechanical friction will drastically worsen the condition.",
    rationale: "In the acute stage of tenosynovitis, direct mechanical work (like friction) is strictly contraindicated as it will exacerbate the swelling within the sheath. Treatment must focus on MLD and relieving tension in the proximal muscle bellies (Andrade, 2023)."
  },
  {
    id: 77, topic: "Head and Neck", difficulty: "Medium",
    question: "A client is diagnosed with Degenerative Disc Disease (DDD) in the cervical spine. Which clinical symptom strongly differentiates a radicular nerve compression from a simple muscle strain?",
    options: ["A dull, localized ache in the upper trapezius.", "Sharp, shooting electrical pain that radiates down the arm into specific fingers.", "Pain that completely disappears with movement.", "A mild tension headache."],
    correctAnswer: 1,
    hint: "When a nerve root is pinched by a degenerating disc, the pain travels along the specific anatomical pathway of that nerve.",
    rationale: "Radiculopathy (nerve root compression) presents as sharp, shooting, or burning pain that follows a distinct dermatomal pattern down the limb, unlike the localized, dull ache typical of a muscle strain (Magee, 2021)."
  },
  {
    id: 78, topic: "Pregnancy Modifications", difficulty: "Easy",
    question: "Why is deep pressure on the medial thigh (adductors) cautioned or contraindicated during pregnancy?",
    options: ["It will induce early labor.", "The tissues are highly prone to developing Deep Vein Thrombosis (DVT) due to pregnancy-induced hypercoagulability.", "It will cause referred pain to the abdomen.", "The adductors lose all their strength during pregnancy."],
    correctAnswer: 1,
    hint: "Pregnant clients have increased blood volume and clotting factors, making the major vessels of the leg high-risk areas.",
    rationale: "Pregnancy creates a hypercoagulable state to prevent hemorrhage during birth. Deep pressure on the medial thigh risks dislodging a silent Deep Vein Thrombosis (DVT) in the femoral or saphenous veins (Werner, 2019)."
  },
  {
    id: 79, topic: "OP Protocols: Red Flags", difficulty: "Hard",
    question: "STEM: During an Oral Practical, you are assessing a client who suffered a severe blunt trauma to their quadriceps three weeks ago. Palpation reveals a hard, distinct, bone-like mass deep in the muscle belly. The examiner asks: 'What is your clinical impression, and what technique is indicated?'",
    options: ["Impression: Scar tissue. Indication: Deep transverse friction.", "Impression: Myositis Ossificans. Indication: Absolute local contraindication for deep massage, friction, or aggressive stretching.", "Impression: Lipoma. Indication: Myofascial release.", "Impression: Muscle spasm. Indication: Muscle approximation."],
    correctAnswer: 1,
    hint: "The body has responded to the massive hematoma by erroneously depositing osteoblasts (bone cells) into the muscle tissue.",
    rationale: "A hard, bony mass developing after severe trauma indicates Myositis Ossificans. Mechanical disruption (massage, friction, stretching) is strictly contraindicated as it will provoke further pathological bone deposition (Magee, 2021)."
  },
  {
    id: 80, topic: "Upper Extremity", difficulty: "Easy",
    question: "Which condition is a progressive fibroproliferative disorder of the palmar fascia, resulting in thick cords that permanently pull the 4th and 5th digits into flexion?",
    options: ["Rheumatoid Arthritis", "Trigger Finger", "Dupuytren's Contracture", "Swan Neck Deformity"],
    correctAnswer: 2,
    hint: "This condition involves the actual shrinking and thickening of the palmar aponeurosis, not the tendons.",
    rationale: "Dupuytren's Contracture involves the pathological thickening and shortening of the palmar fascia, creating nodules and cords that mechanically lock the ulnar digits into flexion (Werner, 2019)."
  },
  {
    id: 81, topic: "Head and Neck", difficulty: "Medium",
    question: "A client presents with Temporomandibular Joint (TMJ) Dysfunction. They experience pain when closing their mouth tightly. Which muscle is a primary elevator of the mandible and a likely source of hypertonicity?",
    options: ["Lateral Pterygoid", "Digastric", "Masseter", "Platysma"],
    correctAnswer: 2,
    hint: "This thick, powerful muscle is located on the lateral aspect of the jaw and is heavily engaged during bruxism (teeth grinding).",
    rationale: "The Masseter is a primary elevator of the mandible. Hypertonicity and trigger points in the masseter are leading contributors to TMJ pain and restricted jaw mechanics (Hertling & Kessler, 2006)."
  },
  {
    id: 82, topic: "Lower Extremity", difficulty: "Medium",
    question: "A client complains of anterior knee pain that worsens when walking down stairs or sitting for long periods. Clarke's Sign is positive. What is the most appropriate treatment focus?",
    options: ["Deep friction to the popliteal artery.", "Strengthening the vastus medialis (VMO) and applying myofascial release to the tight lateral structures (IT band, vastus lateralis) to correct patellar tracking.", "Aggressive hamstring stretches.", "Joint mobilizations of the fibular head."],
    correctAnswer: 1,
    hint: "Patellofemoral Syndrome is usually a mechanical tracking issue where the kneecap is pulled too far to the outside.",
    rationale: "Patellofemoral Syndrome requires balancing the muscular forces acting on the patella. Treating the hypertonic lateral structures and recommending VMO strengthening corrects the mal-tracking that damages the retro-patellar cartilage (Andrade, 2023)."
  },
  {
    id: 83, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "During an assessment of the lumbar spine, you perform the Slump Test. The client reports severe radiating pain down their leg when their neck is flexed, but the pain completely vanishes when they extend their neck (look up). What does this conclusively indicate?",
    options: ["A severe hamstring strain.", "A positive test for adverse neural tension (radiculopathy), as cervical extension slackened the dural tube.", "A sacroiliac joint subluxation.", "Piriformis Syndrome."],
    correctAnswer: 1,
    hint: "The pain changed entirely based on the position of the head, which only affects the continuous neurological tract, not the leg muscles.",
    rationale: "The Slump Test evaluates the entire neuromeningeal tract. If extending the neck (which slackens the spinal cord and dura) relieves the leg pain, the symptom is conclusively neurological in origin, not muscular (Magee, 2021)."
  },
  {
    id: 84, topic: "Upper Extremity", difficulty: "Easy",
    question: "What is the primary mechanism of injury for a Colles' Fracture?",
    options: ["A direct blow to the humerus.", "A Fall On an Outstretched Hand (FOOSH) forcing the wrist into extreme extension.", "A repetitive strain from typing.", "A violent twisting of the elbow."],
    correctAnswer: 1,
    hint: "This classic fracture occurs at the distal radius, creating a 'dinner fork' deformity.",
    rationale: "A Colles' Fracture is a transverse fracture of the distal radius caused by a FOOSH mechanism, resulting in a characteristic dorsal displacement of the distal bone fragment (Hertling & Kessler, 2006)."
  },
  {
    id: 85, topic: "Pregnancy Modifications", difficulty: "Medium",
    question: "A pregnant client reports shooting pain down the back of her leg. You suspect Piriformis Syndrome. What specific precaution must you take when treating the gluteal region?",
    options: ["You must avoid any pressure near the ischial tuberosity.", "You must not use any essential oils in the room.", "Deep, sustained pressure in the pelvic/gluteal region can potentially stimulate uterine contractions; pressure must be moderate and carefully monitored.", "You must only use reflexology on the feet."],
    correctAnswer: 2,
    hint: "The pelvis is a highly reflexogenic area during pregnancy.",
    rationale: "Deep sustained compressions over the sacrum and deep gluteal structures carry a reflexogenic risk of stimulating uterine activity. Treatment of the piriformis must be approached with moderate, carefully monitored pressure (Werner, 2019)."
  },
  {
    id: 86, topic: "Advanced Techniques", difficulty: "Medium",
    question: "Which technique involves placing the client's limb in a position of maximal comfort to slacken the affected tissue, holding it for 90 seconds, and then slowly returning it to neutral?",
    options: ["Myofascial Release (MFR)", "Passive Positional Release (Strain-Counterstrain)", "Proprioceptive Neuromuscular Facilitation (PNF)", "Cross-Fiber Friction"],
    correctAnswer: 1,
    hint: "This is a purely neurological technique that relies on 'folding' the tissue around the tender point to reset the muscle spindle.",
    rationale: "Passive Positional Release (or Strain-Counterstrain) relies on passively shortening the hypertonic muscle to maximal comfort, allowing the neuromuscular system to reset the resting tone without invoking the stretch reflex (Andrade, 2023)."
  },
  {
    id: 87, topic: "Lower Extremity", difficulty: "Hard",
    question: "A client sustained an inversion ankle sprain. They exhibit a positive Anterior Drawer Test of the ankle, but the Talar Tilt Test is negative. Which specific ligament is injured?",
    options: ["The calcaneofibular ligament", "The deltoid ligament", "The anterior talofibular ligament (ATFL)", "The posterior talofibular ligament (PTFL)"],
    correctAnswer: 2,
    hint: "The Anterior Drawer isolates the ligament that prevents the foot from sliding forward out of the mortise.",
    rationale: "The Anterior Drawer test specifically isolates the Anterior Talofibular Ligament (ATFL). A negative Talar Tilt test confirms that the deeper calcaneofibular ligament remains intact (Magee, 2021)."
  },
  {
    id: 88, topic: "Head and Neck", difficulty: "Easy",
    question: "Which type of headache is strictly unilateral, throbbing, and frequently accompanied by photophobia, phonophobia, and nausea?",
    options: ["Tension-Type Headache", "Migraine Headache", "Cervicogenic Headache", "Cluster Headache"],
    correctAnswer: 1,
    hint: "This is a neurovascular headache that often features an 'aura' before onset.",
    rationale: "Migraine headaches are neurovascular in origin, classically presenting as severe, unilateral, throbbing pain with profound autonomic symptoms like nausea and sensitivity to light and sound (Werner, 2019)."
  },
  {
    id: 89, topic: "OP Protocols: Red Flags", difficulty: "Medium",
    question: "During an Oral Practical, a client presents with severe calf pain. You observe that the calf is swollen, hot to the touch, and visibly red. What is the appropriate clinical response?",
    options: ["Apply deep effleurage to flush the inflammation.", "Perform Homan's sign and apply ice.", "Recognize this as a potential Deep Vein Thrombosis (DVT), refuse massage to the area, and advise immediate medical attention.", "Perform a GTO release on the Achilles tendon."],
    correctAnswer: 2,
    hint: "Unilateral heat, redness, and swelling in the calf are the cardinal signs of a lethal vascular blockage.",
    rationale: "These are classic signs of a Deep Vein Thrombosis (DVT). Any mechanical manipulation of the leg could dislodge the thrombus, causing a fatal pulmonary embolism. Immediate medical referral is mandatory (Norris, 2020)."
  },
  {
    id: 90, topic: "Systemic Conditions", difficulty: "Medium",
    question: "A client with Fibromyalgia Syndrome (FMS) requests a deep tissue massage to 'work out the knots'. What is the correct clinical reasoning regarding this request?",
    options: ["Deep tissue is highly indicated to break down the extensive scar tissue in FMS.", "FMS involves central nervous system sensitization (allodynia and hyperalgesia); aggressive deep pressure will severely exacerbate their widespread pain and fatigue.", "FMS only affects the joints, so deep muscle work is safe.", "FMS requires high-velocity joint manipulations."],
    correctAnswer: 1,
    hint: "FMS is not a muscular injury; it is a software glitch in how the brain processes pain signals.",
    rationale: "Fibromyalgia involves central sensitization, meaning the nervous system amplifies sensory input into pain. Aggressive deep tissue massage will overwhelm the system, causing severe post-treatment flare-ups (Werner, 2019)."
  },
  {
    id: 91, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "To assess for a lesion in the supraspinatus tendon, you instruct the client to abduct their arms to 90 degrees, angle them forward 30 degrees, and internally rotate their thumbs downward while you apply downward resistance. What is this test?",
    options: ["Drop Arm Test", "Neer Impingement Test", "Empty Can (Jobe) Test", "Speed's Test"],
    correctAnswer: 2,
    hint: "The motion simulates pouring liquid out of a beverage container.",
    rationale: "The Empty Can Test places the shoulder in the scapular plane with internal rotation, mechanically isolating the supraspinatus muscle and tendon to test for tears or tendinopathy (Magee, 2021)."
  },
  {
    id: 92, topic: "Clinical Interventions", difficulty: "Hard",
    question: "When applying Joint Mobilizations to the glenohumeral joint to improve active Abduction, in which direction must the therapist glide the humeral head?",
    options: ["Superiorly", "Anteriorly", "Posteriorly", "Inferiorly (Caudally)"],
    correctAnswer: 3,
    hint: "According to the convex-concave rule, when the convex humeral head rolls UP (abduction), it must glide DOWN to stay in the socket.",
    rationale: "Based on the convex-concave rule of arthrokinematics, as the humerus abducts (rolls superiorly), the humeral head must glide inferiorly. Therefore, an inferior (caudal) glide mobilization restores abduction (Hertling & Kessler, 2006)."
  },
  {
    id: 93, topic: "Sprains and Strains", difficulty: "Medium",
    question: "A client is in the chronic (remodeling) phase of a lateral ankle sprain. They have full pain-free ROM but report the ankle feels 'unstable' and 'wobbly' on uneven ground. What is the most important rehabilitation focus?",
    options: ["Continuous application of ice.", "Proprioceptive and balance training (e.g., wobble board exercises) to retrain the neuromuscular stabilizing reflexes.", "Complete immobilization in a walking boot.", "Deep friction to the anterior tibialis."],
    correctAnswer: 1,
    hint: "When ligaments tear, the mechanoreceptors inside them are destroyed, leaving the brain 'blind' to the joint's position in space.",
    rationale: "Ligament tears destroy vital proprioceptors. In the chronic phase, stability is restored not just by scar tissue, but by rigorous proprioceptive training to retrain the neuromuscular reflexes to protect the joint (Magee, 2021)."
  },
  {
    id: 94, topic: "Upper Extremity", difficulty: "Easy",
    question: "Which clinical presentation is the hallmark of 'Golfer's Elbow'?",
    options: ["Pain and inflammation at the lateral epicondyle of the humerus.", "Pain and inflammation at the medial epicondyle of the humerus, exacerbated by resisted wrist flexion.", "Numbness in the 4th and 5th digits.", "A large swelling over the olecranon process."],
    correctAnswer: 1,
    hint: "The flexor mass of the forearm converges on the inside of the elbow.",
    rationale: "Medial Epicondylitis (Golfer's Elbow) is an overuse tendinopathy of the common flexor tendon at the medial epicondyle, characterized by pain during active wrist flexion and gripping (Hertling & Kessler, 2006)."
  },
  {
    id: 95, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "During Cozen's Test, the client makes a fist, pronates the forearm, and radially deviates and extends the wrist while the therapist applies resistance. What condition does a positive test indicate?",
    options: ["Medial Epicondylitis", "Lateral Epicondylitis", "De Quervain's Tenosynovitis", "Carpal Tunnel Syndrome"],
    correctAnswer: 1,
    hint: "This maneuver forces the Extensor Carpi Radialis Brevis (ECRB) to fire maximally under tension.",
    rationale: "Cozen's Test is an active resisted test designed to provoke the common extensor tendon. Pain at the lateral epicondyle confirms Lateral Epicondylitis (Magee, 2021)."
  },
  {
    id: 96, topic: "Advanced Techniques", difficulty: "Medium",
    question: "You are preparing to perform the Origin & Insertion (O&I) technique on a hypertonic biceps brachii. What type of manual manipulation do you apply to the musculotendinous junction?",
    options: ["Light, feather-like stroking.", "Heavy tapotement.", "Specific, sustained compression or deep transverse friction directly on the attachment.", "Skin rolling."],
    correctAnswer: 2,
    hint: "The goal is to physically deform the tendon to trigger a reflex within the Golgi Tendon Organs.",
    rationale: "The O&I technique involves applying specific, sustained compression or localized transverse friction directly to the tendinous attachments to safely stimulate mechanoreceptors and induce a reflex release in the belly (Willis College OP Protocol)."
  },
  {
    id: 97, topic: "Systemic Conditions", difficulty: "Easy",
    question: "A client with Osteoarthritis (OA) in their knees asks for a massage. What is the primary pathological mechanism of OA?",
    options: ["An autoimmune attack on the synovial membrane.", "The progressive mechanical degradation and wear-and-tear of the articular hyaline cartilage.", "A buildup of uric acid crystals in the joint space.", "A bacterial infection of the joint capsule."],
    correctAnswer: 1,
    hint: "This is the classic 'wear and tear' arthritis that occurs over decades of mechanical loading.",
    rationale: "Osteoarthritis is a degenerative joint disease characterized by the mechanical breakdown of articular cartilage, leading to bone-on-bone friction, osteophyte formation, and deep aching pain (Werner, 2019)."
  },
  {
    id: 98, topic: "Systemic Conditions", difficulty: "Hard",
    question: "Unlike Osteoarthritis, Rheumatoid Arthritis (RA) is a systemic autoimmune disease. During an acute flare-up of RA, which clinical modification is mandatory?",
    options: ["Perform deep frictions to the swollen joints to break down the pannus.", "Apply hot wax to the hands to improve mobility.", "All massage, stretching, and Joint Mobilizations on the actively inflamed joints are strictly contraindicated.", "Perform Grade 4 thrusts to realign the deviated digits."],
    correctAnswer: 2,
    hint: "The joints are actively under systemic immune attack, highly inflamed, and structurally compromised.",
    rationale: "During an acute RA flare-up, the synovial joints are highly inflamed and unstable. Any mechanical stress (massage, stretching, mobilization) to the affected joints is an absolute local contraindication as it will exacerbate tissue destruction (Werner, 2019)."
  },
  {
    id: 99, topic: "Lower Extremity", difficulty: "Medium",
    question: "A client presents with a sharp, burning pain between their 3rd and 4th metatarsal heads that shoots into their toes. Squeezing the metatarsal heads together reproduces the pain. What is the likely pathology?",
    options: ["Plantar Fasciitis", "Morton's Neuroma", "Tarsal Tunnel Syndrome", "Gout"],
    correctAnswer: 1,
    hint: "The transverse arch has collapsed, causing the metatarsal bones to physically crush the digital nerve passing between them.",
    rationale: "Morton's Neuroma is a fibrotic thickening of the interdigital nerve (usually between the 3rd and 4th toes) caused by chronic mechanical compression from the metatarsal heads (Hertling & Kessler, 2006)."
  },
  {
    id: 100, topic: "OP Protocols: Safety", difficulty: "Hard",
    question: "STEM: During an Oral Practical, you are assessing a client with a history of hypertension who complains of unilateral headaches and neck stiffness. Before performing any cervical stretches, you perform the Vertebral Artery Test (VAT) and the client reports feeling dizzy and nauseous. What is your immediate course of action?",
    options: ["Stop the test immediately, return the head to neutral, refuse all deep or end-range cervical treatments, and refer the client to a physician.", "Hold the position for 30 more seconds to see if it passes.", "Proceed with the massage but avoid using oil.", "Perform Grade 4 Joint Mobilizations to unblock the artery."],
    correctAnswer: 0,
    hint: "A positive VAT means the blood supply to the brain is physically compromised when the neck moves.",
    rationale: "A positive VAT is an absolute red flag indicating vertebrobasilar insufficiency. The therapist must immediately cease the test, avoid any further cervical extension or rotation, and refer the client for medical evaluation to prevent a stroke (Magee, 2021)."
  }
];
