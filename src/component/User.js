
import React, { Component } from "react";
import axios from 'axios'
class AllData extends Component {
    constructor() {
        super();
        this.state = {
            covid: []
        }
    }
    GetApi = () => {
        axios.get('https://api.covidtracking.com/v1/states/current.json')
            .then(res => {
                // console.log(res);
                this.setState({covid:res.data})
            })
    }
    render() {
        const { covid } = this.state
        return (
            <>
                <h1 className="Heading">Good COVID 19 Dashboard  {this.GetApi()}</h1>
                <input className="input"  placeholder="search data"/>
                <div>
        <table className="boder" border='1'>
            <tr className="main">
            <td className="one">state</td>
            <td className="two">date</td>
            <td className="three">recovered</td>
            <td className="four">totalTestResults</td>
            </tr>

        </table>
                    {
                    covid.map(covid => {
                        return (
                            <div>

                                <table className="Table" border='2'>
                                    <tr className="ALL-APP">
                                        <td className="state">{covid.state}</td>
                                        <td className="date"> {covid.lastUpdateEt}</td>
                                        <td className="recovered">{covid.recovered}</td>
                                        <td className="totalTestResults">{covid.totalTestResults}</td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                }
                    <div>
                    </div>
                </div>
            </>
        )
    }
}
export default AllData;


