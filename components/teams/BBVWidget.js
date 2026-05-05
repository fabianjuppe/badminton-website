import styled from "styled-components";

const Widget = styled.div`
  border: 1.5px solid #b1f2ff;
  border-radius: 8px;
  overflow-x: auto;
  background: #f8feff;
  margin: 20px auto 0;
  width: 100%;

  .bbv-widget-wrapper {
    border: none;
  }

  .bbv-widget-header {
    font-size: 11px;
    font-weight: 800;
    color: #108197;
    text-align: center;
    padding: 8px;
  }

  td,
  th {
    padding: 4px 6px;
    border-bottom: 1px solid #e6fbff;
    color: #292b2e;
    font-size: 12px !important;
    white-space: nowrap;
  }

  th {
    color: #108197;
    font-weight: 600;
  }
`;

export default function BBVWidget({ team, clubnr }) {
  return (
    <>
      <Widget
        className="bbv-widget"
        data-type="table"
        data-team={team}
        data-clubnr={clubnr}
      />

      <Widget
        className="bbv-widget"
        data-type="meetings"
        data-team={team}
        data-clubnr={clubnr}
      />
    </>
  );
}
