import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from 'src/core/api-requests/axios';
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice';

const useLobbyPlayerListItem = (userId: any) => {

  const battle = useSelector((state: any) => state.battle)
  let isAdmin = false;

  if (battle && battle.activeUsers && battle.activeUsers.length > 0 && battle.activeUsers[0] === userId) {
    isAdmin = true;
  }

  return { battle, isAdmin }
}

export default useLobbyPlayerListItem
