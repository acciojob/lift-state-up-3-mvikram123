import React from "react";




const Child=({selectedOption,setSelectedOption})=>{

  const click1=()=>{

    setSelectedOption("Option 1")

  }

  const click2=()=>{

    setSelectedOption("Option 2")

  }



    return(

        <div className="child">

            <div className="child1">
                <h1>Child Component1</h1>
            <button onClick={click1}>Option 1</button>
            </div>
            <div className="child2">
            <h1>Child Component2</h1>
            <button onClick={click2}>Option 2</button>
                
            </div>

        </div>

    )
}
export default Child;