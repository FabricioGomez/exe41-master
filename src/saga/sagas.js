import { put, all, actionChannel } from "redux-saga/effects";
import { effects } from "redux-saga";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let fetchSaga = function* () {
  let chan = yield actionChannel("REQUEST");
  let index = 0;
  while (true) {
    let b = yield effects.take(chan);
    index = b.index;
    let data = yield fetch(
      `http://localhost:3004/Data?_start=${index}&_limit=1`
    )
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        return response;
      });
    yield delay(100);
    yield put({ type: "GET_DATA", data });
    if (index < 252) {
      yield put({ type: "REQUEST", index: ++index });
    }
  }
};

function* startPeriodic() {
  yield delay(1000);
  //   console.log("started");
  yield put({ type: "REQUEST", index: 0 });
}

export default function* rootSaga() {
  yield all([startPeriodic(), fetchSaga()]);
}
