/**
 * MT390 Treatments II - Master Clinical Simulator
 * Phase 1: Batch 1 (Questions 1 - 50)
 * Curriculum: Respiratory, Cardiovascular, Basic Musculoskeletal (Quiz 1 & Early Quiz 2)
 * Features: v2.0 Hint Integration & APA Citations
 */

window.batch1Questions = [
  {
    id: 1, topic: "Respiratory System", difficulty: "Easy",
    question: "Which respiratory condition is defined as a chronic inflammatory disorder of the airways characterized by reversible bronchospasm and excessive mucus production?",
    options: ["Emphysema", "Asthma", "Chronic Bronchitis", "Sinusitis"],
    correctAnswer: 1,
    hint: "Think about the condition characterized by 'hyperreactivity' to triggers rather than permanent alveolar destruction.",
    rationale: "Asthma involves reversible airway obstruction, inflammation, and increased airway responsiveness to various stimuli (Norris, 2020)."
  },
  {
    id: 2, topic: "Respiratory System", difficulty: "Easy",
    question: "Which chronic obstructive pulmonary disease (COPD) is characterized by the permanent destruction of alveolar walls and a resulting 'barrel chest' presentation?",
    options: ["Asthma", "Cystic Fibrosis", "Chronic Bronchitis", "Emphysema"],
    correctAnswer: 3,
    hint: "This pathology results in air trapping and a loss of lung elasticity, permanently altering the shape of the thorax.",
    rationale: "Emphysema destroys the elastin in alveolar walls, leading to air trapping, hyperinflation of the lungs, and a characteristic 'barrel chest' (Werner, 2019)."
  },
  {
    id: 3, topic: "Respiratory System", difficulty: "Medium",
    question: "A client presents with Chronic Bronchitis. Which manual therapy technique is highly indicated to assist with the mobilization of excessive bronchial secretions?",
    options: ["Deep transverse friction to the intercostals.", "Heavy tapotement over the thorax.", "Origin and Insertion technique on the diaphragm.", "High-velocity cervical Joint Mobilizations."],
    correctAnswer: 1,
    hint: "Select the percussive technique specifically designed to mechanically loosen mucus in the respiratory tract.",
    rationale: "Tapotement (specifically cupping and hacking) over the thorax creates mechanical vibrations that help dislodge and mobilize thick mucus secretions in chronic bronchitis (Andrade, 2023)."
  },
  {
    id: 4, topic: "Respiratory System", difficulty: "Hard",
    question: "During a treatment for a client with an acute asthma flare-up, which of the following clinical parameters is an absolute contraindication?",
    options: ["Treating the scalenes and sternocleidomastoid.", "Utilizing prolonged prone positioning.", "Applying superficial reflex techniques.", "Elevating the client's torso with pillows."],
    correctAnswer: 1,
    hint: "Consider how gravity and body weight affect the mechanical expansion of the rib cage during labored breathing.",
    rationale: "Prolonged prone positioning restricts anterior rib cage expansion and places additional mechanical stress on the accessory muscles of respiration, which can trigger or exacerbate an asthma attack (Werner, 2019)."
  },
  {
    id: 5, topic: "Cardiovascular System", difficulty: "Easy",
    question: "Which condition is a direct local contraindication for massage due to the severe risk of dislodging a thrombus?",
    options: ["Primary Hypertension", "Raynaud's Phenomenon", "Deep Vein Thrombosis (DVT)", "Varicose Veins"],
    correctAnswer: 2,
    hint: "This condition typically presents as unilateral heat, swelling, and deep calf pain.",
    rationale: "Deep Vein Thrombosis involves a clot in a deep vein. Massage poses a critical risk of dislodging the clot, leading to a potentially fatal pulmonary embolism (Norris, 2020)."
  },
  {
    id: 6, topic: "Cardiovascular System", difficulty: "Medium",
    question: "A client with Raynaud's Disease presents for a massage. Which hydrotherapy application must be strictly avoided?",
    options: ["Warm moist heat to the cervical spine.", "Cold applications to the extremities.", "Tepid compress to the forehead.", "Warm paraffin wax on the hands."],
    correctAnswer: 1,
    hint: "Raynaud's is a vasospastic disorder. Consider what temperature extreme triggers peripheral vasoconstriction.",
    rationale: "Cold applications trigger severe vasospasm in the arterioles of the digits in clients with Raynaud's Disease, exacerbating tissue ischemia and pain (Werner, 2019)."
  },
  {
    id: 7, topic: "Cardiovascular System", difficulty: "Hard",
    question: "A client with a history of primary hypertension complains of a sudden, severe, 'tearing' pain in their upper back. Their pulse is rapid and weak. What life-threatening event must you suspect?",
    options: ["Myocardial Infarction", "Aortic Dissection (Aneurysm Rupture)", "Acute Asthma Attack", "Pulmonary Embolism"],
    correctAnswer: 1,
    hint: "The description of the pain as 'tearing' in the upper back alongside systemic shock is a classic hallmark for this specific vascular rupture.",
    rationale: "Sudden, severe, 'tearing' pain in the chest or upper back in a hypertensive patient strongly indicates an aortic dissection, requiring immediate emergency medical dispatch (Norris, 2020)."
  },
  {
    id: 8, topic: "Cardiovascular System", difficulty: "Medium",
    question: "When treating a client with moderate Varicose Veins, what is the appropriate clinical modification?",
    options: ["Deep specific compressions directly over the affected veins.", "Total body contraindication; refuse treatment.", "Light effleurage moving exclusively proximal to distal.", "Treat proximal to the varicosities to reduce venous congestion, and avoid direct deep pressure on the damaged valves."],
    correctAnswer: 3,
    hint: "Think about the direction of venous return and how to assist fluid flow without crushing compromised vascular structures.",
    rationale: "Direct pressure on varicose veins can damage fragile tissue. Treating proximally assists venous return and reduces back-pressure on the incompetent valves (Andrade, 2023)."
  },
  {
    id: 9, topic: "Orthopedic Assessment", difficulty: "Easy",
    question: "During a Cyriax assessment, the client experiences pain on Active Range of Motion (AROM) and Resisted Range of Motion (RROM), but no pain on Passive Range of Motion (PROM) in the same direction. What tissue is likely injured?",
    options: ["Inert tissue (e.g., joint capsule)", "Contractile tissue (e.g., muscle belly or tendon)", "Nerve root", "Bursa"],
    correctAnswer: 1,
    hint: "Which type of tissue actively generates force during a resisted movement?",
    rationale: "Pain upon active and resisted movement, but not passive movement, isolates the lesion to the contractile tissue unit (muscle or tendon) because the tissue is being forced to fire (Magee, 2021)."
  },
  {
    id: 10, topic: "Orthopedic Assessment", difficulty: "Easy",
    question: "What specific type of normal end feel is characterized by a definitive, leathery resistance before the joint reaches its anatomical limit?",
    options: ["Hard (Bone-to-bone)", "Soft (Tissue approximation)", "Firm", "Empty"],
    correctAnswer: 2,
    hint: "This term replaces 'tissue stretch' and describes the tension felt when a joint capsule or ligament is fully elongated.",
    rationale: "A firm end feel (previously referred to as tissue stretch) is the normal sensation of capsular or ligamentous tension at the extreme of a joint's range of motion (Magee, 2021)."
  },
  {
    id: 11, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "You are assessing a client with a suspected lateral ankle sprain. Which specific orthopedic test is utilized to evaluate the integrity of the calcaneofibular ligament?",
    options: ["Anterior Drawer Test", "Talar Tilt Test", "Thompson Test", "Kleiger's Test"],
    correctAnswer: 1,
    hint: "This test involves inverting the calcaneus to place tension directly on the lateral ligament complex.",
    rationale: "The Talar Tilt Test applies an inversion force to the ankle mortise specifically to assess the laxity and integrity of the calcaneofibular ligament (Magee, 2021)."
  },
  {
    id: 12, topic: "Clinical Interventions", difficulty: "Medium",
    question: "What is the primary physiological objective of applying Joint Mobilizations in a clinical treatment plan?",
    options: ["To actively stretch the muscle belly.", "To restore normal accessory motions (joint play) without forcing anatomical range of motion.", "To induce a systemic parasympathetic response.", "To forcefully break bone spurs within the articular capsule."],
    correctAnswer: 1,
    hint: "Consider the difference between osteokinematic (voluntary) movement and arthrokinematic (involuntary) gliding.",
    rationale: "Joint Mobilizations are applied to safely restore the minute, involuntary accessory motions (roll, spin, glide) required for pain-free anatomical movement (Hertling & Kessler, 2006)."
  },
  {
    id: 13, topic: "Sprains and Strains", difficulty: "Easy",
    question: "A client sustained an acute whiplash injury (Cervical Sprain) 24 hours ago. What is the most appropriate initial manual intervention?",
    options: ["Aggressive passive stretching of the SCM.", "Deep transverse frictions to the cervical ligaments.", "Manual Lymph Drainage (MLD) starting at the terminus.", "Grade 4 Joint Mobilizations of the cervical spine."],
    correctAnswer: 2,
    hint: "During the acute inflammatory phase, the primary goal is edema management, not mechanical tissue deformation.",
    rationale: "In the acute phase of a sprain, deep mechanical work is contraindicated. Manual Lymph Drainage is indicated to manage the inflammatory exudate and reduce tissue congestion (Andrade, 2023)."
  },
  {
    id: 14, topic: "Head and Neck", difficulty: "Hard",
    question: "Before treating the deep suboccipital muscles of a whiplash patient, which mandatory screening test must be performed to rule out vertebrobasilar insufficiency?",
    options: ["Spurling's Test", "Vertebral Artery Test (VAT)", "Tinel's Sign", "Kernig's Test"],
    correctAnswer: 1,
    hint: "This test involves placing the cervical spine in extension and rotation to observe for nystagmus or dizziness.",
    rationale: "The Vertebral Artery Test (VAT) is a mandatory safety screen to ensure the vertebral artery is not compromised before performing deep cervical work or end-range stretches (Magee, 2021)."
  },
  {
    id: 15, topic: "Head and Neck", difficulty: "Medium",
    question: "A client presents with acquired torticollis, and their sternocleidomastoid (SCM) is highly irritable and too painful to touch directly. Which indirect advanced technique is indicated as a first-line intervention?",
    options: ["Direct ischemic compression.", "Origin & Insertion (O&I) technique.", "Transverse friction across the muscle belly.", "Heavy tapotement."],
    correctAnswer: 1,
    hint: "If the muscle belly is hyperalgesic, focus your manual therapy on the tendinous attachments to elicit a reflex release.",
    rationale: "The Origin & Insertion (O&I) technique applies specific compression to the musculotendinous junctions, safely initiating a reflex release without irritating the highly sensitive muscle belly (Andrade, 2023)."
  },
  {
    id: 16, topic: "Advanced Techniques", difficulty: "Hard",
    question: "During an Oral Practical exam, a client develops a sudden, agonizing muscle spasm in their hamstring. Which advanced protocol involves physically pushing the attachments together to slacken the muscle spindles?",
    options: ["Golgi Tendon Organ (GTO) Release", "Muscle Approximation", "Myofascial Release (MFR)", "Passive Positional Release"],
    correctAnswer: 1,
    hint: "This technique relies on closing the distance between the origin and insertion to 'turn off' the stretch reflex.",
    rationale: "Muscle Approximation specifically targets active muscle spasms by physically slackening the intrafusal muscle fibers, which inhibits the stretch reflex driving the spasm (Willis College OP Protocol)."
  },
  {
    id: 17, topic: "Advanced Techniques", difficulty: "Medium",
    question: "What is the physiological mechanism behind a Golgi Tendon Organ (GTO) Release?",
    options: ["It induces localized inflammation to speed healing.", "It physically tears fascial cross-links.", "It applies tension to the tendon, triggering an inhibitory reflex that relaxes the target muscle.", "It permanently lengthens the bone tissue."],
    correctAnswer: 2,
    hint: "Think about the neurological feedback loop that protects a muscle from tearing under excessive tension.",
    rationale: "Sustained pressure on the tendon stimulates the Golgi Tendon Organs, which neurologically inhibit the alpha motor neurons, causing the associated muscle belly to relax (Andrade, 2023)."
  },
  {
    id: 18, topic: "Lower Extremity", difficulty: "Easy",
    question: "Which condition is characterized by a lateral deviation of the patella within the femoral groove, causing deep, aching anterior knee pain?",
    options: ["Osgood-Schlatter Disease", "Patellofemoral Syndrome (PFS)", "Meniscal Tear", "Achilles Tendinopathy"],
    correctAnswer: 1,
    hint: "This syndrome is often driven by a strength imbalance between the vastus lateralis and vastus medialis.",
    rationale: "Patellofemoral Syndrome involves the improper mechanical tracking of the patella, resulting in chondromalacia and anterior knee pain (Werner, 2019)."
  },
  {
    id: 19, topic: "Lower Extremity", difficulty: "Medium",
    question: "To confirm Iliotibial (IT) Band Friction Syndrome, which special test applies pressure to the lateral femoral epicondyle while passively extending the knee?",
    options: ["Ober's Test", "Noble's Compression Test", "McMurray's Test", "Lachman's Test"],
    correctAnswer: 1,
    hint: "While Ober's assesses for a contracture (tightness), this test specifically assesses for friction and pain over the bony prominence.",
    rationale: "Noble's Compression Test specifically identifies IT Band Friction Syndrome by reproducing the sharp pain at the lateral femoral epicondyle at approximately 30 degrees of knee flexion (Magee, 2021)."
  },
  {
    id: 20, topic: "Lower Extremity", difficulty: "Hard",
    question: "A client presents with severe anterior lower leg pain after a run. You note the tissue is tight, glossy, and warm. You assess the dorsal pedis pulse, and it is entirely absent. What is your immediate clinical action?",
    options: ["Perform deep cross-fiber frictions to the tibialis anterior.", "Apply ice and instruct them to rest for 48 hours.", "This is a medical emergency (Acute Compartment Syndrome); instruct the client to go to the hospital immediately.", "Perform a thorough myofascial release of the crural fascia."],
    correctAnswer: 2,
    hint: "An absent pulse combined with severe pain and shiny skin indicates critical vascular compromise that can lead to tissue necrosis.",
    rationale: "An absent pulse indicates Acute Compartment Syndrome, where mounting fascial pressure cuts off arterial blood supply. This requires emergency surgical fasciotomy (Norris, 2020)."
  },
  {
    id: 21, topic: "Myofascial Techniques", difficulty: "Medium",
    question: "When performing 'S-Bowing' or 'C-Bowing', what is the primary structural objective?",
    options: ["To stretch the joint capsule.", "To physically bend and deform restricted fascial planes and scar tissue.", "To stimulate the lymphatic system.", "To forcefully align osteons in healing bone."],
    correctAnswer: 1,
    hint: "These direct fascial techniques rely on creating sheer forces within the connective tissue matrix.",
    rationale: "Bowing techniques apply directional pressure to physically shear and deform fascial adhesions, restoring mobility to restricted connective tissues (Willis College Clinical Guide)."
  },
  {
    id: 22, topic: "Trigger Point Therapy", difficulty: "Easy",
    question: "During palpation, you pluck a taut band of muscle and observe a transient, localized reflex flutter. What is this phenomenon called?",
    options: ["Jump Sign", "Local Twitch Response", "Referred Pain Pattern", "Fasciculation"],
    correctAnswer: 1,
    hint: "This is an objective palpatory confirmation of a myofascial trigger point, distinct from the client's subjective flinching.",
    rationale: "A Local Twitch Response is a spinal reflex characterized by a sudden, visible contraction of the muscle fibers within a taut band when a trigger point is mechanically stimulated (Andrade, 2023)."
  },
  {
    id: 23, topic: "Trigger Point Therapy", difficulty: "Medium",
    question: "A client complains of a tension headache that feels like a 'headband' wrapping around their skull. Which muscle group's trigger points classically refer pain in this exact pattern?",
    options: ["Upper Trapezius", "Sternocleidomastoid", "Suboccipitals", "Levator Scapulae"],
    correctAnswer: 2,
    hint: "These deeply situated muscles at the base of the skull directly influence the greater occipital nerve.",
    rationale: "Trigger points in the Suboccipital muscle group classically refer a deep, aching pain laterally to the side of the head, often described by clients as a tight 'headband' (Hertling & Kessler, 2006)."
  },
  {
    id: 24, topic: "Pregnancy Modifications", difficulty: "Medium",
    question: "During the second and third trimesters of pregnancy, prolonged supine positioning is contraindicated to prevent Supine Hypotensive Syndrome. What structure is being compressed?",
    options: ["The abdominal aorta", "The inferior vena cava", "The sciatic nerve", "The vagus nerve"],
    correctAnswer: 1,
    hint: "The weight of the fetus compresses the primary vessel responsible for returning deoxygenated blood from the lower body to the heart.",
    rationale: "The gravid uterus compresses the inferior vena cava against the lumbar spine in the supine position, drastically reducing venous return and causing systemic hypotension and dizziness (Werner, 2019)."
  },
  {
    id: 25, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "A client with chronic ankle instability exhibits a positive Talar Tilt Test. To effectively restore arthrokinematic glide before initiating active strengthening, what specific intervention should you employ?",
    options: ["Deep frictions to the Achilles tendon.", "Joint Mobilizations utilizing Grade 2 and 3 oscillations.", "Heavy tapotement to the gastrocnemius.", "Aggressive passive stretching into plantarflexion."],
    correctAnswer: 1,
    hint: "Select the technique explicitly designed to address accessory motion and capsular restriction within the joint mortise.",
    rationale: "Joint Mobilizations are specifically indicated to restore normal capsular pliability and joint play (arthrokinematic glide) in a chronically restricted joint (Hertling & Kessler, 2006)."
  },
  {
    id: 26, topic: "Friction Therapy", difficulty: "Medium",
    question: "According to Cyriax principles, what is the correct application of deep transverse friction massage on a healing ligament?",
    options: ["Circular motions applied with light pressure.", "Movements strictly parallel to the ligament's fibers.", "Movements perpendicular (cross-fiber) to the ligament's fibers to break down irregular cross-links.", "Sustained static compression without movement."],
    correctAnswer: 2,
    hint: "The goal is to align the healing collagen by shearing the tissues against their natural grain.",
    rationale: "Deep transverse frictions must be applied perpendicular to the tissue fibers to physically break down restrictive cross-links and promote parallel alignment of the healing collagen (Magee, 2021)."
  },
  {
    id: 27, topic: "Cardiovascular System", difficulty: "Medium",
    question: "A client with right-sided Congestive Heart Failure (CHF) is likely to present with which hallmark physical sign?",
    options: ["Severe pulmonary edema and coughing.", "Pitting edema in the bilateral lower extremities.", "Cyanosis of the lips.", "Acute angina pectoris."],
    correctAnswer: 1,
    hint: "If the right ventricle fails to pump effectively, blood backs up into the systemic venous circulation.",
    rationale: "Right-sided heart failure causes systemic venous congestion, leading to fluid extravasation and significant bilateral pitting edema, typically in the ankles and lower legs (Norris, 2020)."
  },
  {
    id: 28, topic: "Myofascial Techniques", difficulty: "Easy",
    question: "Which direct fascial technique utilizes full palmar contact with arms crossed, pushing in opposite directions to stretch large fascial planes like the thoracolumbar fascia?",
    options: ["Skin Rolling", "Cross-Arm (X-Hand) Stretching", "Pincement", "J-Stroking"],
    correctAnswer: 1,
    hint: "The name of the technique explicitly describes the therapist's physical stance over the tissue.",
    rationale: "Cross-Arm Stretching utilizes the therapist's body weight and crossed forearms to provide superior leverage for longitudinal and diagonal stretching of broad fascial sheets (Willis College Clinical Guide)."
  },
  {
    id: 29, topic: "Head and Neck", difficulty: "Medium",
    question: "A client with tension headaches exhibits a forward head posture. Which muscle is likely adaptively shortened, continuously pulling the occiput into extension?",
    options: ["Longus colli", "Rhomboid major", "Suboccipitals", "Lower trapezius"],
    correctAnswer: 2,
    hint: "Think about the muscles that bridge the atlas, axis, and the base of the skull.",
    rationale: "In forward head posture, the suboccipital muscles adaptively shorten to keep the eyes level with the horizon, leading to chronic tension and referred headache pain (Hertling & Kessler, 2006)."
  },
  {
    id: 30, topic: "General Assessment", difficulty: "Easy",
    question: "During an assessment, you passively move a client's joint through its full range of motion. What is the primary purpose of PROM testing?",
    options: ["To evaluate the strength of the contractile tissues.", "To assess the integrity of the inert structures and identify the end feel.", "To trigger a stretch reflex.", "To evaluate neuromuscular coordination."],
    correctAnswer: 1,
    hint: "When the client is completely relaxed, the muscle bellies are not firing, allowing you to isolate the joint capsule and ligaments.",
    rationale: "Passive Range of Motion (PROM) eliminates active muscle contraction, allowing the therapist to specifically evaluate the inert tissues (capsule, ligaments, bursa) and the structural end feel of the joint (Magee, 2021)."
  },
  {
    id: 31, topic: "Lower Extremity", difficulty: "Easy",
    question: "A client complains of sharp heel pain during their first steps in the morning. Upon palpation, you find thick, tender tissue on the sole of the foot. The Windlass test is positive. What is the likely pathology?",
    options: ["Tarsal Tunnel Syndrome", "Achilles Tendinopathy", "Plantar Fasciitis", "Morton's Neuroma"],
    correctAnswer: 2,
    hint: "The pain during the 'first steps' occurs because the connective tissue under the foot contracts overnight and micro-tears upon weight-bearing.",
    rationale: "Plantar Fasciitis classically presents with severe pain upon the first steps of the day due to micro-tearing of the tight, inflamed plantar aponeurosis (Werner, 2019)."
  },
  {
    id: 32, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "What does a positive Clarke's Sign (Patellar Grind Test) indicate?",
    options: ["An ACL tear.", "Chondromalacia patellae or Patellofemoral Syndrome.", "A lateral meniscus tear.", "IT Band contracture."],
    correctAnswer: 1,
    hint: "This test involves compressing the kneecap inferiorly while the client contracts their quadriceps, generating a grinding sensation.",
    rationale: "A positive Clarke's Sign produces pain and crepitus, indicating degradation of the articular cartilage on the posterior patella, a hallmark of Patellofemoral Syndrome (Magee, 2021)."
  },
  {
    id: 33, topic: "Clinical Fundamentals", difficulty: "Easy",
    question: "A client arrives with a systemic fever of 39.5°C (103°F) and body aches. What is the correct clinical action?",
    options: ["Perform a full-body relaxation massage to lower their temperature.", "Apply cold hydrotherapy to their spine while massaging.", "Refuse treatment; an acute systemic infection is an absolute contraindication for massage.", "Treat only the extremities to avoid the core."],
    correctAnswer: 2,
    hint: "Massage increases systemic circulation, which can heavily burden an immune system already fighting an active infection.",
    rationale: "Systemic fever indicates an acute infection. Massage is strictly contraindicated as it increases circulatory load and can further stress the compromised system (Werner, 2019)."
  },
  {
    id: 34, topic: "Sprains and Strains", difficulty: "Medium",
    question: "In the context of tissue healing, during which phase is the application of cross-fiber friction indicated to reorganize collagen?",
    options: ["The Acute Inflammatory Phase", "The Early Subacute (Fragile Fibroblastic) Phase", "The Chronic (Remodeling) Phase", "The Hemostasis Phase"],
    correctAnswer: 2,
    hint: "Friction is applied only when the tissue has stabilized enough to withstand mechanical shearing without re-tearing.",
    rationale: "Cross-fiber frictions are indicated in the chronic or late subacute (remodeling) phase, where collagen is actively cross-linking and requires mechanical stress for proper parallel alignment (Magee, 2021)."
  },
  {
    id: 35, topic: "Cardiovascular System", difficulty: "Medium",
    question: "When assessing a client with pitting edema in the lower legs, a prolonged indentation that lasts for several minutes suggests involvement of which system?",
    options: ["The arterial system only.", "The lymphatic system or right-sided heart failure.", "The peripheral nervous system.", "The digestive system."],
    correctAnswer: 1,
    hint: "Pitting edema occurs when interstitial fluid accumulates faster than the venous or lymphatic return can clear it.",
    rationale: "Pitting edema is a cardinal sign of compromised fluid return, typically indicating lymphatic insufficiency, deep vein thrombosis, or right-sided congestive heart failure (Norris, 2020)."
  },
  {
    id: 36, topic: "Lower Extremity", difficulty: "Hard",
    question: "A client presents with 'Periostitis' (Shin Splints). To effectively treat the tibialis anterior without causing excessive pain, which technique is most appropriate?",
    options: ["High-velocity Joint Mobilizations of the tibia.", "Aggressive transverse friction directly on the tibial crest.", "Myofascial stripping parallel to the tibia, avoiding direct pressure on the inflamed periosteum.", "Deep ischemic compression on the tibial tuberosity."],
    correctAnswer: 2,
    hint: "The periosteum (bone covering) is highly innervated and inflamed; direct pressure on the bone will cause agonizing pain.",
    rationale: "Treating periostitis requires releasing the hypertonic muscles pulling on the bone. Stripping the tibialis anterior parallel to the bone relieves tension without compressing the exquisitely painful, inflamed periosteum (Andrade, 2023)."
  },
  {
    id: 37, topic: "Head and Neck", difficulty: "Easy",
    question: "Which mechanism of injury is the defining characteristic of a Whiplash Associated Disorder (WAD)?",
    options: ["A slow, repetitive strain from poor posture.", "A rapid acceleration-deceleration force that violently extends and flexes the cervical spine.", "A congenital fusion of the cervical vertebrae.", "A viral infection of the cervical nerves."],
    correctAnswer: 1,
    hint: "The term itself refers to the cracking motion of a whip.",
    rationale: "Whiplash is defined by the rapid, violent acceleration and deceleration forces that cause acute sprain and strain trauma to the cervical spine, commonly seen in motor vehicle accidents (Magee, 2021)."
  },
  {
    id: 38, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "You perform the Thomas Test on a client, and their extended leg lifts off the table. Which muscle is adaptively shortened?",
    options: ["Gluteus Maximus", "Iliopsoas", "Hamstrings", "Piriformis"],
    correctAnswer: 1,
    hint: "The leg lifting off the table indicates a severe restriction in hip extension.",
    rationale: "A positive Thomas Test, where the straight leg raises off the table, indicates a contracture or adaptive shortening of the primary hip flexor, the iliopsoas (Magee, 2021)."
  },
  {
    id: 39, topic: "Orthopedic Assessment", difficulty: "Medium",
    question: "If the Ely's Test is positive (the hip spontaneously flexes when the knee is passively flexed prone), which specific muscle is contracted?",
    options: ["Vastus Intermedius", "Biceps Femoris", "Rectus Femoris", "Semitendinosus"],
    correctAnswer: 2,
    hint: "This muscle crosses both the hip and the knee joint anteriorly.",
    rationale: "The Rectus Femoris is a two-joint muscle. When it is tight, passively flexing the knee pulls the muscle taut, which forces the hip to flex to relieve the tension, resulting in a positive Ely's Test (Magee, 2021)."
  },
  {
    id: 40, topic: "Respiratory System", difficulty: "Hard",
    question: "A client with cystic fibrosis requests a massage. Which of the following is the most accurate clinical consideration?",
    options: ["Massage is strictly contraindicated for cystic fibrosis.", "Tapotement is contraindicated due to fragile bones.", "Postural drainage combined with tapotement/vibration is highly indicated to clear thick, viscous pulmonary secretions.", "Only reflexology should be performed."],
    correctAnswer: 2,
    hint: "Cystic fibrosis causes the body to produce abnormally thick, sticky mucus that clogs the airways.",
    rationale: "In cystic fibrosis, mechanical percussive techniques (cupping/hacking) combined with specific postural drainage positions are critical therapies used to dislodge and clear life-threatening mucus from the lungs (Werner, 2019)."
  },
  {
    id: 41, topic: "Myofascial Techniques", difficulty: "Easy",
    question: "What is the primary rationale for avoiding the use of massage oil or lotion when performing Myofascial Release (MFR)?",
    options: ["To prevent allergic reactions.", "To allow the therapist to engage and grip the superficial fascia without sliding over the skin.", "To keep the client warm.", "To increase the friction and cause blistering."],
    correctAnswer: 1,
    hint: "MFR requires physical traction. If you slip, you cannot shear the tissue.",
    rationale: "Myofascial Release requires sustained, dragging pressure. Lubricant causes the hands to glide over the epidermis, making it impossible to grip and mechanically deform the underlying fascial matrix (Willis College Clinical Guide)."
  },
  {
    id: 42, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When applying a Proprioceptive Neuromuscular Facilitation (PNF) stretch, what action does the client perform to trigger post-isometric relaxation?",
    options: ["They completely relax and fall asleep.", "They actively contract the target muscle isometrically against the therapist's resistance for 5-10 seconds.", "They aggressively bounce the limb.", "They hold their breath for 30 seconds."],
    correctAnswer: 1,
    hint: "The 'Facilitation' part of PNF requires the nervous system to fire a muscle actively before it is stretched.",
    rationale: "PNF stretching utilizes an isometric contraction of the target muscle against resistance, which fatigues the muscle and triggers a neurological reflex (post-isometric relaxation), allowing for a deeper subsequent stretch (Andrade, 2023)."
  },
  {
    id: 43, topic: "Sprains and Strains", difficulty: "Hard",
    question: "A client sustained a severe contusion to their thigh 3 weeks ago. You palpate a hard, bone-like mass in the vastus lateralis. Deep friction and stretching are strictly contraindicated. What is the suspected condition?",
    options: ["A massive hematoma", "Myositis Ossificans", "A lipoma", "A sebaceous cyst"],
    correctAnswer: 1,
    hint: "The body has mistakenly attempted to repair the deep muscle bruise by depositing calcium and bone cells.",
    rationale: "Myositis Ossificans is the pathological calcification of muscle tissue following a severe trauma. Aggressive massage or stretching will provoke further bone deposition and is strictly contraindicated (Magee, 2021)."
  },
  {
    id: 44, topic: "Cardiovascular System", difficulty: "Medium",
    question: "Why is deep abdominal massage contraindicated for a client with an untreated, prominent abdominal aortic aneurysm?",
    options: ["It will cause immediate constipation.", "Mechanical pressure could easily rupture the weakened arterial wall, causing fatal internal hemorrhaging.", "It will cause referred pain to the shoulder.", "It will stimulate the vagus nerve too strongly."],
    correctAnswer: 1,
    hint: "An aneurysm is a ballooning, fragile weakness in a major blood vessel.",
    rationale: "An abdominal aortic aneurysm represents a critically weakened, bulging arterial wall. Any deep manual compression can trigger a catastrophic rupture, making it an absolute regional contraindication (Norris, 2020)."
  },
  {
    id: 45, topic: "Advanced Techniques", difficulty: "Medium",
    question: "You are applying Specific Compression to a trigger point in the upper trapezius. According to clinical protocols, what is the maximum acceptable pain rating you should solicit from the client?",
    options: ["10/10", "8/10", "7/10", "A 'good pain' maximum of 4/10 to 5/10"],
    correctAnswer: 3,
    hint: "If the pain is too severe, the client's nervous system will generate a protective muscle spasm, defeating the purpose of the release.",
    rationale: "Trigger point compression must remain completely tolerable (usually a 4 to 5 out of 10). Exceeding this threshold triggers sympathetic nervous system arousal and defensive muscle guarding, rendering the technique ineffective (Andrade, 2023)."
  },
  {
    id: 46, topic: "Lower Extremity", difficulty: "Easy",
    question: "Which of the following describes 'Pes Cavus'?",
    options: ["A completely flat foot.", "An abnormally high, rigid medial longitudinal arch.", "A bunion on the great toe.", "A fusion of the tarsal bones."],
    correctAnswer: 1,
    hint: "This foot posture results in a rigid, 'locked' foot that absorbs shock poorly during the gait cycle.",
    rationale: "Pes Cavus is characterized by a high, rigid medial longitudinal arch that fails to pronate adequately during walking, transferring excessive shock up the kinetic chain (Hertling & Kessler, 2006)."
  },
  {
    id: 47, topic: "Trigger Point Therapy", difficulty: "Medium",
    question: "A client reports an aching pain running down the lateral aspect of their leg. Palpation reveals a trigger point on the anterior iliac crest. Which muscle is likely responsible?",
    options: ["Gluteus Maximus", "Tensor Fasciae Latae (TFL)", "Vastus Medialis", "Sartorius"],
    correctAnswer: 1,
    hint: "This small muscle attaches to the IT Band and mimics the pain of trochanteric bursitis.",
    rationale: "Trigger points in the Tensor Fasciae Latae (TFL) classically refer pain down the lateral thigh toward the knee, often closely mimicking the symptoms of IT Band Friction Syndrome or bursitis (Werner, 2019)."
  },
  {
    id: 48, topic: "Orthopedic Assessment", difficulty: "Hard",
    question: "During a Talar Tilt Test, a 'firm' end feel is completely absent, and the talus freely inverts with no resistance. What does this indicate?",
    options: ["A healthy, flexible joint.", "A Grade 1 mild sprain.", "A Grade 3 complete rupture of the calcaneofibular ligament.", "A bony block."],
    correctAnswer: 2,
    hint: "If the 'leathery' stop is missing entirely, the structural tether holding the joint together has been severed.",
    rationale: "An 'empty' or absent firm end feel during ligamentous stress testing indicates a complete Grade 3 rupture of the ligament, as there is no intact tissue left to provide mechanical resistance (Magee, 2021)."
  },
  {
    id: 49, topic: "Head and Neck", difficulty: "Medium",
    question: "A pregnant client in her second trimester presents with a stiff neck. Why must you adapt your treatment positioning?",
    options: ["Pregnant clients cannot receive neck massages.", "The prone position will compress the fetus, and the supine position will compress the inferior vena cava.", "Pregnant clients must stand during treatment.", "The massage table is not strong enough."],
    correctAnswer: 1,
    hint: "Consider both the physical size of the abdomen and the internal vascular structures of the mother.",
    rationale: "Standard prone and supine positions are contraindicated in the second and third trimesters to prevent fetal compression and Supine Hypotensive Syndrome. Side-lying or semi-fowler positioning is mandatory (Werner, 2019)."
  },
  {
    id: 50, topic: "Clinical Interventions", difficulty: "Medium",
    question: "When performing Joint Mobilizations, which Grade is characterized by a large amplitude rhythmic oscillation performed up to the limit of the available range of motion (but not into the tissue resistance)?",
    options: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    correctAnswer: 1,
    hint: "This grade sweeps through the free space of the joint to provide pain relief and move synovial fluid, without stretching the capsule.",
    rationale: "Grade 2 mobilizations are large-amplitude oscillations performed within the free range of the joint. They are primarily used for pain management and to stimulate synovial fluid production without stressing the joint capsule (Hertling & Kessler, 2006)."
  }
];
