import withData from './withData';

function Players({ data: players }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{`${player.first_name} ${player.last_name}`}</li>
      ))}
    </ul>
  );
}

export default withData({
  url: 'https://www.balldontlie.io/api/v1/players',
  initialState: [],
})(Players);
