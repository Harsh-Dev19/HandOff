const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

generateBtn.addEventListener("click", () => {

    const project = document.getElementById("project").value;
    const goal = document.getElementById("goal").value;
    const completed = document.getElementById("completed").value;
    const issue = document.getElementById("issue").value;
    const next = document.getElementById("next").value;

    const prompt = `PROJECT OVERVIEW

Name:
${project}

CURRENT OBJECTIVE

${goal}

COMPLETED WORK

${completed}

CURRENT CHALLENGE

${issue}

NEXT ACTION

${next}

INSTRUCTIONS FOR THE AI

Continue from the current project state.

Assume previous decisions remain valid.

Do not restart the project from scratch.

Focus on helping with the next action and current challenge.
`;

    document.getElementById("output").value = prompt;

});

copyBtn.addEventListener("click", () => {

    const output = document.getElementById("output");

    navigator.clipboard.writeText(output.value);

    copyBtn.textContent = "✓ Copied";

    setTimeout(() => {
        copyBtn.textContent = "Copy Prompt";
    }, 2000);

});

clearBtn.addEventListener("click", () => {

    document.getElementById("project").value = "";
    document.getElementById("goal").value = "";
    document.getElementById("completed").value = "";
    document.getElementById("issue").value = "";
    document.getElementById("next").value = "";
    document.getElementById("output").value = "";

});