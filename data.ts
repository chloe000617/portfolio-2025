import { PageData } from './types';

export const PAGE_DATA: PageData = {
  nav: [
    { name: 'Home', id: 'home' },
    { name: 'Capabilities', id: 'capabilities' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact', class: 'text-cyan-400' }
  ],
  hero: {
    title: "Product/Solution Strategist",
    subtitle: "Bridging Business Goals with Technical Execution",
    description: "I specialize in transforming complex data into actionable product strategies, driving growth and efficiency across sectors ranging from FinTech to Smart Cities.",
    stats: [
      { value: "NT$13M+", label: "Commercial Impact" },
      { value: "8+", label: "Sectors Served" },
      { value: "160%", label: "User Growth" },
      { value: "5x", label: "Ops Efficiency" }
    ]
  },
  capabilities: [
    { 
      title: "AI Product Solution", 
      description: "From 'Strategy' to 'System.' I architect Agentic Workflows and data pipelines that turn raw AI models into reliable business applications.",
      tags: ["Agent Architecture", "RAG Strategy", "LLM Eval"],
      icon: "brain",
      accentColor: "cyan"
    },
    { 
      title: "Product Growth Strategy", 
      description: "0-to-1 Launch & Metric Optimization. I use data analytics (SQL/Python) to find the levers that drive acquisition and retention.",
      tags: ["GTM Strategy", "Funnel Opt.", "Data Analytics"],
      icon: "chart",
      accentColor: "purple"
    },
    { 
      title: "Customer Research", 
      description: "Uncovering the 'Why' behind behavior via qualitative & quantitative methods (Shop-along, Focus Groups, Surveys).",
      tags: ["Qualitative", "Quantitative", "User Insights"],
      icon: "search",
      accentColor: "pink"
    },
    { 
      title: "Business Consulting", 
      description: "Diagnosing operational bottlenecks and delivering structured solutions to complex organizational problems.",
      tags: ["Ops Optimization", "Digital Trans.", "Problem Solving"],
      icon: "briefcase",
      accentColor: "blue"
    }
  ],
  principles: [
    { text: "Iteration as a Way of Working", icon: "repeat" },
    { text: "Problem-Solving over Features", icon: "target" },
    { text: "Always a Learner", icon: "lightbulb" },
    { text: "Start With the End State", icon: "flag" }
  ],
  about: {
    storyChapters: [
      {
        id: "01",
        chapter: "CHAPTER 01",
        title: "The Philosopher's Mindset",
        description: "Before I wrote code, I deconstructed arguments. Philosophy taught me to relentlessly question \"obvious\" assumptions. In product, this means I don't just accept feature requests—I drill down to the root cause of human friction.",
        tags: ["Problem Framing", "Logic Systems"]
      },
      {
        id: "02",
        chapter: "CHAPTER 02",
        title: "Consulting Discipline",
        description: "At PwC and IBM, I learned that a strategy is useless if it can't be executed. I built a tolerance for ambiguity and a discipline for iteration. It wasn't about being perfect; it was about being effective and shipping value.",
        tags: ["Execution", "Stakeholder Mgmt"]
      },
      {
        id: "03",
        chapter: "CHAPTER 03",
        title: "AI Impact & Scale",
        description: "Now, I leverage AI not just as tech, but as a force multiplier. My focus is on <strong>Human-in-the-loop</strong> systems where AI augments decision-making rather than replacing it.",
        tags: ["Agentic Workflows", "Scalable Systems"]
      }
    ],
    education: [
      {
        degree: "B.A. Philosophy",
        school: "National Taiwan University",
        desc: "Top 1% Class Rank. Logic systems & critical deconstruction."
      },
      {
        degree: "M.B.A.",
        school: "NTU College of Management",
        desc: "Focus on Tech Strategy & Operations."
      }
    ],
    techStack: ["Jira", "Notion", "SQL", "Python", "Power BI", "GTM Strategy", "Figma", "LLM Integration"]
  },
  projects: [
    {
      id: "smart-transport",
      title: "LLM Traffic Optimization Agent",
      role: "Smart Transportation",
      category: "Enterprise AI & System Solutions",
      hashtag: "#ENTERPRISE SOLUTION #B2G",
      summary: "Designed agent architecture to secure NT$10M+ revenue using Large Language Models.",
      impact: "Supported project revenue > NT$10M.",
      featured: true,
      stats: [
        {"val": "NT$10M+", "label": "Project Revenue"},
        {"val": "Gov/FMCG", "label": "Key Account Management"}
      ],
      style: {
        accentColor: "#CBD5E1",
        headerBgImage: "https://www.aeye.ai/wp-content/uploads/2022/09/AEye-Blog-Post-ITS-improves-safety-1867x1241-1.png",
        logoUrl: "https://media.istockphoto.com/id/675054934/zh/%E5%90%91%E9%87%8F/%E6%B3%95%E9%99%A2%E5%BB%BA%E7%AF%89%E5%9C%96%E7%A4%BA.jpg?s=612x612&w=0&k=20&c=uQeGtAFl3zWiGegwNb09ieHN40RERkrH0f_k86RMfv8="
      },
      content: {
          challengeLabel: "The Context: Intelligence for Public Transport",
          challengeIcon: "clock",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> A Taiwanese government agency sought to accelerate local transportation development by implementing an internal \"Intelligent Transportation Data System,\" featuring a real-time analytics dashboard and an AI-powered chatbot assistant.</li><li><strong>Task:</strong> As the AI Project Manager, I spearheaded requirements definition and solution architecture, bridging the gap between public sector needs and technical implementation.</li></ul>",
          solutionLabel: "The Solution: Action Taken",
          solution: [
              {"step": "01. KPI Framework Definition", "desc": "Standardized calculation logic, baselines, and formulas across all module KPIs to ensure consistency for the data platform."},
              {"step": "02. Data Governance", "desc": "Defined field standards, naming conventions, and version control protocols to guarantee data integrity and accuracy."},
              {"step": "03. AI Model Design", "desc": "Collaborated with engineers to define Agent architecture and Input/Output scenarios based on specific transportation modules."},
              {"step": "04. LLM Evaluation & QA", "desc": "Led \"LLM-as-a-Judge\" testing, assessing model performance on accuracy, consistency, and hallucination rates."}
          ],
          resultLabel: "The Result: Adoption & Revenue",
          result: "<p>Delivered AI analytics solutions that facilitated client adoption and contributed to project revenues exceeding <strong>NT$10M</strong>. Served as a key liaison, translating complex business requirements into actionable dashboard/AI chatbot logic, ensuring alignment with stakeholder expectations.</p>",
          takeawayLabel: "Technical Challenge",
          takeaway: `
            <div class="card-bg p-6 rounded-xl border border-white/5">
                <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-2">ENSURING ACCURACY</div>
                <h3 class="text-xl font-bold text-white mb-4">Mitigating Hallucinations in Public Sector AI</h3>
                <p class="text-secondary text-sm leading-relaxed mb-4"><strong>Challenge:</strong> Public sector applications require near-zero error rates. The inherent probabilistic nature of LLMs posed a risk of hallucinations in data reporting.</p>
                <div class="bg-white/5 p-3 rounded text-sm text-white/90"><strong>Solution:</strong> Implemented a rigorous "LLM-as-a-Judge" evaluation framework, defining strict acceptance criteria for prompt accuracy and consistency before deployment.</div>
            </div>
          `
      }
    },
    {
      id: "youthbuild",
      title: "AI Copilot Adoption",
      role: "YouthBuild Global",
      category: "Enterprise AI & System Solutions",
      hashtag: "#DIGITAL TRANSFORMATION",
      summary: "Refactored data infrastructure to enable <strong>organization-wide AI adoption</strong> using Power BI Copilot.",
      impact: "90% Reporting Efficiency",
      featured: true,
      stats: [ {"val": "90%", "label": "Reporting Efficiency"}, {"val": "20+", "label": "Staff Trained"}, {"val": "5", "label": "Depts Aligned"} ],
      style: {
        accentColor: "#F97316",
        headerBgImage: "https://media.licdn.com/dms/image/v2/C4D1BAQEra1PyO-ybAg/company-background_10000/company-background_10000/0/1603885073740/youthbuild_usa_cover?e=1765699200&v=beta&t=yOKmElqgWmDO-GHsMegWha-akvJmS6VBX50xQhHohUc",
        logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQEp1CuFC2mL2w/company-logo_200_200/company-logo_200_200/0/1630542842322/youthbuild_usa_logo?e=1766620800&v=beta&t=kpwcrZ-Ek3yaDUr6fdYSSdHmhcCUqo0PA8Eso1goqN8",
        featuredCardImage: "https://ppt.cc/fXLCwx@.jpg"
      },
      content: {
          challenge: "<ul><li><strong>Fragmented Silos:</strong> Critical data was scattered across <strong>5 distinct departments</strong> in incompatible formats.</li><li><strong>Incompatible Formats:</strong> Manual aggregation was <strong>virtually impossible</strong> due to lack of standards.</li><li><strong>High Barrier:</strong> Non-technical staff relied entirely on data teams, causing bottlenecks.</li></ul>",
          solution: [
              {"step": "01. User Research", "desc": "Interviewed <strong>5 departments</strong> to map data pain points (format chaos) and defined <strong>common cross-dept requirements</strong>."},
              {"step": "02. Solution Design", "desc": "Proposed a <strong>Power BI + Copilot</strong> architecture, featuring unified data taxonomy, AI summaries, and <strong>Natural Language Q&A</strong>."},
              {"step": "03. Adoption Push", "desc": "Hosted workshops for <strong>20+ non-tech staff</strong>, creating <strong>Prompt Templates</strong> & manuals to ensure actual usage."},
              {"step": "04. Governance", "desc": "Coordinated with Strategy & Data leads to ensure secure <strong>data integration</strong> and strict <strong>permission settings</strong>."}
          ],
          result: "<p>Successfully democratized data access. Non-technical staff can now query complex datasets instantly using <strong>Natural Language</strong>, shifting the culture from 'gut feeling' to <strong>evidence-based strategy</strong>.</p>",
          takeaway: "<strong>Change Management > Tech Stack:</strong> I learned that the barrier to AI adoption isn't the model, but user confidence. Prioritizing 'Psychological Safety' via workshops is as critical as the code itself.",
          retrospective: {
            title: "Retrospective: Defining My AI Product Philosophy",
            items: [
              {
                title: "AI Integration ≠ Magic",
                icon: "box",
                text: "AI isn't a 'plug-and-play' miracle. It requires deep integration with underlying data structures, specific use cases, and workforce capabilities to function effectively."
              },
              {
                title: "Adoption is UX-Driven",
                icon: "users",
                text: "The best tools fail without adoption. User experience and education design are critical—mapping tools to existing behaviors is the only way to drive real usage."
              },
              {
                title: "Strategic Direction",
                icon: "compass",
                text: "This project solidified my product mindset and AI strategy capabilities. I am committed to a career path focused on AI applications and data-driven products."
              }
            ]
          },
          image: {
            url: "https://ppt.cc/fsDlex@.png",
            caption: "As-is v.s. To-be"
          }
      }
    },
    {
      id: "taishin-bank",
      title: "Fintech Subscription Feature",
      role: "Taishin Bank (Richart Life)",
      category: "Product Growth Strategy",
      hashtag: "#DIGITAL BANKING",
      summary: "0-to-1 development of subscription features and operational optimization via user data analytics.",
      impact: "10.3% CTR & Product Launch",
      featured: true,
      stats: [ 
        {"val": "10.3%", "label": "Avg. Push Notification CTR"}, 
        {"val": "0-to-1", "label": "Subscription Feature Launch"}, 
        {"val": "3+", "label": "Cross-functional Teams Aligned (IT, UX/UI, Ops)"} 
      ],
      style: {
        accentColor: "#E2002E",
        headerBgImage: "https://richartlife.taishinbank.com.tw/assets/subscription/home/subscription-banner-desktop.png",
        logoUrl: "https://play-lh.googleusercontent.com/lkmKmx__tH7hw4Ro0ARs5sBZslhKbqbRCHYPiuegdq-AtzmfvZpZFwVn7hk3zi5xqrZ8Sx5C4XtfS5YbGqeO6w"
      },
      content: {
          challengeLabel: "The Context: Digital Operation & Innovation",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> Served as a Digital Finance Intern at Taishin Bank's Richart Life division, responsible for core digital product operations and new feature development.</li><li><strong>Task:</strong> To maintain daily app engagement metrics while planning and launching a brand-new subscription-based product feature from scratch.</li></ul>",
          solution: [
              {"step": "01. User Engagement Analysis", "desc": "Leveraged Google Analytics to track push performance, optimizing message copy based on user context to achieve a 10.3% CTR."},
              {"step": "02. Research & Competitor Analysis", "desc": "Conducted user interviews and competitor benchmarking to define the subscription journey and identify key value propositions."},
              {"step": "03. UI/UX Flow Design", "desc": "Designed comprehensive Wireframes and Sitemaps in Figma to map out a seamless user subscription experience."},
              {"step": "04. Cross-Functional Collaboration", "desc": "Collaborated with IT engineers and UX/UI designers to align on specs and track development progress for timely launch."}
          ],
          result: "<p>Successfully delivered the subscription feature and optimized daily operations through data. This experience sharpened my product development mindset, user behavior analysis skills, and ability to drive cross-functional projects.</p>",
          takeaway: "<strong>User-Centric Execution:</strong> Learned how to translate abstract concepts into concrete product features by anchoring strategy and design in real user needs.",
          retrospective: {
            title: "Retrospective: Core Learnings",
            items: [
              {
                title: "User-Centric Execution",
                icon: "box",
                text: "Learned how to translate abstract concepts into concrete product features by anchoring strategy and design in real user needs."
              },
              {
                title: "Proactive Communication",
                icon: "users",
                text: "Realized that proactivity and transparency in communication are vital for aligning diverse stakeholders (IT, Design, Business) in complex organizations."
              },
              {
                title: "Data-Driven Management",
                icon: "compass",
                text: "Demonstrated the ability to manage projects from macro strategy to micro details, using BI tools for actionable insight."
              }
            ]
          }
      }
    },
    {
      id: "johnson-johnson",
      title: "Brand Repositioning Strategy",
      role: "Johnson & Johnson",
      category: "Customer Research",
      hashtag: "#FMCG",
      summary: "Synthesized consumer insights to drive <strong>100% sales growth</strong> for a skincare brand repositioning.",
      impact: "100% Sales Growth",
      featured: false,
      stats: [ 
        {"val": "100%+", "label": "MoM Sales Growth Post-Strategy"}, 
        {"val": "500+", "label": "Consumers Surveyed & Interviewed"}, 
        {"val": "HQ Recog.", "label": "Research Method Adopted Regionally"} 
      ],
      style: {
        accentColor: "#FB7185",
        headerBgImage: "https://images.ctfassets.net/5telexneh8kx/382lL7IaghBI6aAcZYjH8X/ee0a163d0c0f9e62115d4e65d3b1609c/avn-website-banner_total1-zh-hant-tw",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwR-mYiIkkCIY28ur2ZykKmYqL3FoOsBAmhg&s"
      },
      content: {
          challengeLabel: "The Context: Brand Transformation",
          challengeIcon: "clock",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> Johnson & Johnson aimed to reposition a skincare brand from \"mass market\" to \"professional,\" justifying a price increase without sacrificing sales volume to ultimately boost revenue.</li><li><strong>Task:</strong> My mission was to conduct comprehensive consumer behavior research, formulate a brand transformation strategy, and assist in driving its execution.</li></ul>",
          solutionLabel: "The Solution: Research, Strategy & Execution",
          solution: [
              {"step": "01. Mixed-Method Research", "desc": "Utilized 500+ surveys, 10+ focus groups, and shop-along observations to decode consumer perception and shopping behaviors."},
              {"step": "02. Strategic Framework", "desc": "Mapped the customer journey. Adjusted \"Awareness\" communication for repositioning and fixed \"Decision\" phase channel strategies to boost conversion."},
              {"step": "03. Execution Leadership", "desc": "Led internal/external partners for 5 product launches and 2 promo campaigns, coordinating Sales, Supply Chain, Media, and Design agencies."},
              {"step": "04. Global Impact", "desc": "My research methodology and brand strategy framework were adopted by the Hong Kong office as a standardized internal model."}
          ],
          resultLabel: "The Result: Impact & Growth",
          result: "<p>Achieved over <strong>100% MoM sales growth</strong> following the strategy implementation. This experience deeply underscored the commercial value of translating user insights into actionable business results.</p>",
          takeawayLabel: "Research Challenge: Validating Behavior",
          takeaway: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card-bg p-6 rounded-xl border border-white/5">
                    <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-2">The Pivot</div>
                    <h3 class="text-xl font-bold text-white mb-4">From "Recall" to "Real-Time"</h3>
                    <p class="text-secondary text-sm leading-relaxed mb-4"><strong>Challenge:</strong> Initially, I followed literature by interviewing shoppers in a café *after* their trip. However, I noticed participants struggled to recall shelf locations and specific browsing rationales once removed from the context.</p>
                    <div class="bg-white/5 p-3 rounded text-sm text-white/90"><strong>Agile Adjustment:</strong> I immediately pivoted to <strong>in-store retrospective interviews</strong> right after the shopping act. This "post-control" method captured authentic, visceral reactions to shelf placement.</div>
                </div>
                <div class="card-bg p-6 rounded-xl border border-white/5">
                    <div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: #FB7185">The Outcome</div>
                    <h3 class="text-xl font-bold text-white mb-4">Validated Methodology</h3>
                    <p class="text-secondary text-sm leading-relaxed mb-4">This adjustment unlocked critical insights for the channel strategy. The modified research process was recognized as a successful case study and shared with the APAC brand team.</p>
                    <div class="p-3 rounded text-sm" style="background-color: rgba(251, 113, 133, 0.1); border: 1px solid rgba(251, 113, 133, 0.2); color: #FDA4AF"><strong>Skill Demonstrated:</strong> Problem identification, agile adjustment, and the importance of contextual inquiry.</div>
                </div>
            </div>
          `,
          retrospective: {
            title: "Retrospective: Research Philosophy",
            items: [
              {
                title: "Strategic Segmentation",
                icon: "users",
                text: "Distinctly segmenting \"Current Users\" vs. \"Competitor Users\" ensures balanced data samples and prevents statistical bias, leading to sharper insights."
              },
              {
                title: "Bypassing \"Overthinking\"",
                icon: "compass",
                text: "Interviewees often rationalize post-hoc. Interactive methods like Shop-Along capture intuitive behaviors that direct questions miss."
              },
              {
                title: "Finding the Driver",
                icon: "info",
                text: "True insight lies in identifying the key factors that drive behavioral differences within the current context, not just observing the status quo."
              }
            ]
          }
      }
    },
    {
      id: "ibm",
      title: "Supply Chain Finance Optimization",
      role: "IBM TCP Consultant",
      category: "Enterprise AI & System Solutions",
      hashtag: "#SUPPLY CHAIN",
      summary: "Designed a Blockchain/ML solution to boost AR turnover by <strong>25%</strong>.",
      impact: "Top 3 Award Winner",
      featured: false,
      stats: [ {"val": "+25%", "label": "Proj. AR Recovery Rate"}, {"val": "MVP", "label": "Personal Leadership Award"} ],
      style: {
        accentColor: "#0891B2",
        headerBgImage: "https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--05ec1413-3751-4023-9c64-8b647f515db3/ibm-software-leadspace.png?preferwebp=true",
        logoUrl: "https://substackcdn.com/image/fetch/$s_!1XDp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb162f2d8-7878-4f8c-9b3f-6184293024dc_1000x1000.jpeg"
      },
      content: {
          challengeLabel: "The Challenge: Liquidity Lag",
          challengeIcon: "clock",
          challenge: "<ul class='bullet-list'><li><strong>Context:</strong> As part of the IBM TCP consulting program, I led a project for WPG Holdings (Asia's largest electronics distributor) to optimize cross-border accounts receivable (AR) recovery.</li><li><strong>Problem:</strong> Research indicated WPG's AR turnover rate lagged the industry average by ~17%, creating urgent liquidity pressure and inefficiency in the supply chain.</li></ul>",
          solutionLabel: "The Solution: FinTech Innovation",
          solution: [
              {"step": "01. Root Cause Analysis", "desc": "Conducted multi-layered analysis identifying \"insufficient client credit data\" and \"imperfect risk control processes\" as core bottlenecks."},
              {"step": "02. Tech Solution Design", "desc": "Proposed a \"Credit Rating Mechanism\" leveraging Blockchain for transparency and Machine Learning for predictive risk assessment."},
              {"step": "03. PM Resource Allocation", "desc": "Prioritized project tasks based on urgency and impact, effectively allocating team resources under tight competition deadlines."},
              {"step": "04. Strategic Leadership", "desc": "Drove team alignment through goal concretization, ensuring high engagement despite initial low morale (detailed below)."}
          ],
          resultLabel: "The Result: Recognition & Value",
          result: "<p>The proposed solution projected a <strong>25% increase in AR recovery rate</strong>. The project won <strong>3rd Place</strong> in the IBM TCP program, and I was individually recognized with the <strong>MVP Award</strong> for leadership excellence.</p>",
          takeaway: "",
          retrospective: {
            title: "Retrospective: Leadership Philosophy",
            items: [
              {
                title: "Driving Alignment in Ambiguity",
                icon: "users",
                text: "This experience taught me that facing goal divergence requires more than just setting a vision; it demands a <strong>concrete blueprint paired with short-term wins</strong> to drive momentum. It honed my ability to motivate, persuade, and design strategy—essential skills for leading in dynamic environments."
              }
            ]
          }
      }
    },
    {
      id: "gogolook",
      title: "Fintech Social Growth",
      role: "Gogolook (Whoscall)",
      category: "Product Growth Strategy",
      hashtag: "#SAAS",
      summary: "Executed multi-channel strategies to lift conversion to <strong>60%</strong> in a fast-paced startup.",
      impact: "17% → 60% Conversion",
      featured: false,
      stats: [ 
        {"val": "17% → 60%", "label": "Channel Conversion Rate"}, 
        {"val": "6 Months", "label": "Project Duration"}, 
        {"val": "Social & Content", "label": "Strategic Focus"} 
      ],
      style: {
        accentColor: "#00D09C", 
        headerBgImage: "https://media.licdn.com/dms/image/v2/D563DAQH5qY0VeS-92g/image-scale_191_1128/image-scale_191_1128/0/1719331299697/gogolook_cover?e=2147483647&v=beta&t=hT7ekJK94_ef1-YPttNkDUUIt2pMnAIoUl3MGpaFXDE",
        logoUrl: "https://bn-mt-sd-mc.s3.us-west-2.amazonaws.com/mars/prod/company/c222-img-20230605-39-18.jpg"
      },
      content: {
          challengeLabel: "The Context: Social Engagement",
          challengeIcon: "info",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> Served as a Social Marketing Intern at Gogolook (a leading FinTech brand known for Whoscall), responsible for managing brand communities.</li><li><strong>Task:</strong> The primary objective was to significantly uplift social engagement metrics, which were stagnant due to a lack of audience differentiation strategies.</li></ul>",
          solutionLabel: "The Solution: Strategic Segmentation",
          solution: [
              {"step": "01. Diagnostic & Strategy", "desc": "Identified that the existing strategy was generic. Proposed a differentiated positioning strategy tailored to specific platform attributes and audience segments."},
              {"step": "02. Multi-Channel Execution", "desc": "Executed a comprehensive plan including SEO-driven blog content, targeted ads, and high-engagement social campaigns."},
              {"step": "03. Influencer Partnership", "desc": "Collaborated with Influencers to amplify reach and credibility within specific user demographics."},
              {"step": "04. Agile Optimization", "desc": "Continuously monitored performance metrics to refine content and ad spend in real-time."}
          ],
          resultLabel: "The Result: Massive Conversion Lift",
          result: "<p>Successfully drove the channel conversion rate from <strong>17% to 60%</strong> within six months, validating the effectiveness of the audience-centric content strategy.</p>",
          takeaway: "",
          retrospective: {
            title: "Retrospective: Core Learnings",
            items: [
              {
                title: "Agility in a Fast-Paced Startup",
                icon: "zap",
                text: "Whoscall is a rapidly growing startup with a fast pace. Initially challenging, I quickly adapted to the high-velocity environment, honing my ability to collaborate across diverse teams (Design, BD, Gifting).<br/><br/>I developed strong <strong>multitasking and time management skills</strong>—handling sudden partner changes and urgent SEO requests efficiently. This experience built my 'operational readiness' and adaptability, traits crucial for dynamic industries like e-commerce and KOL marketing."
              }
            ]
          }
      }
    },
    {
      id: "jti",
      title: "Sales BI Dashboard Optimization",
      role: "JTI (Via Consultant)",
      category: "Business Consulting",
      hashtag: "#FMCG",
      summary: "Redesigned sales models to improve query speed by <strong>5x</strong> using Power BI.",
      impact: "5x Speed & NT$3M Contract",
      featured: false,
      stats: [ 
        {"val": "5x", "label": "Performance Boost"}, 
        {"val": "85+", "label": "Client Satisfaction Score"}, 
        {"val": "NT$3M+", "label": "Follow-up Contract Secured"} 
      ],
      style: {
        accentColor: "#16A34A",
        headerBgImage: "https://a.storyblok.com/f/266538/3600x2401/462a59c018/taiwan-office.jpg",
        logoUrl: "https://d1b8dyiuti31bx.cloudfront.net/NewsPhotos/20220120/40_082240275762.jpg"
      },
      content: {
          challengeLabel: "The Challenge: Data Latency & Usability",
          challengeIcon: "clock",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> JTI's existing Power BI dashboard suffered from severe latency (slow performance), poor data visualization readability, and a lack of actionable business insights, hindering effective sales analysis.</li><li><strong>Task:</strong> As the Project Manager, my objective was to redesign the frontend interface to align with specific sales KPIs and optimize the User Experience (UX) for efficiency and decision support. This required orchestrating seamless collaboration between BI Analysts (Frontend) and Data Engineers (Backend).</li></ul>",
          solutionLabel: "The Solution: Optimization & Management",
          solution: [
              {"step": "01. Project Management", "desc": "Translated business requirements into technical specs for Data Analysts. Bridged the gap between backend data structures and frontend visualization needs."},
              {"step": "02. Pain Point Discovery", "desc": "Conducted deep-dive analysis of client pain points regarding BI usage (e.g., slow load times) and proposed targeted optimization strategies."},
              {"step": "03. BI Implementation", "desc": "Oversaw BI construction, ensuring data flow logic supported business decision-making requirements."},
              {"step": "04. Client & Quality Mgmt", "desc": "Led User Acceptance Testing (UAT) and managed client relationships to ensure high satisfaction with the final deliverable."}
          ],
          resultLabel: "The Result: Performance & Trust",
          result: "<p>Improved Power BI query performance by <strong>over 5x</strong>, significantly enhancing usability. Achieved a client satisfaction score of <strong>85+</strong>, which directly contributed to securing a follow-up contract worth over <strong>NT$3M</strong>.</p>",
          takeaway: "",
          retrospective: {
            title: "Retrospective: Core Learnings",
            items: [
              {
                title: "Project Quality Management",
                icon: "wrench",
                text: "This project reinforced the importance of <strong>active quality management</strong> and <strong>resource adaptability</strong>.<br/><br/><ul class='bullet-list'><li><strong>PM & QA:</strong> Setting early checkpoints prevents compounding errors.</li><li><strong>Business Insight Design:</strong> BI isn't just visualization; it must be built on solid business logic to be useful.</li><li><strong>CRM:</strong> Trust is built on delivering tangible performance improvements.</li></ul>"
              }
            ]
          }
      }
    },
    {
      id: "pwc-esg",
      title: "Carbon Management Dashboard Optimization",
      role: "PwC ESG Consultant",
      category: "Business Consulting",
      hashtag: "#ESG",
      summary: "Optimized dashboard logic to ensure <strong>100% data reporting accuracy</strong> and improved UX.",
      impact: "100% Accuracy & UX Fix",
      featured: false,
      stats: [ 
        {"val": "100%", "label": "Data Accuracy Restored"}, 
        {"val": "1", "label": "Product Feature Launch"}, 
        {"val": "QA Testing & Product Optimization", "label": "Product Development Stage"} 
      ],
      style: {
        accentColor: "#D04A02",
        headerBgImage: "https://www.pwccn.com/zh/issues-based/esg/esg-banner-2025.jpg",
        logoUrl: "https://pbs.twimg.com/profile_images/932767099000197120/JJrUe4kh_400x400.jpg"
      },
      content: {
          challengeLabel: "The Context: Platform Optimization",
          challengeIcon: "clock",
          challenge: "<ul class='bullet-list'><li><strong>Situation:</strong> Served as an ESG Consultant Intern at PwC, assisting in the product optimization of a B2B carbon emission management platform.</li><li><strong>Task:</strong> Tasked with conducting comprehensive User Acceptance Testing (UAT) and usability audits to identify functional bugs and UX friction points from a user's perspective.</li></ul>",
          solutionLabel: "The Solution: Testing & Translation",
          solution: [
              {"step": "01. Rigorous Testing & Validation", "desc": "Collaborated with the team to cross-validate issues across different user accounts and network environments, ensuring bug reproducibility."},
              {"step": "02. Technical Translation", "desc": "Translated vague user feedback into precise technical bug reports, detailing the specific operational nodes and logic failures."},
              {"step": "03. Solution Proposal", "desc": "Formulated actionable improvement recommendations, focusing on data logic optimization and UI field clarity."}
          ],
          resultLabel: "The Result: Integrity & Utility",
          result: `
            <div class="grid grid-cols-1 gap-4">
              <div class="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 class="font-bold text-white mb-2 text-lg">Data Integrity Restored</h4>
                <p class="text-sm text-secondary leading-relaxed">Identified and facilitated the fix of critical data synchronization errors between frontend and backend, ensuring accurate carbon calculation and display.</p>
              </div>
              <div class="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 class="font-bold text-white mb-2 text-lg">Dashboard Utility Lift</h4>
                <p class="text-sm text-secondary leading-relaxed">Championed the "Multi-View Comparison" feature, transforming the platform from a static display into a dynamic analytical tool for clients.</p>
              </div>
            </div>
          `,
          takeaway: "",
          retrospective: {
             title: "Retrospective: Core Learnings",
             items: [
               {
                 title: "Translating User Needs to Tech Specs",
                 icon: "message",
                 text: "Effective cross-functional communication isn't just about reporting \"observed problems\"; it's about translating user pain points into the <strong>technical language</strong> (logic, parameters, data structure) that engineers understand. This is key to driving efficient product iterations."
               }
             ]
          }
      }
    },
    {
      id: "fugle",
      title: "RFM Segmentation & Engagement Growth",
      role: "Fugle (Consultant Project)",
      category: "Product Growth Strategy",
      hashtag: "#FINTECH",
      summary: "Led UGC campaigns to increase engagement from <strong>1.8% to 4.5%</strong> using RFM Segmentation.",
      impact: "150% Engagement Lift",
      featured: false,
      stats: [ 
        {"val": "+122%", "label": "Engagement Rate Growth (1.8% → 4.5%)"}, 
        {"val": "300%", "label": "Target Achievement Rate"}, 
        {"val": "4 Mo", "label": "Project Duration (NTU CTPS Consulting)"} 
      ],
      style: {
        accentColor: "#FDB900",
        headerBgImage: "https://media.licdn.com/dms/image/v2/C561BAQEtoQNOGuQ-Pw/company-background_10000/company-background_10000/0/1645005760862/fugle_cover?e=2147483647&v=beta&t=py9tZ3khViTnFDa-0HkscxCA1oIuNXclg8lZhHVOtKE",
        logoUrl: "https://introv.com/tw/wp-content/uploads/sites/2/2023/08/Fugle_logo_web.jpg"
      },
      content: {
          challengeLabel: "The Context: Community Stagnation",
          challengeIcon: "clock",
          challenge: "<ul class=\"bullet-list\"><li><strong>Situation:</strong> Collaborated with Fugle (FinTech investment platform) during the NTU CTPS consulting program. The platform faced low community engagement, hovering at 1.8%.</li><li><strong>Task:</strong> The objective was to devise a strategy to nearly double the engagement rate to 3.5% within four months. Key tasks included user segmentation, root cause analysis, and MVP validation.</li></ul>",
          solution: [
              {"step": "01. Data Analysis (RFM)", "desc": "Analyzed 500+ user behavior data points using Excel VLOOKUP and RFM models to profile user segments and behavior patterns."},
              {"step": "02. Root Cause Analysis", "desc": "Used Issue Trees and the \"Community Flywheel\" framework to identify that low engagement stemmed from a lack of \"discussable content\" on the platform."},
              {"step": "03. Strategic Focus", "desc": "Prioritized \"Increasing Posts per Visit\" as the key lever. Formula: Engagement = Visits * Time Spent * <strong>Posts per Visit</strong>."},
              {"step": "04. MVP Execution", "desc": "Designed and launched a \"Call for Content\" campaign with gamified rewards (MVP) to stimulate user-generated content and discussion."}
          ],
          resultLabel: "The Result: Exceeding Targets",
          result: "<p>The MVP campaign successfully raised engagement from <strong>1.8% to 4.5%</strong> within one month, achieving <strong>300% of the initial target</strong>. Delivered a long-term engagement playbook (content frequency, formats) for sustainable community management.</p>",
          takeaway: "<strong>Agility & MVP:</strong> I learned that when resources are limited, focusing on a single, high-leverage metric (in this case, 'posts per visit') yields better results than trying to fix everything at once.",
          retrospective: {
            title: "Retrospective: Core Competencies",
            items: [
              {
                title: "Leadership & Agility",
                icon: "compass",
                text: "This experience honed my leadership, goal-oriented mindset, and rapid adaptability. It demonstrated my ability to reallocate resources and adjust targets in a dynamic environment—core competencies for a role where driving business goals amidst uncertainty is key."
              }
            ]
          }
      }
    }
  ]
};