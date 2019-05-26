class GradeSchool {
  roster: Map<string, ReadonlyArray<string>>

  constructor() {
    this.roster = new Map()
  }

  addStudent(name: string, grade: number) {
    const gradeAsString: string = grade.toString()
    const oldList: ReadonlyArray<string> = this.roster.get(gradeAsString) || []
    const newList: ReadonlyArray<string> = [name, ...oldList].sort()

    this.roster.set(gradeAsString, newList)
  }

  studentRoster() {
    return this.roster
  }

  studentsInGrade(grade: number): ReadonlyArray<string> {
    const students = this.roster.get(grade.toString()) || []
    return students
  }
}

export default GradeSchool
