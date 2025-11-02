export class GradeSchool {
  private _roster: rosterType = {}
  roster() {
    // Returning the private roster object directly would allow external mutation, so we create a sorted copy
    const sortedRoster: rosterType = {}
    for (const grade in this._roster) {
      sortedRoster[Number(grade)] = [...this._roster[Number(grade)]].sort()
    }
    return sortedRoster
  }

  add(student: string, grade: number) {
    // First check if student is alreadt in a grade, and remove them if so
    for (const g in this._roster) {
      const index = this._roster[Number(g)].indexOf(student)
      if (index !== -1) {
        this._roster[Number(g)].splice(index, 1)
        break
      }
    }
    if (!this._roster[grade]) {
      this._roster[grade] = []
    }
    this._roster[grade].push(student)
  }

  grade(grade: number) {
    // Return a sorted copy of the students in the specified grade
    return this._roster[grade]?.slice().sort() || []
  }
}

type rosterType = {
  [grade: number]: string[]
}
