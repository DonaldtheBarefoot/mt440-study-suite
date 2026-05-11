/**
 * A&P: Nervous System (MT450) - Question Bank
 * Total Target: 200 Questions
 * Current Load: Questions 1 - 25
 */

const allQuestions = [
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides motor innervation to the muscles of facial expression?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN XII (Hypoglossal)"],
        answer: "CN VII (Facial)",
        hint: "Think about the nerve that passes through the parotid gland but does not innervate it."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with unilateral ptosis, miosis, and anhidrosis. What is the most likely clinical impression?",
        options: ["Bell's Palsy", "Horner's Syndrome", "Trigeminal Neuralgia", "Thoracic Outlet Syndrome"],
        answer: "Horner's Syndrome",
        hint: "This triad indicates a disruption of the sympathetic pathway to the head and face."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "Which ascending tract is primarily responsible for transmitting pain and temperature sensation?",
        options: ["Dorsal Column-Medial Lemniscal Pathway", "Lateral Spinothalamic Tract", "Anterior Spinocerebellar Tract", "Corticospinal Tract"],
        answer: "Lateral Spinothalamic Tract",
        hint: "Decussation of these fibers occurs at or near the level of entry in the spinal cord."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which neurotransmitter is released by postganglionic sympathetic neurons targeting the heart?",
        options: ["Acetylcholine", "Epinephrine", "Norepinephrine", "Dopamine"],
        answer: "Norepinephrine",
        hint: "This neurotransmitter binds to adrenergic receptors to increase heart rate."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment, a client exhibits a positive Babinski sign (upgoing toes). In an adult, these clinical findings typically indicate an upper motor neuron lesion. Which tract is most likely involved?",
        options: ["Corticospinal Tract", "Spinothalamic Tract", "Vestibulospinal Tract", "Rubrospinal Tract"],
        answer: "Corticospinal Tract",
        hint: "This is the primary descending motor pathway controlling voluntary movement."
    },
    {
        category: "Brain Anatomy",
        question: "Which lobe of the cerebrum contains the primary motor cortex?",
        options: ["Frontal Lobe", "Parietal Lobe", "Temporal Lobe", "Occipital Lobe"],
        answer: "Frontal Lobe",
        hint: "This cortex is located in the precentral gyrus."
    },
    {
        category: "Nervous Tissue",
        question: "Which glial cells are responsible for producing myelin in the central nervous system (CNS)?",
        options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
        answer: "Oligodendrocytes",
        hint: "Unlike their peripheral counterparts, these cells can wrap around multiple axons simultaneously."
    },
    {
        category: "Special Senses",
        question: "Which photoreceptor cells in the retina are responsible for color vision and visual acuity in bright light?",
        options: ["Rods", "Cones", "Bipolar cells", "Ganglion cells"],
        answer: "Cones",
        hint: "These are highly concentrated in the fovea centralis."
    },
    {
        category: "Clinical Findings",
        question: "A client reports a sharp, shooting pain radiating down the posterior aspect of their thigh and leg. Which nerve is most likely involved in these clinical findings?",
        options: ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Pudendal nerve"],
        answer: "Sciatic nerve",
        hint: "This is the largest nerve in the body, composed of the tibial and common fibular divisions."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which cranial nerve carries the vast majority of parasympathetic outflow to the thoracic and abdominal viscera?",
        options: ["CN III (Oculomotor)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN X (Vagus)"],
        answer: "CN X (Vagus)",
        hint: "Its name translates to 'wanderer' in Latin."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The anterior (ventral) horn of the spinal cord gray matter primarily contains the cell bodies of what type of neurons?",
        options: ["Somatic sensory", "Visceral sensory", "Somatic motor", "Visceral motor"],
        answer: "Somatic motor",
        hint: "These lower motor neurons directly innervate skeletal muscle fibers."
    },
    {
        category: "Clinical Findings",
        question: "Carpal tunnel syndrome involves the mechanical compression of which nerve at the anterior wrist?",
        options: ["Ulnar nerve", "Radial nerve", "Median nerve", "Musculocutaneous nerve"],
        answer: "Median nerve",
        hint: "This compression affects the flexor compartment and can cause atrophy of the thenar eminence."
    },
    {
        category: "Brain Anatomy",
        question: "Which structure of the diencephalon acts as the primary sensory relay station for most information ascending to the cerebral cortex?",
        options: ["Hypothalamus", "Epithalamus", "Thalamus", "Basal ganglia"],
        answer: "Thalamus",
        hint: "It acts as the brain's central switchboard, filtering sensory input."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve is entirely sensory and transmits both auditory and equilibrium information?",
        options: ["CN II (Optic)", "CN VIII (Vestibulocochlear)", "CN IX (Glossopharyngeal)", "CN XI (Accessory)"],
        answer: "CN VIII (Vestibulocochlear)",
        hint: "This nerve exits the posterior cranial fossa through the internal acoustic meatus."
    },
    {
        category: "Nervous Tissue",
        question: "The resting membrane potential of a typical mammalian neuron is approximately:",
        options: ["+30 mV", "0 mV", "-70 mV", "-90 mV"],
        answer: "-70 mV",
        hint: "This state is actively maintained by the sodium-potassium exchange pump and leak channels."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment, you note a client has an exaggerated lumbar lordosis and an anterior pelvic tilt. Which muscle group would likely present with hypertonicity and require self-care tool considerations?",
        options: ["Hamstrings", "Gluteus maximus", "Iliopsoas", "Rectus abdominis"],
        answer: "Iliopsoas",
        hint: "This muscle is a primary, powerful flexor of the hip joint."
    },
    {
        category: "Special Senses",
        question: "Which structure of the inner ear is primarily responsible for detecting angular or rotational acceleration of the head?",
        options: ["Cochlea", "Saccule", "Utricle", "Semicircular canals"],
        answer: "Semicircular canals",
        hint: "These structures are arranged in three orthogonal planes (X, Y, and Z)."
    },
    {
        category: "Brain Anatomy",
        question: "The primary somatosensory cortex is geographically located in which cerebral structure?",
        options: ["Precentral gyrus", "Postcentral gyrus", "Superior temporal gyrus", "Cingulate gyrus"],
        answer: "Postcentral gyrus",
        hint: "It is situated immediately posterior to the central sulcus in the parietal lobe."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides the motor innervation to the sternocleidomastoid and upper trapezius muscles?",
        options: ["CN IX (Glossopharyngeal)", "CN X (Vagus)", "CN XI (Accessory)", "CN XII (Hypoglossal)"],
        answer: "CN XI (Accessory)",
        hint: "A spinal root of this nerve travels up through the foramen magnum before exiting the skull."
    },
    {
        category: "Autonomic Nervous System",
        question: "The sympathetic trunk ganglia, which run vertically on either side of the spine, are also classified as:",
        options: ["Prevertebral ganglia", "Paravertebral ganglia", "Terminal ganglia", "Intramural ganglia"],
        answer: "Paravertebral ganglia",
        hint: "The prefix implies they are located 'alongside' the vertebrae."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "At what vertebral level does the adult spinal cord typically terminate?",
        options: ["T12 - L1", "L1 - L2", "L3 - L4", "S1 - S2"],
        answer: "L1 - L2",
        hint: "This tapering inferior end is known as the conus medullaris."
    },
    {
        category: "Nervous Tissue",
        question: "The unmyelinated gaps between adjacent Schwann cells along a peripheral axon are called:",
        options: ["Synaptic clefts", "Nodes of Ranvier", "Axon hillocks", "Motor end plates"],
        answer: "Nodes of Ranvier",
        hint: "These gaps are essential for the rapid propagation of action potentials via saltatory conduction."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with 'drop foot' and an inability to actively dorsiflex their ankle. This clinical impression points to a potential lesion of which nerve?",
        options: ["Tibial nerve", "Common fibular (peroneal) nerve", "Saphenous nerve", "Sural nerve"],
        answer: "Common fibular (peroneal) nerve",
        hint: "This nerve is highly superficial and vulnerable where it wraps around the neck of the fibula."
    },
    {
        category: "Brain Anatomy",
        question: "Which region of the brainstem contains the critical autonomic centers regulating heart rate, blood vessel diameter, and respiration?",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Cerebellum"],
        answer: "Medulla oblongata",
        hint: "This is the most inferior portion of the brainstem, continuous with the spinal cord."
    },
    {
        category: "Clinical Findings",
        question: "Thoracic Outlet Syndrome (TOS) can involve the compression of the brachial plexus between the clavicle and the first rib. What is the specific anatomical name for this passageway?",
        options: ["Anterior scalene triangle", "Costoclavicular space", "Subcoracoid space", "Quadrangular space"],
        answer: "Costoclavicular space",
        hint: "The name directly references the two bony structures forming the superior and inferior borders of the space."
    },
    {
        category: "Nervous Tissue",
        question: "During an action potential, the rapid depolarization phase is primarily driven by the inward rush of which ion?",
        options: ["Potassium (K+)", "Calcium (Ca2+)", "Sodium (Na+)", "Chloride (Cl-)"],
        answer: "Sodium (Na+)",
        hint: "Voltage-gated channels for this ion open when the membrane potential reaches the threshold of -55 mV."
    },
    {
        category: "Brain Anatomy",
        question: "Which brain structure is primarily responsible for the coordination of voluntary movements, posture, and maintaining equilibrium?",
        options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Thalamus"],
        answer: "Cerebellum",
        hint: "Its name translates to 'little brain' in Latin, located posterior to the pons."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The dorsal root ganglion of a spinal nerve contains:",
        options: ["Cell bodies of sensory neurons", "Cell bodies of motor neurons", "Axons of motor neurons", "Synapses between sensory and motor neurons"],
        answer: "Cell bodies of sensory neurons",
        hint: "These are unipolar neurons that bring afferent information from the periphery toward the central nervous system."
    },
    {
        category: "Clinical Findings",
        question: "A client reports numbness and tingling in their medial forearm extending into the fourth and fifth digits. These clinical findings suggest an entrapment of which nerve?",
        options: ["Median nerve", "Radial nerve", "Ulnar nerve", "Musculocutaneous nerve"],
        answer: "Ulnar nerve",
        hint: "This nerve is particularly superficial as it passes through the cubital tunnel posterior to the medial epicondyle."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve is responsible for the parasympathetic constriction of the pupil (miosis)?",
        options: ["CN II (Optic)", "CN III (Oculomotor)", "CN IV (Trochlear)", "CN VI (Abducens)"],
        answer: "CN III (Oculomotor)",
        hint: "This nerve also supplies four of the six extraocular muscles."
    },
    {
        category: "Autonomic Nervous System",
        question: "Activation of the parasympathetic nervous system generally produces which of the following physiological responses?",
        options: ["Dilation of the bronchioles", "Increased heart rate", "Increased gastrointestinal peristalsis", "Glycogen breakdown in the liver"],
        answer: "Increased gastrointestinal peristalsis",
        hint: "Think of the 'rest and digest' response."
    },
    {
        category: "Special Senses",
        question: "The primary gustatory (taste) cortex is located in which region of the cerebral cortex?",
        options: ["Insula", "Occipital lobe", "Prefrontal cortex", "Superior temporal gyrus"],
        answer: "Insula",
        hint: "This lobe is hidden deep within the lateral sulcus."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with 'wrist drop' and an inability to actively extend their digits. What is the most likely clinical impression regarding nerve involvement?",
        options: ["Median nerve lesion", "Radial nerve lesion", "Ulnar nerve lesion", "Axillary nerve lesion"],
        answer: "Radial nerve lesion",
        hint: "This nerve innervates the entire posterior extensor compartment of the arm and forearm."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "How many pairs of spinal nerves emerge from the human spinal cord?",
        options: ["12 pairs", "24 pairs", "31 pairs", "33 pairs"],
        answer: "31 pairs",
        hint: "They are divided into 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal pair."
    },
    {
        category: "Brain Anatomy",
        question: "The thick band of commissural white matter fibers connecting the left and right cerebral hemispheres is the:",
        options: ["Corpus callosum", "Internal capsule", "Fornix", "Corona radiata"],
        answer: "Corpus callosum",
        hint: "This structure allows the two hemispheres to communicate directly with one another."
    },
    {
        category: "Nervous Tissue",
        question: "What is the specialized junction where a neuron communicates with another cell (either another neuron, muscle, or gland) called?",
        options: ["Motor end plate", "Dendritic spine", "Synapse", "Axon terminal"],
        answer: "Synapse",
        hint: "It can be chemical (involving neurotransmitters) or electrical (via gap junctions)."
    },
    {
        category: "Clinical Findings",
        question: "During a physical assessment, tapping the patellar tendon elicits a stretch reflex. This specific reflex arc tests the integrity of which spinal cord levels?",
        options: ["L1 - L2", "L2 - L4", "L5 - S1", "S1 - S2"],
        answer: "L2 - L4",
        hint: "These are the same roots that form the femoral nerve, which innervates the quadriceps."
    },
    {
        category: "Cranial Nerves",
        question: "Which condition involves sudden, severe, shock-like facial pain typically triggered by light touch, chewing, or brushing teeth?",
        options: ["Bell's Palsy", "Trigeminal Neuralgia", "Glossopharyngeal Neuralgia", "Temporal Arteritis"],
        answer: "Trigeminal Neuralgia",
        hint: "This pathology involves CN V and is often referred to as tic douloureux."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which of the following receptors does acetylcholine (ACh) bind to at the neuromuscular junction of skeletal muscle?",
        options: ["Alpha-adrenergic", "Beta-adrenergic", "Muscarinic cholinergic", "Nicotinic cholinergic"],
        answer: "Nicotinic cholinergic",
        hint: "These are always excitatory ionotropic receptors, unlike the GPCR ones found on target organs of the parasympathetic system."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The collection of spinal nerve roots extending inferior to the conus medullaris in the vertebral canal is called the:",
        options: ["Filum terminale", "Cauda equina", "Lumbar plexus", "Sacral promontory"],
        answer: "Cauda equina",
        hint: "The name translates literally from Latin to 'horse's tail'."
    },
    {
        category: "Clinical Findings",
        question: "Piriformis syndrome involves the hypertonicity or spasm of the piriformis muscle compressing which major peripheral nerve?",
        options: ["Pudendal nerve", "Superior gluteal nerve", "Inferior gluteal nerve", "Sciatic nerve"],
        answer: "Sciatic nerve",
        hint: "This compression mimics lumbar radiculopathy and causes posterior leg pain."
    },
    {
        category: "Brain Anatomy",
        question: "Which specific area of the cerebral cortex is typically responsible for the comprehension of written and spoken language?",
        options: ["Broca's area", "Wernicke's area", "Primary auditory cortex", "Prefrontal cortex"],
        answer: "Wernicke's area",
        hint: "A lesion here results in fluent but nonsensical aphasia ('word salad')."
    },
    {
        category: "Nervous Tissue",
        question: "Which type of glial cell acts as the resident macrophage of the central nervous system, performing phagocytosis of cellular debris and pathogens?",
        options: ["Astrocytes", "Microglia", "Ependymal cells", "Satellite cells"],
        answer: "Microglia",
        hint: "These are the smallest of the glial cells and are derived from mesoderm rather than ectoderm."
    },
    {
        category: "Special Senses",
        question: "The sensory receptors for olfaction (smell) are classified as:",
        options: ["Mechanoreceptors", "Photoreceptors", "Chemoreceptors", "Nociceptors"],
        answer: "Chemoreceptors",
        hint: "These receptors bind to specific odorant molecules dissolved in the nasal mucosa."
    },
    {
        category: "Clinical Findings",
        question: "A traction injury to the upper roots of the brachial plexus during birth can result in a 'waiter's tip' deformity. This clinical impression is known as:",
        options: ["Klumpke's Palsy", "Erb's Palsy", "Saturday Night Palsy", "Pronator Teres Syndrome"],
        answer: "Erb's Palsy",
        hint: "This injury primarily affects the C5 and C6 nerve roots."
    },
    {
        category: "Cranial Nerves",
        question: "The afferent (sensory) limb of the gag reflex is mediated by which cranial nerve?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN X (Vagus)"],
        answer: "CN IX (Glossopharyngeal)",
        hint: "This nerve senses the stimulation of the posterior pharyngeal wall, while another nerve handles the motor response."
    },
    {
        category: "Autonomic Nervous System",
        question: "Sympathetic preganglionic neurons originate in the lateral horns of the spinal cord gray matter at which vertebral levels?",
        options: ["C1 - C8", "T1 - L2", "L3 - S2", "S2 - S4"],
        answer: "T1 - L2",
        hint: "Because of this specific anatomical origin, the sympathetic division is also called the thoracolumbar division."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The brachial plexus is formed by the anterior rami of which spinal nerves?",
        options: ["C1 - C4", "C5 - T1", "T1 - T12", "L1 - L4"],
        answer: "C5 - T1",
        hint: "These roots combine to form the superior, middle, and inferior trunks in the posterior triangle of the neck."
    },
    {
        category: "Brain Anatomy",
        question: "Cerebrospinal fluid (CSF) is primarily produced by specialized ependymal cells within the ventricles known as the:",
        options: ["Arachnoid villi", "Choroid plexus", "Substantia nigra", "Corpora quadrigemina"],
        answer: "Choroid plexus",
        hint: "This structure continuously filters blood plasma to create a supportive and protective fluid bath for the CNS."
    },
    {
        category: "Clinical Findings",
        question: "If a client presents with sharp pain radiating from the neck down the arm, and manual assessment reveals significant trigger points and hypertonicity in the anterior and middle scalenes, which structure is likely being compressed?",
        options: ["Vertebral artery", "Vagus nerve", "Brachial plexus", "Phrenic nerve"],
        answer: "Brachial plexus",
        hint: "This is a classic presentation of Anterior Scalene Syndrome, a form of Thoracic Outlet Syndrome."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The phrenic nerve, which provides the sole motor innervation to the diaphragm, arises from which spinal cord segments?",
        options: ["C1 - C3", "C3 - C5", "C5 - C7", "C7 - T1"],
        answer: "C3 - C5",
        hint: "Remember the mnemonic: 'Three, four, and five keep the diaphragm alive.'"
    },
    {
        category: "Clinical Findings",
        question: "During a neurological assessment, you find diminished sensation over the lateral aspect of the forearm and the thumb. Which dermatome is most likely affected?",
        options: ["C5", "C6", "C7", "C8"],
        answer: "C6",
        hint: "This nerve root also contributes heavily to the motor function of wrist extension."
    },
    {
        category: "Clinical Findings",
        question: "A client demonstrates weakness when asked to actively dorsiflex and invert their foot against resistance. These clinical findings suggest a potential lesion at which myotomal level?",
        options: ["L2", "L3", "L4", "S1"],
        answer: "L4",
        hint: "This root level is primarily tested via the tibialis anterior muscle."
    },
    {
        category: "Brain Anatomy",
        question: "Which of the cranial meninges is the deepest layer, intimately clinging to the surface of the brain and spinal cord?",
        options: ["Dura mater", "Arachnoid mater", "Pia mater", "Ependymal layer"],
        answer: "Pia mater",
        hint: "Its name translates from Latin to 'tender mother'."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which endocrine gland acts as a modified sympathetic ganglion, releasing epinephrine and norepinephrine directly into the bloodstream?",
        options: ["Thyroid gland", "Pineal gland", "Anterior pituitary", "Adrenal medulla"],
        answer: "Adrenal medulla",
        hint: "This gland sits atop the kidneys and amplifies the 'fight or flight' response."
    },
    {
        category: "Nervous Tissue",
        question: "During an action potential, the repolarization phase—returning the membrane potential toward resting state—is primarily caused by the efflux (exit) of which ion?",
        options: ["Sodium (Na+)", "Potassium (K+)", "Calcium (Ca2+)", "Chloride (Cl-)"],
        answer: "Potassium (K+)",
        hint: "These voltage-gated channels open slowly and remain open longer than the sodium channels."
    },
    {
        category: "Cranial Nerves",
        question: "If a client presents with a unilateral lesion of the Hypoglossal nerve (CN XII), what clinical finding would you expect when they protrude their tongue?",
        options: ["Loss of taste on the anterior two-thirds", "The tongue deviates toward the unaffected side", "The tongue deviates toward the affected side", "Inability to swallow"],
        answer: "The tongue deviates toward the affected side",
        hint: "The intrinsic muscles on the functioning side push the tongue over toward the weak/paralyzed side."
    },
    {
        category: "Clinical Findings",
        question: "A cyclist presents with numbness in their fourth and fifth digits and weakness in spreading their fingers. If these clinical findings are caused by entrapment at the wrist, which anatomical structure is involved?",
        options: ["Carpal tunnel", "Guyon's canal", "Cubital tunnel", "Spiral groove"],
        answer: "Guyon's canal",
        hint: "This ulnar nerve entrapment site is located between the pisiform and the hook of the hamate."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The Achilles (calcaneal) tendon reflex primarily tests the integrity of which spinal cord segments?",
        options: ["L2 - L4", "L4 - L5", "L5 - S1", "S1 - S2"],
        answer: "S1 - S2",
        hint: "This tests the tibial nerve and the gastroc-soleus complex."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The anterior compartment of the thigh, including the quadriceps femoris group, is innervated by which major branch of the lumbar plexus?",
        options: ["Obturator nerve", "Femoral nerve", "Sciatic nerve", "Ilioinguinal nerve"],
        answer: "Femoral nerve",
        hint: "This nerve passes deep to the inguinal ligament."
    },
    {
        category: "Brain Anatomy",
        question: "Which collection of subcortical nuclei is crucial for starting, stopping, and monitoring the intensity of voluntary movements?",
        options: ["Basal ganglia", "Limbic system", "Reticular formation", "Corpora quadrigemina"],
        answer: "Basal ganglia",
        hint: "Parkinson's disease involves the degeneration of dopamine-releasing neurons that target this structure."
    },
    {
        category: "Special Senses",
        question: "The auditory ossicles—the malleus, incus, and stapes—are located within which distinct anatomical region of the ear?",
        options: ["External acoustic meatus", "Tympanic cavity (Middle ear)", "Bony labyrinth (Inner ear)", "Membranous labyrinth"],
        answer: "Tympanic cavity (Middle ear)",
        hint: "They bridge the gap between the tympanic membrane and the oval window."
    },
    {
        category: "Clinical Findings",
        question: "Prolonged use of ill-fitting crutches can compress a major nerve in the axilla, leading to triceps weakness and 'wrist drop'. Which nerve is implicated in this clinical impression?",
        options: ["Median nerve", "Ulnar nerve", "Axillary nerve", "Radial nerve"],
        answer: "Radial nerve",
        hint: "This nerve innervates all the extensor muscles of the upper limb."
    },
    {
        category: "Autonomic Nervous System",
        question: "The parasympathetic nervous system is anatomically described as having what type of outflow?",
        options: ["Thoracolumbar", "Craniosacral", "Cervicothoracic", "Lumbosacral"],
        answer: "Craniosacral",
        hint: "Its preganglionic fibers originate in the brainstem and the S2-S4 spinal cord segments."
    },
    {
        category: "Nervous Tissue",
        question: "Which of the following is the primary inhibitory neurotransmitter in the adult central nervous system?",
        options: ["Glutamate", "Acetylcholine", "GABA (Gamma-aminobutyric acid)", "Substance P"],
        answer: "GABA (Gamma-aminobutyric acid)",
        hint: "It causes hyperpolarization of the postsynaptic membrane, moving it further from threshold."
    },
    {
        category: "Cranial Nerves",
        question: "The corneal reflex (blinking when the cornea is touched) involves two cranial nerves. Which nerve serves as the afferent (sensory) limb of this reflex arc?",
        options: ["CN II (Optic)", "CN III (Oculomotor)", "CN V (Trigeminal)", "CN VII (Facial)"],
        answer: "CN V (Trigeminal)",
        hint: "Specifically, the ophthalmic branch (V1) senses the stimulus."
    },
    {
        category: "Clinical Findings",
        question: "A client reports a burning, tingling sensation localized strictly to the anterolateral aspect of their thigh, exacerbated by wearing a heavy tool belt. What is the most likely clinical impression?",
        options: ["Sciatica", "Meralgia Paresthetica", "Piriformis Syndrome", "Femoral nerve neuropathy"],
        answer: "Meralgia Paresthetica",
        hint: "This involves the entrapment of the lateral femoral cutaneous nerve near the ASIS."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "In the spinal canal, the space located between the dura mater and the periosteum of the vertebrae, which contains fat and a venous plexus, is the:",
        options: ["Subarachnoid space", "Subdural space", "Epidural space", "Subpial space"],
        answer: "Epidural space",
        hint: "This is the target site for certain types of spinal anesthesia."
    },
    {
        category: "Brain Anatomy",
        question: "Which diencephalic structure serves as the main visceral control center of the body, regulating body temperature, hunger, thirst, and sleep-wake cycles?",
        options: ["Thalamus", "Epithalamus", "Hypothalamus", "Medulla oblongata"],
        answer: "Hypothalamus",
        hint: "It acts as the crucial link between the nervous and endocrine systems via the pituitary gland."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with severe lower back pain, bilateral leg weakness, and reports recent onset of urinary incontinence and numbness in their perineal region (saddle anesthesia). These clinical findings represent a medical emergency known as:",
        options: ["Spinal Stenosis", "Cauda Equina Syndrome", "Lumbar Radiculopathy", "Spondylolisthesis"],
        answer: "Cauda Equina Syndrome",
        hint: "This requires immediate decompression to prevent permanent neurological damage to the lower nerve roots."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "When testing the biceps brachii deep tendon reflex, which primary spinal cord segment is being evaluated?",
        options: ["C4", "C5", "C7", "C8"],
        answer: "C5",
        hint: "This segment, along with C6, forms the superior trunk of the brachial plexus and the musculocutaneous nerve."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve completely bypasses the thalamus and synapses directly in the cerebral cortex?",
        options: ["CN I (Olfactory)", "CN II (Optic)", "CN VIII (Vestibulocochlear)", "CN X (Vagus)"],
        answer: "CN I (Olfactory)",
        hint: "Its fibers pass through the cribriform plate of the ethmoid bone."
    },
    {
        category: "Autonomic Nervous System",
        question: "Postganglionic parasympathetic fibers release acetylcholine, which binds to what specific type of receptors on the effector organs (e.g., smooth muscle, glands)?",
        options: ["Nicotinic receptors", "Muscarinic receptors", "Alpha-1 receptors", "Beta-2 receptors"],
        answer: "Muscarinic receptors",
        hint: "These are G-protein coupled receptors, unlike the ionotropic receptors found at the neuromuscular junction."
    },
    {
        category: "Special Senses",
        question: "The maculae, located within the saccule and utricle of the inner ear, are responsible for detecting:",
        options: ["Rotational acceleration", "Static equilibrium and linear acceleration", "High-frequency sound waves", "Low-frequency sound waves"],
        answer: "Static equilibrium and linear acceleration",
        hint: "They contain hair cells embedded in an otolithic membrane."
    },
    {
        category: "Clinical Findings",
        question: "A client experiences aching pain in their proximal anterior forearm and numbness in their lateral 3.5 digits. The symptoms worsen with resisted forearm pronation. What is the most likely clinical impression?",
        options: ["Carpal Tunnel Syndrome", "Cubital Tunnel Syndrome", "Pronator Teres Syndrome", "Radial Tunnel Syndrome"],
        answer: "Pronator Teres Syndrome",
        hint: "This involves compression of the median nerve between the two heads of a specific forearm muscle, proximal to the wrist."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with unilateral facial paralysis, including the inability to close their eye or wrinkle their forehead. What is the most likely clinical impression?",
        options: ["Trigeminal Neuralgia", "Bell's Palsy", "Horner's Syndrome", "Stroke (Upper Motor Neuron Lesion)"],
        answer: "Bell's Palsy",
        hint: "This involves a lower motor neuron lesion of CN VII. In a stroke, forehead wrinkling is usually spared due to bilateral cortical innervation."
    },
    {
        category: "Brain Anatomy",
        question: "The primary visual cortex is located in which lobe of the cerebrum?",
        options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
        answer: "Occipital lobe",
        hint: "This region surrounds the calcarine sulcus on the medial surface of the hemisphere."
    },
    {
        category: "Special Senses",
        question: "Which avascular structure of the eye changes shape to precisely focus light onto the retina?",
        options: ["Cornea", "Iris", "Lens", "Fovea centralis"],
        answer: "Lens",
        hint: "Its shape is altered by the contraction and relaxation of the ciliary muscle."
    },
    {
        category: "Autonomic Nervous System",
        question: "A sympathetic nervous system response will cause which of the following effects on the pupil?",
        options: ["Miosis (constriction)", "Mydriasis (dilation)", "No change", "Unequal sizes"],
        answer: "Mydriasis (dilation)",
        hint: "This allows more light to enter the eye to improve far vision during a 'fight or flight' scenario."
    },
    {
        category: "Nervous Tissue",
        question: "The rapid, 'leaping' transmission of an action potential along a myelinated axon is termed:",
        options: ["Continuous conduction", "Synaptic transmission", "Saltatory conduction", "Retrograde transport"],
        answer: "Saltatory conduction",
        hint: "The action potential jumps from one Node of Ranvier to the next."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The dorsal column-medial lemniscal (DCML) pathway is responsible for transmitting which types of sensory information?",
        options: ["Pain and temperature", "Unconscious proprioception", "Fine touch, vibration, and conscious proprioception", "Crude touch and pressure"],
        answer: "Fine touch, vibration, and conscious proprioception",
        hint: "This pathway decussates in the medulla oblongata, not at the spinal cord level."
    },
    {
        category: "Clinical Findings",
        question: "A client reports pain and numbness on the medial aspect of their hand after resting their elbows on a desk for prolonged periods. This points to a clinical impression of Cubital Tunnel Syndrome, affecting which nerve?",
        options: ["Median nerve", "Radial nerve", "Ulnar nerve", "Musculocutaneous nerve"],
        answer: "Ulnar nerve",
        hint: "This nerve passes directly behind the medial epicondyle of the humerus."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides the sensation of taste to the anterior two-thirds of the tongue?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN XII (Hypoglossal)"],
        answer: "CN VII (Facial)",
        hint: "The chorda tympani branch of this nerve carries these special sensory fibers."
    },
    {
        category: "Brain Anatomy",
        question: "Cerebrospinal fluid (CSF) is reabsorbed into the venous blood stream via which structures?",
        options: ["Choroid plexuses", "Arachnoid granulations (villi)", "Cerebral aqueduct", "Interventricular foramina"],
        answer: "Arachnoid granulations (villi)",
        hint: "These project into the superior sagittal sinus."
    },
    {
        category: "Special Senses",
        question: "The spiral organ (Organ of Corti), which contains the hair cells responsible for hearing, rests upon which membrane?",
        options: ["Tectorial membrane", "Vestibular membrane", "Tympanic membrane", "Basilar membrane"],
        answer: "Basilar membrane",
        hint: "The vibration of this membrane causes the stereocilia to bend against the rigid membrane above them."
    },
    {
        category: "Autonomic Nervous System",
        question: "The parasympathetic preganglionic fibers of the Vagus nerve (CN X) originate from which brainstem region?",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Spinal cord"],
        answer: "Medulla oblongata",
        hint: "This is the most inferior portion of the brainstem."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The cervical plexus (C1-C4) provides cutaneous innervation to the anterior neck and motor innervation to several neck muscles. What is its most important branch?",
        options: ["Lesser occipital nerve", "Great auricular nerve", "Ansa cervicalis", "Phrenic nerve"],
        answer: "Phrenic nerve",
        hint: "Without this nerve, autonomous breathing is not possible."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment for cervicogenic headaches, you find severe hypertonicity in the suboccipital triangle. Which nerve, piercing the semispinalis capitis, is frequently compressed here, necessitating careful self-care tool considerations?",
        options: ["Lesser occipital nerve", "Greater occipital nerve", "Suprascapular nerve", "Transverse cervical nerve"],
        answer: "Greater occipital nerve",
        hint: "This is the dorsal ramus of C2 and provides sensation to the back of the scalp."
    },
    {
        category: "Cranial Nerves",
        question: "Evaluating a client's ability to resist shoulder elevation (shrugging) tests the motor integrity of which cranial nerve?",
        options: ["CN IX (Glossopharyngeal)", "CN X (Vagus)", "CN XI (Accessory)", "CN XII (Hypoglossal)"],
        answer: "CN XI (Accessory)",
        hint: "This nerve innervates the upper trapezius and sternocleidomastoid."
    },
    {
        category: "Nervous Tissue",
        question: "The critical threshold membrane potential that must be reached to trigger an action potential in a typical neuron is approximately:",
        options: ["-90 mV", "-70 mV", "-55 mV", "+30 mV"],
        answer: "-55 mV",
        hint: "Reaching this voltage causes voltage-gated sodium channels to rapidly open."
    },
    {
        category: "Brain Anatomy",
        question: "Which structure of the limbic system is crucial for the consolidation of short-term memory into long-term memory?",
        options: ["Amygdala", "Hippocampus", "Cingulate gyrus", "Fornix"],
        answer: "Hippocampus",
        hint: "Its name is derived from the Greek word for 'seahorse' due to its shape."
    },
    {
        category: "Special Senses",
        question: "The 'blind spot' of the eye, where no photoreceptors are present, corresponds to which anatomical structure?",
        options: ["Fovea centralis", "Macula lutea", "Optic disc", "Ora serrata"],
        answer: "Optic disc",
        hint: "This is the site where the optic nerve exits and retinal blood vessels enter."
    },
    {
        category: "Clinical Findings",
        question: "Tarsal Tunnel Syndrome involves the compression of which nerve posterior to the medial malleolus?",
        options: ["Deep fibular nerve", "Superficial fibular nerve", "Tibial nerve", "Sural nerve"],
        answer: "Tibial nerve",
        hint: "This nerve travels alongside the posterior tibial artery beneath the flexor retinaculum."
    },
    {
        category: "Autonomic Nervous System",
        question: "In the male reproductive system, which autonomic division is responsible for achieving an erection?",
        options: ["Sympathetic", "Parasympathetic", "Somatic", "Enteric"],
        answer: "Parasympathetic",
        hint: "Remember the mnemonic: 'Point' (Parasympathetic) and 'Shoot' (Sympathetic)."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "Where do the second-order neurons of the spinothalamic tract decussate (cross over)?",
        options: ["Medulla oblongata", "Midbrain", "At the spinal cord level of entry", "Thalamus"],
        answer: "At the spinal cord level of entry",
        hint: "They cross over through the anterior white commissure before ascending to the brain."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides motor innervation exclusively to the lateral rectus muscle of the eye?",
        options: ["CN III (Oculomotor)", "CN IV (Trochlear)", "CN V (Trigeminal)", "CN VI (Abducens)"],
        answer: "CN VI (Abducens)",
        hint: "The action of this muscle abducts the eye (moves it laterally away from the midline)."
    },
    {
        category: "Nervous Tissue",
        question: "Which glial cells are characterized by their star shape and play a vital role in maintaining the blood-brain barrier?",
        options: ["Oligodendrocytes", "Microglia", "Ependymal cells", "Astrocytes"],
        answer: "Astrocytes",
        hint: "They are the most abundant glial cells in the CNS and regulate the chemical environment around neurons."
    },
    {
        category: "Brain Anatomy",
        question: "The superior colliculi, located on the posterior aspect of the midbrain, are primarily involved in:",
        options: ["Auditory reflexes", "Visual reflexes", "Motor coordination", "Regulating sleep"],
        answer: "Visual reflexes",
        hint: "They help coordinate head and eye movements to visually track a moving object."
    },
    {
        category: "Clinical Findings",
        question: "A client exhibits a 'steppage gait' due to an inability to dorsiflex the foot. This clinical impression is most likely caused by damage to which nerve?",
        options: ["Deep fibular (peroneal) nerve", "Superficial fibular (peroneal) nerve", "Tibial nerve", "Saphenous nerve"],
        answer: "Deep fibular (peroneal) nerve",
        hint: "This nerve innervates the anterior compartment of the leg."
    },
    {
        category: "Special Senses",
        question: "The axons of the olfactory receptor cells pass through the foramina of which bony structure to reach the olfactory bulb?",
        options: ["Sella turcica", "Crista galli", "Cribriform plate of the ethmoid bone", "Superior orbital fissure"],
        answer: "Cribriform plate of the ethmoid bone",
        hint: "Trauma to this specific area of the skull can result in anosmia (loss of the sense of smell)."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with 'winging' of the scapula, where the medial border becomes prominent, especially when pushing against a wall. This clinical finding indicates a lesion of which nerve?",
        options: ["Suprascapular nerve", "Thoracodorsal nerve", "Long thoracic nerve", "Dorsal scapular nerve"],
        answer: "Long thoracic nerve",
        hint: "This nerve innervates the serratus anterior and is vulnerable to injury due to its superficial course along the lateral thoracic wall."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "When performing a neurological assessment, testing the strength of elbow extension and wrist flexion primarily evaluates which myotome?",
        options: ["C5", "C6", "C7", "C8"],
        answer: "C7",
        hint: "This nerve root also provides the sensory dermatome for the middle finger."
    },
    {
        category: "Clinical Findings",
        question: "A traction injury during birth or severe upward pull of the arm can damage the inferior trunk (C8-T1) of the brachial plexus. This results in a 'claw hand' deformity, a clinical impression known as:",
        options: ["Erb's Palsy", "Klumpke's Palsy", "Saturday Night Palsy", "Thoracic Outlet Syndrome"],
        answer: "Klumpke's Palsy",
        hint: "This affects the intrinsic muscles of the hand supplied primarily by the ulnar nerve."
    },
    {
        category: "Brain Anatomy",
        question: "Which region of the cerebral cortex is responsible for the motor aspects of speech production, where a lesion results in expressive (non-fluent) aphasia?",
        options: ["Wernicke's area", "Broca's area", "Primary motor cortex", "Prefrontal cortex"],
        answer: "Broca's area",
        hint: "This area is typically located in the left frontal lobe, superior to the lateral sulcus."
    },
    {
        category: "Cranial Nerves",
        question: "The Mandibular division (V3) of the Trigeminal nerve passes through which opening in the skull?",
        options: ["Foramen rotundum", "Foramen ovale", "Superior orbital fissure", "Jugular foramen"],
        answer: "Foramen ovale",
        hint: "Remember the mnemonic for the branches of CN V exiting the skull: Standing Room Only (SRO)."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The triceps brachii deep tendon reflex is utilized to evaluate the integrity of which primary spinal nerve root?",
        options: ["C5", "C6", "C7", "T1"],
        answer: "C7",
        hint: "This is the primary nerve root for the middle trunk of the brachial plexus."
    },
    {
        category: "Clinical Findings",
        question: "A client reports pain and numbness isolated to the medial side of their hand, the pinky finger, and the medial half of the ring finger. Which dermatome is most likely affected?",
        options: ["C6", "C7", "C8", "T1"],
        answer: "C8",
        hint: "This sensory distribution aligns precisely with the sensory territory of the ulnar nerve in the hand."
    },
    {
        category: "Nervous Tissue",
        question: "The physical gap between a synaptic terminal and the receiving cell membrane is called the:",
        options: ["Synaptic vesicle", "Synaptic cleft", "Axon hillock", "Node of Ranvier"],
        answer: "Synaptic cleft",
        hint: "Neurotransmitters must diffuse across this space to bind to postsynaptic receptors."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which of the following describes the anatomical pathway of sympathetic preganglionic fibers exiting the spinal nerve to enter the sympathetic chain ganglion?",
        options: ["Gray rami communicantes", "White rami communicantes", "Dorsal root", "Ventral ramus"],
        answer: "White rami communicantes",
        hint: "They appear this color because these preganglionic fibers are myelinated."
    },
    {
        category: "Special Senses",
        question: "The tough, opaque, outer fibrous layer of the eye that provides shape and protects internal parts is the:",
        options: ["Cornea", "Choroid", "Retina", "Sclera"],
        answer: "Sclera",
        hint: "This is commonly referred to as the 'white of the eye'."
    },
    {
        category: "Clinical Findings",
        question: "Following a fracture of the surgical neck of the humerus, a client cannot abduct their arm beyond 15 degrees and has sensory loss over the lateral shoulder. Which nerve is likely compromised?",
        options: ["Radial nerve", "Axillary nerve", "Suprascapular nerve", "Musculocutaneous nerve"],
        answer: "Axillary nerve",
        hint: "This nerve travels through the quadrangular space to innervate the deltoid and teres minor."
    },
    {
        category: "Brain Anatomy",
        question: "Which structure in the limbic system is primarily associated with processing emotions, particularly fear and the 'fight or flight' response?",
        options: ["Hippocampus", "Amygdala", "Fornix", "Cingulate gyrus"],
        answer: "Amygdala",
        hint: "This almond-shaped mass of nuclei is located deep within the temporal lobe."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "In the cross-section of the spinal cord, the posterior (dorsal) horns of the gray matter contain:",
        options: ["Somatic motor nuclei", "Visceral motor nuclei", "Somatic and visceral sensory nuclei", "Sympathetic preganglionic cell bodies"],
        answer: "Somatic and visceral sensory nuclei",
        hint: "This region receives incoming afferent information from the periphery."
    },
    {
        category: "Clinical Findings",
        question: "A client experiences sharp, burning pain between the third and fourth metatarsal heads, exacerbated by tight footwear. What is the most likely clinical impression?",
        options: ["Plantar fasciitis", "Tarsal Tunnel Syndrome", "Morton's Neuroma", "Sural nerve entrapment"],
        answer: "Morton's Neuroma",
        hint: "This is a benign enlargement of an interdigital nerve, commonly caused by mechanical compression."
    },
    {
        category: "Cranial Nerves",
        question: "The Trochlear nerve (CN IV) provides motor innervation to which extraocular muscle?",
        options: ["Superior rectus", "Lateral rectus", "Superior oblique", "Inferior oblique"],
        answer: "Superior oblique",
        hint: "This muscle passes through a pulley-like structure (trochlea) to depress and intort the eye."
    },
    {
        category: "Autonomic Nervous System",
        question: "Stimulation of the vagus nerve (parasympathetic) will have what effect on the respiratory system?",
        options: ["Bronchodilation", "Bronchoconstriction", "Increased respiratory rate", "Decreased mucus secretion"],
        answer: "Bronchoconstriction",
        hint: "During 'rest and digest', maximum airway diameter is not required."
    },
    {
        category: "Brain Anatomy",
        question: "The bulging region of the brainstem that acts as a bridge connecting the cerebellum to the cerebrum and lower brainstem is the:",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Thalamus"],
        answer: "Pons",
        hint: "It also contains pneumotaxic and apneustic centers that help regulate breathing."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with weak elbow flexion and decreased sensation along the lateral aspect of the forearm. These clinical findings suggest a lesion of which nerve?",
        options: ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous nerve"],
        answer: "Musculocutaneous nerve",
        hint: "This nerve pierces the coracobrachialis muscle and innervates the biceps brachii and brachialis."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The brachioradialis deep tendon reflex is primarily used to evaluate the integrity of which spinal segment?",
        options: ["C5", "C6", "C7", "C8"],
        answer: "C6",
        hint: "This nerve root also supplies the dermatome for the thumb and lateral forearm."
    },
    {
        category: "Special Senses",
        question: "The tympanic membrane separates which two regions of the ear?",
        options: ["External ear and middle ear", "Middle ear and inner ear", "Inner ear and cochlea", "Auricle and external acoustic meatus"],
        answer: "External ear and middle ear",
        hint: "Sound waves directly strike this structure, causing it to vibrate."
    },
    {
        category: "Clinical Findings",
        question: "A client reports severe shooting pain down the back of their leg, extending below the knee. While Piriformis Syndrome is a potential cause, if the pain is caused by a herniated lumbar disc compressing the nerve root, the correct clinical impression is:",
        options: ["True Sciatica (Lumbar Radiculopathy)", "Cauda Equina Syndrome", "Meralgia Paresthetica", "Femoral Neuropathy"],
        answer: "True Sciatica (Lumbar Radiculopathy)",
        hint: "This distinguishes a central nerve root compression from a peripheral entrapment."
    },
    {
        category: "Nervous Tissue",
        question: "Which of the following accurately describes the absolute refractory period of an action potential?",
        options: ["A second action potential can be initiated if the stimulus is exceptionally strong", "The neuron cannot respond to another stimulus, no matter how strong", "The cell is hyperpolarized below resting potential", "Sodium channels are resetting from their inactive state"],
        answer: "The neuron cannot respond to another stimulus, no matter how strong",
        hint: "This occurs because the voltage-gated sodium channels are already open or are in their inactivated state."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The lumbar plexus is formed by the anterior (ventral) rami of which spinal nerves?",
        options: ["T12 - L3", "L1 - L4", "L4 - S4", "S1 - S4"],
        answer: "L1 - L4",
        hint: "The major branches of this plexus include the femoral and obturator nerves."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment, a client with a history of diabetes reports 'glove and stocking' numbness and tingling in their distal extremities. The most likely clinical impression is:",
        options: ["Peripheral Polyneuropathy", "Multiple Sclerosis", "Amyotrophic Lateral Sclerosis (ALS)", "Guillain-Barré Syndrome"],
        answer: "Peripheral Polyneuropathy",
        hint: "This systemic condition typically affects the longest nerve fibers first, starting symmetrically in the feet and hands."
    },
    {
        category: "Cranial Nerves",
        question: "The sensory limb of the pupillary light reflex (sensing the bright light) is mediated by which cranial nerve?",
        options: ["CN II (Optic)", "CN III (Oculomotor)", "CN IV (Trochlear)", "CN VI (Abducens)"],
        answer: "CN II (Optic)",
        hint: "This nerve carries visual information from the retina to the brain."
    },
    {
        category: "Cranial Nerves",
        question: "When evaluating the motor function of the Facial nerve (CN VII), which action would you ask the client to perform?",
        options: ["Shrug their shoulders against resistance", "Protrude their tongue and move it side to side", "Puff out their cheeks and tightly close their eyes", "Clench their jaw while you palpate the masseter"],
        answer: "Puff out their cheeks and tightly close their eyes",
        hint: "This nerve innervates the muscles of facial expression, including the buccinator and orbicularis oculi."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment, you suspect an ulnar nerve entrapment. You ask the client to grip a piece of paper between their thumb and index finger while you try to pull it away. The client's thumb flexes at the interphalangeal joint to compensate for adductor pollicis weakness. What is the name of this clinical finding?",
        options: ["Tinel's Sign", "Froment's Sign", "Phalen's Sign", "Babinski Sign"],
        answer: "Froment's Sign",
        hint: "This tests the motor innervation of the adductor pollicis, which is supplied by the ulnar nerve, not the median nerve."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which division of the autonomic nervous system stimulates the contraction of the detrusor muscle and the relaxation of the internal urethral sphincter, promoting urination?",
        options: ["Sympathetic division", "Parasympathetic division", "Somatic nervous system", "Enteric nervous system"],
        answer: "Parasympathetic division",
        hint: "This action aligns with the 'rest and digest' (and eliminate) functions of this division."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "In Brown-Séquard syndrome (a hemisection of the spinal cord), how does the loss of pain and temperature sensation present inferior to the level of the lesion?",
        options: ["Contralateral loss", "Ipsilateral loss", "Bilateral loss", "No loss of pain sensation"],
        answer: "Contralateral loss",
        hint: "Because the spinothalamic tract decussates at the level of entry in the spinal cord, damage to one side affects the opposite side of the body below the lesion."
    },
    {
        category: "Brain Anatomy",
        question: "Cerebrospinal fluid (CSF) flows from the third ventricle to the fourth ventricle via which anatomical passageway?",
        options: ["Interventricular foramina (of Monro)", "Cerebral aqueduct (of Sylvius)", "Central canal", "Median aperture (of Magendie)"],
        answer: "Cerebral aqueduct (of Sylvius)",
        hint: "This narrow channel passes through the midbrain."
    },
    {
        category: "Special Senses",
        question: "Which structure connects the middle ear cavity to the nasopharynx, allowing for the equalization of pressure on both sides of the tympanic membrane?",
        options: ["External acoustic meatus", "Pharyngotympanic (Eustachian) tube", "Cochlear duct", "Semicircular canal"],
        answer: "Pharyngotympanic (Eustachian) tube",
        hint: "This tube is usually closed but opens during swallowing or yawning."
    },
    {
        category: "Clinical Findings",
        question: "To assess for median nerve compression at the wrist, a therapist asks the client to press the dorsal aspects of their hands together with wrists fully flexed for 60 seconds. Reproduction of numbness and tingling is a positive finding for which orthopedic test?",
        options: ["Tinel's Sign", "Phalen's Test", "Finkelstein's Test", "Allen's Test"],
        answer: "Phalen's Test",
        hint: "This posture actively compresses the space within the carpal tunnel."
    },
    {
        category: "Nervous Tissue",
        question: "An Excitatory Postsynaptic Potential (EPSP) causes the localized postsynaptic membrane to undergo:",
        options: ["Hyperpolarization", "Depolarization", "Repolarization", "No change in resting potential"],
        answer: "Depolarization",
        hint: "This brings the membrane potential closer to the threshold necessary to fire an action potential."
    },
    {
        category: "Cranial Nerves",
        question: "While the Glossopharyngeal nerve (CN IX) provides the sensory (afferent) limb of the gag reflex, which nerve provides the motor (efferent) limb responsible for the muscular contraction?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN X (Vagus)", "CN XII (Hypoglossal)"],
        answer: "CN X (Vagus)",
        hint: "This nerve innervates the majority of the muscles of the pharynx and soft palate."
    },
    {
        category: "Clinical Findings",
        question: "A client falls asleep with their arm draped over the back of a chair, compressing a nerve in the axillary/spiral groove region. They wake up with an inability to extend their wrist. What is the most likely clinical impression?",
        options: ["Saturday Night Palsy (Radial nerve)", "Honeymoon Palsy (Posterior interosseous nerve)", "Crutch Palsy (Axillary nerve)", "Ape Hand (Median nerve)"],
        answer: "Saturday Night Palsy (Radial nerve)",
        hint: "This specific mechanism of injury is classic for high radial nerve compression."
    },
    {
        category: "Brain Anatomy",
        question: "On the motor homunculus (located on the precentral gyrus), which area of the body has the largest proportional representation due to the complexity of its fine motor movements?",
        options: ["The trunk", "The legs and feet", "The face and hands", "The proximal arms"],
        answer: "The face and hands",
        hint: "Cortical space is allocated based on the precision of motor control required, not the physical size of the body part."
    },
    {
        category: "Autonomic Nervous System",
        question: "Sympathetic preganglionic fibers that innervate the abdominal viscera do not synapse in the sympathetic chain. Instead, they pass through to synapse in which specific structures?",
        options: ["Paravertebral ganglia", "Prevertebral (collateral) ganglia", "Terminal ganglia", "Intramural ganglia"],
        answer: "Prevertebral (collateral) ganglia",
        hint: "Examples include the celiac and superior mesenteric ganglia, located anterior to the vertebral column."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "Which of the following clinical findings is characteristic of an Upper Motor Neuron (UMN) lesion, distinguishing it from a Lower Motor Neuron (LMN) lesion?",
        options: ["Severe muscle atrophy", "Flaccid paralysis", "Hyperreflexia and spasticity", "Fasciculations (muscle twitches)"],
        answer: "Hyperreflexia and spasticity",
        hint: "Because the inhibitory influence from the brain is lost, the intact spinal reflex arcs become hyperactive."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment for lumbar radiculopathy, you passively elevate the client's supine, extended leg. Reproduction of sharp, shooting pain down the posterior thigh and leg between 35 and 70 degrees is a positive finding for which test?",
        options: ["Kernig's Test", "Slump Test", "Straight Leg Raise (SLR) Test", "Patrick's (FABER) Test"],
        answer: "Straight Leg Raise (SLR) Test",
        hint: "This test places tension directly on the sciatic nerve and the lower lumbar nerve roots."
    },
    {
        category: "Special Senses",
        question: "In the visual pathway, fibers from the medial (nasal) half of each retina cross over to the opposite side of the brain at which anatomical structure?",
        options: ["Optic nerve", "Optic chiasm", "Optic tract", "Lateral geniculate nucleus"],
        answer: "Optic chiasm",
        hint: "This partial decussation ensures that the left visual field is processed by the right hemisphere, and vice versa."
    },
    {
        category: "Nervous Tissue",
        question: "In the Peripheral Nervous System (PNS), if a nerve fiber is severed, it has the potential to regenerate. Which cells form a regeneration tube to guide the growing axon back to its target?",
        options: ["Oligodendrocytes", "Astrocytes", "Schwann cells", "Microglia"],
        answer: "Schwann cells",
        hint: "Unlike in the CNS, these cells promote, rather than inhibit, axon regeneration."
    },
    {
        category: "Clinical Findings",
        question: "To test the functional integrity of the deep fibular (peroneal) nerve, you would assess the client's ability to resist against which specific motion?",
        options: ["Plantarflexion and inversion", "Plantarflexion and eversion", "Dorsiflexion and inversion", "Dorsiflexion and eversion"],
        answer: "Dorsiflexion and inversion",
        hint: "This tests the primary action of the tibialis anterior muscle."
    },
    {
        category: "Brain Anatomy",
        question: "Which bundle of white matter fibers directly connects Wernicke's area (language comprehension) to Broca's area (language production)?",
        options: ["Corpus callosum", "Arcuate fasciculus", "Internal capsule", "Fornix"],
        answer: "Arcuate fasciculus",
        hint: "Damage to this tract results in conduction aphasia, where a patient can understand and speak but cannot accurately repeat words."
    },
    {
        category: "Cranial Nerves",
        question: "Asking a client to follow your finger visually in an 'H-pattern' without moving their head evaluates the function of which group of cranial nerves?",
        options: ["CN II, III, and IV", "CN III, IV, and VI", "CN II, IV, and VI", "CN III, V, and VII"],
        answer: "CN III, IV, and VI",
        hint: "This test assesses all the motor nerves that control the extraocular muscles."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which type of adrenergic receptor is primarily found in the heart, where its stimulation by norepinephrine results in an increased heart rate and contractility?",
        options: ["Alpha-1", "Alpha-2", "Beta-1", "Beta-2"],
        answer: "Beta-1",
        hint: "Remember the clinical mnemonic: You have '1' heart and '2' lungs."
    },
    {
        category: "Clinical Findings",
        question: "You are assessing a client for Thoracic Outlet Syndrome. You locate their radial pulse, passively extend and externally rotate their arm, and ask them to actively rotate and extend their head toward the affected side. A diminished pulse indicates compression by the anterior and middle scalenes. What is this test called?",
        options: ["Wright's Hyperabduction Test", "Adson's Test", "Eden's (Military Brace) Test", "Roos Test"],
        answer: "Adson's Test",
        hint: "This specifically tensions the scalene triangle, narrowing the space for the brachial plexus and subclavian artery."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The majority of the fibers in the descending corticospinal tract cross over to the contralateral side of the body in which region of the central nervous system?",
        options: ["Midbrain", "Medullary pyramids", "Cervical spinal cord", "Pons"],
        answer: "Medullary pyramids",
        hint: "This decussation is why the left motor cortex controls the right side of the body."
    },
    {
        category: "Brain Anatomy",
        question: "The large venous channel located within the longitudinal fissure, between the two layers of the cranial dura mater, which drains blood and CSF away from the brain, is the:",
        options: ["Straight sinus", "Transverse sinus", "Superior sagittal sinus", "Cavernous sinus"],
        answer: "Superior sagittal sinus",
        hint: "Arachnoid granulations protrude directly into this specific structure."
    },
    {
        category: "Clinical Findings",
        question: "To evaluate the motor branch of the Mandibular division (V3) of the Trigeminal nerve, you should instruct the client to:",
        options: ["Smile widely", "Clench their teeth while you palpate the masseter and temporalis", "Swallow a sip of water", "Stick their tongue straight out"],
        answer: "Clench their teeth while you palpate the masseter and temporalis",
        hint: "This division is the only part of CN V that carries motor fibers, specifically for the muscles of mastication."
    },
    {
        category: "Special Senses",
        question: "Within the cochlea, the specific sensory structures that transduce mechanical sound waves into electrical nerve impulses are the:",
        options: ["Otoliths", "Hair cells", "Supporting cells", "Ganglion cells"],
        answer: "Hair cells",
        hint: "The bending of their stereocilia opens mechanically-gated ion channels."
    },
    {
        category: "Nervous Tissue",
        question: "The resting membrane potential of a neuron is primarily maintained by the active transport of which ions?",
        options: ["Pumping 3 Na+ out and 2 K+ in", "Pumping 2 Na+ out and 3 K+ in", "Pumping 3 Ca2+ out and 2 Na+ in", "Pumping Cl- in and Na+ out"],
        answer: "Pumping 3 Na+ out and 2 K+ in",
        hint: "This is the function of the Sodium-Potassium (Na+/K+) ATPase pump, which requires ATP to work against the concentration gradient."
    },
    {
        category: "Brain Anatomy",
        question: "The dural venous sinuses, which collect blood and cerebrospinal fluid from the brain, ultimately empty into which major vessel?",
        options: ["External jugular vein", "Internal jugular vein", "Superior vena cava", "Vertebral vein"],
        answer: "Internal jugular vein",
        hint: "This large vein exits the skull through the jugular foramen alongside cranial nerves IX, X, and XI."
    },
    {
        category: "Cranial Nerves",
        question: "The Vagus nerve (CN X) exits the cranial cavity through which anatomical opening?",
        options: ["Foramen magnum", "Jugular foramen", "Superior orbital fissure", "Hypoglossal canal"],
        answer: "Jugular foramen",
        hint: "It shares this exit route with the Glossopharyngeal (CN IX) and Accessory (CN XI) nerves."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The delicate strand of fibrous tissue (pia mater) that anchors the spinal cord to the coccyx is called the:",
        options: ["Conus medullaris", "Cauda equina", "Filum terminale", "Denticulate ligament"],
        answer: "Filum terminale",
        hint: "This structure provides longitudinal support to the spinal cord within the vertebral canal."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with 'foot drop' and sensory loss over the dorsum of the foot, but the web space between the first and second toes has intact sensation. The clinical impression points to a lesion of the:",
        options: ["Tibial nerve", "Superficial fibular (peroneal) nerve", "Deep fibular (peroneal) nerve", "Common fibular (peroneal) nerve"],
        answer: "Superficial fibular (peroneal) nerve",
        hint: "The deep branch specifically innervates the first web space, so its sparing isolates the superficial branch."
    },
    {
        category: "Autonomic Nervous System",
        question: "Parasympathetic ganglia are typically located very close to, or entirely within, the walls of their target organs. These are collectively referred to as:",
        options: ["Paravertebral ganglia", "Prevertebral ganglia", "Terminal (or intramural) ganglia", "Dorsal root ganglia"],
        answer: "Terminal (or intramural) ganglia",
        hint: "Because of this location, parasympathetic postganglionic fibers are characteristically very short."
    },
    {
        category: "Special Senses",
        question: "The aqueous humor of the eye is continuously produced by the ciliary processes and drains into the venous system via the:",
        options: ["Vitreous chamber", "Canal of Schlemm (scleral venous sinus)", "Nasolacrimal duct", "Optic disc"],
        answer: "Canal of Schlemm (scleral venous sinus)",
        hint: "A blockage in this drainage pathway leads to increased intraocular pressure, known as glaucoma."
    },
    {
        category: "Clinical Findings",
        question: "To differentiate between Pronator Teres Syndrome and Carpal Tunnel Syndrome (both involving the median nerve), which specific clinical finding would only be present in Pronator Teres Syndrome?",
        options: ["Tinel's sign at the wrist", "Weakness of the thenar muscles", "Loss of sensation over the thenar eminence", "Numbness in the index and middle fingers"],
        answer: "Loss of sensation over the thenar eminence",
        hint: "The palmar cutaneous branch of the median nerve branches off proximal to the carpal tunnel, meaning it is spared in Carpal Tunnel Syndrome but affected higher up in the forearm."
    },
    {
        category: "Nervous Tissue",
        question: "During the relative refractory period of an action potential, a neuron can only fire a second action potential if the stimulus is unusually strong. This period corresponds primarily to the status of which ion channels?",
        options: ["Voltage-gated sodium channels are locked closed", "Voltage-gated potassium channels remain open", "Ligand-gated sodium channels are depleted", "Calcium channels are hyperactive"],
        answer: "Voltage-gated potassium channels remain open",
        hint: "The continued efflux of these ions keeps the membrane hyperpolarized, requiring a larger-than-normal depolarizing stimulus to reach threshold."
    },
    {
        category: "Brain Anatomy",
        question: "The thin, membrane-like partition that separates the two lateral ventricles in the midline of the brain is the:",
        options: ["Corpus callosum", "Septum pellucidum", "Falx cerebri", "Tentorium cerebelli"],
        answer: "Septum pellucidum",
        hint: "It stretches vertically between the corpus callosum and the fornix."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The dorsal (posterior) roots of the spinal cord are exclusively composed of which type of nerve fibers?",
        options: ["Efferent (Motor)", "Afferent (Sensory)", "Sympathetic preganglionic", "Mixed motor and sensory"],
        answer: "Afferent (Sensory)",
        hint: "If this root is severed, the client will experience complete anesthesia in the corresponding dermatome, but retain motor function."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides the parasympathetic fibers that control the shape of the lens (accommodation) and pupil constriction?",
        options: ["CN II (Optic)", "CN III (Oculomotor)", "CN VII (Facial)", "CN IX (Glossopharyngeal)"],
        answer: "CN III (Oculomotor)",
        hint: "These preganglionic fibers synapse in the ciliary ganglion."
    },
    {
        category: "Clinical Findings",
        question: "A client reports pain and numbness in the palm of their hand and the first three digits. If manual assessment reveals hypertonicity in the forearm flexors, what soft tissue structure should you evaluate before applying self-care tool considerations for Carpal Tunnel Syndrome?",
        options: ["Extensor retinaculum", "Flexor retinaculum (Transverse carpal ligament)", "Palmar aponeurosis", "Bicipital aponeurosis"],
        answer: "Flexor retinaculum (Transverse carpal ligament)",
        hint: "This ligament forms the roof of the carpal tunnel and directly compresses the median nerve when inflamed."
    },
    {
        category: "Autonomic Nervous System",
        question: "Which neurotransmitter is universally released by all preganglionic neurons in both the sympathetic and parasympathetic divisions?",
        options: ["Norepinephrine", "Epinephrine", "Acetylcholine", "Dopamine"],
        answer: "Acetylcholine",
        hint: "This neurotransmitter binds to nicotinic receptors on the postganglionic cell bodies."
    },
    {
        category: "Special Senses",
        question: "The gustatory (taste) pathway relies on three cranial nerves to carry information to the brain. Which of the following is NOT one of them?",
        options: ["CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN X (Vagus)", "CN XII (Hypoglossal)"],
        answer: "CN XII (Hypoglossal)",
        hint: "This nerve provides strictly motor control to the tongue, not sensory or taste information."
    },
    {
        category: "Brain Anatomy",
        question: "The central sulcus of the cerebral cortex is a key landmark separating which two lobes?",
        options: ["Frontal and Parietal", "Parietal and Occipital", "Frontal and Temporal", "Temporal and Parietal"],
        answer: "Frontal and Parietal",
        hint: "It separates the primary motor cortex (anteriorly) from the primary somatosensory cortex (posteriorly)."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with ptosis (drooping eyelid), a laterally deviated and depressed eye, and a persistently dilated pupil. These clinical findings strongly suggest a lesion of the:",
        options: ["Optic nerve (CN II)", "Oculomotor nerve (CN III)", "Trochlear nerve (CN IV)", "Abducens nerve (CN VI)"],
        answer: "Oculomotor nerve (CN III)",
        hint: "Because this nerve supplies four of the extraocular muscles, plus the levator palpebrae superioris and the pupillary sphincter, its loss causes a 'down and out' gaze and an unresponsive pupil."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "Which descending motor tract is primarily responsible for the subconscious regulation of balance, muscle tone, and posture in response to inner ear signals?",
        options: ["Corticospinal tract", "Vestibulospinal tract", "Tectospinal tract", "Rubrospinal tract"],
        answer: "Vestibulospinal tract",
        hint: "These fibers originate from nuclei in the pons and medulla that receive direct input from cranial nerve VIII."
    },
    {
        category: "Cranial Nerves",
        question: "The trigeminal ganglion (Gasserian ganglion), which houses the cell bodies of the sensory fibers for the face, is located in the:",
        options: ["Middle cranial fossa", "Anterior cranial fossa", "Posterior cranial fossa", "Pterygopalatine fossa"],
        answer: "Middle cranial fossa",
        hint: "It sits in a small depression on the petrous portion of the temporal bone known as Meckel's cave."
    },
    {
        category: "Nervous Tissue",
        question: "In the peripheral nervous system, the outermost layer of a Schwann cell, which contains its cytoplasm and nucleus, is called the:",
        options: ["Endoneurium", "Perineurium", "Neurilemma", "Axolemma"],
        answer: "Neurilemma",
        hint: "This layer is crucial for the regeneration of damaged peripheral nerve fibers."
    },
    {
        category: "Clinical Findings",
        question: "A client wears a tight wristwatch or handcuffs, leading to localized numbness on the dorsum of their thumb and index finger. This transient nerve entrapment (Wartenberg's Syndrome) affects which structure?",
        options: ["Deep radial nerve", "Superficial branch of the radial nerve", "Dorsal cutaneous branch of the ulnar nerve", "Median nerve"],
        answer: "Superficial branch of the radial nerve",
        hint: "This branch provides purely sensory innervation to the lateral dorsum of the hand."
    },
    {
        category: "Autonomic Nervous System",
        question: "The concept of 'dual innervation' refers to the fact that most visceral organs:",
        options: ["Have both somatic and autonomic control", "Are supplied by both the left and right sympathetic chains", "Receive input from both the sympathetic and parasympathetic divisions", "Can secrete both neurotransmitters and hormones"],
        answer: "Receive input from both the sympathetic and parasympathetic divisions",
        hint: "These two divisions typically exert antagonistic (opposing) effects on the target organ."
    },
    {
        category: "Brain Anatomy",
        question: "The primary auditory cortex, responsible for the conscious perception of sound, is located in which region?",
        options: ["Superior temporal gyrus", "Postcentral gyrus", "Cingulate gyrus", "Prefrontal cortex"],
        answer: "Superior temporal gyrus",
        hint: "This area is situated in the temporal lobe, just inferior to the lateral sulcus."
    },
    {
        category: "Special Senses",
        question: "The fovea centralis, the area of highest visual acuity in the retina, contains:",
        options: ["Only rods", "Only cones", "An equal mixture of rods and cones", "No photoreceptors"],
        answer: "Only cones",
        hint: "This is the structural reason why looking directly at a brightly lit object provides the sharpest, most colorful image."
    },
    {
        category: "Clinical Findings",
        question: "While assessing a client with chronic neck pain, you note diminished sensation over the C5 dermatome and weakness in shoulder abduction. A positive Spurling's Test confirms your clinical impression of:",
        options: ["Cervical radiculopathy", "Thoracic outlet syndrome", "Brachial plexus traction injury", "Spinal cord compression (Myelopathy)"],
        answer: "Cervical radiculopathy",
        hint: "Spurling's Test actively compresses the intervertebral foramen, reproducing symptoms of a compressed nerve root."
    },
   {
        category: "Spinal Cord & Tracts",
        question: "During a neurological examination, you test the patellar reflex and grade the response as a '2+'. What does this grade indicate?",
        options: ["Areflexia (no response)", "Hyporeflexia (sluggish response)", "Normal, expected response", "Hyperreflexia (brisk response)"],
        answer: "Normal, expected response",
        hint: "The standard reflex grading scale ranges from 0 to 4+."
    },
    {
        category: "Brain Anatomy",
        question: "The Circle of Willis is an important arterial anastomosis at the base of the brain. Which artery connects the left and right anterior cerebral arteries?",
        options: ["Posterior communicating artery", "Anterior communicating artery", "Middle cerebral artery", "Basilar artery"],
        answer: "Anterior communicating artery",
        hint: "This short vessel acts as a critical bridge between the left and right anterior circulations."
    },
    {
        category: "Clinical Findings",
        question: "When evaluating a client's soft palate, you ask them to say 'Ahhh.' You note that the uvula deviates toward the unaffected side. This clinical finding suggests a unilateral lesion of which cranial nerve?",
        options: ["CN IX (Glossopharyngeal)", "CN X (Vagus)", "CN XI (Accessory)", "CN XII (Hypoglossal)"],
        answer: "CN X (Vagus)",
        hint: "The functioning muscles on the healthy side pull the uvula away from the paralyzed side."
    },
    {
        category: "Nervous Tissue",
        question: "Once acetylcholine (ACh) binds to its receptor at the synaptic cleft, how is its action rapidly terminated to prevent continuous stimulation?",
        options: ["Reuptake into the presynaptic terminal", "Diffusion away from the synapse", "Degradation by the enzyme acetylcholinesterase (AChE)", "Absorption by surrounding astrocytes"],
        answer: "Degradation by the enzyme acetylcholinesterase (AChE)",
        hint: "This enzyme breaks the neurotransmitter down into acetate and choline."
    },
    {
        category: "Autonomic Nervous System",
        question: "The phenomenon of 'referred pain' (e.g., experiencing left arm pain during a myocardial infarction) occurs primarily because:",
        options: ["Visceral and somatic sensory fibers converge on the same spinothalamic tract neurons", "Sympathetic preganglionic fibers misfire", "Efferent motor pathways are overly stimulated", "Dorsal root ganglia become physically compressed"],
        answer: "Visceral and somatic sensory fibers converge on the same spinothalamic tract neurons",
        hint: "The brain interprets the incoming visceral pain signal as originating from the more commonly stimulated somatic dermatome."
    },
    {
        category: "Special Senses",
        question: "The crista ampullaris, a sensory organ located within the semicircular canals, is specifically designed to detect:",
        options: ["Linear acceleration", "Static equilibrium", "Dynamic equilibrium (rotational movement)", "High-frequency auditory tones"],
        answer: "Dynamic equilibrium (rotational movement)",
        hint: "The fluid (endolymph) within the canals bends the cupula of this structure when the head rotates."
    },
    {
        category: "Clinical Findings",
        question: "A client reports severe shooting pain into their right thumb, index, and middle fingers. Before finalizing a clinical impression of Carpal Tunnel Syndrome, you assess the cervical spine and find significant C6 nerve root compression. This scenario, where a nerve is compressed in two separate locations, is known as:",
        options: ["Double Crush Syndrome", "Tinel's Phenomenon", "Wallerian Degeneration", "Referred Neuropathy"],
        answer: "Double Crush Syndrome",
        hint: "A proximal compression makes the distal portion of the nerve more susceptible to injury."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "For rapid clinical mapping of dermatomes, the sensory innervation around the level of the umbilicus (belly button) is supplied by which nerve root?",
        options: ["T4", "T7", "T10", "L1"],
        answer: "T10",
        hint: "Remember the mnemonic: 'T-10 for the belly ben-ten (button).'"
    },
    {
        category: "Brain Anatomy",
        question: "Which of the following structures acts as the 'filter' that helps create the blood-brain barrier, heavily restricting the passage of substances from the blood into the CNS?",
        options: ["Ependymal cell cilia", "Astrocyte perivascular feet and endothelial tight junctions", "Microglial phagosomes", "Choroid plexus tight junctions"],
        answer: "Astrocyte perivascular feet and endothelial tight junctions",
        hint: "These two components work together to make the brain capillaries the least permeable in the body."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides the somatic sensation (touch, pain, temperature) for the anterior two-thirds of the tongue?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN XII (Hypoglossal)"],
        answer: "CN V (Trigeminal)",
        hint: "Specifically, this is handled by the lingual nerve branch of the mandibular division (V3). Taste is handled by a different nerve."
    },
    {
        category: "Nervous Tissue",
        question: "An Inhibitory Postsynaptic Potential (IPSP) typically occurs when a neurotransmitter causes the opening of channels for which ion, leading to hyperpolarization?",
        options: ["Sodium (Na+)", "Calcium (Ca2+)", "Chloride (Cl-)", "Magnesium (Mg2+)"],
        answer: "Chloride (Cl-)",
        hint: "The influx of this negatively charged ion pushes the membrane potential further below the resting state."
    },
    {
        category: "Clinical Findings",
        question: "During an assessment, you suspect Guillain-Barré Syndrome (GBS) based on the rapid onset of bilateral ascending weakness. GBS is characterized by the autoimmune destruction of myelin in which system?",
        options: ["Central Nervous System (Oligodendrocytes)", "Peripheral Nervous System (Schwann cells)", "Central Nervous System (Astrocytes)", "Peripheral Nervous System (Satellite cells)"],
        answer: "Peripheral Nervous System (Schwann cells)",
        hint: "This contrasts with Multiple Sclerosis, which targets the CNS."
    },
    {
        category: "Autonomic Nervous System",
        question: "The extensive network of intrinsic neurons situated within the walls of the gastrointestinal tract, often termed the 'brain of the gut', is the:",
        options: ["Sympathetic chain", "Parasympathetic intramural ganglia", "Enteric nervous system", "Celiac plexus"],
        answer: "Enteric nervous system",
        hint: "It can function independently but is heavily modulated by the autonomic nervous system."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "The lateral corticospinal tract primarily controls:",
        options: ["Voluntary, skilled movements of the distal limbs", "Subconscious regulation of posture", "Voluntary movements of the axial (trunk) musculature", "Pain and temperature sensation"],
        answer: "Voluntary, skilled movements of the distal limbs",
        hint: "Because this tract decussates in the medulla, a lesion in the right cerebral cortex affects the left hand."
    },
    {
        category: "Special Senses",
        question: "In the condition of myopia (nearsightedness), where does the focal point of the visual image fall relative to the retina?",
        options: ["Exactly on the retina", "Posterior to the retina", "Anterior to the retina", "On the optic disc"],
        answer: "Anterior to the retina",
        hint: "This typically occurs because the eyeball is too long relative to the focusing power of the lens."
    },
    {
        category: "Clinical Findings",
        question: "When evaluating a client with a history of anterior shoulder dislocations, you note significant atrophy of the deltoid and teres minor. If implementing self-care tool considerations for the surrounding fascial network, you must be cautious of entrapment in which anatomical space?",
        options: ["Triangular space", "Quadrangular space", "Subcoracoid space", "Cubital fossa"],
        answer: "Quadrangular space",
        hint: "The axillary nerve and posterior circumflex humeral artery pass through this exact opening."
    },
    {
        category: "Brain Anatomy",
        question: "The network of neurons running through the core of the brainstem that is responsible for maintaining cerebral cortical alertness and filtering out repetitive sensory stimuli is the:",
        options: ["Limbic system", "Reticular Activating System (RAS)", "Basal ganglia", "Medullary pyramids"],
        answer: "Reticular Activating System (RAS)",
        hint: "A severe lesion to this network results in an irreversible coma."
    },
    {
        category: "Cranial Nerves",
        question: "A client reports unilateral hearing loss and severe vertigo. If these clinical findings are caused by a benign tumor (Acoustic Neuroma) compressing a nerve, which cranial nerve is affected?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN VIII (Vestibulocochlear)", "CN IX (Glossopharyngeal)"],
        answer: "CN VIII (Vestibulocochlear)",
        hint: "This nerve carries both auditory and balance information from the inner ear."
    },
    {
        category: "Nervous Tissue",
        question: "Multiple Sclerosis (MS) is a progressive neurodegenerative disease characterized by the immune system attacking:",
        options: ["Acetylcholine receptors at the neuromuscular junction", "Schwann cells in the peripheral nervous system", "Oligodendrocytes in the central nervous system", "Dopaminergic neurons in the substantia nigra"],
        answer: "Oligodendrocytes in the central nervous system",
        hint: "This results in the slowing or complete block of action potential propagation in the brain and spinal cord."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with an inability to extend their great toe (Hallux). To isolate the myotome responsible for this action (Extensor Hallucis Longus), you are primarily evaluating which spinal nerve root?",
        options: ["L3", "L4", "L5", "S1"],
        answer: "L5",
        hint: "This is a classic neurological screening test for lumbar radiculopathy originating from the L4-L5 disc space."
    },
    {
        category: "Autonomic Nervous System",
        question: "During a severe stress response, the sympathetic nervous system triggers the release of renin from the kidneys. What is the primary systemic effect of this release?",
        options: ["Decreased heart rate", "Increased blood pressure", "Bronchoconstriction", "Increased urine output"],
        answer: "Increased blood pressure",
        hint: "Renin initiates a cascade that ultimately leads to vasoconstriction and sodium/water retention."
    },
    {
        category: "Spinal Cord & Tracts",
        question: "For rapid clinical mapping of dermatomes, the sensory innervation around the level of the nipples is supplied by which nerve root?",
        options: ["C8", "T4", "T7", "T10"],
        answer: "T4",
        hint: "Remember the clinical mnemonic: 'T-4 at the pore (nipple).'"
    },
    {
        category: "Brain Anatomy",
        question: "Lesions of the cerebellum typically produce motor deficits on which side of the body relative to the lesion?",
        options: ["Contralateral side", "Ipsilateral side", "Bilateral", "No motor deficits are produced"],
        answer: "Ipsilateral side",
        hint: "Unlike the cerebral cortex, cerebellar pathways either do not cross, or they cross twice, returning to the same side."
    },
    {
        category: "Cranial Nerves",
        question: "Which cranial nerve provides the parasympathetic stimulation to the submandibular and sublingual salivary glands?",
        options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN IX (Glossopharyngeal)", "CN X (Vagus)"],
        answer: "CN VII (Facial)",
        hint: "The chorda tympani branch travels with the lingual nerve to reach these glands."
    },
    {
        category: "Clinical Findings",
        question: "A client presents with weakness in shoulder elevation (shrugging). Upon examination, you note the affected shoulder sits visibly lower than the unaffected side. This clinical finding most strongly suggests a lesion of which nerve?",
        options: ["Dorsal scapular nerve", "Suprascapular nerve", "Long thoracic nerve", "Spinal accessory nerve (CN XI)"],
        answer: "Spinal accessory nerve (CN XI)",
        hint: "This nerve innervates the upper trapezius, which is the primary elevator of the scapula."
    }
];
