import React from "react";




const Child=({selectedOption,setSelectedOption})=>{

  const click1=()=>{

    setSelectedOption("option1")

  }

  const click2=()=>{

    setSelectedOption("option2")

  }



    return(

        <div className="child">

            <div className="child1">
            <button onClick={click1}>option1</button>
            </div>
            <div className="child2">
            <button onClick={click2}>option2</button>
                
            </div>

        </div>

    )
}
export default Child;