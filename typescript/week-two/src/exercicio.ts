// *
//  * EXERCÍCIOS
//  * 
//  * Antes de começar, certifique-se de instalar as 
//  * dependências do projeto utilizando "npm install"
//  * 
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  * 
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.
    interface Person {
        nome: string
        profissao: string
        idade: number
        interesses: Array<string>
    }
//  * 
//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
//  * 
    const euMesmo: Person = {
        nome: "Eduardo",
        profissao: "Desenvolvedor",
        idade: 35,
        interesses: ["games", "futebol", "computadores"]
    }

//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
//  * e retorne somente a lista de assuntos do objeto.
//  * 
        function listaInteresses (pessoa: Person) {
            return pessoa.interesses;
        }

//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
//  * 
        function listaInteresses2 (pessoa: Person): string[] {
            return pessoa.interesses;
        }

//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
//  * 
        enum Materias {
            Angular = "Angular",
            Typescript = "Typescript",
            Git = "Git"
        }

//  * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
//  * 
        interface Professor {
            nome: string;
            materias: Materias[];
        }

//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git
//  * 
        const alan: Professor = {
            nome: "Alan",
            materias: [
                Materias.Angular,
                Materias.Typescript,
                Materias.Git
            ]
        }

        const nathan: Professor = {
            nome: "Nathan",
            materias: [
                Materias.Angular,
                Materias.Git
            ]
        }

//  * 8 - Declare e popule um array com os objetos do exercício 7.
//  * 
        const professores: Professor[] = [
            alan,
            nathan
        ]

//  * 9 - Faça uma função que receba um argumento de array de Professor 
//  * e retorne um novo array de strings contendo somente os nomes dos professores.
//  * 
        function nomesProfessores(professores: Professor[]):string[] {
            return professores.map( p => p.nome)
        }

//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
//  * 
        function arrayMaterias(professores: Professor[]):Materias[] {
            const listaMateriasProfessores = professores.map(prof => prof.materias).reduce<Materias[]>((acc, materias) => {
                return acc.concat(materias)
            }, [])

            const listaMateriasProfessoresSet = new Set(listaMateriasProfessores)
            return Array.from(listaMateriasProfessoresSet)

        }
        console.log(arrayMaterias(professores))

//  * 11 - Faça uma função que receba um argumento de array de Professores e 
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.
//  * 
        function listarProfessoresTypescript(professores: Professor[]): Professor | undefined {
            return professores.find(prof => prof.materias.includes(Materias.Typescript))
        }
 