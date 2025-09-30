
    const questions = [
      {
        text: "¿Cuál es el número que, al multiplicarse por otro, no cambia su valor?",
        options: ["10", "2", "1", "0"],
        correct: "1"
      },
      {
        text: "¿Cuánto es 7 × 1?",
        options: ["7", "1", "0", "8"],
        correct: "7"
      },
      {
        text: "¿Qué propiedad se usa cuando decimos que x × 1 = x?",
        options: ["Propiedad conmutativa", "Propiedad distributiva", "Propiedad asociativa", "Elemento neutro"],
        correct: "Elemento neutro"
      },
      {
        text: "¿Por qué el número 1 se llama “elemento neutro” en la multiplicación?",
        options: ["Porque no afecta el resultado de la suma", "Porque siempre da cero", "Porque no cambia el valor del número multiplicado", "Porque es el número más pequeño"],
        correct: "Porque no cambia el valor del número multiplicado"
      },
      {
        text: "Si x × 1 = x, ¿qué valor tiene x?",
        options: ["Solo 1", "Cualquier número", "Solo 0", "Solo números positivos"],
        correct: "Cualquier número"
      },
      {
        text: "¿Cuál es el elemento neutro de la multiplicación en los números enteros y por qué?",
        options: ["10, porque es base decimal", "1, porque no altera el valor del número multiplicado", "0, porque no cambia el resultado", "2, porque es el primer número par"],
        correct: "1, porque no altera el valor del número multiplicado"
      }
    ];

    const form = document.getElementById("quizForm");

    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `<p><strong>${i + 1}. ${q.text}</strong></p>` +
        q.options.map(opt => `
          <label>
            <input type="radio" name="q${i}" value="${opt}"> ${opt}
          </label><br>
        `).join("") +
        `<div class="feedback" id="feedback${i}"></div>`;
      form.appendChild(div);
    });

    function checkAnswers() {
      questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const feedback = document.getElementById(`feedback${i}`);
        const questionDiv = feedback.parentElement;

        if (!selected) {
          feedback.textContent = "❌ No respondiste esta pregunta.";
          questionDiv.classList.add("incorrect");
        } else if (selected.value === q.correct) {
          feedback.textContent = "✅ ¡Correcto!";
          questionDiv.classList.add("correct");
        } else {
          feedback.textContent = `❌ Incorrecto. La respuesta correcta es: ${q.correct}`;
          questionDiv.classList.add("incorrect");
        }
      });
    }
 