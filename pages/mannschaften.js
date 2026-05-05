import styled from "styled-components";
import TeamGrid from "@/components/teams/TeamGrid";
import { TEAMS } from "@/lib/teams";
import Script from "next/script";

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #292b2e;
  margin: 0 0 20px;
  text-align: center;
`;

export default function MannschaftenPage() {
  return (
    <Wrapper>
      <Script
        src="https://badminton-bbv.de/liga2/backend/widget.php"
        data-url="https://badminton-bbv.de/liga2/backend"
        className="bbv-script"
        strategy="afterInteractive"
      />

      <Title>Mannschaften 2025/2026</Title>
      <TeamGrid teams={TEAMS} />
    </Wrapper>
  );
}
