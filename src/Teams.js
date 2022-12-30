import withData from './withData';
const urlTeams = 'https://www.balldontlie.io/api/v1/teams'

function Teams({ data: teams , style}) {
  return (
    <ul style={style}>
      {teams.map((team) => (
        <li key={team.id}>{team.full_name}</li>
      ))}
    </ul>
  );
}

export default withData(Teams, { url: urlTeams, initialState: []});
