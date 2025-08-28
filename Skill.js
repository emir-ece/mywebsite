import React from "react"

import { HashLink } from "react-router-hash-link"

const Skill = ({ info, description, projects }) => {
    const projectComponents = []

    projects.forEach((project, index) => {
        projectComponents.push(
            <HashLink smooth key={index} to={"#" + project.id} className={"descriptor"}>
                {
                    project.label
                }
            </HashLink>
        )
    })

    return (
        <article id={info.id} className={"skill"}>
            <h2>
                {
                    info.label
                }
            </h2>
            <div className={"description"}>
                {
                    description
                }
            </div>
            {
                projects.length != 0 && (
                    <div className={"descriptors"}>
                        Projects:
                        {
                            projectComponents
                        }
                    </div>
                )
            }
        </article>
    )
}

export default Skill