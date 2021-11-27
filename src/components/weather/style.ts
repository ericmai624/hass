import { css } from 'lit';

const WARN = css`#FFFBE5`;

export default css`
  .not-found {
    flex: 1;
    background-color: ${WARN};
    padding: 8px;
  }
  .weather-current {
    box-sizing: border-box;
    display: grid;
    padding: 16px;
    grid-template-columns: 64px 1fr min-content;
    grid-column-gap: 16px;
  }
  .weather-current-icon {
    height: 64px;
    width: 64px;
  }
  .weather-current-temp-container {
    align-items: flex-top;
    display: flex;
    line-height: 1.2;
  }
  .weather-current-temp {
    font-size: 28px;
    margin-right: 4px;
  }
  .weathher-current-temp-unit {
    font-size: 24px;
  }
`;
