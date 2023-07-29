import React from 'react'

export default function About(props) {
    // const [mystyle,setmystyle]=useState({
    //     color:"white",
    //     backgroundColor:"black"
    // })
    let mystyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"#343a40":"white"
    }
    

    
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black",}}>
        <h2 className='my-3'>About Us</h2>
            <div class="accordion" id="accordionExample">
        <div class="card" >
            <div class="card-header" id="headingOne" style={mystyle} >
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                </button>
            </h2>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body" style={mystyle} >
                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingTwo" style={mystyle} >
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
            </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body" style={mystyle} >
                Some placeholder content for the second accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree" style={mystyle} >
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatiable</strong>
                </button>
            </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body" style={mystyle} >
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        </div>

    </div>
    </>
  )
}
