import React from "react"

const Education = ({ title, description }) => {
    return (
        <article className={"education"}>
            <h2>
                {
                    title
                }
            </h2>
            <div className={"description"}>
                {
                    description
                }
            </div>
        </article>
    )
}

export default Education