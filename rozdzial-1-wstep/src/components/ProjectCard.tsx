import { useState } from "react";
import type { ProjectCardProps } from "../models/ProjectCardProps";

export function ProjectCard(props: ProjectCardProps) {
    const [finished, setFinished] = useState(false);

    return (
        <div className="flex flex-col">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <ul>
                {props.technologies.map((tech) => (
                    <li key={tech.id}>
                        {tech.name}
                    </li>
                ))}
            </ul>
            <div>
                <p className="font-bold">Status: {finished ? "Ukończony" : "W trakcie"}</p>
                <button className="bg-blue-200 px-2 py-2" onClick={() => setFinished(prev => !prev)}>
                    Zmień status
                </button>
            </div>
        </div>
    )
}
