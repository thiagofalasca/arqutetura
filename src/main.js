import { Aluno } from "./Aluno.js";
import { TurmaPresencial } from "./TurmaPresencial.js";

const aluno = new Aluno("Thiago", "12345", "a2350670")
const turma = new TurmaPresencial(123, 8, 80)
aluno.add_turma(turma)

console.log(`
Nome: ${aluno.nome}
Login: ${aluno.login}
RA: ${aluno.RA}
Código da turma: ${aluno.turma[0].codigo}
Nota: ${aluno.turma[0].nota}
Frequência: ${aluno.turma[0].frequencia}
Situação: ${aluno.turma[0].aprovado() ? "Aprovado" : "Reprovado"}
`)