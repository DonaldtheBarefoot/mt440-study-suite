# RMT-Student-Hub

A progressive web application and clinical simulation engine designed specifically for the MT390, MT440, and MT450 massage therapy curriculum. This suite provides an interactive, evidence-based testing environment for anatomy, pathology, orthopedic assessments, and Oral Practical protocols.

## Core Features

* **Clinical Simulation Engine:** Features randomized, curriculum-aligned multiple-choice questions with dynamic difficulty toggles and modular curriculum selection.
* **Modular Exam Configuration:** Users can tailor their study sessions by selecting specific chapters/quizzes or compiling them into a massive, randomized final exam.
* **Evidence-Based Rationales:** Every question includes a detailed clinical rationale supported by precise APA citations (e.g., Magee, Werner, Tortora, Norris) upon submission.
* **3-Tier PDF Print Engine:** Custom `@media print` CSS overrides allow users to generate physical 8.5x11-inch study materials directly from the browser:
  * **Study Guide:** Prints questions, correct answers, and clinical rationales.
  * **Blank Exam:** Strips all UI elements, correct answer highlights, and rationales for realistic testing.
  * **Answer Key:** Prints only the questions and the correct answers.
* **Serverless Architecture:** Built entirely with client-side technologies (Vanilla JS and React). No backend database or Node.js runtime is required.

## Included Modules

1. **A&P: Nervous System (MT450):** Master exam simulator featuring a 200-question databank. Covers nervous tissue, spinal cord/plexuses, the brain & cranial nerves, the ANS, special senses, and advanced clinical pathologies. Includes a custom module selection screen.
2. **Treatments II - Quiz 4 (v2.0):** Features a vertical-scroll layout, integrated hints, and the full 3-Tier Print Engine.
3. **Treatments II - Quiz 4 (v1.0):** The original interactive carousel-style study suite.
4. **A&P: Urinary System:** Includes macroscopic anatomy diagram labeling and physiological phase testing.

## Technical Stack

* **Frontend Framework:** Vanilla HTML/JS & React 18 (via UMD CDN)
* **Styling:** Tailwind CSS (via JIT CDN) & Custom CSS variables
* **Compiler:** Babel Standalone (In-browser JSX transformation)
* **Markdown Parsing:** Marked.js (for rendering clinical study guides)

## Authors

* **Donald Krauss** - *Willis College, Massage Therapy Program (Class of 2026)*

## Academic Integrity

All clinical rationales, anatomical definitions, and orthopedic protocols contained within the data batches are meticulously sourced from the required MT390, MT440, and MT450 course literature. This tool is designed purely for academic study and curriculum review.
