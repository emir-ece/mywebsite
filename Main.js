import React from "react"

import { HashLink } from "react-router-hash-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"

import Education from "../components/Education"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Skill from "../components/Skill"

const Main = () => {
    const langs = {
        cpp: { id: "langs/cpp", label: "C++" },
        js_ts: { id: "langs/js_ts", label: "Java Script / Type Script" },
        java: { id: "langs/java", label: "Java" },
        html_css: { id: "langs/html_css", label: "HTML + CSS" },
        tex: { id: "langs/tex", label: "LaTex" }
    }

    const skills = {
        ml: { id: "skills/ml", label: "Machine Learning" },
        flt: { id: "skills/flt", label: "Formal Language Theory" },
        regex: { id: "skills/regex", label: "Regular Expressions" },
        parsing: { id: "skills/parsing", label: "Parsing" },
        cv: { id: "skills/cv", label: "Computer Vision" },
        cg : { id: "skills/cg", label: "Computer Graphics" },
        robo : { id: "skills/robo", label: "Robotics" },
        scraping : { id: "skills/scraping", label: "Web Scraping" },
        alg : { id: "skills/alg", label: "Algorithms" },
        ui : { id: "skills/ui", label: "UI / UX" },
        node : { id: "skills/node", label: "NodeJS" },
        react : { id: "skills/react", label: "React / React Native" },
        hosting : { id: "skills/hosting", label: "Hosting" },
        extensions : { id: "skills/extensions", label: "Chrome Extensions" },
        lead : { id: "skills/lead", label: "Team Leadership" },
        swe : { id: "skills/swe", label: "Software Engineering" },
        comm : { id: "skills/comm", label: "Communication" }
    }

    const projects = {
        cnn: { id: "projects/cnn", label: "Convolutional Neural Network", url: "https://github.com/mattperls-code/convolutional-neural-network" },
        nn: { id: "projects/nn", label: "Neural Network", url: "https://github.com/mattperls-code/neural-network" },
        frc24: { id: "projects/frc24", label: "2024 FRC Robot", url: "https://github.com/RoboLancers/321-Crescendo-2024" },
        frc23: { id: "projects/frc23", label: "2023 FRC Robot", url: "https://github.com/RoboLancers/FRC-Main-2023" },
        fa: { id: "projects/fa", label: "Finite Automata", url: "https://github.com/mattperls-code/finite-automata" },
        parser: { id: "projects/parser", label: "Parser", url: "https://github.com/mattperls-code/parser" },
        platinum: { id: "projects/platinum", label: "Platinum", url: "https://github.com/mattperls-code/platinum" },
        connected: { id: "projects/connected", label: "Connected", url: "https://github.com/mattperls-code/connected" },
        fn3d: { id: "projects/fn3d", label: "3D Function Renderer", url: "https://github.com/mattperls-code/3d-function-renderer" },
        olrt: { id: "projects/olrt", label: "One Line Ray Tracer", url: "https://github.com/mattperls-code/one-line-ray-tracer" },
        nbody: { id: "projects/nbody", label: "N-Body Simulator", url: "https://github.com/mattperls-code/n-body-simulator" },
        textgen: { id: "projects/textgen", label: "Markov Chain Text Generator", url: "https://github.com/mattperls-code/probabilistic-text-generator" },
        clearcontext: { id: "projects/clearcontext", label: "Clear Context", url: "https://clearcontext.co/" },
        quoteit: { id: "projects/quoteit", label: "Quote It", url: "https://apps.apple.com/us/app/quote-it/id1628678287" },
        quickdodge: { id: "projects/quickdodge", label: "Quick Dodge", url: "https://apps.apple.com/us/app/quick-dodge/id1517218313" },
        eureka: { id: "projects/eureka", label: "Eureka", url: "https://eureka-mattperls-code.vercel.app/" },
        lancerscout: { id: "projects/lancerscout", label: "Lancer Scout", url: "https://github.com/RoboLancers/lancer-scout" }
    }

    const generateImageArr = (path, count) => {
        const imageArr = []

        for (let i = 1;i<=count;i++) imageArr.push(path + "/img" + i + ".png")

        return imageArr
    }

    return (
        <React.Fragment>
            <nav>
                <HashLink smooth to={"#about"}>About</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#education"}>Education</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#experience"}>Experience</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#projects"}>Projects</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#skills"}>Skills</HashLink>
            </nav>
            <main>
                <img src={"assets/me.jpg"} />
                <h1>Matthew Perlman</h1>
                <label>
                    Machine Learning
                    <div className={"dot"} />
                    Formal Language Theory
                    <div className={"dot"} />
                    Programming Languages
                </label>
                <br />
                <label>
                    2D/3D Graphics
                    <div className={"dot"} />
                    Robotics
                    <div className={"dot"} />
                    Fullstack Web
                    <div className={"dot"} />
                    iOS Mobile
                </label>
                <br />
                <div className={"links"}>
                    <a target={"_blank"} href={"https://github.com/mattperls-code"}><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a target={"_blank"} href={"https://www.linkedin.com/in/matthew-perlman-a637a7301"}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a target={"_blank"} href={"mailto:mattperls.code@gmail.com"}><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                    <a target={"_blank"} href={"https://www.instagram.com/mattperls"}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </main>
            <section id={"about"}>
                <h1>About</h1>
                <div>
                Hello, my name is Matt, and I'm a sophomore studying Computer Science at UMass Amherst.
                <br /><br />
                I love to program and am very passionate about computer graphics, robotics, and machine learning. I've been writing code for about 8 years now and I'm an adept problem solver across many fields. I've written parsers, neural networks, programming languages, and rendering engines all from scratch in C++ as well as award winning websites, chrome extensions, and mobiles apps using JavaScript and React.
                <br /><br />
                I've released several iOS mobile apps, done some professional freelance web development over the years, and am a founding member and the CTO of ClearContext, an AI powered tool to help identify and eliminate bias in online media.
                <br /><br />
                As a high schooler, I was the lead programmer and a driver for our FRC team, the Robolancers, and won the world championship in 2024. My two years of leadership on our 50+ person team taught me valuable soft skills about work management, delegation, dev ops, and communication as well as important technical skills like computer vision, control theory, and autonomous planning.
                <br /><br />
                I love building interesting and innovative projects, and am always looking for something new to learn about. Please reach out with any questions or ideas!
                </div>
            </section>
            <section id={"education"}>
                <h1>Education</h1>

                <div className={"education-container"}>
                    <Education title={"UMass Amherst Undergrad"} description={
                        <React.Fragment>
                            Overall GPA: 3.932
                            <br />
                            Major GPA: 3.889
                            <br /><br />
                            Currently I am a sophomore at the University of Massachusetts Amherst studying Computer Science.
                            <br /><br />
                            I plan to graduate with a B.S. in 2027 and a M.S. in 2028.
                        </React.Fragment>
                    } />
                    
                    <Education title={"Central High School"} description={
                        <React.Fragment>
                            Unweighted GPA: 3.87
                            <br />
                            Weighted GPA: 4.33
                            <br /><br />
                            I attended Central High School from 2020-2024 with a class size of roughly 600 students.
                            <br /><br />
                            I graduated with the highest Honor Roll and received the Barnwell Service Award, the Alexander Dallas Bache Science Prize (for Physics), and the Barry R. Bloom Prize (for Science).
                        </React.Fragment>
                    } />
                </div>
            </section>
            <section id={"experience"}>
                <h1>Experience</h1>

                <Experience title={"RoboLancers Lead Programmer (2022 - 2024)"} images={generateImageArr("assets/experience/frc-prog-lead", 5)} projects={[
                    projects.frc24,
                    projects.frc23,
                    projects.lancerscout
                ]} tags={[
                    langs.java,
                    skills.cv,
                    skills.robo,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        In 2023, my second year as a programmer on the RoboLancers, I was elected programming lead.
                        This meant I was in charge of delivering functional robot code, managing my team of 10+ programmers, and communicating with mechnical, CAD, and electrical leads.
                        <br /><br />
                        I oversaw the development of our robot that year, helping my programmers implement complicated PID controllers for the robot's arm and self balancing, inverse kinematics for joint angles, computer vision and odometry for feedback, and autonomous path following.
                        <br /><br />
                        While our end robot wasn't perfect that season, our team learned a lot and I had carved out a strong team of programmers for next year.
                        <br /><br />
                        In 2024, I maintained my position as the lead programmer, and my team shrunk to 5-10 strong programmers.
                        <br /><br />
                        Before our main season began, I led our team through building a scouting suite, Lancer Scout, which we later used for strategy in competitions.
                        <br /><br />
                        When the main season arrived, I managed our team as we built an automatic object collector using vision, automatic scoring, and complex multistep autonomous path following procedures.
                        <br /><br />
                        With a sharp team of engineers and programmers and a ton of luck, we ultimately made it to the World Championship and won.
                    </React.Fragment>
                } />

                <Experience title={"RoboLancers Programmer (2021 - 2022)"} images={generateImageArr("assets/experience/frc-prog", 2)} projects={[]} tags={[
                    langs.java,
                    skills.cv,
                    skills.robo,
                    skills.alg,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        I joined the RoboLancers as a freshman in 2020 during covid. Because of the pandemic, a lot of the roles were fuzzy and I wasn't officially a programmer for the team until 2021.
                        <br /><br />
                        In 2021, I skipped our school's FTC team and jumped directly into FRC (think skipping JV for Varsity if you aren't familiar with FIRST).
                        <br /><br />
                        While there, I was introduced to a team of returning programmers and given the task of finding some way to help contribute to the team's robot.
                        It didn't take me long to find something I wanted to build, and I immediately began working on an automatic shooter and vision system for our team's dodgeball-style robot.
                        After finishing the shooting, I helped some of my other teammates program the climbing mechanism, autonomous motion paths, and controls.
                        <br /><br />
                        By the end of the year, I had taught myself most of the framework we were using, learned how to use vision data, and was in charge of tuning most of our motor PIDs.
                    </React.Fragment>
                } />
            </section>
            <section id={"projects"}>
                <h1>Projects</h1>

                <Project info={projects.cnn} images={generateImageArr("assets/projects/cnn", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.cv,
                    skills.cg,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        A fully featured convolutional neural network class built without any math or machine learning libraries.
                        <br /><br />
                        The CNN class has easy wrappers for building, initializing, training, and evaluating models with custom layer structure, activations, and output dimensions.
                        <br /><br />
                        The demo images show the model structure and training results for an MNIST hand written digits classifier implemented using the CNN class.
                    </React.Fragment>
                } />

                <Project info={projects.nn} images={generateImageArr("assets/projects/nn", 5)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        A flexible neural network class made without any libraries for math or machine learning.
                        <br /><br />
                        The NN class manages constructing new networks, randomizing parameters, training using back propagation, and making feedforward predictions.
                        <br /><br />
                        The demo images show various models implemented with the NN class that approximate different functions, shapes, and regions.
                    </React.Fragment>
                } />

                <Project info={projects.frc24} images={generateImageArr("assets/projects/frc24", 4)} languages={[
                    langs.java
                ]} tags={[
                    skills.robo,
                    skills.cv,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        The RoboLancers 2024 robot, Da Pinchy.
                        <br /><br />
                        Da Pincy was programmed by me and my team in Java on my high school robotics team.
                        <br /><br />
                        Da Pincy uses a custom vision pipeline to automatically detect and intake rings on the floor.
                        It can also follow complex autonomous paths and align to targets on the field using a blended odometry/vision approach.
                        The shooter dynamically adjusts its angle and speed to hit variable distance shots automatically based on visual cues.
                        The drive, arm, and flywheel motors all feature custom PID control to ensure fast and accurate motion.
                    </React.Fragment>
                } />

                <Project info={projects.frc23} images={generateImageArr("assets/projects/frc23", 4)} languages={[
                    langs.java
                ]} tags={[
                    skills.robo,
                    skills.cv,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        The RoboLancers 2023 robot, Lucy.
                        <br /><br />
                        Lucy was programmed by me and my team in Java on my high school robotics team.
                        <br /><br />
                        Lucy uses a large 3 segment arm to pickup and place various items on the field.
                        To control this very heavy machinary, we used custom PID on all the arm motors as well as inverse kinematics to determine joint angles.
                        It also uses a vision pipeline combined with odometry to follow complex autonomous motion paths.
                    </React.Fragment>
                } />

                <Project info={projects.fa} images={generateImageArr("assets/projects/fa", 3)} languages={[
                    langs.cpp,
                    langs.tex
                ]} tags={[
                    skills.flt,
                    skills.regex,
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        A powerful toolkit for evaluating, analyzing, and converting finite automata and regular expressions.
                        <br /><br />
                        The FiniteAutomata class can compare different languages, evaluate strings for membership, and convert between various subtypes of finite automata and regular expression.
                        These conversions include transitions between literal expression strings, regular expressions, lambda NFAs, NFAs, DFAs, and min DFAs.
                        The project also supports multiple export options, allowing for easy integration with LaTex, PDFs, and images.
                    </React.Fragment>
                } />

                <Project info={projects.parser} images={generateImageArr("assets/projects/parser", 1)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.flt,
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        A parser combinator library that uses many standard combinators in order to make easy top down parsers.
                        <br /><br />
                        The library supports combinators for parsing sequences, repetitions, optional tokens, string literals, and many others to make defining grammars as easy as possible.
                        <br /><br />
                        The demo images show an example XML file which was parsed using the library, but the project can extend to parsing any context free grammar.
                    </React.Fragment>
                } />

                <Project info={projects.platinum} images={generateImageArr("assets/projects/platinum", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        An interpreted programming language built on a custom LL(1) style parser and runtime.
                        <br /><br />
                        Platinum is a strict but dynamically typed language with syntax similar to that of Java Script.
                        It supports both primitive and non-primitive types, including arrays, maps, and functions.
                        <br /><br />
                        The standard library supports IO, math operations, file system calls, type conversions, and other basic utilities.
                    </React.Fragment>
                } />

                <Project info={projects.connected} images={generateImageArr("assets/projects/connected", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        A tool to find and visualize connections in undirected graphs.
                        <br /><br />
                        Connected loads graphs from human readable text where you can then use the CLI to find direct neighbors, communities, and paths from one vertex to another.
                        <br /><br />
                        The images show graph visualizations of celebrity connections, greek mythology, and musical artists.
                    </React.Fragment>
                } />

                <Project info={projects.fn3d} images={generateImageArr("assets/projects/fn3d", 4)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.cg,
                    skills.alg,
                ]} description={
                    <React.Fragment>
                        A handwritten perspective projection 3D renderer for drawing parameterized surfaces.
                        <br /><br />
                        The program generates points along the surface, projects them down to the 2D renderspace using a camera transform, and the output is displayed on an SDL2 window.
                        <br /><br />
                        The camera position/rotation/fov are configurable as well as the color interpolation.
                    </React.Fragment>
                } />

                <Project info={projects.olrt} images={generateImageArr("assets/projects/olrt", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.cg,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        A ray tracer with proper triangle rasterization, depth buffering, basic phong shading, shadows, and lighting written in one line of Java Script (without semicolons, no cheating).
                        <br /><br />
                        This was originally pitched to me by one of my friends as a joke, but it was too cool of a project to pass on.
                        <br /><br />
                        The single line of code expands to a massive set of chained IIFEs that handle the functionality of converting a set of input meshes all the way to rendered pixels on the canvas.
                    </React.Fragment>
                } />

                <Project info={projects.nbody} images={generateImageArr("assets/projects/nbody", 3)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.cg,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        A simulator designed to show the progression of bodies of mass under the influence of gravity.
                        <br /><br />
                        This project was written as a tool for an astronomy paper exploring the tradeoff between computational resources and accuracy.
                        The paper identifies loose but instructive asymtotic relations between key variables like error, number of bodies, and computation time.
                        <br /><br />
                        The paper can be found at the project link above.
                    </React.Fragment>
                } />

                <Project info={projects.textgen} images={generateImageArr("assets/projects/textgen", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        A simple text generator using a weighted sliding window and markov chain inspired predictor.
                        <br /><br />
                        The generator first analyzes a sample text to see how likely (using a frequentist approach) a given word A is to follow another word B with n words in between.
                        It then picks a word at random to start and uses a sliding window of weighted predictions to generate a next word probability distribution and chains additional words onto the output.
                        <br /><br />
                        The demo images show example outputs for a Trump tweet generator, news generator, and graph theory generator.
                    </React.Fragment>
                } />

                <Project info={projects.clearcontext} images={generateImageArr("assets/projects/clearcontext", 2)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} tags={[
                    skills.node,
                    skills.react,
                    skills.ui,
                    skills.hosting,
                    skills.extensions,
                    skills.scraping,
                    skills.alg,
                    skills.swe,
                ]} description={
                    <React.Fragment>
                        Clear Context is a news reliability and analysis tool for everyday news consumers that I cofounded.
                        <br /><br />
                        The chrome extension provides simple and unbiased summaries and analysis of news articles by scraping and comparing information from top sources across the web.
                        <br /><br />
                        The project includes a website written in react, a chrome extension also built with react, and a hosted vps that runs the node backend via nginx.
                    </React.Fragment>
                } />

                <Project info={projects.quoteit} images={generateImageArr("assets/projects/quoteit", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.hosting,
                    skills.swe,
                ]} description={
                    <React.Fragment>
                        Quote It is an iOS mobile app that is currently available on the App Store.
                        <br /><br />
                        The app serves as a fun way to store quotes from your friends and family, letting you easily create, share, and relive funny experiences.
                        <br /><br />
                        Quote It is written in React Native, makes heavy use of tab and stack navigation, and uses backend services to store and retrieve quotes for easy sharing/backups.
                    </React.Fragment>
                } />

                <Project info={projects.quickdodge} images={generateImageArr("assets/projects/quickdodge", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.cg,
                    skills.hosting
                ]} description={
                    <React.Fragment>
                        Quick Dodge is an iOS mobile game that is currently available on the App Store.
                        <br /><br />
                        Its a fun game that combines split second decisions and fast paced gameplay with relaxing visuals and chill music.
                        <br /><br />
                        Quick Dodge is written in React Native, uses SVG to render vivid gameplay, and makes use of stack navigation.
                    </React.Fragment>
                } />

                <Project info={projects.eureka} images={generateImageArr("assets/projects/eureka", 4)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        Eureka is an award winning website aiming to recognize, celebrate, and draw inspiration from the top minds throughout history.
                        <br /><br />
                        It is written in React and features dynamic page generation, immersive graphics, and interactive content.
                        The website makes heavy use of ThreeJS as well as custom 3D css tools for pages like the gallery and timeline.
                        <br /><br />
                        Eureka won a $1000 prize as the honorable mention in the 2023 CodedByKids website design contest.
                    </React.Fragment>
                } />

                <Project info={projects.lancerscout} images={generateImageArr("assets/projects/lancerscout", 5)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} tags={[
                    skills.node,
                    skills.react,
                    skills.ui,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm,
                ]} description={
                    <React.Fragment>
                        Lancer Scout is a fully featured FRC scouting suite built by me and my team, including a data display dashboard, PWA mobile app, website, and postgress database.
                        <br /><br />
                        It was built for the RoboLancers to use during robotics competitions to easily gather, centralize, and analyze data about the performance of different robots.
                        <br /><br />
                        Lancer Scout uses handbuilt form serialization to send large amounts of data over QR code, custom svg charts and visualizers for data analysis, and docker for portability.
                        The original mobile app used React Native bluetooth protocols to send the same data that is now compressed in QR format, but we have since moved to visual data tranfer for convenience.
                    </React.Fragment>
                } />
            </section>
            <section id={"skills"}>
                <h1>Skills</h1>

                <div className={"skills-container"}>
                    <Skill info={langs.cpp} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.connected,
                        projects.fn3d,
                        projects.textgen
                    ]} description={
                        <React.Fragment>
                            I've been writing C++ for about 4 years now and it's recently been my go-to language for making projects.
                            <br /><br />
                            While I'm no master of the language, I'm yet to meet a challenge I can't work my way through in the language.
                            I have experience working with both raw and smart pointers, most data structures in the stl, object oriented programming mechanisms, and a few external libraries.
                            <br /><br />
                            In the future I'm looking to hone my skills on optimization techniques, mainly SIMD, GPU integration, and multithreading.
                        </React.Fragment>
                    } />

                    <Skill info={langs.js_ts} projects={[
                        projects.olrt,
                        projects.nbody,
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            Java Script is the first language I learned and I've been using it for about 8 years.
                            I consider myself as fluent in Java Script as a web programmer could ever need to be.
                            <br /><br />
                            I have many years of experience using Java Script and Type Script for web, mobile, and backend development.
                            <br /><br />
                            I've worked with most namebrand libraries across Java Script and Type Script, covering everything from icon packs and style plugins to bluetooth drivers and physics engines.
                        </React.Fragment>
                    } />

                    <Skill info={langs.java} projects={[
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            I started writing Java in high school around 2020.
                            <br /><br />
                            While I don't write a lot of personal projects in Java these days, I'm pretty familiar with the language and used it extensively in the past.
                            <br /><br />
                            I've worked on a couple projects, each several thousand lines, for robotics, and have a lot of experience using Java with FRC's robotics programming framework, WPILib. I've used the WPILib APIs for things like serial communication, motor control, path planning, and computer vision.
                        </React.Fragment>
                    } />

                    <Skill info={langs.html_css} projects={[
                        projects.clearcontext,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            I've been using HTML and CSS for web development for around 8 years.
                            <br /><br />
                            Most of my earlier projects were web related, and I've accumulated a lot of experience over the years working with HTML and CSS.
                            I'm familiar with a vast amount of tags and styles, and know the ins and outs of these languages.
                            <br /><br />
                            I've built websites for fun, professionally as a freelancer, and won design competitions.
                            <br /><br />
                            While frontend is not my passion the way it was as a beginner, I often find these skills helping me out in various projects.
                        </React.Fragment>
                    } />

                    <Skill info={langs.tex} projects={[
                        projects.fa
                    ]} description={
                        <React.Fragment>
                            I learned LaTex for my discrete math class in college, and have since used it whenever I need to write proofs or pretty math.
                            <br /><br />
                            I'm still a beginner at using LaTex, but have recently been working it into some of my personal projects.
                            I hope to continue using it in school and my work.
                        </React.Fragment>
                    } />

                    <Skill info={skills.ml} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.textgen
                    ]} description={
                        <React.Fragment>
                            Machine Learning has always been a passion point for me as a programmer.
                            <br /><br />
                            I find the theory incredibly fascinating and have enjoyed learning about the math and concepts behind things like neural networks, large language models, and image classification.
                            <br /><br />
                            I recently decided to put my knowledge to the test, and built a neural network and convolutional neural network by hand.
                            The projects ended up being very complicated but also very rewarding, and I hope to continue this kind of work in the future through personal or career research.
                        </React.Fragment>
                    } />

                    <Skill info={skills.flt} projects={[
                        projects.fa,
                        projects.parser
                    ]} description={
                        <React.Fragment>
                            I first encountered Formal Language Theory accidently while building the parser for programming language, Platinum.
                            I didn't take the full dive then, but when it came up again in my discrete math class, I decided to really explore grammar and parsing.
                            <br /><br />
                            I built out a parser combinator library for fun, and then a finite automata project using what I was learning in my class.
                            <br /><br />
                            I find Formal Language Theory to be a really intriguing field, and I'm interested in exploring further in the future, potentially with context sensitive grammars.
                        </React.Fragment>
                    } />

                    <Skill info={skills.regex} projects={[
                        projects.fa
                    ]} description={
                        <React.Fragment>
                            As every programmer does, I first ran into Regular Expressions by chance, and for a long time it was just a tool I knew existed.
                            <br /><br />
                            When I took my first discrete math class though, I learned how they actually work, and demystified them for myself.
                            When I started building my finite automata project, I decided I wanted regular expression conversions too, so I implemented tools for parsing, evaluating, and comparing them.
                            <br /><br />
                            I haven't used regular expressions too much in practice, but I hope to eventually get more practical experience using them in the future.
                        </React.Fragment>
                    } />

                    <Skill info={skills.parsing} projects={[
                        projects.fa,
                        projects.parser,
                        projects.platinum
                    ]} description={
                        <React.Fragment>
                            My first introduction to parsing was when I was building my programming language, Platinum.
                            Because I wrote Platinum without any libraries or assistance, I sort of "figure out" how to do the parsing myself, which ultimately results in what I now know to be loosely a left lookahead parser.
                            <br /><br />
                            My friend later introduced me to the concept of parser combinators and other functional approaches to parsing, and this inspired me to implement those tools for myself.
                            <br /><br />
                            In addition to the projects listed here, my github houses a lot of old handwritten parsers like that of platinum, including ones for evaluating math and XML.
                        </React.Fragment>
                    } />

                    <Skill info={skills.cv} projects={[
                        projects.cnn,
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            I've done a lot of work in Computer Vision on both the practical and theoretical front.
                            <br /><br />
                            Practically, I've used existing image classifiers and object detection methods for localization and automation in robotics.
                            In these cases, I spent the bulk of the time calibrating cameras, tuning classifier inputs, and passing the output to different procedures.
                            <br /><br />
                            On the theoretical front, I've built projects that perform image classification and object detection like my CNN.
                            I've also done a few demos which aren't featured here on how this data can be used, like for binocular pose estimation (RoboLancers github) or automatic trajectory adjustment (my github).
                        </React.Fragment>
                    } />

                    <Skill info={skills.cg} projects={[
                        projects.cnn,
                        projects.fn3d,
                        projects.olrt,
                        projects.nbody,
                        projects.quickdodge
                    ]} description={
                        <React.Fragment>
                            Computer Graphics was my first love as a programmer.
                            <br /><br />
                            I first started programming with the intent to build games, so naturally I quickly fell into the world of 2D and 3D graphics.
                            <br /><br />
                            As a middleschooler, I learned how perspective projection, ray tracing, ray casting, rasterization, and other common techniques worked.
                            As I became a better programmer, I put this knowledge into practice and built various types of renderers.
                            <br /><br />
                            I still love making graphics projects, and I'm a firm believer that graphics is the ideal place for new programmers to start their journey.
                        </React.Fragment>
                    } />

                    <Skill info={skills.robo} projects={[
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            I joined my high school robotics team during covid, and was instantly captivated by the work.
                            <br /><br />
                            I learned about control theory, how to apply computer vision, how to plan autonomous motion paths, and so many other technical skills that you can only gain through that type of hands on experience.
                            It also gave me an in to learning about CAD, engineering, physical modeling, and strategy.
                            <br /><br />
                            Since leaving high school, I haven't done too much robotics work, but I really love the field and am looking forward to doing more with hardware integration in the future.
                        </React.Fragment>
                    } />

                    <Skill info={skills.scraping} projects={[
                        projects.clearcontext
                    ]} description={
                        <React.Fragment>
                            When I started building my startup, Clear Context, I was introduced to the concept of Web Scraping.
                            <br /><br />
                            To get the best results, I toyed around with many different tools, and gained experience working with Puppeteer, Playwright, Selenium, and Soup.
                            This gave me a solid understanding of how to web scrape as a hobbyist and also at scale, and what complications come with doing this by hand on a hosted environment.
                        </React.Fragment>
                    } />

                    <Skill info={skills.alg} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.frc24,
                        projects.frc23,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.connected,
                        projects.fn3d,
                        projects.olrt,
                        projects.nbody,
                        projects.textgen,
                        projects.clearcontext,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            Algorithms is a bit of an umbrella term. For the purpose of this website, I'm calling algorithms complicated and theoretically motivated procedures in code.
                            <br /><br />
                            My interests span a lot of different domains within computer science, and as such, I've explored a wide variety of theory.
                            In these explorations I've faced many algorithmic tasks, and have developed experience and intuition for problem solving.
                        </React.Fragment>
                    } />

                    <Skill info={skills.ui} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            As a born and bred web developer, my UI / UX skills have developed a lot over the years.
                            <br /><br />
                            From my first website as a middleschooler to mobile apps in high school and freelancing in college, I've learned how to best format, write, color, and structure my applications.
                            <br /><br />
                            I've studied core design principles and their psychological backings, taken workshops on optimizing user experience, and explored SEO tools like lighthouse, all to create seemless and immersive interactions.
                        </React.Fragment>
                    } />

                    <Skill info={skills.node} projects={[
                        projects.clearcontext,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            I've been using NodeJS for about 7 years now, and a lot has changed from my first http server and a local text file database.
                            <br /><br />
                            In my more recent work, I've combined NodeJS with tools like Type Script, Express, SupaBase, Postgress, Google oauth, JWT, web scraping, bluetooth, and others.
                            <br /><br />
                            Its my go-to for backend projects, and I have extensive experience working with its environment and libraries.
                        </React.Fragment>
                    } />

                    <Skill info={skills.react} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            React and React Native are my frameworks of choice for all things frontend.
                            <br /><br />
                            I've been using both frameworks for many years and have a good grasp over stateful architecture and the rendering process.
                            <br /><br />
                            I've worked with tons of common libraries for the two, covering needs like routing, navigation, styling, animations, and http calls.
                            <br /><br />
                            In the future I'd like to explore other adjacent technologies like NextJS and SSR.
                        </React.Fragment>
                    } />

                    <Skill info={skills.hosting} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge
                    ]} description={
                        <React.Fragment>
                            Hosting is a bit broad, so I'll specify this as any type of cloud management or deployment.
                            <br /><br />
                            I've done hosting for frontend websites, chrome extensions, backend servers, and mobile apps on the app store.
                            I have experience working with VPS, nginx, and DNS, as well as with vercel and github pages for simpler projects.
                            I've released chrome extensions on the Chrome Web Store and iOS apps on the app store using XCode and App Store Connect.
                            <br /><br />
                            I'm looking to grow my skills in hosting through working with AWS and containerized environments.
                        </React.Fragment>
                    } />

                    <Skill info={skills.extensions} projects={[
                        projects.clearcontext
                    ]} description={
                        <React.Fragment>
                            I've built a few chrome extensions and have one currently hosted on the Chrome Web Store.
                            <br /><br />
                            I'm familiar with how chrome formats their manifest data and have worked with several key premissions like storage and active tab.
                            <br /><br />
                            Apart from the projects listed here, I have two unhosted extensions stored on my github, UClass and Students in Style.
                        </React.Fragment>
                    } />

                    <Skill info={skills.lead} projects={[
                        projects.frc24,
                        projects.frc23,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            From my two years as programming lead on the RoboLancers, I gained a huge amount of experience as a leader.
                            <br /><br />
                            On the RoboLancers, I managed a team of 5-10 programmers working under me inside of a larger 50+ person team of other engineers, electricians, and modelers.
                            <br /><br />
                            This role taught me how to delegate work effectively, keep track of deadlines, ensure clear communication between myself, my other programmers, and the other leads, and keep a focused long term goal.
                        </React.Fragment>
                    } />

                    <Skill info={skills.swe} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.frc24,
                        projects.frc23,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.connected,
                        projects.clearcontext,
                        projects.quoteit,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            Software Engineering is a broad term, so I'll clarify it to mean building projects where clean coherent code structure is essential.
                            <br /><br />
                            I've built tons of large scale projects both as a solo developer and on a team. In many of these projects, making clean decisions in codebase architecture was crucial.
                            <br /><br />
                            Across these projects, I've learned how to write clean code that reads like instructions, make meaningful abstractions, segment code and functionality, and keep clear stylistic conventions.
                        </React.Fragment>
                    } />

                    <Skill info={skills.comm} projects={[
                        projects.frc24,
                        projects.frc23,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            Anyone who started programming as a hobbyist knows that working on a team is a different experience.
                            <br /><br />
                            For me, my first two or so years programming had been solo. By joining a team during high school, it pushed me to develop better soft skills and effectively communicate with other programmers as well as people who don't write code.
                            <br /><br />
                            By spending four years in this environment, I became a strong communicator capable of interacting with technical and non-technical teammates to deliver the best end result possible.
                        </React.Fragment>
                    } />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Main