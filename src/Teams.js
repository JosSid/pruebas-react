import { useEffect, useState } from "react";

export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams").then(response => response.json()).then(result => setTeams(result.data))
    }, [])

    return <ul>{teams.map(team => <li key={team.id}>{team.full_name}</li>)}</ul>;
}