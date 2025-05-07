<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinkedOut: Your Professional Disconnect</title>
    <meta name="description" content="LinkedOut: The social network for when you're over networking.">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e0f7fa; /* Light blue */
            color: #01579b; /* Dark blue */
            line-height: 1.6;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #b0e0e6;
        }
        header h1{
            color: #03a9f4; /* Blue */
        }

        h2 {
            color: #0288d1; /* A darker shade of blue */
            margin-top: 30px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #0288d1;
        }

        input[type="text"], textarea, input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #b0e0e6;
            border-radius: 5px;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        input[type="text"]:focus, textarea:focus, input[type="number"]:focus{
             outline: none;
             border-color: #03a9f4;
             box-shadow: 0 0 5px rgba(3, 169, 244, 0.3);
        }

        textarea {
            resize: vertical;
        }

        button {
            background-color: #03a9f4; /* Blue */
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: inline-block;
            margin-top: 10px;
            font-family: Arial, sans-serif;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #0288d1; /* Darker blue on hover */
        }
        button:focus{
            outline: none;
            box-shadow: 0 0 5px rgba(3, 169, 244, 0.3);
        }

        .output {
            margin-top: 20px;
            padding: 15px;
            background-color: #e0f2f1; /* Very light blue */
            border: 1px solid #b0e0e6;
            border-radius: 5px;
            white-space: pre-wrap;
            color: #01579b;
        }

        .snarky-comment {
            font-style: italic;
            color: #4fc3f7; /* A muted blue */
            margin-top: 5px;
            display: block;
        }

        footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px 0;
            border-top: 1px solid #b0e0e6;
            color: #0288d1;
            font-size: 0.9em;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
                margin: 10px auto;
            }
            input[type="text"], textarea, input[type="number"]{
                padding: 8px;
            }
            button{
                padding: 8px 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>LinkedOut</h1>
        <p>Connecting professionals who'd rather be disconnected.</p>
    </header>

    <div class="container">
        <h2>Profile Setup (The Bare Minimum)</h2>
        <label for="userName">Your Full Name:</label>
        <input type="text" id="userName" placeholder="Enter your name (or a pseudonym)">
        <span id="userNameSnark" class="snarky-comment"></span>
        <button id="addNameButton">Add My Name</button> </div>

    <div class="container">
        <h2>Resume "Enhancement" Tool</h2>
        <label for="resumeInput">Paste Your Current Resume:</label>
        <textarea id="resumeInput" rows="10" placeholder="Paste your resume here for a brutally honest review."></textarea>
        <button onclick="rewriteResume()">Rewrite My Resume</button>
        <div id="resumeOutput" class="output"></div>
    </div>

    <div class="container">
        <h2>Buzzword Filter</h2>
        <label for="buzzwordInput">Enter Your LinkedIn Post Draft:</label>
        <textarea id="buzzwordInput" rows="4" placeholder="Craft your next viral post filled with jargon."></textarea>
        <button onclick="replaceBuzzwords()">Debuzzify My Post</button>
        <div id="buzzwordOutput" class="output"></div>
    </div>

    <div class="container">
        <h2>LinkedIn Post Generator</h2>
        <label for="postIdea">Enter a Vague Post Topic:</label>
        <input type="text" id="postIdea" placeholder="e.g., 'The future of work', 'My leadership journey'">
        <button onclick="generateLinkedInPost()">Generate LinkedIn Post</button>
        <div id="postOutput" class="output"></div>
    </div>

     <div class="container">
        <h2>Work-Life Balance Calculator</h2>
        <label for="workHours">Average Weekly Work Hours:</label>
        <input type="number" id="workHours" placeholder="Enter the soul-crushing number">
        <button onclick="calculateBalance()">Calculate My Balance</button>
        <div id="balanceOutput" class="output"></div>
    </div>

    <div class="container">
        <h2>Company Culture Decoder</h2>
        <label for="companyName">Enter Company Name:</label>
        <input type="text" id="companyName" placeholder="Uncover the truth behind the slogans">
        <button onclick="generateCulture()">Decode Company Culture</button>
        <div id="cultureOutput" class="output"></div>
    </div>

    <footer>
        <p>&copy; 2024 LinkedOut. All rights reserved. (But not really.)</p>
        <p>Disclaimer: This site is intended for satirical purposes only.  Do not use on your actual job search.</p>
    </footer>

    <script>
       const snarkyResponses = [
            "Oh, that's a new one.",
            "Interesting... go on.",
            "Are you sure about that?",
            "Hmm, needs more buzzwords.",
            "I'm processing...",
            "Is that your final answer?",
            "Noted.",
            "Groundbreaking stuff.",
            "My AI is...whelmed.",
            "Thanks for sharing."
        ];

        const buzzwordReplacements = {
            "synergy": "meeting",
            "paradigm shift": "update",
            "innovative": "newish",
            "disruptive": "annoying",
            "leverage": "use",
            "optimize": "tweak",
            "proactive": "bossy",
            "value-added": "extra",
            "holistic": "vague",
            "growth mindset": "ambition",
            "team player": "agreeable",
            "reach out": "contact",
            "onboarding": "training",
            "offshoring": "outsourcing",
            "rightsizing": "layoff",
            "downsizing": "layoff",
            "core competency": "skill",
            "best practice": "standard",
            "mission critical": "important",
            "empower": "allow"
        };

        const cultureClichés = [
            "We're a family.",
            "Work hard, play hard.",
            "Open communication is key.",
            "We embrace change.",
            "We value collaboration.",
            "We're passionate about innovation.",
            "We invest in our employees.",
            "Flat organizational structure.",
            "Casual dress code.",
            "Employee-centric culture."
        ];

        function getRandom(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        document.getElementById('userName').addEventListener('input', function() {
            //  Removed the initial snarky comment.
        });

        document.getElementById('addNameButton').addEventListener('click', function() {
            const name = document.getElementById('userName').value.trim();
            const snarkyComment = name ? `Welcome, ${name}. We've been expecting you (to need a job).` : "Please enter your name first.";
            document.getElementById('userNameSnark').textContent = snarkyComment;
            if (name) {
                alert(`Your name, "${name}", has been added.  Prepare for enhanced job opportunities... or something.`);
            } else {
                alert("Please enter your name first.");
            }
        });



        function rewriteResume() {
            const resumeText = document.getElementById('resumeInput').value.trim();
            const lines = resumeText.split('\n');
            let rewrittenResume = "";

            if(!resumeText){
                document.getElementById('resumeOutput').textContent = "Please paste your resume to get started.";
                return;
            }
            const generateResumeRewrite = (resume) => {
                return resume
                    .replace(/led a team/gi, "Was technically present while a team did the work")
                    .replace(/collaborated with/gi, "Slightly participated in meetings about")
                    .replace(/launched/gi, "Watched from a distance as things happened")
                    .replace(/achieved/gi, "Pretended to care about achieving")
                    .replace(/improved/gi, "Made slightly less worse")
                    .replace(/developed/gi, "Google searched for")
                    .replace(/responsible for/gi, "Blamed for")
                    .replace(/oversaw/gi, "Occasionally glanced at")
                    .replace(/streamlined/gi, "Made more confusing")
                    .replace(/analyzed/gi, "Guesstimated");
            };

            lines.forEach(line => {
                const trimmedLine = line.trim();
                if (trimmedLine) {
                    rewrittenResume += `AI: ${generateResumeRewrite(trimmedLine)}\n`;
                }
            });
            document.getElementById('resumeOutput').textContent = rewrittenResume || "AI: Nothing to rewrite.  (Consider a new career?)";
        }

        function replaceBuzzwords() {
            const text = document.getElementById('buzzwordInput').value.trim();
            let debuzzifiedText = text;
             if(!text){
                 document.getElementById('buzzwordOutput').textContent = "Please enter some text to debuzzify.";
                 return;
             }

            for (const buzzword in buzzwordReplacements) {
                const regex = new RegExp(`\\b${buzzword}\\b`, 'gi');
                debuzzifiedText = debuzzifiedText.replace(regex, buzzwordReplacements[buzzword]);
            }
            document.getElementById('buzzwordOutput').textContent = debuzzifiedText;
        }

        function generateLinkedInPost() {
            const idea = document.getElementById('postIdea').value.trim();
            let post;
            if(!idea){
                 post = "I'm excited to announce that I'm taking my career to the next level. #Blessed #Grateful #Leadership";
            }
            else{
                post = `I'm thrilled to share my thoughts on ${idea}.  I'm passionate about connecting with like-minded professionals to drive innovation and create synergy. #${idea.replace(/\s+/g, '')} #Networking #ThoughtLeadership #Inspiration`;
            }

            document.getElementById('postOutput').textContent = `${post} (This post was generated with 99% accuracy.)`;
        }

        function calculateBalance() {
            const hours = parseInt(document.getElementById('workHours').value);
             if (isNaN(hours) || hours <= 0) {
                document.getElementById('balanceOutput').textContent = "Please enter a valid number of work hours.";
                return;
            }
            let balanceMessage = "";
            if (hours < 40) {
                balanceMessage = "Enjoy your copious free time.  You're doing it wrong.";
            } else if (hours >= 40 && hours <= 60) {
                balanceMessage = "You're officially unbalanced.  Welcome to the club.";
            } else {
                balanceMessage = "Your life is now your job.  Seek help (or a new job).";
            }
            document.getElementById('balanceOutput').textContent = balanceMessage;
        }

        function generateCulture() {
            const company = document.getElementById('companyName').value.trim() || "GenericCo";
            const cliche1 = getRandom(cultureClichés);
            const cliche2 = getRandom(cultureClichés);
            const cultureSummary = `Company Culture at ${company}:  Expect to hear phrases like "${cliche1}" and "${cliche2}".  Benefits may include free coffee and mandatory fun.`;
            document.getElementById('cultureOutput').textContent = cultureSummary;
        }
    </script>
</body>
</html>
