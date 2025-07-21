const malla = {
  "Semestre 1": [
    "Fundamentos de Administración",
    "Taller de Competencias para el Aprendizaje",
    "Introducción a la Matemática",
    "Fundamentos de Microeconomía",
    "Cultura y Valores",
    "Inglés Básico I"
  ],
  "Semestre 2": [
    "Contabilidad",
    "Taller de Competencias Comunicativas",
    "Matemática Cálculo I",
    "Fundamentos de Macroeconomía",
    "Persona y Sentido",
    "Inglés Básico II"
  ],
  "Semestre 3": [
    "Métodos Cuantitativos para la Gestión",
    "Fundamentos de Marketing",
    "Microeconomía",
    "Contabilidad Financiera",
    "Taller de Desarrollo Personal I",
    "Inglés Intermedio I"
  ],
  "Semestre 4": [
    "Gestión de Personas",
    "Macroeconomía",
    "Costos para la Toma de Decisiones",
    "Economía, Sustentabilidad y Emprendimiento",
    "Taller de Desarrollo Personal II",
    "Inglés Intermedio II"
  ],
  "Semestre 5": [
    "Comportamiento y Desarrollo Organizacional",
    "Administración Financiera",
    "Investigación de Mercado",
    "Métodos Avanzados en Estadística",
    "Inglés Avanzado I",
    "Electivo I"
  ],
  "Semestre 6": [
    "Administración Estratégica",
    "Finanzas Corporativas",
    "Econometría",
    "Innovación en Modelos de Negocio",
    "Inglés Avanzado II",
    "Electivo II"
  ],
  "Semestre 7": [
    "Estrategia Competitiva",
    "Formulación y Evaluación de Proyectos",
    "Gestión de la Innovación",
    "Comercio Internacional",
    "Electivo III",
    "Electivo IV"
  ],
  "Semestre 8": [
    "Gestión de Operaciones",
    "Simulación de Negocios",
    "Gobernanza y Control Estratégico",
    "Análisis de Datos",
    "Electivo V"
  ],
  "Semestre 9": [
    "Consultoría Aplicada a Organizaciones",
    "Marketing Estratégico",
    "Políticas Públicas, Innovación y Emprendimiento",
    "Seminario de Habilidades para la Gestión",
    "Electivo VI"
  ],
  "Semestre 10": [
    "Ética y Responsabilidad Social",
    "Evaluación del Desarrollo de Competencias I (**)",
    "Evaluación del Desarrollo de Competencias II (**)",
    "Plan de Negocios",
    "Práctica Profesional"
  ]
};

const container = document.getElementById("malla");

for (let semestre in malla) {
  const card = document.createElement("div");
  card.className = "semestre";
  card.innerHTML = `<h2>${semestre}</h2>`;
  
  malla[semestre].forEach(asig => {
    const div = document.createElement("div");
    div.className = "asignatura";
    div.innerText = asig;
    div.onclick = () => alert(`Asignatura: ${asig}`);
    card.appendChild(div);
  });

  container.appendChild(card);
}
