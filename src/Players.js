import withData from './withData';

const urlPlayers = 'https://www.balldontlie.io/api/v1/players'

function Players({ data: players }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{`${player.first_name} ${player.last_name}`}</li>
      ))}
    </ul>
  );
}

export default withData(Players,{ url: urlPlayers, initialState: []});
