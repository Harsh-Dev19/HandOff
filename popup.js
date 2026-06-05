const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {

  const project = document.getElementById("project").value;
  const goal = document.getElementById("goal").value;
  const completed = document.getElementById("completed").value;
  const issue = document.getElementById("issue").value;
  const next = document.getElementById("next").value;

  const prompt = `
You are taking over an existing project.

Project Name:
${project}

Current Goal:
${goal}

Completed Work:
${completed}

Current Issue:
${issue}

Next Step:
${next}

Please continue helping with this project from the current state.
`;

  document.getElementById("output").value = prompt;

});

copyBtn.addEventListener("click", () => {

    const output =
        document.getElementById("output");

    navigator.clipboard.writeText(
        output.value
    );

    copyBtn.textContent = "✓ Copied";

    setTimeout(() => {
        copyBtn.textContent = "Copy Prompt";
    }, 2000);

});