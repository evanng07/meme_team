import Card from '../components/UI/Card'

const HomePage = () => {
    return (
        <>
            <div className="centered">
                <p>Test</p>
            </div>

            <div className = "wrapper">
                <Card 
                    img = "https://images-gmi-pmc.edge-generalmills.com/1dc0506e-8ac3-49eb-b05c-04f413a0f101.jpg"
                    body = "A super easy chicken pot pie recipe that will get your guests coming back!"
                    title = "Chicken Pot Pie in 20 minutes!"
                />
            </div>
        </>
    )
}

export default HomePage;