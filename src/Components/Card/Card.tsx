import React from "react";
// import {CardImage} from "./CardImage";
// import {CardContent} from "./CardContent";
// import {CardActions} from "./CardActions";

type CardPropsType = {
    cardImageUrl: string,
    cardContentTitle?: string,
    cardContentDescription?: string
}
export function Card(props: CardPropsType) {
    console.log("Card rendering")
    return (
        <div>
            <CardImage image={props.cardImageUrl}/>
            <CardContent cardTitle={props.cardContentTitle || "Yo"}/>
            <CardActions/>
        </div>
    );
}


function CardImage(props: any) {
    return (<div>
        <img src={props.image} alt="fafs" />
    </div>
    );
}

function CardContent(props:any) {
    return (
        <div>
            <CardTitle title={props.cardTitle || "akgljaslgkj"}/>
            <CardDescription />
        </div>
    );
}

function CardTitle(props:any){
    return (
        <h2>
            {props.title || "Headline"}
        </h2>
    );
}

function CardDescription(){
    return (
        <p>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
        </p>
    );
}


function CardActions() {
    return (
        <div>
            <CardActionBtn/>
            <CardActionBtn/>
        </div>
    );
}
function CardActionBtn(){
    return (
        <div>Button</div>
    );
}
