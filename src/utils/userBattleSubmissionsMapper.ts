const userBattleSubmissionsMapper = (allBattleQuestions:{}[],userBattleSubmissions:{}[]) => {
  let submissionsData = {}
  allBattleQuestions.forEach((question:any)=>{
    const questionId = question?.id
    let allSubmissionsOfQuestion = userBattleSubmissions.filter((submission:any)=> submission?.questionId === questionId )
    allSubmissionsOfQuestion.sort((a:any,b:any)=> Number(b.score) - Number(a.score))
    submissionsData = {
      ...submissionsData,
      [questionId]:allSubmissionsOfQuestion
    }
  })

  return submissionsData
}

export default userBattleSubmissionsMapper