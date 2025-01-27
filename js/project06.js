const elements = [
    { symbol: "H", name: "Hydrogen", number: 1, group: "Nonmetal", position: [1, 1] },
    { symbol: "He", name: "Helium", number: 2, group: "Noble Gas", position: [1, 18] },
    { symbol: "Li", name: "Lithium", number: 3, group: "Alkali Metal", position: [2, 1] },
    { symbol: "Be", name: "Beryllium", number: 4, group: "Alkaline Earth Metal", position: [2, 2] },
    { symbol: "B", name: "Boron", number: 5, group: "Metalloid", position: [2, 13] },
    { symbol: "C", name: "Carbon", number: 6, group: "Nonmetal", position: [2, 14] },
    { symbol: "N", name: "Nitrogen", number: 7, group: "Nonmetal", position: [2, 15] },
    { symbol: "O", name: "Oxygen", number: 8, group: "Nonmetal", position: [2, 16] },
    { symbol: "F", name: "Fluorine", number: 9, group: "Halogen", position: [2, 17] },
    { symbol: "Ne", name: "Neon", number: 10, group: "Noble Gas", position: [2, 18] },
    { symbol: "Na", name: "Sodium", number: 11, group: "Alkali Metal", position: [3, 1] },
    { symbol: "Mg", name: "Magnesium", number: 12, group: "Alkaline Earth Metal", position: [3, 2] },
    { symbol: "Al", name: "Aluminum", number: 13, group: "Post-Transition Metal", position: [3, 13] },
    { symbol: "Si", name: "Silicon", number: 14, group: "Metalloid", position: [3, 14] },
    { symbol: "P", name: "Phosphorus", number: 15, group: "Nonmetal", position: [3, 15] },
    { symbol: "S", name: "Sulfur", number: 16, group: "Nonmetal", position: [3, 16] },
    { symbol: "Cl", name: "Chlorine", number: 17, group: "Halogen", position: [3, 17] },
    { symbol: "Ar", name: "Argon", number: 18, group: "Noble Gas", position: [3, 18] },
    { symbol: "K", name: "Potassium", number: 19, group: "Alkali Metal", position: [4, 1] },
    { symbol: "Ca", name: "Calcium", number: 20, group: "Alkaline Earth Metal", position: [4, 2] },
    { symbol: "Sc", name: "Scandium", number: 21, group: "Transition Metal", position: [4, 3] },
    { symbol: "Ti", name: "Titanium", number: 22, group: "Transition Metal", position: [4, 4] },
    { symbol: "V", name: "Vanadium", number: 23, group: "Transition Metal", position: [4, 5] },
    { symbol: "Cr", name: "Chromium", number: 24, group: "Transition Metal", position: [4, 6] },
    { symbol: "Mn", name: "Manganese", number: 25, group: "Transition Metal", position: [4, 7] },
    { symbol: "Fe", name: "Iron", number: 26, group: "Transition Metal", position: [4, 8] },
    { symbol: "Co", name: "Cobalt", number: 27, group: "Transition Metal", position: [4, 9] },
    { symbol: "Ni", name: "Nickel", number: 28, group: "Transition Metal", position: [4, 10] },
    { symbol: "Cu", name: "Copper", number: 29, group: "Transition Metal", position: [4, 11] },
    { symbol: "Zn", name: "Zinc", number: 30, group: "Transition Metal", position: [4, 12] },
    { symbol: "Ga", name: "Gallium", number: 31, group: "Post-Transition Metal", position: [4, 13] },
    { symbol: "Ge", name: "Germanium", number: 32, group: "Metalloid", position: [4, 14] },
    { symbol: "As", name: "Arsenic", number: 33, group: "Metalloid", position: [4, 15] },
    { symbol: "Se", name: "Selenium", number: 34, group: "Nonmetal", position: [4, 16] },
    { symbol: "Br", name: "Bromine", number: 35, group: "Halogen", position: [4, 17] },
    { symbol: "Kr", name: "Krypton", number: 36, group: "Noble Gas", position: [4, 18] },
    { symbol: "Rb", name: "Rubidium", number: 37, group: "Alkali Metal", position: [5, 1] },
    { symbol: "Sr", name: "Strontium", number: 38, group: "Alkaline Earth Metal", position: [5, 2] },
    { symbol: "Y", name: "Yttrium", number: 39, group: "Transition Metal", position: [5, 3] },
    { symbol: "Zr", name: "Zirconium", number: 40, group: "Transition Metal", position: [5, 4] },
    { symbol: "Nb", name: "Niobium", number: 41, group: "Transition Metal", position: [5, 5] },
    { symbol: "Mo", name: "Molybdenum", number: 42, group: "Transition Metal", position: [5, 6] },
    { symbol: "Tc", name: "Technetium", number: 43, group: "Transition Metal", position: [5, 7] },
    { symbol: "Ru", name: "Ruthenium", number: 44, group: "Transition Metal", position: [5, 8] },
    { symbol: "Rh", name: "Rhodium", number: 45, group: "Transition Metal", position: [5, 9] },
    { symbol: "Pd", name: "Palladium", number: 46, group: "Transition Metal", position: [5, 10] },
    { symbol: "Ag", name: "Silver", number: 47, group: "Transition Metal", position: [5, 11] },
    { symbol: "Cd", name: "Cadmium", number: 48, group: "Transition Metal", position: [5, 12] },
    { symbol: "In", name: "Indium", number: 49, group: "Post-Transition Metal", position: [5, 13] },
    { symbol: "Sn", name: "Tin", number: 50, group: "Post-Transition Metal", position: [5, 14] },
    { symbol: "Sb", name: "Antimony", number: 51, group: "Metalloid", position: [5, 15] },
    { symbol: "Te", name: "Tellurium", number: 52, group: "Metalloid", position: [5, 16] },
    { symbol: "I", name: "Iodine", number: 53, group: "Halogen", position: [5, 17] },
    { symbol: "Xe", name: "Xenon", number: 54, group: "Noble Gas", position: [5, 18] },
    { symbol: "Cs", name: "Cesium", number: 55, group: "Alkali Metal", position: [6, 1] },
    { symbol: "Ba", name: "Barium", number: 56, group: "Alkaline Earth Metal", position: [6, 2] },
    { symbol: "La", name: "Lanthanum", number: 57, group: "Lanthanide", position: [9, 3] },
    { symbol: "Ce", name: "Cerium", number: 58, group: "Lanthanide", position: [9, 4] },
    { symbol: "Pr", name: "Praseodymium", number: 59, group: "Lanthanide", position: [9, 5] },
    { symbol: "Nd", name: "Neodymium", number: 60, group: "Lanthanide", position: [9, 6] },
    { symbol: "Pm", name: "Promethium", number: 61, group: "Lanthanide", position: [9, 7] },
    { symbol: "Sm", name: "Samarium", number: 62, group: "Lanthanide", position: [9, 8] },
    { symbol: "Eu", name: "Europium", number: 63, group: "Lanthanide", position: [9, 9] },
    { symbol: "Gd", name: "Gadolinium", number: 64, group: "Lanthanide", position: [9, 10] },
    { symbol: "Tb", name: "Terbium", number: 65, group: "Lanthanide", position: [9, 11] },
    { symbol: "Dy", name: "Dysprosium", number: 66, group: "Lanthanide", position: [9, 12] },
    { symbol: "Ho", name: "Holmium", number: 67, group: "Lanthanide", position: [9, 13] },
    { symbol: "Er", name: "Erbium", number: 68, group: "Lanthanide", position: [9, 14] },
    { symbol: "Tm", name: "Thulium", number: 69, group: "Lanthanide", position: [9, 15] },
    { symbol: "Yb", name: "Ytterbium", number: 70, group: "Lanthanide", position: [9, 16] },
    { symbol: "Lu", name: "Lutetium", number: 71, group: "Lanthanide", position: [9, 17] },
    { symbol: "Hf", name: "Hafnium", number: 72, group: "Transition Metal", position: [6, 4] },
    { symbol: "Ta", name: "Tantalum", number: 73, group: "Transition Metal", position: [6, 5] },
    { symbol: "W", name: "Tungsten", number: 74, group: "Transition Metal", position: [6, 6] },
    { symbol: "Re", name: "Rhenium", number: 75, group: "Transition Metal", position: [6, 7] },
    { symbol: "Os", name: "Osmium", number: 76, group: "Transition Metal", position: [6, 8] },
    { symbol: "Ir", name: "Iridium", number: 77, group: "Transition Metal", position: [6, 9] },
    { symbol: "Pt", name: "Platinum", number: 78, group: "Transition Metal", position: [6, 10] },
    { symbol: "Au", name: "Gold", number: 79, group: "Transition Metal", position: [6, 11] },
    { symbol: "Hg", name: "Mercury", number: 80, group: "Transition Metal", position: [6, 12] },
    { symbol: "Tl", name: "Thallium", number: 81, group: "Post-Transition Metal", position: [6, 13] },
    { symbol: "Pb", name: "Lead", number: 82, group: "Post-Transition Metal", position: [6, 14] },
    { symbol: "Bi", name: "Bismuth", number: 83, group: "Post-Transition Metal", position: [6, 15] },
    { symbol: "Po", name: "Polonium", number: 84, group: "Post-Transition Metal", position: [6, 16] },
    { symbol: "At", name: "Astatine", number: 85, group: "Metalloid", position: [6, 17] },
    { symbol: "Rn", name: "Radon", number: 86, group: "Noble Gas", position: [6, 18] },
    { symbol: "Fr", name: "Francium", number: 87, group: "Alkali Metal", position: [7, 1] },
    { symbol: "Ra", name: "Radium", number: 88, group: "Alkaline Earth Metal", position: [7, 2] },
    { symbol: "Ac", name: "Actinium", number: 89, group: "Actinide", position: [10, 3] },
    { symbol: "Th", name: "Thorium", number: 90, group: "Actinide", position: [10, 4] },
    { symbol: "Pa", name: "Protactinium", number: 91, group: "Actinide", position: [10, 5] },
    { symbol: "U", name: "Uranium", number: 92, group: "Actinide", position: [10, 6] },
    { symbol: "Np", name: "Neptunium", number: 93, group: "Actinide", position: [10, 7] },
    { symbol: "Pu", name: "Plutonium", number: 94, group: "Actinide", position: [10, 8] },
    { symbol: "Am", name: "Americium", number: 95, group: "Actinide", position: [10, 9] },
    { symbol: "Cm", name: "Curium", number: 96, group: "Actinide", position: [10, 10] },
    { symbol: "Bk", name: "Berkelium", number: 97, group: "Actinide", position: [10, 11] },
    { symbol: "Cf", name: "Californium", number: 98, group: "Actinide", position: [10, 12] },
    { symbol: "Es", name: "Einsteinium", number: 99, group: "Actinide", position: [10, 13] },
    { symbol: "Fm", name: "Fermium", number: 100, group: "Actinide", position: [10, 14] },
    { symbol: "Md", name: "Mendelevium", number: 101, group: "Actinide", position: [10, 15] },
    { symbol: "No", name: "Nobelium", number: 102, group: "Actinide", position: [10, 16] },
    { symbol: "Lr", name: "Lawrencium", number: 103, group: "Actinide", position: [10, 17] },
    { symbol: "Rf", name: "Rutherfordium", number: 104, group: "Transition Metal", position: [7, 4] },
    { symbol: "Db", name: "Dubnium", number: 105, group: "Transition Metal", position: [7, 5] },
    { symbol: "Sg", name: "Seaborgium", number: 106, group: "Transition Metal", position: [7, 6] },
    { symbol: "Bh", name: "Bohrium", number: 107, group: "Transition Metal", position: [7, 7] },
    { symbol: "Hs", name: "Hassium", number: 108, group: "Transition Metal", position: [7, 8] },
    { symbol: "Mt", name: "Meitnerium", number: 109, group: "Unknown", position: [7, 9] },
    { symbol: "Ds", name: "Darmstadtium", number: 110, group: "Unknown", position: [7, 10] },
    { symbol: "Rg", name: "Roentgenium", number: 111, group: "Unknown", position: [7, 11] },
    { symbol: "Cn", name: "Copernicium", number: 112, group: "Transition Metal", position: [7, 12] },
    { symbol: "Nh", name: "Nihonium", number: 113, group: "Unknown", position: [7, 13] },
    { symbol: "Fl", name: "Flerovium", number: 114, group: "Post-Transition Metal", position: [7, 14] },
    { symbol: "Mc", name: "Moscovium", number: 115, group: "Unknown", position: [7, 15] },
    { symbol: "Lv", name: "Livermorium", number: 116, group: "Post-Transition Metal", position: [7, 16] },
    { symbol: "Ts", name: "Tennessine", number: 117, group: "Unknown", position: [7, 17] },
    { symbol: "Og", name: "Oganesson", number: 118, group: "Noble Gas", position: [7, 18] }
    
];

const tableContainer = document.getElementById("periodic-table");
const searchInput = document.getElementById("search");
const infoContainer = document.getElementById("element-info");

elements.forEach(element => {
    const el = document.createElement("div");
    el.classList.add("element");
    el.innerText = element.symbol;
    el.style.gridColumnStart = element.position[1];
    el.style.gridRowStart = element.position[0];
    el.addEventListener("click", () => showElementInfo(element));
    tableContainer.appendChild(el);
});

function showElementInfo(element) {
    infoContainer.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p>Atomic Number: ${element.number}</p>
        <p>Group: ${element.group}</p>
    `;
}

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".element").forEach((el, index) => {
        const element = elements[index];
        if (
            element.name.toLowerCase().includes(query) ||
            element.symbol.toLowerCase().includes(query) ||
            element.number.toString().includes(query)
        ) {
            el.style.backgroundColor = "#ffa";
        } else {
            el.style.backgroundColor = "";
        }
    });
});
