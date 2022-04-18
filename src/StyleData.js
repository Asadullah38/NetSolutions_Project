const StyleData = [{
        //bar 1    index 0
        width: "0px",
        transform: "translateY(-200px)",
        position: "fixed",
        background: "white",
    },
    {
        //bar 2    index 1
        marginTop: "15px",
        width: "40px",
        transform: "rotate(45deg)",
        background: "white",
    },
    {
        //bar 3    index 2
        width: "40px",
        transform: "rotate(-45deg) translate(8px, -8px)",
        background: "white",
    },
    {
        //Main Menu  index 3
        display: "flex",
        position: "fixed",
        top: "0%",
        animationName: "change",
        animationDuration: "1s",
        animationIterationCount: "1",
    },
    {
        //Nav Button    index 4

        zIndex: "130",
        background: "white",
        color: "black",
        border: "2px solid black",
    },

    //button scroll index 5
    { height: "36px", width: "200px", fontSize: "15px", marginLeft: "57%" },
    //button scroll + hover + menu index 6
    {

        background: "black",
        color: "white",
        border: "2px solid white"
    },
];
export default StyleData;