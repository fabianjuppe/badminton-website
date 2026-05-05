import styled from "styled-components";
import TeamCard from "./TeamCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 20px;
`;

export default function TeamGrid({ teams }) {
  return (
    <Grid>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </Grid>
  );
}
