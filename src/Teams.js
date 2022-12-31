// Render props
//import DataLoader from './DataLoader';
import useData from './useData';
const urlTeams = 'https://www.balldontlie.io/api/v1/teams'

// function Teams({style}) {
//   return <DataLoader 
//     initialState={[]}
//     url={urlTeams}>
//       {(teams)=> (
//       <ul style={style}>
//         {teams.map((team) => (
//           <li key={team.id}>{team.full_name}</li>
//         ))}
//       </ul>
//     )}
//     </DataLoader>
// }

// export default Teams;

function Teams({style}) {
  const teams = useData({initialState: [], urlTeams})
  return (
    <ul style={style}>
        {teams.map((team) => (
          <li key={team.id}>{team.full_name}</li>
        ))}
      </ul>
  ) 
};

export default Teams;
