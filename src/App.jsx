import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';


function createData(name, uv, pv) {
 return {name, uv, pv};
}

const data = [
  createData('Jan', 500, 1000),
  createData('Feb', 2115, 4549),
  createData('Mar', 5489, 3422),
  createData('Apr', 2115, 2670),
  createData('May', 2115, 1344),
  createData('Jun', 6566, 3456),
  createData('Jul', 2115, 2000),
  createData('Aug', 2115, 4563),
  createData('Sep', 1000, 2345),
  createData('Oct', 2115, 2000),
  createData('Nov', 2115, 1000),
  createData('Des', 2115, 1000)
];


const App = () => {
    return (
        <>
            <LineChart width={730} height={250} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="red" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </>
)
}
export default App;