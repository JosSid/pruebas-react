//import DataLoader from './DataLoader';
import useData from './useData';

// function Teams({ style }) {
//   return (
//     <DataLoader initialState={[]} url='https://www.balldontlie.io/api/v1/teams'>
//       {(teams) => (
//         <ul style={style}>
//           {teams.map((team) => (
//             <li key={team.id}>{team.full_name}</li>
//           ))}
//         </ul>
//       )}
//     </DataLoader>
//   );
// }

function Teams({ style }) {
    const teams = useData({
        initialState: [],
        url: 'https://www.balldontlie.io/api/v1/teams'
    })

    return (

          <ul style={style}>
            {teams.map((team) => (
              <li key={team.id}>{team.full_name}</li>
            ))}
          </ul>
        )

  }

export default Teams;
