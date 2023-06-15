export  class ProjectModel{

  /*

name
"fd"
contexte
"gfzd"
but
"fds"
justification
"gfzd"
apportLocal
"45"
devis
"https://firebasestorage.googleapis.com/v0/b/bureau-devellopement-aoc.a…"
planning
"https://firebasestorage.googleapis.com/v0/b/bureau-devellopement-aoc.a…"
Status
"attent"
userId
"648a130fce3edb3c3978069d"
beneficiary
"gfzdgdz"
result
"gfzd"
impact
"fgzd"
country
"fds"
location
"ffs"
start
"2023-06-03T23:00:00.000Z"
end
"2023-06-11T23:00:00.000Z"
_class
"com.example.aocofficeapi.Model.Project"

genere mmoi les attributs celon ce template
   */
  constructor(
    public name: string,
    public contexte: string,
    public but: string,
    public justification: string,
    public apportLocal: string,
    public devis: string,
    public planning: string,
    public location: string,
    public country: string,
    public start: string,
    public end: string,
    public userId: string,
    public beneficiary: string,
    public result: string,
    public impact: string,
    public id: string,
    public Status : string,
    public imageUrl: string
  ) {
  }
}
