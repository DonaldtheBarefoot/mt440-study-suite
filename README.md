# MT440 Master Study Suite

A progressive web application and clinical simulation engine designed specifically for the MT390 and MT440 massage therapy curriculum. This suite provides an interactive, evidence-based testing environment for pathology, orthopedic assessments, and Oral Practical protocols.

## Core Features

* **Clinical Simulation Engine:** Features randomized, curriculum-aligned multiple-choice questions with dynamic difficulty toggles and modular curriculum selection.
* **Evidence-Based Rationales:** Every question includes a detailed clinical rationale supported by precise APA citations (e.g., Magee, Werner, Andrade) upon submission.
* **3-Tier PDF Print Engine:** Custom `@media print` CSS overrides allow users to generate physical 8.5x11-inch study materials directly from the browser:
  * **Study Guide:** Prints questions, correct answers, and clinical rationales.
  * **Blank Exam:** Strips all UI elements, correct answer highlights, and rationales for realistic testing.
  * **Answer Key:** Prints only the questions and the correct answers.
* **Serverless Architecture:** Built entirely with client-side technologies. No backend database or Node.js runtime is required.

## Included Modules

1. **Treatments II - Quiz 4 (v2.0):** Features a vertical-scroll layout, integrated hints, and the full 3-Tier Print Engine.
2. **Treatments II - Quiz 4 (v1.0):** The original interactive carousel-style study suite.
3. **A&P: Urinary System:** Includes macroscopic anatomy diagram labeling and physiological phase testing.

## Technical Stack

* **Frontend Framework:** React 18 (via UMD CDN)
* **Styling:** Tailwind CSS (via JIT CDN)
* **Compiler:** Babel Standalone (In-browser JSX transformation)
* **Markdown Parsing:** Marked.js (for rendering clinical study guides)
* **Mathematics:** KaTeX (for physiological formulas)

## Local Development & Deployment

Because this application dynamically fetches local data files (such as `.md` and `.js` question banks) using the JavaScript `fetch()` API, **it cannot be run by double-clicking the `index.html` file directly from your hard drive.** Modern browsers will block this due to Cross-Origin Resource Sharing (CORS) security policies.

### To Run Locally:
You must serve the directory using a local HTTP server. 
* If using VS Code, install the **Live Server** extension and click "Go Live".
* Alternatively, use Python from your terminal: `python -m http.server 8000`

### To Deploy (GitHub Pages):
This suite is optimized for GitHub Pages.
1. Navigate to your repository **Settings**.
2. Select **Pages** from the left sidebar.
3. Under **Build and deployment**, set the source to deploy from your main branch.
4. The application will be live at your `github.io` URL within minutes. Note: Ensure all `batch_x_questions.js` files reside in the exact same directory as their parent `index.html` to prevent 404 fetch errors.

## Authors

* **Lord Donald Guindon** - *Willis College, Massage Therapy Program (Class of 2026)*

## Academic Integrity

All clinical rationales and orthopedic protocols contained within the data batches are meticulously sourced from the required MT390/MT440 course literature. This tool is designed for academic study and curriculum review.
