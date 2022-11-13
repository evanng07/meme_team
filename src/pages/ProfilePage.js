import { Stage, Layer, Line } from 'react-konva';


const ProfilePage = () => {
    return (
        <>
            <div className="centered">
                <p>Profile Page</p>
            </div>
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vh',  }}>
       
                {/*<Stage width={1200} height={500} x ={0} points = {[0,100, 100, 0, 0,  0, 100, 100]}>

                    <Layer>
                        <Line closed points={[1200, 500, 1200, 0, 0, 0, 0, 500]} fill="" stroke="black" strokeWidth={4}/>
                        <img src = "https://www.allrecipes.com/thmb/5yF5-8uC9mJAaTAB1zVwi2HymEE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1121232-338ebde283374ad7af578b1b75843717.jpg"/>

                    </Layer>                    
                </Stage>
                */} 
                
                <div class="item">
                    <img src = {"https://www.allrecipes.com/thmb/5yF5-8uC9mJAaTAB1zVwi2HymEE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1121232-338ebde283374ad7af578b1b75843717.jpg"}  alt = "whatever" />
                    <center> <h3 > Banana Pudding</h3></center> 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="item">
                    <img src = {"https://www.allrecipes.com/thmb/bIbjf7dj6FcAKW6Lb64cpgPHiDQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7707902-0ad180221b844e63a82d4fd81db2c8c0.jpg"}/>
                    <center> <h3> Caramel Cake</h3></center>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="item">
                    <img src = {"https://www.allrecipes.com/thmb/DQFQSpuzCw6D-tILRqvxGbAXZvU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/132703-chicken-with-lemon-caper-sauce-mfs-1x1-0435-0c76e2114f5e4a11918ced03f4d9dc8a.jpg"}/>
                    <center> <h3> Lemon-Caper Chicken</h3></center>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="item">
                    <img src = {"https://www.allrecipes.com/thmb/fmPq9CZWnxUDOtz8Il9WxsxFASs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6505068-baked-lemon-butter-chicken-thighs-France-C-4x3-1-16dbcf3a46694823b7cc504bf0f52c5b.jpg"}/>
                    <center> <h3> Butter Chicken Thighs</h3></center>
                </div>
                
                

                
            </div>
        </>
    )
}

export default ProfilePage
