import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const Player = styled.li`
  font-size: 0.78rem;
  color: #292b2e;
  white-space: nowrap;
`;

export default function PlayerList({ players }) {
  return (
    <List>
      {players.map((player) => (
        <Player key={player}>{player}</Player>
      ))}
    </List>
  );
}
