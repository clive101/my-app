import React from 'react'
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section 
            title="Cars"
            description=""
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Test Drive"
            />

<Section 
            title="Houses"
            backgroundImg="model-s.jpg"
            leftBtnText="Viewing"
            rightBtnText="Pricing"
            />

            
<Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
