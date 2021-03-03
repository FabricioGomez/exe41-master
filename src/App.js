import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { connect } from "react-redux";
import { getData } from "./redux/actions";

function App({ data, getData }) {
  return (
    <div className="App">
      <header className="App-header">
        {data.length < 100 ? (
          <p>no data</p>
        ) : (
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            domain={{
              x: [
                data.data.length > 100 ? data.data.length - 100 : 0,
                data.data.length+1
                
              ],
            }}
          >
            <VictoryAxis
              tickFormat={(t) => (data.data[t] ? data.data[t].Date : "")}
              label="Date"
              axisLabelComponent={<VictoryLabel dy={30} />}
              tickLabelComponent={<VictoryLabel angle={30} />}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => `${x}`}
              label="Open"
              axisLabelComponent={<VictoryLabel angle={0} dx={-25} />}
            />
            <VictoryLine data={data.data} y="Open" />
          </VictoryChart>
        )}
      </header>
      <button
        className="button"
        onClick={() => {
          getData(0);
        }}
      >
        get next
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { data } = state;
  return { data };
};
export default connect(mapStateToProps, { getData })(App);
