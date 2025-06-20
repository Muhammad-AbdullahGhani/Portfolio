// PDF generation utility using jsPDF
export const generateResumePDF = () => {
  // We'll use the browser's built-in PDF generation capabilities
  // Create a new window with the resume content formatted for PDF
  const resumeWindow = window.open("", "_blank")

  if (!resumeWindow) {
    alert("Please allow popups to download the PDF resume")
    return
  }

  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Muhammad Abdullah Ghani - Resume</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: white;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #2563eb;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .name {
          font-size: 28px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 5px;
        }
        .title {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 10px;
        }
        .contact {
          font-size: 14px;
          color: #4b5563;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 5px;
          margin-bottom: 15px;
        }
        .subsection {
          margin-bottom: 15px;
        }
        .subsection-title {
          font-size: 16px;
          font-weight: bold;
          color: #374151;
          margin-bottom: 5px;
        }
        .company {
          font-weight: bold;
          color: #1f2937;
        }
        .date {
          color: #6b7280;
          font-style: italic;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .skill {
          background: #eff6ff;
          color: #1e40af;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          border: 1px solid #dbeafe;
        }
        ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 4px;
        }
        .project {
          margin-bottom: 20px;
          padding: 15px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #f9fafb;
        }
        .project-title {
          font-size: 16px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 8px;
        }
        .tech-stack {
          margin-top: 8px;
        }
        .tech-item {
          display: inline-block;
          background: #dbeafe;
          color: #1e40af;
          padding: 2px 6px;
          margin: 2px;
          border-radius: 3px;
          font-size: 11px;
        }
        @media print {
          body { margin: 0; padding: 15px; }
          .section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">MUHAMMAD ABDULLAH GHANI</div>
        <div class="title">Software Engineer</div>
        <div class="contact">
          abdullaghani206@gmail.com | +92 3168848001 | Islamabad<br>
          LinkedIn: linkedin.com/in/muhammad-abdullahghani206 | GitHub: github.com/Muhammad-AbdullahGhani
        </div>
      </div>

      <div class="section">
        <div class="section-title">PROFILE</div>
        <p>Aspiring MERN Stack Developer, AI Enthusiast, and DevOps Practitioner exploring and building full-stack web applications, intelligent systems, and managing CI/CD pipelines for efficient deployment.</p>
        
        <ul>
          <li><strong>Full-Stack Development:</strong> Built scalable Skill Sharing Platform using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on efficient database management and user-friendly design.</li>
          <li><strong>DevOps:</strong> Proficient in containerization and orchestration with Docker and Kubernetes, version control with Git and GitHub, web server management with Apache and Nginx, and automated CI/CD pipelines using GitHub Actions.</li>
          <li><strong>AI:</strong> Designed intelligent systems, including a Chess Game with Alpha-Beta Pruning and other AI-driven solutions, leveraging algorithms and data structures.</li>
          <li><strong>Bug Identification:</strong> Tested library management system by making test cases on Jira and identified bug of searching with ISBN and CardId simultaneously.</li>
          <li><strong>Testing and Coverage:</strong> Created test cases for point of sale system and tested Statement, decision, and branch coverage of Test Cases.</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills">
          <span class="skill">MERN Stack</span>
          <span class="skill">Software Testing</span>
          <span class="skill">Development</span>
          <span class="skill">JAVA</span>
          <span class="skill">Python</span>
          <span class="skill">C/C++</span>
          <span class="skill">JavaScript</span>
          <span class="skill">AI/ML</span>
          <span class="skill">DevOps</span>
          <span class="skill">Docker</span>
          <span class="skill">Kubernetes</span>
          <span class="skill">React</span>
          <span class="skill">Node.js</span>
          <span class="skill">MongoDB</span>
          <span class="skill">PyTorch</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="subsection">
          <div class="company">National University of Computer and Emerging Sciences</div>
          <div><strong>Software Engineering</strong> <span class="date">| Aug 2022 – present</span></div>
          <p><strong>Courses:</strong> Programming Fundamentals, Object Oriented, Data Structures, Design And Analysis, Database, Requirement Engineering, Testing, Operating System</p>
        </div>
      </div>

      <div class="section">
        <div class="section-title">PROJECTS</div>
        
        <div class="project">
          <div class="project-title">AI-Powered Multimodal Sentiment Analysis System</div>
          <p>Developed an AI-powered sentiment analysis system to predict emotions from images and text using a ResNet18-based CNN, achieving accurate classification across seven categories.</p>
          <ul>
            <li><strong>Frontend:</strong> Designed a dynamic React frontend with Tailwind CSS</li>
            <li><strong>Backend:</strong> Enhanced model performance by addressing class imbalance, debugging predictions, and optimizing training with PyTorch and Flask.</li>
          </ul>
          <div class="tech-stack">
            <span class="tech-item">Python</span>
            <span class="tech-item">PyTorch</span>
            <span class="tech-item">React</span>
            <span class="tech-item">Flask</span>
            <span class="tech-item">Tailwind CSS</span>
          </div>
        </div>

        <div class="project">
          <div class="project-title">Weather Dashboard with ChatBot Integration</div>
          <p>A weather dashboard that displays forecast for 5 days integrated with chatbot which helps solve your queries.</p>
          <ul>
            <li><strong>Backend:</strong> Used OpenWeather API to fetch weather records and Gemini API for chatbot integrated using JavaScript.</li>
            <li><strong>Frontend:</strong> Frontend was developed using HTML and designed using CSS.</li>
          </ul>
          <div class="tech-stack">
            <span class="tech-item">JavaScript</span>
            <span class="tech-item">HTML</span>
            <span class="tech-item">CSS</span>
            <span class="tech-item">OpenWeather API</span>
            <span class="tech-item">Gemini API</span>
          </div>
        </div>

        <div class="project">
          <div class="project-title">Chess Game with Alpha Beta Pruning (Python)</div>
          <p>Developed a Python-based chess game using the Min-Max algorithm with Alpha-Beta pruning, implementing accurate piece movement and checkmate detection.</p>
          <div class="tech-stack">
            <span class="tech-item">Python</span>
            <span class="tech-item">AI Algorithms</span>
            <span class="tech-item">Game Development</span>
          </div>
        </div>

        <div class="project">
          <div class="project-title">Local Skill-Sharing Platform (MERN Stack)</div>
          <p>Developed a web platform using the MERN stack, featuring an Admin Panel to manage users, approve skills, oversee bookings, and provide analytics with charts. Implemented user management, role-based access, and bulk actions for efficient administration.</p>
          <div class="tech-stack">
            <span class="tech-item">MongoDB</span>
            <span class="tech-item">Express.js</span>
            <span class="tech-item">React</span>
            <span class="tech-item">Node.js</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">CERTIFICATES</div>
        <ul>
          <li><strong>Supervised Machine Learning:</strong> Regression and Classification</li>
          <li><strong>Advanced Learning Algorithms</strong></li>
        </ul>
      </div>
    </body>
    </html>
  `

  resumeWindow.document.write(resumeHTML)
  resumeWindow.document.close()

  // Wait for content to load, then trigger print dialog
  setTimeout(() => {
    resumeWindow.print()
    // Close the window after printing
    setTimeout(() => {
      resumeWindow.close()
    }, 1000)
  }, 500)
}
