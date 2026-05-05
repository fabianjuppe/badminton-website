import styled from "styled-components";
import Image from "next/image";
import PlayerList from "./PlayerList";
import BBVWidget from "./BBVWidget";

const Wrapper = styled.article`
  background: white;
  border: 1.5px solid #b1f2ff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #374151;
  margin: 10px;
  text-align: center;
`;

const League = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #108197;
  background: #e6fbff;
  border: 1px solid #b1f2ff;
  border-radius: 999px;
  padding: 2px 10px;
  align-self: center;
`;

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Missing = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: #108197;
  letter-spacing: 0.06em;
  margin: 0;
  text-align: center;
`;

export default function TeamCard({ team }) {
  return (
    <Wrapper>
      <TeamName>{team.name}</TeamName>
      <League>{team.league}</League>

      <Body>
        <ImageWrapper>
          <Image src={team.image} fill alt={`${team.name} Mannschaftsfoto`} />
        </ImageWrapper>

        <PlayerWrapper>
          <PlayerList players={team.playersFirst} />
          <PlayerList players={team.playersSecond} />
          <Missing>Es fehlen:</Missing>
          <PlayerList players={team.missingPlayers} />
        </PlayerWrapper>

        {team.bbv && (
          <BBVWidget team={team.bbv.team} clubnr={team.bbv.clubnr} />
        )}
      </Body>
    </Wrapper>
  );
}
