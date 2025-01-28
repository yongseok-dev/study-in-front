// src/store.js
import { createStore } from "vuex";

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";

const store = createStore({
  state() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
      winner: null,
      checker: 0, // 무승부 체크를 위한 변수
      noWinner: null,
    };
  },
  mutations: {
    [CLICK_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === "") {
        state.tableData[row][cell] = state.turn;
        state.checker++;
      }
    },
    [SET_WINNER](state, payload) {
      state.noWinner = null;
      state.winner = payload;
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === "X" ? "O" : "X";
    },
    [RESET_GAME](state) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          state.tableData[i][j] = "";
        }
      }
      state.turn = "O";
      state.checker = 0;
    },
    [NO_WINNER](state) {
      state.winner = null;
      state.noWinner = "무승부입니다.";
    },
  },
  actions: {
    clickCell({ commit, state }, { row, cell }) {
      if (!state.tableData[row][cell]) {
        commit(CLICK_CELL, { row, cell });
        // 승리 조건 체크
        const winner = calculateWinner(state.tableData);
        if (winner) {
          commit(SET_WINNER, winner);
          commit(RESET_GAME);
        } else if (state.checker === 9) {
          commit(NO_WINNER);
          commit(RESET_GAME);
        } else {
          commit(CHANGE_TURN);
        }
      }
    },
    resetGame({ commit }) {
      commit(RESET_GAME);
    },
  },
  getters: {
    getTableData(state) {
      return state.tableData;
    },
    getWinner(state) {
      return state.winner;
    },
    getNoWinner(state) {
      return state.noWinner;
    },
    getTurn(state) {
      return state.turn;
    },
    getChecker(state) {
      return state.checker;
    },
  },
});

function calculateWinner(tableData) {
  const lines = [
    // 가로
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // 세로
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // 대각선
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let line of lines) {
    const [[a, b], [c, d], [e, f]] = line;
    if (
      tableData[a][b] &&
      tableData[a][b] === tableData[c][d] &&
      tableData[a][b] === tableData[e][f]
    ) {
      return tableData[a][b];
    }
  }

  // 무승부
  return null;
}

export default store;
