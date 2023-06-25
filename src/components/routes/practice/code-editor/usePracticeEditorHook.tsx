import React from 'react'
import { apiCall } from 'src/core/api-requests/axios'

const usePracticeEditorHook = () => {

  const updateSubmission = async (pId: any, qId: any) => {
    const payload: any = {
      process_id: pId,
      question_id: qId
    }

    await apiCall({ key: "update_code_submission", data: payload })
  }

  return { updateSubmission }
}

export default usePracticeEditorHook
