import React from "react";
import "./style.css";

const Projects = () => {
    return (
        <div className="mainText">
           <h1>This My Projects</h1> 
            <div className="infoTextDiv">
                <a href="https://github.com/datomaluta/homework6.git" target="_blank">Basics In JS</a> <br/>
                <a href="https://github.com/datomaluta/davalebaPopUp.git" target="_blank">PopUp Project</a> <br/>
                <a href="https://github.com/datomaluta/davalebaTodo.git" target="_blank">Todo List Project</a> <br/>
                <a href="https://github.com/datomaluta/davalebaContextMenu.git" target="_blank">Context Menu Project</a>
            </div>
        </div>
    )
}
export default Projects;