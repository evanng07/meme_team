import Card from '../components/UI/Card'

const HomePage = () => {
    return (
        <>
            <div className = "wrapper">
                <Card 
                    img = "https://images-gmi-pmc.edge-generalmills.com/1dc0506e-8ac3-49eb-b05c-04f413a0f101.jpg"
                    body = "A super easy chicken pot pie recipe that will get your guests coming back!"
                    title = "Chicken Pot Pie in 20 minutes!"
                />

                <Card 
                    img = "https://thesaltymarshmallow.com/wp-content/uploads/2018/08/alfredo-sauce3.jpg"
                    body = "Traditional Alfredo is a simple white/cream sauce. It is made from butter, heavy cream, and parm..."
                    title = "Best Homemade Alfredo Sauce"
                />

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