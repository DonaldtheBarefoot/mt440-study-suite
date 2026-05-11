// --- QUESTION BANK ---
// Expand this array with your full set of questions according to the syllabus.
const questionBank = [
// ==========================================
    // QUIZ 1 QUESTIONS (Nervous Tissue & Pathologies)
    // ==========================================
    {
        module: "Quiz 1",
        question: "What are the two principal cell types that make up nervous tissue?",
        options: ["Somatic and Autonomic cells", "Neurons and Neuroglia", "Astrocytes and Microglia", "Epithelial and Connective cells"],
        answer: 1,
        explanation: "Nervous tissue consists of two principal cell types: highly specialized, excitable neurons and smaller, more numerous support cells called neuroglia."
    },
    {
        module: "Quiz 1",
        question: "Which neuroglial cells are the most numerous in the Central Nervous System (CNS) and are responsible for maintaining the blood-brain barrier?",
        options: ["Astrocytes", "Microglia", "Oligodendrocytes", "Schwann cells"],
        answer: 0,
        explanation: "Astrocytes are the largest and most numerous glial cells in the CNS. Their processes wrap around blood capillaries to form and maintain the blood-brain barrier."
    },
    {
        module: "Quiz 1",
        question: "In the Peripheral Nervous System (PNS), which cells produce the myelin sheath around a single axon?",
        options: ["Satellite cells", "Schwann cells", "Oligodendrocytes", "Ependymal cells"],
        answer: 1,
        explanation: "Schwann cells (neurolemmocytes) produce the myelin sheath around single axons in the PNS and aid in axon regeneration."
    },
    {
        module: "Quiz 1",
        question: "Which structure serves as the primary receiving or input portion of a neuron?",
        options: ["Axon", "Cell Body (Soma)", "Dendrites", "Synaptic End Bulbs"],
        answer: 2,
        explanation: "Dendrites are highly branched, tapering extensions that serve as the primary receiving or input portion of the neuron, directing signals toward the cell body."
    },
    {
        module: "Quiz 1",
        question: "What is the typical resting membrane potential of a polarized neuron?",
        options: ["+30 mV", "-55 mV", "-70 mV", "-90 mV"],
        answer: 2,
        explanation: "In a resting state, the cell membrane is polarized, maintaining a resting membrane potential of approximately -70 millivolts (mV)."
    },
    {
        module: "Quiz 1",
        question: "During the depolarizing phase of an action potential, which ion rapidly rushes into the cell?",
        options: ["Potassium (K+)", "Calcium (Ca2+)", "Sodium (Na+)", "Chloride (Cl-)"],
        answer: 2,
        explanation: "Depolarization occurs when a stimulus reaches the threshold (-55 mV), causing voltage-gated sodium (Na+) channels to open and positively charged Na+ ions to rush into the cell."
    },
    {
        module: "Quiz 1",
        question: "What process is responsible for restoring the negative resting membrane potential during repolarization?",
        options: ["Influx of Sodium (Na+)", "Efflux of Potassium (K+)", "Influx of Calcium (Ca2+)", "Efflux of Chloride (Cl-)"],
        answer: 1,
        explanation: "During repolarization, voltage-gated Na+ channels close while voltage-gated potassium (K+) channels open. The outward flow (efflux) of K+ restores the negative membrane potential."
    },
    {
        module: "Quiz 1",
        question: "What is saltatory conduction?",
        options: ["Conduction of a signal across an unmyelinated axon.", "The continuous opening of sodium channels along the entire axon.", "The highly efficient process where an electrical signal 'leaps' from one Node of Ranvier to the next.", "The chemical transmission of a signal across a synaptic cleft."],
        answer: 2,
        explanation: "Saltatory conduction occurs in myelinated axons, where the insulating myelin sheath forces the electrical impulse to leap from one unmyelinated gap (Node of Ranvier) to the next, drastically speeding up conduction."
    },
    {
        module: "Quiz 1",
        question: "Multiple Sclerosis (MS) is characterized by the progressive autoimmune destruction of which specific structure?",
        options: ["Schwann cells in the PNS", "Oligodendrocytes and myelin sheaths in the CNS", "Dendritic spines of motor neurons", "Acetylcholine receptors at the neuromuscular junction"],
        answer: 1,
        explanation: "MS is an idiopathic, autoimmune disease that destroys oligodendrocytes and myelin sheaths within the Central Nervous System (CNS), replacing them with hardened scar tissue (plaques)."
    },
    {
        module: "Quiz 1",
        question: "Which of the following is an absolute contraindication during an acute flare-up of Multiple Sclerosis?",
        options: ["Rigorous circulatory bodywork", "Gentle range of motion exercises", "Craniosacral therapy", "Lymphatic drainage"],
        answer: 0,
        explanation: "During an acute MS flare, the patient's system is highly taxed and actively inflamed. Rigorous circulatory bodywork can overwhelm the nervous system and is absolutely contraindicated."
    },
    {
        module: "Quiz 1",
        question: "Which pathophysiology involves excessive neurotransmitter release that hyperstimulates neurons, potentially leading to cellular damage or death?",
        options: ["Hyperpolarization", "Saltatory conduction", "Spatial summation", "Excitotoxicity"],
        answer: 3,
        explanation: "Excitotoxicity is a state where excessive neurotransmitter release hyperstimulates post-synaptic neurons, which can lead to metabolic exhaustion and cellular death."
    },
    {
        module: "Quiz 1",
        question: "Which neuroglial cells function as the immune defense of the CNS by clearing cellular debris and phagocytizing microbes?",
        options: ["Microglia", "Ependymal cells", "Astrocytes", "Satellite cells"],
        answer: 0,
        explanation: "Microglia are small cells that function as phagocytes, acting as the resident immune defense of the CNS."
    },
    {
        module: "Quiz 1",
        question: "Which structural classification applies to neurons with one main dendrite and one axon, frequently found in the retina of the eye and the inner ear?",
        options: ["Multipolar neurons", "Bipolar neurons", "Unipolar neurons", "Pseudounipolar neurons"],
        answer: 1,
        explanation: "Bipolar neurons have one main dendrite and one axon. They are typically associated with special senses and are found in the retina, inner ear, and olfactory area."
    },
    {
        module: "Quiz 1",
        question: "What term describes the time during which an excitable cell cannot generate another action potential, no matter how strong the stimulus?",
        options: ["Relative refractory period", "Latent period", "Absolute refractory period", "Hyperpolarization phase"],
        answer: 2,
        explanation: "During the absolute refractory period, the voltage-gated sodium channels must return to their resting state before they can be reopened, making a second action potential impossible."
    },
    {
        module: "Quiz 1",
        question: "Exposure to environmental nervous system poisons, such as certain lawn pesticides, typically causes harm by interfering with what process?",
        options: ["The production of cerebrospinal fluid", "The mechanical protection of the spinal cord", "Neurotransmitter degradation at the synaptic cleft", "The synthesis of red blood cells"],
        answer: 2,
        explanation: "Many neurotoxins and organophosphate pesticides act as acetylcholinesterase (AChE) inhibitors, preventing the removal of neurotransmitters at the synapse and causing severe overstimulation."
    },
    {
        module: "Quiz 1",
        question: "Which division of the peripheral nervous system is known as the 'brain of the gut'?",
        options: ["Somatic Nervous System", "Enteric Nervous System", "Sympathetic Nervous System", "Parasympathetic Nervous System"],
        answer: 1,
        explanation: "The Enteric Nervous System (ENS) is a localized network of neurons embedded in the walls of the gastrointestinal tract, often referred to as the 'brain of the gut'."
    },
    {
        module: "Quiz 1",
        question: "What is the primary difference between white matter and gray matter in the central nervous system?",
        options: ["White matter contains primarily myelinated axons; gray matter contains neuronal cell bodies, dendrites, and unmyelinated axons.", "White matter consists of neuroglia; gray matter consists of neurons.", "White matter is found only in the brain; gray matter is found only in the spinal cord.", "White matter generates graded potentials; gray matter generates action potentials."],
        answer: 0,
        explanation: "The whitish color of white matter is due to the presence of lipid-rich myelin sheaths around axons. Gray matter lacks abundant myelin and contains cell bodies and dendrites."
    },
    {
        module: "Quiz 1",
        question: "Which cells line the brain's ventricles and the spinal cord's central canal, producing and assisting in the circulation of cerebrospinal fluid (CSF)?",
        options: ["Astrocytes", "Microglia", "Ependymal cells", "Schwann cells"],
        answer: 2,
        explanation: "Ependymal cells are cuboidal/columnar neuroglia that line the ventricles and central canal. They produce, monitor, and assist in the circulation of CSF via their cilia."
    },
    {
        module: "Quiz 1",
        question: "What happens when a neuron's membrane potential reaches the specific threshold of approximately -55 mV?",
        options: ["The action potential is aborted.", "Voltage-gated potassium channels close.", "Voltage-gated sodium channels rapidly open, initiating an action potential.", "The cell enters a permanent refractory period."],
        answer: 2,
        explanation: "According to the all-or-none principle, once depolarization reaches the threshold level (around -55 mV), voltage-gated sodium channels open automatically, triggering an action potential."
    },
    {
        module: "Quiz 1",
        question: "Mood and neurodevelopmental disorders, such as anxiety and depression, heavily influence the autonomic nervous system. This often results in prolonged dominance of which state?",
        options: ["Parasympathetic dominance (rest-and-digest)", "Somatic inhibition", "Enteric hypermotility", "Sympathetic dominance (fight-or-flight)"],
        answer: 3,
        explanation: "Mood disorders often feature complex neurochemical imbalances and HPA-axis dysfunction, frequently locking the patient into a state of prolonged sympathetic (fight-or-flight) dominance and somatic tension."
    },
    {
        module: "Quiz 1",
        question: "What is spatial summation?",
        options: ["The build-up of neurotransmitter released by a single presynaptic end bulb fired many times in rapid succession.", "The build-up of neurotransmitter released simultaneously by several different presynaptic end bulbs.", "The jumping of an action potential between nodes of Ranvier.", "The process of a neuron repairing its severed axon."],
        answer: 1,
        explanation: "Spatial summation is the summation of postsynaptic potentials occurring at different locations (spaces) on the membrane simultaneously, typically from multiple different presynaptic neurons."
    },
    {
        module: "Quiz 1",
        question: "Which of the following is a classic systemic presentation of Multiple Sclerosis?",
        options: ["Unilateral blistering rash along a single dermatome", "Flaccid paralysis confined to the lower extremities", "Profound fatigue, spasticity, tremors, and progressive loss of vision", "Resting tremors and a shuffling gait"],
        answer: 2,
        explanation: "Because MS causes demyelination of both sensory and motor neurons in the CNS, common systemic presentations include profound fatigue, spasticity, tremors, and sensory deficits like progressive vision loss."
    },
    {
        module: "Quiz 1",
        question: "What structure on a Schwann cell forms a regeneration tube that guides and stimulates the regrowth of damaged peripheral axons?",
        options: ["The Myelin Sheath", "The Neurolemma", "The Node of Ranvier", "The Dendritic Spine"],
        answer: 1,
        explanation: "In the PNS, the outermost nucleated cytoplasmic layer of the Schwann cell forms the neurolemma. If an axon is injured, the neurolemma aids regeneration by forming a repair tube."
    },
    {
        module: "Quiz 1",
        question: "Which functional classification of neurons primarily carries impulses away from the central nervous system to effector organs like muscles or glands?",
        options: ["Sensory (afferent) neurons", "Interneurons", "Motor (efferent) neurons", "Bipolar neurons"],
        answer: 2,
        explanation: "Motor, or efferent, neurons convey action potentials away from the CNS to effectors (muscles and glands) in the periphery."
    },
    {
        module: "Quiz 1",
        question: "Which process creates the unequal distribution of ions that maintains a neuron's resting membrane potential?",
        options: ["Passive diffusion of calcium", "The active transport by the sodium-potassium (Na+/K+) pump", "The breakdown of myelin by macrophages", "The influx of chloride ions during hyperpolarization"],
        answer: 1,
        explanation: "The resting membrane potential is maintained primarily by the unequal permeability of the membrane to various ions and the constant, active transport of the sodium-potassium (Na+/K+) pump, which ejects 3 Na+ for every 2 K+ brought in."
    },
    
// ==========================================
    // QUIZ 2 QUESTIONS (Spinal Cord, Nerves & Pathologies)
    // ==========================================
    {
        module: "Quiz 2",
        question: "At what vertebral level does the adult spinal cord typically terminate?",
        options: ["T9-T12", "C4-T1", "L1-L2", "S2-S4"],
        answer: 2,
        explanation: "The spinal cord is a delicate, cylindrical structure situated within the vertebral canal that extends from the medulla oblongata to the superior border of the second lumbar vertebra (L1-L2)."
    },
    {
        module: "Quiz 2",
        question: "Because the spinal cord ends early in the vertebral column, lower nerve roots must angle downwards like a horse's tail. What is this formation called?",
        options: ["Conus medullaris", "Cauda equina", "Filum terminale", "Lumbar plexus"],
        answer: 1,
        explanation: "The cauda equina (horse's tail) is the collection of nerve roots at the inferior end of the vertebral canal, angling downwards because the spinal cord ends at L1-L2."
    },
    {
        module: "Quiz 2",
        question: "The spinal cord exhibits two prominent enlargements that house the neural circuitry for the upper and lower limbs. Where are they located?",
        options: ["Cervical (C4-T1) and Lumbosacral (T9-T12)", "Thoracic (T1-T8) and Sacral (S1-S5)", "Cervical (C1-C4) and Lumbar (L1-L4)", "Brainstem and Conus Medullaris"],
        answer: 0,
        explanation: "The spinal cord exhibits a cervical enlargement (C4-T1) for upper limb circuitry and a lumbosacral enlargement (T9-T12) for lower limb circuitry."
    },
    {
        module: "Quiz 2",
        question: "Internally, the spinal cord consists of a butterfly-shaped core of gray matter. What does this gray matter primarily contain?",
        options: ["Bundles of heavily myelinated axons", "Cerebrospinal fluid and meninges", "Unmyelinated axons, dendrites, and cell bodies", "Ascending sensory tracts only"],
        answer: 2,
        explanation: "The gray matter core contains unmyelinated axons, dendrites, and cell bodies, whereas the surrounding white matter contains bundles of myelinated axons."
    },
    {
        module: "Quiz 2",
        question: "Which horn of the spinal cord's gray matter contains somatic motor neurons that send impulses to skeletal muscles?",
        options: ["Posterior horn", "Anterior horn", "Lateral horn", "Dorsal root ganglion"],
        answer: 1,
        explanation: "The anterior (somatic motor) horns contain the cell bodies of somatic motor neurons, which provide nerve impulses for the contraction of skeletal muscles."
    },
    {
        module: "Quiz 2",
        question: "How many pairs of spinal nerves emerge from the human spinal cord?",
        options: ["12 pairs", "31 pairs", "43 pairs", "24 pairs"],
        answer: 1,
        explanation: "There are 31 pairs of spinal nerves: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal."
    },
    {
        module: "Quiz 2",
        question: "Spinal nerves connect to the spinal cord via two bundles of axons. What is contained within the posterior (dorsal) root?",
        options: ["Motor axons traveling to muscles", "Sympathetic autonomic fibers", "Sensory axons and a ganglion containing sensory neuron cell bodies", "Only unmyelinated axons"],
        answer: 2,
        explanation: "The posterior root contains sensory axons and features a spinal (dorsal root) ganglion, which houses the cell bodies of sensory neurons."
    },
    {
        module: "Quiz 2",
        question: "Why are all spinal nerves classified as 'mixed nerves'?",
        options: ["Because they contain both central and peripheral nervous tissue.", "Because they carry both sympathetic and parasympathetic signals.", "Because they contain both unmyelinated and myelinated fibers.", "Because their anterior and posterior roots merge, combining sensory and motor fibers."],
        answer: 3,
        explanation: "Because spinal nerves contain both sensory fibers (from the posterior root) and motor fibers (from the anterior root), they are classified as mixed nerves."
    },
    {
        module: "Quiz 2",
        question: "Shortly after passing through the intervertebral foramen, a spinal nerve splits into branches called rami. Which ramus serves the limbs and the anterolateral trunk?",
        options: ["Posterior ramus", "Anterior ramus", "Meningeal branch", "Communicating ramus"],
        answer: 1,
        explanation: "The anterior ramus is the large branch that serves the muscles and structures of the upper and lower limbs, as well as the anterolateral trunk."
    },
    {
        module: "Quiz 2",
        question: "Which group of spinal nerves do NOT form complex networks called plexuses, but instead form direct intercostal nerves?",
        options: ["C1-C4", "T2-T12", "L1-L4", "L4-S4"],
        answer: 1,
        explanation: "Except for thoracic nerves T2-T12, which form direct intercostal nerves serving the intercostal spaces, all other anterior rami join adjacent nerves to form plexuses."
    },
    {
        module: "Quiz 2",
        question: "The Cervical Plexus (C1-C4/C5) crucially gives rise to which nerve that provides motor innervation to the diaphragm?",
        options: ["Vagus nerve", "Phrenic nerve", "Axillary nerve", "Sciatic nerve"],
        answer: 1,
        explanation: "The cervical plexus gives rise to the phrenic nerve, which is essential for breathing as it provides motor innervation to the diaphragm."
    },
    {
        module: "Quiz 2",
        question: "The Brachial Plexus supplies the shoulders and upper limbs. What are its spinal nerve roots?",
        options: ["C1-C4", "C5-T1", "T2-T12", "L1-L4"],
        answer: 1,
        explanation: "The Brachial Plexus is formed by the anterior rami of spinal nerves C5-T1."
    },
    {
        module: "Quiz 2",
        question: "Which of the following nerves is NOT one of the five major terminal branches of the Brachial Plexus?",
        options: ["Radial nerve", "Median nerve", "Femoral nerve", "Ulnar nerve"],
        answer: 2,
        explanation: "The five major terminal branches of the brachial plexus are the axillary, musculocutaneous, radial, median, and ulnar nerves. The femoral nerve belongs to the Lumbar plexus."
    },
    {
        module: "Quiz 2",
        question: "What is the longest and largest nerve in the human body, generated by the Sacral Plexus?",
        options: ["Femoral nerve", "Tibial nerve", "Sciatic nerve", "Pudendal nerve"],
        answer: 2,
        explanation: "The Sacral Plexus generates the sciatic nerve, the longest nerve in the human body, which is actually two nerves (tibial and common fibular) bound by a common sheath."
    },
    {
        module: "Quiz 2",
        question: "A client reports paresthesia and numbness traveling down the posterior thigh to the foot. The massage therapist suspects compression of the sciatic nerve. Which spinal segments form this nerve?",
        options: ["C5-T1", "T12-L3", "L4-S3", "S4-Co1"],
        answer: 2,
        explanation: "The sciatic nerve originates from the Sacral Plexus, specifically spinal segments L4-S3. Treatment would target gluteal and piriformis tension."
    },
    {
        module: "Quiz 2",
        question: "What is the correct sequential pathway of a somatic spinal reflex arc?",
        options: ["Sensory Receptor -> Sensory Neuron -> Integrating Center -> Motor Neuron -> Effector", "Sensory Neuron -> Sensory Receptor -> Motor Neuron -> Integrating Center -> Effector", "Effector -> Motor Neuron -> Integrating Center -> Sensory Neuron -> Sensory Receptor", "Integrating Center -> Sensory Receptor -> Sensory Neuron -> Motor Neuron -> Effector"],
        answer: 0,
        explanation: "A reflex arc follows five precise steps: 1) Sensory Receptor, 2) Sensory Neuron, 3) Integrating Center (CNS), 4) Motor Neuron, 5) Effector (muscle or gland)."
    },
    {
        module: "Quiz 2",
        question: "In a reflex arc, what determines whether a reflex is monosynaptic or polysynaptic?",
        options: ["The type of sensory receptor stimulated.", "Whether the integrating center has a single synapse or multiple synapses involving interneurons.", "The size of the effector muscle.", "Whether the reflex travels to the brain or stays in the spinal cord."],
        answer: 1,
        explanation: "An integrating center with a single synapse between the sensory and motor neuron forms a monosynaptic reflex, while multiple synapses involving interneurons form a polysynaptic reflex."
    },
    {
        module: "Quiz 2",
        question: "Because spinal nerves innervate highly specific, predictable segments of the skin, a therapist can use this mapping to pinpoint peripheral nerve compression. What are these skin segments called?",
        options: ["Myotomes", "Funiculi", "Dermatomes", "Ganglia"],
        answer: 2,
        explanation: "Dermatomes are specific segments of skin innervated by sensory neurons that arise from a single spinal nerve ganglion."
    },
    {
        module: "Quiz 2",
        question: "Which highly contagious viral infection selectively targets and destroys lower motor neurons in the anterior horn of the spinal cord?",
        options: ["Meningitis", "Encephalitis", "Poliomyelitis", "Herpes Zoster"],
        answer: 2,
        explanation: "Poliomyelitis is a viral infection that selectively destroys lower motor neurons in the anterior horns, leading to flaccid paralysis and severe muscle atrophy."
    },
    {
        module: "Quiz 2",
        question: "What is a massive, life-threatening sympathetic response triggered by noxious stimuli below the level of a spinal cord injury (SCI)?",
        options: ["Autonomic dysreflexia", "Parkinsonian rigidity", "Post-Polio Syndrome", "Spinal shock"],
        answer: 0,
        explanation: "Autonomic dysreflexia is a medical emergency in clients with an SCI above T6, where a noxious stimulus below the injury triggers a massive, uncompensated sympathetic surge."
    },
    {
        module: "Quiz 2",
        question: "During an active outbreak of Herpes Zoster (Shingles), why is local massage over the affected dermatome absolutely contraindicated?",
        options: ["It causes muscle atrophy.", "It risks spreading the virus and inflicts severe pain on hypersensitized skin.", "It permanently damages the motor neurons.", "It triggers autonomic dysreflexia."],
        answer: 1,
        explanation: "Shingles causes a painful, blistering rash along a dermatome. Local massage is absolutely contraindicated to prevent spreading the infection and causing severe pain to the client."
    },
    {
        module: "Quiz 2",
        question: "The white matter of the spinal cord is organized into regions called columns or funiculi. What is the primary function of the tracts within these columns?",
        options: ["To integrate reflex arcs independently of the brain.", "To serve as ascending sensory highways to the brain and descending motor highways from the brain.", "To produce cerebrospinal fluid.", "To directly innervate local skeletal muscles."],
        answer: 1,
        explanation: "The white matter columns contain bundles of axons called tracts. Ascending tracts carry sensory input up to the brain, while descending tracts carry motor output down from the brain."
    },
    {
        module: "Quiz 2",
        question: "Which structure anchors the inferior end of the spinal cord to the coccyx, providing longitudinal stability?",
        options: ["Conus medullaris", "Cauda equina", "Filum terminale", "Denticulate ligaments"],
        answer: 2,
        explanation: "The filum terminale is an extension of the pia mater that arises from the conus medullaris and anchors the spinal cord to the coccyx."
    },
    {
        module: "Quiz 2",
        question: "If a massage client experiences weak hip flexion and knee extension, a nerve originating from which plexus might be compromised?",
        options: ["Cervical Plexus", "Brachial Plexus", "Lumbar Plexus", "Sacral Plexus"],
        answer: 2,
        explanation: "The Lumbar Plexus (L1-L4) gives rise to the femoral nerve, which innervates the anterior thigh muscles responsible for hip flexion and knee extension."
    },
    {
        module: "Quiz 2",
        question: "Which connective tissue layer heavily protects the fragile spinal cord and consists of the dura mater, arachnoid mater, and pia mater?",
        options: ["The Epineurium", "The Meninges", "The Blood-Brain Barrier", "The Myelin Sheath"],
        answer: 1,
        explanation: "Because the spinal cord is fragile, it relies on three protective connective tissue layers known as the meninges: the outer dura mater, middle arachnoid mater, and inner pia mater."
    },
    
// ==========================================
    // QUIZ 3 QUESTIONS (Brain & Cranial Nerves)
    // ==========================================
    {
        module: "Quiz 3",
        question: "During embryonic development, the brain and spinal cord form from which early tissue structure?",
        options: ["Mesodermal notochord", "Ectodermal neural tube", "Endodermal gut tube", "Neural crest cells"],
        answer: 1,
        explanation: "The entire central nervous system, including the brain and spinal cord, develops from the ectodermal neural tube."
    },
    {
        module: "Quiz 3",
        question: "The adult brain consists of which four major functional regions?",
        options: ["Medulla, Pons, Midbrain, Thalamus", "Frontal, Parietal, Temporal, Occipital lobes", "Brain stem, Cerebellum, Diencephalon, Cerebrum", "Cerebral cortex, White matter, Basal ganglia, Limbic system"],
        answer: 2,
        explanation: "The four major regions of the adult brain are the brain stem (medulla, pons, midbrain), cerebellum, diencephalon (thalamus, hypothalamus, epithalamus), and the cerebrum."
    },
    {
        module: "Quiz 3",
        question: "Which specific neuroglial cells are primarily responsible for maintaining the highly selective Blood-Brain Barrier (BBB)?",
        options: ["Astrocytes", "Microglia", "Schwann cells", "Ependymal cells"],
        answer: 0,
        explanation: "Astrocytes secrete chemicals that maintain the selective permeability characteristics of the tight junctions between endothelial cells, fundamentally creating the Blood-Brain Barrier."
    },
    {
        module: "Quiz 3",
        question: "Cerebrospinal fluid (CSF) is continually produced within the brain's ventricles by which capillary networks?",
        options: ["Arachnoid villi", "Choroid plexuses", "Circle of Willis", "Dural venous sinuses"],
        answer: 1,
        explanation: "The choroid plexuses are networks of blood capillaries in the walls of the ventricles that, along with ependymal cells, produce cerebrospinal fluid."
    },
    {
        module: "Quiz 3",
        question: "Through which structures is cerebrospinal fluid (CSF) eventually reabsorbed back into the venous bloodstream?",
        options: ["Choroid plexuses", "Cerebral aqueducts", "Arachnoid villi (granulations)", "Interventricular foramina"],
        answer: 2,
        explanation: "CSF is gradually reabsorbed into the blood through arachnoid villi, which are fingerlike extensions of the arachnoid mater that project into the dural venous sinuses."
    },
    {
        module: "Quiz 3",
        question: "Which vital region of the brain stem contains the cardiovascular center (regulating heart rate) and the medullary respiratory center?",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Thalamus"],
        answer: 2,
        explanation: "The medulla oblongata forms the inferior part of the brain stem and houses critical nuclei that regulate vital autonomic functions like heart rate, blood pressure, and breathing."
    },
    {
        module: "Quiz 3",
        question: "Which brain structure, located posterior to the brain stem, is primarily responsible for evaluating, coordinating, and smoothing out voluntary motor movements?",
        options: ["Hypothalamus", "Cerebellum", "Cerebrum", "Basal ganglia"],
        answer: 1,
        explanation: "The cerebellum's primary function is to evaluate how well movements initiated by motor areas in the cerebrum are actually being carried out, correcting them to ensure smooth, coordinated action and balance."
    },
    {
        module: "Quiz 3",
        question: "What is the primary function of the Thalamus?",
        options: ["It produces oxytocin and antidiuretic hormone.", "It acts as the primary relay station for most sensory impulses reaching the cerebral cortex.", "It regulates the sleep-wake cycle through melatonin production.", "It initiates voluntary motor impulses for skeletal muscles."],
        answer: 1,
        explanation: "The thalamus makes up 80% of the diencephalon and acts as the major relay station for most sensory impulses (except smell) that reach the primary somatosensory areas of the cerebral cortex."
    },
    {
        module: "Quiz 3",
        question: "Which small but crucial part of the diencephalon controls the Autonomic Nervous System (ANS), regulates body temperature, and governs the pituitary gland?",
        options: ["Epithalamus", "Thalamus", "Hypothalamus", "Midbrain"],
        answer: 2,
        explanation: "The hypothalamus is a major regulator of homeostasis, controlling the ANS, producing hormones, regulating emotional and behavioral patterns, and controlling body temperature."
    },
    {
        module: "Quiz 3",
        question: "The highly folded convolutions (ridges) covering the surface of the cerebral cortex are known as:",
        options: ["Sulci", "Fissures", "Gyri", "Tracts"],
        answer: 2,
        explanation: "During embryonic development, the gray matter of the cortex enlarges out of proportion to underlying white matter, folding onto itself to form ridges called gyri (or convolutions)."
    },
    {
        module: "Quiz 3",
        question: "The right and left cerebral hemispheres are connected internally by a broad band of white matter tracts called the:",
        options: ["Corpus callosum", "Longitudinal fissure", "Internal capsule", "Cerebral peduncles"],
        answer: 0,
        explanation: "The corpus callosum is a thick band of commissural tract axons that extends between the two cerebral hemispheres, allowing them to communicate."
    },
    {
        module: "Quiz 3",
        question: "Which ring of structures on the inner border of the cerebrum and diencephalon is recognized as the 'emotional brain'?",
        options: ["Basal ganglia", "Limbic system", "Reticular activating system", "Cerebellar cortex"],
        answer: 1,
        explanation: "The limbic system plays a primary role in a range of emotions, including pain, pleasure, docility, affection, and anger. It also heavily involves the amygdala and hippocampus."
    },
    {
        module: "Quiz 3",
        question: "A client reports an inability to feel fear or recognize stressful, dangerous situations. These symptoms heavily suggest a dysfunction in which specific brain structure?",
        options: ["The Amygdala", "The Medulla Oblongata", "The Occipital Lobe", "The Corpus Callosum"],
        answer: 0,
        explanation: "The amygdala, a key component of the limbic system, is centrally involved in processing fear, aggression, and evaluating the emotional significance of stimuli."
    },
    {
        module: "Quiz 3",
        question: "Which lobe of the cerebrum houses the primary visual area?",
        options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
        answer: 3,
        explanation: "The occipital lobe, located at the posterior aspect of the brain, receives visual information and is involved in visual perception."
    },
    {
        module: "Quiz 3",
        question: "Which specialized area of the frontal lobe is directly involved in the motor execution of speech production?",
        options: ["Wernicke's area", "Broca's speech area", "Primary somatosensory area", "Primary motor area"],
        answer: 1,
        explanation: "Broca's speech area is located in the frontal lobe (usually the left hemisphere) and contains the neural circuitry responsible for the muscular movements required to speak."
    },
    {
        module: "Quiz 3",
        question: "How many pairs of cranial nerves originate from the brain?",
        options: ["31 pairs", "12 pairs", "10 pairs", "8 pairs"],
        answer: 1,
        explanation: "There are 12 pairs of cranial nerves, named primarily for their distribution or function, and numbered I through XII using Roman numerals."
    },
    {
        module: "Quiz 3",
        question: "Which cranial nerve (CN I) is entirely sensory and carries impulses for the sense of smell?",
        options: ["Optic nerve", "Oculomotor nerve", "Olfactory nerve", "Trochlear nerve"],
        answer: 2,
        explanation: "Cranial Nerve I is the olfactory nerve, an entirely sensory nerve that conducts nerve impulses for olfaction (smell)."
    },
    {
        module: "Quiz 3",
        question: "Which cranial nerve is widely distributed into the thorax and abdomen, providing critical parasympathetic regulation of the heart, lungs, and GI tract?",
        options: ["Glossopharyngeal nerve (IX)", "Vagus nerve (X)", "Accessory nerve (XI)", "Hypoglossal nerve (XII)"],
        answer: 1,
        explanation: "The Vagus nerve (CN X) is the only cranial nerve that extends substantially beyond the head and neck, carrying the vast majority of parasympathetic ('rest and digest') motor outflow to the thoracic and abdominal viscera."
    },
    {
        module: "Quiz 3",
        question: "A massage client presents with Bell's Palsy, displaying unilateral paralysis of the facial expression muscles. Which cranial nerve is affected?",
        options: ["Trigeminal nerve (V)", "Facial nerve (VII)", "Glossopharyngeal nerve (IX)", "Oculomotor nerve (III)"],
        answer: 1,
        explanation: "The Facial nerve (CN VII) innervates the muscles of facial expression. Damage or viral infection of this nerve leads to Bell's Palsy."
    },
    {
        module: "Quiz 3",
        question: "The Trigeminal nerve (CN V) is the largest cranial nerve. What is its dual 'mixed' function?",
        options: ["Somatic sensation of the face and motor control of chewing (mastication).", "Sense of taste and motor control of facial expressions.", "Vision and control of eye movement.", "Hearing and maintenance of equilibrium."],
        answer: 0,
        explanation: "The Trigeminal nerve provides sensory innervation to the skin of the face (touch, pain, thermal) and motor innervation to the muscles of mastication."
    },
    {
        module: "Quiz 3",
        question: "Which cranial nerve is entirely sensory and carries impulses for both hearing and equilibrium?",
        options: ["Optic nerve (II)", "Abducens nerve (VI)", "Vestibulocochlear nerve (VIII)", "Accessory nerve (XI)"],
        answer: 2,
        explanation: "The Vestibulocochlear nerve (CN VIII) contains two branches: the vestibular branch carries equilibrium signals, and the cochlear branch carries hearing signals."
    },
    {
        module: "Quiz 3",
        question: "Which cranial nerve provides the motor output to the sternocleidomastoid (SCM) and trapezius muscles, making it highly relevant to massage therapists?",
        options: ["Trigeminal nerve (V)", "Facial nerve (VII)", "Vagus nerve (X)", "Accessory nerve (XI)"],
        answer: 3,
        explanation: "The Accessory nerve (CN XI) is a motor nerve that supplies the sternocleidomastoid and trapezius muscles to coordinate head and shoulder movements."
    },
    {
        module: "Quiz 3",
        question: "The Hypoglossal nerve (CN XII) innervates muscles required for speech and swallowing. Which structure does it primarily control?",
        options: ["The pharynx", "The larynx", "The tongue", "The soft palate"],
        answer: 2,
        explanation: "The Hypoglossal nerve (CN XII) is a motor nerve that controls the muscles of the tongue during speech and swallowing."
    },
    {
        module: "Quiz 3",
        question: "Parkinson's Disease involves the progressive degeneration of dopamine-releasing neurons extending from the substantia nigra. Where is the substantia nigra located?",
        options: ["The Cerebellum", "The Midbrain", "The Medulla Oblongata", "The Spinal Cord"],
        answer: 1,
        explanation: "The substantia nigra is a large, darkly pigmented nucleus located in the midbrain. Loss of its dopaminergic neurons leads to the tremors and rigidity associated with Parkinson's."
    },
    {
        module: "Quiz 3",
        question: "Which network of neurons extends through the brainstem and acts as a filter for sensory input, maintaining consciousness and arousal from sleep?",
        options: ["The Reticular Activating System (RAS)", "The Basal Ganglia", "The Limbic System", "The Circle of Willis"],
        answer: 0,
        explanation: "The ascending portion of the reticular formation is called the Reticular Activating System (RAS). When activated, it helps maintain consciousness and wakes the cerebral cortex from sleep."
    },

// ==========================================
    // QUIZ 4 QUESTIONS (Autonomic Nervous System)
    // ==========================================
    {
        module: "Quiz 4",
        question: "Which of the following effectors are exclusively innervated by the autonomic nervous system (ANS)?",
        options: ["Skeletal muscle", "Smooth muscle, cardiac muscle, and glands", "Sensory receptors of the skin", "The cerebral cortex"],
        answer: 1,
        explanation: "Unlike the somatic nervous system which controls voluntary skeletal muscle, the ANS operates involuntarily, innervating smooth muscle, cardiac muscle, and glands."
    },
    {
        module: "Quiz 4",
        question: "Unlike the somatic nervous system which uses a single motor neuron, the autonomic motor pathway fundamentally utilizes how many motor neurons in sequence?",
        options: ["One", "Two", "Three", "Four"],
        answer: 1,
        explanation: "The ANS motor pathway consists of two neurons in series: a preganglionic neuron extending from the CNS to an autonomic ganglion, and a postganglionic neuron extending from the ganglion to the effector."
    },
    {
        module: "Quiz 4",
        question: "Because its preganglionic cell bodies are located in the lateral horns of the 12 thoracic and first 2 lumbar segments of the spinal cord, the sympathetic division is also called the:",
        options: ["Craniosacral division", "Thoracolumbar division", "Enteric division", "Cervicobrachial division"],
        answer: 1,
        explanation: "The sympathetic division is functionally known as the thoracolumbar division because its nerve outflow specifically originates from the T1 to L2 spinal segments."
    },
    {
        module: "Quiz 4",
        question: "The parasympathetic division is often referred to as the craniosacral division. From which specific cranial nerves does parasympathetic outflow originate?",
        options: ["I, II, VIII, and IX", "III, VII, IX, and X", "V, VII, XI, and XII", "IV, V, VI, and X"],
        answer: 1,
        explanation: "Parasympathetic outflow arises from cranial nerves III (Oculomotor), VII (Facial), IX (Glossopharyngeal), and X (Vagus), as well as sacral spinal nerves S2-S4."
    },
    {
        module: "Quiz 4",
        question: "Which cranial nerve carries approximately 80% of the entire body's parasympathetic outflow to the organs of the thorax and upper abdomen?",
        options: ["Trigeminal (CN V)", "Facial (CN VII)", "Vagus (CN X)", "Hypoglossal (CN XII)"],
        answer: 2,
        explanation: "The Vagus nerve (CN X) is the dominant conduit for the parasympathetic nervous system, heavily regulating the heart, lungs, and gastrointestinal tract."
    },
    {
        module: "Quiz 4",
        question: "Where are sympathetic trunk (chain) ganglia typically located?",
        options: ["Embedded within the walls of the target organs.", "In a vertical row on either side of the vertebral column.", "Deep within the brainstem.", "In the dorsal root ganglia."],
        answer: 1,
        explanation: "Sympathetic trunk ganglia lie in vertical rows on both sides of the vertebral column, allowing sympathetic responses to broadly and rapidly affect multiple organs simultaneously."
    },
    {
        module: "Quiz 4",
        question: "Where are parasympathetic terminal ganglia typically located?",
        options: ["Very close to or embedded within the wall of the target organ.", "In a vertical row alongside the spinal cord.", "In the anterior horn of the spinal cord.", "Anterior to the abdominal aorta."],
        answer: 0,
        explanation: "Because parasympathetic responses are highly localized and specific, their terminal ganglia are located very close to, or literally inside the walls of, the target effector organs."
    },
    {
        module: "Quiz 4",
        question: "Which neurotransmitter is released by ALL autonomic preganglionic neurons (both sympathetic and parasympathetic)?",
        options: ["Norepinephrine (NE)", "Dopamine", "Acetylcholine (ACh)", "Serotonin"],
        answer: 2,
        explanation: "All sympathetic and parasympathetic preganglionic neurons are cholinergic, meaning they synthesize and exclusively release Acetylcholine (ACh)."
    },
    {
        module: "Quiz 4",
        question: "In the sympathetic division, what is the primary neurotransmitter released by most postganglionic neurons at the effector organ?",
        options: ["Acetylcholine (ACh)", "Norepinephrine (NE)", "Glutamate", "GABA"],
        answer: 1,
        explanation: "Most sympathetic postganglionic neurons are adrenergic; they release Norepinephrine (NE), which drives the body's 'fight-or-flight' physiological responses."
    },
    {
        module: "Quiz 4",
        question: "In the parasympathetic division, what is the neurotransmitter released by postganglionic neurons at the effector organ?",
        options: ["Norepinephrine (NE)", "Epinephrine", "Acetylcholine (ACh)", "Dopamine"],
        answer: 2,
        explanation: "All parasympathetic postganglionic neurons are cholinergic and release Acetylcholine (ACh) to trigger 'rest-and-digest' responses."
    },
    {
        module: "Quiz 4",
        question: "Receptors that bind Acetylcholine (ACh) are called cholinergic receptors. What are the two types of cholinergic receptors?",
        options: ["Alpha and Beta", "Nicotinic and Muscarinic", "Mu and Delta", "D1 and D2"],
        answer: 1,
        explanation: "The two primary types of cholinergic receptors are nicotinic receptors (found on postganglionic cell bodies) and muscarinic receptors (found on target effectors like smooth muscle)."
    },
    {
        module: "Quiz 4",
        question: "Which modified sympathetic ganglion releases epinephrine and norepinephrine directly into the bloodstream to prolong the 'fight-or-flight' response?",
        options: ["The anterior pituitary gland", "The adrenal medulla", "The pineal gland", "The celiac ganglion"],
        answer: 1,
        explanation: "The adrenal medulla acts as a modified sympathetic ganglion. Instead of extending axons to organs, its chromaffin cells secrete epinephrine and norepinephrine directly into the blood as hormones."
    },
    {
        module: "Quiz 4",
        question: "The acronym 'SLUDD' is used to describe the primary responses of which autonomic division?",
        options: ["Sympathetic", "Parasympathetic", "Somatic", "Enteric"],
        answer: 1,
        explanation: "SLUDD stands for Salivation, Lacrimation, Urination, Digestion, and Defecation—all of which are physiological processes stimulated by the parasympathetic ('rest-and-digest') division."
    },
    {
        module: "Quiz 4",
        question: "During a sympathetic 'fight-or-flight' response, what happens to the diameter of the airways (bronchioles) in the lungs?",
        options: ["They constrict to protect the lungs from toxins.", "They heavily secrete mucus to trap pathogens.", "They dilate to allow faster movement of air in and out.", "They spasm uncontrollably."],
        answer: 2,
        explanation: "Sympathetic stimulation causes bronchodilation (widening of the airways), allowing greater airflow and increased oxygen uptake required for physical exertion."
    },
    {
        module: "Quiz 4",
        question: "How does sympathetic stimulation affect blood vessels supplying the gastrointestinal tract and kidneys?",
        options: ["It causes severe vasodilation to increase organ activity.", "It causes vasoconstriction to shunt blood toward skeletal muscles.", "It has no effect on visceral blood vessels.", "It causes them to rupture under high pressure."],
        answer: 1,
        explanation: "During a stress response, the sympathetic division vasoconstricts blood vessels to non-essential organs (like the GI tract and kidneys) to shunt more blood to active skeletal muscles and the brain."
    },
    {
        module: "Quiz 4",
        question: "Which specific structure of the brain acts as the major control and integration center for the Autonomic Nervous System?",
        options: ["The Cerebellum", "The Thalamus", "The Hypothalamus", "The Corpus Callosum"],
        answer: 2,
        explanation: "The hypothalamus is the primary integrating center for the ANS. It receives sensory input related to visceral functions, emotions, and temperature, and adjusts autonomic output accordingly."
    },
    {
        module: "Quiz 4",
        question: "What does the term 'Autonomic Tone' refer to?",
        options: ["The resting tension of skeletal muscles.", "The baseline electrical frequency of the heart.", "The balance between sympathetic and parasympathetic activity.", "The vocal changes observed during extreme stress."],
        answer: 2,
        explanation: "Autonomic tone is the balance between sympathetic and parasympathetic activity, tightly regulated by the hypothalamus to maintain homeostasis."
    },
    {
        module: "Quiz 4",
        question: "What is the expected parasympathetic effect on the muscular pupil of the eye?",
        options: ["Dilation (mydriasis)", "Constriction (miosis)", "Rapid twitching (nystagmus)", "Tearing (lacrimation)"],
        answer: 1,
        explanation: "Parasympathetic stimulation contracts the circular muscles of the iris, causing the pupil to constrict (miosis) to protect the retina from excessive light during resting states."
    },
    {
        module: "Quiz 4",
        question: "Why do the effects of sympathetic activation last significantly longer than parasympathetic activation?",
        options: ["Sympathetic neurons are shorter.", "ACh is destroyed rapidly, whereas Norepinephrine lingers in the synaptic cleft and is also released as a hormone.", "The parasympathetic system runs out of ATP faster.", "Sympathetic responses do not require the brainstem."],
        answer: 1,
        explanation: "Sympathetic responses are widespread and prolonged because NE lingers in the cleft, and the adrenal medulla releases epinephrine/NE directly into the bloodstream where it takes minutes to be cleared."
    },
    {
        module: "Quiz 4",
        question: "Which condition involves a massive, exaggerated sympathetic reflex response triggered by noxious stimuli in patients with spinal cord injuries above T6?",
        options: ["Raynaud's phenomenon", "Horner's syndrome", "Autonomic dysreflexia", "Parkinson's disease"],
        answer: 2,
        explanation: "Autonomic dysreflexia is a life-threatening sympathetic surge (causing severe hypertension and headache) in response to a stimulus (like a full bladder) below the level of a high spinal cord injury."
    },
    {
        module: "Quiz 4",
        question: "A client reports severe, painful blanching and cyanosis in their fingers when exposed to cold. This is an excessive sympathetic response known as:",
        options: ["Diabetic neuropathy", "Multiple Sclerosis", "Raynaud's phenomenon", "Shingles"],
        answer: 2,
        explanation: "Raynaud's phenomenon is characterized by excessive sympathetic stimulation of smooth muscle in the arterioles of the digits, causing intense vasoconstriction and restricted blood flow upon cold exposure."
    },
    {
        module: "Quiz 4",
        question: "Which of the following is considered an autonomic reflex rather than a somatic reflex?",
        options: ["Withdrawing a hand from a hot stove.", "The patellar (knee-jerk) reflex.", "Alteration of heart rate in response to low blood pressure.", "Maintaining balance on an unstable surface."],
        answer: 2,
        explanation: "Autonomic reflexes (visceral reflexes) regulate controlled conditions in the body, such as blood pressure, digestion, and heart rate, using smooth muscle, cardiac muscle, or glands as effectors."
    },
    {
        module: "Quiz 4",
        question: "As a massage therapist, employing slow, rhythmic, soothing strokes primarily aims to decrease sympathetic tone and increase the dominance of which cranial nerve?",
        options: ["The Trigeminal nerve", "The Optic nerve", "The Vagus nerve", "The Accessory nerve"],
        answer: 2,
        explanation: "Soothing massage techniques aim to stimulate parasympathetic dominance, heavily relying on the Vagus nerve (CN X) to slow the heart rate and lower blood pressure."
    },
    {
        module: "Quiz 4",
        question: "What happens to liver function during a mass sympathetic discharge?",
        options: ["It dramatically increases bile production.", "It increases glycogenolysis (converting glycogen to glucose) to provide energy.", "It begins storing excess glucose as fat.", "It shuts down entirely to conserve energy."],
        answer: 1,
        explanation: "During a 'fight-or-flight' response, the liver breaks down stored glycogen into glucose (glycogenolysis) and releases it into the blood to fuel active skeletal muscles."
    },
    {
        module: "Quiz 4",
        question: "In the context of autonomic pathways, what is 'Dual Innervation'?",
        options: ["A muscle that is controlled by both the brain and the spinal cord.", "An organ that receives nerve impulses from both the sympathetic and parasympathetic divisions.", "A sensory receptor that can detect both heat and pain.", "A nerve that contains both sensory and motor fibers."],
        answer: 1,
        explanation: "Most organs feature dual innervation, meaning they receive impulses from both sympathetic and parasympathetic neurons, which typically have antagonistic (opposing) effects."
    },

    // ==========================================
    // QUIZ 5 QUESTIONS (Special Senses & Advanced Pathologies)
    // ==========================================
    {
        module: "Quiz 5",
        question: "Which of the following describes a 'receptor potential' as opposed to a 'generator potential'?",
        options: ["It triggers the continuous release of neurotransmitters across a synapse rather than generating an action potential directly.", "It is only found in somatic motor neurons.", "It is responsible for initiating muscle contraction.", "It bypasses the central nervous system entirely."],
        answer: 0,
        explanation: "Special senses (like vision, hearing, taste, and equilibrium) utilize receptor potentials, which cause the sensory receptor cell to release neurotransmitters across a synapse to a first-order neuron, rather than generating the action potential itself."
    },
    {
        module: "Quiz 5",
        question: "Which type of sensory receptor is rapidly adapting and responsible for fine touch?",
        options: ["Nociceptors", "Type I cutaneous mechanoreceptors (Tactile discs)", "Corpuscles of touch (Meissner corpuscles)", "Muscle spindles"],
        answer: 2,
        explanation: "Corpuscles of touch (Meissner corpuscles) are rapidly adapting touch receptors located in the dermal papillae of hairless skin, responsible for fine touch."
    },
    {
        module: "Quiz 5",
        question: "Why does a heart attack often produce pain that radiates down the left arm?",
        options: ["Because the heart is located entirely on the left side of the body.", "Due to referred pain, where visceral sensory nerve fibers converge on the same spinal segments as somatic pain fibers from the arm.", "Because nociceptors in the arm become hyperexcitable during stress.", "Because the left arm loses blood supply during a myocardial infarction."],
        answer: 1,
        explanation: "Referred pain occurs when visceral pain is felt in a superficial area far from the stimulated organ. This happens because the visceral sensory neurons and somatic sensory neurons converge on the same segments of the spinal cord (e.g., T1-T5 for the heart and left arm)."
    },
    {
        module: "Quiz 5",
        question: "Which sensory receptors wrap around specialized intrafusal muscle fibers to monitor changes in muscle length and prevent overstretching?",
        options: ["Golgi tendon organs", "Joint kinesthetic receptors", "Muscle spindles", "Pacinian corpuscles"],
        answer: 2,
        explanation: "Muscle spindles are proprioceptors embedded within skeletal muscles that detect changes in muscle length, triggering stretch reflexes to prevent overstretching and tissue damage."
    },
    {
        module: "Quiz 5",
        question: "Which network of neurons is responsible for awakening the cerebral cortex from sleep and maintaining consciousness?",
        options: ["The Basal Ganglia", "The Reticular Activating System (RAS)", "The Limbic System", "The Parasympathetic Nervous System"],
        answer: 1,
        explanation: "The Reticular Activating System (RAS) consists of sensory axons that project to the cerebral cortex. Increased activity in the RAS causes awakening (arousal) and maintains consciousness."
    },
    {
        module: "Quiz 5",
        question: "Memory consolidation—the reinforcement that results from frequent retrieval of a piece of information—is deeply associated with a neural property known as:",
        options: ["Hyperpolarization", "Plasticity", "Spinal reflexology", "Saltatory conduction"],
        answer: 1,
        explanation: "Plasticity is the capability of the nervous system to change based on experience. Memory consolidation structurally changes the brain through long-term potentiation."
    },
    {
        module: "Quiz 5",
        question: "In the olfactory epithelium, which cells undergo continuous cell division to produce new olfactory receptor neurons throughout a person's life?",
        options: ["Supporting cells", "Olfactory glands (Bowman's glands)", "Basal cells", "Mitral cells"],
        answer: 2,
        explanation: "Basal cells are stem cells located at the base of the olfactory epithelium that constantly divide to replace olfactory receptor cells (which live for only about a month)."
    },
    {
        module: "Quiz 5",
        question: "Which special sense pathway is unique because its nerve impulses reach the cerebral cortex WITHOUT first synapsing in the thalamus?",
        options: ["Vision", "Gustation (Taste)", "Audition (Hearing)", "Olfaction (Smell)"],
        answer: 3,
        explanation: "Olfaction is the only sensory modality that bypasses the thalamic relay station entirely, projecting directly to the primary olfactory area in the temporal lobe and the limbic system."
    },
    {
        module: "Quiz 5",
        question: "Which three cranial nerves are responsible for transmitting gustatory (taste) impulses to the brain?",
        options: ["I, II, and VIII", "V, VII, and XI", "VII (Facial), IX (Glossopharyngeal), and X (Vagus)", "III, IV, and VI"],
        answer: 2,
        explanation: "Taste sensations are carried by the Facial nerve (anterior 2/3 of tongue), Glossopharyngeal nerve (posterior 1/3), and Vagus nerve (epiglottis and pharynx)."
    },
    {
        module: "Quiz 5",
        question: "The fibrous tunic is the superficial layer of the eyeball. What two structures make up this layer?",
        options: ["The choroid and the retina", "The iris and the pupil", "The cornea and the sclera", "The lens and the ciliary body"],
        answer: 2,
        explanation: "The fibrous tunic consists of the anterior transparent cornea (which focuses light) and the posterior white sclera (which provides shape and protection)."
    },
    {
        module: "Quiz 5",
        question: "What is the primary function of the iris?",
        options: ["To nourish the retina with blood.", "To regulate the amount of light entering the eyeball through the pupil.", "To convert light into electrical signals.", "To change the shape of the lens for focusing."],
        answer: 1,
        explanation: "The iris contains smooth muscle fibers (controlled by the autonomic nervous system) that dilate or constrict the pupil to regulate how much light enters the eye."
    },
    {
        module: "Quiz 5",
        question: "Why does the 'blind spot' (optic disc) lack the ability to process visual images?",
        options: ["It is permanently covered by the eyelid.", "It is the site where the optic nerve exits the eye, meaning there are no rods or cones present.", "It is blocked by the shadow of the iris.", "It is damaged by excessive UV light exposure."],
        answer: 1,
        explanation: "The optic disc is where the axons of retinal ganglion cells exit the eyeball to form the optic nerve. Because it contains no photoreceptors, it creates a visual blind spot."
    },
    {
        module: "Quiz 5",
        question: "Which photoreceptors are highly sensitive to light and allow us to see in dim surroundings (black-and-white vision)?",
        options: ["Rods", "Cones", "Maculae", "Ganglion cells"],
        answer: 0,
        explanation: "Rods function optimally in dim light and do not provide color vision. Cones require bright light and are responsible for high-acuity color vision."
    },
    {
        module: "Quiz 5",
        question: "What dynamic process occurs when the ciliary muscle contracts, releasing tension on the suspensory ligaments to allow the lens to become more spherical for near-vision?",
        options: ["Refraction", "Transduction", "Accommodation", "Convergence"],
        answer: 2,
        explanation: "Accommodation is the process where the lens increases its curvature (becomes thicker/more spherical) to focus on near objects."
    },
    {
        module: "Quiz 5",
        question: "Which vision pathology is characterized by an abnormal increase in intraocular pressure due to the buildup of aqueous humor, potentially leading to irreversible blindness?",
        options: ["Cataracts", "Macular degeneration", "Glaucoma", "Presbyopia"],
        answer: 2,
        explanation: "Glaucoma occurs when aqueous humor cannot adequately drain through the scleral venous sinus, building pressure that compresses the lens into the vitreous body and damages the optic nerve."
    },
    {
        module: "Quiz 5",
        question: "What is the anatomical sequence of the auditory ossicles that transmit sound vibrations from the tympanic membrane to the oval window?",
        options: ["Stapes -> Incus -> Malleus", "Malleus -> Incus -> Stapes", "Incus -> Malleus -> Stapes", "Malleus -> Stapes -> Incus"],
        answer: 1,
        explanation: "The malleus (hammer) attaches to the eardrum, articulates with the incus (anvil), which in turn articulates with the stapes (stirrup) resting in the oval window."
    },
    {
        module: "Quiz 5",
        question: "Which structure connects the middle ear to the nasopharynx to equalize air pressure on both sides of the eardrum?",
        options: ["The external auditory canal", "The auditory (Eustachian) tube", "The round window", "The cochlea"],
        answer: 1,
        explanation: "The auditory (Eustachian) tube normally remains closed but opens during swallowing or yawning to equalize pressure, ensuring the tympanic membrane can vibrate freely."
    },
    {
        module: "Quiz 5",
        question: "Within the inner ear, which specialized structure rests on the basilar membrane and contains the hair cells responsible for converting mechanical sound waves into electrical nerve impulses?",
        options: ["The spiral organ (Organ of Corti)", "The crista ampullaris", "The macula", "The tectorial membrane"],
        answer: 0,
        explanation: "The spiral organ (Organ of Corti) is the true organ of hearing. As fluid pressure waves move the basilar membrane, the hair cells bend against the tectorial membrane, triggering a receptor potential."
    },
    {
        module: "Quiz 5",
        question: "Which inner ear structures are primarily responsible for Dynamic Equilibrium (detecting rotational acceleration or deceleration of the head)?",
        options: ["The utricle and saccule", "The cochlea", "The semicircular ducts", "The auditory ossicles"],
        answer: 2,
        explanation: "The three semicircular ducts are oriented at 90-degree angles to each other. Their ampullae contain cristae with hair cells that detect rotational/dynamic movements of the head."
    },
    {
        module: "Quiz 5",
        question: "Which inner ear structures contain the maculae, which are responsible for Static Equilibrium (detecting linear acceleration and head tilt relative to gravity)?",
        options: ["The semicircular canals", "The utricle and saccule (within the vestibule)", "The tympanic membrane", "The helicotrema"],
        answer: 1,
        explanation: "The utricle and saccule contain maculae, which feature hair cells embedded in an otolithic membrane. Gravity pulls on the heavy otoliths during a head tilt, bending the hair cells."
    },
    {
        module: "Quiz 5",
        question: "An age-related sensorineural hearing loss that usually begins with the loss of high-pitched sounds is called:",
        options: ["Presbyopia", "Tinnitus", "Presbycusis", "Cataracts"],
        answer: 2,
        explanation: "Presbycusis is progressive, age-related hearing loss caused by the cumulative damage and loss of hair cells within the spiral organ."
    },
    {
        module: "Quiz 5",
        question: "A client reports a persistent, annoying ringing or buzzing sensation in their ears. What is the clinical term for this condition?",
        options: ["Strabismus", "Nystagmus", "Vertigo", "Tinnitus"],
        answer: 3,
        explanation: "Tinnitus is a ringing, roaring, or clicking in the ears. It is frequently caused by loud noise exposure, impacted cerumen, or nerve degeneration."
    },
    {
        module: "Quiz 5",
        question: "Loss of transparency of the lens of the eye, often caused by changes in lens proteins due to aging or UV exposure, is known as:",
        options: ["A cataract", "Glaucoma", "Myopia", "Astigmatism"],
        answer: 0,
        explanation: "A cataract is a clouding of the normally clear lens of the eye, obstructing the passage of light and leading to blindness if surgically untreated."
    },
    {
        module: "Quiz 5",
        question: "As a massage therapist, why is understanding the physiological process of the Reticular Activating System (RAS) important?",
        options: ["It helps therapists diagnose brain tumors.", "It dictates the type of massage oil used.", "It explains why slow, rhythmic inputs (like Swedish massage) can decrease sensory overload, inhibit the RAS, and promote deep relaxation.", "It determines the exact location of motor nerve compression."],
        answer: 2,
        explanation: "The RAS filters sensory input. Monotonous, soothing, and rhythmic sensory input (like Swedish massage) fails to stimulate the RAS, helping shift the client from sympathetic arousal to parasympathetic relaxation/sleepiness."
    },
    {
        module: "Quiz 5",
        question: "If a patient suffers damage to the vestibulocochlear nerve (Cranial Nerve VIII), which two sensory modalities will be severely impaired?",
        options: ["Vision and Smell", "Hearing and Equilibrium", "Taste and Swallowing", "Facial expression and Chewing"],
        answer: 1,
        explanation: "Cranial Nerve VIII has a cochlear branch (transmitting auditory information) and a vestibular branch (transmitting equilibrium/balance information)."
    },

    // ==========================================
    // FINAL EXAM QUESTIONS (Comprehensive Course Review)
    // ==========================================
    {
        module: "Final Exam",
        question: "Which of the following correctly pairs the myelin-producing neuroglial cells with their respective nervous system division?",
        options: ["Astrocytes (CNS) and Satellite cells (PNS)", "Oligodendrocytes (CNS) and Schwann cells (PNS)", "Microglia (CNS) and Ependymal cells (PNS)", "Schwann cells (CNS) and Oligodendrocytes (PNS)"],
        answer: 1,
        explanation: "Oligodendrocytes myelinate multiple axons in the Central Nervous System (CNS), whereas Schwann cells myelinate single axons in the Peripheral Nervous System (PNS)."
    },
    {
        module: "Final Exam",
        question: "During an action potential, the absolute refractory period ensures that the nerve impulse propagates in only one direction. What dictates this period?",
        options: ["The depletion of intracellular ATP.", "The temporary inactivation of voltage-gated sodium (Na+) channels.", "The continuous influx of calcium (Ca2+) ions.", "The exhaustion of neurotransmitter vesicles."],
        answer: 1,
        explanation: "During the absolute refractory period, voltage-gated Na+ channels cannot reopen until they reset to their resting state, preventing the action potential from traveling backward."
    },
    {
        module: "Final Exam",
        question: "The white matter of the spinal cord contains specific ascending and descending tracts. What type of information does the lateral spinothalamic tract carry?",
        options: ["Voluntary motor commands to skeletal muscles.", "Subconscious proprioception to the cerebellum.", "Sensory impulses for pain and temperature to the brain.", "Autonomic regulation of heart rate."],
        answer: 2,
        explanation: "Ascending tracts like the spinothalamic tract carry sensory information up to the brain. Specifically, the lateral spinothalamic tract conveys pain and temperature sensations."
    },
    {
        module: "Final Exam",
        question: "A client presents with 'foot drop' and an inability to dorsiflex their ankle. Which peripheral nerve, originating from the sacral plexus, is most likely compromised?",
        options: ["Femoral nerve", "Common fibular (peroneal) nerve", "Obturator nerve", "Pudendal nerve"],
        answer: 1,
        explanation: "The common fibular nerve, a major branch of the sciatic nerve, innervates the anterior compartment of the lower leg. Damage leads to an inability to dorsiflex, causing 'foot drop'."
    },
    {
        module: "Final Exam",
        question: "Which sequence accurately traces the continuous flow of cerebrospinal fluid (CSF) through the central nervous system?",
        options: ["Arachnoid villi -> Ventricles -> Subdural space -> Central canal", "Lateral ventricles -> Third ventricle -> Cerebral aqueduct -> Fourth ventricle -> Subarachnoid space", "Fourth ventricle -> Third ventricle -> Interventricular foramen -> Dural venous sinuses", "Choroid plexus -> Epidural space -> Subarachnoid space -> Brainstem"],
        answer: 1,
        explanation: "CSF is produced in the lateral ventricles, flows through the interventricular foramina to the third ventricle, down the cerebral aqueduct to the fourth ventricle, and out into the subarachnoid space."
    },
    {
        module: "Final Exam",
        question: "The primary motor area, responsible for the voluntary execution of skeletal muscle movement, is located in which specific convolution of the cerebral cortex?",
        options: ["Postcentral gyrus of the parietal lobe", "Precentral gyrus of the frontal lobe", "Superior temporal gyrus", "Occipital pole"],
        answer: 1,
        explanation: "The precentral gyrus of the frontal lobe houses the primary motor cortex. The postcentral gyrus of the parietal lobe houses the primary somatosensory cortex."
    },
    {
        module: "Final Exam",
        question: "Which cranial nerve provides the essential 'rest-and-digest' parasympathetic innervation to the heart, lungs, and the majority of the gastrointestinal tract?",
        options: ["Glossopharyngeal (IX)", "Accessory (XI)", "Vagus (X)", "Hypoglossal (XII)"],
        answer: 2,
        explanation: "The Vagus nerve (CN X) is the primary conduit for the parasympathetic nervous system, heavily regulating thoracic and abdominal viscera."
    },
    {
        module: "Final Exam",
        question: "In the autonomic nervous system, how do sympathetic and parasympathetic pathways anatomically differ regarding the length of their neurons?",
        options: ["Sympathetic has short preganglionic and long postganglionic neurons; Parasympathetic has long preganglionic and short postganglionic neurons.", "Both divisions have short preganglionic neurons.", "Sympathetic has long preganglionic and short postganglionic neurons; Parasympathetic has short preganglionic and long postganglionic neurons.", "Parasympathetic pathways consist of only one motor neuron."],
        answer: 0,
        explanation: "Sympathetic ganglia are close to the spinal cord (chain ganglia), resulting in short preganglionic and long postganglionic fibers. Parasympathetic ganglia are near/in the target organs, resulting in long preganglionic and short postganglionic fibers."
    },
    {
        module: "Final Exam",
        question: "All autonomic preganglionic neurons release ________, while most sympathetic postganglionic neurons release ________.",
        options: ["Norepinephrine; Acetylcholine", "Acetylcholine; Norepinephrine", "Dopamine; Serotonin", "Epinephrine; Glutamate"],
        answer: 1,
        explanation: "Preganglionic neurons of both divisions are cholinergic (release ACh). Most sympathetic postganglionic neurons are adrenergic (release NE) to trigger fight-or-flight responses."
    },
    {
        module: "Final Exam",
        question: "A patient suffering from severe peripheral neuropathy reports a complete loss of 'fine touch' and vibration sense in their hands. Which specific encapsulated sensory receptors are likely failing?",
        options: ["Free nerve endings", "Nociceptors", "Meissner corpuscles and Pacinian corpuscles", "Muscle spindles"],
        answer: 2,
        explanation: "Meissner (corpuscles of touch) and Pacinian (lamellated) corpuscles are encapsulated mechanoreceptors responsible for fine touch and vibration. Free nerve endings primarily detect pain and temperature."
    },
    {
        module: "Final Exam",
        question: "The Reticular Activating System (RAS) is a diffuse neural network vital for awakening the cerebral cortex. Where is the RAS primarily located?",
        options: ["Throughout the brainstem", "In the basal ganglia", "Within the corpus callosum", "In the prefrontal cortex"],
        answer: 0,
        explanation: "The RAS is an ascending network of tracts running through the brainstem (medulla, pons, and midbrain) that filters sensory input and maintains cerebral arousal and consciousness."
    },
    {
        module: "Final Exam",
        question: "Which structure in the limbic system is crucially responsible for consolidating short-term memories into long-term memories?",
        options: ["The Amygdala", "The Hippocampus", "The Medulla", "The Thalamus"],
        answer: 1,
        explanation: "The hippocampus is the primary memory consolidation center of the brain. Damage to this area (as seen in early Alzheimer's disease) severely impairs the ability to form new long-term memories."
    },
    {
        module: "Final Exam",
        question: "Which of the following describes the difference between Guillain-Barré Syndrome (GBS) and Multiple Sclerosis (MS)?",
        options: ["GBS causes demyelination in the CNS, while MS causes demyelination in the PNS.", "GBS is caused by a neurotoxin, while MS is a bacterial infection.", "GBS causes acute demyelination in the PNS, while MS causes chronic demyelination in the CNS.", "GBS only affects sensory neurons, while MS only affects motor neurons."],
        answer: 2,
        explanation: "Both are autoimmune demyelinating diseases, but GBS attacks Schwann cells in the peripheral nervous system (causing acute flaccid paralysis), whereas MS attacks oligodendrocytes in the central nervous system."
    },
    {
        module: "Final Exam",
        question: "What pathophysiological mechanism defines Parkinson's Disease?",
        options: ["Autoimmune destruction of acetylcholine receptors at the neuromuscular junction.", "Progressive degeneration of dopamine-producing neurons in the substantia nigra of the midbrain.", "Viral destruction of lower motor neurons in the anterior horns of the spinal cord.", "Ischemic necrosis of the primary motor cortex."],
        answer: 1,
        explanation: "Parkinson's is caused by the death of dopaminergic neurons in the substantia nigra, leading to an imbalance in the basal ganglia that causes resting tremors, bradykinesia, and rigidity."
    },
    {
        module: "Final Exam",
        question: "A client experiences sharp, shooting pain radiating into their thumb, index, and middle fingers, often worsening at night. Which nerve is most likely compressed within the wrist?",
        options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Musculocutaneous nerve"],
        answer: 2,
        explanation: "Carpal Tunnel Syndrome involves the compression of the median nerve as it passes under the flexor retinaculum, causing paresthesia and pain in the lateral 3.5 digits."
    },
    {
        module: "Final Exam",
        question: "Which of the following accurately describes a Cerebrovascular Accident (CVA / Stroke)?",
        options: ["A progressive neurodegenerative disease affecting memory.", "A sudden focal neurological deficit resulting from either ischemia (blockage) or hemorrhage (rupture) of blood vessels in the brain.", "An autoimmune attack on the blood-brain barrier.", "A temporary drop in blood pressure causing fainting."],
        answer: 1,
        explanation: "A stroke (CVA) occurs when the blood supply to a part of the brain is suddenly interrupted by a clot (ischemic) or a ruptured blood vessel (hemorrhagic), causing rapid tissue death."
    },
    {
        module: "Final Exam",
        question: "In the physiology of vision, what is the process of 'accommodation'?",
        options: ["The constriction of the pupil in bright light.", "The conversion of light waves into electrical receptor potentials by rhodopsin.", "The contraction of the ciliary muscle to increase the curvature of the lens for near-vision focusing.", "The crossing over of optic nerve fibers at the optic chiasm."],
        answer: 2,
        explanation: "Accommodation is the active process where the ciliary muscles contract, taking tension off the suspensory ligaments and allowing the lens to bulge (become more spherical) to focus on close objects."
    },
    {
        module: "Final Exam",
        question: "Which anatomical structure separates the external ear from the middle ear and vibrates in response to sound waves?",
        options: ["The Oval Window", "The Tympanic Membrane", "The Tectorial Membrane", "The Round Window"],
        answer: 1,
        explanation: "The tympanic membrane (eardrum) is a thin partition that separates the external auditory canal from the middle ear, translating acoustic sound waves into mechanical vibrations."
    },
    {
        module: "Final Exam",
        question: "Which special sense utilizes 'hair cells' embedded in a gelatinous otolithic membrane to detect static equilibrium (linear acceleration and gravity)?",
        options: ["The spiral organ (Organ of Corti)", "The semicircular canals", "The utricle and saccule (maculae)", "The olfactory epithelium"],
        answer: 2,
        explanation: "The maculae within the utricle and saccule of the vestibule contain hair cells weighted with calcium carbonate crystals (otoliths). Gravity pulls on these during linear movements or head tilts, detecting static equilibrium."
    },
    {
        module: "Final Exam",
        question: "Amyotrophic Lateral Sclerosis (ALS), or Lou Gehrig's disease, is characterized by the rapid degeneration of what specific neural structures?",
        options: ["Upper motor neurons in the cortex and lower motor neurons in the brainstem and spinal cord.", "Sensory tracts in the posterior columns of the spinal cord.", "The myelin sheaths of the peripheral nervous system.", "The basal ganglia and limbic system."],
        answer: 0,
        explanation: "ALS is a fatal neurodegenerative disease that strictly targets motor neurons (both upper and lower), leading to progressive skeletal muscle atrophy and paralysis without affecting sensory or cognitive functions."
    },
    {
        module: "Final Exam",
        question: "Thoracic Outlet Syndrome (TOS) typically involves the compression of the Brachial Plexus and subclavian vessels. Between which two muscles is this compression most common?",
        options: ["Pectoralis major and Deltoid", "Anterior and Middle Scalenes", "Trapezius and Levator Scapulae", "Biceps brachii and Triceps brachii"],
        answer: 1,
        explanation: "The roots and trunks of the Brachial Plexus pass through a narrow physical triangle created by the anterior scalene, middle scalene, and the first rib. Hypertonicity here leads to TOS."
    },
    {
        module: "Final Exam",
        question: "When a massage therapist applies deep, slow, sustained pressure to a hypertonic muscle, they stimulate Golgi Tendon Organs (GTOs). What reflex does this trigger?",
        options: ["A stretch reflex causing the muscle to contract harder.", "A withdrawal reflex pulling the limb away from the pressure.", "An inverse stretch (tendon) reflex causing the muscle to relax to prevent tendon tearing.", "A crossed-extensor reflex stabilizing the opposite limb."],
        answer: 2,
        explanation: "GTOs monitor muscle tension. When stimulated by deep, sustained pressure or excessive tension, they trigger an inhibitory polysynaptic reflex that forces the muscle to relax (the inverse stretch reflex)."
    },
    {
        module: "Final Exam",
        question: "Meningitis is a potentially fatal inflammation of the meninges. Why is bacterial meningitis generally considered a more acute medical emergency than viral meningitis?",
        options: ["Bacterial meningitis cannot cross the blood-brain barrier.", "Bacteria rapidly consume glucose and release toxins, causing severe brain edema, increased intracranial pressure, and rapid necrosis.", "Viral meningitis only affects the spinal cord, leaving the brain intact.", "Bacteria destroy the skull bones before attacking the brain."],
        answer: 1,
        explanation: "Bacterial meningitis is highly aggressive; the bacteria multiply rapidly in the nutrient-rich CSF, triggering massive inflammation, edema, and high intracranial pressure that can cause brain damage or death within hours."
    },
    {
        module: "Final Exam",
        question: "Which of the following best defines 'Autonomic Tone'?",
        options: ["The audible frequency of nerve impulses traveling through a nerve.", "The continuous, simultaneous baseline activity of both the sympathetic and parasympathetic divisions, regulated by the hypothalamus.", "The total loss of sympathetic function following a spinal cord injury.", "The strength of a skeletal muscle contraction."],
        answer: 1,
        explanation: "Autonomic tone is the balance between sympathetic ('fight-or-flight') and parasympathetic ('rest-and-digest') activity, constantly adjusted by the hypothalamus to maintain systemic homeostasis."
    },
    {
        module: "Final Exam",
        question: "If a patient presents with a severed spinal cord at the C3 segment, what will be the most immediate, life-threatening consequence?",
        options: ["Loss of bowel and bladder control.", "Paraplegia (paralysis of the lower limbs only).", "Loss of sympathetic output to the eyes.", "Respiratory arrest due to the loss of phrenic nerve output to the diaphragm."],
        answer: 3,
        explanation: "The phrenic nerve, which drives the diaphragm for breathing, originates from the cervical plexus (C3-C5). A transection at C3 severs the brain's control over the diaphragm, causing immediate respiratory arrest."
    },

    // ==========================================
    // FINAL EXAM QUESTIONS (Expansion: Questions 26 - 75)
    // ==========================================
    {
        module: "Final Exam",
        question: "Within the neuronal cell body, what are Nissl bodies?",
        options: ["Mitochondria responsible for massive ATP production.", "Prominent clusters of rough endoplasmic reticulum used to synthesize proteins and neurotransmitters.", "Vesicles storing acetylcholine at the synaptic end bulb.", "Lysosomes that break down cellular debris."],
        answer: 1,
        explanation: "Nissl bodies are prominent clusters of rough endoplasmic reticulum in a neuron's cell body, crucial for synthesizing the high volume of proteins and neurotransmitters required for nerve function."
    },
    {
        module: "Final Exam",
        question: "How does the sodium-potassium (Na+/K+) pump actively maintain the resting membrane potential?",
        options: ["It pumps 3 Na+ out of the cell and 2 K+ into the cell.", "It pumps 2 Na+ out of the cell and 3 K+ into the cell.", "It pumps 3 Na+ into the cell and 2 K+ out of the cell.", "It allows passive diffusion of both ions until equilibrium is reached."],
        answer: 0,
        explanation: "To maintain the negative -70mV resting potential, the Na+/K+ pump uses ATP to eject 3 positively charged sodium ions for every 2 positively charged potassium ions it brings in, causing a net outward loss of positive charge."
    },
    {
        module: "Final Exam",
        question: "Which of the following is NOT one of the three primary mechanisms for removing neurotransmitters from the synaptic cleft?",
        options: ["Diffusion away from the cleft", "Enzymatic degradation (e.g., Acetylcholinesterase)", "Cellular reuptake by the presynaptic neuron or glia", "Phagocytosis by wandering macrophages"],
        answer: 3,
        explanation: "Neurotransmitters are removed via diffusion, enzymatic degradation, and cellular reuptake. Macrophages do not actively phagocytize neurotransmitters at the synapse."
    },
    {
        module: "Final Exam",
        question: "If a peripheral nerve axon is severed, it can undergo Wallerian degeneration and potentially repair itself. What is an absolute requirement for this regeneration to occur?",
        options: ["The neuron must be located in the Central Nervous System.", "The cell body must remain intact and Schwann cells must form a neurolemma regeneration tube.", "Astrocytes must migrate to the injury site.", "The severed axon must be unmyelinated."],
        answer: 1,
        explanation: "In the PNS, if the cell body is intact, Schwann cells can form a regeneration tube (neurolemma) to guide the severed axon as it grows back. CNS axons largely lack this capability."
    },
    {
        module: "Final Exam",
        question: "Which type of neural circuit involves an incoming impulse stimulating the first neuron, which stimulates the second, which stimulates the third, while also sending branches back to re-stimulate earlier neurons?",
        options: ["Diverging circuit", "Converging circuit", "Reverberating circuit", "Parallel after-discharge circuit"],
        answer: 2,
        explanation: "A reverberating circuit sends impulses back through the circuit over and over again. This is utilized in rhythmic activities like breathing, waking up, and short-term memory."
    },
    {
        module: "Final Exam",
        question: "Which connective tissue sheath covers the entire gross peripheral nerve (e.g., the sciatic nerve)?",
        options: ["Endoneurium", "Perineurium", "Epineurium", "Myelin sheath"],
        answer: 2,
        explanation: "The epineurium is the outermost tough, fibrous connective tissue sheath covering the entire nerve. The perineurium wraps fascicles, and the endoneurium wraps individual axons."
    },
    {
        module: "Final Exam",
        question: "If a massage client has a herniated intervertebral disc compressing a spinal nerve root, in which direction does the nucleus pulposus typically herniate?",
        options: ["Anteriorly", "Posterolaterally", "Directly inferiorly", "Directly laterally"],
        answer: 1,
        explanation: "Discs most frequently herniate posterolaterally because the posterior longitudinal ligament is thinner than the anterior one, directing the protruding nucleus pulposus backward and sideways into the fragile nerve root."
    },
    {
        module: "Final Exam",
        question: "Striking the 'funny bone' causes tingling and pain. Which nerve, passing behind the medial epicondyle of the humerus, is actually being struck?",
        options: ["Median nerve", "Radial nerve", "Axillary nerve", "Ulnar nerve"],
        answer: 3,
        explanation: "The ulnar nerve passes superficially through the cubital tunnel behind the medial epicondyle. Striking it compresses the nerve against the bone, causing classic 'funny bone' pain."
    },
    {
        module: "Final Exam",
        question: "Which spinal reflex causes you to automatically shift your weight to your opposite leg when you step on a sharp tack?",
        options: ["Stretch reflex", "Flexor (withdrawal) reflex", "Crossed-extensor reflex", "Tendon reflex"],
        answer: 2,
        explanation: "While the flexor reflex pulls the injured foot away, the crossed-extensor reflex simultaneously sends signals across the spinal cord to extend the muscles of the opposite leg to maintain your balance."
    },
    {
        module: "Final Exam",
        question: "In the context of spinal cord anatomy, what is found in the epidural space?",
        options: ["Cerebrospinal fluid", "Adipose (fat) tissue and a network of veins", "The cauda equina", "The denticulate ligaments"],
        answer: 1,
        explanation: "The epidural space, located between the dura mater and the wall of the vertebral canal, is packed with a protective cushion of adipose tissue and blood vessels."
    },
    {
        module: "Final Exam",
        question: "Cerebral Palsy (CP) is a group of motor disorders affecting movement and muscle tone. Which of the following is a hallmark characteristic of CP?",
        options: ["It is a progressive neurodegenerative disease.", "It involves a genetic autoimmune attack on myelin.", "It is a non-progressive permanent disorder resulting from brain damage before, during, or shortly after birth.", "It selectively destroys sensory neurons while leaving motor neurons completely intact."],
        answer: 2,
        explanation: "Cerebral Palsy is non-progressive. The initial brain injury (often due to hypoxia or trauma around the time of birth) causes permanent motor deficits, but the brain lesion itself does not worsen over time."
    },
    {
        module: "Final Exam",
        question: "Which ascending spinal tract is primarily responsible for carrying conscious proprioception, fine touch, and vibration up to the brain?",
        options: ["Lateral spinothalamic tract", "Anterior spinocerebellar tract", "Posterior column-medial lemniscus pathway", "Corticospinal tract"],
        answer: 2,
        explanation: "The posterior (dorsal) columns heavily transmit conscious proprioception, fine touch, and vibratory sensations up to the medulla, where they cross over via the medial lemniscus to the thalamus."
    },
    {
        module: "Final Exam",
        question: "Due to the blood-brain barrier (BBB), many substances cannot cross from the blood into the brain tissue. Which of the following CAN freely cross the BBB?",
        options: ["Large proteins", "Most antibiotics", "Lipid-soluble substances (e.g., oxygen, carbon dioxide, alcohol, anesthetics)", "White blood cells"],
        answer: 2,
        explanation: "Lipid-soluble substances can diffuse easily through the plasma membranes of the endothelial cells making up the BBB, which is why substances like alcohol and general anesthetics affect the brain rapidly."
    },
    {
        module: "Final Exam",
        question: "Cerebrospinal fluid (CSF) flows from the third ventricle down into the fourth ventricle via which narrow channel?",
        options: ["Interventricular foramen", "Central canal", "Cerebral aqueduct (Aqueduct of Sylvius)", "Median aperture"],
        answer: 2,
        explanation: "The cerebral aqueduct passes through the midbrain, securely connecting the third ventricle (in the diencephalon) to the fourth ventricle (between the brainstem and cerebellum)."
    },
    {
        module: "Final Exam",
        question: "On the posterior aspect of the midbrain are four rounded elevations called the corpora quadrigemina. What is the function of the superior colliculi?",
        options: ["They act as the primary relay station for all incoming pain signals.", "They serve as reflex centers for certain visual activities, tracking moving objects, and the visual startle reflex.", "They process conscious hearing and auditory memory.", "They release dopamine to the basal ganglia."],
        answer: 1,
        explanation: "The two superior colliculi handle visual reflexes (like turning your head when you see something out of the corner of your eye), while the two inferior colliculi handle auditory startle reflexes."
    },
    {
        module: "Final Exam",
        question: "The Pineal Gland, which secretes melatonin to promote sleepiness, is anatomically part of which brain region?",
        options: ["Thalamus", "Hypothalamus", "Epithalamus", "Midbrain"],
        answer: 2,
        explanation: "The epithalamus, a small region superior and posterior to the thalamus, consists of the pineal gland and the habenular nuclei."
    },
    {
        module: "Final Exam",
        question: "Where is the primary somatosensory area (the region that precisely pinpoints where somatic sensations like touch and pain originate) located?",
        options: ["Precentral gyrus of the frontal lobe", "Postcentral gyrus of the parietal lobe", "Occipital lobe", "Temporal lobe"],
        answer: 1,
        explanation: "The primary somatosensory area is located directly posterior to the central sulcus on the postcentral gyrus of the parietal lobe."
    },
    {
        module: "Final Exam",
        question: "Which cranial nerve is responsible for controlling the levator palpebrae superioris muscle (which raises the upper eyelid) and four of the six extrinsic eye muscles?",
        options: ["Optic nerve (II)", "Oculomotor nerve (III)", "Trochlear nerve (IV)", "Abducens nerve (VI)"],
        answer: 1,
        explanation: "The Oculomotor nerve (CN III) controls most of the eye's movements, constricts the pupil, and raises the eyelid. Damage can lead to ptosis (drooping eyelid) and strabismus."
    },
    {
        module: "Final Exam",
        question: "Trigeminal Neuralgia (Tic Douloureux) is a pathology characterized by:",
        options: ["Flaccid paralysis of the facial expression muscles on one side of the face.", "Extreme, sudden, burning facial pain triggered by light touch or chewing, affecting Cranial Nerve V.", "Progressive loss of vision and hearing.", "Inability to move the tongue during speech."],
        answer: 1,
        explanation: "Trigeminal Neuralgia is a severe neuropathic pain condition affecting the Trigeminal nerve (CN V). The pain is often described as the most agonizing pain known to medicine, triggered by mundane actions like brushing teeth."
    },
    {
        module: "Final Exam",
        question: "In patients with epilepsy, a seizure is fundamentally caused by:",
        options: ["A severe drop in systemic blood pressure.", "An abnormal, synchronous, and excessive electrical discharge of millions of neurons in the brain.", "The rupture of a major cerebral artery.", "An autoimmune attack against myelin."],
        answer: 1,
        explanation: "Epileptic seizures are transient bouts of abnormal, excessive brain electrical activity. They can manifest as convulsions, sensory disturbances, or brief losses of consciousness."
    },
    {
        module: "Final Exam",
        question: "Which two specific microscopic lesions in the brain are the hallmark pathophysiological signs of Alzheimer's disease?",
        options: ["Demyelinated plaques and destroyed Schwann cells.", "Ischemic necrosis and hemorrhagic pools.", "Beta-amyloid plaques (outside neurons) and neurofibrillary tangles (inside neurons).", "Lewy bodies and massive dopamine depletion."],
        answer: 2,
        explanation: "Alzheimer's disease is characterized by the accumulation of toxic beta-amyloid plaques between neurons and twisted tau protein neurofibrillary tangles inside neurons, leading to massive neuronal death."
    },
    {
        module: "Final Exam",
        question: "In the autonomic nervous system, what happens when Acetylcholine (ACh) binds to Nicotinic receptors?",
        options: ["It always causes an inhibitory (relaxing) response.", "It causes a slow, prolonged, G-protein coupled response.", "It always causes excitation (depolarization) of the postsynaptic cell.", "It triggers the massive release of adrenaline from the spleen."],
        answer: 2,
        explanation: "Nicotinic receptors (found on all autonomic postganglionic cell bodies and at the neuromuscular junction) are ligand-gated ion channels. When ACh binds, they open immediately, always causing a rapid excitatory depolarization."
    },
    {
        module: "Final Exam",
        question: "During heavy parasympathetic stimulation, what is the combined effect on the heart and the digestive system?",
        options: ["Heart rate increases; Digestion ceases.", "Heart rate decreases; Digestion is heavily stimulated.", "Both heart rate and digestion are stimulated.", "Both heart rate and digestion are inhibited."],
        answer: 1,
        explanation: "The parasympathetic division ('rest-and-digest') lowers the heart rate to conserve energy while aggressively promoting gastrointestinal motility and secretion."
    },
    {
        module: "Final Exam",
        question: "To quickly elevate blood pressure and widen airways during an emergency, the sympathetic division releases neurotransmitters as well as hormones. Where do these sympathetic hormones come from?",
        options: ["The anterior pituitary", "The adrenal medulla", "The pineal gland", "The thyroid gland"],
        answer: 1,
        explanation: "The adrenal medulla is a modified sympathetic ganglion. Upon sympathetic stimulation, its chromaffin cells dump Epinephrine (80%) and Norepinephrine (20%) directly into the blood to prolong the fight-or-flight response."
    },
    {
        module: "Final Exam",
        question: "Where are the prevertebral (collateral) ganglia of the sympathetic nervous system typically located?",
        options: ["Inside the walls of the target organs.", "In a vertical chain directly alongside the spinal cord.", "Anterior to the vertebral column, close to large abdominal arteries (e.g., celiac ganglion).", "Within the cranial vault."],
        answer: 2,
        explanation: "Prevertebral ganglia (like the celiac, superior mesenteric, and inferior mesenteric ganglia) lie anterior to the spine and predominantly innervate organs below the diaphragm."
    },
    {
        module: "Final Exam",
        question: "Complex Regional Pain Syndrome (CRPS) is a severe, chronic pain condition that typically affects an arm or leg after an injury. What is a key pathophysiological feature of CRPS?",
        options: ["It is caused exclusively by a bacterial infection in the joint.", "It features extreme neuroinflammation and severe autonomic nervous system dysregulation (e.g., abnormal sweating, skin color, and temperature changes).", "It only affects the central nervous system, sparing peripheral nerves.", "It is easily cured with basic NSAIDs."],
        answer: 1,
        explanation: "CRPS involves maladaptive neuroplasticity where the sympathetic nervous system becomes wildly dysregulated, causing profound, burning pain, swelling, and trophic skin changes vastly out of proportion to the original injury."
    },
    {
        module: "Final Exam",
        question: "Spina Bifida is a congenital neural tube defect where the vertebral arches fail to close during embryonic development. What maternal dietary deficiency is a massive risk factor for this condition?",
        options: ["Vitamin C", "Calcium", "Iron", "Folic acid (Vitamin B9)"],
        answer: 3,
        explanation: "A deficiency in folic acid during the earliest weeks of pregnancy drastically increases the risk of neural tube defects like spina bifida and anencephaly."
    },
    {
        module: "Final Exam",
        question: "Some sensory receptors adapt rapidly to constant stimuli (like not feeling your clothes after you put them on), while others adapt very slowly. Which receptors are inherently slowly adapting (tonic)?",
        options: ["Pacinian corpuscles (vibration)", "Meissner corpuscles (light touch)", "Nociceptors (pain)", "Hair root plexuses"],
        answer: 2,
        explanation: "Nociceptors (pain receptors) and proprioceptors are slowly adapting. This is protective; the body needs continuous awareness of tissue damage and limb position, so these receptors do not 'fade out' easily."
    },
    {
        module: "Final Exam",
        question: "What is the physiological difference between 'fast pain' and 'slow pain'?",
        options: ["Fast pain travels on unmyelinated C fibers; Slow pain travels on myelinated A-delta fibers.", "Fast pain is precisely localized and travels on myelinated A-delta fibers; Slow pain is a diffuse, aching, throbbing sensation traveling on unmyelinated C fibers.", "Fast pain only occurs in internal organs; Slow pain only occurs on the skin.", "Fast pain relies on Acetylcholine; Slow pain relies on Dopamine."],
        answer: 1,
        explanation: "Fast pain (sharp, prickling) is rapidly conducted via myelinated A-delta fibers and is precisely localized. Slow pain (burning, aching) is conducted via slower, unmyelinated C fibers and tends to be more diffuse."
    },
    {
        module: "Final Exam",
        question: "If a patient suffers a severe stroke in the right primary motor cortex, what type of paralysis will they exhibit?",
        options: ["Flaccid paralysis on the left side of the body.", "Spastic paralysis on the left side of the body.", "Spastic paralysis on the right side of the body.", "Flaccid paralysis on both sides of the body."],
        answer: 1,
        explanation: "Damage to upper motor neurons (in the cortex) results in spastic paralysis (hypertonia, exaggerated reflexes) on the contralateral (opposite) side of the body due to the decussation of tracts in the medulla."
    },
    {
        module: "Final Exam",
        question: "During Rapid Eye Movement (REM) sleep, which unique physiological phenomenon occurs to prevent us from acting out our dreams?",
        options: ["Massive sympathetic surges cause rigid muscle locking.", "The brainstem aggressively inhibits somatic motor neurons, causing temporary skeletal muscle atonia (paralysis).", "The cerebellum assumes full control of all voluntary movement.", "The spinal cord completely shuts off sensory input."],
        answer: 1,
        explanation: "During REM sleep, alongside high brain activity and dreaming, descending motor pathways are profoundly inhibited, causing temporary skeletal muscle paralysis to protect the sleeper."
    },
    {
        module: "Final Exam",
        question: "A patient suffers a traumatic brain injury and can clearly remember their childhood, but cannot form any new memories or remember what they ate for breakfast. This condition is called:",
        options: ["Retrograde amnesia", "Anterograde amnesia", "Synesthesia", "Aphasia"],
        answer: 1,
        explanation: "Anterograde amnesia is the inability to form new memories after the neurological injury occurs, often due to severe damage to the hippocampus. Retrograde amnesia is the loss of past memories."
    },
    {
        module: "Final Exam",
        question: "Olfactory transduction begins when an odorant binds to an olfactory receptor protein. This binding activates a G-protein. What is the immediate next step?",
        options: ["Calcium channels slam shut.", "Adenylate cyclase produces cyclic AMP (cAMP), which opens sodium channels to depolarize the cell.", "The cell immediately undergoes mitosis.", "Acetylcholine is released into the nasal cavity."],
        answer: 1,
        explanation: "Olfactory receptors use a second-messenger system. The G-protein activates adenylate cyclase to produce cAMP. The cAMP opens a sodium (Na+) channel, causing the depolarizing receptor potential."
    },
    {
        module: "Final Exam",
        question: "Which of the following is NOT one of the five primary tastes recognized by gustatory receptor cells?",
        options: ["Umami", "Sour", "Spicy (Pungent)", "Bitter"],
        answer: 2,
        explanation: "The five primary tastes are sour, sweet, bitter, salty, and umami (savory/meaty). 'Spicy' is not a taste; it is actually a pain/heat sensation transmitted by the Trigeminal nerve."
    },
    {
        module: "Final Exam",
        question: "In the center of the retina is a small depression called the fovea centralis. Why is this the area of highest visual acuity (sharpest vision)?",
        options: ["It contains only rods and no cones.", "It is the exact spot where the optic nerve exits the eye.", "It contains a high concentration of cones and lacks overlying blood vessels to scatter the light.", "It is the only part of the retina covered in myelin."],
        answer: 2,
        explanation: "The fovea centralis (located within the macula lutea) contains exclusively cones. Furthermore, the bipolar and ganglion cell layers are pushed aside here, allowing light to hit the cones directly for ultra-sharp color vision."
    },
    {
        module: "Final Exam",
        question: "A client who has 'Myopia' (nearsightedness) has an eyeball that is physically too long, or a lens that is too thick. Where does the visual image focus?",
        options: ["Directly on the retina, but inverted.", "In front of the retina.", "Behind the retina.", "On the optic disc (blind spot)."],
        answer: 1,
        explanation: "In myopia, because the eyeball is too long relative to the focusing power of the cornea and lens, the image converges and focuses in front of the retina, making distant objects appear blurry."
    },
    {
        module: "Final Exam",
        question: "What is the protective function of the tensor tympani and stapedius muscles in the middle ear?",
        options: ["They vibrate to generate low-frequency sounds.", "They pump fluid into the cochlea.", "They tightly contract in response to loud noises, restricting the movement of the ossicles to prevent inner ear damage.", "They open the Eustachian tube during yawning."],
        answer: 2,
        explanation: "These tiny muscles govern the tympanic reflex. When exposed to dangerously loud sounds, they contract to dampen the vibrations of the malleus and stapes, protecting the fragile hair cells of the cochlea."
    },
    {
        module: "Final Exam",
        question: "Inside the cochlea, the membranous labyrinth (cochlear duct) is filled with a unique fluid that is extremely high in potassium (K+). What is this fluid called?",
        options: ["Perilymph", "Endolymph", "Cerebrospinal fluid", "Aqueous humor"],
        answer: 1,
        explanation: "Endolymph fills the membranous labyrinth. Its unusually high concentration of K+ is critical for generating auditory signals when the hair cells bend and mechanically open their K+ channels."
    },
    {
        module: "Final Exam",
        question: "Meniere's Disease is an inner ear disorder characterized by episodic vertigo, tinnitus, and fluctuating hearing loss. What is the suspected pathophysiological cause?",
        options: ["A bacterial infection eating the ossicles.", "An autoimmune destruction of the tympanic membrane.", "An overproduction or under-absorption of endolymph, causing increased pressure and swelling within the membranous labyrinth.", "Calcification of the stapes in the oval window."],
        answer: 2,
        explanation: "Meniere's disease is linked to endolymphatic hydrops—an abnormal buildup of endolymph fluid in the inner ear that distorts the structures responsible for hearing and balance."
    },
    {
        module: "Final Exam",
        question: "What distinguishes Encephalitis from Meningitis?",
        options: ["Encephalitis is a viral infection of the brain tissue (parenchyma) itself, while Meningitis is an inflammation of the protective layers (meninges) surrounding the brain and spinal cord.", "Encephalitis is always bacterial; Meningitis is always viral.", "Encephalitis only affects the spinal cord; Meningitis only affects the brain.", "Encephalitis is an autoimmune disorder; Meningitis is a genetic mutation."],
        answer: 0,
        explanation: "Meningitis affects the meninges and CSF, often causing a stiff neck and severe headache. Encephalitis is an acute inflammation of the actual brain tissue, frequently causing severe neurological deficits, confusion, and seizures."
    },
    {
        module: "Final Exam",
        question: "In the cerebral cortex, language and logic are typically lateralized to the left hemisphere, while the right hemisphere heavily dominates which functions?",
        options: ["Math and scientific reasoning.", "Spoken language and grammar.", "Visual-spatial awareness, artistic/musical creativity, and emotional context of language.", "Regulating basic heart rate and breathing."],
        answer: 2,
        explanation: "For most people, the right hemisphere is the creative side, dominating in spatial pattern recognition, facial recognition, emotional processing, and artistic awareness."
    },
    {
        module: "Final Exam",
        question: "Huntington's Disease is a fatal genetic disorder characterized by rapid, jerky, involuntary movements called chorea. This is caused by the degeneration of which specific brain region?",
        options: ["The Cerebellum", "The Basal Ganglia (specifically the corpus striatum)", "The primary motor cortex", "The Occipital lobe"],
        answer: 1,
        explanation: "Huntington's involves the destruction of GABA and ACh secreting neurons in the basal ganglia. Without these inhibitory signals, the motor cortex becomes hyperactive, causing the hallmark choreatic movements."
    },
    {
        module: "Final Exam",
        question: "Trace the correct auditory pathway from the inner ear to the brain.",
        options: ["Vestibulocochlear nerve -> Medulla -> Inferior colliculus -> Thalamus -> Temporal lobe", "Vestibulocochlear nerve -> Pons -> Superior colliculus -> Hypothalamus -> Parietal lobe", "Vestibulocochlear nerve -> Cerebellum -> Midbrain -> Occipital lobe", "Vagus nerve -> Thalamus -> Temporal lobe"],
        answer: 0,
        explanation: "Auditory impulses travel via CN VIII to the cochlear nuclei in the medulla, cross over, travel up to the inferior colliculus (midbrain), relay through the medial geniculate nucleus of the thalamus, and end in the primary auditory cortex in the temporal lobe."
    },
    {
        module: "Final Exam",
        question: "Myofascial Pain Syndrome is characterized by the presence of highly localized, hyper-irritable nodules within tight bands of muscle fascia. What are these specific nodules called?",
        options: ["Amyloid plaques", "Tender points", "Trigger points", "Fibrotic cysts"],
        answer: 2,
        explanation: "Trigger points are the hallmark of myofascial pain syndrome. When pressed, they not only cause severe local pain but often refer pain to a predictable distant area."
    },
    {
        module: "Final Exam",
        question: "Attention Deficit Hyperactivity Disorder (ADHD) involves complex neurodevelopmental delays. Which neurotransmitters are primarily dysregulated in the prefrontal cortex of patients with ADHD?",
        options: ["Acetylcholine and Glutamate", "Dopamine and Norepinephrine", "Serotonin and Endorphins", "GABA and Substance P"],
        answer: 1,
        explanation: "ADHD pathophysiology heavily involves the under-activity or rapid reuptake of Dopamine and Norepinephrine in the frontal lobe, impairing executive function, focus, and impulse control."
    },
    {
        module: "Final Exam",
        question: "What is a primary distinction between a Migraine headache and a Tension-type headache?",
        options: ["Tension headaches cause a visual aura; Migraines do not.", "Migraines are often unilateral, throbbing, worsened by activity, and accompanied by nausea/photophobia. Tension headaches are usually bilateral, non-throbbing, and feel like a tight band around the head.", "Migraines are caused by muscular trigger points; Tension headaches are caused by cerebral hemorrhage.", "Migraines only last 15 minutes; Tension headaches last for months."],
        answer: 1,
        explanation: "Migraines are severe neurovascular events characterized by intense, throbbing, often unilateral pain with systemic symptoms (nausea, light sensitivity). Tension headaches are musculo-skeletal, presenting as a dull, bilateral 'squeezing' pain without systemic symptoms."
    },
    {
        module: "Final Exam",
        question: "Which neuroglial cell type forms the myelin sheath in the Peripheral Nervous System and assists deeply in axon regeneration?",
        options: ["Oligodendrocytes", "Astrocytes", "Schwann cells", "Ependymal cells"],
        answer: 2,
        explanation: "Schwann cells myelinate PNS axons and form the neurolemma, which guides nerve repair. Oligodendrocytes myelinate CNS axons but do not aid in repair."
    },
    {
        module: "Final Exam",
        question: "A polysynaptic reflex arc involves at least three neurons. Which neuron is entirely confined within the Central Nervous System, analyzing the sensory input and directing the motor output?",
        options: ["The afferent neuron", "The interneuron (association neuron)", "The efferent neuron", "The preganglionic neuron"],
        answer: 1,
        explanation: "Interneurons are located entirely within the CNS (brain and spinal cord). They integrate incoming sensory information and elicit the appropriate motor response."
    },
    {
        module: "Final Exam",
        question: "In the physiology of cerebrospinal fluid, why is the arachnoid villi's reabsorption rate critical?",
        options: ["It must filter out glucose from the brain.", "It must exactly match the production rate by the choroid plexus (approx. 20 mL/hr) to maintain a constant, safe intracranial pressure.", "It must pump CSF backward into the ventricles during sleep.", "It destroys old red blood cells."],
        answer: 1,
        explanation: "CSF is produced continuously. If the arachnoid villi cannot reabsorb it back into the venous sinuses at the exact same rate (due to a blockage or tumor), fluid builds up, causing hydrocephalus and massive brain damage."
    },
    {
        module: "Final Exam",
        question: "Damage to the Wernicke's area (usually in the left temporal/parietal lobe) results in which type of aphasia?",
        options: ["Non-fluent aphasia: inability to articulate or form words, though understanding is intact.", "Fluent aphasia: ability to speak clearly, but the words make no sense ('word salad') and the patient cannot comprehend spoken language.", "Global aphasia: complete paralysis of the tongue.", "Visual aphasia: inability to recognize written letters."],
        answer: 1,
        explanation: "Wernicke's area is responsible for language comprehension. Damage leads to fluent (receptive) aphasia, where patients can physically speak fluidly, but cannot understand language or form logical sentences."
    }
