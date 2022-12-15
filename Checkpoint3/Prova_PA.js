class Aluno {
  constructor(nome, qtfaltas, notas) {
    this.nome = nome;
    this.qtfaltas = qtfaltas;
    this.notas = notas;
  }

  calculaMedia() {
    let total = 0;
    this.notas.forEach((nota) => {
      total += nota;
    });
    return total / this.notas.length;
  }

  faltas() {
    return this.qtfaltas + 1;
  }
}

let curso = {
  nome: "Polichinelo 3",
  notaAprovacao: 8,
  maxFaltas: 15,
  listaEstudantes: [],

  adicionaAluno(nome, qtfaltas, notas) {
    this.listaEstudantes.push(nome, qtfaltas, notas);
  },

  mediaFinal(aluno) {
    let media = aluno.calculaMedia();
    if (media >= this.notaAprovacao && aluno.qtfaltas < this.maxFaltas) {
      return true;
    } else if (aluno.qtfaltas == this.maxFaltas && media >= this.notaAprovacao * 1.1 ) {
      return true;
    }
    return false;
  },

  alunosAprovados() {
    return this.listaEstudantes.map((aluno) => this.mediaFinal(aluno));
  },
};

curso.adicionaAluno("Tito", 3, [1, 2, 3, 4]);
curso.adicionaAluno("lilo", 7, [9, 8, 7, 6]);

console.log(curso.listaEstudantes);
console.log(curso.alunosAprovados());

//const aluno1 = new Aluno("Tito", 5, [1,2,3])
//console.log(aluno1);
//console.log(aluno1.faltas());
