import { Aluno } from "./Aluno.js";
import { Turma } from "./Turma.js";
import { TurmaPresencial } from "./TurmaPresencial.js";

const aluno = new Aluno("Thiago", "12345", "a2350670")
console.log(`Aluno:\nNome: ${aluno.nome}\nLogin: ${aluno.login}\nRA: ${aluno.RA}\n`)

const turma = new TurmaPresencial(123, 8, 80)
console.log(`Turma:\nCódigo: ${turma.codigo}\nNota: ${turma.nota}\nFrequencia: ${turma.frequencia}\nSituação: ${turma.aprovado() ? "Aprovado": "Reprovado"}`)