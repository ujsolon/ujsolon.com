# Ulyses Solon - Personal Website

Welcome! This repository contains the source code for my personal website, which serves as an online resume, portfolio, and personal showcase.


---

## Table of Contents
- [News](#-news)
- [Work Experience](#-work-experience)
- [Portfolio](#portfolio)
- [Education](#education)
- [Personal](#personal)
- [Links](#links)
- [Domain and Hosting Plan](#-domain-and-hosting-plan)
  - [Summary of Recommended Setup](#-summary-of-recommended-setup)
  - [Notes](#-notes)
  - [SSL and DNS](#-ssl-and-dns)
  - [Long-Term Plan](#-long-term-plan)
- [Disclaimer](#disclaimer)
- [License](#license)

---

## News

The **News** section on the website displays recent updates and announcements, which are loaded dynamically from the `news.json` file.

**How to update the News section:**
- Open the [`news.json`](news/news.json) file in [`/news`](https://github.com/ujsolon/ujsolon.com/tree/master/news).
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
The how page will automatically display the latest items.

To access previously displayed info, go to [https://news.ujsolon.com/](https://news.ujsolon.com/)

## Work Experience

### AI Developer / Manager — Capgemini Philippines Corp.
🗓️ *Aug 2025 – Present*  
- Collaborated with cross-functional teams in ideation sessions to design AI-driven workflows and build intelligent applications.  
- Participated in both internal and external hackathon competitions to develop and showcase Generative AI solutions aligned with business and client objectives.  

**Key Technologies:** AWS Cloud, AWS SageMaker, Strands Agents, Banking Technologies


### Development Team Lead — Accenture Inc.
🗓️ *Jun 2024 – Present*  
- Lead developers, providing mentorship and fostering a collaborative environment to enhance team performance and skill development.  
- Oversee the design, development, and deployment of AI-driven solutions, ensuring adherence to best practices in technical architecture and coding standards.  
- Drive the technical strategy and architecture for scalable and efficient database design and cloud infrastructure, leveraging advanced tools and methodologies.  
- Coordinate cross-functional requirements, working closely with stakeholders to align technical objectives with business goals.  

**Key Technologies:** Azure DevOps, Terraform, Database Design, Technology Architecture, Azure AI Foundry, MongoDB


### AI Developer — Accenture Inc.
🗓️ *Aug 2023 – Jun 2024*  
- Developed a web app solution with integrated chat functionality, leveraging Retrieval-Augmented Generation (RAG) for advanced knowledge querying from user-uploaded databases.  
- Responsible for coding, testing, and deploying code in the Azure Cloud environment under the Serverless architecture framework.  
- Successfully transitioned the solution from company internal use to client projects, securing paying customers.  

**Key Technologies:** Python, LangChain, Azure Function App, Azure App Service, PostgreSQL


### Researcher / Instructor — Institute of Mathematics, University of the Philippines Diliman
🗓️ *Aug 2014 – Jun 2023*  
- Co-authored 5 peer-reviewed academic publications and presented research findings at international conferences.  
- Mentored over 1000 students, receiving strongly positive feedback from 98% of mentees.  
- Organized talks and meetings with faculty members, fostering collaborations with external institutions.  

**Key Technologies:** TensorFlow, Google BigQuery, Python, Stable Diffusion

---

## Portfolio

Below are selected projects that highlight my experience in AI, data science, and web app development.

### Ano Ulam? — AI-Powered Filipino Meal Planning Web App  
🔗 [anoulam.vercel.app](https://anoulam.vercel.app)  
- A full-stack AI-powered web app that simplifies meal planning and grocery shopping by suggesting recipes based on available ingredients or generating shopping lists from a chosen dish.  
- Built with a FastAPI backend and a responsive Next.js frontend.  
- Integrates Google’s Gemini AI to recommend localized Filipino recipes and cooking instructions.  
- Uses Cloudinary CDN to fetch relevant dish images.  
- Allows users to filter by dietary preferences (e.g., vegan, gluten-free), view step-by-step instructions, and reduce food waste through personalized recommendations.  
- Emphasizes user experience, food accessibility, and intelligent automation in daily cooking.  

**Key Technologies:** Vercel, Next.js, React, Gemini AI, FastAPI, Cloudinary  


### QR Code Generative Imaging — Exploring ControlNet with Stable Diffusion  
🔗 [GitHub Repository](https://github.com/ujsolon/QR-code-generative-imaging)  
- Explores the combination of functional QR codes with artistic image generation using the Stable Diffusion neural network model and ControlNet.  
- Creates visually compelling images conditioned on QR code inputs, balancing aesthetics with functionality.  
- Employs the AUTOMATIC1111 Stable Diffusion GUI and various checkpoints such as Dreamshaper and RevAnimated to test diverse styles.  
- Successfully generated scannable QR codes embedded within intricate designs, overcoming challenges such as long processing times.  
- Demonstrates potential applications in enhancing digital and physical presentations by merging art with functionality.  

**Key Technologies:** Python, Hugging Face, PyTorch, Scikit-learn, Jupyter Notebook  


### NBASeriesML — Predicting Game 7 Outcomes in NBA Playoffs  
🔗 [GitHub Repository](https://github.com/ujsolon/NBASeriesML)  
- A machine learning project that predicts outcomes of NBA Game 7 matchups using logistic regression trained on point differentials from 147 historical games.  
- Initially applied to the 2023 Celtics–Heat series with a 55% Miami win prediction; later extended to the 2025 Oklahoma City Thunder–Indiana Pacers finals with a 71% OKC win probability.  
- Implements batch gradient descent on six-game input vectors for model training.  
- Showcases how data-driven approaches can enhance forecasting and strategic analysis in professional basketball through interpretable statistical modeling.  

**Key Technologies:** Python, Pandas, NumPy, Scikit-learn, Matplotlib, Jupyter Notebook

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

## Domain and Hosting Plan

This document outlines the planned domain and hosting structure for **ujsolon.com** and related projects.

### Summary of Recommended Setup

| Purpose | Address | Platform |
|----------|----------|-----------|
| **CV / About / Links** | [ujsolon.com](https://ujsolon.com) | Static site (Vercel / GitHub Pages) |
| **Portfolio** | [portfolio.ujsolon.com](https://portfolio.ujsolon.com) | Vercel / Next.js |
| **Blog** | [blog.ujsolon.com](https://blog.ujsolon.com) → [ujsolon.wordpress.com](https://ujsolon.wordpress.com) | WordPress (free) |
| **Project Demos** | [bosesberde.ujsolon.online](https://bosesberde.ujsolon.online) *(temporary)* | Vercel / AWS |
| **Future SaaS** | `appname.ujsolon.com` | Cloud deployment (AWS / Azure / GCP) |


### Notes

- **ujsolon.com** serves as the permanent root domain and main identity hub.
- Subdomains (e.g., `portfolio`, `blog`, `appname`) are used to separate content and deployments.
- **ujsolon.online** acts as a sandbox / experimental domain, to be used for up to 2 years.
- The **blog** remains hosted on WordPress free tier, accessed via subdomain redirect.
- Future SaaS or hosted apps will use subdomains under `ujsolon.com` for branding consistency.


### SSL and DNS

- All domains are managed via **Namecheap**.
- Free HTTPS certificates are provided automatically by **Vercel** or **GitHub Pages**.
- AWS deployments use **ACM certificates** for HTTPS.
- Redirects (like `news.ujsolon.com → ujsolon.com/news`) are configured via **Namecheap URL Redirect Records**.


### Long-Term Plan

| Domain | Renewal Plan | Purpose |
|---------|---------------|----------|
| **ujsolon.com** | Renew indefinitely | Core personal / professional site |
| **ujsolon.online** | Use for 2 years, then retire | Sandbox and demo hosting |
| **ujsolon.blog** | Optional | May be replaced by `blog.ujsolon.com` redirect |

---

*Maintained by [Ulyses A. Solon Jr.](https://ujsolon.com) — updated October 2025.*


### Disclaimer

All trademarks, logos and brand names are the property of their respective owners.  
&copy; 2024 Ulyses Solon. All rights reserved.

---

### License

This project is open source and available under the [MIT License](LICENSE)