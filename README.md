# Ulyses Solon - Personal Website

Welcome! This repository contains the source code for my personal website, which serves as an online resume, portfolio, and personal showcase.

---

## Contents

### News

The **News** section on the website displays recent updates and announcements, which are loaded dynamically from the `news.json` file.

**How to update the News section:**
- Open the [`news.json`](news.json) file in the project root.
- Add, edit, or remove news items in the `"posts"` array. Each item should have:
  - `title`: The headline of the news item.
  - `content`: The main text or summary.
  - `platform`: The source/platform (e.g., LinkedIn, GitHub).
  - `date`: The date in `YYYY-MM-DD` format.
  - `url`: (Optional) A link to the full post or announcement.
- Only three topmost entries in `news.json` will be shown in the HTML output.
- Rendering of the fetched results can sometimes take time. A previous CORS issue on the fetch was identified via console logs, but is not present in the Github Pages deployment.

**Example:**
```json
{
  "posts": [
    {
      "title": "Completing TechStar 2025 Journey",
      "content": "I'm thrilled to share that I've successfully completed the TechStar 2025 Program! ...",
      "platform": "LinkedIn",
      "date": "2025-08-04",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7357906588973633536/"
    }
    // Add more news items here
  ]
}
```
The website will automatically display the latest
### Work

- **Development Team Lead / Accenture Inc.** (Jun 2024 - Present)  
  Lead developers, mentor team, oversee AI-driven solutions, drive technical strategy for scalable database and cloud infrastructure, coordinate with stakeholders.
  - **Key Technologies:** Azure DevOps, Terraform, Database Design, Technology Architecture, Azure AI Foundry, MongoDB

- **AI Developer / Accenture Inc.** (Aug 2023 - Jun 2024)  
  Developed web app with chat and Retrieval-Augmented Generation (RAG), deployed on Azure Serverless, transitioned solution to client projects.
  - **Key Technologies:** Python AI/ML, LangChain, Azure Function App, Azure App Service, PostgreSQL

- **Researcher/Instructor / Institute of Mathematics, UP Diliman** (Aug 2014 - Jun 2023)  
  Co-authored publications, presented research, mentored 1000+ students, organized academic collaborations.
  - **Key Technologies:** TensorFlow, Google BigQuery, Python, Stable Diffusion

---

### Portfolio

- **[QR Code Generative Imaging: Exploring ControlNet with Stable Diffusion](https://github.com/ujsolon/QR-code-generative-imaging)**  
  Combines QR codes with artistic image generation using Stable Diffusion and ControlNet. Explores aesthetics and functionality for digital/physical presentations.
  - **Technologies:** Python, Hugging Face, PyTorch, Scikit-learn, Jupyter Notebook

- **[NBASeriesML: Predicting Game 7 Outcomes in NBA Playoffs](https://github.com/ujsolon/NBASeriesML)**  
  Uses machine learning to predict NBA Game 7 outcomes, focusing on Celtics vs. Heat 2023. Trained on historical data for sports analytics.
  - **Technologies:** Python, Pandas, NumPy, Scikit-learn, Matplotlib, Jupyter Notebook

---

### Education

- **Université de Pau et des Pays de l'Adour** (Sep 2018 - Sep 2021)  
  Doctoral Candidate (unfinished)

- **University of the Philippines, Diliman** (Jun 2012 - Jan 2016)  
  Master of Science in Mathematics

---

### Personal

Outside of work, I enjoy chess, Dota 2, basketball, jogging, and DIY projects. My experiences span summers in Laguna, university life in Diliman, and living in France during the pandemic.

#### Gallery
- Masters graduation with Mom
- Sunshine along the Seine with Wife
- Christmas photo with Baby

---

### Links

- [Email](mailto:ujsolon@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/ujsolon)
- [GitHub](https://github.com/ujsolon)
- [WordPress](https://ujsolon.wordpress.com)
- [ResearchGate](https://www.researchgate.net/profile/Ulyses_Jr_Solon?ev=hdr_xprf)
- [Twitter](https://twitter.com/ujsolon)
- [Facebook](https://facebook.com/ujsolon)
- [YouTube](https://youtube.com/@ujsolon)

---

### Disclaimer

All trademarks, logos and brand names are the property of their respective owners.  
&copy; 2024 Ulyses Solon. All rights reserved.

---

### License

This project is open source and available under the [MIT License](LICENSE)