// src/store.js
import { createStore } from "vuex";

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";
export const INCREMENT_TIMER = "INCREMENT_TIMER";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

let interval = null;

const store = createStore({
  state() {
    return {
      row: 0,
      cell: 0,
      mine: 0,
      mineField: [],
      secondsCounter: 0,
      victory: null,
      halted: true,
      openedCount: 0,
    };
  },
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      // console.log(state.mineField);
      state.secondsCounter = 0;
      state.openedCount = 0;
      state.victory = null;

      clearInterval(interval);
      state.row = row;
      state.cell = cell;
      state.mine = mine;
      state.halted = false;

      state.mineField.length = 0;
      let mineCount = mine;

      for (let i = 0; i < row; i++) {
        const tempRow = [];
        for (let j = 0; j < cell; j++) {
          tempRow.push(CODE.NORMAL);
        }
        state.mineField.push(tempRow);
      }

      while (mineCount > 0) {
        const rowIndex = Math.ceil(Math.random() * row) - 1;
        const colIndex = Math.ceil(Math.random() * cell) - 1;
        if (state.mineField[rowIndex][colIndex] == -1) {
          state.mineField[rowIndex][colIndex] = CODE.MINE;
          mineCount--;
        }
      }
    },
    [OPEN_CELL](state, { row, cell }) {
      let openedCount = 0;
      const checked = [];
      function checkAround(row, cell) {
        // 주변 8칸 지뢰인지 검색
        const checkRowOrCellIsUndefined =
          row < 0 ||
          row >= state.mineField.length ||
          cell < 0 ||
          cell >= state.mineField[0].length;
        if (checkRowOrCellIsUndefined) {
          return;
        }
        if (
          [
            CODE.OPENED,
            CODE.FLAG,
            CODE.FLAG_MINE,
            CODE.QUESTION_MINE,
            CODE.QUESTION,
          ].includes(state.mineField[row][cell])
        ) {
          return;
        }
        if (checked.includes(row + "/" + cell)) {
          return;
        } else {
          checked.push(row + "/" + cell);
        }
        let around = [];
        if (state.mineField[row - 1]) {
          around = around.concat([
            state.mineField[row - 1][cell - 1],
            state.mineField[row - 1][cell],
            state.mineField[row - 1][cell + 1],
          ]);
        }
        around = around.concat([
          state.mineField[row][cell - 1],
          state.mineField[row][cell + 1],
        ]);
        if (state.mineField[row + 1]) {
          around = around.concat([
            state.mineField[row + 1][cell - 1],
            state.mineField[row + 1][cell],
            state.mineField[row + 1][cell + 1],
          ]);
        }
        const counted = around.filter(function (v) {
          return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
        });
        if (counted.length === 0 && row > -1) {
          // 주변칸에 지뢰가 하나도 없으면
          const near = [];
          if (row - 1 > -1) {
            near.push([row - 1, cell - 1]);
            near.push([row - 1, cell]);
            near.push([row - 1, cell + 1]);
          }
          near.push([row, cell - 1]);
          near.push([row, cell + 1]);
          if (row + 1 < state.mineField.length) {
            near.push([row + 1, cell - 1]);
            near.push([row + 1, cell]);
            near.push([row + 1, cell + 1]);
          }
          near.forEach((n) => {
            if (state.mineField[n[0]][n[1]] !== CODE.OPENED) {
              checkAround(n[0], n[1]);
            }
          });
        }
        if (state.mineField[row][cell] === CODE.NORMAL) {
          openedCount += 1;
        }
        state.mineField[row][cell] = counted.length;
      }
      checkAround(row, cell);
      let halted = false;
      let result = "";
      if (
        state.row * state.cell - state.mine ===
        state.openedCount + openedCount
      ) {
        clearInterval(interval);
        halted = true;
        result = `${state.secondsCounter}초만에 승리하셨습니다.`;
      }
      state.openedCount += openedCount;
      state.halted = halted;
      state.victory = result;
    },
    [CLICK_MINE](state, { row, cell }) {
      clearInterval(interval);
      state.halted = true;
      state.mineField[row][cell] = CODE.CLICKED_MINE;
    },
    [FLAG_CELL](state, { row, cell }) {
      if (state.mineField[row][cell] === CODE.MINE) {
        state.mineField[row][cell] = CODE.FLAG_MINE;
      } else {
        state.mineField[row][cell] = CODE.FLAG;
      }
    },
    [QUESTION_CELL](state, { row, cell }) {
      if (state.mineField[row][cell] === CODE.FLAG_MINE) {
        state.mineField[row][cell] = CODE.QUESTION_MINE;
      } else {
        state.mineField[row][cell] = CODE.QUESTION;
      }
    },
    [NORMALIZE_CELL](state, { row, cell }) {
      if (state.mineField[row][cell] === CODE.QUESTION_MINE) {
        state.mineField[row][cell] = CODE.MINE;
      } else {
        state.mineField[row][cell] = CODE.NORMAL;
      }
    },
    [INCREMENT_TIMER](state) {
      interval = setInterval(() => {
        state.secondsCounter++;
      }, 1000);
    },
  },
  actions: {},
  getters: {},
});

export default store;
