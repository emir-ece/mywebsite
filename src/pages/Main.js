import React from "react"

import { HashLink } from "react-router-hash-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"

import Education from "../components/Education"
import Project from "../components/Project"
import Experience from "../components/Experience"
import Skill from "../components/Skill"

const Main = () => {
    const langs = {
        cpp: { id: "langs/cpp", label: "C++" },
        js_ts: { id: "langs/js_ts", label: "JavaScript" },
        python: { id: "langs/python", label: "Python" },
        html_css: { id: "langs/html_css", label: "HTML/CSS" },
        tex: { id: "langs/tex", label: "LaTeX" },
        mlab: { id: "langs/mlab", label: "MATLAB" },
        java: { id: "langs/java", label: "Java" },
    }

    const skills = {
        ml: { id: "skills/ml", label: "Machine Learning" },
        flt: { id: "skills/flt", label: "Formal Language Theory" },
        regex: { id: "skills/regex", label: "Regular Expressions" },
        cv: { id: "skills/cv", label: "Computer Vision" },
        cg : { id: "skills/cg", label: "Computer Graphics" },
        robo : { id: "skills/robo", label: "Robotics" },
        scraping : { id: "skills/scraping", label: "Web Scraping" },
        alg : { id: "skills/alg", label: "Algorithms" },
        react : { id: "skills/react", label: "React / React Native" },
        hosting : { id: "skills/hosting", label: "Hosting" },
        lead : { id: "skills/lead", label: "Team Leadership" },
        swe : { id: "skills/swe", label: "Software Engineering" },
        comm : { id: "skills/comm", label: "Communication" },
    }

    const projects = {
        nvda: { id: "projects/nvda", label: "AI-Powered Options Trading Platform", url: "https://github.com/emir-ece/AI-Powered-Options-Trading-Platform" },
        ml: { id: "projects/ml", label: "Machine Learning Compiler for Scientific Computing", url: "https://github.com/emir-ece/ML-Scientific-Compiler" },
        r: { id: "projects/r", label: "Data Cleaning and Trend Analysis of Vehicle MPG", url: "https://github.com/emir-ece/Data-Cleaning-and-Trend-Analysis-Using-R" },
    }

    const generateImageArr = (path, count) => {
        const imageArr = []
        for (let i = 1; i <= count; i++) imageArr.push(path + "/img" + i + ".png")
        return imageArr
    }
    return (
        <React.Fragment>
            <nav>
                <HashLink smooth to={"#about"}>About</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#education"}>Education</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#projects"}>Projects</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#experiences"}>Experience</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#skills"}>Skills</HashLink>
            </nav>
            <main>
                <img src={"assets/me.jpg"} />
                <h1>Emir Koç</h1>
                <label>
                    Artificial Intelligence/Machine Learning
                    <div className={"dot"} />
                    Data Science
                    <div className={"dot"} />
                    C++, Python, JavaScript, MATLAB
                </label>
                <br />
                <label>
                    Backend Engineer
                    <div className={"dot"} />
                    Embedded Systems
                    <div className={"dot"} />
                    Quantitative Analyst
                    <div className={"dot"} />
                    Options Trader
                </label>
                <br />
                <div className={"links"}>
                    <a target={"_blank"} href={"https://github.com/emir-ece"}><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a target={"_blank"} href={"https://www.linkedin.com/in/emirkoc223"}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a target={"_blank"} href={"mailto:ekoc@umass.edu"}><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                    <a target={"_blank"} href={"https://www.instagram.com/emi12k"}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </main>
            <section id={"about"}>
                <h1>About</h1>
                <div>
                    Hey, my name is Emir, and I'm a rising junior at the University of Massachusetts--Amherst studying Computer Engineering paired with a minor in Economics!
                    <br /><br />
                    I love to program and I’m extremely passionate about software engineering, machine learning, and finance, and I love working on projects that combine programming with real-world applications. One of my projects that I'm super passionate about is a financial dashboard built using a NVIDIA Jetson Orin NX paired with the reComputer J401, designed for real-time options pricing, backtesting, and financial forecasting. The system leverages predictive models to evaluate strategies, run simulations, and provide insights into equity and options trading.
                    <br /><br />
                    I also have professional experience as a General Manager at Boston Bay Pizza, where I managed daily operations in a high-productivity environment, analyzed financial trends, and increased sales revenue through strategic decision-making. Beyond that, I served as president of my high school’s Stock Market Club, leading over 50 members in discussions on market fundamentals, technical analysis, and risk management.
                    <br /><br />
                    Alongside my academic work, I’ve developed strong technical skills in Python, C++, JavaScript, MATLAB, R, PyTorch, TensorFlow, XGBoost, and microcontrollers, as well as practical experience in data visualization, backtesting frameworks, and financial modeling.
                    <br /><br />
                    I love building innovative projects at the intersection of technology and finance, and I’m always looking to take on new challenges. Please feel free to reach out; whether its tech, investing, or general stuff I’d be glad to connect and share ideas!
                </div>
            </section>
            <section id={"education"}>
                <h1>Education</h1>
                <div className={"education-container"}>
                    <Education 
                        title={"UMass Amherst Undergrad"} 
                        description={
                            <React.Fragment>
                                Overall GPA: 3.504
                                <br />
                                Major GPA: 3.68
                                <br /><br />
                                Currently, I'm a junior at the University of Massachusetts Amherst studying Computer Engineering.
                                <br /><br />
                                I plan to graduate with a B.S. in 2027 and hopefully pursue my M.S. by 2028.
                            </React.Fragment>
                        } 
                    />
                    <Education 
                        title={"Ludlow High School"} 
                        description={
                            <React.Fragment>
                                Unweighted GPA: 3.4
                                <br />
                                Weighted GPA: 3.79
                                <br /><br />
                                I attended Ludlow High School from 2019-2023 with a class size of roughly 200 students.
                                <br /><br />
                                Here, I was the founder of the Stock Market club where I presented weekly lessons on fundamentals, patterns, technical analysis, and risk management.
                                <br /><br />
                                I graduated with the highest Honor Roll and received multiple scholarships while being a tri-sport athlete.
                            </React.Fragment>
                        } 
                    />
                </div>
            </section>
            <section id={"projects"}>
                <h1>Projects</h1>
                <Project
                    info={projects.nvda}
                    images={generateImageArr("assets/experience/frc-prog-lead", 5)}
                    languages={[
                        langs.cpp,
                        langs.python,
                        langs.mlab,
                        langs.js_ts,
                    ]}
                    tags={[
                        skills.cv,
                        skills.ml,
                        skills.robo,
                        skills.alg,
                        skills.scraping,
                        skills.swe,
                        skills.hosting,
                    ]}
                    description={
                        <React.Fragment>
                            I built a trading system on the NVIDIA Jetson Orin NX where I programmed in Python, C++/CUDA, and used CuPy/TensorRT to take advantage of GPU acceleration. I implemented financial models like Black-Scholes, Monte Carlo simulations, and Greeks so that the platform could perform real-time calculations and inference directly on the hardware.
                            <br /><br />
                            To power the system, I created a data pipeline that pulled live and historical data from Polygon, Tradier, and IEX/NQ L2 order books. I integrated YFinance and TradingView for visualization, and then developed a Portfolio & Risk Dashboard that calculated metrics like Value at Risk, Sharpe ratio, and drawdowns. I first prototyped the models in MATLAB and later translated them into Python for deployment.
                            <br /><br />
                            I developed an AI-powered assistant that combined risk-neutral probabilities, machine learning signals, and historical pattern analysis. The assistant could automatically generate alerts for volatility spikes, unusual options flows, and order book imbalances, giving it real value as a decision-support tool for traders.
                            <br /><br />
                            Finally, I automated the ingestion of SEC EDGAR filings (10-Ks and 10-Qs) and packaged the entire project as containerized microservices using FastAPI. I built a Next.js frontend and used Docker CI/CD pipelines, which made the platform reproducible both on Jetson hardware and in the cloud.
                        </React.Fragment>
                    }
                />
                <Project
                    info={projects.ml}
                    images={generateImageArr("assets/experience/frc-prog", 2)}
                    languages={[
                        langs.python,
                        langs.js_ts,
                    ]}
                    tags={[
                        skills.ml,
                        skills.alg,
                        skills.react,
                        skills.swe,
                        skills.regex,
                    ]}
                    description={
                        <React.Fragment>
                            I designed and built a Python-based compiler focused on scientific computing workloads, especially PDE stencils and matrix operations. I implemented loop-nest optimizations such as tiling, unrolling, vectorization, and parallelization to make the computations run significantly faster.
                            <br /><br />
                            By integrating Numba JIT compilation, I achieved 8–10× speedups over baseline NumPy implementations. To make sure performance improvements didn’t come at the cost of correctness, I added tolerance-based validation that checked the accuracy of numerical results.
                            <br /><br />
                            I developed a React/JavaScript interface that let me interactively explore the compiler’s intermediate representation and scheduling choices. The tool provided real-time visualizations of applied optimizations, compared predicted vs. measured runtimes, and even incorporated roofline analysis to better understand performance bottlenecks.
                            <br /><br />
                            To take it a step further, I built an ML-guided auto-tuner that searched for optimal schedules. This reduced the time it took to find efficient optimization strategies by more than 70%, making the system both faster and more adaptive.
                        </React.Fragment>
                    }
                />
                <Project
                    info={projects.r}
                    images={generateImageArr("assets/projects/r", 3)}
                    languages={[
                        langs.python,
                    ]}
                    tags={[
                        skills.alg,
                        skills.swe,
                    ]}
                    description={
                        <React.Fragment>
                            Cleaned and analyzed a vehicle MPG dataset, standardized column names, handled missing data, and engineered categorical variables for fuel efficiency and manufacturing year to support trend analysis.
                            <br /><br />
                            Summarized city, highway, and combined MPG by class and fuel type to reveal efficiency patterns across segments.
                        </React.Fragment>
                    }
                />
                </section>

            <section id={"experiences"}>
              <h1>Experiences</h1>

              <div className={"experience-container"}>
                <Experience
                  title={"General Manager — Boston Bay Pizza 2 & Wings"}
                  images={generateImageArr("assets/experience/bbp", 3)}
                  projects={[]}                                   // safe if your component expects it
                  tags={[skills.lead, skills.comm]}
                  description={
                    <React.Fragment>
                      Directed daily operations in a high-volume restaurant, overseeing service
                      for 120+ customers nightly while ensuring seamless workflow, exceptional
                      customer experiences, and consistent repeat business in a fast-paced environment.
                      <br /><br />
                      Negotiated and implemented strategic partnerships with suppliers and local
                      organizations, driving marketing initiatives and optimized pricing models
                      that boosted sales revenue by 60% within one year.
                      <br /><br />
                      Developed, analyzed, and presented weekly financial statements to owners,
                      while managing payroll and cost-control measures that improved operational
                      efficiency and safeguarded profitability.
                      <br /><br />
                      Recruited, trained, and led a team of 15+ employees, instilling a culture
                      of accountability and teamwork that reduced staff turnover and enhanced service quality.
                    </React.Fragment>
                  }
                />
              </div>
            </section>

            <section id={"skills"}>
                <h1>Skills</h1>
                <div className={"skills-container"}>
                    <Skill info={langs.cpp} projects={[projects.nvda, projects.ml]} description={<React.Fragment>C++ experience and optimization goals.</React.Fragment>} />
                    <Skill info={langs.js_ts} projects={[projects.ml]} description={<React.Fragment>JavaScript/TypeScript web and backend experience.</React.Fragment>} />
                    <Skill info={langs.java} projects={[]} description={<React.Fragment>Java familiarity through robotics and coursework.</React.Fragment>} />
                    <Skill info={langs.html_css} projects={[projects.ml]} description={<React.Fragment>Extensive HTML/CSS web development experience.</React.Fragment>} />
                    <Skill info={langs.tex} projects={[]} description={<React.Fragment>LaTeX used for math-heavy documents and proofs.</React.Fragment>} />
                    <Skill info={skills.ml} projects={[projects.nvda, projects.ml]} description={<React.Fragment>Passion for machine learning theory and projects.</React.Fragment>} />
                    <Skill info={skills.flt} projects={[]} description={<React.Fragment>Explored formal languages and automata theory.</React.Fragment>} />
                    <Skill info={skills.regex} projects={[]} description={<React.Fragment>Implemented regex conversions and evaluations.</React.Fragment>} />
                    <Skill info={skills.cv} projects={[projects.nvda]} description={<React.Fragment>Computer vision applied in robotics and AI.</React.Fragment>} />
                    <Skill info={skills.cg} projects={[]} description={<React.Fragment>Early passion in 2D/3D graphics and rendering.</React.Fragment>} />
                    <Skill info={skills.robo} projects={[]} description={<React.Fragment>Robotics programming and control theory.</React.Fragment>} />
                    <Skill info={skills.scraping} projects={[projects.nvda]} description={<React.Fragment>Web scraping with Puppeteer and Selenium.</React.Fragment>} />
                    <Skill info={skills.alg} projects={[projects.nvda, projects.ml]} description={<React.Fragment>Algorithm design and implementation experience.</React.Fragment>} />
                    <Skill info={skills.react} projects={[projects.ml]} description={<React.Fragment>React and React Native for frontend projects.</React.Fragment>} />
                    <Skill info={skills.hosting} projects={[projects.nvda]} description={<React.Fragment>Cloud deployment, VPS, and containerization.</React.Fragment>} />
                    <Skill info={skills.lead} projects={[]} description={<React.Fragment>Team leadership experience in robotics.</React.Fragment>} />
                    <Skill info={skills.swe} projects={[projects.nvda, projects.ml]} description={<React.Fragment>Large-scale software engineering practices.</React.Fragment>} />
                    <Skill info={skills.comm} projects={[]} description={<React.Fragment>Strong communication and collaboration skills.</React.Fragment>} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Main
