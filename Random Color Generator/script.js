const containerE1 = document.querySelector(".container");

for (let index = 0; index < 50; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");

    const colorCodeE1 = document.createElement("span");
    colorCodeE1.classList.add("color-code");
    colorContainerE1.appendChild(colorCodeE1);

    const copyButtonE1 = document.createElement("button");
    copyButtonE1.innerText = "Copy";
    colorContainerE1.appendChild(copyButtonE1);

    containerE1.appendChild(colorContainerE1);
}

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }

    return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors() {
    for (let i = 0; i < colorContainerEls.length; i++) {
        const newColorCode = randomColor();
        const colorContainerEl = colorContainerEls[i]; // Fixed variable name

        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.querySelector(".color-code").innerText = "#" + newColorCode; // Fixed variable name
    }
}

colorContainerEls.forEach((colorContainerEl) => {
    const copyButtonE1 = colorContainerEl.querySelector("button");
    const colorCodeE1 = colorContainerEl.querySelector(".color-code");

    copyButtonE1.addEventListener("click", () => {
        const colorCode = colorCodeE1.innerText;
        copyToClipboard(colorCode);
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to Clipboard");
        })
        .catch((error) => {
            console.log("Failed to Copy to Clipboard");
        });
}

generateColors(); // Corrected function call
