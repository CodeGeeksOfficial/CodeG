const userBattleSubmissionsMapper = (allBattleQuestions:{}[],userBattleSubmissions:{}[]) => {
  let submissonsData = {}
  allBattleQuestions.forEach((question:any)=>{
    const questionId = question?.id
    let allSubmissionsOfQuestion = userBattleSubmissions.filter((submission:any)=> submission?.questionId === questionId )
    allSubmissionsOfQuestion.sort((a:any,b:any)=> Number(b.score) - Number(a.score))
    submissonsData = {
      ...submissonsData,
      [questionId]:allSubmissionsOfQuestion
    }
  })

  return submissonsData
}

export default userBattleSubmissionsMapper