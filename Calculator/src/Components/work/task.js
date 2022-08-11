import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import "./task.css"

function Task() {
    const [data, setdata] = useState([])
    const [char, setChar] = useState("")
    const [amount, setAmount] = useState()
    const [number, setNumber] = useState(0)
    const [indexValue, setIndexValue] = useState()
    const [showUpdateButton, setshowUpdateButton] = useState("hahaha")
    const [hideDeleteButton, setHideDeleteButton] = useState("show")
    const TotalAmount = () => {
        // console.log("hello")
        // const addStudent = () => {
        if (char === "" || amount === "") {
            alert("please fill values")
        } else {
            let obj = {
                Charge: char,
                Amount: amount,
            }
            setdata(data.concat([obj]))
            console.log(data, "array of object")
            let num = +amount
            let totalNumber = num + number
            setNumber(totalNumber)
            setChar("")
            setAmount("")
        }
    }
    const ClearAll = () => {
        setdata([])
        setNumber(0)
        setHideDeleteButton("show")
        setAmount("")
        setChar("")

    }
    const Edit = () => {
        setChar("")
        setChar()
    }
    const update = () => {
        data[indexValue].Charge = char
        data[indexValue].Amount = amount
        setAmount("")
        setChar("")
        setshowUpdateButton("hahaha")
        setNumber(+amount + number)
        setHideDeleteButton("show")
    }
    return (
        <>
            <h1 className="head">BUDGET CALCULATOR</h1>
            <div className="main_div">
                <div className="upper_div">
                    <div className="inner_left_div">
                        <p className="inp_title">Charge</p>
                        <input className="inp1" type="text" placeholder="e.g.Rent" value={char} onChange={(e) => { setChar(e.target.value) }} />
                    </div>
                    <div className="inner_right_div">
                        <p className="inp_title_1">Amount</p>
                        <input className="inp2" type="number" placeholder="e.g.400" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                    </div>
                </div>

                {
                    showUpdateButton === "hahaha"
                        ?
                        <center><button className="btn" onClick={TotalAmount}>AddData<SendOutlined style={{ color: "black", paddingLeft: '5px' }} /> </button></center>
                        :
                        <center><button className="bttn" onClick={update}>Update Now<SendOutlined style={{ color: "black", paddingLeft: '5px' }}></SendOutlined></button></center>
                }
                {data.map((v, i) => {
                    // console.log(v,"data from map")
                    return (
                        <div>
                            <table>
                                <tr>
                                    <td className="td_1">{v.Charge}</td>
                                    <td className="td_1">{v.Amount}</td>
                                    {hideDeleteButton === "show"
                                        ?
                                        <td>
                                            <button className="btn_bt" onClick={() => {
                                                let totalCharge = data[i].Charge
                                                let TotalAmount = data[i].Amount
                                                setChar(totalCharge)
                                                setAmount(TotalAmount)
                                                setIndexValue(i)
                                                setshowUpdateButton("hohoho")
                                                let upd = +showUpdateButton
                                                let totalupd = upd + number
                                                setshowUpdateButton(totalupd)
                                                setNumber(number - data[i].Amount)
                                                setHideDeleteButton("hide")
                                            }} >Edit</button>
                                            <button className="btn_bt" onClick={() => {
                                                let dltNum = data[i].Amount
                                                setNumber(number - dltNum)
                                                let deleteone = data.filter((value, index) => {
                                                    return i != index
                                                })
                                                console.log(deleteone, "delete one")
                                                setdata(deleteone)
                                                setshowUpdateButton("hahaha")
                                                setNumber(number)
                                            }}> Delete</button></td>
                                        : <td>
                                            <button className="btn_btdis"  >Edit</button>
                                            <button className="btn_btdis" > Delete</button></td>
                                    }
                                </tr>
                            </table>
                        </div>
                    )
                })
                }
                {
                    number != 0 ?
                        <>
                            <h1 className="h1">
                                Total Amount:{number}
                            </h1>
                            <center><button className="click" onClick={ClearAll}>Clear All</button></center>
                        </>
                        : null
                    }
            </div>
        </>
    )
}
export default Task
